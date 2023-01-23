var commsX = 0;
var commsY = 0;

$(document).ready
	(
		$(function() {
			
//				$('.galleryImg').on
//				(
//				//'click focusin focusout propertychange change keyup swipeleft',
//				'click',
//					function()
//					{
//						var thisSrc = this.src;
//						var locationIndex = thisSrc.indexOf ('_images');
//						var thisDomain = thisSrc.substr(0, locationIndex);
//						thisSrc = thisSrc.replace(thisDomain, '');
//						thisSrc = thisSrc.replace('/gallery_', '/hres/gallery_');
//						thisSrc = thisSrc.replace('.jpg', '.png');
//						$('#'+this.id).attr('data-target', '#galleryModalCentered');
//						$('#'+this.id).attr('data-toggle', 'modal');
//						$('#modalImg').attr('src', thisSrc);
//					}
//				);

//				$('.viewImg').on
//				(
//				//'click focusin focusout propertychange change keyup swipeleft',
//				'click',
//					function()
//					{
//						//console.log('this.id::'+this.id);
//						var thisSrc = this.src;
//						var locationIndex = thisSrc.indexOf ('_images');
//						var thisDomain = thisSrc.substr(0, locationIndex);
//						thisSrc = thisSrc.replace(thisDomain, '');
//						//thisSrc = thisSrc.replace('/gallery_', '/hres/gallery_');
//						//thisSrc = thisSrc.replace('.jpg', '.png');
//						$('#'+this.id).attr('data-target', '#imgModalCentered');
//						$('#'+this.id).attr('data-toggle', 'modal');
//						$('#imgModalImg').attr('src', thisSrc);
//						//console.log('1');
//					}
//				);		
				
		})
		
		

		
	);
//		$(function() {
//			
//
//
//
//
//			
//		});

		function hoverBlock (whichId, doShow)
		{
			var doShow = doShow || 0;
			if (doShow)
			{
				$("#block"+whichId).show();
			}
			else
			{
				$("#block"+whichId).hide();
			}
		}
		
		// set pages/ sections here as the menu will display and hide the relevant sections
//		function setPages (whichIndex, doTrigger)
//		{
//			$('#loading').show();
//			//console.log('doTrigger1::'+doTrigger);
//			whichIndex = whichIndex || 0;
//			doTrigger = doTrigger || 0;
////			console.log('whichIndex::'+whichIndex);
//			//0
//			//Home
//			//Gallery
//			//ContactUs
//			//1
//			//AboutUs
//			//2
//			//Services
//			//3
//			//Articles
//			
//			// hide all sections
//			$("#homeHeadText").hide();
//			$("#tiles").hide();
//			$("#track").hide();
//			$("#gallery").hide();
//			$("#contact").hide();
//			$("#about").hide();
//			$("#services").hide();
//			$("#articles").hide();
//			$("#privacy").hide();
//			$('#headImg').removeClass('headImg1');
//			$('#headImg').removeClass('headImg2');
//			$('#headImg').removeClass('headImg3');
//			$('#headImg').removeClass('headImg4');
//			var imageUrl = "_images/header_home_1300_415.png";
//			var whichClass = 'headImg1';
//			if (whichIndex == 0)
//			{
//				$("#tiles").show();
//				$("#track").show();
//				$("#gallery").show();
//				$("#contact").show();
//				
//				$("#about").hide();
//				$("#services").hide();
//				$("#articles").hide();
//				$("#privacy").hide();
//				$("#homeHeadText").show();
//				imageUrl = "_images/header_home_1300_415.png";
//				whichClass = 'headImg1';
//				showGallery('riedl');
//				showGallery('mekapharm');
//				showGallery('software');
//				showGallery('conveying');
//				showGallery('projects');
//			}
//			else if (whichIndex == 1)
//			{
//				$("#about").show();
//				
//				$("#tiles").hide();
//				$("#track").hide();
//				$("#gallery").hide();
//				$("#contact").hide();
//				$("#services").hide();
//				$("#articles").hide();
//				$("#privacy").hide();
//				imageUrl = "_images/header_about.png";
//				whichClass = 'headImg2';
//			}
//			else if (whichIndex == 2)
//			{
//				$("#services").show();
//				
//				$("#tiles").hide();
//				$("#track").hide();
//				$("#gallery").hide();
//				$("#contact").hide();
//				$("#about").hide();
//				$("#articles").hide();
//				$("#privacy").hide();
//				imageUrl = "_images/header_services_1300_400.png";
//				whichClass = 'headImg3';
//			}
//			else if (whichIndex == 3)
//			{
//				$("#articles").show();
//				
//				$("#tiles").hide();
//				$("#track").hide();
//				$("#gallery").hide();
//				$("#contact").hide();
//				$("#about").hide();
//				$("#services").hide();
//				$("#privacy").hide();
//				imageUrl = "_images/header_articles.png";
//				whichClass = 'headImg4';
//				$("#carousel_articles").load('_views/articles_carousel.php');
//			}
//			else if (whichIndex == 4)
//			{
//				$("#privacy").show();
//				imageUrl = "_images/header_articles.png";
//				whichClass = 'headImg1';
//			}
//			//console.log('imageUrl::'+imageUrl);
//			//console.log('whichClass::'+whichClass);
//			$('#headImg').addClass(whichClass);
//      //$("#headImg").css("background", 'url("' + imageUrl + '")');
//			//console.log('doTrigger2::'+doTrigger);
////      if (doTrigger)
////      {
////				console.log('doTrigger3::'+doTrigger);
////				$("#dropdownMenu1").trigger('click');
//			$("#menuContent1").hide();
////			}
//			var timerInterval = 4000;
//			loaderTimer = setInterval
//			(
//				function()
//				{
//					$('#loading').hide();
//				},
//				timerInterval
//			);
//		}