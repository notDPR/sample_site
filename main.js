$(document).ready(function(){

	$(".images").slick({
		autoplay :true ,
		autoplaySpeed : 2000,
		arrows : false ,
		pauseOnHover : false 
	}) ;

	var y = "-525px" ;
	if( $(window).width() <= 500 ) y="-640px" ;
	if( $(window).width() <= 470 ) y="-688px" ;
	$(".modal").css({"top":y}) ;


// --------------TRIGGER EVENTS-------------------------

	$(window).scroll(function(){

		if($(window).scrollTop() > 20){
			$("#navbar").css("top" , "0") ;
		}
		else {
			$("#navbar").css("top","-112px") ;
		}

		if( $(window).scrollTop() + $("#navbar").height() >= $(window).height() )
		{
			$(".foto").find("img").css({"transform":"rotate(0deg)"}) ;
			$("#navbar header nav li").eq(1).css({"color":"#222222"}) ;
			$("#navbar header nav li").eq(0).css({"color":"#cccccc"}) ;
		}
		else
		{
			$(".foto").find("img").css({"transform":"rotate(20deg)"}) ;
			$("#navbar header nav li").eq(1).css({"color":"#cccccc"}) ;
			$("#navbar header nav li").eq(0).css({"color":"#222222"}) ;
		}

		if($(window).scrollTop() > 0)
		{
			$(".vanish").fadeOut( 150 , "linear") ;
			// $(".vanish").css({"transform" : "scale(0)" , "opacity" : "0"}) ;
		}
		else
		{
			$(".vanish").fadeIn( 150 , "linear") ;
			// $(".vanish").css({"transform" : "scale(1)" , "opacity" : "1"}) ;
		}

		var h1 = ( $(window).height() )*(0.436) ;
		if($(window).scrollTop() <= h1){
			var h = parseFloat( $(".title").css("margin-top") ) ;
			$(".content").css({"margin-top" : h + $(window).scrollTop() + "px" }) ;
		}
	});


	$(window).resize(function(){
		if( $(window).width() <= 500 ) y="-640px" ;
		if( $(window).width() <= 470 ) y="-688px" ;
		$(".modal").css({"top":y}) ;
	}) ;

	$("#signup").on("click",function(event){

		$(".modal").css({"top" : "13%" , "opacity" : "1"}) ;
		$(".first_page,.second_page").css({"filter" : "brightness(70%)"}) ;
	});


	$(window).on("click keyup",function(event){
		if(event.target.nodeName == "MAIN" || event.keyCode==27)
		{
			$(".modal").css({"top" : y , "opacity" : "0"}) ;
			$(".first_page,.second_page").css({"filter" : "brightness(100%)"}) ;
		}
	}) ;

	$(".second_page,#navbar,.first_page header").on("click",function(){
		$(".modal").css({"top" : y , "opacity" : "0"}) ;
		$(".first_page,.second_page").css({"filter" : "brightness(100%)"}) ;
	});

	$(".home").on("click",function(event){
		$('html,body').animate({scrollTop:0},300);
	});

	$(".features").on("click",function(){
		$("html,body").animate({ scrollTop : $(window).height() - $("#navbar").height() + 5 } , 300) ;
	});

	$(".home,.features").css({"cursor":"pointer"}) ;
});