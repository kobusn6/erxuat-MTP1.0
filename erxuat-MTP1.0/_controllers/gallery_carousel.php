<?php 
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
	
	if (file_exists("_lib/systemFunc.php"))
	{
		require_once("_lib/systemFunc.php");
	}
	else
	{
		require_once("../_lib/systemFunc.php");
	}
	
//	//ESTABLISH MYSQL CONNECTION
//	$conn = new dbconnection;
//	$link = $conn->OpenDatabaseConnectionMySQL();	
//	
//	if ($link)
//	{
//		
//	}
		
	$action = isset($_GET['action']) ? $_GET['action'] : '';
	$section = isset($_GET['section']) ? $_GET['section'] : '';
	if ($action == '')
	{
		$action = 'riedl';
		$section = 'RIEDL Phasys';
	}

//	switch ($action){
//		case "riedl":
//			$thisCarousel = 'riedl';
//			break;
//		case "conveying":
//			break;
//	}

//	switch ($action){
//		case "log_on":
//			$resultArr = array();	
//			$resultArr['error'] = '';
//			$resultArr['AccStatus'] = '';
//			//$resultArr['global'] = $GLOBALS['sessiontype'];
//			
//			$conn = new dbconnection;
//			$link = $conn->OpenDatabaseConnectionMySQL();
//			
//			
////			$sql = "select * from admin_users";
////			$res = mysql_query($link,$sql);
////			$rows = mysql_fetch_assoc($res);
////			echo '<pre>';
////			print_r($rows);
////			echo '</pre>';			
//			
//			$username = $_POST['username'];
//			$password = $_POST['password'];//
//			//$password = substr(md5($_POST['password']) , 0 , 20);
//			$password = encrypt($password);
//			//$resultArr['encrypted'] = encrypt($_POST['password']);
//			$logintype = $_POST['logintype'];
//			//$password1 = substr(md5($_POST['password']) , 0 , 20);
//			//echo $password;
//			//$resultArr['pass1'] = $password;
//			
//			if ($logintype == 'admin')
//			{
//				$sqlAuth = "select 
//											* 
//										from 
//											admin_users 
//										where 
//											username = '".$username."' 
//											and password = '".$password."'
//											and isadmin = 1 ";
//			}
//			else
//			{
//				//$sqlAuth = "select * from admin_users where username = '".$username."' and password = '".$password."' ";
//				$sqlAuth = "select
//											*
//										from
//											admin_users au
//										inner join
//											client_master cm on cm.cm_id=au.cm_id
//										where
//											au.username = '".$username."'
//											and au.password = '".$password."' 
//											";
//			}
//			//echo $sqlAuth."\n";
//			$resultArr['sql'] = $sqlAuth;
//			$resAuth = mysql_query($sqlAuth);
//			$numrowsAuth = mysql_num_rows($resAuth);
//			//echo 'numrowsAuth='.$numrowsAuth."\n";
//			if ($numrowsAuth > 0)
//			{
//				$rowAuth = mysql_fetch_assoc($resAuth);
//				
//				$cont = 1;
//				if ($logintype == 'member')
//				{
//					if ($rowAuth['cm_account_status'] != 'active')
//					{
//						$_SESSION['LOGGED_ON'] = 0;
//						$resultArr['success'] = 0;
//						$resultArr['error'] = "Your account is not currently active\nPlease contact the administrator";
//						$cont = 0;
//					}
//				}
//				
//				if ($cont)
//				{
//					//$_SESSION['sessionid'] = substr(md5(uniqid(rand())),0,6);
//					$_SESSION['sessiontype'] = $logintype;
//					$_SESSION['SESSIONTYPE'] = $logintype;
//					$_SESSION['USERID'] = $rowAuth['guid'];
//					$_SESSION['USER'] = $rowAuth['fullname'].' '.$rowAuth['lastname'];
//					$_SESSION['logon_name'] = $rowAuth['fullname'].' '.$rowAuth['lastname'];
//					$_SESSION['LOGON_NAME'] = $rowAuth['fullname'].' '.$rowAuth['lastname'];
//					if ($logintype == 'member')
//					{
//						$resultArr['AccStatus'] = $rowAuth['cm_account_status'];
//						$_SESSION['account_status'] = $rowAuth['cm_account_status'];
//						$_SESSION['ACCOUNT_STATUS'] = $rowAuth['cm_account_status'];
//						$_SESSION['client_id'] = $rowAuth['cm_id'];
//						$_SESSION['CLIENT_ID'] = $rowAuth['cm_id'];
//						$_SESSION['client'] = $rowAuth['cm_companyname'];
//						$_SESSION['CLIENT'] = $rowAuth['cm_companyname'];
//					}
//					else
//					{
//						$_SESSION['isadmin'] = $rowAuth['isadmin'];
//						$_SESSION['ISADMIN'] = $rowAuth['isadmin'];
//						$_SESSION['SUPERUSER'] = $rowAuth['superuser'];
//					}
//					$_SESSION['logged_on'] = 1;
//					$_SESSION['LOGGED_ON'] = 1;
//					$_SESSION['cpanel'] = 1;
//					$_SESSION['CPANEL'] = 1;
//					$_SESSION['logintype'] = $logintype;
//					$_SESSION['LOGINTYPE'] = $logintype;
//					
//					//ADD TO LOGIN HISTORY				
//					$sqlHistory = "insert into
//													ad_login_history
//												(lh_guid , lh_cm_id)
//												values
//												(
//													" . $_SESSION['USERID'] . " 
//												";
//												
//					//if (isset($_SESSION['client_id']))
//					if ($_SESSION['CLIENT_ID'] != '')
//					{
//						$sqlHistory .= " , " . $_SESSION['CLIENT_ID'];
//					}
//					else
//					{
//						$sqlHistory .= " , NULL" ;
//					}
//					$sqlHistory .= ")";
//					$resHistory = mysql_query($sqlHistory) or $err = mysql_error();
//					if ($err != '')
//					{
//						//echo "***" . $err . "***";
//						$resultArr['error'] = "Could not log login history";
//					}
//					
//					$resultArr['success'] = 1;
//				}
//				
//
//			}
//			else
//			{
//				$_SESSION['LOGGED_ON'] = 0;
//				$resultArr['success'] = 0;
//				$resultArr['error'] = "Incorrect username or password";
//			}
//
//			//echo json_encode($resultArr);
//			session_write_close();
//
//		break;
//		case "logout":
//			$resultArr = array();	
////			$conn = new dbconnection;
////			$link = $conn->OpenDatabaseConnection();
////			if ($link)
////			{
////				//ENSURE THAT ALL "current" CALLS FOR AGENT IS SET BACK TO "pending"
////				$sqlReset = "update cc_queue set status='pending' where status='current' and agent_extension='".$_SESSION['agent_extension']."' ";
////				$resReset = pg_query($link, $sqlReset);
////			}
////			
//			session_destroy();
//			$resultArr['success'] = 1;
//			//echo json_encode($resultArr);
////			echo 1;
//		break;
//	}
////	if ($logintype == 'member')
////	{
////		if ($resultArr['AccStatus'] != 'active')
////		{
////			session_destroy();
////			$resultArr['success'] = 1;
////		}
////	}
////	if ($resultArr['error'] != '')
////	{
////		session_destroy();
////	}
//	echo json_encode($resultArr);
	
	
	if (file_exists("_views/gallery_carousel2.php"))
	{
		require_once("_views/gallery_carousel2.php");
	}
	else
	{
		require_once("../_views/gallery_carousel2.php");
	}		

?>
