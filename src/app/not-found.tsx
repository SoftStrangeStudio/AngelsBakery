import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section empty-state">
      <p className="eyebrow">JUST A FEW CRUMBS HERE</p>
      <h1>This treat wandered off.</h1>
      <p>Let’s find you something lovely instead.</p>
      <Link className="button primary" href="/menu/">
        Back to the menu
      </Link>
    </section>
  );
}
