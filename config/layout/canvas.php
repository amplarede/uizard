<?php

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.2
*/

?>


<!-- HTML : CONTAINER::DESIGN CANVAS -->
<div id='canvas1'>
	<div class="hd"></div>
	<div id='canvasDesign' class="bd" style='width:<?php echo isset($_GET['width']) ? $_GET['width'] : 500; ?>; height:<?php echo isset($_GET['height']) ? $_GET['height'] : 500; ?>; background-color:#ffffff;' onClick='canvasClicked();' onDblClick='canvasDblClicked();'>
	<div id="objectStorage" style=""></div>
	<div id="canvasGrid" style="height:<?php echo isset($_GET['height']) ? $_GET['height'] : 500; ?>; background:url(images/grid_10px.png); opacity:0.4; filter:alpha(opacity=40);"></div>
	</div>
</div>

<!-- HTML : CONTAINER::DATASOURCE CANVAS -->
<div id='canvas2'>
	<div class="hd"></div>
	<div id='canvasDataSource' class="bd" style='height:1000px; background:#ffffff;'>
	</div>
</div>

<!-- HTML : CONTAINER::CODE CANVAS -->
<div id='canvas3'>
	<div class="hd"></div>
	<div id='canvasCode' class="bd" style='background:#ffffff;'>
		<textarea name='textAreaCode' id='textAreaCode' cols="120" rows="30"></textarea>
	</div>
</div>

<!-- HTML : CONTAINER::REALCODE CANVAS -->
<div id='canvas4'>  
	<div class="hd"></div>
	<div id='canvasRealCode' class="bd" style='background:#ffffff; padding:0px;'>
		<iframe id='iframeRealCode' src='' width='100%' height="1000" frameborder='0' scrolling='no'></iframe>
	</div>
</div>    

<!-- HTML : CONTAINER::HTML CANVAS -->
<div id='canvas5'>  
	<div class="hd"></div>
	<div id='canvasHtml' class="bd" style='background:#ffffff;'>
		<textarea name='textAreaHtml' id='textAreaHtml' cols="120" rows="30"></textarea>
	</div>
</div>

<!-- HTML : CONTAINER::REALHTML CANVAS -->
<div id='canvas6'>  
	<div class="hd"></div>
	<div id='canvasRealHtml' class="bd" style='background:#ffffff; padding:0px;'>
		<iframe id='iframeRealHtml' src='' width='100%' height="1000" frameborder='0' scrolling='no'></iframe>
	</div>
</div>

<!-- HTML : CONTAINER::PREVIEW CANVAS -->
<div id='canvas7'>   
	<div class="hd"></div>
	<div id='canvasPreview' class="bd" style='background:#ffffff; width:100%; height:1000px; padding:0px;'>
		<iframe id='iframePreview' src='' width='100%' height="1000" frameborder='0' scrolling='no'></iframe>
	</div>
</div>

<!-- HTML : CONTAINER::CANVAS -->    
<div id='canvasContainer'>   
</div>