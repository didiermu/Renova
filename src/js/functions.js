// $("#modalVideo").modal().show;

/// HEADER

function menu() {
    $("#linkContacto").on("click", function() {
        $("html, body").animate({
                scrollTop: $(".contacto").offset().top - 90
            },
            1500
        );

        return false;
    });
}

/// EFECTOS

function efectoFade() {
    function sectionFade() {
        var sectionFade = $("section");
        sectionFade.each(function() {
            var mediaqueryList = window.matchMedia("(max-width: 992px)");
            if (mediaqueryList.matches) {
                var posSection = $(this).offset().top - 600;
                //console.log("mobile home")
            } else {
                var posSection = $(this).offset().top - 300;
                //console.log("d home");
            }

            //var posSection = $(this).offset().top - 300;
            var scrolleo = $(window).scrollTop();

            if (scrolleo > posSection) {
                $(this).find($(".objetFade")).addClass("transition1");
                $("section").removeClass("sectionOn");
                $(this).addClass("sectionOn");
                // startPlayback();
            } else {
                $(this).find($(".objetFade")).removeClass("transition1");
            }
        });

        if (
            $(".home .ayuda").hasClass("sectionOn") ||
            $(".home .dedicamos").hasClass("sectionOn") ||
            $(".home .contacto").hasClass("sectionOn") ||
            $(".body-materiales .hero").hasClass("sectionOn") ||
            $(".materiales .promos").hasClass("sectionOn") ||
            $(".body-destacamos .hero").hasClass("sectionOn") ||
            $(".body-destacamos .valores").hasClass("sectionOn") ||
            $(".body-destacamos .esfuerzo").hasClass("sectionOn") ||
            $(".body-destacamos .dedicamos").hasClass("sectionOn") ||
            $(".body-servicios .hero").hasClass("sectionOn") ||
            $(".servicios .nuestros").hasClass("sectionOn")
        ) {
            $(".header").addClass("black");
        } else {
            $(".header").removeClass("black");
        }

        // if ($(".contacto").hasClass("sectionOn")){
        // 	setTimeout(function(){
        // 		$(".promos .objetFade").addClass("objetFade-On");
        // 	},2000);
        // }

        // else{
        // 	$(".promos .objetFade").removeClass("objetFade-On");
        // }
    }

    sectionFade();

    $(document).scroll(function() {
        sectionFade();
    });
}

function drawSvg() {
    function pathPrepare($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
    }

    var $pathAyuda = $("#pathAyuda");
    var $pathDedicamos = $("#pathDedicamos");
    // var $pathPromos = $("#pathPromos");
    var $pathContacto = $("#pathContacto");

    // prepare SVG

    pathPrepare($pathAyuda);
    pathPrepare($pathDedicamos);
    // pathPrepare($pathPromos);
    pathPrepare($pathContacto);

    // init controller
    var controller = new ScrollMagic.Controller();

    // build tween

    var tween2 = new TimelineMax()
        .add(
            TweenMax.to($pathAyuda, 0.5, {
                strokeDashoffset: 0,
                ease: Linear.easeNone,
            })
        )
        .add(TweenMax.to("path", 1, {
            ease: Linear.easeNone
        }), 0);

    var tween3 = new TimelineMax()
        .add(
            TweenMax.to($pathDedicamos, 0.5, {
                strokeDashoffset: 0,
                ease: Linear.easeNone,
            })
        )
        .add(TweenMax.to("path", 1, {
            ease: Linear.easeNone
        }), 0);

    // var tween4 = new TimelineMax()
    // 	.add(TweenMax.to($pathPromos, 0.8, {strokeDashoffset: 0, ease:Linear.easeNone}))
    // 	.add(TweenMax.to("path", 1, {ease:Linear.easeNone}), 0);

    var tween5 = new TimelineMax()
        .add(
            TweenMax.to($pathContacto, 0.6, {
                strokeDashoffset: 0,
                ease: Linear.easeNone,
            })
        )
        .add(TweenMax.to("path", 1, {
            ease: Linear.easeNone
        }), 0);

    // build scene

    var scene2 = new ScrollMagic.Scene({
            triggerElement: "#triggerAyuda",
            duration: 600,
            tweenChanges: true,
        })
        .setTween(tween2)
        .addTo(controller);

    var scene3 = new ScrollMagic.Scene({
            triggerElement: "#triggerDedicamos",
            duration: 600,
            tweenChanges: true,
        })
        .setTween(tween3)
        .addTo(controller);

    // var scene4 = new ScrollMagic.Scene({triggerElement: "#triggerPromos", duration: 600, tweenChanges: true})
    // 				.setTween(tween4)
    // 				.addTo(controller);

    var scene5 = new ScrollMagic.Scene({
            triggerElement: "#triggerContacto",
            duration: 600,
            tweenChanges: true,
        })
        .setTween(tween5)
        .addTo(controller);
}

var video;
var canvas;
var wrapVideo = document.querySelector("videoDesktop");

function startPlayback() {
    if (!video) {
        video = document.createElement('video');
        video.src = '../video/videoDesktop.mp4';
        video.loop = true;
        video.addEventListener('playing', paintVideo);
    }
    video.play();
}

function paintVideo() {
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        //   document.wrapVideo.appendChild(canvas);
        $("#videoDesktop").append(canvas);
    }
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    if (!video.paused)
        requestAnimationFrame(paintVideo);
}

const videoURL = () => {
    var mediaqueryList = window.matchMedia("(max-width: 992px)");
    if (mediaqueryList.matches) {
        console.log("d");
        // $("#videoDesktop").attr("autoplay",true);
        $("#videoDesktop").play();
    } else {
        $("#videoMobile").attr("autoplay");
        console.log("m");
    }
}

$(function() {
    menu();
    efectoFade();
    $(window).enllax();

    if (
        window.location.pathname == "/" ||
        window.location.pathname == "/renova-industrial/" ||
        window.location.pathname == "/RenovaIndustrial/" ||
        // stage
        window.location.pathname == "/stage/"
    ) {
        drawSvg();
        // videoURL();
        // $(window).resize(function(){
        //     videoURL();
        // });
        console.log("vi4");

    }
});