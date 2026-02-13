// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("show");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  // Close menu when clicking a link (mobile)
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

// Reveal animations
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    });
  },{threshold:0.12});
  revealEls.forEach(el=>io.observe(el));
}

// Request Coverage form -> opens email client with prefilled email (works on GitHub Pages)
const quoteForm = document.getElementById("quoteForm");
if (quoteForm) {
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value?.trim() || "";
    const phone = document.getElementById("phone")?.value?.trim() || "";
    const service = document.getElementById("service")?.value?.trim() || "";
    const date = document.getElementById("date")?.value || "";
    const hours = document.getElementById("hours")?.value?.trim() || "";
    const location = document.getElementById("location")?.value?.trim() || "";
    const details = document.getElementById("details")?.value?.trim() || "";

    const to = "horacegreen64@icloud.com";
    const subject = `Security Coverage Request — ${service || "Inquiry"}`;
    const body =
`Hello Clients Security Solutions LLC,

My name is ${name}.
Phone: ${phone}

Service Needed: ${service}
Requested Date: ${date}
Hours Needed: ${hours}
Location (City/Area): ${location}

Details:
${details}

Thank you,
${name}`.trim();

    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}
