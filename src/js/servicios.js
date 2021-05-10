
function drawSvgServicios(){
	function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

	var $pathNuestros = $("#pathNuestros");
	var $pathCertificaciones = $("#pathCertificaciones");

	// prepare SVG
	
	pathPrepare($pathNuestros);
	pathPrepare($pathCertificaciones);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	
	var tween = new TimelineMax()
		.add(TweenMax.to($pathNuestros, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
		.add(TweenMax.to("path", 1, {ease:Linear.easeNone}), 0);
	
	var tween2 = new TimelineMax()
		.add(TweenMax.to($pathCertificaciones, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
		.add(TweenMax.to("path", 1, {ease:Linear.easeNone}), 0);
	
	
	// build scene
	
	var scene2 = new ScrollMagic.Scene({triggerElement: "#triggerNuestros", duration: 600, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);
					
	var scene3 = new ScrollMagic.Scene({triggerElement: "#triggerCertificaciones", duration: 600, tweenChanges: true})
					.setTween(tween2)
					.addTo(controller);
	
	
}

/// TABS

function tabsPromos(){
	$('#myTab a').on('click', function (e) {
		
		$('.nav-item').removeClass("active");
		$(this).parent('li').addClass("active");
		$(".nav-tabs").addClass("nav-active");
		
	});
}

//CARRUSELES

function carruselServicios1(){
	var mySwiper = new Swiper(".sliderServicios1", {
		observer:true,
		observeParents: true,
		loop:true,
		direction: 'horizontal',
		pagination: {
			el: '#pag1',
			type: 'bullets',
			clickable:true,
		},
		
		navigation: {
			nextEl: '#nav2',
			prevEl: '#nav1',
		},
		breakpoints:{
			320: {
				slidesPerView: "1",
				spaceBetween: 10,
				allowTouchMove:true,
				centeredSlidesBounds:true,
			},
			992: {
				slidesPerView: 3,
				slidesOffsetAfter:100,
				
			}
		}
	});
}

function carruselServicios2(){
	
	var mySwiper2 = new Swiper(".sliderServicios2", {
		observer:true,
		observeParents: true,
		loop:true,
		direction: 'horizontal',
		pagination: {
			el: '#pag2',
			type: 'bullets',
			clickable:true,
		},
		
		navigation: {
			nextEl: '#nav3',
			prevEl: '#nav4',
		},
		breakpoints:{
			320: {
				slidesPerView: "1",
				spaceBetween: 10,
				allowTouchMove:true,
				centeredSlidesBounds:true,
			},
			992: {
				slidesPerView: "3",
				slidesOffsetAfter:100,
			}
		}
	});
	
}


function carruselServicios3(){
	
	var mySwiper3 = new Swiper(".sliderServicios3", {
		direction: 'horizontal',
		observer:true,
		observeParents: true,
		loop:true,
		pagination: {
			el: '#pag3',
			type: 'bullets',
			clickable:true,
		},
		
		navigation: {
			nextEl: '#nav5',
			prevEl: '#nav6',
		},
		breakpoints:{
			320: {
				slidesPerView: "1",
				spaceBetween: 10,
				allowTouchMove:true,
				centeredSlidesBounds:true,
			},
			992: {
				slidesPerView: "3",
				slidesOffsetAfter:100,
			}
		}
	});
	
}


$(document).ready(function(){
	
    if(window.location.href.indexOf("servicios") > -1){
		drawSvgServicios();
        carruselServicios1();
		carruselServicios2();
		carruselServicios3();
        tabsPromos();
	}
    
});
