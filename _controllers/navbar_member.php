<?php
	session_start();
	
//	echo '<pre>';
//	print_r($_SESSION);
//	echo '</pre>';
	
	$user = $_SESSION['USER'];
	$sessiontype = $_SESSION['sessiontype'];
	$logintype = $_SESSION['logintype'];
	$client_id = $_SESSION['client_id'];	





	if (file_exists("_views/navbar_member.php"))
	{
		require_once("_views/navbar_member.php");
	}
	else
	{
		require_once("../_views/navbar_member.php");
	}	
	
?>