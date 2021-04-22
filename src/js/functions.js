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
			var posSection = $(this).offset().top - 400;
			var scrolleo = $(window).scrollTop();
			
			if (scrolleo > posSection) {
				$(this).find($(".objetFade")).addClass("transition1");
				$(this).addClass("sectionOn");
			} else {
				$(this).find($(".objetFade")).removeClass("transition1");
				$(this).removeClass("sectionOn");
			}
		});
		
		if ($(".dedicamos").hasClass("sectionOn")||$(".contacto").hasClass("sectionOn")){
			$(".header").addClass("black");
			$(".hero").removeClass("sectionOn");
			$(".ayuda").removeClass("sectionOn");
		}
		
		else if($(".promos").hasClass("sectionOn")||$(".hero").hasClass("sectionOn")||$(".ayuda").hasClass("sectionOn")){
			$(".header").removeClass("black");
			$(".dedicamos").removeClass("sectionOn");
			$(".contacto").removeClass("sectionOn");
		}
		
		if($(".promos").hasClass("sectionOn")){
			$(".header").removeClass("black");
			$(".dedicamos").removeClass("sectionOn");
		}
		
		if($(".contacto").hasClass("sectionOn")){
			$(".header").removeClass("black");
			$(".promos").removeClass("sectionOn");
		}
		
		else{
			//$(".header").removeClass("black");
		}
	}
	 
 
	sectionFade();
	 
	
	$(document).scroll(function() {
		sectionFade();
	});
	
 }
 

function efectoParallax(){
	var lastScrollTop = 0;
	var suma = 0;
	window.addEventListener("scroll", function(){ 
		
		var	iScrollPos = 0,
			objParallax = $(".objParallax"),
			posSection = objParallax.parents("section").offset().top - 400,
			scrolleo = $(window).scrollTop(), //posision scroll
			heightSection = objParallax.parents("section").height() + 300,
			limiteParallax = posSection + heightSection;
		
		
		if (scrolleo > posSection) {
			//console.log("si");
			
			if(scrolleo < limiteParallax){
				//console.log("si sect");
				
				var st = window.pageYOffset || document.documentElement.scrollTop;
				if (st > lastScrollTop){
					//console.log("downscroll code");
					
					suma = suma + .3;
                    objParallax.css("transform", "translateY(" + suma + "px)");
					
				} else {
					//console.log("upscroll code");
				
					suma = suma - .3;
                    objParallax.css("transform", "translateY(" + suma + "px)");
					
				}
				lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
				
			} else{
				//console.log("no sect");
			}
			
		} else {
			//console.log("no");
		}
		
		
		
		
		
	}, false);
}


//CARRUSELES

function carruselServicios1(){
	var mySwiper = new Swiper(".sliderServicios", {
		
		direction: 'horizontal',
		pagination: {
			el: '#recoleccion .swiper-pagination',
			type: 'bullets',
			clickable:true,
		},
		
		navigation: {
			nextEl: '#recoleccion .swiper-button-next',
			prevEl: '#recoleccion .swiper-button-prev',
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
			}
		}
	});
}

function carruselServicios2(){
	
	var mySwiper = new Swiper(".sliderServicios2", {
		direction: 'horizontal',
		pagination: {
			el: '#servicio .swiper-pagination',
			type: 'bullets',
			clickable:true,
		},
		
		navigation: {
			nextEl: '#servicio .swiper-button-next',
			prevEl: '#servicio .swiper-button-prev',
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
			}
		}
	});
	
}

window.onload = function() {

	menu();
	//efectoParallax(); // ok
	efectoFade();
	
	
	//
	//if ( window.location.pathname == "/" || window.location.href.indexOf("nosotros") > -1){
	//	efectoParallax();
	//}
	
	$('#myTab a').on('click', function (e) {
		e.preventDefault();
		$('.nav-item').removeClass("active")
		$(this).parent('li').addClass("active");
		$(".nav-tabs").addClass("nav-active");
		
		carruselServicios1();
		carruselServicios2();
	});
	
};

