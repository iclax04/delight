import { Link } from "@tanstack/react-router";
import { btn } from "@/lib/ui";

export function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-start justify-center px-4 py-20">
      <p className="text-sm font-semibold tracking-widest text-electric-deep uppercase">404</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-navy">That page is not in the shop.</h1>
      <p className="mt-3 text-muted">
        The link may be old. Browse the catalogue or go back to the Delight Gadgets homepage.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/" className={btn("navy")}>
          Home
        </Link>
        <Link to="/shop" className={btn("line")}>
          Shop gadgets
        </Link>
      </div>
    </main>
  );
}
