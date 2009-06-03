<?php

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.2
*/

?>

<!-- HTML : CONTAINER::PANELS -->
<div id="panels"></div>

<!-- HTML : CONTAINER::NEW PROJECT -->
<div id="newProject">
	<div class="hd" style="text-align:left"><img src="images/toolbar/new.png" align="absmiddle"> New Project</div>
	<div class="bd" style="text-align:center;">
    	<div style="float:left; width:180px; height:315px; text-align:left; font-size:12px; margin-right:5px;">
        	<div style="height:20px;"><b>Category</b></div>
            <div id="projectCategory" style="height:295px; border:1px #CCC solid; background:#FFF;">
            </div>
        </div>
        <div style="float:right; width:392px; height:315px; text-align:left; font-size:11px;">
	        <div style="height:20px;"><b>Type</b></div>
            <div style="height:295px; border:1px #CCC solid; background:#FFF;">
                <div id="projectType"; style="margin:10px;">
                </div> 
        	</div>
        </div>      
	</div>
</div>

<!-- HTML : CONTAINER::MAKE PROJECT -->
<div id="makeProject">
	<div class="hd" style="text-align:left"><img src="images/toolbar/new.png" align="absmiddle"> Project Setting</div>
	<div class="bd" style="text-align:center;">
    <form id="makeProjectForm"  name="makeProjectForm" method="POST" action="projects/new.php">
    	<div><img src='images/makeproject.png'><a href="#" onClick=""></a></div>
        <div style="margin-top:10px; margin-left:20px; margin-right:20px; text-align:left;">
        	<div style="height:25px;">Project Name</div>
            <div style="height:30px;"><input id="inputProjectName" name="inputProjectName" style="width:384px;"></div>
            <div style="height:25px;">Project Author</div>
            <div style="height:30px;"><input style="width:384px;" value="<?php echo $projectAuthor;?>" disabled="disabled"><input id="inputProjectAuthor" name="inputProjectAuthor" value="<?=$projectAuthor?>" type="hidden"></div>
        </div>
        <input id="inputProjectTemplateFile" name="inputProjectTemplateFile" value="" type="hidden">
        <input id="inputProjectWidth" name="inputProjectWidth" value="" type="hidden">
        <input id="inputProjectHeight" name="inputProjectHeight" value="" type="hidden">
    </form>   
	</div>
</div>

<!-- HTML : CONTAINER::OPEN PROJECT -->
<div id="openProject">
	<div class="hd" style="text-align:left"><img src="images/toolbar/open.png" align="absmiddle"> Open...</div>
	<div class="bd" style="text-align:center;">
    	<div style="text-align:left; font-weight:bold; font-size:12px; margin:5px;">Open Project</div>
    	<div id="openProjectInputBox" style="text-align:left; margin:8px; height:34px;"><input id="openProjectName" type="text" style="width:410px;"></div>
    	<div id="openProjectButtons" style="text-align:right; margin:5px;"></div>
	</div>
</div>

<!-- HTML : CONTAINER::SAVE AS PROJECT -->
<div id="saveAsProject">
	<div class="hd" style="text-align:left"><img src="images/toolbar/saveas.png" align="absmiddle"> Save As...</div>
	<div class="bd" style="text-align:center;">
    <form name="saveAsProjectForm" method="POST" action="projects/saveas.php" target="_blank">
    	<div style="text-align:left; font-weight:bold; font-size:12px; margin:5px;">New Project Name</div>
    	<div id="saveAsProjectInputBox" style="text-align:left; margin:8px; height:34px;"><input id="newProjectName" type="text" style="width:410px;"></div>
    	<div id="saveAsProjectButtons" style="text-align:right; margin:5px;"></div>
    </form>
	</div>
</div>

<!-- HTML : CONTAINER::EXPORT PROJECT -->
<div id="exportProject">
	<div class="hd" style="text-align:left"><img src="images/toolbar/export.png" align="absmiddle"> Export The Project</div>
	<div class="bd" style="text-align:center;">
    <form id="exportProjectForm" name="exportProjectForm" method="POST" action="projects/export.php" target="_blank"> 
    	<input name="projectDir" type="hidden" value="<?php echo $projectname;?>" />
    	<div id="exportProjectInformation" style="float:left; width:350px; height:310px; text-align:left; font-size:12px;">
        	<div style="border-bottom:solid 1px #999; padding-bottom:3px; margin-bottom:3px; margin-right:10px;"><b>Project Title</b></div>
            <div id="exportProjectTitle" style="margin-bottom:15px; margin-right:10px;"></div>
            <div style="border-bottom:solid 1px #999; padding-bottom:3px; margin-bottom:3px; margin-right:10px;"><b>Project Owner</b></div>
            <div id="exportProjectOwner" style="margin-bottom:15px; margin-right:10px;"></div>
            <div style="border-bottom:solid 1px #999; padding-bottom:3px; margin-bottom:3px; margin-right:10px;"><b>Project Description</b></div>
            <div id="exportProjectDescription" style="margin-right:10px;"></div>
        </div>
        <div id="exportProjectOption" style="float:left; width:226px; height:310px; text-align:left; font-size:12px;">
        	<div style="height:20px;"><b>Project Option</b></div>
        	<div id="exportProjectOptionTreeview" style="text-align:left; padding:3px; height:260px; border:1px #CCC solid; background:#FFF; font-size:11px;">
              <ul>
                <li>Files
                  <ul>
                    <li><a><input id="chkboxIncludeHTMLFile" name="chkboxIncludeHTMLFile" type="checkbox" checked /> HTML Files</a></li>
                    <li><a><input id="chkboxIncludeJSFile" name="chkboxIncludeJSFile" type="checkbox" checked /> JS Files</a></li>
                    <li><a><input id="chkboxIncludeCSSFile" name="chkboxIncludeCSSFile" type="checkbox" checked /> CSS Files</a></li>
                    <li><a><input id="chkboxIncludePHPFile" name="chkboxIncludePHPFile" type="checkbox" /> PHP Files (for XML Proxy)</a></li>
                  </ul>
                </li>
                <!--
                <li>Libraries
                  <ul>
                    <li><a><input id="chkboxIncludeLibYUI" name="chkboxIncludeLibYUI" type="checkbox" /> YUI</a></li>
                    <li><a><input id="chkboxIncludePrototype" name="chkboxIncludePrototype" type="checkbox" /> Prototype</a></li>
                    <li><a><input id="chkboxIncludejQuery" name="chkboxIncludejQuery" type="checkbox" /> jQuery</a></li>
                    <li><a><input id="chkboxIncludeMooTools" name="chkboxIncludeMooTools" type="checkbox" /> MooTools</a></li>
                    <li><a><input id="chkboxIncludeDojo" name="chkboxIncludeDojo" type="checkbox" /> Dojo</a></li>
                    <li><a><input id="chkboxIncludeJindo" name="chkboxIncludeJindo" type="checkbox" /> Jindo</a></li>                    
                    <li><a><input id="chkboxIncludeSWFObject" name="chkboxIncludeSWFObject" type="checkbox" /> SWF Object</a></li>                                        
                  </ul>
                </li>
                -->
              </ul>
            </div>
            <div id="exportProjectOptionCheckBox" style="text-align:left; padding:3px; height:20px; border:1px #CCC solid; background:#FFF; font-size:11px;">
            	<a><input id="chkboxCompressJSFile" name="chkboxCompressJSFile" type="checkbox" checked /> Compress JS Files</a>
            </div>
        </div>
    </form>
	</div>
</div>

<!-- HTML : CONTAINER::PROJECT GALLERY -->
<div id="projectGallery">
	<div class="hd" style="text-align:left"><img src="images/toolbar/export.png" align="absmiddle"> Project Gallery</div>
	<div class="bd" style="text-align:center;">
    <form id="projectGalleryForm" name="projectGalleryForm" method="POST" action="projects/projectGallery.php" target="_blank"> 
    	<input name="projectDir" type="hidden" value="<?php echo $projectname;?>" />
    	<div id="exportProjectInformation" style="float:left; width:350px; height:310px; text-align:left; font-size:12px;">
        	<div style="border-bottom:solid 1px #999; padding-bottom:3px; margin-bottom:3px; margin-right:10px;"><b>Project Title</b></div>
            <div id="projectGalleryTitle" style="margin-bottom:15px; margin-right:10px;"></div>
            <div style="border-bottom:solid 1px #999; padding-bottom:3px; margin-bottom:3px; margin-right:10px;"><b>Project Owner</b></div>
            <div id="projectGalleryOwner" style="margin-bottom:15px; margin-right:10px;"></div>
            <div style="border-bottom:solid 1px #999; padding-bottom:3px; margin-bottom:3px; margin-right:10px;"><b>Project Description</b></div>
            <div id="projectGalleryDescription" style="margin-right:10px;"></div>
        </div>
        <div id="exportProjectOption" style="float:left; width:226px; height:310px; text-align:left; font-size:12px;">
        	<div style="height:20px;"><b>Project Option</b></div>
        	<div id="exportProjectOptionTreeview" style="text-align:left; padding:3px; height:260px; border:1px #CCC solid; background:#FFF; font-size:11px;">
              <ul>
                <li>Files
                  <ul>
                    <li><a><input id="chkboxIncludeHTMLFile" name="chkboxIncludeHTMLFile" type="checkbox" checked /> HTML Files</a></li>
                    <li><a><input id="chkboxIncludeJSFile" name="chkboxIncludeJSFile" type="checkbox" checked /> JS Files</a></li>
                    <li><a><input id="chkboxIncludeCSSFile" name="chkboxIncludeCSSFile" type="checkbox" checked /> CSS Files</a></li>
                    <li><a><input id="chkboxIncludePHPFile" name="chkboxIncludePHPFile" type="checkbox" /> PHP Files (for XML Proxy)</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div id="exportProjectOptionCheckBox" style="text-align:left; padding:3px; height:20px; border:1px #CCC solid; background:#FFF; font-size:11px;">
            	<a><input id="chkboxCompressJSFile" name="chkboxCompressJSFile" type="checkbox" checked /> Compress JS Files</a>
            </div>
        </div>
    </form>
	</div>
</div>

<!-- HTML : CONTAINER::UIZARD INFO -->
<div id="UIzardInfo">
	<div class="hd"></div>
	<div class="bd">
    	<img src='images/info.png' style="cursor:pointer;" onclick="panelUIzardInfo.hide();">
	</div>
</div>

<!-- HTML : CONTAINER::GRID SETTING -->
<div id="gridSetting">
	<div class="hd" style="text-align:left;"><img src="images/toolbar/gridsetting.png" align="absmiddle"> Grid Setting</div>
	<div id="gridSettingBody" class="bd">
        <div align="left" style="height:25px; font-weight:bold; font-size:12px;">Grid Size</div>
    	<div id="gridSettingButtons" style="height:40px;"></div>
        <div align="left" style="height:25px; font-weight:bold; font-size:12px;">Grid Opacity</div>
		<div id="gridSettingSlider" class="yui-h-slider" tabindex="-1" title="Slider" style="margin-left:8px; background:url(http://yui.yahooapis.com/2.6.0/build/slider/assets/bg-fader.gif) 5px 0 no-repeat;">   
			<div id="gridSlider-thumb" class="yui-slider-thumb"><img src="http://yui.yahooapis.com/2.6.0/build/slider/assets/thumb-n.gif"></div>  
		</div>  
	</div>
</div>

<!-- HTML : CONTAINER::API KEY SETTING -->
<div id="APIKeySetting">
	<div class="hd" style="text-align:left"><img src="images/toolbar/apikeysetting.png" align="absmiddle"> API Key Setting</div>
	<div class="bd">
    	<div id="tableAPIKeySetting"></div>
       	<div id="statusAPIKeySetting" style="height:50px;"></div>
	</div>
</div>

<!-- HTML : CONTAINER::CSS SETTING -->
<div id="CSSSetting">
	<div class="hd" style="text-align:left"><img src="images/toolbar/cssSetting.png" align="absmiddle"> CSS Setting</div>
	<div class="bd">
    	<div id="tabCSSSetting" style="text-align:left;">
            <ul class="yui-nav">
                <li class="selected"><a href="#tab1"><em>Edit</em></a></li>
            </ul>            
            <div class="yui-content">
                <div id="tab1" style="text-align:left; height:270px; font-size:12px; padding:10px;">
					<textarea id='cssEditor'></textarea>                                            
                </div>
            </div>        
        </div>
	</div>
</div>

<!-- HTML : CONTAINER::PREFERENCES -->
<div id="Preferences">
	<div class="hd" style="text-align:left"><img src="images/toolbar/preference.png" align="absmiddle"> Preferences</div>
	<div class="bd">
    <form name="preferencesForm" method="POST" action="" target="_blank"> 
        <div id="tabPreferences" class="yui-navset" style="text-align:left;">
            <ul class="yui-nav">
                <li class="selected"><a href="#tab1"><em>General</em></a></li>
            </ul>            
            <div class="yui-content">
                <div id="tab1" style="text-align:left; height:270px; font-size:12px; padding:10px;">
                	<div style="font-weight:bold; border-bottom:solid 1px #999; padding-bottom:3px; margin-bottom:5px;">Object Highlighting</div>
                    <div style="margin-bottom:15px;">
                    	<input id="chkboxShowSelection" name="chkboxShowSelection" type="checkbox" /> Show The Object Selection Always<br />
                        <input id="chkboxFillSelection" name="chkboxFillSelection" type="checkbox" /> Fill The Object Selection<br />
                    </div>
                	<div style="font-weight:bold; border-bottom:solid 1px #999; padding-bottom:3px; margin-bottom:5px;">Drag & Resize</div>
                    <div style="margin-bottom:15px;">
                    	<input id="chkboxShowResizeHandle" name="chkboxShowResizeHandle" type="checkbox" /> Show The Resize Handle Always<br />
                        <!--
                        <input id="chkboxProxyResize" name="chkboxProxyResize" type="checkbox" checked /> Proxy Resize<br />
                        <input id="chkboxProxyDrag" name="chkboxProxyDrag" type="checkbox" /> Proxy Drag<br />
                        -->
                    </div>
                    <!--
                	<div style="font-weight:bold; border-bottom:solid 1px #999; padding-bottom:3px; margin-bottom:5px;">Edit</div>
                    <div style="margin-bottom:15px;">
                    	Font : <br />
                        Line Spacing : <br />
                    </div>
                    -->
                	<div style="font-weight:bold; border-bottom:solid 1px #999; padding-bottom:3px; margin-bottom:5px;">Debugger</div>
                    <div style="margin-bottom:15px;">
                    	<input id="chkboxDebuggerFireBug" name="chkboxDebuggerFireBug" type="checkbox" /> Enable FireBug<br />
                    </div>                        
                </div>
            </div>
        </div>
    </form>
	</div>
</div>

<!-- HTML : CONTAINER::PROJECT SETTING -->
<div id="ProjectSetting">
	<div class="hd" style="text-align:left"><img src="images/toolbar/projectsetting.png" align="absmiddle"> Project Setting</div>
	<div class="bd">
    	<div style="height:300px; width:100%; float:left;">
    	<div id="tabProjectSetting" style="text-align:left;">
            <ul class="yui-nav">
                <li class="selected"><a href="#tab1"><em>General</em></a></li>
                <li><a href="#tab2"><em>Library</em></a></li>
            </ul>            
            <div class="yui-content">
                <div id="tab1" style="text-align:left; height:270px; font-size:12px; padding:10px;">
	                <div style="float:left; height:260px; width:100%;">
                        <div style="height:16px; font-weight:bold; border-bottom:solid 1px #999; padding-bottom:3px; margin-bottom:5px;">Project Title</div>
                        <div style="height:16px; margin-bottom:15px;">
                            <input id="inputProjectTitle" name="" type="text" style="width:100%; border:0px; border-bottom:1px #999 dashed;" value="<?php echo $projectName;?>" />
                        </div>
                        <div style="height:16px; font-weight:bold; border-bottom:solid 1px #999; padding-bottom:3px; margin-bottom:5px;">Project Owner</div>
                        <div style="height:16px; margin-bottom:15px;">
                            <input id="inputProjectOwner" name="" type="text" style="width:100%; border:0px; border-bottom:1px #999 dashed;" value="<?php echo $projectAuthor;?>" />
                        </div>
                        <div style="height:16px; font-weight:bold; border-bottom:solid 1px #999; padding-bottom:3px; margin-bottom:5px;">Description</div>
                        <div style="margin-bottom:15px; height:120px;">
                            <textarea id="textAreaProjectDescription" style="width:100%; height:130px; border:1px #999 solid;"></textarea>
                        </div>
                    </div>                                          
                </div>
                <div id="tab2" style="text-align:left; height:270px; font-size:12px; padding:10px;">
                	<div style="float:left; width:150px; height:260px;">
                        <div style="height:20px;"><b>Libraries</b></div>
                        <div id="projectSettingLibraryTreeview" class="ygtv-checkbox" style="text-align:left; padding:3px; height:230px; border:1px #CCC solid; background:#FFF; font-size:11px;">
                          <ul>
                            <li>User Interface
                              <ul>
                                <li><a><input id="chkboxUseYUI" name="chkboxShowSelection" type="checkbox" checked /> YUI</a></li>
                              </ul>
                            </li>
                            <li>Framework
                              <ul>
                                <li><a><input id="chkboxUsePrototype" name="chkboxUsePrototype" type="checkbox" /> Prototype</a></li>
                                <li><a><input id="chkboxUsejQuery" name="chkboxUsejQuery" type="checkbox" /> jQuery</a></li>
                                <li><a><input id="chkboxUseMooTools" name="chkboxUseMooTools" type="checkbox" /> MooTools</a></li>
                                <li><a><input id="chkboxUseDojo" name="chkboxUseDojo" type="checkbox" /> Dojo</a></li>                                     
                                <!--<li><a><input id="chkboxUseJindo" name="chkboxUseJindo" type="checkbox" /> Jindo</a></li>-->
                              </ul>
                            </li>
                            <li>Etc
                              <ul>
                                <li><a><input id="chkboxUseSWFObject" name="chkboxUseSWFObject" type="checkbox" checked /> SWF Object</a></li>                                     
                              </ul>
                            </li>                            
                          </ul>
                        </div>
                    </div>
                    <div style="float:right; width:400px; height:250px;">
                    	<div style="height:20px;"><b>Description (from <a href="http://wikipedia.org/" target="_blank">Wikipedia</a>)</b></div>
                        <div id="libIntro" style="text-align:left; padding:3px; height:230px; border:1px #CCC solid; background:#FFF; font-size:11px;">
                        	<div id="libIntroYUI">
                            	The Yahoo! UI Library (YUI) is an open-source JavaScript library for building richly interactive web applications using techniques such as Ajax, DHTML and DOM scripting. YUI includes several core CSS resources. It is available under a BSD License. Development on YUI began in 2005 and Yahoo! properties such as My Yahoo! and the Yahoo! front page began using YUI in the summer of that year. In February 2006 YUI was released for public use under BSD. It is actively developed by a core team of Yahoo! engineers.<br /><br />
The YUI Library project at Yahoo! was founded by Thomas Sha and sponsored internally by Yahoo! co-founder Jerry Yang; its principal architects have been Sha, Adam Moore, and Matt Sweeney. The library's developers maintain the YUIBlog; the YUI community discusses the library and implementations in its community forum.<br /><br />
<a href="http://developer.yahoo.com/yui/" target="_blank">http://developer.yahoo.com/yui/</a>
                            </div>
                        	<div id="libIntroPrototype">
                            The Prototype JavaScript Framework is a JavaScript framework created by Sam Stephenson which provides an Ajax framework and other utilities. It is implemented as a single file of JavaScript code, usually named prototype.js. Prototype is distributed standalone, but also as part of larger projects, such as Ruby on Rails, script.aculo.us and Rico.<br /><br />
<a href="http://www.prototypejs.org/" target="_blank">http://www.prototypejs.org/</a>
                            </div>
                        	<div id="libIntrojQuery">
                            	jQuery is a lightweight JavaScript library that emphasizes interaction between JavaScript and HTML. It was released January 2006 at BarCamp NYC by John Resig.<br /><br />
Dual licensed under the MIT License and the GNU General Public License, jQuery is free, open source software.<br /><br />
Both Microsoft and Nokia have announced plans to bundle jQuery on their platforms, Microsoft adopting it initially within Visual Studio and use within Microsoft's ASP.NET AJAX framework and ASP.NET MVC Framework whilst Nokia will integrate it into their Web Run-Time platform.<br /><br />
<a href="http://jquery.com/" target="_blank">http://jquery.com/</a>
                            </div>
                        	<div id="libIntroMooTools">
                            	MooTools is an open source, lightweight, modular object-oriented programming JavaScript web application framework released under the MIT License. The goal of the software is to provide a means for intermediate to advanced web developers to write cross-browser JavaScript in an elegant, flexible, and efficient fashion. The MooTools JavaScript framework includes built-in functions for manipulation of CSS, DOM elements, native JavaScript objects, Ajax requests, and more. MooTools also provides a detailed, coherent API to increase speed of development.<br /><br />
<a href="http://mootools.net/" target="_blank">http://mootools.net/</a>
                            </div>
                        	<div id="libIntroDojo">
                            	The Dojo Toolkit is an open source modular JavaScript library (or more specifically JavaScript toolkit) designed to ease the rapid development of cross platform, JavaScript/Ajax based applications and web sites. It was started by Alex Russell, Dylan Schiemann, David Schontzler, and others in 2004 and is dual-licensed under the BSD License and the Academic Free License. The Dojo Foundation is a non-profit organization designed to promote the adoption of the toolkit.<br /><br />
<a href="http://dojotoolkit.org/" target="_blank">http://dojotoolkit.org/</a>
                            </div>
                        	<div id="libIntroSWFObject">
                            	SWFObject is a JavaScript script library used to embed Adobe Flash content onto Web pages. The script can also detect the installed Adobe Flash Player plug-in in all major web browsers, on all major Operating Systems, and can redirect if the installed plug-in is not suitable.. Adobe Flash Player Express Install is also available, users can install the latest Flash Player without leaving the site.<br /><br />
<a href="http://code.google.com/p/swfobject/" target="_blank">http://code.google.com/p/swfobject/</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
        </div>
	</div>
</div>

<!-- HTML : CONTAINER::COLOR PICKER -->
<div id="ColorPicker" class="yui-picker-panel"> 
	<div class="hd" style="text-align:left;">Please choose a color...</div> 
	<div class="bd"> 
		<div class="yui-picker" id="yui-picker"></div> 
	</div> 
	<div class="ft"></div> 
</div>

<!-- HTML : CONTAINER::SELECT A DATASOURCE -->
<div id="SelectDatasource" class="yui-picker-panel"> 
	<div class="hd" style="text-align:left;">Select a datasource.</div> 
	<div class="bd"> 
		<div id="layoutSelectDatasource" style="border:1px #CCC solid;">
        </div>
        <div id="listSelectDatasource">
        asdfasdfasdf
        </div>
	</div> 
	<div class="ft"></div> 
</div>