// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a link is clicked (mobile)
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("show");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Contact form -> opens email client (works on GitHub Pages)
const form = document.getElementById("inquiryForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const hours = document.getElementById("hours").value.trim();
    const location = document.getElementById("location").value.trim();
    const details = document.getElementById("details").value.trim();

    const to = "horacegreen64@icloud.com";
    const subject = encodeURIComponent(`Service Inquiry: ${service} (${location})`);

    const bodyLines = [
      `Clients Security Solutions LLC - New Inquiry`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "N/A"}`,
      ``,
      `Service Needed: ${service}`,
      `Requested Date: ${date}`,
      `Hours Needed: ${hours}`,
      `Location: ${location}`,
      ``,
      `Details:`,
      `${details}`,
      ``,
      `Text preferred: (903) 900-3480`,
    ];

    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
