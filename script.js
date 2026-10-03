
document.addEventListener("DOMContentLoaded", () => {

    // Mobile navigation

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-link");

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });


    // Close mobile menu after selecting a section

    navItems.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });


    // Typing animation

    const typingText = document.getElementById("typing-text");

    const roles = [
        "AI/ML Enthusiast",
        "Java Programmer",
        "Web Developer",
        "Data Analytics Learner"
    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (deleting) {
            characterIndex--;
        } else {
            characterIndex++;
        }

        typingText.textContent =
            currentRole.substring(0, characterIndex);

        let delay = deleting ? 45 : 85;

        if (!deleting && characterIndex === currentRole.length) {

            deleting = true;
            delay = 1300;

        } else if (deleting && characterIndex === 0) {

            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 350;

        }

        setTimeout(typeEffect, delay);

    }

    typeEffect();


    // Scroll reveal animation

    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });


    // Active navigation highlighting

    const sections = document.querySelectorAll("main section[id]");

    function updateActiveLink() {

        let currentSection = "home";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 160;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }

        });

        navItems.forEach(link => {

            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${currentSection}`
            );

        });

    }

    window.addEventListener("scroll", updateActiveLink);


    // Back to top button

    const backToTop = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {

        backToTop.classList.toggle(
            "show",
            window.scrollY > 400
        );

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // Dynamic footer year

    document.getElementById("year").textContent =
        new Date().getFullYear();


    console.log("Praveena's Portfolio Loaded Successfully!");

});