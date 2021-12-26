var elements;
var windowHeight;

function init() {
  elements = document.getElementsByClassName("hidden");
  windowHeight = window.innerHeight;
}

function checkPosition() {
  for (var i = 0; i < elements.length; i++) {
    var positionFromTop = elements[i].getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      if (elements[i].classList.contains("ac"))
        elements[i].classList.add("animated-one");
      else if (elements[i].classList.contains("wcatir-text"))
        elements[i].classList.add("animated-two");
      else
        elements[i].classList.add("animated-three");
      elements[i].classList.remove("hidden");
    }
  }
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);

init();
checkPosition();