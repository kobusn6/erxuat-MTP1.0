<?php
	date_default_timezone_set('Africa/Johannesburg');
	$script_tz = date_default_timezone_get();
	if (!isset($_SESSION['SESSIONID']))
	{
		session_start();
	}
	//session_start();
	
	$keywords = '';
	
	if (file_exists("_lib/class.dbconnection.php"))
	{
		require_once("_lib/class.dbconnection.php");
	}
	else
	{
		require_once("../_lib/class.dbconnection.php");
	}//if (file_exists("_lib/class.dbconnection.php"))
	
	//ESTABLISH MYSQL CONNECTION
	$conn = new dbconnection;
	$link = $conn->OpenDatabaseConnectionMySQL();	
	
	//GET ALL AD KEYWORDS
	$keywordsArr = array();
	$sqlKeywords = "select
										keywords_word
									from
										erx_keywords
									where
										keywords_status = 1
										";
	$resKeywords = mysqli_query($linkM, $sqlKeywords);
	$errKeywords = mysqli_error($linkM);
	if ($errKeywords == '')
	{
		$numrowsKeywords = mysqli_num_rows($resKeywords);
		if ($numrowsKeywords > 0)
		{
			while ($rowsKeywords = mysqli_fetch_assoc($resKeywords))
			{
				$keywords .= $rowsKeywords['ad_keywords'] . ' ';
			}
		}
	}

	$keywords = str_replace(',' , ' ' , $keywords);
	$keywords = str_replace('  ' , ' ' , $keywords);

//	if (file_exists("_views/navbar.php"))
//	{
//		require_once("_views/navbar.php");
//	}
//	else
//	{
//		require_once("../_views/navbar.php");
//	}	
	
?>