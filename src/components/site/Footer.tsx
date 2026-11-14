import { Link } from "@tanstack/react-router";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="container-page pb-10 pt-4">
      <div className="meta grid gap-3 border-t border-rule pt-5 sm:grid-cols-3">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="sm:text-center">Set in Instrument Sans &amp; Serif, with IBM Plex Mono.</p>
        <p className="sm:text-right">
          <Link to="/" hash="top" className="link-draw hover:text-foreground">
            Back to top ↑
          </Link>
        </p>
      </div>
    </footer>
  );
}