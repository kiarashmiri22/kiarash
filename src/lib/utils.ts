import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Smoothly scrolls to the element referenced by an in-page anchor link
 * (e.g. "/#contact" or "#contact"), regardless of whether the URL hash
 * already matches — this is what makes repeat clicks on the same nav
 * link keep working, since Next.js/the browser won't re-trigger a jump
 * on their own when the hash doesn't change.
 *
 * Returns true if a matching element was found and scrolled to (in which
 * case the caller should call event.preventDefault() to stop the
 * default link navigation), false otherwise (caller should let the
 * default navigation happen, e.g. for links to other pages).
 */
export function scrollToAnchor(href: string): boolean {
  if (typeof window === "undefined") return false;

  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return false;

  const id = href.slice(hashIndex + 1);
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior: "smooth", block: "start" });

  if (window.location.hash !== `#${id}`) {
    window.history.replaceState(null, "", `#${id}`);
  }

  return true;
}
