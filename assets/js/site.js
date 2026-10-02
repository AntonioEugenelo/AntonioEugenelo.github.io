// Disclosure toggles for abstracts and citations, plus copy-to-clipboard
// for BibTeX. Without JavaScript every panel is simply shown open.
(function () {
  // Keep a link to an individual paper or section when changing language.
  // The underlying links also work without JavaScript.
  var languageSwitch = document.querySelector("[data-language-switch]");
  if (languageSwitch) {
    var languageHref = languageSwitch.getAttribute("href").split("#")[0];
    var updateLanguageLink = function () {
      languageSwitch.setAttribute("href", languageHref + window.location.hash);
    };
    updateLanguageLink();
    window.addEventListener("hashchange", updateLanguageLink);
  }

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
        button.textContent = document.documentElement.lang === "it" ? "Copiato" : "Copied";
        setTimeout(function () { button.textContent = label; }, 1600);
      };
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(done);
      }
    });
  });
})();
