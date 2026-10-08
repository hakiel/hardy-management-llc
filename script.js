// Hardy Management LLC — site interactions

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navItems = navLinks.querySelectorAll("a");
  const year = document.getElementById("year");
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  // Current year
  year.textContent = new Date().getFullYear();

  // Mobile navigation
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    document.body.classList.toggle("menu-open", isOpen);
  });

  // Close mobile navigation after selecting a section
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      document.body.classList.remove("menu-open");
    });
  });

  // Demo contact form behavior.
  // Replace this with Formspree, Netlify Forms, a backend, or another
  // form service when you want messages to be delivered automatically.
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.elements.name.value.trim();
    const email = contactForm.elements.email.value.trim();
    const message = contactForm.elements.message.value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please complete all fields.";
      return;
    }

    formMessage.textContent =
      "Thank you. Your inquiry is ready to be connected to the Hardy Management contact system.";

    contactForm.reset();
  });
});
