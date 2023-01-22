var commsX = 0;
var commsY = 0;
$(document).ready
	(
		$(function() {
//			$("#loader").show();
//				$('.galleryImg').on
//				(
//				//'click focusin focusout propertychange change keyup swipeleft',
//				'click',
//					function()
//					{
////						console.log('this.src::'+this.src);
//						console.log('this.id::'+this.id);
//						//$("#modalPlayer").hide();
//						var thisSrc = this.src;
//						var locationIndex = thisSrc.indexOf ('_images');
//						var thisDomain = thisSrc.substr(0, locationIndex);
//						thisSrc = thisSrc.replace(thisDomain, '');
//						thisSrc = thisSrc.replace('/gallery_', '/hres/gallery_');
//						thisSrc = thisSrc.replace('_bw', '');
//						thisSrc = thisSrc.replace('.jpg', '.png');
////						console.log('thisSrc::'+thisSrc);
//						$('#'+this.id).attr('data-target', '#galleryModalCentered');
//						$('#'+this.id).attr('data-toggle', 'modal');
//						$('#modalImg').attr('src', thisSrc);
//						//$('#modalImg').show();
//						$("#galleryModalDesc").html('TEST');
//					}
//				);

//				$('.videoImg').on
//				(
//				//'click focusin focusout propertychange change keyup swipeleft',
//				'click',
//					function()
//					{
//						//$("#loader").show();
//						//console.log('this.id::'+this.id);
//						var whichModal = this.id + 'ModalCentered';
////						$('#modalImg').hide();
////						var thisSrc = this.src;
////						var locationIndex = thisSrc.indexOf ('_videos');
////						var thisDomain = thisSrc.substr(0, locationIndex);
////						thisSrc = thisSrc.replace(thisDomain, '');
////						thisSrc = thisSrc.replace('.jpg', '.mp4');
////						//src="_videos/erx_video4.jpg"
////						//src="_videos/erx_video4.mp4"
////						
////						//var locationIndex = thisSrc.indexOf ('_images');
////						//var thisDomain = thisSrc.substr(0, locationIndex);
////						//thisSrc = thisSrc.replace(thisDomain, '');
////						//thisSrc = thisSrc.replace('/gallery_', '/hres/gallery_');
////						//thisSrc = thisSrc.replace('.jpg', '.png');
////						
//						$('#'+this.id).attr('data-target', '#' + whichModal);
//						$('#'+this.id).attr('data-toggle', 'modal');
////						//$('#modalImg').attr('src', thisSrc);
////						$("#vidSrc").attr('src', thisSrc);
////						$('#vidSrc').attr('preload', 'none');
////						$('#vidSrc').attr('controls', 'true');
////						$('#vidSrc').attr('muted', 'false');
//							//$('#' + whichModal).show();
//							$("#" + this.id + "Player")[0].controls = true;
//							$("#" + this.id + "Player")[0].muted = false;
//							$("#" + this.id + "Player")[0].play();
//							//$("#loader").hide();
//					}
//				);

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
				
				
			//showGallery('riedl');
			
//			var timerInterval = 4000;
//			loaderTimer = setInterval
//			(
//				function()
//				{
//					$('#loader').hide();
//				},
//				timerInterval
//			);
			//console.log('set gallery');
			showGallery('riedl');
			showGallery('mekapharm');
			showGallery('software');
			showGallery('conveying');
			showGallery('projects');




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


//	$(".galleryVideoImg").on
//	(
//		'focusout',
//		function()
//		{
//			console.log('video close');
//			$("#mekapharmvideo1Player")[0].controls = false;
//			$("#mekapharmvideo1Player")[0].muted = true;
//			$("#mekapharmvideo1Player")[0].pause();
////			$("#video1Player")[0].controls = false;
////			$("#video1Player")[0].muted = true;
////			$("#video1Player")[0].pause();
////			$("#video2Player")[0].controls = false;
////			$("#video2Player")[0].muted = true;
////			$("#video2Player")[0].pause();
////			$("#video3Player")[0].controls = false;
////			$("#video3Player")[0].muted = true;
////			$("#video3Player")[0].pause();
//		}
//	);

	
function showGallery (whichGallery)
{
	//console.log('whichGallery::'+whichGallery);
	//clear out all other galleries
	$("#gallery_riedl").html('');
	$("#gallery_mekapharm").html('');
	$("#gallery_software").html('');
	$("#gallery_conveying").html('');
	$("#gallery_projects").html('');
	
	$("#gallery_riedl").html('<h3 class="fsLight" style="cursor:pointer;" onclick="showGallery(\'riedl\');">View Gallery</h3>');
	$("#gallery_mekapharm").html('<h3 class="fsLight" style="cursor:pointer;" onclick="showGallery(\'mekapharm\');">View Gallery</h3>');
	$("#gallery_software").html('<h3 class="fsLight" style="cursor:pointer;" onclick="showGallery(\'software\');">View Gallery</h3>');
	$("#gallery_conveying").html('<h3 class="fsLight" style="cursor:pointer;" onclick="showGallery(\'conveying\');">View Gallery</h3>');
	$("#gallery_projects").html('<h3 class="fsLight" style="cursor:pointer;" onclick="showGallery(\'projects\');">View Gallery</h3>');

	$("#gallery_"+whichGallery).load('_views/gallery_'+whichGallery+'.php');
	//$("#load").load("test.html");
}


		$('.videoGifGallery').on
		(
			//'click focusin focusout propertychange change keyup swipeleft',
			'click',
				function()
				{
					//console.log('gallery gif video');
					$("#videoSrc").attr('src', '');
					//_videos/erx_video8.mp4
					//console.log('this.id::'+this.id);
					//var whichVideo = '_videos/'+this.id.replace('gif', '.mp4');
					//console.log('whichVideo::'+whichVideo);
					//$("#" + this.id.replace('gif', '') + "Src").attr('src', whichVideo);
					$('#'+this.id).attr('data-dismiss', 'modal');
					var whichModal = this.id.replace('gif', '') + 'ModalCentered';
					$('#'+this.id).attr('data-target', '#' + whichModal);
					$('#'+this.id).attr('data-toggle', 'modal');
					$("#" + this.id.replace('gif', '') + "Player")[0].controls = true;
					$("#" + this.id.replace('gif', '') + "Player")[0].muted = false;
					$("#" + this.id.replace('gif', '') + "Player")[0].play();
					setDescription (this.id.replace('gif', ''), (this.id.replace('gif', '') + 'ModalDesc'));
					//setDescription (this.id.replace('gif', ''), (this.id.replace('gif', '') + 'ModalLabel'));
					//console.log('whichModal::'+whichModal);
				}
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