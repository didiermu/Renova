function anclas() {
  $(".hero--links__link").on("click", function () {
    var nameLi = $(this).attr("id").replace("link-", ""),
      nameSection = $("." + nameLi).offset().top;

    $("html, body").animate(
      { scrollTop: (nameSection = $("." + nameLi).offset().top - 90) },
      1500
    );

    return false;
  });
}

function drawSvgMateriales() {
  function pathPrepare($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
  }

  var $pathDedicamos = $("#pathDedicamos");
  var $pathContacto = $("#pathContacto");

  // prepare SVG

  pathPrepare($pathDedicamos);
  pathPrepare($pathContacto);

  // init controller
  var controller = new ScrollMagic.Controller();

  // build tween

  var tween3 = new TimelineMax()
    .add(
      TweenMax.to($pathDedicamos, 0.5, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(TweenMax.to("path", 1, { ease: Linear.easeNone }), 0);

  var tween5 = new TimelineMax()
    .add(
      TweenMax.to($pathContacto, 0.6, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(TweenMax.to("path", 1, { ease: Linear.easeNone }), 0);

  // build scene

  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#triggerDedicamos",
    duration: 600,
    tweenChanges: true,
  })
    .setTween(tween3)
    .addTo(controller);

  var scene5 = new ScrollMagic.Scene({
    triggerElement: "#triggerContacto",
    duration: 600,
    tweenChanges: true,
  })
    .setTween(tween5)
    .addTo(controller);
}

function comboMateriales(mediaqueryList) {
  var mediaqueryList = window.matchMedia("(max-width: 992px)");

  if (mediaqueryList.matches) {
    $(".tab-pane").each(function (i, v) {
      var contenidoTab = $(this);
      var titleTab = $(this).data("title");

      $(".tab-content").append(
        "<div class='acordeon'><button type='button' data-toggle='collapse' data-target='#collapseExample" +
          i +
          "' aria-expanded='false' aria-controls='collapseExample'>" +
          titleTab +
          "</button><div class='collapse' id='#collapseExample" +
          i +
          "'><div class='card card-body'>" +
          contenidoTab.html() +
          "</div></div></div>"
      );
    });

    $(".tab-content").addClass("col-12");

    $(".acordeon").on("click", function () {
      $(".acordeon").find("button").attr("aria-expanded", "false");
      $(".acordeon").find(".collapse").removeClass("show");
      $(this).find("button").attr("aria-expanded", "true");
      $(this).find(".collapse").toggleClass("show");

      var nameLi = $(this).offset().top;

      $("html, body").animate({ scrollTop: nameLi - 90 }, 1000);
    });
  } else {
    $(".acordeon").remove();
  }
}

function carruselMateriales() {
  var mySwiper = new Swiper(".sliderMateriales", {
    direction: "horizontal",
    loop: true,
    centeredSlidesBounds: true,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
        allowTouchMove: true,
        loop: false,
      },
      992: {
        spaceBetween: 30,
        //slidesOffsetAfter:40,
        loop: true,
        allowTouchMove: false,
      },
    },
  });

  $(".swiper-slide").on("click", function (e) {
    var active = $(this).attr("aria-label").split("/")[0] - 1;

    $(".swiper-slide").removeClass("active");
    $(this).addClass("active");

    mySwiper.slideTo(active, 1000, true);
  });
}

$(document).ready(function () {
  if (window.location.href.indexOf("materiales") > -1) {
    $("body").addClass("body-materiales");
    $("#li-s2").addClass("activo");

    anclas();

    carruselMateriales();

    drawSvgMateriales();

    $(window).resize(function () {
      comboMateriales();
    });
  }
});
