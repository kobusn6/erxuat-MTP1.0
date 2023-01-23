var commsX = 0;
var commsY = 0;
$(document).ready
	(
		$(function() {
			$("#loader").show();
//				$('.galleryImg').on
//				(
//				//'click focusin focusout propertychange change keyup swipeleft',
//				'click',
//					function()
//					{
//						console.log('this.src::'+this.src);
//						console.log('this.id::'+this.id);
//						//$("#modalPlayer").hide();
//						var thisSrc = this.src;
//						var locationIndex = thisSrc.indexOf ('_images');
//						var thisDomain = thisSrc.substr(0, locationIndex);
//						thisSrc = thisSrc.replace(thisDomain, '');
//						thisSrc = thisSrc.replace('/gallery_', '/hres/gallery_');
//						thisSrc = thisSrc.replace('_bw', '');
//						thisSrc = thisSrc.replace('.jpg', '.png');
//						console.log('thisSrc::'+thisSrc);
//						$('#'+this.id).attr('data-target', '#galleryModalCentered');
//						$('#'+this.id).attr('data-toggle', 'modal');
//						$('#modalImg').attr('src', thisSrc);
//						//$('#modalImg').show();
//					}
//				);

				$('.videoImg').on
				(
				//'click focusin focusout propertychange change keyup swipeleft',
				'click',
					function()
					{
						//$("#loader").show();
						//console.log('this.id::'+this.id);
						var whichModal = this.id + 'ModalCentered';
//						$('#modalImg').hide();
//						var thisSrc = this.src;
//						var locationIndex = thisSrc.indexOf ('_videos');
//						var thisDomain = thisSrc.substr(0, locationIndex);
//						thisSrc = thisSrc.replace(thisDomain, '');
//						thisSrc = thisSrc.replace('.jpg', '.mp4');
//						//src="_videos/erx_video4.jpg"
//						//src="_videos/erx_video4.mp4"
//						
//						//var locationIndex = thisSrc.indexOf ('_images');
//						//var thisDomain = thisSrc.substr(0, locationIndex);
//						//thisSrc = thisSrc.replace(thisDomain, '');
//						//thisSrc = thisSrc.replace('/gallery_', '/hres/gallery_');
//						//thisSrc = thisSrc.replace('.jpg', '.png');
//						
						$('#'+this.id).attr('data-target', '#' + whichModal);
						$('#'+this.id).attr('data-toggle', 'modal');
//						//$('#modalImg').attr('src', thisSrc);
//						$("#vidSrc").attr('src', thisSrc);
//						$('#vidSrc').attr('preload', 'none');
//						$('#vidSrc').attr('controls', 'true');
//						$('#vidSrc').attr('muted', 'false');
							//$('#' + whichModal).show();
							$("#" + this.id + "Player")[0].controls = true;
							$("#" + this.id + "Player")[0].muted = false;
							$("#" + this.id + "Player")[0].play();
							//$("#loader").hide();
					}
				);

//				$('#starter').on
//				(
//				//'click focusin focusout propertychange change keyup swipeleft',
//				'click',
//					function()
//					{
//						console.log('vid start');
////						var thisSrc = this.src;
////						var locationIndex = thisSrc.indexOf ('_images');
////						var thisDomain = thisSrc.substr(0, locationIndex);
////						thisSrc = thisSrc.replace(thisDomain, '');
////						thisSrc = thisSrc.replace('/gallery_', '/hres/gallery_');
////						thisSrc = thisSrc.replace('.jpg', '.png');
////						$('#'+this.id).attr('data-target', '#galleryModalCentered');
////						$('#'+this.id).attr('data-toggle', 'modal');
////						$('#modalImg').attr('src', thisSrc);
//							$("#starter").removeClass('hide');
//							$("#player").removeClass('hide');
//							$("#starter").addClass('hide');
//							$("#starter").hide();
//							//$("#player").show();
//							$("#player")[0].play();
////							$("#"+whichVideo)[0].pause();
////							$("#"+whichVideo)[0].controls = false;
////							$("#"+whichVideo)[0].muted = true;
////							$("#"+whichOverlay).show();
////							$("#"+whichVideo)[0].controls = true;
////							$("#"+whichVideo)[0].muted = false;
////							$("#"+whichVideo)[0].play();
//					}
//				);
				
				
//				$("#vidPlay").on
//				(
//				//'click focusin focusout propertychange change keyup swipeleft',
//				'ended',
//					function()
//					{
//						console.log('vid ended');
//							$("#starter").removeClass('hide');
//							$("#player").removeClass('hide');
//							$("#player").addClass('hide');
//							$("#player")[0].pause();
//							$("#player").hide();
//							$("#starter").show();
////							$("#"+whichVideo)[0].pause();
////							$("#"+whichVideo)[0].controls = false;
////							$("#"+whichVideo)[0].muted = true;
////							$("#"+whichOverlay).show();
////							$("#"+whichVideo)[0].controls = true;
////							$("#"+whichVideo)[0].muted = false;
////							$("#"+whichVideo)[0].play();
//					}
//				);


//				$('#player').on
//				(
//				//'click focusin focusout propertychange change keyup swipeleft',
//				'ended',
//					function()
//					{
//						console.log('vid ended');
//							$("#starter").removeClass('hide');
//							$("#player").removeClass('hide');
//							$("#player").addClass('hide');
//							$("#player")[0].pause();
//							$("#player").hide();
//							$("#starter").show();
////							$("#"+whichVideo)[0].pause();
////							$("#"+whichVideo)[0].controls = false;
////							$("#"+whichVideo)[0].muted = true;
////							$("#"+whichOverlay).show();
////							$("#"+whichVideo)[0].controls = true;
////							$("#"+whichVideo)[0].muted = false;
////							$("#"+whichVideo)[0].play();
//					}
//				);
				
			var timerInterval = 4000;
			loaderTimer = setInterval
			(
				function()
				{
					$('#loader').hide();
				},
				timerInterval
			);
		})

	
//		$(function(){
//		  // Bind the swipeleftHandler callback function to the swipe event on div.box
//		  $( "img.galleryImg" ).on( "swipeleft", swipeleftHandler );
//		 
//		  // Callback function references the event target and adds the 'swipeleft' class to it
//		  function swipeleftHandler( event ){
//		    $( event.target ).addClass( "swipeleft" );
//		  }
//		})
		
	);

//function swapImage (whichId, doSwap, whichLocation)
//{
//	//console.log(whichId);
//	var doSwap = doSwap || 0;
//	var whichLocation = whichLocation || '';
//	//console.log('doSwap::'+doSwap);
//	if (doSwap)
//	{
//		$("#"+whichId).attr('src', '_images/'+whichLocation+'/'+whichId+'.jpg');
//		//console.log(''+'_images/'+whichLocation+'/'+whichId+'.jpg');
//	}
//	else
//	{
//		$("#"+whichId).attr('src', '_images/'+whichLocation+'/'+whichId+'_bw.jpg');
//		//console.log(''+'_images/'+whichLocation+'/'+whichId+'_bw.jpg');
//	}
//	//console.log(whichId+' src::'+$("#"+whichId).attr('src'));
//	//console.log(whichId+' src::');
//	//console.log('_images/'+whichLocation+'/'+whichId+'.jpg');
//}