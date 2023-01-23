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
//msg_name=Rachel Ludolf&msg_email=william.kruger@universal.co.za&msg_contactno=0794854121&msg_message=dfgsngfnsfgnf
//echo '<pre>';	
//print_r($_POST);
//echo '</pre>';	
	$resultArr['success'] = 1;
	$resultArr['sql'] = '';
	$resultArr['sqlerr'] = '';
	$err = '';
	
	//ESTABLISH MYSQL CONNECTION
	$conn = new dbconnection;
	$link = $conn->OpenDatabaseConnectionMySQL();
	
	if ($link)
	{
		//msg_name
		//msg_contactno
		//msg_company
		//msg_email
		//msg_message
		//contact_type
		//var $msg_name = encrypt($_POST['msg_name']);
//		echo '<pre>';
//		print_r($_POST);
//		echo '</pre>';

//		openssl_encrypt( string $data, string $method, string $key,
//                        $options = 0, string $iv, string $tag= NULL,
//                        string $aad, int $tag_length = 16  );
//
//		openssl_decrypt( string $data, string $method, string $key,
//             int $options = 0, string $iv, string $tag, string $aad);

//		$dataString = json_decode($_POST);
//		echo '<pre>';
//		echo $dataString;
//		//echo $_POST;
//		echo '</pre>';


		$msg_name_enc = openssl_encrypt ($_POST['msg_name'], $_SESSION['CIPHER'], $_SESSION['ENCKEY'], $options = 0, $_SESSION['ENCIV']);
		$msg_contactno_enc = openssl_encrypt ($_POST['msg_contactno'], $_SESSION['CIPHER'], $_SESSION['ENCKEY'], $options = 0, $_SESSION['ENCIV']);
		$msg_email_enc = openssl_encrypt ($_POST['msg_email'], $_SESSION['CIPHER'], $_SESSION['ENCKEY'], $options = 0, $_SESSION['ENCIV']);
		$msg_company_enc = openssl_encrypt ($_POST['msg_company'], $_SESSION['CIPHER'], $_SESSION['ENCKEY'], $options = 0, $_SESSION['ENCIV']);
	
		$msg_message = $_POST['msg_message'];
		$msg_message = str_replace('<p>','',$msg_message);
		$msg_message = str_replace('</p>','',$msg_message);
		$msg_message = trim($msg_message);
		$msg_message_enc = openssl_encrypt ($msg_message, $_SESSION['CIPHER'], $_SESSION['ENCKEY'], $options = 0, $_SESSION['ENCIV']);
//		echo '<pre>';
//		echo $msg_name_enc;
//		echo '</pre>';
//		$msg_name_dec = openssl_decrypt ($msg_name_enc, $_SESSION['CIPHER'], $_SESSION['ENCKEY'], $options = 0, $_SESSION['ENCIV']);
//		echo '<pre>';
//		echo $msg_name_dec;
//		echo '</pre>';

		//$msg_name_HASHED = password_hash($_POST['msg_name'], PASSWORD_BCRYPT);
		//echo '<pre>';
		//echo $msg_name;
		//echo '</pre>';
		
		//$msg_namev = password_verify($_POST['msg_name'], $msg_name);
		//echo '<pre>';
		//echo $msg_namev;
		//echo '</pre>';
		$newsletter = 0;
		if ($_POST['newsletter'] != '')
		{
			$newsletter = 1;
		}
		$usedetails = 1;
//		if ($_POST['contact_details'] != '')
//		{
//			$usedetails = 1;
//		}
		
		switch ($_POST['contact_type']) {
		  case 'get_in_touch':
		    $msg_contact_type = 'Get In Touch';
		    break;
		  case 'site_visit':
		    $msg_contact_type = 'Site Visit';
		    break;
		  case 'virtual_meeting':
		    $msg_contact_type = 'Virtual Meeting';
		    break;
		  case 'in_person':
		    $msg_contact_type = 'In-Person Meeting';
		    break;
		  default:
		    $msg_contact_type = 'Get In Touch';
		}

		// generate random record id
		$contact_id = substr(md5(rand()), 0, 20);

		// first check if previous submission exists and rather update than insert new record
		$sqlCheck = "select count(contact_session) as 'counter'
									from erx_contact
									where contact_session = '".$_SESSION['SESSIONID']."'";
		$resCheck = mysqli_query($link, $sqlCheck);// or $err = mysql_error();
		$errCheck = mysqli_error($link);
//		echo '<pre>';
//		echo $sqlCheck;
//		echo '</pre>';


		if ($errCheck != '')
		{
			$resultArr['success'] = 0;
			$resultArr['sqlerr'] = $errCheck;
		}
		else
		{
			$rowCheckNumrows = mysqli_num_rows($resCheck);
			if ($rowCheckNumrows > 0)
			{
				$valid = 1;			
				$rowCheck = mysqli_fetch_array($resCheck);
	//			$_SESSION['ADMIN_USERNAME'] = $row_lu1['firstname'].' '.$row_lu1['lastname'];
	//			$_SESSION['ADMIN_LEVEL'] = $row_lu1['admin_level'];
			}
			if ($rowCheck['counter'] > 0) // update
			{
				$sqlUpdate = "UPDATE erx_contact SET 
								contact_name = '".$msg_name_enc."',
								contact_contactno = '".$msg_contactno_enc."',
								contact_email = '".$msg_email_enc."',
								contact_company = '".$msg_company_enc."',
								contact_message = '".$msg_message_enc."',
								contact_type = '".$msg_contact_type."',
								contact_subscribed = '".$newsletter."',
								contact_usedetails = '".$usedetails."',
								contact_date = NOW()
								WHERE contact_session = '".$_SESSION['SESSIONID']."'";
								//('".$_POST['msg_name']."','".$_POST['msg_contactno']."','".$_POST['msg_email']."','".$_POST['msg_company']."','".$_POST['msg_message']."','".$_POST['contact_type']."')";
				$resultArr['sql'] = $sqlUpdate;
				$res = mysqli_query($link, $sqlUpdate);// or $err = mysql_error();
				$err = mysqli_error($link);
			}
			else	// insert
			{
				$sql = "insert into erx_contact
								(contact_id,contact_name,contact_contactno,contact_email,contact_company,contact_message,contact_type,contact_subscribed,contact_usedetails,contact_session) 
								values 
								('".$contact_id."','".$msg_name_enc."','".$msg_contactno_enc."','".$msg_email_enc."','".$msg_company_enc."','".$msg_message_enc."','".$msg_contact_type."',".$newsletter.",".$usedetails.",'".$_SESSION['SESSIONID']."')";
								//('".$_POST['msg_name']."','".$_POST['msg_contactno']."','".$_POST['msg_email']."','".$_POST['msg_company']."','".$_POST['msg_message']."','".$_POST['contact_type']."')";
				$resultArr['sql'] = $sql;
				$res = mysqli_query($link, $sql);// or $err = mysql_error();
				$err = mysqli_error($link);
				$lastid = mysqli_insert_id($link);
			}			
		}



		if ($err != '')
		{
			$resultArr['success'] = 0;
			$resultArr['sqlerr'] = $err;
//			echo '<pre>';
//			echo $err;
//			echo '</pre>';
		}
		else
		{
			//SEND EMAIL NOTIFICATION
//				$message = "New Contact Request: 
//
//Details: 
//Name: " . $_POST['msg_name'] . "
//Contact Number: " . $_POST['msg_contactno'] . "
//Sender email: " . $_POST['msg_email'] . "
//Message: " . $_POST['msg_message'] . "
//";

//				$message = "Sent to: sales@e-rx.za.com
//
//Subject Line: " . $_POST['msg_name'] . " " . $msg_contact_type . "
//
//Body Content:
//
//Dear eRx,
//
//" . $_POST['msg_name'] . " from Company " . $_POST['msg_company'] . " has requested a " . $msg_contact_type . ". 
//User information: 
//" . $_POST['msg_contactno'] . ", " . $_POST['msg_email'] . "
//" . $_POST['msg_message'] . "
//
//Regards,
//Your interactive website";

				$message = "Dear eRx,

" . $_POST['msg_name'] . " from Company " . $_POST['msg_company'] . " has requested a " . $msg_contact_type . ". 
User information: 
" . $_POST['msg_contactno'] . ", " . $_POST['msg_email'] . "
" . $_POST['msg_message'] . "

Regards,
Your interactive website";
		
				$Name = 'eRx Solutions';
				$fromemail = "noreply@erx.co.za"; //senders e-mail adress
				//$fromemail = "root@localhost.com"; //senders e-mail adress
				$recipient = "williamgk1@gmail.com"; //recipient
				$sender = '"'.$_POST['msg_email'].'"';
				$mail_body = $message; //mail body
				$subject = 'Contact Request Notification - ' . $_POST['msg_name'] . ' ' . $msg_contact_type; //subject
				$header = "From: ". $Name . " <" . $fromemail . ">\r\n"; //optional headerfields
				
				ini_set('sendmail_from', $fromemail);
				
				$sendmail = mail($recipient, $subject, $mail_body, $header); // mailto erx
				$sendmail = mail($sender, $subject, $mail_body, $header); //mailto sender
				//$sendmail = false;
				$resultArr['sendmail'] = $sendmail;

		}
		
	}
	else
	{
//		echo 'Could not connect';
//		die();
		$resultArr['success'] = 0;
		$resultArr['sqlerr'] = 'Could not connect';
	}
	
	echo json_encode($resultArr);
	
	
	
	
//	echo '<pre>';
//	print_r($_POST);
//	echo '</pre>';
//	
//	$msg_query = str_replace('<p>','',$_POST['msg_message']);
//	$msg_query = str_replace('</p>','',$msg_query);
//	$msg_query = trim($msg_query);
//	$sql = "insert into contactus 
//					(msg_name,msg_email,msg_contactno,msg_query) 
//					values 
//					('".$_POST['msg_name']."','".$_POST['msg_email']."','".$_POST['msg_contactno']."','".$msg_query."')";
//	$res = mysql_query($sql) or die(mysql_error());
//	//echo $sql."<br>";
//	
//	$sql = "select 
//						* 
//					from 
//						contactus";
//	$res = mysql_query($sql) or die(mysql_error());
//	while ($rows = mysql_fetch_assoc($res))
//	{
//		echo $rows['msg_id']." | ".$rows['msg_name']." | ".$rows['msg_email']." | ".$rows['msg_contactno']." | ".$rows['msg_query']." | ".$rows['msg_date']."<br>";
//	}
//	die();
	
?>