$(document).ready(function(){
	$("a,#btn").click(function(event){
		event.preventDefault() ;
	});

	$("#btn").on("click" , function(){
		var flag = 0 ;
		var inputs = $("form>*").filter(":not(#button,#usertype)") ;

		// FORM VALIDATION
		for(var i=0;i<inputs.length;i++)
		{
			if(inputs.eq(i).find("input:text").val() == ""){

				// EMPTY INPUT
				inputs.eq(i).find(".formjs-msg-sm").text("Required Field.") ;
				inputs.eq(i).find("input").addClass("formjs-error") ;
			}
			else{
				// VALIDATION
				if( validateInput(i,inputs.eq(i).find("input")) ){
					// CORRECT INPUT
					inputs.eq(i).find("input").removeClass("formjs-error") ;
					inputs.eq(i).find(".formjs-msg-sm").text("") ;
					flag++ ;
				}
				else{
					// WRONG INPUT
					inputs.eq(i).find("input").addClass("formjs-error") ;
					inputs.eq(i).find(".formjs-msg-sm").text("Invalid Input.") ;
				}
			}
		}

		var dropdown = $("#usertype") ;
		if(dropdown.find("select").val() == "")
		{
			dropdown.find(".formjs-msg-sm").text("Required Field.") ;
			dropdown.find("select").attr("id","adder") ;

		}
		else
		{			
			dropdown.find(".formjs-msg-sm").text("") ;
			dropdown.find("select").attr("id","") ;
			flag++ ;
		}

		// ON SUCCESSFUL ACCOUNT CREATION
		if(flag==8){
			// $("#button").find("label").text("Account Created.") ;

			var he =  "-" + ( $(".modal").height() + 30 ) + "px" ;

			setTimeout(function(){
				$(".modal").css({"top" : he , "opacity" : "0"}) ;
				$(".first_page,.second_page").css({"filter" : "brightness(100%)"}) ;
			},300) ;

			setTimeout(function(){
				$(".flash_msg").fadeIn() ;
			} , 300 + 100) ;

			setTimeout(function(){
				$(".flash_msg").fadeOut("slow") ;
			} , 400 + 2500) ;

		}

		else $("#button").find("label").text("") ;

	}) ;
}) ;

function validateInput(i,val)
{
	var chk ;
	if(i==0 || i==1 || i==5){
		chk = /^[a-zA-Z]+$/ ;
		if(chk.test(val.val())) return true ;
		else return false ;
	}

	if(i==4){
		chk = /^[A-Za-z0-9_]+$/ ;
		if(chk.test(val.val())) return true ;
		else return false ;
	}

	if(i==2){
		chk = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ ;
		if(chk.test(val.val())) return true ;
		else return false ;
	}

	if(i==3){
		chk = /^\d{10}$/ ;
		if(chk.test(val.val())) return true ;
		else return false ;
	}

	if(i==6){
		chk = /^[1-9][0-9]{5}$/ ;
		if(chk.test(val.val())) return true ;
		else return false ;
	}
}