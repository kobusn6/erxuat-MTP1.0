<?php 
if (!isset($_SESSION['logged_on']))
{
	session_start("gem");
}

if($_SESSION['logged_on'] != 'yes'){
	die('
		<script>
			window.location.href = "index.php";
		</script>
	');
}

?>