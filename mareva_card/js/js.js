//++F U N C T I O N

//++C H E C K B O X
function chx_click(){
	if($('.chx-inp').length){
		$('.chx-inp').click(function(){
			$(this).closest('.chx').toggleClass('act');
		});
	}	
}

//++C A R D - G A L L E R Y
function crd_gly(){
	if($('.cr-crl').length){
		$('.cr-crl .item').click(function(){
			var src=$(this).find('.crl3-f').attr('src');
			$('.b7-f-a.act').removeClass('act');
			$(this).closest('.cr-crl').find('.item.act').removeClass('act');
			$(this).addClass('act');
			$('.b7-f-a[href="'+src+'"]').first().addClass('act');
		});	
	}	
}

//++S E L E C T
function slt(){
	if($('.slt-c').length){
		$('.slt-bn1').click(function(){
			$(this).closest('.slt-c').toggleClass('act');
		});

		$('.slt-bn2').click(function(){
			var slt=$(this).closest('.slt-c');
			slt.find('.slt-bn1-1').html($(this).html());
			slt.find('option').removeAttr('selected');
			slt.find('option:nth-child('+($(this).index()+1)+')').attr("selected", "selected");
			slt.find('.slt-bn2.act').removeClass('act');
			$(this).addClass('act');
			slt.toggleClass('act');
		});

		$(document).click( function(e){
			if ( $(e.target).closest('.slt-c').length ) {
				return;
			}
			$('.slt-c').removeClass('act');
		});
	}	
}

//++C O L O R S
function cls(){
	if($('.b7-clr').length){
		$('.b7-clr').click(function(){
			$(this).closest('.b7-cls').find('.b7-clr').removeClass('act');
			$(this).addClass('act');
		});
	}	
}

// Q U A N T I T Y
function qny(){
	if($('.qny').length){
		$(".qny .nmr").bind("change keyup click", function() {			
			if(this.value.length===1){
				this.value = this.value.replace(/^0+/g ,"");
				this.value = this.value.replace(/[^0-9]/g ,"");	
				$(this).closest(".qny").find('.nmr').attr("value", this.value);						
			}			
			if(this.value.length===2 || this.value.length===3){			
				$(this).attr("value",this.value);
				this.value = this.value.replace(/^0+/g ,"1");			
				this.value = this.value.replace(/[^0-9]/g ,"");	
			}				
		});
		$(".qny .nmr").bind("click", function() {
			$(this).select();
		});
		$(".qny .nmr").blur(function(){	
			if(this.value===""){
				$(this).attr("value","1");
				this.value = this.value.replace(/^0+/g ,"1");
				this.value = this.value.replace(/[^0-9]/g ,"1");	
				$(this).val(1);			
			}		
		});
		$(".qny .pls").click(function(){	
			var i = parseFloat($(this).closest(".qny").find('.nmr').attr("value"));				
			if(i<999){			
				$(this).closest(".qny").find('.nmr').attr("value", i+1);
				$(this).closest(".qny").find('.nmr').val(i+1);			
			};
		});
		$(".qny .mns").click(function(){
			var i = parseFloat($(this).closest(".qny").find('.nmr').attr("value"));
			if(i>1){
				$(this).closest(".qny").find('.nmr').attr("value", i-1);
				$(this).closest(".qny").find('.nmr').val(i-1);
			};
		});
	}	
}

// ++T A B S
			
function tabs(){	
	if($(".tabs__e").length){
		$(".tabs__e").click(function(){
			if(!$(this).hasClass("act")){
				var group = $(this).data("tabs-group");
				var href = $(this).data("tabs-href");
				$("[data-tabs-group = "+group+"]").removeClass("act");
				$("[data-tabs-href = "+href+"]").addClass("act");
			}
			return false;
		});
	}	
}

//--F U N C T I O N S

$(document).ready(function () {
	tabs();
	qny();
	chx_click();
	slt();
	cls();
});

$(window).on('load', function () {
	crd_gly();
	if($('.cr-crl').length){
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

		$('.cr-crl_3').owlCarousel({
			items:6,
			dots: false,
			arrows: true,
			nav: true,
			responsive : {
			0 : {
				items: 2
			},
			369 : {
				items: 3
			},
			480 : {
				items: 4
			},
			767 : {
				items: 6
			}}
		});
		
		if($('.cr-crl_3 .owl-nav').hasClass('disabled')){
			$('.crl3-c').addClass('crl3-c_1');
		}
	}	
	
	if($(".fancybox").length){
		$(".fancybox").fancybox({});
	}
	
});

$(window).resize(function () {
});