var commsX = 0;
var commsY = 0;
$(document).ready
	(

		$(function() {
			
//			$('#carousel_register').click(function(){
//				$('#loader').show();
//				$('#pageCover').show();
//				
//				$('#floatBox').load('_controllers/member_info.php');
//				$('#floatBox').show();
//				
//				//$('#pageCover').hide();
//				$('#loader').hide();
//			});
			
			$('#carousel_register').click(function(){
				$("#floatBox").load('_controllers/member_info.php', function(){
					$('#content').hide();
					$('#floatBox').show();					
					$("#floatBox").offset({left:0});//128
					$("#floatBox").offset({top:0});//2695
					$('#loader').fadeOut(100);
				});
			});
			
		})
);

