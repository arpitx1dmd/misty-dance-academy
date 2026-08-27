/* =========================================
   PRELOADER
========================================= */

window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 800);

});



/* =========================================
   NAVBAR SCROLL
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});



/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");

});


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");
        document.body.classList.remove("menu-open");

    });

});



/* =========================================
   ACTIVE NAV LINK
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =========================================
   COUNTER ANIMATION
========================================= */

const counters = document.querySelectorAll("[data-target]");

const counterObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.max(
                1,
                Math.ceil(target / 60)
            );

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.textContent = target;

                    return;

                }

                counter.textContent = current;

                requestAnimationFrame(updateCounter);

            };

            updateCounter();

            counterObserver.unobserve(counter);

        });

    },
    {
        threshold: 0.5
    }
);


counters.forEach(counter => {

    counterObserver.observe(counter);

});



/* =========================================
   TESTIMONIAL SLIDER
========================================= */

const testimonials =
    document.querySelectorAll(".testimonial");

const nextButton =
    document.querySelector(".slider-btn.next");

const prevButton =
    document.querySelector(".slider-btn.prev");

let testimonialIndex = 0;


function showTestimonial(index) {

    testimonials.forEach(testimonial => {

        testimonial.classList.remove("active");

    });

    testimonials[index].classList.add("active");

}


nextButton.addEventListener("click", () => {

    testimonialIndex++;

    if (testimonialIndex >= testimonials.length) {
        testimonialIndex = 0;
    }

    showTestimonial(testimonialIndex);

});


prevButton.addEventListener("click", () => {

    testimonialIndex--;

    if (testimonialIndex < 0) {
        testimonialIndex = testimonials.length - 1;
    }

    showTestimonial(testimonialIndex);

});


/* Auto slider */

setInterval(() => {

    testimonialIndex++;

    if (testimonialIndex >= testimonials.length) {
        testimonialIndex = 0;
    }

    showTestimonial(testimonialIndex);

}, 6000);



/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.querySelector(".form-message");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    if (!name || !phone) {

        formMessage.textContent =
            "Please fill in your name and phone number.";

        return;

    }


    formMessage.textContent =
        "Thank you! Your enquiry has been received.";

    formMessage.style.color = "#e8ff3d";

    contactForm.reset();

});



/* =========================================
   BACK TO TOP
========================================= */

const backTop =
    document.querySelector(".back-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



/* =========================================
   IMAGE HOVER PARALLAX
========================================= */

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (event) => {

    if (window.innerWidth < 850) return;

    const x =
        (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 10;

    hero.style.backgroundPosition =
        `calc(50% + ${x}px) calc(50% + ${y}px)`;

});


hero.addEventListener("mouseleave", () => {

    hero.style.backgroundPosition = "center";

});
