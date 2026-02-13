const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("show");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  // Close menu after clicking a link (mobile UX)
  navLinks.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=>{
      if(navLinks.classList.contains("show")){
        navLinks.classList.remove("show");
        navToggle.setAttribute("aria-expanded","false");
      }
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Reveal animations
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
      io.unobserve(e.target);
    }
  });
},{threshold:0.12});
revealEls.forEach(el=>io.observe(el));
