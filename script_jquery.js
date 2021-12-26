var elements;
var windowHeight;

function init() {
  elements = $(".hidden");
  windowHeight = $(window).innerHeight();
}

function checkPosition() {
  elements.each(function() {
    var element = $(this);
    var positionFromTop = element.offset().top;

    if (positionFromTop - $(window).scrollTop() - windowHeight <= 0) {
      console.log(element, positionFromTop, windowHeight);
      if (element.hasClass("ac"))
        element.addClass("animated-one");
      else if (element.hasClass("wcatir-text"))
        element.addClass("animated-two");
      else
        element.addClass("animated-three");
      element.removeClass("hidden");
    }
  });
}

$(document).ready(function() {
  var image = $("banner");
  $("body").fadeIn(1200);

  $(window).scroll(checkPosition);
  $(window).resize(init);

  init();
});



$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});