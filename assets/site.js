```javascript
const CHURCH_EMAIL = "ADD-CHURCH-EMAIL@example.com";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/profile.php?id=100094600783937";

const toggle = document.querySelector(".toggle");
const nav = document.getElementById("nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open", !expanded);
  });

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const fb = document.getElementById("fb-link");

if (fb) {
  fb.href = FACEBOOK_PAGE_URL;
}

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    if (CHURCH_EMAIL.includes("ADD-CHURCH-EMAIL")) {
      document.getElementById("form-note").textContent =
        "Please add the church email address in assets/site.js.";
      return;
    }

    const d = new FormData(e.currentTarget);

    const subject = encodeURIComponent(
      "Website enquiry from " + d.get("name")
    );

    const body = encodeURIComponent(
      "Name: " + d.get("name") +
      "\nEmail: " + d.get("email") +
      "\n\n" + d.get("message")
    );

    location.href =
      `mailto:${CHURCH_EMAIL}?subject=${subject}&body=${body}`;
  });
}
```
