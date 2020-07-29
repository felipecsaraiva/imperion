<?php
include 'dbvars.php';$con=mysqli_connect($dbserver,$dbuser,$dbpass,$dbdata);
// Check connection
if (mysqli_connect_errno()) {  echo "Failed to connect to MySQL: " . mysqli_connect_error();}// escape variables for security
$uId = mysqli_real_escape_string($con, $_GET['uId']);//Query to pull the data - Change tabale name and field name 
$getdata=mysqli_query($con,"SELECT * FROM tb_inimigo WHERE nr_nivel = '$uId'");
//Create an empty array
$json = array();//Fetch the data in a loop
while($r=mysqli_fetch_array($getdata)){
//Add the fetched vale to $json array
$json[] = $r;
}
//Encode the array to JSON
$json_data=json_encode($json); 

// Content type
header("Content-type: application/json");  

//JSONP - Make it as JSONP object
echo $_GET['callback'] . ' (' . $json_data . ');'; 

?>