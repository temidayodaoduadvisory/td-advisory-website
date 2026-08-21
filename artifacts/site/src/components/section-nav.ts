import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Navigation to a home-page section, from anywhere on the site.
 *
 * The home page's nav has always worked by smooth-scrolling to an element id.
 * That breaks on any other route, where those elements don't exist, so off-home
 * we navigate to `/#<id>` instead and let `useHashScroll` finish the job once
 * the home page has mounted. On the home page the original behaviour is
 * preserved exactly.
 */
export function useSectionNav(): (id: string) => void {
  const [location, navigate] = useLocation();

  return (id: string) => {
    if (location === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate(`/#${id}`);
  };
}

/**
 * On the home page, scrolls to the section named by the URL hash after mount.
 * This is what makes an off-home nav click land in the right place.
 */
export function useHashScroll(): void {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;

    // Defer past paint so the target section has been laid out.
    const raf = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
    return () => cancelAnimationFrame(raf);
  }, []);
}
