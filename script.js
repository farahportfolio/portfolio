/* Mobile menu toggle. No other dependencies. */
(function () {
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".nav__menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    var open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  /* On mobile, let the dropdown buttons expand their own sub-lists. */
  document.querySelectorAll(".nav__dropbtn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (window.innerWidth <= 720) {
        var list = btn.nextElementSibling;
        list.style.display = list.style.display === "none" ? "block" : "none";
      }
    });
  });
})();
