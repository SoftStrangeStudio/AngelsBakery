import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, CalendarDays, ShoppingBag } from "lucide-react";
import { asset } from "@/lib/config";
export const faqs = [
  [
    "When is the bake sale?",
    "Angel’s Bakery holds its bake sale every Saturday from 4:00 PM to 7:00 PM.",
  ],
  [
    "Can I reserve an order yet?",
    "Not yet. The real Saturday menu is published, but prices, reservation rules, and the final ordering setup are still being approved. No orders or payments are being taken through the website yet.",
  ],
  [
    "Where is the Saturday bake sale?",
    "The bake-sale location will be published here after Angel confirms the final public location details.",
  ],
  [
    "Can you accommodate food allergies?",
    "Final ingredients and cross-contact information are still being confirmed. Please speak with the bakery before relying on any item for someone with an allergy.",
  ],
  [
    "When do I pay?",
    "Payment arrangements are not published yet. The website does not collect card details or payments.",
  ],
  [
    "Are these photos of the actual products?",
    "The menu uses AI-created editorial product imagery for the seven baked goods Angel has confirmed for the Saturday bake sale. Actual appearance may vary.",
  ],
];
export function InfoView({
  kind,
}: {
  kind: "pickup" | "about" | "faq" | "contact" | "privacy";
}) {
  if (kind === "about")
    return (
      <>
        <section className="section about-layout">
          <div>
            <p className="eyebrow">A LITTLE ABOUT ANGEL’S</p>
            <h1>
              Small moments.
              <br />
              <em>Sweet Saturdays.</em>
            </h1>
            <p className="lead">
              Angel’s Bakery is centered around a simple weekly bake sale every
              Saturday from 4–7 PM.
            </p>
            <p>
              The menu is focused on cookies, brownies, and muffins — familiar
              baked goods made for bringing home, sharing, or enjoying on the
              spot.
            </p>
            <p>
              Check the Saturday menu before you come by. Prices, location, and
              reservation details will be added as soon as Angel approves them.
            </p>
            <Link className="button primary" href="/menu/">
              See Saturday’s menu <ArrowRight size={18} />
            </Link>
          </div>
          <div className="about-photo">
            <Image
              src={asset("hero")}
              alt="Warm editorial spread of Angel’s Saturday bake-sale menu"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
          </div>
        </section>
        <section className="sweet-banner">
          <Heart size={35} strokeWidth={1} />
          <h2>
            Every Saturday.
            <br />
            <em>4–7 PM.</em>
          </h2>
        </section>
      </>
    );
  if (kind === "pickup")
    return (
      <section className="section narrow">
        <div className="page-heading">
          <p className="eyebrow">SATURDAY BAKE SALE · 4–7 PM</p>
          <h1>
            Saturday, <em>made sweeter.</em>
          </h1>
          <p>One weekly bake sale with Angel’s current menu in one place.</p>
        </div>
        <div className="info-steps">
          {[
            [
              ShoppingBag,
              "See this Saturday’s menu",
              "Browse the seven baked goods Angel has confirmed for the weekly bake sale.",
            ],
            [
              CalendarDays,
              "Come by from 4–7 PM",
              "The bake sale happens every Saturday from 4:00 PM to 7:00 PM.",
            ],
            [
              Heart,
              "Pick your favorites",
              "Prices, the public location, and reservation details will appear here after Angel approves them.",
            ],
          ].map(([Icon, title, text]) => {
            const I = Icon as typeof Heart;
            return (
              <article key={String(title)}>
                <I size={28} strokeWidth={1.3} />
                <div>
                  <h2>{String(title)}</h2>
                  <p>{String(text)}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="preview-notice">
          <p>
            <b>Location and reservation details are still being finalized.</b>
            <br />
            Saturday 4–7 PM is confirmed. The exact public location, prices,
            ordering rules, and payment arrangements will be published after
            Angel approves them.
          </p>
        </div>
        <Link className="button primary" href="/menu/">
          See Saturday’s menu <ArrowRight size={18} />
        </Link>
      </section>
    );
  if (kind === "faq")
    return (
      <section className="section narrow">
        <div className="page-heading">
          <p className="eyebrow">A FEW THINGS YOU MIGHT BE WONDERING</p>
          <h1>
            Good <em>questions.</em>
          </h1>
          <p>A little clarity before Saturday.</p>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
        <Link href="/contact/" className="text-link">
          Still have something on your mind? <ArrowRight size={16} />
        </Link>
      </section>
    );
  if (kind === "contact")
    return (
      <section className="section narrow empty-state">
        <Heart size={40} strokeWidth={1.2} />
        <p className="eyebrow">HELLO, SWEET THING</p>
        <h1>
          Let’s talk <em>treats.</em>
        </h1>
        <p>
          Have a question about Saturday’s menu?
          <br />
          We’re looking forward to hearing from you.
        </p>
        <div className="contact-card">
          <h2>Contact details are coming soon.</h2>
          <p>
            Angel’s public contact method is still being finalized. It will be
            published here before online reservations or customer information
            collection opens.
          </p>
        </div>
        <Link href="/faq/" className="button secondary">
          A few helpful answers <ArrowRight size={18} />
        </Link>
      </section>
    );
  return (
    <section className="section narrow legal">
      <p className="eyebrow">A LITTLE CARE WITH YOUR INFORMATION</p>
      <h1>
        Your <em>privacy.</em>
      </h1>
      <h2>While you explore</h2>
      <p>
        The site may save menu selections in your browser so your box survives a
        page refresh. Online ordering is not open, and the current public site
        does not send order requests.
      </p>
      <h2>When ordering opens</h2>
      <p>
        Order requests will send the customer details needed to handle a request
        to the bakery’s private Google service and order sheet. Do not include
        payment-card details or sensitive health information.
      </p>
      <h2>Before launch</h2>
      <p>
        The bakery will publish its contact information, data-retention period,
        and a way to request access or deletion before accepting real customer
        information. This notice will be updated at that time.
      </p>
      <Link className="text-link" href="/menu/">
        Back to Saturday’s menu <ArrowRight size={16} />
      </Link>
    </section>
  );
}
