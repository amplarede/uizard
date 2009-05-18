<?php

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

header('Content-type: text/xml'); 

//��ȣ& ó��
$url = str_replace("and!", "&", $_GET['url']);

$xml = implode("", file($url));
echo ($xml);

?>