const langToggle = document.getElementById("langToggle");
let isArabic = true;

langToggle.addEventListener("click", () => {
  const elements = document.querySelectorAll("[data-en]");
  elements.forEach(el => {
    const current = el.textContent;
    const alt = el.getAttribute("data-en");
    el.setAttribute("data-en", current);
    el.textContent = alt;
  });

  document.documentElement.lang = isArabic ? "en" : "ar";
  document.documentElement.dir = isArabic ? "ltr" : "rtl";
  langToggle.textContent = isArabic ? "AR" : "EN";
  isArabic = !isArabic;
});