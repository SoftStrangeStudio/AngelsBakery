import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, CalendarDays, ShoppingBag } from "lucide-react";
import { asset } from "@/lib/config";
export const faqs = [
  [
    "Can I place an order yet?",
    "Not just yet. You’re exploring a preview of Angel’s Bakery. You can browse the sample menu and try building a box, but no real orders or payments are being taken.",
  ],
  [
    "How will pickup work?",
    "When ordering opens, you’ll choose an available date and collection window, send an order request, and receive confirmation from the bakery. The pickup address and instructions will be shared before you collect.",
  ],
  [
    "Can you accommodate food allergies?",
    "Final ingredients and cross-contact information are still being confirmed. Please speak with the bakery before ordering for anyone with an allergy. A note on an order is not confirmation that it can be accommodated.",
  ],
  [
    "When do I pay?",
    "This website does not collect card details or payments. Payment arrangements and the final total will be confirmed by the bakery before you commit.",
  ],
  [
    "What if I need to change my order?",
    "Contact the bakery using the details in your order confirmation, with your request number. Changes depend on the baking schedule and are not guaranteed.",
  ],
  [
    "Are these photos of the actual products?",
    "The preview uses AI-created editorial imagery to explore the feel of Angel’s Bakery. The sample products, prices, and pictures will be reviewed and replaced or approved before ordering opens.",
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
              <em>Sweet memories.</em>
            </h1>
            <p className="lead">
              A treat doesn’t need a special occasion. It can be the special
              occasion.
            </p>
            <p>
              That’s the feeling behind Angel’s Bakery: something warm,
              thoughtful, and just a little indulgent. A box to share with your
              favorite people. A quiet moment with your coffee. A sweet reason
              to slow down.
            </p>
            <p>
              We’re getting ready to share more. For now, take a look around our
              preview collection and imagine your next little happy moment.
            </p>
            <Link className="button primary" href="/menu/">
              Find something lovely <ArrowRight size={18} />
            </Link>
          </div>
          <div className="about-photo">
            <Image
              src={asset("hero")}
              alt="Sunlit pastry platter, created as editorial concept imagery"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
          </div>
        </section>
        <section className="sweet-banner">
          <Heart size={35} strokeWidth={1} />
          <h2>
            For the everyday.
            <br />
            <em>And the little celebrations.</em>
          </h2>
        </section>
      </>
    );
  if (kind === "pickup")
    return (
      <section className="section narrow">
        <div className="page-heading">
          <p className="eyebrow">YOUR DAY, A LITTLE SWEETER</p>
          <h1>
            Pickup, <em>made simple.</em>
          </h1>
          <p>Good things are worth looking forward to.</p>
        </div>
        <div className="info-steps">
          {[
            [
              ShoppingBag,
              "Choose your little treats",
              "Browse the collection and build your box. Sample menu items and prices are shown while we prepare to open.",
            ],
            [
              CalendarDays,
              "Pick a day that feels right",
              "Once orders open, available pickup dates and time windows will appear at checkout. Please wait for confirmation before making plans.",
            ],
            [
              Heart,
              "Come collect a little happiness",
              "The bakery will confirm your order, address, collection instructions, and payment arrangements. Bring your request number and your sweet tooth.",
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
            <b>A note before you plan your visit.</b>
            <br />
            Our pickup address, opening schedule, order cutoff, and payment
            arrangements haven’t been published yet. Preview dates are examples
            only.
          </p>
        </div>
        <Link className="button primary" href="/menu/">
          Find your little treat <ArrowRight size={18} />
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
          <p>A little clarity, before the first bite.</p>
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
          Planning a little celebration? Wondering about a pastry?
          <br />
          We’re looking forward to hearing from you.
        </p>
        <div className="contact-card">
          <h2>Our hello is coming soon.</h2>
          <p>
            We’re still setting up the bakery’s contact details. A direct way to
            reach us will be published here before orders open.
          </p>
          <p>
            No message form yet means no messages disappearing into the ether.
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
        This preview saves product selections in your browser so your box
        survives a page refresh. It does not send preview orders. Contact
        details entered into the preview stay in the page’s memory and disappear
        when it is reloaded. Please use fictional details to test it.
      </p>
      <h2>When real ordering opens</h2>
      <p>
        Order requests will send your name, email, optional phone, order
        details, pickup choice, and optional note to the bakery’s Google service
        and private order sheet. These details are for handling your request,
        not marketing. Do not include payment card details or sensitive health
        information.
      </p>
      <h2>Storage and site hosting</h2>
      <p>
        Your browser may store a random retry identifier and a digest of your
        request to help prevent duplicate submissions. The website does not use
        advertising trackers or analytics. GitHub Pages hosts the website and
        may process technical request information under its own privacy policy.
      </p>
      <h2>Before launch</h2>
      <p>
        The bakery must publish its contact information, data-retention period,
        and a way to request access or deletion before accepting real customer
        information. This notice will be updated at that time.
      </p>
      <Link className="text-link" href="/menu/">
        Back to the sweet things <ArrowRight size={16} />
      </Link>
    </section>
  );
}
