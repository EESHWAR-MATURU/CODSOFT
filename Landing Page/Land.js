// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Hamburger Menu ---
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav_links");

  hamburger.addEventListener("click", () => {
    // Toggle 'active' class to animate hamburger icon
    hamburger.classList.toggle("active");
    // Toggle 'active' class to slide nav links in/out
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll(".nav_links .link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // --- 2. Advanced: Scroll-Reveal Animation (Intersection Observer) ---
  // Select all elements with the "reveal" class
  const revealElements = document.querySelectorAll(".reveal");

  // Create a new Intersection Observer
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // If the element is intersecting (in view)
        if (entry.isIntersecting) {
          // Add the 'visible' class to trigger the CSS animation
          entry.target.classList.add("visible");
          // Optional: Stop observing the element once it's visible
          // revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  // Observe each "reveal" element
  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  // --- 3. Advanced: Parallax Scroll Effect ---
  const image1 = document.querySelector(".hero_image_1");
  const image2 = document.querySelector(".hero_image_2");

  window.addEventListener("scroll", () => {
    // Only apply parallax on desktop (where media query isn't active)
    if (window.innerWidth > 900) {
      const scrollY = window.scrollY;

      // Move images at different speeds for a 3D depth effect
      // The '50' and '-20' are their base translateY values from CSS
      image1.style.transform = `translateY(${50 + scrollY * 0.1}px)`;
      image2.style.transform = `translateY(${-20 + scrollY * 0.05}px)`;

      // Store these values in CSS variables for the hover effect
      image1.style.setProperty("--translate-y", `${50 + scrollY * 0.1}px`);
      image2.style.setProperty("--translate-y", `${-20 + scrollY * 0.05}px`);
    }
  });
});
