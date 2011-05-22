<!--
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
-->

<!doctype html>
<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <!-- CSS : jquery -->
    <link rel="stylesheet" type="text/css" href="lib/com.jqueryui.code/ui-lightness/jquery-ui-1.8.12.custom.css" />
    
    <!-- CSS : yui -->
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/reset-fonts-grids/reset-fonts-grids.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/resize/assets/skins/sam/resize.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/layout/assets/skins/sam/layout.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/reset/reset.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/fonts/fonts.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/container/assets/skins/sam/container.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/tabview/assets/skins/sam/tabview.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/button/assets/skins/sam/button.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/colorpicker/assets/skins/sam/colorpicker.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/datatable/assets/skins/sam/datatable.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/editor/assets/skins/sam/simpleeditor.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/autocomplete/assets/skins/sam/autocomplete.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/calendar/assets/skins/sam/calendar.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/slider/assets/skins/sam/slider.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/paginator/assets/skins/sam/paginator.css" />
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.9.0/build/menu/assets/skins/sam/menu.css" />
    
    <!-- CSS : uizard -->
    <link rel="stylesheet" type="text/css" href="lib/net.codemirror.code/lib/codemirror.css" />
    <link rel="stylesheet" type="text/css" href="lib/net.codemirror.code/css/docs.css" />    
    <link rel="stylesheet" type="text/css" href="lib/net.codemirror.code/mode/xml/xml.css" />
    
    <!-- CSS : uizard -->
    <link rel="stylesheet" type="text/css" href="config/css/org.uizard.core.layout/default.css" />
    <link rel="stylesheet" type="text/css" href="config/css/org.uizard.core.layout/datatable.css" />
    <link rel="stylesheet" type="text/css" href="config/css/org.uizard.core.layout/treeview.project.css" />      
    <link rel="stylesheet" type="text/css" href="config/css/org.uizard.core.window/window.css" />
    <link rel="stylesheet" type="text/css" href="config/css/org.uizard.core.toolbar/toolbar.css" />
    <link rel="stylesheet" type="text/css" href="config/css/org.uizard.core.design/design.css" />
    <link rel="stylesheet" type="text/css" href="config/css/org.uizard.core.design/design.canvas.css" />
    
    <!-- JS : jquery -->
    <script type="text/javascript" src="lib/com.jquery.code/jquery-1.5.2.min.js"></script>
    <script type="text/javascript" src="lib/com.jqueryui.code/jquery-ui-1.8.12.custom.min.js"></script>
    <script type="text/javascript" src="lib/com.jquery.code/jquery.hotkeys.js"></script>    
    
    <!-- JS : yui -->
	<script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/yahoo/yahoo.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/event/event.js" ></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/dom/dom.js" ></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/datasource/datasource-min.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/yahoo-dom-event/yahoo-dom-event.js"></script> 
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/connection/connection-min.js"></script> 
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/dragdrop/dragdrop-min.js"></script> 
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/animation/animation-min.js"></script> 
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/container/container-min.js"></script> 
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/slider/slider-min.js"></script> 
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/element/element-min.js"></script> 
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/colorpicker/colorpicker-min.js"></script> 
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/get/get-min.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/utilities/utilities.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/slider/slider-min.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/json/json-min.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/resize/resize-min.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/layout/layout-min.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/button/button-min.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/tabview/tabview-min.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/menu/menu.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/autocomplete/autocomplete-min.js"></script> 
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/yuiloader/yuiloader.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/datatable/datatable-min.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/editor/editor-min.js"></script> 
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/editor/simpleeditor-min.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/calendar/calendar.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/treeview/treeview.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/charts/charts-min.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/paginator/paginator-min.js"></script>
    <script type="text/javascript" src="http://yui.yahooapis.com/2.9.0/build/stylesheet/stylesheet-min.js"></script> 

	<!-- JS : codemirror -->
	<script type="text/javascript" src="lib/net.codemirror.code/lib/codemirror.js"></script>
	<script type="text/javascript" src="lib/net.codemirror.code/mode/xml/xml.js"></script>

	<!-- JS : uizard -->
    <script type="text/javascript" src="module/org.uizard.core/core.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.layout/layout.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.utility/utility.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.utility/utility.message.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.utility/utility.statusbar.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.debug/debug.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.debug/debug.message.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.console/console.js"></script>        
    <script type="text/javascript" src="module/org.uizard.core.console/console.message.js"></script>      
    <script type="text/javascript" src="module/org.uizard.core.window/window.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.window/window.panel.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.window/window.tab.js"></script>  
    <script type="text/javascript" src="module/org.uizard.core.window/window.manager.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.menu/menu.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.menu/menu.action.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.menu/menu.context.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.toolbar/toolbar.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.edit/edit.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.object/object.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.object/object.ui.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.object/object.ui.line.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.object/object.ui.square.js"></script>        
    <script type="text/javascript" src="module/org.uizard.core.design/design.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.design/design.canvas.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.design/design.ruler.js"></script>  
    <script type="text/javascript" src="module/org.uizard.core.dialog/dialog.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.new/new.js"></script>
    <script type="text/javascript" src="module/org.uizard.core.new/new.dialog.js"></script>  
  
    
    <title>UIzard3</title>

    <script type="text/javascript">

		var core = new org.uizard.core();
		var m = new org.uizard.core.utility.message();
		var d = new org.uizard.core.debug.message();
		var c = new org.uizard.core.console.message();
		var statusbar = new org.uizard.core.utility.statusbar();
					
	    $(document).ready(function () {
			

			
			//loading progress
			//core.dialog.loading.start();
			
			//uizard initialize
			core.init("uizard");
			
			//uizard main process
			//core.main();
			
			//loading progress
			//core.dialog.loading.stop();
			
			$("#message").ready(function () { 
				m.s("success message", "core");
			});
			
			$("#debug").ready(function () { 
				d.m("success message", "core");
			});
			
			$("#console").ready(function () { 
				c.m("success message", "core");
			});
		
			$("#uizardStatusbarMessage").ready(function () { 	
				statusbar.s("uizard is ready", "core");
			});

        });
    </script>


        
    </head>
    <body class="yui-skin-sam">
    
    	<!-- layout include phase (main div's id must be "uizard") -->
        <? ?>

        <div id="uizard">
        
            <!-- Top -->
            <div id="uizardTop" class="yui-navset">
<? include("config/menu/org.uizard.core.layout/mainMenu.html"); ?>

				<div id="uizardMainToolbar" class='mainToolbar'>
                	
                </div>
            </div>

            <!-- Left -->
            <div id="uizardLeft" class="yui-navset">
                
            </div>
			
            <!-- Center : inner layout -->
            <div id="uizardCenterInnerLayout" class="yui-navset">

                <!-- Inner layout : Right -->
                <div id="uizardInnerLayoutRight" class="yui-navset">
                                   
                </div>
                
                <!-- Inner layout : Center -->
                <div id="uizardInnerLayoutCenter" class="yui-navset">
                </div>
                
                <!-- Inner layout : Bottom -->
                <div id="uizardInnerLayoutBottom" class="yui-navset">
                    
                </div>
                
            </div>
            
            <!-- Bottom -->
            <div id="uizardBottom" class="yui-navset">
                
                <!-- Statusbar message -->
                <div id="uizardStatusbarMessage">
                    
                </div>
                
            </div>
            
        </div>
        
        <div id="uizardMenuContainer">
        	
        </div>
        
    </body>
</html>