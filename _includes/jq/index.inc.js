var commsX = 0;
var commsY = 0;
var isMenuOpen = false;
var isMobile = false;

$(document).ready
	(

		$(function() {
			//$("#loader").show();
			//document.addEventListener('touchstart', handle, {passive: true});

//			jQuery.event.special.touchstart = {
//			  setup: function( _, ns, handle ) {
//			      this.addEventListener("scroll-blocking", handle, { passive: !ns.includes("noPreventDefault") });
//			  }
//			};
			//$('#pageCover').show();
			var sessiontype = $("#sessiontype").val();

			if (sessiontype == 'member')
			{			
				$('#loader').show();
				$("#content").load('_controllers/member_info.php?', function(){
					$('#content').show();
					$('#loader').hide();
				});
			}
//			$("#menuContent1").on
//			(
//			//'click focusin focusout propertychange change keyup',
//			'click onmouseout',
//				function()
//				{
//					$("#menuContent1").hide();
//				}
//			);
//			$( "#pagecontainer" ).mousemove(function( event ) {
//			  var msg = "Handler for .mousemove() called at ";
//			  msg += event.pageX + ", " + event.pageY;
//			  //$( "#log" ).append( "<div>" + msg + "</div>" );
//			  //console.log('msg::'+msg);
//			  console.log('headImg::'+$("#headImg").css('visibility'));
//			});
			
//			$(window).on('resize scroll', function() {
////			    if ($('#headImg').isInViewport()) {
////			        // do something
////			        console.log('In View');
////			    } else {
////			        // do something else
////			        console.log('Out of View');
////			    }
//				console.log('Hello');
//			});
			


//				$(window).scroll(function() {
//					//console.log('window width1::'+$(window).width());
//					if ($(window).width() >= 975)
//					{
//						//console.log('window width1::'+$(window).width());
//						//console.log('Do scroll check');
//						//console.log('Hello');
//						//var inView = true;
//						//var inView = isInViewport ('mnuToggle');
//						//var inView = isInViewport ('dropdownMenu1');
//						var inView = isInViewport ('poweredImg');
//						var inView = isInViewport ('headImg');
//						console.log('inView::'+inView);
//						//main-menu
//						//if ($("#hamburger-menu").css('visibility') != 'visible')
//						//{
//							if (!inView)
//							{
//								$("#hamburger-menu").show();
//								//if (isInViewport ('mnuToggle'))
//								$("#menuContent1").hide();
//							}
//							else
//							{
//								$("#hamburger-menu").hide();
//								$('#sidebar-menu').css('left','-250px');
//							}
//						//}
//						
//					}
//					else
//					{
//						$("#hamburger-menu").show();
//						//console.log('window width2::'+$(window).width());
//						//console.log('Do not do scroll check');
//					}					
//				});
//			//$('#loader').hide();
////			$('body').click(function(){
////				
////				if (isInViewport ('menuContent1'))
////				{
////					console.log('close menu');
////					//$("#menuContent1").hide();
////				}
////				else
////				{
////					console.log('menu not visible');
////				}
////			});
//				$('body').click(function(){
////					console.log('isvisible::'+$("#menuContent1").is (':visible'));
////					if ($("#menuContent1").is (':visible'))
////					{
////						console.log('close menu');
////						$("#menuContent1").hide();
////					}
//					console.log('isMenuOpen::'+isMenuOpen);
//					if (isMenuOpen)
//					{
//						isMenuOpen = false;
//						$("#menuContent1").hide();
//					}
//					console.log('expanded::'+$("#dropdownMenu1").attr('aria-expanded'));
//				});
				
//				$('#dropdownMenu1').on
//				(
//				//'click focusin focusout propertychange change keyup',
//				'click mouseout',
//					function()
//					{
//						if ($('#menuContent1').is (':visible'))
//						{
//							$("#menuContent1").hide();
//							isMenuOpen = false;
//						}
//						else
//						{
//							$("#menuContent1").show();
//							isMenuOpen = false;
//						}
//					}
//				);
				$('body').click(function() {
					//console.log('1');
					$("#menuContent1").hide();
					$("#menuAbout").hide();
					$("#menuServices").hide();
					//$("#sidebar-menu").hide();
					if ($('#sidebar-menu').css('left') == '0px')
					{
						$('#sidebar-menu').css('left','-250px');
					}
				});
				$('#mnubtn').click(function(event) {
					//console.log('2');
					//$("#menuContent1").hide();
					event.stopPropagation();
				});
//				$('#sidebar-menu').click(function(event) {
//					//console.log('2');
//					//$("#menuContent1").hide();
//					event.stopPropagation();
//				});
				$('#hamburger-menu').click(function(event) {
					//console.log('2');
					//$("#menuContent1").hide();
					event.stopPropagation();
				});

//				$('.galleryImg').on
//				(
//				//'click focusin focusout propertychange change keyup swipeleft',
//				'click',
//					function()
//					{
////						console.log('this.src::'+this.src);
////						console.log('this.id::'+this.id);
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

//				var timerInterval = 4000;
//				loaderTimer = setInterval
//				(
//					function()
//					{
//						$("#loader").hide();
//					},
//					timerInterval
//				);
			$('#sidebar-menu').css('left','-250px');
		})

	);


function loadingAnimation() {
	var timerInterval = 4000;
	loaderTimer = setInterval
	(
		function()
		{
			$('#loading').hide();
			$('#pageCover').animate(
				{left: '300%'},
			);
			
//			var coverInterval = 4000;
//			coverTimer = setInterval
//			(
//				function()
//				{
//					console.log('YY');
//					$('#pageCover').hide();
//				},
//				coverInterval
//			);
			$('#pageCover').css('height', '0%');
			clearInterval (loaderTimer);
//			clearInterval (coverTimer);
		},
		timerInterval
	);
}


//		$('.videoGif').on
//		(
//			//'click focusin focusout propertychange change keyup swipeleft',
//			'click',
//				function()
//				{
//					console.log('gif video');
//					$("#videoSrc").attr('src', '');
//					//_videos/erx_video8.mp4
//					//console.log('this.id::'+this.id);
//					//var whichVideo = '_videos/'+this.id.replace('gif', '.mp4');
//					//console.log('whichVideo::'+whichVideo);
//					//$("#" + this.id.replace('gif', '') + "Src").attr('src', whichVideo);
//					$('#'+this.id).attr('data-dismiss', 'modal');
//					var whichModal = this.id.replace('gif', '') + 'ModalCentered';
//					$('#'+this.id).attr('data-target', '#' + whichModal);
//					$('#'+this.id).attr('data-toggle', 'modal');
//					$("#" + this.id.replace('gif', '') + "Player")[0].controls = true;
//					$("#" + this.id.replace('gif', '') + "Player")[0].muted = false;
//					$("#" + this.id.replace('gif', '') + "Player")[0].play();
//					setDescription (this.id.replace('gif', ''), (this.id.replace('gif', '') + 'ModalDesc'));
//					//console.log('whichModal::'+whichModal);
//				}
//		);


//$.fn.isInViewport = 
function isInViewport (whichElement) {
  var elementTop = $("#"+whichElement).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  if (whichElement == 'mnuToggle')
  {
  	elementBottom = 200;
  }
  
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

function removeOverlay (whichOverlay, whichVideo, isMobile)
{
	isMobile = isMobile || false;
	//console.log('whichOverlay2::'+whichOverlay);
	//console.log('isMobile::'+isMobile);
	$("#"+whichOverlay).hide();
	if (isMobile)
	{
		$("#"+whichOverlay).removeClass ('mobileDisplay');
	}
	$("#"+whichVideo)[0].controls = true;
	$("#"+whichVideo)[0].muted = false;
	$("#"+whichVideo)[0].play();
}

function vidControl (whichVideo, whichOverlay)
{
	//console.log('whichOverlay2::'+whichOverlay);
	$("#"+whichVideo)[0].pause();
	$("#"+whichVideo)[0].controls = true;
	$("#"+whichVideo)[0].muted = true;
	$("#"+whichOverlay).show();
}

function removeOverlay2 (whichOverlay, whichVideo, isMobile)
{
	var isMobile = isMobile || false;
	//console.log('whichOverlay2::'+whichOverlay);
	//console.log('isMobile::'+isMobile);
	$("#"+whichOverlay).hide();
	//$("#"+whichOverlay).css('opacity', -1);
	if (isMobile)
	{
		$("#"+whichOverlay).removeClass ('mobileDisplay');
	}
	$("#"+whichVideo)[0].controls = true;
	$("#"+whichVideo)[0].muted = false;
	$("#"+whichVideo)[0].play();
}

function vidControl2 (whichVideo, whichOverlay)
{
	var whichAction = '';
	if ($("#"+whichVideo)[0].controls == true)
	{
		whichAction = 'stop';
	}
	else
	{
		whichAction = 'play';
	}
	//console.log('whichAction::'+whichAction);
	if (whichAction == 'play')
	{
		$("#"+whichVideo)[0].controls = true;
		$("#"+whichVideo)[0].muted = false;
		$("#"+whichVideo)[0].play();
	}
	else
	{
		$("#"+whichVideo)[0].pause();
		$("#"+whichVideo)[0].controls = true;
		$("#"+whichVideo)[0].muted = true;
	}
	//console.log('whichOverlay2::'+whichOverlay);
	//$("#"+whichOverlay).show();
	//$("#"+whichOverlay).css('opacity', 1);
}


function swapImage (whichId, doSwap, whichLocation)
{
	//console.log(whichId);
	var doSwap = doSwap || 0;
	var whichLocation = whichLocation || '';
	//console.log('doSwap::'+doSwap);
	if (doSwap)
	{
		$("#"+whichId).attr('src', '_images/'+whichLocation+'/'+whichId+'.png');
		//console.log(''+'_images/'+whichLocation+'/'+whichId+'.png');
	}
	else
	{
		$("#"+whichId).attr('src', '_images/'+whichLocation+'/'+whichId+'_bw.png');
		//console.log(''+'_images/'+whichLocation+'/'+whichId+'_bw.png');
	}
	//console.log(whichId+' src::'+$("#"+whichId).attr('src'));
	//console.log(whichId+' src::');
	//console.log('_images/'+whichLocation+'/'+whichId+'.png');
}



function setDescription (whichImgId, whichDescId)
{
	//console.log('whichImgId::'+whichImgId);
	//console.log('whichDescId::'+whichDescId);
	var whichImgId = whichImgId || '';
	var whichDescId = whichDescId || '';
	var thisDesc = '';
	var whichVidDesc = '';
	//console.log('whichImgId::'+whichImgId);
	switch (whichImgId)
	{
		//RIEDL
		case 'gallery_image1':
			thisDesc = 'RIEDL shelf cleaning unit';
			break;
		case 'gallery_image2':
			thisDesc = 'Remote tech support camera monitoring';
			break;
		case 'gallery_image3':
			thisDesc = 'Optimal glass panels';
			break;
		case 'gallery_image4':
			thisDesc = 'Kinetic Energy Recovery System (KERS) while breaking';
			break;
		case 'gallery_image5':
			thisDesc = 'Medicine delivery via spiral shoots';
			break;
		case 'gallery_image6':
			thisDesc = 'Automated retail pharmacy';
			break;
		case 'gallery_image7':
			thisDesc = 'Optional external storage shelves';
			break;
		case 'gallery_image8':
			thisDesc = 'Semi-automated loading';
			break;
		case 'gallery_image9':
			thisDesc = 'Optional ejection shoot design';
			break;
		case 'gallery_image85':
			thisDesc = 'Organised, dense storage';
			break;
		case 'gallery_image86':
			thisDesc = 'Randomised shelf storage allocation';
			break;
		case 'gallery_image88':
			thisDesc = 'RIEDL Phasys loading bay';
			break;
		case 'gallery_image89':
			thisDesc = 'RIEDL software interface';
			break;
		case 'gallery_image90':
			thisDesc = 'User-friendly interface';
			break;
		case 'gallery_image91':
			thisDesc = 'Guided pack placement';
			break;
		case 'gallery_image92':
			thisDesc = 'Local RIEDL Phasys installed';
			break;
		case 'gallery_image93':
			thisDesc = 'Semi-automated loading of stock';
			break;
		case 'gallery_image94':
			thisDesc = 'Loading onto internal conveyor';
			break;
		case 'gallery_image96':
			thisDesc = 'Barcode verification of all stock for accurate loading';
			break;
		case 'gallery_image97':
			thisDesc = 'RIEDL Phasys interior';
			break;
		case 'gallery_image98':
			thisDesc = 'Gripper at dispensing shoot';
			break;
		case 'gallery_image99':
			thisDesc = 'Wireless RIEDL gripper';
			break;
		case 'gallery_image100':
			thisDesc = 'Multi-gripper RIEDL setup';
			break;
		case 'gallery_image101':
			thisDesc = 'Product expiry date captured';
			break;
		case 'gallery_image102':
			thisDesc = 'Batch loading in seconds';
			break;
		case 'gallery_image103':
			thisDesc = 'Guided pack placement';
			break;
		case 'gallery_image104':
			thisDesc = 'Loading of multiple similar pacts';
			break;
		case 'gallery_image105':
			thisDesc = 'Medicine dispensing port';
			break;
		case 'gallery_image106':
			thisDesc = 'Bespoke layout design';
			break;
		case 'gallery_image108':
			thisDesc = 'The RIEDL Gripper is wireless';
			break;
		case 'gallery_image109':
			thisDesc = 'Custom designed, with external shelving possibilities';
			break;
		case 'gallery_image110':
			thisDesc = 'L-shape configuration';
			break;
		case 'gallery_image113':
			thisDesc = 'Custom configuration';
			break;
		case 'gallery_image116':
			thisDesc = 'i-shape configuration';
			break;
		case 'gallery_image118':
			thisDesc = 'Complex pharmacy solution';
			break;
		case 'gallery_image119':
			thisDesc = 'Customisable length and height';
			break;
		case 'gallery_image120':
			thisDesc = 'External loading bay layout';
			break;
		case 'gallery_image121':
			thisDesc = 'U-shape configuration';
			break;
		case 'gallery_image122':
			thisDesc = 'RIEDL gripper in action';
			break;
		case 'gallery_image123':
			thisDesc = 'Multipicking';
			break;
		case 'video2.gif':
			thisDesc = 'Resting robots';
			whichVidDesc = 'galleryModalDesc4';
			break;
		case 'riedlvideo1':
			thisDesc = 'High performance capacity of the RIEDL robot';
			whichVidDesc = 'riedlvideo1ModalDesc';
			break;
		case 'riedlvideo2':
			thisDesc = 'User friendly, efficient, loading process';
			whichVidDesc = 'riedlvideo2ModalDesc';
			break;
		case 'riedlvideo3':
			thisDesc = 'Multi-picking of identical and unique items - a distinguishing feature';
			whichVidDesc = 'riedlvideo3ModalDesc';
			break;
		case 'riedlvideo4':
			thisDesc = 'RIEDL independently continues with tasks afterhours';
			whichVidDesc = 'riedlvideo4ModalDesc';
			break;
		case 'riedlvideo5':
			thisDesc = 'A locally installed RIEDL in action';
			whichVidDesc = 'riedlvideo5ModalDesc';
			break;
		//SOFTWARE
		case 'gallery_image24':
			thisDesc = 'System cofiguration';
			break;
		case 'erx_video7':
			thisDesc = 'Stock master and system parameters';
			whichVidDesc = 'galleryModalDesc7';
			break;
		case 'erx_video8':
			thisDesc = 'Stock and data reports';
			whichVidDesc = 'galleryModalDesc8';
			break;
		case 'erx_video4':
			thisDesc = 'Multiple users, multiple roles.';
			whichVidDesc = 'galleryModalDesc4';
			break;
		case 'erx_video5':
			thisDesc = 'Sorting, QA and distribution';
			whichVidDesc = 'galleryModalDesc5';
			break;
		case 'erx_video6':
			thisDesc = 'Distribution grouping automation';
			whichVidDesc = 'galleryModalDesc6';
			break;
		//CONVEYING
		case 'gallery_image19':
			thisDesc = 'Various conveyor transitions';
			break;
		case 'gallery_image21':
			thisDesc = 'Rubberised conveyor belt for inclines';
			break;
		case 'gallery_image25':
			thisDesc = 'Various conveyor belt finishes';
			break;
		case 'gallery_image26':
			thisDesc = 'Clear cover - content protection';
			break;
		case 'gallery_image27':
			thisDesc = 'Tamper-proofing conveyor cover';
			break;
		case 'gallery_image38':
			thisDesc = 'Tote delivery and barcode verification/ejection';
			break;
		case 'gallery_image39':
			thisDesc = 'Tote delivered to high capacity pharmacy desk';
			break;
		case 'gallery_image40':
			thisDesc = 'Bespoke tote destacker solution';
			break;
		case 'gallery_image41':
			thisDesc = 'Two-lane tote destacking';
			break;
		case 'gallery_image42':
			thisDesc = 'Ascending conveyor high-grip solution';
			break;
		case 'gallery_image44':
			thisDesc = 'Warehouse conveying solution';
			break;
		case 'gallery_image45':
			thisDesc = 'Roller conveying solution';
			break;
		case 'gallery_image46':
			thisDesc = 'Complex flow management';
			break;
		case 'gallery_image47':
			thisDesc = 'Tote moved into or away-from RIEDL dispensing bay';
			break;
		case 'gallery_image48':
			thisDesc = 'Tote delivery to RIEDL Phasys';
			break;
		case 'gallery_image49':
			thisDesc = 'Conveyor directional change mechanism';
			break;
		case 'gallery_image50':
			thisDesc = 'RoboLight indication static conveyor';
			break;
		case 'gallery_image51':
			thisDesc = 'Programmable RoboLight';
			break;
		case 'gallery_image52':
			thisDesc = 'Hi angle ascending /desending Conveyor for individual medicine Items';
			break;
		case 'gallery_image53':
			thisDesc = 'High quality German parts';
			break;
		case 'video1':
			thisDesc = 'Bespoke Conveying Solution';
			whichVidDesc = 'video1ModalDesc';
			break;
		case 'video2':
			thisDesc = 'Conveyor technology';
			whichVidDesc = 'video2ModalDesc';
			break;
		case 'video3':
			thisDesc = 'Conveyor technology';
			whichVidDesc = 'video3ModalDesc';
			break;
		case 'videom':
			thisDesc = 'Bespoke Conveying Solution';
			whichVidDesc = 'videomModalDesc';
			break;
		case 'conveyingvideo1':
			thisDesc = 'Overhead conveying solution';
			whichVidDesc = 'conveyingvideo1ModalDesc';
			break;
		case 'conveyingvideo2':
			thisDesc = 'Bespoke basic to complex conveying systems';
			whichVidDesc = 'conveyingvideo2ModalDesc';
			break;
		case 'conveyingvideo3':
			thisDesc = 'Bespoke tote destacking solution';
			whichVidDesc = 'conveyingvideo3ModalDesc';
			break;
		//MEKAPHARM
		case 'gallery_image10':
			thisDesc = '<2,520 items per magazine';
			break;
		case 'gallery_image11':
			thisDesc = 'LED guided channel loading';
			break;
		case 'gallery_image13':
			thisDesc = 'Inverted A-frame design';
			break;
		case 'gallery_image14':
			thisDesc = 'Pre-allocated product channels';
			break;
		case 'gallery_image15':
			thisDesc = 'Optional aesthetic LED lighing';
			break;
		case 'gallery_image16':
			thisDesc = 'Fast loading, up to 1,000 items per hour';
			break;
		case 'gallery_image17':
			thisDesc = 'Compact storage';
			break;
		case 'gallery_image18':
			thisDesc = 'Accommodates cylindrical packaging';
			break;
		case 'gallery_image124':
			thisDesc = 'Two-magazine configuration';
			break;
		case 'gallery_image125':
			thisDesc = 'PDA assisted barcode scanning';
			break;
		case 'gallery_image126':
			thisDesc = 'Inverted A-frame design';
			break;
		case 'gallery_image127':
			thisDesc = 'Full order simultaneous delivery';
			break;
		case 'gallery_image128':
			thisDesc = 'Up to 60 items simultaneously ejected';
			break;
		case 'gallery_image129':
			thisDesc = 'Custom dispensing shoot into totes';
			break;
		case 'gallery_image130':
			thisDesc = 'Patented solenoid ejection technology';
			break;
		case 'mekapharmvideo1':
			thisDesc = 'Get to know the Apoteka in action';
			whichVidDesc = 'mekapharmvideo1ModalDesc';
			break;
		case 'mekapharmvideo2':
			thisDesc = 'Follow the route of one complete dispense';
			whichVidDesc = 'mekapharmvideo2ModalDesc';
			break;
		//PROJECTS
		case 'gallery_image28':
			thisDesc = 'Four-bank Apoteka configuration';
			break;
		case 'gallery_image29':
			thisDesc = 'Pre-installation preparations';
			break;
		case 'gallery_image30':
			thisDesc = 'RIEDL components for shipping';
			break;
		case 'gallery_image32':
			thisDesc = 'Installation of RIEDL electrical components';
			break;
		case 'gallery_image33':
			thisDesc = 'Bespoke automation solution planning';
			break;
		case 'gallery_image34':
			thisDesc = 'Conveyor segment awaiting installation';
			break;
		case 'gallery_image35':
			thisDesc = 'Pre-installation ceiling lift';
			break;
		case 'gallery_image36':
			thisDesc = 'Custom look-through window';
			break;
		case 'gallery_image55':
			thisDesc = 'Post-installation testing';
			break;
		case 'gallery_image56':
			thisDesc = 'Expertly skilled tech support';
			break;
		case 'gallery_image57':
			thisDesc = 'Hands-on project management';
			break;
		case 'gallery_image58':
			thisDesc = 'Refrigerated RIEDL installation in progress';
			break;
		case 'gallery_image59':
			thisDesc = 'Real time project management team';
			break;
		case 'gallery_image60':
			thisDesc = 'RIEDL glass shelving awaiting shipment';
			break;
		case 'gallery_image61':
			thisDesc = 'Custom RIEDL side panels for shipping';
			break;
		case 'gallery_image62':
			thisDesc = 'Crated RIEDL Gripper rails to be shipped';
			break;
		case 'gallery_image66':
			thisDesc = 'Apoteka components awaiting installation';
			break;
		case 'gallery_image69':
			thisDesc = 'Local and international Mekapharm technicians';
			break;
		case 'gallery_image70':
			thisDesc = 'Expertly trained technicians at work';
			break;
		case 'gallery_image71':
			thisDesc = 'Apoteka side panel fitment';
			break;
		case 'gallery_image72':
			thisDesc = 'Apoteka conveyor fitment';
			break;
		case 'gallery_image140':
			thisDesc = 'Apoteka channels being installed';
			break;
		case 'gallery_image141':
			thisDesc = 'Alignment of the Apoteka conveyor';
			break;
		case 'gallery_image142':
			thisDesc = 'Delivery of Robotic components';
			break;
	}
//	console.log('whichDescId::'+whichDescId);
//	console.log('whichVidDesc::'+whichVidDesc);
//	console.log('whichImgId::'+whichImgId);
//	console.log('thisDesc::'+thisDesc);

	if (whichVidDesc != '')
	{
		whichDescId = whichVidDesc;
	}
	//whichDescId = whichDescId.replace('Desc', 'Label');
	if (thisDesc != '')
	{
		$('#'+whichDescId).html(thisDesc);
	}
	//console.log('whichDescId::'+whichDescId);
}


function setToColor(whichElement)
{
	var thisPath = '_images/gifs/';
	var thisExt = '.gif';
	if (whichElement.substr(0, 3) == 'erx')
	{
		thisPath = '_videos/';
		thisExt = '.jpg';
	}
	$("#"+whichElement).css('-webkit-filter', 'grayscale(0)');
	$("#"+whichElement).css('filter', 'none');
	$("#"+whichElement).attr('src', thisPath + whichElement + thisExt);
}


function setToGray(whichElement)
{
	var thisPath = '_images/gifs/';
	if (whichElement.substr(0, 3) == 'erx')
	{
		thisPath = '_videos/';
	}
	$("#"+whichElement).css('-webkit-filter', 'grayscale(1)');
	$("#"+whichElement).css('filter', 'gray');
	$("#"+whichElement).css('filter', 'grayscale(1)');
	$("#"+whichElement).attr('src', thisPath + whichElement + '.jpg');
}