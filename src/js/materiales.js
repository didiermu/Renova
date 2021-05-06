function drawSvgMateriales(){
	function pathPrepare ($el) {
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
		.add(TweenMax.to($pathDedicamos, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
		.add(TweenMax.to("path", 1, {ease:Linear.easeNone}), 0);
	

	var tween5 = new TimelineMax()
		.add(TweenMax.to($pathContacto, 0.6, {strokeDashoffset: 0, ease:Linear.easeNone}))
		.add(TweenMax.to("path", 1, {ease:Linear.easeNone}), 0);

	// build scene
	
			
	var scene3 = new ScrollMagic.Scene({triggerElement: "#triggerDedicamos", duration: 600, tweenChanges: true})
					.setTween(tween3)
					.addTo(controller);
	
	var scene5 = new ScrollMagic.Scene({triggerElement: "#triggerContacto", duration: 600, tweenChanges: true})
					.setTween(tween5)
					.addTo(controller);
}

function tabsMateriales(){
	$('.swiper-slide a').on('click', function (e) {
		
		$('.swiper-slide').removeClass("active");
		$(this).parent(".swiper-slide").addClass("active");
		
	});
}

function carruselMateriales(){
	var mySwiper = new Swiper(".sliderMateriales", {
		direction: 'horizontal',
		loop:true,
		centeredSlidesBounds:true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints:{
			320: {
				slidesPerView: "1",
				spaceBetween: 10,
				allowTouchMove:true,
			},
			992: {
                slidesPerView: "auto",
                spaceBetween: 30,
                //slidesOffsetAfter:40,
                allowTouchMove:false,
				
			}
		}
	});
}

function carruselPromos(){
	var mySwiper2 = new Swiper(".sliderPromos", {
		direction: 'horizontal',
		centeredSlidesBounds:true,
		navigation: {
			nextEl: '#prev2',
			prevEl: '#prev1',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable:true,
		},
		breakpoints:{
			320: {
				slidesPerView: "1",
				spaceBetween: 10,
				allowTouchMove:true,
			},
			992: {
                slidesPerView: "auto",
                spaceBetween: 10,
                slidesOffsetAfter:30,
                allowTouchMove:false,
				
			}
		}
	});
}

$(document).ready(function(){
	if(window.location.href.indexOf("materiales") > -1){
        tabsMateriales();
        carruselMateriales();
        carruselPromos();
		drawSvgMateriales();
    }
	
});
