		//CHECK IF BROWSER SUPPORTS USED OBJECTS
		var placeSupport;
		var objectFocusSupport;
		var isSuccess = 0;
		var isAdmin = 0;
		var tmpX = 0;
		var tmpY = 0;

$(document).ready
	(		
		$(function() {
			var mouseX = 0;
			var mouseY = 0;
			
			$('#headImg').removeClass('headImg1');
			$('#headImg').addClass('headImg3');
			

		})
	);
		
function closeLoader()
{
	$('#loader').hide();
}

function actionSumbit ()
{
	$("#sub_email_error").hide();
	$("#responseMsg").html('Please wait ... processing your request.');
////	console.log('whichContactType::'+whichContactType);
	$("#contactModalCentered").show();
//	var msg_name = $("input#msg_name").val();
	var sub_email = $("input#sub_email").val();
//	var msg_contactno = $("input#msg_contactno").val();
//	var msg_company = $("input#msg_company").val();
//	var msg_message = $("textarea#msg_message").val();
	var hasError = false;
//
//	if (msg_name == '')
//	{
//		$("#msg_name_error").show();  
//		$("#msg_name_error").html("This field is required.");
//
//		hasError = true;
//	}
//
//	if (msg_company == '')
//	{
//		$("#msg_company_error").show();  
//		$("#msg_company_error").html("This field is required.");
//
//		hasError = true;
//	}
//
	if (sub_email == '')
	{
		$("#sub_email_error").show();  
		$("#sub_email_error").html("This field is required.");
		hasError = true;
	}
	else
	{
		if (sub_email == '')
		{
			$("#sub_email_error").show();  
			$("#sub_email_error").html("This field is required.");
	
			hasError = true;
		}
		else if (sub_email != '')
		{
			var isValid = validateEmail (sub_email);
			if (!isValid)
			{
				$("#sub_email_error").show();  
				$("#sub_email_error").html("Invalid email address entered.");
				hasError = true;
			}
		}		
	}

	if (hasError)
	{
		responseMsg = "Please enter valid email address.";
		$("#responseMsg").html(responseMsg);
		//$('#loader').hide();
		return false;
	}

	//ALL IS GOOD -> DO ACTUAL SUBMISSION
	var values = {};
	var tmp = '';
	var formFieldCount = 0;
	var dataString = '';
	//var i = formSubSize - 1;
	$.each($('#frmAction').serializeArray(), function(i, field) {
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
	});
	dataString = dataString+'&action=unsub';
		var responseMsg = '';
		$.ajax({
		  url: "_models/doAction.php",
		  type: "POST",  
		  data: dataString,
//			dataType : 'json',
//			headers:{
//				 "rt":"ajax",
//				 "Tenant":"Id:null",
//				 "Access-Handler":"Authorization:null",
//				 "Accept":"application/json, text/plain, */*"
//			},
		  success: function(r, data1) {
				var result = r;
				if (data1 != 'success')
				{
					responseMsg = 'Your unsubscribe request failed\nPlease try again later.(r)';
				}
		  },  
		 	error: function(jqXHR, data2) {
		 		responseMsg = 'Your unsubscribe request failed\nPlease try again later.(data2) - ' + jqXHR;
			} 
		})
		.fail(function(JQxhr, data4){
		 	responseMsg = 'Your unsubscribe request failed\nPlease try again later.(data4)' + JQxhr;
		})
		.done(function(jqxhr, data3){
		 	var result = JSON.parse (jqxhr);
			if (result['success'])
			{
				responseMsg = "You have been successfully unsubscribed.<br /><br />You can resubscribe again at any time, should you wish to do so.";
				$("#frmAction").hide();
				$("#responseMsg1").html(responseMsg);
			}
			else
			{
				responseMsg = 'Your unsubscribe request could not be processed\n'+result['actionmsg'];
			}
			$("#responseMsg").html(responseMsg);
			//$('#loader').hide();
			$("#floatBox").hide();
			$("#pageCover").hide();
			$("#content").show();
		});
//		setTimeout(
//		  function() 
//		  {
//		    if (responseMsg == '')
//		    {
//		    	responseMsg = 'Your contact request could not be sent at this time\nPlease try again later.';
//		    	$("#responseMsg").html(responseMsg);
//					$("#floatBox").hide();
//					$("#pageCover").hide();
//					$("#content").show();
//					pageScroll('contact');
//		    }
//		  }, 10000);
	return false;

}

	
function validateEmail (whichEmail)
{
	var isValid = false;
	with (whichEmail)
	{
		//var apos = whichEmail.indexOf("@");
		var apos= whichEmail.indexOf ('@');
		var dotpos = whichEmail.lastIndexOf(".");
		if (apos < 1 || dotpos - apos < 2) 
		{
			//alertStr += "Email address is invalid\n";
			isValid = false;
		}
		else
		{
			isValid = true;
		}
	}
	//console.log('isValid2::'+isValid);

//			var field = document.getElementById('email'); 
//			with (field)
//			{
//				apos=value.indexOf("@");
//				dotpos=value.lastIndexOf(".");
//				if (apos<1||dotpos-apos<2) 
//			  {
//			  	alertStr += "Email address is invalid\n";
//			  }
//			}
	return isValid;
}