/* =========================================
   HARDY MANAGEMENT LLC
   Website interactions
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Mobile navigation
    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuToggle.textContent = isOpen ? "×" : "☰";

        });

        // Close the mobile menu after selecting a link
        navigation.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                navigation.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");

                menuToggle.textContent = "☰";

            });

        });

    }


    // Automatic copyright year
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // Quote form
    const quoteForm = document.getElementById("quote-form");
    const formStatus = document.getElementById("form-status");

    if (quoteForm && formStatus) {

        quoteForm.addEventListener("submit", (event) => {

            // Prevent a page reload.
            event.preventDefault();

            // Browser validation is also enabled through HTML attributes.
            if (!quoteForm.checkValidity()) {

                quoteForm.reportValidity();

                return;

            }

            /*
             * IMPORTANT:
             *
             * This is a front-end demonstration.
             *
             * No customer data is sent or stored.
             *
             * Connect a form backend or email service before
             * accepting real customer quote requests.
             */

            formStatus.textContent =
                "Your form is ready, but online submission has not been " +
                "activated yet. Please connect a form service before " +
                "accepting customer requests.";

            formStatus.style.color = "#946b25";

        });

    }

});