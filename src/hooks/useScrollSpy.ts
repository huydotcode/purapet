import { useState, useEffect } from "react";

export function useScrollspy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState("");

  const idsStr = sectionIds.join(",");

  useEffect(() => {
    const ids = idsStr.split(",").filter(Boolean);
    if (ids.length === 0) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Check if we are at the bottom of the page
          const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;

          if (isAtBottom) {
            setActiveSection(ids[ids.length - 1]);
            ticking = false;
            return;
          }

          // Check if we are at the top of the page
          if (window.scrollY < 50) {
            setActiveSection(ids[0]);
            ticking = false;
            return;
          }

          // Check which section occupies the threshold marker (35% from viewport top)
          let currentSection = "";
          const threshold = window.innerHeight * 0.35;

          for (const id of ids) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= threshold && rect.bottom > threshold) {
                currentSection = id;
                break;
              }
            }
          }

          if (currentSection) {
            setActiveSection(currentSection);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [idsStr]);

  return activeSection;
}
