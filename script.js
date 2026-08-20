document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  menuToggle?.addEventListener("click", function () {
    mainNav?.classList.toggle("show");
  });

  if (window.location.pathname.includes("contacts.html")) {
    setActiveNav("Contacts");
  } else if (window.location.pathname.includes("reach-us.html")) {
    setActiveNav("Reach Us");
  } else {
    setActiveNav("Home");
  }

  const form = document.querySelector("#reachForm");
  form?.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector("#name")?.value.trim();
    const email = document.querySelector("#email")?.value.trim();
    const message = document.querySelector("#message")?.value.trim();

    if (!name || !email) {
      alert("Please enter your name and email before sending.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent. We will reply to ${email} soon.`);
    form.reset();
  });

  function setActiveNav(pageName) {
    navLinks.forEach((link) => {
      if (link.textContent?.trim() === pageName) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
});
