<?php
	date_default_timezone_set('Africa/Johannesburg');
	$script_tz = date_default_timezone_get();
	ini_set('session.gc_divisor', 100);

	//	echo '<pre>';
	//	print_r($_SESSION['SESSIONID']);
	//	echo '</pre>';
	//echo ini_get('session.gc_divisor');
	if (!isset($_SESSION['SESSIONID']))
	{
		session_start();
	}
	//echo ini_get('session.gc_divisor');
	
	//	echo '<pre>';
	//	print_r($_SESSION['SESSIONID']);
	//	echo '</pre>';
	
	//	$sessiontype = '';
	//	if ($_SESSION['sessiontype'] != '')
	//	{
	//		$sessiontype = $_SESSION['sessiontype'];
	//	}
	
	$sessiontype = '';
	if (isset($_SESSION['SESSIONTYPE']))
	{
		$sessiontype = $_SESSION['SESSIONTYPE'];
	}
	
	if (file_exists("_config/systemConf.php"))
	{
		require_once("_config/systemConf.php");
		//die('SystemConf found!');
	}
	else
	{
		require_once("../_config/systemConf.php");
		//die('SystemConf not found!');
	}
	
	if (!isset($_SESSION['SESSIONID']))
	{
		session_start();
	}
	
	if (file_exists("_lib/class.dbconnection.php"))
	{
		require_once("_lib/class.dbconnection.php");
	}
	else
	{
		require_once("../_lib/class.dbconnection.php");
	}
	
	if (file_exists("_lib/systemFunc.php"))
	{
		require_once("_lib/systemFunc.php");
	}
	else
	{
		require_once("../_lib/systemFunc.php");
	}

	$browserinfo = _browser();
	$browser = $browserinfo['browser'];
	
	$_SESSION['BROWSERTYPE'] = $browser;

	$navpage = '_views/navbar.php';
	$showcontent = 'block';

	// ensure db connection can be established
	$conn = new dbconnection;
	$link = $conn->OpenDatabaseConnectionMySQL();	
	$resultArr = array();
	$resultArr['success'] = 1;
	$resultArr['error'] = '';
	$resultArr['actionmsg'] = '';
	if (!$link)
	{
		$resultArr['error'] = 'Unable to establish connection';
		$resultArr['actionmsg'] = 'Unable to establish connection';
	}


	if ($resultArr['error'] == '')
	{
		// ensure parameters are all passed in url
		//http://www.dait.co.za/erx/action.php?action=unsub&ci=1&cm=YjWEPSD3JwziADP6YuRRSitRmVdvSeGfd1dOFisOrEA=
		$action = isset($_GET['action']) ? $_GET['action'] : '';
		if ($action == '')
		{
			$resultArr['error'] = 'Invalid url access';
			$resultArr['actionmsg'] = 'Invalid url access';
		}
	}
	if ($resultArr['error'] == '')
	{
		$contact_id = isset($_GET['ci']) ? $_GET['ci'] : '';
		$contact_email = isset($_GET['cm']) ? $_GET['cm'] : '';
		if ($contact_id == '' || $contact_email == '')
		{
			$resultArr['error'] = 'Invalid References';
			$resultArr['actionmsg'] = 'Invalid References';
		}
	}

	if ($resultArr['error'] == '')
	{
		$contact_email_url_enc = $_GET['cm'];
		$contact_email_url_dec = openssl_decrypt ($_GET['cm'], $_SESSION['CIPHER'], $_SESSION['ENCKEY'], $options = 0, $_SESSION['ENCIV']);
		switch ($action){
			case "unsub":
				$sqlCheck = "select contact_email, count(contact_id) as 'counter'
								from erx_contact
								where contact_id = '".$contact_id."'";
				$resCheck = mysqli_query($link, $sqlCheck);
				$errCheck = mysqli_error($link);
				if ($errCheck != '')
				{
					$resultArr['success'] = 0;
					$resultArr['error'] = 'Unable to process unsubscription at this time -> Err1: '.$errCheck;
					$resultArr['actionmsg'] = 'Unable to process unsubscription at this time, please try again later - Err1';
				}
				else
				{
					$rowCheckNumrows = mysqli_num_rows($resCheck);
					if ($rowCheckNumrows > 0)
					{		
						$rowCheck = mysqli_fetch_array($resCheck);
					}
					if ($rowCheck['counter'] > 0) // record found
					{
						$contact_email_enc = $rowCheck['contact_email'];
						$contact_email_dec = openssl_decrypt($contact_email_enc, $_SESSION['CIPHER'], $_SESSION['ENCKEY'], $options=0, $_SESSION['ENCIV']);
						if ($contact_email_url_dec != $contact_email_dec)
						{
							$resultArr['success'] = 0;
							$resultArr['error'] = 'Possible hacking (Mismatch of contact details) -> Err2';
							$resultArr['actionmsg'] = 'Mismatch of contact details - Err2';
						}
						else
						{
							$sqlUpdate = "UPDATE erx_contact SET 
											contact_subscribed = 0,
											contact_update = now()
											WHERE contact_id = ".$contact_id;
							$resultArr['sql'] = $sqlUpdate;
							$res = mysqli_query($link, $sqlUpdate);
							$err = mysqli_error($link);
							if ($err != '')
							{
								$resultArr['success'] = 0;
								$resultArr['error'] = 'Unable to process unsubscription at this time -> Err3: '.$err;
								$resultArr['actionmsg'] = 'Unable to process unsubscription at this time, please try again later - Err3';
							}
							else
							{
								$resultArr['actionmsg'] = 'You have been successfully unsubscribed.<br /><br />You can resubscribe again at any time, should you wish to do so.';
							}
						}
					}
					else
					{
						$resultArr['success'] = 0;
						$resultArr['error'] = 'Subscriber not found -> Err4';
						$resultArr['actionmsg'] = 'Subscriber does not exist - Err4';
					}
				}
				break;
			default:
				$resultArr['success'] = 0;
				$resultArr['error'] = 'No action specified -> Err5';
				$resultArr['actionmsg'] = 'No action specified - Err5';
				break;
		}
	}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
	<head>
		<title>eRx Solutions</title>
		<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9" />
		<meta name="keywords" content="erx solutions medical benefit coverage speed format <?php //echo $keywords; ?>" />
		<meta name="description" content="erx solutions medical benefit coverage speed format" />
		<META NAME="authors" CONTENT="William Kruger">
		<META NAME="date" CONTENT="2022-06-01">
		<link type="text/css" href="_css/jquery-ui-1.8.16.custom.css" rel="stylesheet" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="css/bootstrap.min.css" rel='stylesheet' type='text/css'>
		<link href="css/jquery-ui.min.css" rel='stylesheet' type='text/css'>
		<link href="js/colorbox/colorbox.css"  rel='stylesheet' type='text/css'>
		<link href="css/templatemo_style.css"  rel='stylesheet' type='text/css'>
		<?php require_once('_includes/js.inc.php'); ?>
		<script type="text/javascript" src="_includes/jq/index.inc.js"></script>
	</head>

	<body>
		<div>
			<div id="navbar" name="navbar" class="pb-1">
				<?php include($navpage); ?>
			</div>
		</div>
		<div id="pagecontainer" class="container hasBackground pl-0 pr-0">
			<link href="_css/style.css" rel="stylesheet" type="text/css">
	
			<input type="hidden" id="sessiontype" value="<?php echo $sessiontype; ?>" />

			<div class="overlay"></div>

			<div id="content" style="display:<?php echo $showcontent; ?>;">

				<div>
					<?php
						if (file_exists("_views/action.php"))
						{
							require_once("_views/action.php");
						}
						else
						{
							require_once("../_views/action.php");
						}
					?>
				</div>

				<div id="privacy" name="privacy" style="display:none;">
					<?php include('_views/privacy.php'); ?>
				</div>
	
			</div>
			<div name='loader' id='loader' class="boxNoBorder" ></div>
			<div id="tmpDiv" style="display:block;position:absolute;text-align:left;top:30%;left:10%;z-index:3000;"></div>
			<div id="searchResultsDiv" style="display:none;position:absolute;text-align:left;top:20%;left:10%;z-index:5001;width:80%;"></div>
			<div id="pageCover" class="pagecover" ></div>
			<div id="floatBox" class="floatbox" ></div>
			<div id="termsBox" class="termsbox" ></div>
		</div>
		<div class="pt-1 pb-5">
			<?php include('_views/footer.php'); ?>
		</div>

	</body>
</html>