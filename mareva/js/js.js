//++F U N C T I O N

function chx_click(){
	$('.chx-inp').click(function(){
		$(this).closest('.chx').toggleClass('act');
	});
}

//--F U N C T I O N S

$(document).ready(function () {
   chx_click();
});

$(window).on('load', function () {
    $('.cr-crl_1').owlCarousel({
        items:4,
//        autoWidth: true,
        dots: false,
        arrows: true,
        nav: true,
		responsive : {
		0 : {
			items: 1
		},
		500 : {
			items: 2
		},
		700 : {
			items: 3
		},
		1159 : {
			items: 4
		}}
    });
	
	$('.cr-crl_2').owlCarousel({
        items:3,
//        autoWidth: true,
        dots: false,
        arrows: true,
        nav: true,
		responsive : {
		0 : {
			items: 1
		},
		767 : {
			items: 2
		},
		1159 : {
			items: 3
		}}
    });
});

$(window).resize(function () {
});