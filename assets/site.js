// Replace these two settings with the church's real details before publishing.
const CHURCH_EMAIL = "ADD-CHURCH-EMAIL@example.com";
const FACEBOOK_PAGE_URL = "https://www.facebook.com/profile.php?id=100094600783937";
const toggle = document.querySelector(".toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("open", !expanded);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false");
}));
const fb = document.getElementById("fb-link");
const fbFrame = document.getElementById("fb-frame");
const fbFeed = document.getElementById("fb-feed");
if (fb && !FACEBOOK_PAGE_URL.includes("ADD-CHURCH-PAGE")) {
  fb.href = FACEBOOK_PAGE_URL;
  const pluginUrl = "https://www.facebook.com/plugins/page.php?href=" +
    encodeURIComponent(FACEBOOK_PAGE_URL) +
    "&tabs=timeline&width=480&height=620&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false";
  fbFrame.src = pluginUrl;
  fbFeed.classList.add("ready");
} else if (fb) {
  fb.addEventListener("click", e => {
    e.preventDefault(); alert("Add the church Facebook page URL in assets/site.js first.");
  });
}
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  if (CHURCH_EMAIL.includes("ADD-CHURCH-EMAIL")) {
    document.getElementById("form-note").textContent = "Please add the church email address in assets/site.js before using the contact form.";
    return;
  }
  const d = new FormData(e.currentTarget);
  const subject = encodeURIComponent("Website enquiry from " + d.get("name"));
  const body = encodeURIComponent("Name: " + d.get("name") + "\nEmail: " + d.get("email") + "\n\n" + d.get("message"));
  location.href = `mailto:${CHURCH_EMAIL}?subject=${subject}&body=${body}`;
});
