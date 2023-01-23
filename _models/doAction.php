<?php
//ini_set('error_reporting', E_ALL);
//ini_set('display_errors', 1);
	
	date_default_timezone_set('Africa/Johannesburg');
	$script_tz = date_default_timezone_get();

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
//msg_name=Rachel Ludolf&sub_email=william.kruger@universal.co.za&msg_contactno=0794854121&msg_message=dfgsngfnsfgnf
//echo '<pre>';	
//print_r($_POST);
//echo '</pre>';	
	$resultArr['success'] = 1;
	$resultArr['sql'] = '';
	$resultArr['sqlerr'] = '';
	$err = '';
	
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
		$action = isset($_POST['action']) ? $_POST['action'] : '';
		if ($action == '')
		{
			$resultArr['error'] = 'Invalid url access';
			$resultArr['actionmsg'] = 'Invalid url access';
		}
	}
	if ($resultArr['error'] == '')
	{
//		$contact_id = isset($_POST['ci']) ? $_POST['ci'] : '';
		$contact_email = isset($_POST['sub_email']) ? $_POST['sub_email'] : '';
//		if ($contact_id == '' || $contact_email == '')
//		{
//			$resultArr['error'] = 'Invalid References';
//			$resultArr['actionmsg'] = 'Invalid References';
//		}

		if ($contact_email == '')
		{
			$resultArr['error'] = 'Invalid References';
			$resultArr['actionmsg'] = 'Invalid References';
		}
	}

	$resultArr['contact_email_url_enc'] = '';
	$resultArr['contact_email_url_dec'] = '';
	$guid = substr(md5(rand()), 0, 20); 
	$resultArr['guid'] = $guid;
	if ($resultArr['error'] == '')
	{
		$contact_email_url_dec = $contact_email;
		$contact_email_url_enc = openssl_encrypt ($contact_email, $_SESSION['CIPHER'], $_SESSION['ENCKEY'], $options = 0, $_SESSION['ENCIV']);
		$resultArr['contact_email_url_enc'] = $contact_email_url_enc;
		$resultArr['contact_email_url_dec'] = $contact_email_url_dec;
		switch ($action){
			case "unsub":
				$sqlCheck = "select contact_id, count(contact_email) as 'counter'
								from erx_contact
								where contact_email = '".$contact_email_url_enc."'";
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
						$contact_id = $rowCheck['contact_id'];
						$sqlUpdate = "UPDATE erx_contact SET 
										contact_subscribed = 0,
										contact_update = now()
										WHERE contact_id = '".$contact_id."'";
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
	
	echo json_encode($resultArr);
?>