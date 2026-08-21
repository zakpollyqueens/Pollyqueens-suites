document.addEventListener("DOMContentLoaded", () => {

  /* ==============================
     MOBILE NAVIGATION
  ============================== */

  const menuToggle =
    document.querySelector(".menu-toggle");

  const nav =
    document.querySelector(".main-nav");


  if (menuToggle && nav) {

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );


    menuToggle.addEventListener("click", () => {

      const isOpen =
        nav.classList.toggle("show");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    });


    nav.querySelectorAll(".nav-link")
      .forEach((link) => {

        link.addEventListener("click", () => {

          nav.classList.remove("show");

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

        });

      });

  }


  /* ==============================
     CONTACT FORM
  ============================== */

  const form =
    document.getElementById("reachForm");


  if (form) {

    form.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        const name =
          document
            .getElementById("name")
            ?.value
            .trim();


        const email =
          document
            .getElementById("email")
            ?.value
            .trim();


        const message =
          document
            .getElementById("message")
            ?.value
            .trim();


        if (!name || !email) {

          alert(
            "Please enter your name and email address."
          );

          return;
        }


        alert(
          `Thank you, ${name}! ` +
          "Your message has been prepared. " +
          "To receive real submissions, connect " +
          "this form to a form service or backend."
        );


        form.reset();

      }
    );

  }

});
