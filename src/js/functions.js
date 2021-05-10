// $("#modalVideo").modal().show;

/// HEADER

function menu(){
	$(".header--navegacion .btn").on("click", function () {
        $(".header").toggleClass("headerOn");
        $(this).toggleClass("nav-on");
    });
	
}

/// EFECTOS

 
function efectoFade() {
        
	function sectionFade() {
		var sectionFade = $("section");
		sectionFade.each(function () {
			var posSection = $(this).offset().top - 300;
			var scrolleo = $(window).scrollTop();
			
			if (scrolleo > posSection) {
				$(this).find($(".objetFade")).addClass("transition1");
				$("section").removeClass("sectionOn");
				$(this).addClass("sectionOn");
			} else {
				
				$(this).find($(".objetFade")).removeClass("transition1");
				
			}
		});
		
		if ($(".home .dedicamos").hasClass("sectionOn") || $(".home .promos").hasClass("sectionOn") || $(".body-materiales .hero").hasClass("sectionOn") || $(".materiales .promos").hasClass("sectionOn") || $(".body-destacamos .hero").hasClass("sectionOn") || $(".body-destacamos .valores").hasClass("sectionOn") || $(".body-destacamos .esfuerzo").hasClass("sectionOn")  || $(".body-servicios .hero").hasClass("sectionOn") || $(".body-servicios .nuestros").hasClass("sectionOn")){
			$(".header").addClass("black");
		}
		
		else{
			$(".header").removeClass("black");
		}
		
		if ($(".promos").hasClass("sectionOn")){
			setTimeout(function(){
				$(".promos .objetFade").addClass("objetFade-On");
			},2000);
		}
		
		else{
			$(".promos .objetFade").removeClass("objetFade-On");
		}
	}
	 
 
	sectionFade();
	 
	
	$(document).scroll(function() {
		sectionFade();
	});
	
}

function imgParallax(){
	//$('.img-holder-promos').imageScroll({
	//	container: $('.promos--img'),
	//	speed:.4,
	//});	
	$('.img-holder-hero').imageScroll({
		container: $('.hero'),
		speed:.9,
	});		
}

function drawSvg(){
	function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

	var $pathAyuda = $("#pathAyuda");
	var $pathDedicamos = $("#pathDedicamos");
	var $pathPromos = $("#pathPromos");
	var $pathContacto = $("#pathContacto");

	// prepare SVG
	
	pathPrepare($pathAyuda);
	pathPrepare($pathDedicamos);
	pathPrepare($pathPromos);
	pathPrepare($pathContacto);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	
	var tween2 = new TimelineMax()
		.add(TweenMax.to($pathAyuda, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
		.add(TweenMax.to("path", 1, {ease:Linear.easeNone}), 0);
	
	var tween3 = new TimelineMax()
		.add(TweenMax.to($pathDedicamos, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
		.add(TweenMax.to("path", 1, {ease:Linear.easeNone}), 0);
	
	var tween4 = new TimelineMax()
		.add(TweenMax.to($pathPromos, 0.8, {strokeDashoffset: 0, ease:Linear.easeNone}))
		.add(TweenMax.to("path", 1, {ease:Linear.easeNone}), 0);
	
	var tween5 = new TimelineMax()
		.add(TweenMax.to($pathContacto, 0.6, {strokeDashoffset: 0, ease:Linear.easeNone}))
		.add(TweenMax.to("path", 1, {ease:Linear.easeNone}), 0);

	// build scene
	
	var scene2 = new ScrollMagic.Scene({triggerElement: "#triggerAyuda", duration: 600, tweenChanges: true})
					.setTween(tween2)
					.addTo(controller);
					
	var scene3 = new ScrollMagic.Scene({triggerElement: "#triggerDedicamos", duration: 600, tweenChanges: true})
					.setTween(tween3)
					.addTo(controller);
	
	var scene4 = new ScrollMagic.Scene({triggerElement: "#triggerPromos", duration: 600, tweenChanges: true})
					.setTween(tween4)
					.addTo(controller);
	
	var scene5 = new ScrollMagic.Scene({triggerElement: "#triggerContacto", duration: 600, tweenChanges: true})
					.setTween(tween5)
					.addTo(controller);
}


$(document).ready(function(){
	menu();
	//imgParallax();
	efectoFade();
	$(window).enllax();	
	
	if ( window.location.pathname == "/"){
		drawSvg();
	}
	
});



