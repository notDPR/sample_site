$(document).ready(function(){

	$(".images").slick({
		autoplay :true ,
		autoplaySpeed : 2000,
		arrows : false ,
		pauseOnHover : false 
	}) ;

	$(window).scroll(function(){
		if($(window).scrollTop() > 20){
			$("#navbar").css("top" , "0") ;
		}
		else {
			$("#navbar").css("top","-112px") ;
		}
	});

	// MODAL ---------------------------------------------

	$("#signup").on("click",function(event){
		$(".modal").css({"top" : "13%" , "opacity" : "1"}) ;
		$(".first_page,.second_page").css({"filter" : "brightness(70%)"}) ;
	});


	$(window).on("click keyup",function(event){
		if(event.target.nodeName == "MAIN" || event.keyCode==27)
		{
			$(".modal").css({"top" : "-514px" , "opacity" : "0"}) ;
			$(".first_page,.second_page").css({"filter" : "brightness(100%)"}) ;
		}
	}) ;

	$(".second_page,#navbar,.first_page header").on("click",function(){
		$(".modal").css({"top" : "-514px" , "opacity" : "0"}) ;
		$(".first_page,.second_page").css({"filter" : "brightness(100%)"}) ;
	});



	$(window).scroll(function(){
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
	}) ;

	// ------------------------------------------------------------------ //


	$(window).scroll(function(event){
		if($(window).scrollTop() > 0)
		{
			$(".vanish").fadeOut( 150 , "linear") ;
		}
		else
		{
			$(".vanish").fadeIn( 150 , "linear") ;
		}
	}) ;




	$(window).scroll(function(event){

		var h1 = ( $(window).height() )*(0.436) ;
		if($(window).scrollTop() <= h1){
			var h = parseFloat( $(".title").css("margin-top") ) ;
			$(".content").css({"margin-top" : h + $(window).scrollTop() + "px" }) ;
		}
	}) ;


});

