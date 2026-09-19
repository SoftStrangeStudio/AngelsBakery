"use client";
import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { useBakery } from "./bakery-provider";
import { GoogleOrderAdapter } from "@/adapters/google-order-adapter";
import { orderingEnabled, orderEndpoint } from "@/lib/config";
import { previewPickupOptions } from "@/services/pickup-service";
import { validateCustomer } from "@/services/order-service";
import type { Availability, OrderRequest } from "@/domain/types";
type AvailabilityState = {
  loading: boolean;
  data: Availability;
  error: string;
};
export function useOrderViewModel() {
  const bakery = useBakery();
  const gateway = useMemo(() => new GoogleOrderAdapter(orderEndpoint), []);
  const [availability, setAvailability] = useReducer(
    (_state: AvailabilityState, action: AvailabilityState) => action,
    {
      loading: true,
      data: { slots: [], pickupLocation: "", timezone: "" },
      error: "",
    },
  );
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const requestRef = useRef<{ fingerprint: string; id: string } | null>(null);
  useEffect(() => {
    let active = true;
    if (!orderingEnabled) {
      setAvailability({
        loading: false,
        data: {
          slots: previewPickupOptions(),
          pickupLocation: "Pickup address announced when orders open",
          timezone: "Preview times only",
        },
        error: "",
      });
      return;
    }
    gateway
      .availability()
      .then((data) => {
        if (active) setAvailability({ loading: false, data, error: "" });
      })
      .catch(() => {
        if (active)
          setAvailability({
            loading: false,
            data: { slots: [], pickupLocation: "", timezone: "" },
            error:
              "We couldn’t load pickup dates. Please refresh to try again.",
          });
      });
    return () => {
      active = false;
    };
  }, [gateway]);
  const customerErrors = validateCustomer(bakery.state.customer);
  const canReview =
    bakery.state.items.length > 0 &&
    !!bakery.state.pickup &&
    Object.keys(customerErrors).length === 0;
  async function submit() {
    if (busyRef.current) return false;
    if (!orderingEnabled) {
      setError(
        "This is a preview. No order has been sent, and no payment has been taken.",
      );
      return false;
    }
    if (
      !canReview ||
      !consent ||
      !availability.data.slots.some(
        (s) => s.id === bakery.state.pickup?.id && s.available,
      )
    ) {
      setError(
        "Please check your details and choose an available pickup date.",
      );
      return false;
    }
    busyRef.current = true;
    setBusy(true);
    setError("");
    const payload = {
      items: bakery.state.items,
      customer: bakery.state.customer,
      pickupId: bakery.state.pickup!.id,
      consent,
      website,
    };
    const fingerprint = JSON.stringify(payload);
    // Persist only random retry identity + a payload digest, never customer information.
    try {
      const digest = [
        ...new Uint8Array(
          await crypto.subtle.digest(
            "SHA-256",
            new TextEncoder().encode(fingerprint),
          ),
        ),
      ]
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      if (!requestRef.current) {
        try {
          requestRef.current = JSON.parse(
            sessionStorage.getItem("angels-order-retry") || "null",
          );
        } catch {
          /* private mode */
        }
      }
      if (requestRef.current?.fingerprint !== digest)
        requestRef.current = { fingerprint: digest, id: crypto.randomUUID() };
      try {
        sessionStorage.setItem(
          "angels-order-retry",
          JSON.stringify(requestRef.current),
        );
      } catch {
        /* in-memory retry still works */
      }
      const request: OrderRequest = {
        ...payload,
        requestId: requestRef.current.id,
      };
      const receipt = await gateway.submit(request);
      bakery.dispatch({ type: "receipt", receipt });
      try {
        sessionStorage.removeItem("angels-order-retry");
      } catch {
        /* optional storage */
      }
      return true;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "We couldn’t confirm your order. Please try again.",
      );
      return false;
    } finally {
      busyRef.current = false;
      setBusy(false);
    }
  }
  return {
    ...bakery,
    availability,
    busy,
    error,
    consent,
    setConsent,
    website,
    setWebsite,
    customerErrors,
    canReview,
    submit,
  };
}
