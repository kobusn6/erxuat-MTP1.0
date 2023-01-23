var commsX = 0;
var commsY = 0;

		$(function() {

			//ADMIN NAVIGATION
			$('#nav_member_info').click(function(){
				$('#loader').show();
				setMenu(this.id);
				$("#content").load('_controllers/member_info.php?', function(){
					$('#content').show();
					$('#loader').hide();
				});
			});
			
			$('#nav_member_ads').click(function(){
				$('#loader').show();
				setMenu(this.id);
				$("#content").load('_controllers/member_ads.php?', function(){
					$('#content').show();
					$('#loader').hide();
				});
			});
			
			$('#nav_member_account').click(function(){
				$("#pageCover").show();
				$('#loader').show();
				//setMenu(this.id);
				createStatement();
//				$("#content").load('', function(){
//					$('#content').show();
					$('#loader').hide();
//				});
			});
			
			$('#nav_member_reports').click(function(){
				$('#loader').show();
				setMenu(this.id);
				$("#content").load('_controllers/member_reports.php?', function(){
					$('#content').show();
					$('#loader').hide();
				});
			});
			
			$('#nav_member_logout').click(function(){
				$('#loader').show();
				setMenu(this.id);
//				alert('logout');
						var dataString = '';
						$.ajax({  
						  type: "POST",  
						  url: "_controllers/dologin.php?action=logout",  
						  data: dataString,  
						  success: function(r) {
						  	//alert(r);
						  	
						  	var result = $.parseJSON(r);
						  	
						  	if (result.success)
						  	{
						  		isSuccess = 1;
						  	}
						  	else
						  	{
							  	alert('System unavailable at the moment, please check back later.');
							  	//alert(result.error);
						  	}
								
						  },  
						 	error: function() {
						 		alert('Process failed - log_on');
						 		//$('#adminLoginForm').prepend("<h2>Login Failed!!!</h2>");
							} 
						}).done(function() { 
							//alert(isSuccess);
							if (isSuccess)
							{
								window.location.href = "index.php";
							}
						});				
				
				$('#loader').hide();
			});
			//ADMIN NAVIGATION
//			
//			
//			//MEMBER NAVIGATION
//			//MEMBER NAVIGATION
			
		});
		
		


//		$(function() {
			
//			$('#keywords').click(function(){
//				$('#keywords').val('');
//			});
////			$('#keywords').blur(function(){
////				if ($('#keywords').val() == '')
////				{
////					$('#keywords').val('Enter keywords to search for');
////				}
////			});
//			
//		  $('#searchgo').click(function(){
//		  	
//		  	if ($('#keywords').val() == 'Enter keywords to search for')
//		  	{
//		  		//alert('Please enter keywords');
//		  		$('#keywords').val('');
//		  		//return false;
//		  	}
//		  	
//				var keywords = $('#keywords').val().replace(/ /g,",");
//				//var keywords = $("#keywords").val( $("#keywords").val().replace(".", ":") );
//				
////				$('#keywords').val( function(i, val){
////					keywords = keywords.replace(" ",",");
////				});
//				
////				keywords = keywords.replace(" ",",");
//				//keywords = keywords.replaceAll(" ",",");
//				//alert(keywords);
//				//alert(catid);
//				//$("right_content").load('_controllers/search_results.php?catid='+catid);
//				
//				
////				$('input, select').each(
////				    function(index){  
////				        var input = $(this);
////				        if (input.attr('type') == 'checkbox' || input.attr('type') == 'text')
////				        {
////				        	alert('Type: ' + input.attr('type') + '\nID: ' + input.attr('id') + '\nName: ' + input.attr('name') + '\nValue: ' + input.val() + '\nDispVal: ' + input.text());
////				        }
////				    }
////				);			
//				
//				var values = {};
//				var tmp = '';
//				var formFieldCount = 0;
//				var dataString = '';
//				//var i = formSubSize - 1;
//				$.each($('#frmSearch').serializeArray(), function(i, field) {
//				    formFieldCount = formFieldCount + 1;
//				    values[field.name] = field.value;
//						//alert(field.name);
//						if (field.name == 'keywords')
//						{
//							//alert(field.value);
//							field.value = field.value.replace(/ /g,",");
//							//alert(field.value);
//						}
//						if (formFieldCount > 1)
//						{
//							dataString = dataString+'&'+field.name+'='+field.value;
//						}
//						else
//						{
//							dataString = field.name+'='+field.value;
//						}
//						
//				});	
//				//alert(dataString);
//				
//				$('#pageCover').show();
//				$('#loader').show();
//				//$("#right_content").load('_controllers/search_results.php?keywords='+keywords, function(){
//				$("#searchResultsDiv").load('_controllers/search_results.php?'+dataString, function(){
//					$('#searchResultsDiv').show();
//					$('#loader').fadeOut(100);
//				});
//		  });
//		});
		
//		function getCatAdds(catid)
//		{
//			//alert(catid);
//			//$("right_content").load('_controllers/search_results.php?catid='+catid);
//			$('#loader').show();
//			$("#right_content").load('_controllers/search_results.php?catid='+catid, function(){
//				$('#loader').fadeOut(100);
//			});
//			return false;
//		}
		
//		function getAdds()
//		{
//			var keywords = $('#keywords')
//			alert(keywords);
//			//alert(catid);
//			//$("right_content").load('_controllers/search_results.php?catid='+catid);
//			$('#loader').show();
//			$("#right_content").load('_controllers/search_results.php?catid='+catid+'&keywords='+keywords, function(){
//				$('#loader').fadeOut(100);
//			});
//			return false;
//		}

	function createStatement(whichId)
	{
		$("#pageCover").show();
		$("#floatBox").html('<div onclick="closeDiv(\'floatBox\' , 1);" class="divClose" >[CLOSE]</div>');
		$("#floatBox").append('<iframe src="_models/doStatement.php" width="100%" height="90%"></iframe>');
		$("#floatBox").attr('class', 'pdfbox');
		$("#floatBox").show();
		$("#floatBox").offset({left:0});
		$("#floatBox").offset({top:0});
	}