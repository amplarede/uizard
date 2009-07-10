<?php

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.2
*/

?>

<!-- HTML : LAYOUT::TOP -->
<div id="top1">
    <div id="mainMenu">
        <div class="bd" style="margin-left:60px;">
            <ul class="first-of-type">
                <li class="yuimenubaritem first-of-type">
                    <a class="yuimenubaritemlabel" href="#">File</a>
                </li>
                <li class="yuimenubaritem">
                    <a class="yuimenubaritemlabel" href="#">Object</a>
                </li>                
                <li class="yuimenubaritem">
                    <a class="yuimenubaritemlabel" href="#">Editor</a>
                </li>
                <li class="yuimenubaritem">
                    <a class="yuimenubaritemlabel" href="#">View</a>
                </li>
                <li class="yuimenubaritem">
                    <a class="yuimenubaritemlabel" href="#">Option</a>
                </li>
                <li class="yuimenubaritem">
                    <a class="yuimenubaritemlabel" href="#">Help</a>
                </li>
            </ul>
        </div>
    </div>
    <div id="toolbar" style="background:url(images/bg_toolbar.png); height:35px; border-bottom:#666 solid 1px;">
        <div id="toolbarContainer" style="margin-left:64px; padding-top:5px;">
      		<?php include("config/layout/toolbar.php"); ?>
        </div>
    </div>
</div>

<!-- HTML : LAYOUT::BOTTOM -->
<div id="bottom1">
    <div id="divMessage" style="font-size:11px;" class="divDefaultBackground">
    </div>
</div>

<!-- HTML : LAYOUT::RIGHT -->
<div id="right1" class="divDefaultBackground">

</div>

<!-- HTML : LAYOUT::LEFT -->
<div id="left1">
	<div id="divToolbox" style="font-size:12px;" class="divDefaultBackground">
		<?php //include("config/layout/toolbox.php"); ?>
	</div>
</div>

<!-- HTML : LAYOUT::CENTER -->
<div id="center1">
	<a name="anchorTapTop" id="anchorTapTop"></a>
    <div id="canvas" class="divDefaultBackground">
		
    </div>
    <div id="canvasTab" style="padding-right:0px;">
		
    </div>
</div>

<!-- HTML : CONTAINER::PROPERTIES -->
<div id="divProperties" class="divDefaultBackground">
</div>  

<!-- HTML : CONTAINER::OBJECT EXPLORER -->
<div id="divObjectsExplorer">
	<div style="font-size:12px; padding-left:5px; padding-top:5px;">
    	<img src="images/layout/uizard.png" align="middle"> <b>UIzard</b>
	</div>
	<div id="objectsExplorerTreeview" style="padding-left:5px; font-size:12px;">
	</div>
	<div id="objectsExplorerTreeviewDummy" style="display:none;">
		<ul id="treeNodeProject">
			<li><a onclick=""><img src="images/layout/project.png" align="middle"> <b><?php echo $projectName;?></b></a>
				<ul id="treeNodeCanvas">
					<li><a href="#" onclick="objClicked(0);"><img src="images/layout/canvas.png" align="middle"> Canvas</a>
						<ul id="treeNodeObjects">
						</ul>
					</li>
					<li><a href="#" onclick=""><img src="images/layout/datasource.png" align="middle"> Datasource</a>
						<ul id="treeNodeDatasource">
						</ul>
					</li>                    
				</ul>
			</li>
		</ul>
	</div>
</div>  

<!-- HTML : CONTAINER::ICON -->
<div id="uizardIcon" style="position:absolute; z-index:2; left:2px; top:2px; width:60px; height:60px; background:url(images/uizardIcon.png);"></div>