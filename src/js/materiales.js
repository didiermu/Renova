function tabsMateriales(){
	$('.swiper-slide a').on('click', function (e) {
		
		$('.swiper-slide').removeClass("active");
		$(this).removeClass("active");
		
	});
}


function carruselMateriales(){
	var mySwiper = new Swiper(".sliderMateriales", {
		direction: 'horizontal',
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable:true,
		},
		
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints:{
			320: {
				slidesPerView: "1",
				spaceBetween: 10,
				allowTouchMove:true,
				centeredSlidesBounds:true,
			},
			992: {
                slidesPerView: "auto",
                spaceBetween: 30,
                slidesOffsetAfter:40,
                allowTouchMove:false,
			}
		}
	});
}


$(document).ready(function(){
	if(window.location.href.indexOf("materiales") > -1){
        tabsMateriales()
        carruselMateriales();
        
    }
	
});
