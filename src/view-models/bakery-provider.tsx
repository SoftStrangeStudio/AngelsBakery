"use client";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import type { CartItem, Customer, PickupOption, Receipt } from "@/domain/types";
import { sanitizeCart, setQuantity, cartTotal } from "@/services/cart-service";
type State = {
  items: CartItem[];
  hydrated: boolean;
  customer: Customer;
  pickup: PickupOption | null;
  receipt: Receipt | null;
  notice: string;
};
type Action =
  | { type: "hydrate"; items: CartItem[] }
  | { type: "quantity"; id: string; quantity: number; notice?: string }
  | { type: "customer"; customer: Customer }
  | { type: "pickup"; pickup: PickupOption }
  | { type: "receipt"; receipt: Receipt }
  | { type: "notice"; notice: string };
const initial: State = {
  items: [],
  hydrated: false,
  customer: { name: "", email: "", phone: "", notes: "" },
  pickup: null,
  receipt: null,
  notice: "",
};
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "hydrate":
      return { ...state, items: action.items, hydrated: true };
    case "quantity":
      return {
        ...state,
        items: setQuantity(state.items, action.id, action.quantity),
        notice: action.notice || "",
      };
    case "customer":
      return { ...state, customer: action.customer };
    case "pickup":
      return { ...state, pickup: action.pickup };
    case "receipt":
      return { ...initial, hydrated: true, receipt: action.receipt };
    case "notice":
      return { ...state, notice: action.notice };
  }
}
const Context = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
  total: number;
  count: number;
} | null>(null);
export function BakeryProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initial);
  useEffect(() => {
    try {
      dispatch({
        type: "hydrate",
        items: sanitizeCart(
          JSON.parse(localStorage.getItem("angels-bakery-bag-v1") || "[]"),
        ),
      });
    } catch {
      dispatch({ type: "hydrate", items: [] });
    }
  }, []);
  useEffect(() => {
    if (state.hydrated) {
      try {
        localStorage.setItem(
          "angels-bakery-bag-v1",
          JSON.stringify(state.items),
        );
      } catch {
        /* Browsing remains usable when storage is unavailable. */
      }
    }
  }, [state.items, state.hydrated]);
  useEffect(() => {
    if (!state.notice) return;
    const timer = setTimeout(
      () => dispatch({ type: "notice", notice: "" }),
      3500,
    );
    return () => clearTimeout(timer);
  }, [state.notice]);
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        total: cartTotal(state.items),
        count: state.items.reduce((sum, i) => sum + i.quantity, 0),
      }}
    >
      {children}
      <div
        className={`toast ${state.notice ? "visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {state.notice}
      </div>
    </Context.Provider>
  );
}
export function useBakery() {
  const context = useContext(Context);
  if (!context) throw new Error("BakeryProvider missing");
  return context;
}
