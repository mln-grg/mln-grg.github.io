// Mirror the prev/next links at the foot of a project page as fixed side arrows.
(function () {
  var bar = document.querySelector(".pagenav");
  if (!bar) return;
  Array.prototype.forEach.call(bar.querySelectorAll("a"), function (a) {
    var next = a.classList.contains("next");
    var b = document.createElement("a");
    b.className = "sidenav " + (next ? "next" : "prev");
    b.href = a.getAttribute("href");
    b.title = a.textContent.replace(/[←→]/g, "").trim();
    b.setAttribute("aria-label", b.title);
    b.textContent = next ? "\u203A" : "\u2039";
    document.body.appendChild(b);
  });
})();
