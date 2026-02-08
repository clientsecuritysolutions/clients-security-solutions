const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("show");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("show");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Quote form (works on GitHub Pages via mailto)
const quoteForm = document.getElementById("quoteForm");
if (quoteForm) {
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const to = "horacegreen64@icloud.com";

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const hours = document.getElementById("hours").value.trim();
    const location = document.getElementById("location").value.trim();
    const details = document.getElementById("details").value.trim();

    const subject = encodeURIComponent(`Consultation Request: ${service} (${location})`);
    const body = encodeURIComponent(
`Clients Security Solutions LLC — New Consultation Request

Name: ${name}
Phone: ${phone}

Service Needed: ${service}
Requested Date: ${date}
Hours Needed: ${hours}
Location: ${location}

Details:
${details}

Text preferred: (903) 900-3480`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
