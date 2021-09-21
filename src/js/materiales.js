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

function tabsMateriales() {
  $(".swiper-slide a").on("click", function (e) {
    var srcImg = $(this).attr("id").replace("-tab", "");

    //console.log( $(".grid--img source").attr("srcset").split("/")[3] );
    //console.log( $(".grid--img img").attr("src").split("/")[3] );
    //console.log(srcImg);

    switch (srcImg) {
      case "retorno":
        $(".grid--img source").attr(
          "srcset",
          "http://www.muum.live/RenovaIndustrial/wp-content/themes/Renova/assets/img/Desktop/3Materiales/01-retornoindustrial.webp"
        );
        $(".grid--img img").attr(
          "src",
          "http://www.muum.live/RenovaIndustrial/wp-content/themes/Renova/assets/img/Desktop/3Materiales/01-retornoindustrial.png"
        );

        break;
      case "plasticos":
        $(".grid--img source").attr(
          "srcset",
          "http://www.muum.live/RenovaIndustrial/wp-content/themes/Renova/assets/img/Desktop/3Materiales/02-plasticos.webp"
        );
        $(".grid--img img").attr(
          "src",
          "http://www.muum.live/RenovaIndustrial/wp-content/themes/Renova/assets/img/Desktop/3Materiales/02-plasticos.png"
        );

        break;
      case "metales":
        $(".grid--img source").attr(
          "srcset",
          "http://www.muum.live/RenovaIndustrial/wp-content/themes/Renova/assets/img/Desktop/3Materiales/03-metalesyacero.webp"
        );
        $(".grid--img img").attr(
          "src",
          "http://www.muum.live/RenovaIndustrial/wp-content/themes/Renova/assets/img/Desktop/3Materiales/03-metalesyacero.png"
        );

        break;

      case "materiales":
        $(".grid--img source").attr(
          "srcset",
          "http://www.muum.live/RenovaIndustrial/wp-content/themes/Renova/assets/img/Desktop/3Materiales/04-materialescomerciales.webp"
        );
        $(".grid--img img").attr(
          "src",
          "http://www.muum.live/RenovaIndustrial/wp-content/themes/Renova/assets/img/Desktop/3Materiales/04-materialescomerciales.png"
        );

        break;
      case "carton":
        $(".grid--img source").attr(
          "srcset",
          "http://www.muum.live/RenovaIndustrial/wp-content/themes/Renova/assets/img/Desktop/3Materiales/05-cartonymadera.webp"
        );
        $(".grid--img img").attr(
          "src",
          "http://www.muum.live/RenovaIndustrial/wp-content/themes/Renova/assets/img/Desktop/3Materiales/05-cartonymadera.png"
        );

        break;
      case "basura":
        $(".grid--img source").attr(
          "srcset",
          "http://www.muum.live/RenovaIndustrial/wp-content/themes/Renova/assets/img/Desktop/3Materiales/06-gestiondebasura.webp"
        );
        $(".grid--img img").attr(
          "src",
          "http://www.muum.live/RenovaIndustrial/wp-content/themes/Renova/assets/img/Desktop/3Materiales/06-gestiondebasura.png"
        );

        break;

      default:
        break;
    }
  });
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
      },
      992: {
        spaceBetween: 30,
        //slidesOffsetAfter:40,
        allowTouchMove: false,
      },
    },
  });

  tabsMateriales();

  $(".swiper-slide").on("click", function (e) {
    var active = $(this).attr("aria-label").split("/")[0] - 1;

    $(".swiper-slide").removeClass("active");
    $(this).addClass("active");

    mySwiper.slideTo(active, 1000, true);
  });
}

function carruselPromos() {
  var swiperP = new Swiper(".sliderPromosN", {
    direction: "horizontal",
    centeredSlidesBounds: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    slidesOffsetAfter: 30,
    allowTouchMove: false,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: "#prev2",
      prevEl: "#prev1",
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  function reee() {
    if ($(window).width() > 992) {
      $(".sliderPromos").addClass("sliderPromosN");
      console.log("si");
    } else {
      swiperP.destroy();
      $(".sliderPromos").attr("class", "sliderPromos");
      console.log("no");
    }

    setTimeout(function () {
      swiperP = new Swiper(".sliderPromosN", {
        direction: "horizontal",
        centeredSlidesBounds: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        slidesOffsetAfter: 30,
        allowTouchMove: false,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: "#prev2",
          prevEl: "#prev1",
        },

        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
    }, 1);
  }

  reee();

  $(window).resize(function () {
    reee();
  });

  // if (!$(window).width() < 992) {
  //   console.log("si");
  // } else {
  //   console.log("no");
  //   swiperP.destroy();
  // }

  // $(window).resize(function () {
  //   if (!$(window).width() < 992) {
  //     console.log("si r");
  //   } else {
  //     console.log("no r");

  //     swiperP.destroy();
  //   }
  // });
}

// function reee() {
//   if ($(window).width() > 992) {
//     $(".sliderPromos").addClass("sliderPromosN");
//     console.log("si");
//   } else {
//     $(".sliderPromos").attr("class", "sliderPromos");
//     $(".sliderPromos").destroy();
//     console.log("no");
//   }

//   setTimeout(function () {
//     carruselPromos();
//   }, 1000);
// }
// // reee();

// $(window).resize(function () {
//   reee();
// });

$(document).ready(function () {
  if (window.location.href.indexOf("materiales") > -1) {
    $("#li-s2").addClass("activo");

    anclas();

    carruselMateriales();
    carruselPromos();

    drawSvgMateriales();
  }
});
