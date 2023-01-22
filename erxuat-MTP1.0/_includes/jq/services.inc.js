// variables for image trasition
var imgInterval = 2000;
var imgTimer;
//
var transitionInterval = 400;

// set location of images
var imgLocation = '_images/transition/';

$(document).ready
	(
	
		$(function() {
			doTransition ('transitionIMG1');//RIEDL PHASYS
			doTransition ('transitionIMG2');//Gripper
			doTransition ('transitionIMG3');//Apoteka Robotics
			doTransition ('transitionIMG4');//Intellegent Conveyor Systems

			$('.videoGif').on
			(
			//'click focusin focusout propertychange change keyup swipeleft',
			'click',
				function()
				{
					$("#videoSrc").attr('src', '');
					$('#'+this.id).attr('data-dismiss', 'modal');
					var whichModal = this.id.replace('gif', '') + 'ModalCentered';
					$('#'+this.id).attr('data-target', '#' + whichModal);
					$('#'+this.id).attr('data-toggle', 'modal');
					$("#" + this.id.replace('gif', '') + "Player")[0].controls = true;
					$("#" + this.id.replace('gif', '') + "Player")[0].muted = false;
					$("#" + this.id.replace('gif', '') + "Player")[0].play();
					setDescription (this.id.replace('gif', ''), (this.id.replace('gif', '') + 'ModalDesc'));
				}
			);
			
			$(".vidPlayer").on
			(
				'focusout',
				function()
				{
					$("#videomPlayer")[0].controls = false;
					$("#videomPlayer")[0].muted = true;
					$("#videomPlayer")[0].pause();
					$("#video1Player")[0].controls = false;
					$("#video1Player")[0].muted = true;
					$("#video1Player")[0].pause();
					$("#video2Player")[0].controls = false;
					$("#video2Player")[0].muted = true;
					$("#video2Player")[0].pause();
					$("#video3Player")[0].controls = false;
					$("#video3Player")[0].muted = true;
					$("#video3Player")[0].pause();
				}
			);
			
			
			
			$("#videomClose").on
			(
				'click',
				function()
				{
					$("#videomPlayer")[0].controls = false;
					$("#videomPlayer")[0].muted = true;
					$("#videomPlayer")[0].pause();
				}
			);
			
			$("#video1Close").on
			(
				'click',
				function()
				{
					$("#video1Player")[0].controls = false;
					$("#video1Player")[0].muted = true;
					$("#video1Player")[0].pause();
				}
			);
			
			$("#video2Close").on
			(
				'click',
				function()
				{
					$("#video2Player")[0].controls = false;
					$("#video2Player")[0].muted = true;
					$("#video2Player")[0].pause();
				}
			);
			
			$("#video3Close").on
			(
				'click',
				function()
				{
					$("#video3Player")[0].controls = false;
					$("#video3Player")[0].muted = true;
					$("#video3Player")[0].pause();
				}
			);
		})

);

function doTransition (whichTransitionIMG)
{
	var setImages = '';
	var imgCounter = 0;
	if (whichTransitionIMG == 'transitionIMG1')
	{
		setImages = ['riedlphasys1.png', '28.jpg', '29.jpg', '30.jpg', '31.jpg', '34.jpg', '41.jpg', '42.png', '46.jpg'];
	}
	else if (whichTransitionIMG == 'transitionIMG2')
	{
		setImages = ['14.png', '25.jpg', '26.png', '33.jpg', '38.png'];
	}
	else if (whichTransitionIMG == 'transitionIMG3')
	{
		setImages = ['mekapharmapoteka.jpg','mekapharmapoteka1.jpg','mekapharmapoteka2.jpg','mekapharmapoteka3.jpg'];
	}
	else if (whichTransitionIMG == 'transitionIMG4')
	{
		setImages = ['conveyoring.jpg', 'c1.jpg', 'c2.jpg', 'c3.jpg', 'c4.jpg', 'c5.jpg', 'c7.jpg', 'c8.jpg', 'c9.jpg', 'c10.jpg', 'c11.jpg', 'c12.jpg', 'c13.jpg', 'c14.jpg', 'c15.jpg', 'c16.jpg', 'c17.jpg', 'c18.jpg', 'c19.jpg', 'c20.jpg', 'c21.jpg', 'c22.jpg', 'c23.jpg', 'c24.jpg', 'c25.jpg'];
	}

	if ($('#'+whichTransitionIMG).attr('src') == '')
	{
		$('#'+whichTransitionIMG).attr('src',imgLocation+setImages[0]);
		imgCounter++;
	}
	
	imgTimer = setInterval
		(
			function()
			{
		    $('#'+whichTransitionIMG).fadeOut(transitionInterval, function(){
		    	$(this).attr('src',imgLocation+setImages[imgCounter]).fadeIn(transitionInterval);
		    	if (imgCounter < (setImages.length -1))
		    	{
		    		imgCounter++;
		    	}
		    	else
		    	{
		    		imgCounter = 0;
		    	}
		    });
			},
			imgInterval
		);

}