<?php
//	ini_set('error_reporting', E_ALL);
//	ini_set('display_errors', 1);
	
//	set_time_limit(6000);

	session_start();
	
	if (file_exists("_lib/class.dbconnection.php"))
	{
		require_once("_lib/class.dbconnection.php");
	}
	else
	{
		require_once("../_lib/class.dbconnection.php");
	}
	
	//ESTABLISH MYSQL CONNECTION
	$conn = new dbconnection;
	$link = $conn->OpenDatabaseConnectionMySQL();	
	
//	echo '<pre>';
//	print_r($_POST);
//	print_r($_FILES);
////	echo $_FILES."<br>";
//	echo '</pre>';

	$client_id = '';
	if (isset($_POST['ad_cm_id']))
	{
		$client_id = $_POST['ad_cm_id'];
	}
	
	$action = '';
	if (isset($_POST['action']))
	{
		$action = $_POST['action'];
	}
	
	
	$success = 1;
	$resultArr = array();
	$result_msg = '';
	$fileTotal = 0;
	$file_name = '';
	$file_size = 0;
	
	$newFileName = '';
	
		
	foreach ($_FILES as $field => $value)
	{
		$success = 1;
		if ($success)
		{
			$file_name = basename($_FILES[$field]['name']);
			$file_ext = substr($file_name,-4);
			$file_size = basename($_FILES[$field]['size']);

//			echo 'file_name -> ' . $file_name . "<br>";
//			echo 'file_ext -> ' . $file_ext . "<br>";
//			echo 'file_size -> ' . $file_size . "<br>";

			if ($file_size == 0 && $file_name != '')
			{
				$success = 0;
				$result_msg = "Files Cannot Be Zero Size";
			}				
			else
			{
				//if (basename($_FILES[$field]['name']) != '')
				
				if ($file_name != '')
				{
					if ($file_size > 5000000) //LIMIT FILE SIZE TO 1MB
					{
						$success = 0;
						//echo "<script>alert('".basename($_FILES[$field]['name'])." -> File size too big')</script>";
						$result_msg = $file_name." -> File size too big -> ".$file_size;
					}
					
					if ($success)
					{
						$file_type = substr($file_name,-4);
						$file_type = strtolower($file_type);

//						//$uploaddir = '../_binu/';
//						$uploaddir = '/opt/universal/uh/imports_data/sms/';
						$uploaddir = '../_images/ads/' . $client_id . '/';
						$uploadfile = "";

						if($file_type!='.jpg' && $file_type!='.gif' && $file_type!='.png' && $file_type!='.bmp' && $file_type!='.pdf')
//						if($file_type!='.csv' && $file_type!='.txt')
						{	
							//echo "<script>alert('".basename($_FILES[$field]['name'])." -> Incorrent filetype -> '.".$file_type."');</script>";
							$result_msg = $file_name." -> Incorrent filetype -> ".$file_type;
							$success = 0;
						}	
						else
						{			
//							$rand = md5(rand(uniqid()));
//							$rand = substr($rand , 0 , 10);
//							echo 'rand = ' . $rand . "<br>";
//							$uploadfilename = 'img_' . $rand . $file_ext;
							$uploadfilename = trim($file_name);
							$uploadfilename = str_replace('-','',$uploadfilename);
							$uploadfilename = str_replace(':','',$uploadfilename);
							$uploadfilename = str_replace(' ','',$uploadfilename);
							//$uploadfilename = $file_name;						
							
							$uploadfile = str_replace('-','',$uploadfilename);
							$uploadfile = str_replace(':','',$uploadfile);
							$uploadfile = $uploaddir.$uploadfile;
//							
//							//CHECK IF FILENAME ALREADY EXISTS
//							$sqlLookup = "select
//															sbf.sbf_upload_date,
//															(au.au_fullname || au.au_lastname) as user
//														from
//															uh_sms_bulkfiles sbf
//														inner join
//															uh_admin_users au on au.au_guid = sbf.sbf_au_guid
//														where
//															sbf_filename = '".$uploadfilename."' ";
//							$resLookup = pg_query($link,$sqlLookup);
//							$numrowsLookup = pg_num_rows($resLookup);
//							if ($numrowsLookup > 0)
//							{
//								$rowLookup = pg_fetch_assoc($resLookup);
//								$success = 0;
//								$result_msg = "Data Files Already Exists, Uploaded By ".$rowLookup['user']." on ".$rowLookup['sbf_upload_date'];
//							}							
////							if ($rowLookup['counter'] > 0)
////							{
////								$success = 0;
////								$result_msg = "Data Files Already Exists, Please Choose Different File Name Or Different Schedule Date/Time";
////							}
//							else
//							{
								$success = move_uploaded_file($_FILES[$field]['tmp_name'], $uploadfile);
								if (!$success) 
								{
									//echo "<script>alert('Unable to upload file -> ".$uploadfile."');</script>";
									$result_msg = "Unable to upload file -> ".$file_name;
								}								
//							}
							

						}
					}
				}
			}
		}
	}
//	
//	//DO QUICK CHECK FOR VALIDITY OF THE FILE
//	if ($success)
//	{
//		$uploadedFile = '';
//		if (file_exists($uploadfile))
//		{
//			$uploadedFile = $uploadfile;
//			//$result_msg = "1. File Upload Successful -> ".$uploadedFile;
//			
//			//FILECHECK 
//			if (!$handle = fopen($uploadedFile, 'r'))
//			{
//				$success = 0;
//				$result_msg = "Could not open ".$uploadedFile." for reading";
//			}
//			else
//			{
//				while(!feof($handle))
//				{
//					$fileTotal++;
//					$line = fgets($handle);
//					if ($line == '')
//					{
//						$success = 0;
//						$result_msg = "File Should Contain No Empty Lines, Check Line: ".$fileTotal;
//						unlink($uploadedFile);
//						break;
//					}
//					else
//					{
//						$line = str_replace("\r",'',$line);
//						$line = str_replace("\n",'',$line);
//						$line = str_replace(chr(00),'',$line);
//						$line = str_replace(chr(13),'',$line);
//						
//						$lineArr = array();
//						$lineArr = explode('|',$line);
//						if (count($lineArr) < 3)
//						{
//							$success = 0;
//							$result_msg = "File Should Contain At Least 3 Fields, eg. CELLNUMBER | MESSAGE | IDNUMBER, Check Line: ".$fileTotal;
//							unlink($uploadedFile);
//							break;
//						}
//						else
//						{
//							if ($lineArr[0] == '' || $lineArr[1] == '' || $lineArr[2] == '')
//							{
//								$success = 0;
//								$result_msg = "File Fields Should Contain No Empty Values, Check Line: ".$fileTotal;
//								unlink($uploadedFile);
//								break;
//							}
//						}
//					}
//				}
//			}
//
//			fclose($handle);
//			if ($success)
//			{
//				if (!$eofhandle = fopen($uploadedFile.'.eof', 'w'))
//				{
//					$success = 0;
//					$result_msg .= "<br>EOF file could not be created";
//				}
//				else
//				{
//					fclose($eofhandle);
//					
//					//ADD TO DB
//					$sqlInsert = "insert into	
//													uh_sms_bulkfiles
//												(sbf_filename,sbf_file_records,sbf_file_size,sbf_upload_date,sbf_au_guid,sbf_scheduledate)
//												values
//												('".$uploadfilename."',".$fileTotal.",".$file_size.",now(),".$_SESSION['userid'].",'".$schedule_date."')";
//					$resInsert = pg_query($link,$sqlInsert);
//					
//				}
//			}
//		}
//		else
//		{
//			$success = 0;
//			$result_msg = "Uploaded File Not Found";
//		}
//		
//
//		

		//ADD DETAILS TO DB
		if ($success)
		{
			if ($action == 'edit')
			{
				$sql = "update 
									ad_adverts
								set 
									ad_context = '" . str_replace('%','percent',$_POST['ad_context']) . "',
									ad_keywords = '" . $_POST['ad_keywords'] . "',
									ad_status = 0,";
								
				if ($_FILES['ad_header_logo']['name'] != '')
				{
					$sql .= " ad_header_logo = '" . $_FILES['ad_header_logo']['name'] . "',";
				}			
				if ($_FILES['ad_left_image']['name'] != '')
				{
					$sql .= " ad_left_image = '" . $_FILES['ad_left_image']['name'] . "',";
				}			
				if ($_FILES['ad_right_image']['name'] != '')
				{
					$sql .= " ad_right_image = '" . $_FILES['ad_right_image']['name'] . "',";
				}
				$sql = substr($sql , 0 , -1);
				$sql .= " where
										ad_id = " . $_POST['ad_id'] . "
										and ad_cm_id = " . $_POST['ad_cm_id'] . "
								";
			}
			else
			{
				$sql = "insert into	
									ad_adverts
								(
									ad_cm_id,
									ad_header_logo,
									ad_context,
									ad_left_image,
									ad_right_image,
									ad_keywords
								)
								values
								(
									" . $_POST['ad_cm_id'] . ",
									'" . $_FILES['ad_header_logo']['name'] . "',
									'" . str_replace('%','percent',$_POST['ad_context']) . "',
									'" . $_FILES['ad_left_image']['name'] . "',
									'" . $_FILES['ad_right_image']['name'] . "',
									'" . $_POST['ad_keywords'] . "'
								)";
			}
			//echo $sql . "<br>";
			//die();
			$res = mysql_query($sql);
			$err = mysql_error();
			if ($err != '')
			{
				$success = 0;
				$result_msg = $err;
			}
		}


		if ($success)
		{
			$result_msg = "Ad Successfully Submitted";
			$result_msg_color = '#04B404';
		}
		else
		{
			$result_msg = "Ad Not Successfully Submitted -> " . $result_msg; // -> " . mysql_error();
			$result_msg_color = '#FE2E2E';
		}
//		
//		
//	}
//
	$resultArr['success'] = $success;
//	$resultArr['sql'] = $sql;
//	$resultArr['result_msg'] = $result_msg;
//	$resultArr['file_name'] = $file_name;
//	$resultArr['file_size'] = $file_size;
//	echo json_encode($resultArr);
	//echo '<input type="text" id="submit_result" value="' . $resultArr['success'] . '" />';
	echo '<input id="subRes" name="subRes" value="' . $resultArr['success'] . '" />';
?>