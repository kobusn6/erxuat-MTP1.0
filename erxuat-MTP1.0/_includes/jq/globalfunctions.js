//		var showBenefitsCount = 0;
$(document).ready
	(

		$(function() {

//			//clearInterval(auto_refresh);
//			var auto_refresh = setInterval(
//			function()
//			{
//				$('#content').load('_views/home.php');
//	      clearInterval(auto_refresh);
//			}, 9000);			

//			alert(auto_refresh);


//		$('#carouselExample').on('slide.bs.carousel', function(e) {
//
//                var $e = $(e.relatedTarget);
//                var idx = $e.index();
//                var itemsPerSlide = 4;
//                var totalItems = $('.carousel-item').length;
//
//                if (idx >= totalItems - (itemsPerSlide - 1)) {
//                    var it = itemsPerSlide - (totalItems - idx);
//                    for (var i = 0; i < it; i++) {
//                        // append slides to end
//                        if (e.direction == "left") {
//                            $('.carousel-item').eq(i).appendTo('.carousel-inner');
//                        } else {
//                            $('.carousel-item').eq(0).appendTo('.carousel-inner');
//                        }
//                    }
//                }
//            });
//
//    $('#carouselExample').carousel({
//        interval: 2000
//    });
			

		})
		
);
		
function closeDiv(divID, CloseCover)
{
	if (CloseCover == '')
	{
		CloseCover = 1;
	}
	
	$('#'+divID).hide();
	
	if (CloseCover == 1)
	{
		$('#pageCover').hide();
	}
}
		
function showDiv(divID)
{
	$('#'+divID).show();
}

function processForm(formVar, excludeField)
{
	//ALL IS GOOD -> DO ACTUAL SUBMISSION
	var values = {};
	var tmp = '';
	var formFieldCount = 0;
	var dataString = '';
	//var i = formSubSize - 1;
	$.each($('#'+formVar).serializeArray(), function(i, field) {
		if (field.name != excludeField)
		{
	    formFieldCount = formFieldCount + 1;
	    values[field.name] = field.value;
			
			if (formFieldCount > 1)
			{
				dataString = dataString+'&'+field.name+'='+field.value;
			}
			else
			{
				dataString = field.name+'='+field.value;
			}
		}
	});
	
	return dataString;
}

function setMenu(whichId)
{
	resetMenu();
	$("#li_" + whichId).attr('class', 'active');
}

function resetMenu()
{
	$('*[id^=li_nav]:visible').each(function() {
		$("#" + this.id).attr('class', '');
		//alert(this.id);
	});
	
//	$('*[id^=ad_]:visible').each(function() {
//	    if (displayType == 'grid') //grid
//	    {
//	    	$("#" + this.id).attr('class', 'ad_grid_8 adbox');
//	    	$("#listo_grid").attr('class', 'grid active');
//	    	$("#listo_detail").attr('class', 'detail');
//				$('*[id^=div_]:hidden').each(function() {
//					$("#" + this.id).show();
//				});
//	    	
//	    }
//	    else //detail
//	    {
//	    	$("#" + this.id).attr('class', 'col-sm-12 adbox');
//	    	$("#listo_detail").attr('class', 'detail active');
//	    	$("#listo_grid").attr('class', 'grid');
//				$('*[id^=div_]:visible').each(function() {
//					$("#" + this.id).hide();
//				});
//	    }
//	});
}

function checkMaxLen(whichElement,whichIndicator,maxLen)
{
	var currentLength = $("#"+whichElement).val().length;
	//alert(currentLength);
	var charleft = maxLen - currentLength;
	//alert(charleft);
	
	var currentText = $("#"+whichElement).val();
//			alert(currentNotes);
	if (currentLength > maxLen)
	{
		alert('The limit of allowed characters has been reached!');
		$("#"+whichElement).val(currentText.substr(0,maxLen));
	}
	
	if (charleft < 0)
	{
		charleft = 0;
	}
	
	$("#charleft").html(charleft);
	
}

//function validateEmail (whichEmail)
//{
//	var isValid = 0;
//	with (whichEmail)
//	{
//		var apos = whichEmail.indexOf("@");
//		var dotpos = whichEmail.lastIndexOf(".");
//		if (apos < 1 || dotpos - apos < 2) 
//		{
//			//alertStr += "Email address is invalid\n";
//			isValid = 0;
//		}
//		else
//		{
//			isValid = 1;
//		}
//	}
//	console.log('isValid2::'+isValid);
//
////			var field = document.getElementById('email'); 
////			with (field)
////			{
////				apos=value.indexOf("@");
////				dotpos=value.lastIndexOf(".");
////				if (apos<1||dotpos-apos<2) 
////			  {
////			  	alertStr += "Email address is invalid\n";
////			  }
////			}
//	return isValid;
//}

function chkContactNumber(obj,labelObj,evt)
{
	if ($(obj).val().length > 10)
	{
		$(labelObj).html('Maximum of 10 digits only');
		$(labelObj).show();
		var contactno = $(obj).val();
		var allowedcontactno = $(obj).substr(0,9);
		$(obj).val(allowedcontactno);
	}
	else
	{
		var charCode = (evt.which) ? evt.which : event.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57))
		{
		  $(labelObj).html('Digits only');
		  $(labelObj).show();
		  return false;
		}
		else
		{
			$(labelObj).hide();
			return true;
		}
	}

}

function isNumberKey(obj,labelObj,evt)
{
	
//	if ($(obj).val().length >= 10)
//	{
//		$(labelObj).html('Maximum of 10 digits only');
//		$(labelObj).show();
//		var cellno = $(obj).val();
//		var allowedcellno = cellno.substr(0,9);
//		$(obj).val(allowedcellno);
//	}
//	else
//	{
//		var charCode = (evt.which) ? evt.which : event.keyCode;
//		//alert(charCode);
//		if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46)
//		{
//		  $(labelObj).html('Digits only');
//		  $(labelObj).show();
//		  return false;
//		}
//		else
//		{
//			$(labelObj).hide();
//			return true;
//		}
//	}
	
	var charCode = (evt.which) ? evt.which : event.keyCode;
	//alert(charCode);
	
	var inputval = $(obj).val();
	//alert(inputval);
	
	if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46)
	{
	  $(labelObj).html('Digits only');
	  $(labelObj).show();
	  return false;
	}
	else
	{
		if (charCode == 46)
		{
			if (inputval.indexOf('.') != -1)
			{
			  $(labelObj).html('Only one decimal point allowed');
			  $(labelObj).show();
			  return false;
			}
		}
		
		$(labelObj).hide();
		return true;
	}

}

function checkStrength(password, whichId)
{
	var strength = 0;
	
	if (password.length < 6) {
	    $('#'+whichId).removeClass();
	    $('#'+whichId).addClass('short');
	    return 'Too short';
	}
	
	if (password.length > 7)
	{
		strength += 1;
	}			

	//CHECK IF THE PASSWORD CONTAINS LOWER AND UPPERCASE CHARACTERS
	if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))
	{
		strength += 1;
	}
	
	//CHECK FOR SPECIAL CHARACTERS
	if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))
	{
		strength += 1;
	}
	
	//IF THE PASSWORD CONTAINS TWO SPECIAL CHARACTERS, INCREASE STRENGTH VALUE BY 1 MORE
	if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/))
	{
		strength += 1;
	}

	if (strength < 2 ) {
	    $('#'+whichId).removeClass();
	    $('#'+whichId).addClass('weak');
	    //$("#score_result").css({color}:{#E66C2C});
	    return 'weak';
	} else if (strength == 2 ) {
	    $('#'+whichId).removeClass();
	    $('#'+whichId).addClass('good');
	    //$("#"+whichId).css({color}:{#2D98F3});
	    return 'good';
	} else {
	    $('#'+whichId).removeClass();
	    $('#'+whichId).addClass('strong');
	    //$("#"+whichId).css({color}:{#006400});
	    return 'strong';
	}
	
}