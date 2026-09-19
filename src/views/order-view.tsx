"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Heart,
  Check,
  CalendarDays,
} from "lucide-react";
import { useOrderViewModel } from "@/view-models/use-order-view-model";
import { useBakery } from "@/view-models/bakery-provider";
import { catalogService } from "@/services/catalog-service";
import { asset, money, dateLabel, orderingEnabled } from "@/lib/config";
export function OrderView({ review = false }: { review?: boolean }) {
  const vm = useOrderViewModel();
  const router = useRouter();
  const [attempted, setAttempted] = useState(false);
  const { state, dispatch, total } = vm;
  if (!state.hydrated)
    return (
      <section className="section empty-state" aria-busy="true">
        <p>Making room for something lovely…</p>
      </section>
    );
  if (!state.items.length)
    return (
      <section className="section empty-state">
        <ShoppingBag size={44} strokeWidth={1.2} />
        <p className="eyebrow">SO MANY LOVELY POSSIBILITIES</p>
        <h1>Your box is waiting.</h1>
        <p>Let’s put something sweet in it.</p>
        <Link className="button primary" href="/menu/">
          Explore the good stuff <ArrowRight size={18} />
        </Link>
      </section>
    );
  return (
    <section className="section order-page">
      <div className="page-heading">
        <p className="eyebrow">A LITTLE HAPPINESS, COMING TOGETHER</p>
        <h1>
          {review ? (
            <>
              One last <em>little look.</em>
            </>
          ) : (
            <>
              Your box of <em>joy.</em>
            </>
          )}
        </h1>
        <p>
          {review
            ? "Everything look lovely? Here’s what happens next."
            : "Your favorites. A day to look forward to. Let’s make it yours."}
        </p>
      </div>
      <ol className="checkout-steps" aria-label="Order progress">
        <li className="done">01 Your treats</li>
        <li className={!review ? "current" : "done"}>02 Pickup & details</li>
        <li className={review ? "current" : ""}>03 A little review</li>
      </ol>
      {!orderingEnabled && (
        <div className="preview-notice">
          <Heart size={20} />
          <div>
            <b>Just a little preview for now.</b>
            <p>
              Try building a box. Products, prices, and dates are samples.
              Nothing will be ordered or charged. Please use made-up details
              while exploring.
            </p>
          </div>
        </div>
      )}
      <div className="checkout-grid">
        <div>
          {review ? (
            <div className="review-details">
              <h2>Made for you.</h2>
              <h3>Your pickup</h3>
              <p>
                {state.pickup
                  ? `${dateLabel(state.pickup.date)} · ${state.pickup.window}`
                  : "No pickup selected"}
              </p>
              <p>{vm.availability.data.pickupLocation}</p>
              <h3>Your details</h3>
              <p>
                {state.customer.name}
                <br />
                {state.customer.email}
                <br />
                {state.customer.phone}
              </p>
              {state.customer.notes && (
                <>
                  <h3>Your note</h3>
                  <p>{state.customer.notes}</p>
                </>
              )}
              <Link href="/order/" className="text-link">
                <ArrowLeft size={16} /> Change my details
              </Link>
              <div className="allergen-note">
                <p>
                  No payment is collected on this website. A received request is
                  not a confirmed reservation. The bakery will confirm
                  availability, pickup details, and payment arrangements
                  separately.
                </p>
              </div>
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={vm.consent}
                  onChange={(e) => vm.setConsent(e.target.checked)}
                />
                <span>
                  I understand this is an order request, and I agree to the{" "}
                  <Link href="/privacy/">privacy notice</Link>. Allergy and
                  pickup details must be confirmed with the bakery.
                </span>
              </label>
              <label className="honeypot" aria-hidden="true">
                Website
                <input
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={vm.website}
                  onChange={(e) => vm.setWebsite(e.target.value)}
                />
              </label>
              {vm.error && (
                <p className="form-error" role="alert">
                  {vm.error}
                </p>
              )}
              <button
                className="button primary full"
                disabled={
                  vm.busy ||
                  (orderingEnabled &&
                    (!vm.consent || !vm.canReview || vm.availability.loading))
                }
                onClick={async () => {
                  if (await vm.submit()) router.push("/order/confirmation/");
                }}
              >
                {vm.busy
                  ? "Saving your sweet request…"
                  : orderingEnabled
                    ? "Send my order request"
                    : "Preview only — orders open soon"}
                {!vm.busy && <ArrowRight size={18} />}
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAttempted(true);
                if (vm.canReview) router.push("/order/review/");
              }}
            >
              <section className="form-section">
                <h2>
                  <span>01</span> Make a little date.
                </h2>
                <p>
                  {orderingEnabled
                    ? "Choose your available collection window."
                    : "Sample pickup dates — these are not reservations."}
                </p>
                {vm.availability.loading && (
                  <p role="status">Finding your pickup dates…</p>
                )}
                {vm.availability.error && (
                  <p className="form-error" role="alert">
                    {vm.availability.error}
                  </p>
                )}
                <fieldset className="pickup-options">
                  <legend className="sr-only">Choose a pickup date</legend>
                  {vm.availability.data.slots.map((slot) => (
                    <label
                      key={slot.id}
                      className={`pickup-option ${state.pickup?.id === slot.id ? "selected" : ""} ${!slot.available ? "unavailable" : ""}`}
                    >
                      <input
                        type="radio"
                        name="pickup"
                        value={slot.id}
                        checked={state.pickup?.id === slot.id}
                        disabled={!slot.available}
                        required
                        onChange={() =>
                          dispatch({ type: "pickup", pickup: slot })
                        }
                      />
                      <CalendarDays size={19} />
                      <b>{dateLabel(slot.date)}</b>
                      <span>
                        {slot.available ? slot.window : "All tucked up — full"}
                      </span>
                    </label>
                  ))}
                </fieldset>
                <p className="field-help">
                  {vm.availability.data.pickupLocation}
                  {orderingEnabled && ` · ${vm.availability.data.timezone}`}
                </p>
                {attempted && !state.pickup && (
                  <p className="form-error">
                    Choose a pickup date to continue.
                  </p>
                )}
              </section>
              <section className="form-section">
                <h2>
                  <span>02</span> Who’s the lucky one?
                </h2>
                <p>A few details so we can look after your order.</p>
                <div className="field-grid">
                  {(["name", "email", "phone"] as const).map((key) => (
                    <label key={key} className={key === "name" ? "wide" : ""}>
                      {key === "name"
                        ? "Your name"
                        : key === "email"
                          ? "Email address"
                          : "Phone (optional)"}
                      <input
                        required={key !== "phone"}
                        type={
                          key === "email"
                            ? "email"
                            : key === "phone"
                              ? "tel"
                              : "text"
                        }
                        autoComplete={
                          key === "name"
                            ? "name"
                            : key === "email"
                              ? "email"
                              : "tel"
                        }
                        maxLength={
                          key === "name" ? 80 : key === "email" ? 254 : 25
                        }
                        value={state.customer[key]}
                        onChange={(e) =>
                          dispatch({
                            type: "customer",
                            customer: {
                              ...state.customer,
                              [key]: e.target.value,
                            },
                          })
                        }
                        aria-invalid={attempted && !!vm.customerErrors[key]}
                        aria-describedby={
                          attempted && vm.customerErrors[key]
                            ? `${key}-error`
                            : undefined
                        }
                      />
                      {attempted && vm.customerErrors[key] && (
                        <span className="form-error" id={`${key}-error`}>
                          {vm.customerErrors[key]}
                        </span>
                      )}
                    </label>
                  ))}
                  <label className="wide">
                    A little note (optional)
                    <textarea
                      placeholder="A gift? A special occasion? Tell us a little more."
                      maxLength={500}
                      value={state.customer.notes}
                      onChange={(e) =>
                        dispatch({
                          type: "customer",
                          customer: {
                            ...state.customer,
                            notes: e.target.value,
                          },
                        })
                      }
                    />
                    <span className="field-help">
                      Please don’t include sensitive health or payment
                      information.
                    </span>
                  </label>
                </div>
              </section>
              <button
                className="button primary full"
                type="submit"
                disabled={vm.availability.loading || !!vm.availability.error}
              >
                Review my little box <ArrowRight size={18} />
              </button>
              <p className="field-help centered">
                No payment taken. No account needed.
              </p>
            </form>
          )}
        </div>
        <aside className="order-summary">
          <div className="summary-heading">
            <h2>The good stuff</h2>
            <ShoppingBag size={22} />
          </div>
          {state.items.map((item) => {
            const product = catalogService.find(item.productId)!;
            return (
              <div className="cart-row" key={item.productId}>
                <Image
                  src={asset(product.image)}
                  alt=""
                  width={100}
                  height={85}
                />
                <div>
                  <Link href={`/menu/${product.id}/`}>{product.name}</Link>
                  <span>{money(product.price)}</span>
                  <div className="quantity-control">
                    <button
                      aria-label={`Remove one ${product.name}`}
                      disabled={vm.busy}
                      onClick={() =>
                        dispatch({
                          type: "quantity",
                          id: product.id,
                          quantity: item.quantity - 1,
                        })
                      }
                    >
                      <Minus size={13} />
                    </button>
                    <span aria-live="polite">{item.quantity}</span>
                    <button
                      aria-label={`Add one ${product.name}`}
                      disabled={item.quantity >= 12 || vm.busy}
                      onClick={() =>
                        dispatch({
                          type: "quantity",
                          id: product.id,
                          quantity: item.quantity + 1,
                        })
                      }
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                </div>
                <b>{money(product.price * item.quantity)}</b>
              </div>
            );
          })}
          <Link className="text-link" href="/menu/">
            Room for one more? <Plus size={15} />
          </Link>
          <div className="total">
            <span>{orderingEnabled ? "Estimated total" : "Sample total"}</span>
            <strong>{money(total)}</strong>
          </div>
          <p className="field-help">
            Final price and any applicable tax confirmed by the bakery before
            payment.
          </p>
          <p className="summary-love">
            <Heart size={16} /> A little extra joy, just for you.
          </p>
        </aside>
      </div>
    </section>
  );
}
export function ConfirmationView() {
  const { state } = useBakery();
  const receipt = state.receipt;
  if (!receipt)
    return (
      <section className="section empty-state">
        <Heart size={44} />
        <h1>Looking for your request?</h1>
        <p>
          There’s no verified order receipt in this session. If you already sent
          a request, don’t place another until you’ve checked with the bakery.
        </p>
        <Link className="button secondary" href="/menu/">
          Back to the good stuff
        </Link>
      </section>
    );
  return (
    <section className="section empty-state confirmation">
      <span className="confirmation-mark">
        <Check size={38} />
      </span>
      <p className="eyebrow">A LITTLE HAPPINESS IS IN THE WORKS</p>
      <h1>
        Thank you, <em>sweet thing.</em>
      </h1>
      <p>Your request was received. The bakery still needs to confirm it.</p>
      <div className="receipt">
        <p>
          Request <strong>{receipt.orderId}</strong>
        </p>
        <p>
          {dateLabel(receipt.pickupDate)} · {receipt.pickupWindow}
        </p>
        <p>Estimated total: {money(receipt.total)}</p>
      </div>
      <p>
        Keep your request number. Pickup and payment arrangements will be
        confirmed separately. No payment has been taken.
      </p>
      <Link className="button primary" href="/menu/">
        Back for another look <ArrowRight size={18} />
      </Link>
    </section>
  );
}
