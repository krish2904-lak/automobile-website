

    // Contact form submission
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault(); // Prevent form from refreshing the page on submit

            // Collect form data
            const formData = {
                name: document.getElementById("name").value,
                mobile: document.getElementById("mobile").value,
                email: document.getElementById("email").value,
                subject: document.getElementById("subject").value || "No Subject",
                message: document.getElementById("message").value
            };

            // Display a confirmation alert (replace with server submission logic as needed)
            alert(`Thank you, ${formData.name}! Your message has been received.`);

            // Clear the form
            contactForm.reset();
        });
    }
    document.addEventListener("DOMContentLoaded", () => {
        const welcomeSection = document.querySelector("#welcome");
    
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    welcomeSection.classList.add("fade-in");
                }
            },
            { threshold: 0.5 }
        );
    
        observer.observe(welcomeSection);
    });
    document.addEventListener("DOMContentLoaded", () => {
        const priceFilter = document.getElementById("price-filter");
        const productCards = document.querySelectorAll(".product-card");
    
        priceFilter.addEventListener("change", () => {
            const filterValue = priceFilter.value;
            productCards.forEach((card) => {
                const price = parseInt(card.getAttribute("data-price"), 10);
    
                if (filterValue === "all") {
                    card.style.display = "block";
                } else {
                    const [min, max] = filterValue.split("-").map(Number);
                    if (price >= min && price <= max) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                }
            });
        });
    });
    
  
    