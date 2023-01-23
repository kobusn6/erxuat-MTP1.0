<?php
//ini_set('error_reporting', E_ALL);
//ini_set('display_errors', 1);

ini_set('error_reporting', E_NONE);
ini_set('display_errors', 0);
	

	date_default_timezone_set('Africa/Johannesburg');
	$script_tz = date_default_timezone_get();
	
	session_start();
	
//	$encryptionkey = '';
//	if (isset($_SESSION['ENCKEY']))
//	{
//		$encryptionkey = $_SESSION['ENCKEY'];
//	}
//	
////	$q = "P4ssw0rd!";
////	$encryptionkey = md5('MEGAN');
////	$encryptionkey = md5($encryptionkey);
//	
//	$cipher = $_SESSION['CIPHER'];
//	$encmode = $_SESSION['ENCMODE'];
//	
//	$encryptStr = mcrypt_encrypt($cipher, $encryptionkey, $q, $encmode, $encryptionkey);
//	$encoded = base64_encode($encryptStr);
//	$decodeData = base64_decode($encoded);
//	$decoded = mcrypt_decrypt($cipher, $encryptionkey, $decodeData, $encmode, $encryptionkey);
//	$decoded = rtrim($decoded, "\0");
	
	if (file_exists("_lib/systemFunc.php"))
	{
		require_once("_lib/systemFunc.php");
	}
	else
	{
		require_once("../_lib/systemFunc.php");
	}		
	
	if (file_exists("_lib/class.dbconnection.php"))
	{
		require_once("_lib/class.dbconnection.php");
	}
	else
	{
		require_once("../_lib/class.dbconnection.php");
	}
	
	
	
	$resultArr['success'] = 1;
	$resultArr['sql'] = '';
	$resultArr['sqlerr'] = '';
	$resultArr['error'] = '';
	//$resultArr['q'] = $q;
	//$resultArr['key'] = $encryptionkey;
	//$resultArr['encrypted'] = $encrypted;
	//$resultArr['decrypted'] = $decrypted;
	$err = '';
	
	//ESTABLISH MYSQL CONNECTION
	$conn = new dbconnection;
	$link = $conn->OpenDatabaseConnectionMySQL();
	
	if ($link)
	{
		if (isset($_POST['username']))
		{
			$username = $_POST['username'];
		}
		
		$sql = "select
							*
						from
							admin_users au
						inner join
							client_master cm on cm.cm_id=au.cm_id
						where
							au.username = '".$username."'
						";
		$resultArr['sql'] = $sql;
		$res = mysql_query($sql);
		$err = mysql_error();
		//$lastid = mysql_insert_id();
		if ($err != '')
		{
			$resultArr['success'] = 0;
			$resultArr['sqlerr'] = $err;
		}
		else
		{
			$numrows = mysql_num_rows($res);
			if ($numrows == 0)
			{
				$resultArr['success'] = 0;
				$resultArr['error'] = "Username not found.\nPlease contact us on the number on the top of your screen";
			}
			elseif ($numrows == 1)
			{
				$resultArr['success'] = 1;
				$row = mysql_fetch_assoc($res);
				$client_id = $row['cm_id'];
				$companyname = $row['cm_companyname'];
				$accountstatus = $row['cm_account_status'];
				$company_email = $row['cm_company_email'];
				$contact_email = $row['cm_contact_email'];
				$fullname = $row['fullname'];
				$lastname = $row['lastname'];
				//$password = md5($row['password']);
				$password = $row['password'];
				
				//$q = "P4ssw0rd!";
				//$encrypted = encrypt($password);
				$decrypted = decrypt($password);
				$resultArr['decrypted'] = $decrypted;
				
				if ($contact_email == '')
				{
					$contact_email = $company_email;
				}
				
				if ($contact_email == '')
				{
					$resultArr['success'] = 0;
					$resultArr['error'] = "Could not send credentials.\nNo email found";
				}
				
				if ($resultArr['success'])
				{
					if ($accountstatus != 'active')
					{
						$resultArr['success'] = 0;
						$resultArr['error'] = "Your account is not currently active\nPlease contact the administrator";						
					}
				}

				if ($resultArr['success'])
				{
					$resultArr['AccStatus'] = $accountstatus;
					$resultArr['contactemail'] = $contact_email;
				
				$message = "Login Details Request: 

Company Name: " . $companyname . "
Fullname: " . $fullname . "
Lastname: " . $lastname . "
Username: " . $username . "
Password: " . $decrypted . "
							
Please do not reply to this email as it is unmonitored.

Regards
The Dynamic Advertising Team

";
					
				}

			}
			else //MORE THAN ONE RECORD WITH USERNAME FOUND
			{
				$resultArr['success'] = 0;
				$resultArr['error'] = "Unable to retrieve login details.\nPlease contact us on the number on the top of your screen";
			}
			
						
			//SEND EMAIL
			if ($resultArr['success'])
			{
				$Name = 'DYNAMIC';
				$fromemail = 'noreply@dait.co.za'; //senders e-mail adress
				//$fromemail = "root@localhost.com"; //senders e-mail adress
				//$recipient = "william.kruger@universal.co.za"; //recipient
				$recipient = $resultArr['contactemail']; //recipient
				$mail_body = $message; //mail body
				$subject = 'Login Details Request'; //subject
				$header = "From: ". $Name . " <" . $fromemail . ">\r\n"; //optional headerfields
				
				ini_set('sendmail_from', $fromemail); 
				
				$sendmail = mail($recipient, $subject, $mail_body, $header); //mail command :)			
				$resultArr['sendmail'] = $sendmail;
			}
			
			if (!$sendmail)
			{
				$resultArr['success'] = 0;
				//$resultArr['error'] = "Unable to send login details to " . $contact_email . ".\nPlease contact us on the number on the top of your screen(" . $decrypted . " -> " . substr(md5($password) , 0 , 20) . ")";
				$resultArr['error'] = "Unable to send login details to " . $contact_email . ".\nPlease contact us on the number on the top of your screen";
			}
			
		}
		
	}
	else
	{
//		echo 'Could not connect';
//		die();
		$resultArr['success'] = 0;
		$resultArr['sqlerr'] = 'Could not connect';
		$resultArr['error'] = "System currently unavailable.\nPlease check back later";
	}
	
	echo json_encode($resultArr);

	
?>