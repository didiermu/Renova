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

function efectoFade3() {
  var valor = 1;

  function sectionFade() {
    var sectionFade = $(".navegacion");
    sectionFade.each(function () {
      var posSection = $(this).offset().top - 40;
      var scrolleo = $(window).scrollTop();

      if (scrolleo > posSection) {
        // console.log("ya");
        $("body").css("overflow", "hidden");
        setTimeout(function () {
          valor = 0;
          console.log(valor);
        }, 1000);
      } else {
        valor = 1;
        console.log(valor);
        $("body").css("overflow", "auto");
        // console.log("no");
      }

      // scrollDwo();
    });
  }

  function scrollDwo() {
    var scrollableElement = document.body; //document.getElementById('scrollableElement');

    scrollableElement.addEventListener("wheel", checkScrollDirection);

    function checkScrollDirection(event) {
      if (valor == 1) {
        sectionFade();
      } else {
        $("body").css("overflow", "auto");
        // setTimeout(function () {
        //   // console.log(valor);
        // }, 2000);
      }

      // if (checkScrollDirectionIsUp(event)) {
      //   // $("body").css("overflow", "auto");
      //   console.log("UP");
      // } else {
      //   // $("body").css("overflow", "auto");
      //   console.log("down");
      // }
    }

    function checkScrollDirectionIsUp(event) {
      if (event.wheelDelta) {
        return event.wheelDelta > 0;
      }

      return event.deltaY < 0;
    }
  }
  scrollDwo();

  // $(document).scroll(function () {
  //   if (valor == 1) {
  //     sectionFade();
  //   } else {
  //     setTimeout(function () {
  //       $("body").css("overflow", "auto");
  //       valor = 0;
  //       // console.log(valor);
  //     }, 2000);
  //   }
  //   // sectionFade();
  // });
}

function stopScroll() {
  function sectionFade() {
    var sectionFade = $(".esfuerzo");
    var posSection = sectionFade.offset().top - 100;
    var scrolleo = $(window).scrollTop();

    if (scrolleo > posSection) {
      // $("html, body").animate(
      //   { scrollTop: $(".navegacion").offset().top - 20 },
      //   500
      // );
      // $("body").css("overflow", "hidden");
      scrollDwo();
    }
  }

  function scrollDwo() {
    var scrollableElement = document.body; //document.getElementById('scrollableElement');

    scrollableElement.addEventListener("wheel", checkScrollDirection);

    function checkScrollDirection(event) {
      if (checkScrollDirectionIsUp(event)) {
        console.log("UP");
        var sectionFade = $(".esfuerzo");
        var posSection = sectionFade.offset().top - 100;
        var scrolleo = $(window).scrollTop();

        if (scrolleo > posSection) {
          // $("html, body").animate(
          //   { scrollTop: $(".navegacion").offset().top - 20 },
          //   500
          // );
          $("body").css("background", "red");
        }
      } else {
        // $("body").css("overflow", "auto");

        // console.log(scrolleo, posSection);
        // if (posSection == 2594) {
        //   return $("body").css("overflow", "auto");
        // }

        console.log("down");
      }
    }

    function checkScrollDirectionIsUp(event) {
      if (event.wheelDelta) {
        return event.wheelDelta > 0;
      }

      return event.deltaY < 0;
    }
  }

  window.onscroll = function (ev) {
    // sectionFade();
    scrollDwo();
  };
}

function touchS() {
  var touchPos;

  // store the touching position at the start of each touch
  document.body.ontouchstart = function (e) {
    touchPos = e.changedTouches[0].clientY;
  };

  // detect wether the "old" touchPos is
  // greater or smaller than the newTouchPos
  document.body.ontouchmove = function (e) {
    let newTouchPos = e.changedTouches[0].clientY;
    if (newTouchPos > touchPos) {
      // console.log("finger moving down");
      $("body").css("background", "blue");
      $("body").css("overflow", "auto");

      $("body").removeClass("onn");
      // $("body").css("overflow", "auto");
    }
    if (newTouchPos < touchPos) {
      // console.log("finger moving up");
      // scrollDwo();
      // $("body").css("background", "blue");
      var sectionFade = $(".esfuerzo");
      var posSection = sectionFade.offset().top - 100;
      var scrolleo = $(window).scrollTop();

      if (scrolleo > posSection) {
        $("body").css("background", "red");
        $("body").addClass("onn");
        $("body").css("overflow", "hidden");
        $(".esfuerzo").css("overflow-y", "scroll");

        // alert(scrolleo, posSection);
        // if (posSection > 2700) {
        //   $("body").css("background", "green");
        //   // $("body").css("overflow", "auto");
        // }
        // setTimeout(function () {

        // }, 2000);
      } else {
        $("body").css("background", "green");
        $("body").removeClass("onn");
      }

      function scrollDwo() {
        var scrollableElement = document.body; //document.getElementById('scrollableElement');

        scrollableElement.addEventListener("wheel", checkScrollDirection);

        function checkScrollDirection(event) {
          if (checkScrollDirectionIsUp(event)) {
            console.log("UP");
            var sectionFade = $(".esfuerzo");
            var posSection = sectionFade.offset().top - 100;
            var scrolleo = $(window).scrollTop();

            if (scrolleo > posSection) {
              // $("html, body").animate(
              //   { scrollTop: $(".navegacion").offset().top - 20 },
              //   500
              // );
              $("body").css("background", "red");
            }
          } else {
            $("body").css("background", "blue");
            // $("body").css("overflow", "auto");

            // console.log(scrolleo, posSection);
            // if (posSection == 2594) {
            //   return $("body").css("overflow", "auto");
            // }
          }
        }

        function checkScrollDirectionIsUp(event) {
          if (event.wheelDelta) {
            return event.wheelDelta > 0;
          }

          return event.deltaY < 0;
        }
      }
    }

    if ($("body").hasClass("onn")) {
      // $("html, body").animate(
      //   { scrollTop: $(".navegacion").offset().top - 20 },
      //   500
      // );
    }
  };
}

$(document).ready(function () {
  if (window.location.href.indexOf("destacamos") > -1) {
    $("body").addClass("body-destacamos");
    $("#li-s3").addClass("activo");

    drawSvgDestacamos();
    carruselEsfuerzo();

    // stopScroll();
    touchS();
  }
});
