import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActive(pathname.startsWith("/projects") ? "work" : "");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ["top", ...navItems.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome, pathname]);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-border bg-background" : "border-transparent bg-background/0",
      )}
    >
      <nav aria-label="Primary" className="container-page flex h-14 items-center justify-between">
        <Link to="/" hash="top" className="text-[0.95rem] font-medium tracking-tight">
          Tejus Krishna
          <span className="ml-2 hidden font-serif text-base font-normal italic text-muted-foreground sm:inline">
            — portfolio
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to="/"
                hash={item.id}
                aria-current={active === item.id ? "location" : undefined}
                className={cn(
                  "link-draw text-sm transition-colors",
                  active === item.id
                    ? "text-foreground [background-size:100%_1px]"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="meta -mr-2 px-2 py-2 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: reduce ? 0 : -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border bg-background md:hidden"
          >
            <ul className="container-page pb-6 pt-2">
              {navItems.map((item) => (
                <li key={item.id} className="border-b border-border">
                  <Link
                    to="/"
                    hash={item.id}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-baseline justify-between py-4 font-serif text-3xl italic",
                      active === item.id ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                    {active === item.id && (
                      <span className="meta not-italic text-accent">here</span>
                    )}
                  </Link>
                </li>
              ))}
              <li className="pt-5">
                <a href={`mailto:${profile.email}`} className="meta link-rule text-foreground">
                  {profile.email}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}