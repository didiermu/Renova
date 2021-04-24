// $("#modalVideo").modal().show;

/// HEADER

function menu(){
	$(".header--navegacion .btn").on("click", function () {
        $(".header").toggleClass("headerOn");
        $(this).toggleClass("nav-on");
    });
	
}

/// EFECTOS

function efectoLogo() {
	var c = 0;
	var t;
	var timer_is_on = 0;
	
	function timedCount() {
		console.log(c);
		c = c + 1;
		t = setTimeout(timedCount, 1000);
		
		if(c==6){
			c=0;
			$("#logo1").removeClass("logoGiro");
		}
	  }
	  
	  function startCount() {
		if (!timer_is_on) {
		  timer_is_on = 1;
		  timedCount();
		}
	  }
	  
	  function stopCount() {
		clearTimeout(t);
		c = 0;
		timer_is_on = 0;
		console.log(c);
	  }
	
	//  stopCount();  
	function sectionFadeLogo() {
		var seccion = $("section");
		seccion.each(function () {
			var posSection = $(this).offset().top;
			var scrolleo = $(window).scrollTop();
			
			if (scrolleo > posSection) {
				$("#logo1").addClass("logoGiro");
				startCount();
				
				//console.log("entra");
			} else {
				
				//console.log("sale");
			}
		});
	}
	
	sectionFadeLogo();
	 
	$(document).scroll(function() {
		sectionFadeLogo();
	});
	
	//window.addEventListener("scroll", function(){ 
	//	var sectionFade = $("section");
	//	setTimeout(function(){
	//		$("#logo1").removeClass("logoGiro");
	//	},5000);
	//	sectionFade.each(function () {
	//		var posSection = $(this).offset().top;
	//		var scrolleo = $(window).scrollTop();
	//		
	//		if (scrolleo > posSection) {
	//			$("#logo1").addClass("logoGiro");
	//			console.log("entra");
	//		} else {
	//			console.log("sale");
	//		}
	//	
	//	});
	//	
	//}, false);
	
 }
 
 
 function efectoFade() {
        
	function sectionFade() {
		var sectionFade = $("section");
		sectionFade.each(function () {
			var posSection = $(this).offset().top - 400;
			var scrolleo = $(window).scrollTop();
			
			if (scrolleo > posSection) {
				$(this).find($(".objetFade")).addClass("transition1");
				$("section").removeClass("sectionOn");
				$(this).addClass("sectionOn");
			} else {
				
				$(this).find($(".objetFade")).removeClass("transition1");
				
			}
		});
		
		if ($(".dedicamos").hasClass("sectionOn")){
			$(".header").addClass("black");
		}
		
		//else if($(".hero").hasClass("sectionOn")||$(".ayuda").hasClass("sectionOn")||$(".promos").hasClass("sectionOn")||$(".contacto").hasClass("sectionOn")){
		//	$(".header").removeClass("black");
		//}

		else{
			$(".header").removeClass("black");
		}
	}
	 
 
	sectionFade();
	 
	
	$(document).scroll(function() {
		sectionFade();
	});
	
 }
	
 function efectoFadeServicios() {
	
	window.addEventListener("scroll", function(){ 
		var sectionFade = $("section");
		setTimeout(function(){
			$("#logo1").removeClass("logoGiro");
		},5000);
		sectionFade.each(function () {
			var posSection = $(this).offset().top - 300;
			var scrolleo = $(window).scrollTop();
			
			if (scrolleo > posSection) {
				$(this).find($(".objetFade")).addClass("transition1");
				$(this).addClass("sectionOn");
				$("#logo1").addClass("logoGiro");
			} else {
				$(this).find($(".objetFade")).removeClass("transition1");
				$(this).removeClass("sectionOn");
			}
		
		});
		
	}, false);
	
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
		init: false,
		direction: 'horizontal',
		pagination: {
			el: '#pag1',
			type: 'bullets',
			clickable:true,
		},
		
		navigation: {
			nextEl: '#nav1',
			prevEl: '#nav2',
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
	mySwiper.init();
}

function carruselServicios2(){
	
	var mySwiper2 = new Swiper(".sliderServicios2", {
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
			}
		}
	});
	
}

function carruselServicios3(){
	
	var mySwiper3 = new Swiper(".sliderServicios3", {
		direction: 'horizontal',
		pagination: {
			el: '#pag3',
			type: 'bullets',
			clickable:true,
		},
		
		navigation: {
			nextEl: '#nav5',
			prevEl: '#nav5',
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

$(document).ready(function(){
	menu();
	efectoLogo();
	//efectoParallax(); // ok
	efectoFade();
	//efectoFadeServicios();
		
	//
	//if ( window.location.pathname == "/" || window.location.href.indexOf("nosotros") > -1){
	//	efectoParallax();
	//}
	
	$('#myTab a').on('click', function (e) {
		
		$('.nav-item').removeClass("active");
		$(this).parent('li').addClass("active");
		$(".nav-tabs").addClass("nav-active");
		
		
	});
	
});

