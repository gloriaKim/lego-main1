

function commmonUi(){
	setInterval("logoAnimate()", 3500);

	//gnb active
	gnbActive();
	
	//gnb 
	var $warp = $('#wrap');
	var $gnb_focus = $('#gnb li a');
	var $mGnb_btn = $('.btn-gnb a');
	var $body = $('body');
	var $gnbHover = $('#gnb ul li a');
	var $gnb_2depth = $('.gnb-2depth');
	var $button = $('.button');
	
	$('.btn-gnb a').mousedown(function(e){
		e.preventDefault();
		$gnb_2depth.hide();
		$body.toggleClass('gnb-on');
	});
	$('.btn-close a').click(function(e){
		e.preventDefault();
		$body.removeClass('gnb-on');
	});
	
	var websize = 1024;
	//gnb hover
	$('#gnb .gnb-depth1').hover(function(){
		var $wid = $(window).width();
		if($wid > websize){
			gnbOver()
		}
	})
	$('#gnb').mouseleave(function(){
		var $wid = $(window).width();
		if($wid > websize){
			gnbReset()
		}
	});
	
	//gnb focus
	$gnb_focus.focus(function(){
		var $wid = $(window).width();
		if($wid > websize){
			gnbOver()
		}
	});
	$mGnb_btn.focus(function(){
		$body.addClass('gnb-on');
	});	
	
	$gnb_focus.blur(function(){
		var $wid = $(window).width();
		if($wid > websize){
			setTimeout(function(){
				if( !$('#gnb a').is(':focus') ) {
					 gnbReset();
				}
			},10);
		}
	});
	// reset
	$(window).resize(function(){
		gnbReset();
	})
	//gnb click
	$('#gnb .gnb-depth1 a').click(function(e){		
		var $wid = $(window).width();
		if($wid < websize){
			$(this).siblings('.gnb-depth2').slideToggle();
			if(!$(this).children('.gnb-depth2').hasClass('mGnbList-open')){
				$(this).siblings('ul').toggleClass('mGnbList-open');
			}
		}
	});
	
	
	function gnbOver(){
		$('body').addClass('gnb-on');
		$('#gnb .gnb-depth2').removeClass('mGnbList-open');
	}
	function gnbReset(){
		$('body').removeClass('gnb-on');
		$('#gnb .gnb-depth2').removeAttr('style');
		$('#gnb .gnb-depth2').removeClass('mGnbList-open');
	}
	$gnbHover.addClass('hvr-underline-from-left');
	$('#gnb .mobile-bottom-nav a').removeClass('hvr-underline-from-left');
	$('#gnb .mobile-top-nav a').removeClass('hvr-underline-from-left');
	


}

function logoAnimate(){
	var $logo = $('#logo a');
	$logo.toggleClass('animated flipInY');
	$logo.click(function(e){
		e.preventDefault();
		window.location.assign("main1.html")
	})
}




