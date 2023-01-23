var commsX = 0;
var commsY = 0;
$(document).ready
	(
		function()
		{
				$('#hamburger-menu').click (function(){
					//console.log($('#sidebar-menu').css('left'));
					if ($('#sidebar-menu').css('left') == '0px')
					{
						$('#sidebar-menu').css('left','-250px');
					}
					else
					{
						$('#sidebar-menu').css('left','0px');
					}
				});
				
				$('.mobmnu').click (function(){
					$('#sidebar-menu').css('left','-250px');
					if ($('#sidebar-menu').css('left') == '0px')
					{
						$('#sidebar-menu').css('left','-250px');
					}
					$("#menuContent1").hide();
				});

				$('#dropdownMenu1').on
				(
				//'click focusin focusout propertychange change keyup',
				'click',
					function()
					{
						if ($('#menuContent1').is (':visible'))
						{
							$("#menuContent1").hide();
							isMenuOpen = false;
						}
						else
						{
							$("#menuContent1").show();
							isMenuOpen = false;
							//$("#menuContent1").attr('aria-expanded' ,true);
						}

					}
				);
				
				$(".mnuItem").on
				(
				//'click focusin focusout propertychange change keyup',
				'click',
					function()
					{
						$("#menuServices").hide();
						$("#menuAbout").hide();
					}
				);
				
				$('#dropdownMenuAbout').on
				(
				//'click focusin focusout propertychange change keyup',
				'click',
					function()
					{
						$("#menuServices").hide();
						if ($('#menuAbout').is (':visible'))
						{
							$("#menuAbout").hide();
							isMenuOpen = false;
						}
						else
						{
							$("#menuAbout").show();
							isMenuOpen = false;
						}
					}
				);

				$('#dropdownMenuServices').on
				(
				//'click focusin focusout propertychange change keyup',
				'click',
					function()
					{
						$("#menuAbout").hide();
						if ($('#menuServices').is (':visible'))
						{
							$("#menuServices").hide();
							isMenuOpen = false;
						}
						else
						{
							$("#menuServices").show();
							isMenuOpen = false;
						}
					}
				);
				
				//PUBLIC NAVIGATION
				$(window).scroll(function() {
					if ($(window).width() >= 975)
					{
						var inView = isInViewport ('mnuToggle');
						if (!inView)
						{
							$("#hamburger-menu").show();
							//if (isInViewport ('mnuToggle'))
							$("#menuContent1").hide();
							$("#menuAbout").hide();
							$("#menuServices").hide();
						}
						else
						{
							$("#hamburger-menu").hide();
							$('#sidebar-menu').css('left','-250px');
						}
					}
					else
					{
						$("#hamburger-menu").show();
					}					
				});
				
				$(window).click(function() {
//					if ($('#menuContent1').is (':visible'))
//					{
//						$("#menuContent1").hide();
//					}
//					else
//					{
//						$("#menuContent1").show();
//					}

//					console.log(event.target);
//				  if (!event.target.matches('.dropbtn')) {
//				    var dropdowns = document.getElementsByClassName("dropdown-menu");
//				    var i;
//				    for (i = 0; i < dropdowns.length; i++) {
//				      var openDropdown = dropdowns[i];
//				      console.log(openDropdown);
//				      if (openDropdown.classList.contains('show')) {
//				        openDropdown.classList.remove('show');
//				      }
//				    }
//				  }
				});

//				window.onclick = function(event) {
//				  if (!event.target.matches('.dropbtn')) {
//				    var dropdowns = document.getElementsByClassName("dropdown-menu");
//				    var i;
//				    for (i = 0; i < dropdowns.length; i++) {
//				      var openDropdown = dropdowns[i];
//				      if (openDropdown.classList.contains('show')) {
//				        openDropdown.classList.remove('show');
//				      }
//				    }
//				  }
//				}

		}
	);
	
	function hideThis (whichId)
	{
		whichId = whichId || '';
		if (whichId != '')
		{
			$("#"+whichId).hide();
		}
	}

		// set pages/ sections here as the menu will display and hide the relevant sections
		function setPages (whichIndex, doTrigger, event)
		{
			$('#pageCover').removeClass('pagecover');
			$('#pageCover').addClass('pagecover');
			$('#loading').show();
			$('#pageCover').show();
			$('#pageCover').css('display', 'block');
			$('#pageCover').css('left', '0px');
			$('#pageCover').css('height', '1500%');
			loadingAnimation();

			//console.log('doTrigger1::'+doTrigger);
			whichIndex = whichIndex || 0;
			doTrigger = doTrigger || 0;
//			console.log('whichIndex::'+whichIndex);
			//0
			//Home
			//Gallery
			//ContactUs
			//1
			//AboutUs
			//2
			//Services
			//3
			//Articles
			
			// hide all sections
			$("#homeHeadText").hide();
			$("#tiles").hide();
			$("#track").hide();
			$("#gallery").hide();
			$("#contact").hide();
			$("#about").hide();
			//$("#services").hide();
			$("#services_riedl").hide();
			$("#services_mekapharm").hide();
			$("#services_conveyor").hide();
			$("#services_software").hide();
			$("#privacy").hide();
			$('#headImg').removeClass('headImg1');
			$('#headImg').removeClass('headImg2');
			$('#headImg').removeClass('headImg3');
			$('#headImg').removeClass('headImg4');
			var imageUrl = "_images/header_home_1300_415.png";
			var whichClass = 'headImg1';
			if (whichIndex == 0)
			{
				$("#tiles").show();
				$("#track").show();
				$("#gallery").show();
				$("#contact").show();
				
				$("#about").hide();
				$("#services_riedl").hide();
				$("#services_mekapharm").hide();
				$("#services_conveyor").hide();
				$("#services_software").hide();
				$("#articles").hide();
				$("#privacy").hide();
				$("#homeHeadText").show();
				imageUrl = "_images/header_home_1300_415.png";
				whichClass = 'headImg1';
				showGallery('riedl');
				showGallery('mekapharm');
				showGallery('software');
				showGallery('conveying');
				showGallery('projects');
			}
			else if (whichIndex == 1)
			{
				$("#about").show();
				
				$("#tiles").hide();
				$("#track").hide();
				$("#gallery").hide();
				$("#contact").hide();
				$("#services_riedl").hide();
				$("#services_mekapharm").hide();
				$("#services_conveyor").hide();
				$("#services_software").hide();
				$("#articles").hide();
				$("#privacy").hide();
				imageUrl = "_images/header_about.png";
				whichClass = 'headImg2';
			}
			else if (whichIndex == 2)
			{
				//console.log('SERVICES');
				//$("#services").show();
				$("#services_riedl").show();
				$("#services_mekapharm").show();
				$("#services_conveyor").show();
				$("#services_software").show();
				
				$("#tiles").hide();
				$("#track").hide();
				$("#gallery").hide();
				$("#contact").hide();
				$("#about").hide();
				$("#articles").hide();
				$("#privacy").hide();
				imageUrl = "_images/header_services_1300_400.png";
				whichClass = 'headImg3';
			}
			else if (whichIndex == 3)
			{
				$("#articles").show();
				
				$("#tiles").hide();
				$("#track").hide();
				$("#gallery").hide();
				$("#contact").hide();
				$("#about").hide();
				$("#services_riedl").hide();
				$("#services_mekapharm").hide();
				$("#services_conveyor").hide();
				$("#services_software").hide();
				$("#privacy").hide();
				imageUrl = "_images/header_articles.png";
				whichClass = 'headImg4';
				//$("#carousel_articles").load('_views/articles_carousel.php');
			}
			else if (whichIndex == 4)
			{
				$("#privacy").show();
				imageUrl = "_images/header_articles.png";
				whichClass = 'headImg1';
			}
			//console.log('imageUrl::'+imageUrl);
			//console.log('whichClass::'+whichClass);
			$('#headImg').addClass(whichClass);
      //$("#headImg").css("background", 'url("' + imageUrl + '")');
			//console.log('doTrigger2::'+doTrigger);
//      if (doTrigger)
//      {
//				console.log('doTrigger3::'+doTrigger);
//				$("#dropdownMenu1").trigger('click');
			$("#menuContent1").hide();
//			$('#dropdownMenu1').attr('aria-expanded', false);
//			$('#dropdownMenu1').attr('aria-expanded', false);
//			$('#dropdownMenu1').attr('aria-expanded', false);
//			}
//			var timerInterval = 4000;
//			loaderTimer = setInterval
//			(
//				function()
//				{
//					$('#loader').hide();
//				},
//				timerInterval
//			);
		}



		
		function loadHome(whereFocus)
		{
			var origin = window.location.origin;   
			//console.log('origin::'+origin);
//				$("#content").html();
//				$("#content").html('<div id="1">DIV1</div>');
//				$("#content").append('<div id="2">DIV2</div>');
//				$("#content").append('<div id="3">DIV3</div>');
//				$("#content").append('<div id="4">DIV4</div>');
//				$("#content").append('<div id="5">DIV5</div>');
//				$("#content").append('<div id="6">DIV6</div>');
//				$("#1").load('_views/carousel.php');
//				$("#2").load('_views/about.php');
//				$("#3").load('_views/team.php');
//				$("#4").load('_controllers/popular.php');
//				$("#5").load('_controllers/searchbox.php');
//				$("#6").load('_views/tweet.php');
//				
//				$('#content').animate({scrollTop: whereFocus.offset().top},'slow');
				window.location.href = "http://localhost/projects/erx2/#" + whereFocus;
		}

//		function setMenu(whichId)
//		{
//			$("#" + whichId).attr('class', 'active');
//		}

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