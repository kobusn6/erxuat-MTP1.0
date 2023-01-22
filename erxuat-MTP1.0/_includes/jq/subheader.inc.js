		$(function() {
			
			$('#adminlogin').click(function(){
				//$("#navbar").hide();
				$('#loader').show();
				//$('#pageCover').show();
				
				$('#content').load('_controllers/loginadmin.php');
				//$('#floatBox').show();
				
				$('#loader').hide();
			});
			
			$('#memberlogin').click(function(){
				//$("#navbar").hide();
				$('#loader').show();
				//$('#pageCover').show();
				
				$('#content').load('_controllers/loginmember.php');
				//$('#floatBox').show();
				
				$('#loader').hide();
			});
			
		});

//(function ($, document, window) {
//	$('#memberlogin').click(function(){
//		$('#loader').show();
//	});
//}(jQuery, document, window));