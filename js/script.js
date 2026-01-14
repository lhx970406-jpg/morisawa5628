document.addEventListener("DOMContentLoaded", function () {

  const targets = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  targets.forEach(function (target) {
    observer.observe(target);
  });

});
