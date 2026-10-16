const sections = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
  );

  for (const section of sections) {
    section.classList.add("reveal-enabled");
    observer.observe(section);
  }
}
