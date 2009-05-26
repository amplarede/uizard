<?php

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

?>

        	<img src="images/toolbar/new.png" border="0" onClick="showNewProject();" class="toolbarButton">
            <img src="images/toolbar/open.png" border="0" onClick="showOpenProject();" class="toolbarButton">
            <img src="images/toolbar/save.png" border="0" onClick="saveProject();" class="toolbarButton">
            <img src="images/toolbar/saveas.png" border="0" onClick="showSaveAsProject();" class="toolbarButton">
            <img src="images/toolbar/export.png" border="0" onClick="showExportProject();" class="toolbarButton">
            <img src="images/toolbar/line.png" class="toolbarButton">
            <a href="php/codeGenerator.php?mode=codeview&projectName=<?php echo $projectname;?>" target="_blank">
            <img src="images/toolbar/realcode.png" border="0" onClick="" class="toolbarButton">
            </a>
            <a href="php/codeGenerator.php?mode=htmlview&projectName=<?php echo $projectname;?>" target="_blank">
            <img src="images/toolbar/realhtml.png" border="0" onClick="" class="toolbarButton">
            </a>            
            <a href="php/codeGenerator.php?mode=print&projectName=<?php echo $projectname;?>" target="_blank">
            <img src="images/toolbar/preview.png" border="0" onClick="" class="toolbarButton">
            </a>
            <img src="images/toolbar/print.png" border="0" onClick="printRealCode();" class="toolbarButton">
            <img src="images/toolbar/line.png" class="toolbarButton">
            <img src="images/toolbar/undo.png" border="0" onClick="doUndo();" class="toolbarButton">
            <img src="images/toolbar/redo.png" border="0" onClick="doRedo();" class="toolbarButton">
            <img src="images/toolbar/line.png" class="toolbarButton">
            <img src="images/toolbar/copy.png" border="0" onClick="alert('not yet ^^;');" class="toolbarButton">
            <img src="images/toolbar/cut.png" border="0" onClick="alert('not yet ^^;');" class="toolbarButton">
            <img src="images/toolbar/paste.png" border="0" onClick="alert('not yet ^^;');" class="toolbarButton">
            <img src="images/toolbar/line.png" class="toolbarButton"> 
            <img src="images/toolbar/preference.png" border="0" onClick="showPreferences();" class="toolbarButton">            
            <img src="images/toolbar/line.png" class="toolbarButton">
            <img src="images/toolbar/find.png" border="0" onClick="doFind();" class="toolbarButton">
            <img src="images/toolbar/replace.png" border="0" onClick="doReplace();" class="toolbarButton">
            <img src="images/toolbar/line.png" class="toolbarButton">
            <img src="images/toolbar/gridsetting.png" border="0" onClick="showGridSetting();" class="toolbarButton">
            <img src="images/toolbar/apikeysetting.png" border="0" onClick="showAPIKeySetting();" class="toolbarButton">
            <img src="images/toolbar/cssSetting.png" border="0" onClick="showCSSSetting();" class="toolbarButton">
            <img src="images/toolbar/line.png" class="toolbarButton">
            <img src="images/toolbar/projectsetting.png" border="0" onClick="showProjectSetting();" class="toolbarButton">
            <img src="images/toolbar/line.png" class="toolbarButton">
            <a href="http://uizard.org/OfficialManual" target="_blank">            
            <img src="images/toolbar/manual.png" border="0" onClick="" class="toolbarButton">    
            </a>
            <a href="http://uizard.org/BugReport" target="_blank">  
            <img src="images/toolbar/bugreport.png" border="0" onClick="" class="toolbarButton">            
            </a>
            <img src="images/toolbar/info.png" border="0" onClick="showUIzardInfo();" class="toolbarButton">
