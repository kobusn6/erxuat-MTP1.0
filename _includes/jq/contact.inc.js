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
			
			//CHECK IF BROWSER SUPPORTS HTML5 PLACEHOLDER ATTRIBUTE
			var placeholderSupport = ("placeholder" in document.createElement("input"));
			if(!placeholderSupport)
			{
			  placeSupport = false;
			}
			else
			{
				placeSupport = true;
			}
			
			var canFocus = window.focus;
			if (!canFocus)
			{
				objectFocusSupport = false;
			}
			else
			{
				objectFocusSupport = true;
			}
//			console.log('objectFocusSupport::'+objectFocusSupport);
//			console.log('placeSupport::'+placeSupport);
			//SHOW INPUT LABELS
			if (!placeSupport)//NO SUPPORT
			{
			  $("#ie_msg_name").show();
			  $("#ie_msg_email").show();
			  $("#ie_msg_contactno").show();
			  $("#ie_msg_message").show();
			}			
			
			$("#contactCancel").click(function(){
				$('#floatBox').hide();
				$('#content').show();
				$('html, body').animate({
		        scrollTop: $("#templatemo-top").offset().top
		    }, 500);
			});
			
			$(".contactSubmit").click(function(){
				console.log('this.value1::'+$(this).value);
				//console.log('this.value2::'+$(this).value());
				var msg_name = $("input#msg_name").val();
				var msg_email = $("input#msg_email").val();
				var msg_contactno = $("input#msg_contactno").val();
				var msg_message = $("textarea#msg_message").val();
				
				if (msg_name == '')
				{
//					if(!placeholderSupport)
//					{
						$("#msg_name_error").show();  
						$("#msg_name_error").html("This field is required.");
//					}

					if (objectFocusSupport)
					{
						$("#msg_name").focus();
						return false;
					}
				}
				
				if (msg_email == '')
				{
//					if(!placeholderSupport)
//					{
						$("#msg_email_error").show();  
						$("#msg_email_error").html("This field is required.");
//					}

					if (objectFocusSupport)
					{
						$("#msg_email").focus();
						return false;
					}
				}
				
				if (msg_contactno == '')
				{
//					if(!placeholderSupport)
//					{
						$("#msg_contactno_error").show();  
						$("#msg_contactno_error").html("This field is required.");
//					}

						if (objectFocusSupport)
						{
							$("#msg_contactno").focus();
							return false;
						}
				}
				
				if (msg_message == '')
				{
//					if(!placeholderSupport)
//					{
						$("#msg_message_error").show();  
						$("#msg_message_error").html("This field is required.");
//					}

						if (objectFocusSupport)
						{
							$("#msg_message").focus();
							return false;
						}
					
				}
				
//				//ALL IS GOOD -> DO ACTUAL SUBMISSION
//				var values = {};
//				var tmp = '';
//				var formFieldCount = 0;
//				var dataString = '';
//				//var i = formSubSize - 1;
//				$.each($('#frmContact').serializeArray(), function(i, field) {
//				    formFieldCount = formFieldCount + 1;
//				    values[field.name] = field.value;
//						
//						if (formFieldCount > 1)
//						{
//							dataString = dataString+'&'+field.name+'='+field.value;
//						}
//						else
//						{
//							dataString = field.name+'='+field.value;
//						}
//				});




//				var dataString = '';
//				dataString = processForm('frmContact', '');
//				//alert(dataString);
//				//msg_name=Rachel Ludolf&msg_email=william.kruger@universal.co.za&msg_contactno=0794854121&msg_message=dfgsngfnsfgnf
//				$.ajax({  
//				  type: "POST",  
//				  url: "_models/doContact.php",  
//				  data: dataString,  
//				  success: function(r) {
//				  	//alert(r);	
//						var result = $.parseJSON(r);
//						if (result.success==1)
//						{
//							alert("Thank you for getting in touch! We will contact you soon.");
//						}
//						else
//						{
//							alert('Your contact request failed\nPlease try again later. - ' + result.error);
//						}
//							
//				  },  
//				 	error: function() {
//				 		
//					} 
//				}).done(function(){
//					$('#loader').hide();
//					$("#floatBox").hide();
//					$("#pageCover").hide();
//					$("#content").show();
//					$('html, body').animate({
//			        scrollTop: $("#templatemo-top").offset().top
//			    }, 500);
//					//return false;
//				});
				return false;
				
			
				
				
				
			});

			

		})

)
		
function closeLoader()
{
	var timerInterval = 4000;
	loaderTimer = setInterval
	(
		function()
		{
			$('#loader').hide();
			$('#pageCover').slideUp();
		},
		timerInterval
	);
}

function contactSumbit (whichContactType)
{
	$("#responseMsg").html('Please wait ... processing your request.');
//	console.log('whichContactType::'+whichContactType);
	$("#contactModalCentered").show();
	var msg_name = $("input#msg_name").val();
	var msg_email = $("input#msg_email").val();
	var msg_contactno = $("input#msg_contactno").val();
	var msg_company = $("input#msg_company").val();
	var msg_message = $("textarea#msg_message").val();
	var hasError = false;

	if (msg_name == '')
	{
		$("#msg_name_error").show();  
		$("#msg_name_error").html("This field is required.");

		hasError = true;
	}

	if (msg_company == '')
	{
		$("#msg_company_error").show();  
		$("#msg_company_error").html("This field is required.");

		hasError = true;
	}

	if (msg_email == '' && msg_contactno == '')
	{
		$("#msg_email_error").show();  
		$("#msg_email_error").html("This field is required.");
		$("#msg_contactno_error").show();  
		$("#msg_contactno_error").html("This field is required.");

		hasError = true;
	}
	else
	{
		if (msg_contactno == '')
		{
			$("#msg_contactno_error").show();  
			$("#msg_contactno_error").html("This field is required.");
	
			hasError = true;
		}
		else if (msg_contactno != '')
		{
			var isValid = false;
			if (isNumeric(msg_contactno))
			{
				isValid = true;
			}
			if (!isValid)
			{
				$("#msg_contactno_error").show();  
				$("#msg_contactno_error").html("Invalid phone number entered.");
	
				hasError = true;
			}
		}

		if (msg_email == '')
		{
			$("#msg_email_error").show();  
			$("#msg_email_error").html("This field is required.");
	
			hasError = true;
		}
		else if (msg_email != '')
		{
			var isValid = validateEmail (msg_email);
			if (!isValid)
			{
				$("#msg_email_error").show();  
				$("#msg_email_error").html("Invalid email address entered.");
				hasError = true;
			}
		}		
	}

	if (msg_message == '')
	{
		$("#msg_message_error").show();  
		$("#msg_message_error").html("This field is required.");

		hasError = true;
	}

	if (hasError)
	{
		responseMsg = "Please correct form fields.";
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
	$.each($('#frmContact').serializeArray(), function(i, field) {
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
	dataString = dataString+'&contact_type='+whichContactType;
//	console.log(dataString);
//	dataString = JSON.stringify(dataString);
//	console.log(dataString);
//	alert('STOP');
		var responseMsg = '';
		$.ajax({
		  url: "_models/doContact.php",
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
		  	//var result = r['result'];
				var result = r;//$.parseJSON(r);
//		 		console.log('SUCCESS');
//		 		console.log('r::'+r);
//		 		console.log('data1::'+data1);
		  	//alert(r);	
				//alert('result::'+result);
				//alert('data1::'+data1);
//				if (result.success==1)
//				{
//					//alert("Thank you for getting in touch! We will contact you soon.");
//					responseMsg = "Thank you for getting in touch! We will contact you soon.";
//				}
//				else
//				{
//					//alert('Your contact request failed\nPlease try again later. - ' + result.error);
//					responseMsg = 'Your contact request failed\nPlease try again later. - ' + result.error;
//				}
				if (data1 != 'success')
				{
					responseMsg = 'Your contact request failed\nPlease try again later.(r)';
				}
				//$("#responseMsg").html('Response: ' + responseMsg);
		  },  
		 	error: function(jqXHR, data2) {
//		 		alert('jqXHR::'+jqXHR);
//		 		alert('data2::'+data2);
//		 		console.log('ERROR');
//		 		console.log('jqXHR::::'+jqXHR);
//		 		console.log('data2::::'+data2);
		 		responseMsg = 'Your contact request failed\nPlease try again later.(data2) - ' + jqXHR;
//		 		alert('ERROR::'+jqXHR);
			} 
		})
		.fail(function(JQxhr, data4){
//		 		alert('JQxhr::'+JQxhr);
//		 		alert('data4::'+data4);
//		 	console.log('FAIL');
//			console.log('JQxhr::'+JQxhr);
//			console.log('data4::'+data4);
		 	responseMsg = 'Your contact request failed\nPlease try again later.(data4)' + JQxhr;
//		 	alert('FAIL'+JQxhr);
		})
		.done(function(jqxhr, data3){
//		 	alert('jqxhr::'+jqxhr);
		 	//jqxhr = JSON.stringify(jqxhr);
		 	//alert('data3::'+data3);
//		 	console.log('DONE');
//			console.log('jqxhr::'+jqxhr);
//			console.log('data3::'+data3);
//			var jsonValid = JSON.parse (jqxhr);
//		 	console.log(jsonValid);
//			console.log('jqxhr[sqlerr]::'+jsonValid['sqlerr']);
//			console.log('jqxhr[sendmail]::'+jsonValid['sendmail']);
//			alert('DONE::'+jqxhr);
//			if (jqxhr['sqlerr'] != "")
//			{
//				responseMsg = 'Your contact request could not be recorded at this time\nPlease try again later.';// + jsonValid['sqlerr'];
//			}
//			else if (!jqxhr['sendmail'])
//			{
//				responseMsg = 'Your contact request could not be sent at this time\nPlease try again later.';// + jsonValid['sendmail'];
//			}
//			else
//			{
//				responseMsg = "Thank you for getting in touch! We will contact you soon.";
//			}
			if (data3 == 'success')
			{
				responseMsg = "Thank you for getting in touch! We will contact you soon.";
			}
			else
			{
				responseMsg = 'Your contact request could not be sent at this time\nPlease try again later.';
			}
			
//			responseMsg += '\nsuccess - ' + jqxhr.success;
//			responseMsg += '\nsqlerr - ' + jqxhr.sqlerr;
//			responseMsg += '\nsendmail - ' + jqxhr.sendmail;
//			alert('a::'+responseMsg);
			$("#responseMsg").html(responseMsg);
			//$('#loader').hide();
			$("#floatBox").hide();
			$("#pageCover").slideUp();
			$("#content").show();
//			$('html, body').animate({
//	        scrollTop: $("#contact").offset().top
//	    }, 500);
//			return false;
			pageScroll('headImg');
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


function pageScroll (whichTarget)
{
	$('html, body').animate({
	    scrollTop: $("#"+whichTarget).offset().top
	}, 500);
}

function contactSumbitx (whichValue)
{
		//$('#loader').show();
		//CHECK IF BROWSER SUPPORTS HTML5 PLACEHOLDER ATTRIBUTE
		var placeholderSupport = ("placeholder" in document.createElement("input"));
		if(!placeholderSupport)
		{
		  placeSupport = false;
		}
		else
		{
			placeSupport = true;
		}
		
		var canFocus = window.focus;
		if (!canFocus)
		{
			objectFocusSupport = false;
		}
		else
		{
			objectFocusSupport = true;
		}
//		console.log('objectFocusSupport::'+objectFocusSupport);
//		console.log('placeSupport::'+placeSupport);
		//SHOW INPUT LABELS
//		if (!placeSupport)//NO SUPPORT
//		{
//		  $("#ie_msg_name").show();
//		  $("#ie_msg_email").show();
//		  $("#ie_msg_contactno").show();
//		  $("#ie_msg_message").show();
//		}

//		console.log('whichValue::'+whichValue);
		//console.log('this.value2::'+$(this).value());
		var msg_name = $("input#msg_name").val();
		var msg_email = $("input#msg_email").val();
		var msg_contactno = $("input#msg_contactno").val();
		var msg_company = $("input#msg_company").val();
		var msg_message = $("textarea#msg_message").val();
		var hasError = false;
		if (msg_name == '')
		{
//					if(!placeholderSupport)
//					{
				$("#msg_name_error").show();  
				$("#msg_name_error").html("This field is required.");
//					}

			hasError = true;
			if (objectFocusSupport)
			{
				$("#msg_name").focus();
				//return false;
			}
		}

		if (msg_company == '')
		{
//					if(!placeholderSupport)
//					{
				$("#msg_company_error").show();  
				$("#msg_company_error").html("This field is required.");
//					}

			hasError = true;
			if (objectFocusSupport)
			{
				$("#msg_company").focus();
				//return false;
			}
		}
		
		if (msg_email == '' && msg_contactno == '')
		{
//			if(!placeholderSupport)
//			{
				$("#msg_email_error").show();  
				$("#msg_email_error").html("This field is required.");
				$("#msg_contactno_error").show();  
				$("#msg_contactno_error").html("This field is required.");
//			}

			hasError = true;
		}
		else if (msg_contactno == '')
		{
//			if(!placeholderSupport)
//			{
				$("#msg_contactno_error").show();  
				$("#msg_contactno_error").html("This field is required.");
//			}

			hasError = true;
			if (objectFocusSupport)
			{
				$("#msg_contactno").focus();
				//return false;
			}
		}
		else if (msg_contactno != '')
		{
			var isValid = false;
			if (isNumeric(msg_contactno))
			{
				isValid = true;
			}
			if (!isValid)
//			if(!placeholderSupport)
			{
				$("#msg_contactno_error").show();  
				$("#msg_contactno_error").html("Invalid phone number entered.");
				hasError = true;
				if (objectFocusSupport)
				{
					$("#msg_contactno").focus();
					//return false;
				}
			}
		}
		
		if (msg_email == '')
		{
//			if(!placeholderSupport)
//			{
				$("#msg_email_error").show();  
				$("#msg_email_error").html("This field is required.");
//			}

			hasError = true;
			if (objectFocusSupport)
			{
				$("#msg_email").focus();
				//return false;
			}
		}
		else if (msg_email != '')
		{
			var isValid = validateEmail (msg_email);
//			console.log('isValid1::'+isValid);
			if (!isValid)
			{
//			if(!placeholderSupport)
//			{
				$("#msg_email_error").show();  
				$("#msg_email_error").html("Invalid email address entered.");
//			}
				hasError = true;
				if (objectFocusSupport)
				{
					$("#msg_email").focus();
					//return false;
				}
			}
		}
		
		
		if (msg_message == '')
		{
//					if(!placeholderSupport)
//					{
				$("#msg_message_error").show();  
				$("#msg_message_error").html("This field is required.");
//					}

			hasError = true;
			if (objectFocusSupport)
			{
				$("#msg_message").focus();
				//return false;
			}
			
		}

		if (hasError)
		{
			responseMsg = "Please correct form fields.";
			$("#responseMsg").html(responseMsg);
			//$('#loader').hide();
			return false;
		}
		
		//
//    <button type="button" class="btn btn-secondary" data-container="body"
//			data-toggle="popover" data-placement="bottom"
//			data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
//			Popover on bottom
//		</button>
		
		//ALL IS GOOD -> DO ACTUAL SUBMISSION
		var values = {};
		var tmp = '';
		var formFieldCount = 0;
		var dataString = '';
		//var i = formSubSize - 1;
		$.each($('#frmContact').serializeArray(), function(i, field) {
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
		dataString = dataString+'&contact_type='+whichValue;
			
		//console.log('dataString::'+dataString);
		//msg_name=fghfg
		//&msg_contactno=6546546412
		//&msg_company=uyfgfyfftyff
		//&msg_email=uygbiughuygh
		//&msg_message=asdfdsfasdfads
		//&newsletter=Newsletter
		//&contact_details=contact details

		//var dataString = '';
		//dataString = processForm('frmContact', '');
		//alert(dataString);
		//msg_name=Rachel Ludolf&msg_email=william.kruger@universal.co.za&msg_contactno=0794854121&msg_message=dfgsngfnsfgnf
		var responseMsg = '';
		$.ajax({  
		  type: "POST",  
		  url: "_models/doContact.php",  
		  data: dataString,  
		  success: function(r, data1) {
//		 		console.log('SUCCESS');
//		 		console.log('r::'+r);
//		 		console.log('data1::'+data1);
		  	//alert(r);	
				var result = r;//$.parseJSON(r);
				alert('r::'+r);
//				if (result.success==1)
//				{
//					//alert("Thank you for getting in touch! We will contact you soon.");
//					responseMsg = "Thank you for getting in touch! We will contact you soon.";
//				}
//				else
//				{
//					//alert('Your contact request failed\nPlease try again later. - ' + result.error);
//					responseMsg = 'Your contact request failed\nPlease try again later. - ' + result.error;
//				}
				if (data1 != 'success')
				{
					responseMsg += '\nYour contact request failed\nPlease try again later.(r)';
				}
				//$("#responseMsg").html('Response: ' + responseMsg);
		  },  
		 	error: function(jqXHR, data2) {
//		 		console.log('ERROR');
//		 		console.log('jqXHR::::'+jqXHR);
//		 		console.log('data2::::'+data2);
		 		responseMsg += '\nYour contact request failed\nPlease try again later.(data2) - ' + jqXHR;
		 		alert('ERROR::'+jqXHR);
			} 
		})
		.fail(function(JQxhr, data4){
//		 	console.log('FAIL');
//			console.log('JQxhr::'+JQxhr);
//			console.log('data4::'+data4);
		 	responseMsg += '\nYour contact request failed\nPlease try again later.(data4)' + JQxhr;
		 	alert('FAIL'+JQxhr);
		})
		.done(function(jqxhr, data3){
//		 	console.log('DONE');
//			console.log('jqxhr::'+jqxhr);
//			console.log('data3::'+data3);
			alert('DONE::'+jqxhr);
			if (data3 == 'success')
			{
				responseMsg += "\nThank you for getting in touch! We will contact you soon.";
			}
			else
			{
				responseMsg += '\nYour contact request failed\nPlease try again later.(data3)' + jqxhr;
			}
			
//			responseMsg += '\nsuccess - ' + jqxhr.success;
//			responseMsg += '\nsqlerr - ' + jqxhr.sqlerr;
//			responseMsg += '\nsendmail - ' + jqxhr.sendmail;
			$("#responseMsg").html(responseMsg);
			//$('#loader').hide();
			$("#floatBox").hide();
			$("#pageCover").slideUp();
			$("#content").show();
			$('html, body').animate({
	        scrollTop: $("#contact").offset().top
	    }, 500);
			//return false;
		});
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

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}