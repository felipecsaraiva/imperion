<?php header('Access-Control-Allow-Origin: *');include 'dbvars.php';$con=mysqli_connect($dbserver,$dbuser,$dbpass,$dbdata);
// Check connection
if (mysqli_connect_errno()) {  echo "Failed to connect to MySQL: " . mysqli_connect_error();}
// escape variables for security
$uId = mysqli_real_escape_string($con, $_POST['uId']);$nome =  mysqli_real_escape_string($con, $_POST['nome']);
$sql="INSERT INTO tb_usuario (tx_usuario,tx_nome,tx_email)VALUES ('$uId','$nome','')";
if (!mysqli_query($con,$sql)) {  die('Error: ' . mysqli_error($con));}
echo "1 record added";
mysqli_close($con);
?>