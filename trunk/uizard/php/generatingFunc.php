<?
/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

///////////////////////////////////////////////////////////////////////////////////////////////
// genDiv()
///////////////////////////////////////////////////////////////////////////////////////////////
function genDiv($objectid, $type, $x, $y, $zindex, $width, $height, $align, $visibility, $backgroundColor, $html) {
	$position = "position:absolute; ";
	$x = "left:".$x."; ";
	$y = "top:".$y."; ";
	
	if($type == "PANEL") {
		$position = "";
		$x = "";
		$y = "";
	}
	
	$html = "\n".$html;
	$html =  str_replace("\n", "\n\t\t", stripslashes($html));

	$return  = "
	<div id='".$objectid."' style='".$position.$x.$y."z-index:".$zindex."; width:".$width."; height:".$height."; text-align:".$align."; visibility:".$visibility.";";
	if($backgroundColor != "") $return .= " background-color:".$backgroundColor.";";
	$return .= "'>".$html."
	</div>
	";
	
	return $return;
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genImage()
///////////////////////////////////////////////////////////////////////////////////////////////
function genImage($no, $objectid, $type, $x, $y, $zindex, $width, $height, $align, $visibility, $backgroundColor, $src) {
	$return  = "
	<!-- Generating a object#".$no."(Image) -->
	<div id='".$objectid."' style='position:absolute; left:".$x."; top:".$y."; z-index:".$zindex."; width:".$width."; height:".$height."; text-align:".$align."; visibility:".$visibility.";";
	if($backgroundColor != "") $return .= " background-color:".$backgroundColor.";";
	$return .= "'>
		<img id='objectImg".$no."' style='position:absolute; z-index:1; width:100%; height:100%;' src='".$src."'>
	</div>
	";
	
	return $return;	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genSWF()
///////////////////////////////////////////////////////////////////////////////////////////////
function genSWF($no, $objectid, $width, $height, $src) {
	$width = str_replace("px", "", $width);
	$height = str_replace("px", "", $height);
	
	return "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	//Generating a object#".$no."(SWF)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	uizObj[".$no."].obj = \"<div id=\\\"objectSWFcontainer".$no."\\\"></div>\";
	uizObj[".$no."].type = \"SWF\";

	uizGetElementById(\"".$objectid."\").innerHTML = uizObj[".$no."].obj;
	
	var flashvars = false;
	var params = {};
	var attributes = {
	  id: \"objectSWF".$no."\",
	  name: \"objectSWF".$no."\"
	};

	swfobject.embedSWF(\"".$src."\", \"objectSWFcontainer".$no."\", \"".$width."\", \"".$height."\", \"9.0.0\", \"expressInstall.swf\", flashvars, params, attributes);
	";
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genForm()
///////////////////////////////////////////////////////////////////////////////////////////////
function genForm($no, $objectid, $type, $x, $y, $zindex, $width, $height, $align, $visibility, $backgroundColor, $action, $method, $target) {
	$return  = "
	<!-- Generating a object#".$no."(Form) -->
	<div id='".$objectid."' style='position:absolute; left:".$x."; top:".$y."; z-index:".$zindex."; width:".$width."; height:".$height."; text-align:".$align."; visibility:".$visibility.";";
	if($backgroundColor != "") $return .= " background-color:".$backgroundColor.";";
	$return .= "'>
		<form action=\"".$action."\" method=\"".$method."\" name=\"objectForm".$no."\" target=\"".$target."\"></form>
	</div>
	";
	
	return $return;
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genInputbox()
///////////////////////////////////////////////////////////////////////////////////////////////
function genInputbox($no, $objectid, $type, $x, $y, $zindex, $width, $height, $align, $visibility, $backgroundColor, $value) {
	$return  = "
	<!-- Generating a object#".$no."(InputBox) -->
	<div id='".$objectid."' style='position:absolute; left:".$x."; top:".$y."; z-index:".$zindex."; width:".$width."; height:".$height."; text-align:".$align."; visibility:".$visibility.";";
	if($backgroundColor != "") $return .= " background-color:".$backgroundColor.";";
	$return .= "'>
		<input id='objectInput".$no."' type='text' style='width:100%;' value='".$value."'>
	</div>
	";
	
	return $return;		
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genCheckboxSet()
///////////////////////////////////////////////////////////////////////////////////////////////
function genCheckboxSet($no, $objectid) {

}

///////////////////////////////////////////////////////////////////////////////////////////////
// genRadiobuttonSet()
///////////////////////////////////////////////////////////////////////////////////////////////
function genRadiobuttonSet($no, $objectid) {

}

///////////////////////////////////////////////////////////////////////////////////////////////
// genTextarea()
///////////////////////////////////////////////////////////////////////////////////////////////
function genTextarea($no, $objectid, $type, $x, $y, $zindex, $width, $height, $align, $visibility, $backgroundColor) {
	$return  = "
	<!-- Generating a object#".$no."(InputBox) -->
	<div id='".$objectid."' style='position:absolute; left:".$x."; top:".$y."; z-index:".$zindex."; width:".$width."; height:".$height."; text-align:".$align."; visibility:".$visibility.";";
	if($backgroundColor != "") $return .= " background-color:".$backgroundColor.";";
	$return .= "'>
		<textarea id='objectTextArea".$no."' style='width:100%; height:100%; padding:0px; margin:0px;'></textarea>
	</div>
	";
	
	return $return;			
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genTable()
///////////////////////////////////////////////////////////////////////////////////////////////
function genTable($no, $objectid) {
	//same as the genDiv
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genTimer()
///////////////////////////////////////////////////////////////////////////////////////////////
function genTimer($no, $objectid) {
	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genPushButton()
///////////////////////////////////////////////////////////////////////////////////////////////
function genPushButton($no, $objectid, $label, $disabled, $tabindex, $code) {
	$return  = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	//Generating a object#".$no."(PushButton)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	uizObj[".$no."].obj = new YAHOO.widget.Button(\"objectPushButton".$no."\");
	uizObj[".$no."].type = \"PUSHBUTTON\";
	
	uizObj[".$no."].obj.set(\"label\", \"".$label."\");
	uizObj[".$no."].obj.set(\"disabled\", \"".$disabled."\");
	uizObj[".$no."].obj.set(\"tabindex\", \"".$tabindex."\");
	
	uizObj[".$no."].obj.on(\"click\", onClick_Object".$no.");
	uizObj[".$no."].obj.on(\"dblclick\", onDblClick_Object".$no.");
	uizObj[".$no."].obj.on(\"mouseover\", onMouseOver_Object".$no.");
	uizObj[".$no."].obj.on(\"mouseout\", onMouseOut_Object".$no.");	
	";
	
	$return  .= str_replace("\n", "\n\t", stripslashes($code));
	
	return $return;
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genRadioButton()
///////////////////////////////////////////////////////////////////////////////////////////////
function genRadioButton($no, $objectid, $buttoncount, $code) {
	$return  = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	//Generating a object#".$no."(RadioButton)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	uizObj[".$no."].obj = new YAHOO.widget.ButtonGroup(\"objectRadioButtonGroup".$no."\");
	uizObj[".$no."].type = \"RADIOBUTTON\";
	
	uizObj[".$no."].obj.on(\"valueChange\", onValueChange_Object".$no.");
	";
	
	$return  .= str_replace("\n", "\n\t", stripslashes($code));

	return $return;
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genCheckboxButton()
///////////////////////////////////////////////////////////////////////////////////////////////
function genCheckboxButton($no, $objectid, $label, $disabled, $tabindex, $code) {
	$return  = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	//Generating a object#".$no."(CheckboxButton)	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	uizObj[".$no."].obj = new YAHOO.widget.Button(\"objectCheckBoxButton".$no."\");
	uizObj[".$no."].type = \"CHECKBOXBUTTON\";
	
	uizObj[".$no."].obj.set(\"label\", \"".$label."\");
	uizObj[".$no."].obj.set(\"disabled\", \"".$disabled."\");
	uizObj[".$no."].obj.set(\"tabindex\", \"".$tabindex."\");	
	
	uizObj[".$no."].obj.on(\"checkedChange\", onCheckedChange_Object".$no.");	
	";
	
	$return  .= str_replace("\n", "\n\t", stripslashes($code));

	return $return;	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genColorPicker()
///////////////////////////////////////////////////////////////////////////////////////////////
function genColorPicker($no, $objectid, $code) {
	$return  = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	//Generating a object#".$no."(ColorPicker)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	uizObj[".$no."].obj = new YAHOO.widget.ColorPicker(\"".$objectid."\", {
		showhsvcontrols: true,
		showhexcontrols: true,
		images: {
			PICKER_THUMB: \"../lib/yui/colorpicker/assets/picker_thumb.png\",
			HUE_THUMB: \"../lib/yui/colorpicker/assets/hue_thumb.png\"
		}
	});
	uizObj[".$no."].type = \"COLORPICKER\";
	
	uizObj[".$no."].obj.on(\"rgbChange\", onRGBChange_Object".$no.");
	";
	
	$return  .= str_replace("\n", "\n\t", stripslashes($code));

	return $return;		
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genTabView()
///////////////////////////////////////////////////////////////////////////////////////////////
function genTabView($no, $objectid, $tabcount, $code) {
	$return = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	//Generating a object#".$no."(TabView)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	uizObj[".$no."].obj = new YAHOO.widget.TabView(\"objectTabView".$no."\");
	uizObj[".$no."].type = \"TABVIEW\";
	";
	
	$return  .= str_replace("\n", "\n\t", stripslashes($code));
	
	return $return;
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genDataTable()
///////////////////////////////////////////////////////////////////////////////////////////////
function genDataTable($no, $objectid, $datasourceNo, $fields, $columnWidth, $code) {
	$fieldsTemp = spliti(",", $fields);
	$widths = spliti(",", $columnWidth);
	$fields = "";
	for($i=0; $i<count($fieldsTemp); $i++) {
		$fields .= "{key:\"".$fieldsTemp[$i]."\", width:".$widths[$i]."}";
		if($i != (count($fieldsTemp)-1)) $fields .= ", ";
	}	
	
	$return = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Generating a object#".$no."(DataTable)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	var ".$objectid."ColumnDefs = [".$fields."];
	
	".str_replace("\n", "\n\t", stripslashes($code))."
	
	uizObj[".$no."].obj = new YAHOO.widget.DataTable(\"".$objectid."\", ".$objectid."ColumnDefs, uizObj[".$datasourceNo."].obj);
	uizObj[".$no."].type = \"DATATABLE\";
	
	uizObj[".$no."].obj.subscribe(\"cellClickEvent\", onCellClickEvent_Object".$no.");
	uizObj[".$no."].obj.subscribe(\"cellDblClickEvent\", onCellDblclickEvent_Object".$no.");
	uizObj[".$no."].obj.subscribe(\"cellMousedownEvent\", onCellMousedownEvent_Object".$no.");	
	uizObj[".$no."].obj.subscribe(\"cellMouseoutEvent\", onCellMouseoutEvent_Object".$no.");
	uizObj[".$no."].obj.subscribe(\"cellMouseoverEvent\", onCellMouseoverEvent_Object".$no.");
	uizObj[".$no."].obj.subscribe(\"cellMouseupEvent\", onCellMouseupEvent_Object".$no.");
	uizObj[".$no."].obj.subscribe(\"rowMouseoverEvent\", onRowMouseoverEvent_Object".$no.");
	uizObj[".$no."].obj.subscribe(\"rowMouseoutEvent\", onRowMouseoutEvent_Object".$no.");	
	";
	
	return $return;		
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genCalendar()
///////////////////////////////////////////////////////////////////////////////////////////////
function genCalendar($no, $objectid, $code) {
	$return = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	//Generating a object#".$no."(Calendar)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	uizObj[".$no."].obj = new YAHOO.widget.Calendar(\"objectCalendar\"+".$no.",\"".$objectid."\");
	uizObj[".$no."].type = \"CALENDAR\";

	uizObj[".$no."].obj.selectEvent.subscribe(onSelect_Object".$no.");
	
	uizObj[".$no."].obj.render();
	";
	
	$return .= str_replace("\n", "\n\t", stripslashes($code));
	
	return $return;	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genPanel()
///////////////////////////////////////////////////////////////////////////////////////////////
function genPanel($no, $objectid, $x, $y, $width, $height, $closebutton, $draggable, $code) {
	$x = str_replace("px", "", $x);
	$y = str_replace("px", "", $y);
	
	$return = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Generating a object#".$no."(Panel)	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	uizObj[".$no."].obj = new YAHOO.widget.Panel(\"objectPanel".$no."\", { xy:[".$x.",".$y."], width:\"".$width."\", height:\"".$height."\", visible:true, draggable:".$draggable.", close:".$closebutton." } );
	uizObj[".$no."].obj.render();	

	uizObj[".$no."].type = \"PANEL\";
	
	YAHOO.util.Event.on(uizObj[".$no."].obj, \"dragEvent\", onDragEvent_Object".$no.");
	YAHOO.util.Event.on(uizObj[".$no."].obj, \"hideMaskEvent\", onHideMaskEvent_Object".$no.");
	YAHOO.util.Event.on(uizObj[".$no."].obj, \"showMaskEvent\", onShowMaskEvent_Object".$no.");
	YAHOO.util.Event.on(uizObj[".$no."].obj, \"moveEvent\", onMoveEvent_Object".$no.");
	YAHOO.util.Event.on(uizObj[".$no."].obj, \"renderEvent\", onRenderEvent_Object".$no.");	
	";
	
	$return .= str_replace("\n", "\n\t", stripslashes($code));
	
	return $return;		
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genSlider()
///////////////////////////////////////////////////////////////////////////////////////////////
function genSlider($no, $objectid, $code) {
	$return = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	//Generating a object#".$no."(Slider)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	uizGetElementById('".$objectid."').innerHTML += \"<div id='slider-bg".$no."' style='background:url(http://yui.yahooapis.com/2.6.0/build/slider/assets/bg-fader.gif) 5px 0 no-repeat;' class='yui-h-slider' tabindex='-1' title='Slider'><div id='slider-thumb".$no."' class='yui-slider-thumb'><img src='http://yui.yahooapis.com/2.6.0/build/slider/assets/thumb-n.gif'></div></div>\";

	var topConstraint = 0;
	var bottomConstraint = 200;
	uizObj[".$no."].obj = new YAHOO.widget.Slider.getHorizSlider(\"slider-bg\" + ".$no.", \"slider-thumb\" + ".$no.", topConstraint, bottomConstraint, 20);
	uizObj[".$no."].type = \"SLIDER\";
	
	uizObj[".$no."].obj.subscribe(\"change\", onChange_Object".$no.");
	uizObj[".$no."].obj.subscribe(\"slideStart\", onSlideStart_Object".$no.");
	uizObj[".$no."].obj.subscribe(\"slideEnd\", onSlideEnd_Object".$no.");	
	";
	
	$return .= str_replace("\n", "\n\t", stripslashes($code));
	
	return $return;	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genAutoComplete()
///////////////////////////////////////////////////////////////////////////////////////////////
function genAutoComplete($no, $objectid, $datasourceNo, $code) {
	$return = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	//Generating a object#".$no."(AutoComplete)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	uizGetElementById(\"".$objectid."\").innerHTML = \"<input id='".$objectid."Input' type='text' style='width:100%;'><div id='".$objectid."Container'></div>\";
	uizObj[".$no."].obj = new YAHOO.widget.AutoComplete(\"".$objectid."Input\", \"".$objectid."Container\", uizObj[".$datasourceNo."].obj);
	uizObj[".$no."].type = \"AUTOCOMPLETE\";
	uizObj[".$no."].obj.suppressInputUpdate = true;
	
	".str_replace("\n", "\n\t", stripslashes($code))."
											 
	uizObj[".$no."].obj.generateRequest = generateRequest_Object".$no.";
	uizObj[".$no."].obj.formatResult = formatResult_Object".$no.";
	";
	
	return $return;	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genRichTextEditor()
///////////////////////////////////////////////////////////////////////////////////////////////
function genRichTextEditor($no, $objectid) {
	return "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	//Generating a object#".$no."(RichTextEditor)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
    var myConfig = {
        dompath: true,
		width: \"100%\",
		height: \"100%\"
    };

	uizGetElementById(\"".$objectid."\").innerHTML = \"<textarea id='textarea".$no."'></textarea>\";
    uizObj[".$no."].obj = new YAHOO.widget.Editor('textarea".$no."', myConfig);
	uizObj[".$no."].type = \"RICHTEXTEDITOR\";
	
    uizObj[".$no."].obj.render();
	";
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genMenuBar()
///////////////////////////////////////////////////////////////////////////////////////////////
function genMenuBar($no, $objectid, $code) {
	$return = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	//Generating a object#".$no."(MenuBar)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	uizObj[".$no."].type = \"MENUBAR\";
	uizObj[".$no."].obj = new YAHOO.widget.MenuBar(\"objectMenuBar".$no."\");	
	uizObj[".$no."].obj.render();
	
	uizObj[".$no."].obj.subscribe(\"show\", onShow_Object".$no.");
	uizObj[".$no."].obj.subscribe(\"hide\", onHide_Object".$no.");
	";
	
	$return .= str_replace("\n", "\n\t", stripslashes($code));
	
	return $return;	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genTreeView()
///////////////////////////////////////////////////////////////////////////////////////////////
function genTreeView($no, $objectid, $code) {
	$return = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	//Generating a object#".$no."(MenuBar)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	uizObj[".$no."].type = \"TREEVIEW\";
	uizObj[".$no."].obj = new YAHOO.widget.TreeView(\"objectTreeview".$no."\");
	uizObj[".$no."].obj.render();
	
	uizObj[".$no."].obj.subscribe(\"show\", onShow_Object".$no.");
	uizObj[".$no."].obj.subscribe(\"hide\", onHide_Object".$no.");
	";
	
	$return .= str_replace("\n", "\n\t", stripslashes($code));
	
	return $return;	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genYuiChart()
///////////////////////////////////////////////////////////////////////////////////////////////
function genYuiChart($no, $objectid, $code) {
	$return = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	//Generating a object#".$no."(YUIChart)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	uizObj[".$no."].type = \"YUICHART\";
	uizGetElementById('".$objectid."').innerHTML += \"<div id='objectChart".$no."'>Unable to load Flash content. The YUI Charts Control requires Flash Player 9.0.45 or higher. You can download the latest version of Flash Player from the <a href='http://www.adobe.com/go/getflashplayer'>Adobe Flash Player Download Center</a>.</p></div>\";
	
	var chartData".$no." = new YAHOO.util.DataSource(YAHOO.util.Dom.get('objectChartData".$no."'));
	chartData".$no.".responseType = YAHOO.util.DataSource.TYPE_HTMLTABLE;
	chartData".$no.".responseSchema = { fields : ['Name', 'Value'] };
	
	YAHOO.widget.Chart.SWFURL = \"http://yui.yahooapis.com/2.7.0/build/charts/assets/charts.swf\";
	
	var yAxis = new YAHOO.widget.NumericAxis();
	yAxis.minimum = 0;
	yAxis.maximum = 100;
	
	uizObj[".$no."].obj = new YAHOO.widget.ColumnChart(\"objectChart".$no."\", chartData".$no.",
	{
		xField: 'Name',
		yField: 'Value',
		yAxis: yAxis,
	});
	";
	
	$return .= str_replace("\n", "\n\t", stripslashes($code));
	
	return $return;		
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genPaginator()
///////////////////////////////////////////////////////////////////////////////////////////////
function genPaginator($no, $objectid, $code) {
	$return = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	//Generating a object#".$no."(Paginator)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	uizObj[".$no."].obj = new YAHOO.widget.Paginator({
		rowsPerPage : 1,
		totalRecords : YAHOO.util.Dom.get('objectPaginatorContent".$no."').getElementsByTagName('div').length,
		containers : 'objectPaginator".$no."'
	});

	var handlePagination".$no." = function (state) {
		var pageContents = YAHOO.util.Dom.get('objectPaginatorContent".$no."').getElementsByTagName('div');
		var pageNum = YAHOO.util.Dom.get('objectPaginatorContent".$no."').getElementsByTagName('div').length;
		for(var i=0; i<pageNum; i++) {
			uizSetStyle(pageContents[i], \"display\", \"none\");
		}
		uizSetStyle(pageContents[state.page-1], \"display\", \"block\");
		uizObj[".$no."].obj.setState(state);
	};

	uizObj[".$no."].obj.subscribe('changeRequest', handlePagination".$no.");
	uizObj[".$no."].obj.render();
	";
	
	$return .= str_replace("\n", "\n\t", stripslashes($code));
	
	return $return;	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genDragAndDrop()
///////////////////////////////////////////////////////////////////////////////////////////////
function genDragAndDrop($no, $objectid) {
	return "
	<div id='".$objectid."' style='position:absolute; left:".$x."; top:".$y."; z-index:".$zindex."; width:".$width."; height:".$height."; text-align:".$align."; visibility:".$visibility.";'></div>
	";
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genResize()
///////////////////////////////////////////////////////////////////////////////////////////////
function genResize($no, $objectid) {
	return "
	<div id='".$objectid."' style='position:absolute; left:".$x."; top:".$y."; z-index:".$zindex."; width:".$width."; height:".$height."; text-align:".$align."; visibility:".$visibility.";'></div>
	";
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genMapDaum()
///////////////////////////////////////////////////////////////////////////////////////////////
function genMapDaum($no, $objectid, $code) {
	$return = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	//Generating a object#".$no."(Daum Map)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	uizObj[".$no."].obj = new DMap(\"".$objectid."\", {point:new DLatLng(37.48879895934866, 127.03130020103005), level:2}); 
	uizObj[".$no."].type = \"MAPDAUM\";
	
	DEvent.addListener(uizObj[".$no."].obj, \"move\", onMove_Object".$no.");
	DEvent.addListener(uizObj[".$no."].obj, \"drag\", onDrag_Object".$no.");
	DEvent.addListener(uizObj[".$no."].obj, \"startdrag\", onStartDrag_Object".$no.");
	DEvent.addListener(uizObj[".$no."].obj, \"enddrag\", onEndDrag_Object".$no.");
	DEvent.addListener(uizObj[".$no."].obj, \"click\", onClick_Object".$no.");
	DEvent.addListener(uizObj[".$no."].obj, \"dblclick\", onDblClick_Object".$no.");
	DEvent.addListener(uizObj[".$no."].obj, \"mousemove\", onMouseMove_Object".$no.");
	DEvent.addListener(uizObj[".$no."].obj, \"zoom\", onZoom_Object".$no.");
	DEvent.addListener(uizObj[".$no."].obj, \"redraw\", onRedraw_Object".$no.");
	DEvent.addListener(uizObj[".$no."].obj, \"moveend\", onMoveEnd_Object".$no.");
	";
		
	$return .= str_replace("\n", "\n\t", stripslashes($code));
	
	return $return;		
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genMapGoogle()
///////////////////////////////////////////////////////////////////////////////////////////////
function genMapGoogle($no, $objectid, $code) {
	$return = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	//Generating a object#".$no."(Map Google)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	uizObj[".$no."].obj = new google.maps.Map2(uizGetElementById(\"".$objectid."\"));
	uizObj[".$no."].type = \"MAPGOOGLE\";
	
	uizObj[".$no."].obj.setCenter(new google.maps.LatLng(37.4419, -122.1419), 13);
	
	GEvent.addListener(uizObj[".$no."].obj, \"addmaptype\", onAddMapType_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"removemaptype\", onRemoveMapType_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"click\", onClick_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"dblclick\", onDblClick_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"singlerightclick\", onSingleRightClick_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"movestart\", onMoveStart_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"move\", onMove_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"moveend\", onMoveEnd_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"zoomend\", onZoomEnd_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"maptypechanged\", onMapTypeChange_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"infowindowopen\", onInfoWindowOpen_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"infowindowbeforeclose\", onInfoWindowBeforeClose_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"infowindowclose\", onInfoWindowClose_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"addoverlay\", onAddOverlay_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"removeoverlay\", onRemoveOverlay_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"clearoverlays\", onClearOverlays_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"mouseover\", onMouseOver_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"mouseout\", onMouseOut_Object".$no.");
	GEvent.addListener(uizObj[".$no."].obj, \"mousemove\", onMouseMove_Object".$no.");	
	GEvent.addListener(uizObj[".$no."].obj, \"dragstart\", onDragStart_Object".$no.");	
	GEvent.addListener(uizObj[".$no."].obj, \"drag\", onDrag_Object".$no.");	
	GEvent.addListener(uizObj[".$no."].obj, \"dragend\", onDragEnd_Object".$no.");	
	GEvent.addListener(uizObj[".$no."].obj, \"load\", onLoad_Object".$no.");		
	";
	
	$return .= str_replace("\n", "\n\t", stripslashes($code));
	
	return $return;		
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genGoogleChart()
///////////////////////////////////////////////////////////////////////////////////////////////
function genGoogleChart($no, $objectid) {
	return "
	<div id='".$objectid."' style='position:absolute; left:".$x."; top:".$y."; z-index:".$zindex."; width:".$width."; height:".$height."; text-align:".$align."; visibility:".$visibility.";'></div>
	";
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genMapNaver()
///////////////////////////////////////////////////////////////////////////////////////////////
function genMapNaver($no, $objectid, $code) {
	$return = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	//Generating a object#".$no."(Map Naver)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	uizObj[".$no."].obj = new NMap(uizGetElementById(\"".$objectid."\"));
	uizObj[".$no."].type = \"MAPNAVER\";
	
	uizObj[".$no."].obj.setCenterAndZoom(new NPoint(321198,529730),3);
	
	NEvent.addListener(uizObj[".$no."].obj, \"move\", onMove_Object".$no.");
	NEvent.addListener(uizObj[".$no."].obj, \"drag\", onDrag_Object".$no.");
	NEvent.addListener(uizObj[".$no."].obj, \"startdrag\", onStartDrag_Object".$no.");
	NEvent.addListener(uizObj[".$no."].obj, \"enddrag\", onEndDrag_Object".$no.");
	NEvent.addListener(uizObj[".$no."].obj, \"click\", onClick_Object".$no.");
	NEvent.addListener(uizObj[".$no."].obj, \"dblclick\", onDblClick_Object".$no.");
	NEvent.addListener(uizObj[".$no."].obj, \"mousemove\", onMouseMove_Object".$no.");
	NEvent.addListener(uizObj[".$no."].obj, \"zoom\", onZoom_Object".$no.");
	NEvent.addListener(uizObj[".$no."].obj, \"redraw\", onRedraw_Object".$no.");
	";
	
	$return .= str_replace("\n", "\n\t", stripslashes($code));
	
	return $return;		
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genMapLive()
///////////////////////////////////////////////////////////////////////////////////////////////
function genMapLive($no, $objectid, $code) {
	$return = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	//Generating a object#".$no."(Live Map)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	uizObj[".$no."].obj = new VEMap(\"".$objectid."\");
	uizObj[".$no."].type = \"MAPLIVE\";
	
	uizObj[".$no."].obj.LoadMap();
	
	uizObj[".$no."].obj.AttachEvent(\"onclick\", onClick_Object".$no.");
	uizObj[".$no."].obj.AttachEvent(\"ondoubleclick\", onDoubleClick_Object".$no.");
	uizObj[".$no."].obj.AttachEvent(\"onmousemove\", onMouseMove_Object".$no.");
	uizObj[".$no."].obj.AttachEvent(\"onmousedown\", onMouseDown_Object".$no.");
	uizObj[".$no."].obj.AttachEvent(\"onmouseup\", onMouseUp_Object".$no.");
	uizObj[".$no."].obj.AttachEvent(\"onmouseover\", onMouseOver_Object".$no.");
	uizObj[".$no."].obj.AttachEvent(\"onmouseout\", onMouseOut_Object".$no.");
	uizObj[".$no."].obj.AttachEvent(\"onmousewheel\", onMouseWheel_Object".$no.");
	uizObj[".$no."].obj.AttachEvent(\"onstartspan\", onStartSpan_Object".$no.");
	uizObj[".$no."].obj.AttachEvent(\"onendspan\", onEndSpan_Object".$no.");
	uizObj[".$no."].obj.AttachEvent(\"onstartzoom\", onStartZoom_Object".$no.");	
	uizObj[".$no."].obj.AttachEvent(\"onendzoom\", onEndZoom_Object".$no.");	
	uizObj[".$no."].obj.AttachEvent(\"onresize\", onResize_Object".$no.");	
	uizObj[".$no."].obj.AttachEvent(\"onchangeview\", onChangeView_Object".$no.");		
	";

	$return .= str_replace("\n", "\n\t", stripslashes($code));
	
	return $return;	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// genDatasource()
///////////////////////////////////////////////////////////////////////////////////////////////
function genDatasource($no, $objectid, $provider, $datasourceURL, $datasourceType, $resultNode, $fields, $query, $code) {
	$fieldsTemp = spliti(",", $fields);
	$fields = "";
	for($i=0; $i<count($fieldsTemp); $i++) {
		$fields .= "\"".$fieldsTemp[$i]."\"";
		if($i != (count($fieldsTemp)-1)) $fields .= ", ";
	}
	
	$xmlAPIKey = new uizXmlClass; 
	$apiKey = $xmlAPIKey->xmlOpen("../projects/".$_GET['projectName']."/apiKeys.xml",'keySetting'); 
	
	$keyYahooAPI = $apiKey['YahooAPI'][0]['value'];
	$keyNaverDataAPI = $apiKey['NaverDataAPI'][0]['value'];
	$keyDaumSearchAPI = $apiKey['DaumSearchAPI'][0]['value'];
	$keyDaumShoppingAPI = $apiKey['DaumShoppingAPI'][0]['value'];
	$keyDaumRecommendAPI = $apiKey['DaumRecommendAPI'][0]['value'];	
	$keyLiveDataAPI = $apiKey['LiveDataAPI'][0]['value'];
	
	if($provider == "daumKnowledge" || $provider == "daumCafe" || $provider == "daumBlog" || $provider == "daumNews" || $provider == "daumBook" || $provider == "daumJpdic" || $provider == "daumVclip" || $provider == "daumImage" || $provider == "daumBoard") {
		$apikey = "?apikey=".$keyDaumSearchAPI;
		if($query != "") $apikey .= "&q=".$query;		
	}
	else if($provider == "daumShopping" || $provider == "daumShoppingDetail") {
		$apikey = "?apikey=".$keyDaumShoppingAPI;
		if($query != "") $apikey .= "&q=".$query;
	}
	else if($provider == "daumKeyword") {
		$apikey = "?apikey=".$keyDaumRecommendAPI;
		if($query != "") $apikey .= "&q=".$query;
	}
	else if($provider == "naverRank" || $provider == "naverKin" || $provider == "naverVideo" || $provider == "naverImage" || $provider == "naverDoc" || $provider == "naverCar" || $provider == "naverBook" || $provider == "naverMovie" || $provider == "naverMovieman" || $provider == "naverLocal" || $provider == "naverShop" || $provider == "naverEncyc" || $provider == "naverKrdic" || $provider == "naverEndic" || $provider == "naverJpdic" || $provider == "naverBlog" || $provider == "naverCafe" || $provider == "naverWebkr" || $provider == "naverNews" || $provider == "naverRecmd" || $provider == "naverAdult" || $provider == "naverErrata") {
		$apikey = "&key=".$keyNaverDataAPI;
		if($query != "") $apikey .= "&query=".$query;
	}
	else if($provider == "liveImage" || $provider == "liveInstantAnswer" || $provider == "liveNews" || $provider == "liveSpell" || $provider == "liveWeb") {
		$apikey = "&AppId=".$keyLiveDataAPI;
		if($query != "") $apikey .= "&Query=".$query;
	}
	
	$datasourceURL .= $apikey;
	
	$return = "
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	//Generating a object#".$no."(Datasource)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	uizObj[".$no."].obj = new YAHOO.util.XHRDataSource(\"xmlProxy.php?url=".str_replace("&", "and!", $datasourceURL)."\");
	uizObj[".$no."].type = \"DATASOURCE\";
	uizObj[".$no."].datasourceType = \"".$datasourceType."\";
	uizObj[".$no."].obj.connMethodPost = true;	
	uizObj[".$no."].obj.responseType =  YAHOO.util.DataSourceBase.TYPE_".$datasourceType.";
	uizObj[".$no."].obj.responseSchema = { 
		resultNode: \"".$resultNode."\",
		fields: [".$fields."] 
	};
	";

	return $return;	
}


?>