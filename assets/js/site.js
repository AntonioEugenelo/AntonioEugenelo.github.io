// Disclosure toggles for abstracts and citations, plus copy-to-clipboard
// for BibTeX. Without JavaScript every panel is simply shown open.
(function () {
  document.querySelectorAll("[data-toggle]").forEach(function (button) {
    var panel = document.getElementById(button.getAttribute("aria-controls"));
    if (!panel) return;

    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      panel.classList.toggle("is-open", !open);
    });
  });

  document.querySelectorAll(".bibtex .copy").forEach(function (button) {
    button.addEventListener("click", function () {
      var text = button.parentElement.querySelector("pre").textContent;
      var done = function () {
        var label = button.textContent;
        button.textContent = "Copied";
        setTimeout(function () { button.textContent = label; }, 1600);
      };
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(done);
      }
    });
  });
})();
