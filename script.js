document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#navbar .nav-link");

  function updateActiveLink() {
    const currentPath = window.location.hash || "#";
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  }

  updateActiveLink(); // Initial call on page load

  window.addEventListener("hashchange", updateActiveLink); // Call when hash changes
});
