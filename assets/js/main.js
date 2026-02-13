// ===== Mobile Menu Toggle =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("show");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  // Close menu after clicking a link (mobile)
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => navLinks.classList.remove("show"));
  });
}

// ===== Year =====
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// ===== Scroll Reveal Animations =====
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

// ===== Request Quote: Open Email with Form Details =====
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

    const subject = encodeURIComponent("Security Coverage Request — Clients Security Solutions LLC");
    const body = encodeURIComponent(
`Hello Horace,

I would like to request security coverage.

Name: ${name}
Phone: ${phone}
Service Needed: ${service}
Requested Date: ${date}
Hours Needed: ${hours}
Location (City/Area): ${location}

Details:
${details}

Thank you,
${name}`
    );

    window.location.href = `mailto:horacegreen64@icloud.com?subject=${subject}&body=${body}`;
  });
}
