<?php
	if (!isset($_SESSION['SESSIONID']))
	{
		session_start();
	}

	$sessiontype = '';
	if (isset($_SESSION['SESSIONTYPE']))
	{
		$sessiontype = $_SESSION['SESSIONTYPE'];
	}

	$_SESSION['SYSTEMLIB'] = '_lib/';

	if (file_exists($_SESSION['SYSTEMLIB']."systemFunc.php"))
	{
		require_once($_SESSION['SYSTEMLIB']."systemFunc.php");
	}
	else
	{
		require_once("../".$_SESSION['SYSTEMLIB']."systemFunc.php");
	}	

	if ($sessiontype == '')
	{
		$_SESSION['SESSIONID'] = substr(md5(uniqid(rand())),0,6);
	}
	
	$_SESSION['ENCKEY'] = md5(md5('MEGAN'));
	$_SESSION['CIPHER'] = "AES-256-CBC";
	$_SESSION['ENCIV'] = '1234567891011121';


	$_SESSION['SUB'] = '/erx/';
?>
