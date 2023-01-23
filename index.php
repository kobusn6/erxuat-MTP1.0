<?php
	date_default_timezone_set('Africa/Johannesburg');
	$script_tz = date_default_timezone_get();
	ini_set('session.gc_divisor', 100);

	if (!isset($_SESSION['SESSIONID']))
	{
		session_start();
	}
	
	$sessiontype = '';
	if (isset($_SESSION['SESSIONTYPE']))
	{
		$sessiontype = $_SESSION['SESSIONTYPE'];
	}
	
	
	if (file_exists("_config/systemConf.php"))
	{
		require_once("_config/systemConf.php");
	}
	else
	{
		require_once("../_config/systemConf.php");
	}
	
	if (file_exists("_controllers/seo.php"))
	{
		require_once("_controllers/seo.php");
	}
	else
	{
		require_once("../_controllers/seo.php");
	}
	
	$browserinfo = _browser();
	$browser = $browserinfo['browser'];
	
	$_SESSION['BROWSERTYPE'] = $browser;
	$navpage = '_views/navbar.php';
	$showcontent = 'block';
	
	if (isset($_SESSION['LOGGED_ON']))
	{
		if ($_SESSION['LOGGED_ON'])
		{
			if ($_SESSION['LOGINTYPE'] != '')
			{
				$navpage = '_controllers/navbar_' . $_SESSION['LOGINTYPE'] . '.php';
				$showcontent = 'none';
			}
		}
	}
	
	$CKEDITOR_BASEPATH = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'].'_lib/ckeditor/';
		
	$keywords = 'apoteka automateddispensing automation automationinnovation automationsolutions bestpharmacyautomation bestpharmacyrobotics bestrobotics cardiologyinstrument conveyor conveyorsolutions diabetesautomation diabetescallcentre diabetesinstruments diabetesinterpretation digitalhealth dispensing ecgautomation ecgcallcentre ecginstruments ecginterpretation ehealth erxmiddlewaresoftware erxmiddleware erx e-Rx e-Rxsolutions eRxsolutions gpi gripper healthcare healthtech hospitalpharmacy hospitals innovation intelligentconveyors intelligentconveyoring intelligentconveyorsolutions innovationinhealthcare medicaldevices medicalinnovation medicationmanagement medicationsafety medicinepicking mekapharm pharmacy pharmacyautomation pharmacyautomationsystem pharmacyconveyors pharmacydispensing pharmacyinnovation pharmacylogistics pharmacypioneer pharmacyprocessautomation Pharmacyrobotica PharmacyRobotics pharmacystock pharmacystockautomation pickingautomation remotediabetes remoteecg retailpharmacy RIEDL RIEDL Phasys riedl robotica roboticprocessautomation Robotics smartsoftware smartmedicaldevice telehealth telemedicine umana virtualdiabetes virtualdoctor virtualecg wardstock warehousepharmacy FIFO FEFO SOH firstinfirstout firstexpiredfirstout SOH stockonhand';
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
	<head>
		<title>eRx Solutions</title>
		<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9" />
		<meta name="keywords" content="erx solutions medical benefit coverage speed format <?php echo $keywords; ?>" />
		<meta name="description" content="erx solutions medical benefit coverage speed format" />
		<META NAME="authors" CONTENT="William Kruger">
		<META NAME="date" CONTENT="2015-06-08">

		<link type="text/css" href="_css/jquery-ui-1.8.16.custom.css" rel="stylesheet" />

		<!--<meta charset="UTF-8">-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="color-scheme" content="light dark">
		<meta name="supported-color-schemes" content="light dark">
		<!--<link rel="shortcut icon" href="PUT YOUR FAVICON HERE">-->

		<!-- Bootstrap core CSS -->
		<link href="css/bootstrap.min.css" rel='stylesheet' type='text/css'>
		<link href="css/jquery-ui.min.css" rel='stylesheet' type='text/css'>

		<!-- Custom styles for this template -->
		<link href="js/colorbox/colorbox.css"  rel='stylesheet' type='text/css'>
		<link href="css/templatemo_style.css"  rel='stylesheet' type='text/css'>

		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
		<![endif]-->

		<?php require_once('_includes/js.inc.php'); ?>
		<script type="text/javascript" src="_includes/jq/index.inc.js"></script>
	</head>

	<body style="padding-right:0 !important;">
		<!--FACEBOOK-->
		<div id="fb-root"></div>
		<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0" nonce="uqGeN97w"></script>

		<div id="mnuToggle" style="height:1px !important"></div>
		<div name='loading' id='loading'>
		  <img id="loading-image" class="w50 l25 m-0 p-0" src="_images/file_loader.gif" style="height: 100px; width: auto; position: fixed; z-index: 2000; left: 45%; top: 40%; margin: -25px 0 0 -25px;" />
		</div>

		<div id="pageCover" class="pagecover" style="display:block;" ></div>
		
		<div>
			<div id="navbar" name="navbar" class="pb-0">
				<?php include($navpage); ?>
			</div>
		</div>
		<div id="pagecontainer" class="container hasBackground pl-0 pr-0">
			<link href="_css/style.css" rel="stylesheet" type="text/css">
	
			<!--SEO KEYWORDS-->
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
			<div style="display:none;">erx solutions medical benefit coverage speed format  <?php echo $keywords; ?></div>
	
			<input type="hidden" id="sessiontype" value="<?php echo $sessiontype; ?>" />

			<div class="overlay"></div>

			<div id="content" style="display:<?php echo $showcontent; ?>;">
				<div class="row col-sm-12 p-0 m-0">
					<div class="col-margin p-0 m-0 w10 debug" style="display:inline-block;"></div>
					<div class="col-content p-0 m-0 w100 text-center debug" style="display:inline-block;">
						<div id="tiles" name="tiles" class="w100 tileSectionPadding pmb0 pmt0 pml0 pmr0 debug">
							<div class="col-sm-12 mobileHide">
								&nbsp;
							</div>
							<div class="col-sm-12 mobileHide">
								&nbsp;
							</div>
							<div class="col-sm-12 mobileHide">
								&nbsp;
							</div>
							<div class="col-sm-12 mobileHide">
								&nbsp;
							</div>
							<div class="col-sm-12 mobileHide">
								&nbsp;
							</div>
							<div class="col-sm-12 mobileHide">
								&nbsp;
							</div>
							<div>
								<?php include('_views/tile_about.php'); ?>
							</div>
				
							<div>
								<?php include('_views/tile_services.php'); ?>
							</div>
				
							<div>
								<?php include('_views/tile_gallery.php'); ?>
							</div>
				
							<div>
								<?php include('_views/tile_articles.php'); ?>
							</div>
				
							<div>
								<?php include('_views/tile_contact.php'); ?>
							</div>
						</div>

						<div id="track" name="track" class="debug">
							<?php include('_views/track.php'); ?>
						</div>

						<div id="gallery" name="gallery" class="debug">
							<?php include('_controllers/gallery_carousel.php'); ?>
						</div>

						<div id="about" name="about" style="display:none;" class="debug">
							<?php include('_views/about.php'); ?>
						</div>

						<div id="services_riedl" name="services_riedl" style="display:none;" class="debug">
							<?php include('_views/services_riedl.php'); ?>
						</div>

					</div>
					<div class="col-margin p-0 m-0 w10 mobileHide debug" style="display:inline-block;"></div>
				</div>
			</div>

			<div id="content_mekapharm" style="background-color:#dfe1e0;display:<?php echo $showcontent; ?>;">
				<div class="row col-sm-12 p-0 m-0">
					<div class="col-margin p-0 m-0 w10 debug" style="display:inline-block;"></div>
					<div class="col-content p-0 m-0 w100 text-center debug" style="display:inline-block;">
						<div id="services_mekapharm" name="services_mekapharm" style="display:none;" class="debug">
							<?php include('_views/services_mekapharm.php'); ?>
						</div>
					</div>
					<div class="col-margin p-0 m-0 w10 mobileHide debug" style="display:inline-block;"></div>
				</div>
			</div>

			<div id="content_conveyor" style="display:<?php echo $showcontent; ?>;">
				<div class="row col-sm-12 p-0 m-0">
					<div class="col-margin p-0 m-0 w10 debug" style="display:inline-block;"></div>
					<div class="col-content p-0 m-0 w100 text-center debug" style="display:inline-block;">
						<div id="services_conveyor" name="services_conveyor" style="display:none;" class="debug">
							<?php include('_views/services_conveyor.php'); ?>
						</div>
					</div>
					<div class="col-margin p-0 m-0 w10 mobileHide debug" style="display:inline-block;"></div>
				</div>
			</div>

			<div id="content_software" style="background-color:#dfe1e0;display:<?php echo $showcontent; ?>;">
				<div class="row col-sm-12 p-0 m-0">
					<div class="col-margin p-0 m-0 w10 debug" style="display:inline-block;"></div>
					<div class="col-content p-0 m-0 w100 text-center debug" style="display:inline-block;">
						<div id="services_software" name="services_software" style="display:none;" class="debug">
							<?php include('_views/services_software.php'); ?>
						</div>
					</div>
					<div class="col-margin p-0 m-0 w10 mobileHide debug" style="display:inline-block;"></div>
				</div>
			</div>

			<div id="content2" style="display:<?php echo $showcontent; ?>;">
				<div class="row col-sm-12 p-0 m-0">
					<div class="col-margin p-0 m-0 w10 debug" style="display:inline-block;"></div>
					<div class="col-content p-0 m-0 w100 text-center debug" style="display:inline-block;">
						<div id="articles" name="articles" style="display:none;" class="debug">
							<?php include('_views/articles_carousel.php'); ?>
						</div>

						<div id="privacy" name="privacy" style="display:none;" class="debug">
							<?php include('_views/privacy.php'); ?>
						</div>
					</div>
					<div class="col-margin p-0 m-0 w10 mobileHide debug" style="display:inline-block;"></div>
				</div>
			</div>
	
			<div name='loader' id='loader' class="boxNoBorder" ></div>
			<div id="tmpDiv" style="display:block;position:absolute;text-align:left;top:30%;left:10%;z-index:3000;"></div>
			<div id="searchResultsDiv" style="display:none;position:absolute;text-align:left;top:20%;left:10%;z-index:5001;width:80%;"></div>
			<div id="floatBox" class="floatbox" ></div>
			<div id="termsBox" class="termsbox" ></div>
		</div>
		
		<div id="contact" name="contact">
			<?php include('_controllers/contact.php'); ?>
		</div>
		<div class="pt-0 pb-2 mobileHide debug" style="background-color:#FFFFFF;">
			&nbsp;
		</div>
		<div class="pt-0 pb-0 debug">
			<?php include('_views/footer.php'); ?>
		</div>



<div class="modal fade vidPlayer" id="videomModalCentered" tabindex="-6" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3006">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content w100">
      <div class="modal-header" style="background-color:#ffffff;">
        <h5 class="modal-title text-blue" id="videomModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1" id="videomClose">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="videomView" style="font-weight:bold;">
				<video id="videomPlayer" preload="auto" controls style="width:100%;height:auto;">
					<source id="videomSrc" src="_videos/videom.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" id="videomClose" onclick="closeLoader();">Close</button>-->
        <label id="videomModalDesc" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>


	<script>
  		loadingAnimation();
	</script>
</body>
</html>
