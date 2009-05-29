<?php

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

header('Content-type: text/xml; charset=UTF-8'); 

$url = str_replace("and!", "&", $_GET['url']);
$urlTemp = split('=', $url);
$urlTempCount = count($urlTemp);

$url = "";
for($i=0; $i<$urlTempCount; $i++) {
	if($i == $urlTempCount-1) $url .= urlencode($urlTemp[$i]);
	else $url .= $urlTemp[$i]."=";
}

$xml = implode("", file($url));
echo ($xml);

/*
$type = "text/xml";

// Open the Curl session
$session = curl_init($url);

// Don't return HTTP headers. Do return the contents of the call
curl_setopt($session, CURLOPT_HEADER, false);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

// Make the call
$response = curl_exec($session);

header("Content-Type: ".$type);
echo $response;
curl_close($session);
*/


?>