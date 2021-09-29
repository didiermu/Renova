function drawSvgDestacamos() {
  function pathPrepare($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
  }

  var $pathDedicamos = $("#pathDedicamos");
  var $pathMision = $("#pathMision");
  var $pathAyuda = $("#pathAyuda");
  var $pathEsfuerzo = $("#pathEsfuerzo");

  // prepare SVG

  pathPrepare($pathDedicamos);
  pathPrepare($pathMision);
  pathPrepare($pathAyuda);
  pathPrepare($pathEsfuerzo);

  // init controller
  var controller = new ScrollMagic.Controller();

  // build tween

  var tween1 = new TimelineMax()
    .add(
      TweenMax.to($pathDedicamos, 0.5, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(TweenMax.to("path", 1, { ease: Linear.easeNone }), 0);

  var tween2 = new TimelineMax()
    .add(
      TweenMax.to($pathMision, 0.3, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(TweenMax.to("path", 1, { ease: Linear.easeNone }), 0);

  var tween3 = new TimelineMax()
    .add(
      TweenMax.to($pathAyuda, 0.6, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(TweenMax.to("path", 1, { ease: Linear.easeNone }), 0);

  var tween4 = new TimelineMax()
    .add(
      TweenMax.to($pathEsfuerzo, 0.6, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(TweenMax.to("path", 1, { ease: Linear.easeNone }), 0);

  // build scene

  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#triggerDedicamos",
    duration: 600,
    tweenChanges: true,
  })
    .setTween(tween1)
    .addTo(controller);

  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#triggerMision",
    duration: 600,
    tweenChanges: true,
  })
    .setTween(tween2)
    .addTo(controller);

  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#triggerAyuda",
    duration: 600,
    tweenChanges: true,
  })
    .setTween(tween3)
    .addTo(controller);

  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#triggerEsfuerzo",
    duration: 600,
    tweenChanges: true,
  })
    .setTween(tween4)
    .addTo(controller);
}

function carruselEsfuerzo() {
  var swiperEsfuerzo = new Swiper(".slideresfuerzo", {
    loop: true,
    direction: "horizontal",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    navigation: {
      nextEl: "#next1",
      prevEl: "#prev1",
    },
    breakpoints: {
      320: {
        slidesPerView: "1",
        spaceBetween: 10,
        allowTouchMove: true,
        centeredSlidesBounds: true,
      },
      992: {
        slidesPerView: "1",
        allowTouchMove: false,
      },
    },
  });
}

$(document).ready(function () {
  if (window.location.href.indexOf("destacamos") > -1) {
    $("body").addClass("body-destacamos");
    $("#li-s3").addClass("activo");

    drawSvgDestacamos();
    carruselEsfuerzo();
  }
});
