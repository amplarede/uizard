<?php

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

/*
include("php/xmlClass.php");

$xmlToolbox		= new uizXmlClass; 
$toolbox 		= $xmlToolbox->xmlOpen("config/toolbox/toolboxList.xml",'toolbox'); 

$countToolbox = count($toolbox['toolbox']);

for($i=0; $i<$countToolbox; $i++) {
	echo "
		<div style='padding:0px;'>
			<div style='background-image:url(images/layout/bgComponentTop.png); height:23px;'>
	            <div style='padding-left:4px; padding-top:3px;'>
                	<img src='images/toolbox/component.png' style='margin:2px;' align='absmiddle'> <b>".$toolbox['toolboxName'][$i]['value']."</b><br />
                </div>
            </div>
            <div style='background-image:url(images/layout/bgComponent2.png); line-height:23px; padding-left:7px; font-size:11px;'>
";

	$xmlTool	= new uizXmlClass; 
	$tool 		= $xmlTool->xmlOpen("config/toolbox/".$toolbox['toolboxDirectory'][$i]['value']."/".$toolbox['toolboxFileName'][$i]['value'],'tool'); 

	$countTool	= count($tool['tool']);
	
	for($j=0; $j<$countTool; $j++) {
		echo "\t\t\t<img src='images/toolbox/".$tool['toolImage'][$j]['value']."' style='margin:2px;' align='absmiddle'> <a href='#' onclick=\"".$tool['toolCreator'][$j]['value']."\">".$tool['toolName'][$j]['value']."</a><br />\n";
	}

	echo "				
			</div>
		</div>	
	";
}
*/
?>


    	<div style="padding:0px;">
        	<div style="background-image:url(images/layout/bgComponentTop.png); height:23px;">
	            <div style="padding-left:4px; padding-top:3px;">
                	<img src="images/toolbox/component.png" style="margin:2px;" align="absmiddle"> <b>Basic UI Components</b><br />
                </div>
            </div>
            <div style="background-image:url(images/layout/bgComponent2.png); line-height:23px; padding-left:7px; font-size:11px;">
	            <img src="images/toolbox/div.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjDiv();">Div Layer</a><br />
                <img src="images/toolbox/image.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjImage();">Image</a><br />
                <img src="images/toolbox/swf.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjSWF();">SWF</a><br />
                <img src="images/toolbox/form.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjForm();">Form</a><br />
                <img src="images/toolbox/inputbox.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjInputbox();">Inputbox</a><br />
                <img src="images/toolbox/checkboxset.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjCheckboxSet();">CheckboxSet</a><br />
                <img src="images/toolbox/radiobuttonset.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjRadiobuttonSet();">RadiobuttonSet</a><br />
                <img src="images/toolbox/textarea.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjTextarea();">Textarea</a><br />
                <img src="images/toolbox/table.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjTable();">Table</a><br />
                <!--
                <img src="images/toolbox/timer.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjTimer();">Timer</a><br />
                -->
            </div>
        </div>
        <div style="padding:0px;">
			<div style="background-image:url(images/layout/bgComponent.png); height:24px;">
	            <div style="padding:4px;">
            		<img src="images/toolbox/component.png" style="margin:2px;" align="absmiddle"> <b>YUI Components</b><br />
                </div>
            </div>
            <div style="background-image:url(images/layout/bgComponent2.png); line-height:23px; padding-left:7px; font-size:11px;">
                <img src="images/toolbox/pushbutton.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjPushButton();">Push Button</a><br />
                <img src="images/toolbox/radiobutton.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjRadioButton();">Radio Button</a><br />
                <img src="images/toolbox/checkboxbutton.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjCheckboxButton();">Checkbox Button</a><br />
                <img src="images/toolbox/colorpicker.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjColorPicker();">Color Picker</a><br />
                <img src="images/toolbox/tabview.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjTabview();">Tabview</a><br />
                <img src="images/toolbox/datatable.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjDatatable();">Datatable</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsHTML();">HTML Datasource</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsJSON();">JSON Datasource</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsXML();">XML Datasource</a><br />
                <img src="images/toolbox/calendar.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjCalendar();">Calendar</a><br />
                <img src="images/toolbox/panel.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjPanel();">Panel</a><br />
                <img src="images/toolbox/slider.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjSlider();">Slider</a><br />
                <img src="images/toolbox/autocomplete.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjAutoComplete();">AutoComplete</a><br />
                <!--<img src="images/toolbox/richtexteditor.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjRichTextEditor();">Rich Text Editor</a><br />-->
                <img src="images/toolbox/menubar.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjMenuBar();">MenuBar</a><br />
                <img src="images/toolbox/treeview.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjTreeview();">TreeView</a><br />
                <img src="images/toolbox/yuichart.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjYUIChart();">Chart</a><br />
                <img src="images/toolbox/paginator.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjPaginator();">Paginator</a><br />
                <!--
                <img src="images/toolbox/draganddrop.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjDragAndDrop();">Drag&amp;Drop</a><br />
                <img src="images/toolbox/resize.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjResize();">Resize</a><br />
                -->
			</div>
		</div>
		<div style="padding:0px;">
           	<div style="background-image:url(images/layout/bgComponent.png); height:24px;">
	            <div style="padding:4px;">
		            <img src="images/toolbox/component.png" style="margin:2px;" align="absmiddle"> <b>Google APIs</b><br />
                </div>
            </div>
            <div style="background-image:url(images/layout/bgComponent2.png); line-height:23px; padding-left:7px; font-size:11px;">
                <img src="images/toolbox/map.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjGoogleMap();">Google Map</a><br />
                <img src="images/toolbox/googlechart.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjGoogleChart();">Google Chart</a><br />
            </div>
        </div>
        <div style="padding:0px;">
          	<div style="background-image:url(images/layout/bgComponent.png); height:24px;">
	            <div style="padding:4px;">
		            <img src="images/toolbox/component.png" style="margin:2px;" align="absmiddle"> <b>Daum APIs</b><br />
                </div>
            </div>
            <div style="background-image:url(images/layout/bgComponent2.png); line-height:23px; padding-left:7px; font-size:11px;">
                <img src="images/toolbox/map.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjDaumMap();">Daum Map</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'DAUM', '?apikey='+APIKeyDaumSearch, 'http://apis.daum.net/search/knowledge', 'item', 'title,link', 'q=daum');">지식 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'DAUM', '?apikey='+APIKeyDaumSearch, 'http://apis.daum.net/search/board', 'item', 'title,link', 'q=daum');">게시판 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'DAUM', '?apikey='+APIKeyDaumSearch, 'http://apis.daum.net/search/cafe', 'item', 'title,link', 'q=daum');">까페 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'DAUM', '?apikey='+APIKeyDaumSearch, 'http://apis.daum.net/search/blog', 'item', 'title,link', 'q=daum');">블로그 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'DAUM', '?apikey='+APIKeyDaumSearch, 'http://apis.daum.net/search/news', 'item', 'title,link', 'q=daum');">뉴스 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'DAUM', '?apikey='+APIKeyDaumSearch, 'http://apis.daum.net/search/book', 'item', 'title,link', 'q=daum');">책 검색</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'DAUM', '?apikey='+APIKeyDaumSearch, 'http://apis.daum.net/search/dic/jpdic', 'item', 'title,link', 'q=daum');">일본어 사전</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'DAUM', '?apikey='+APIKeyDaumSearch, 'http://apis.daum.net/search/vclip', 'item', 'title,link', 'q=daum');">동영상 검색</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'DAUM', '?apikey='+APIKeyDaumSearch, 'http://apis.daum.net/search/image', 'item', 'title,link', 'q=daum');">이미지 검색</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'DAUM', '?apikey='+APIKeyDaumContents, 'http://apis.daum.net/contents/movie', 'item', 'title,year,director', 'q=daum');">영화 검색</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'DAUM', '?apikey='+APIKeyDaumContents, 'http://apis.daum.net/contents/festival', 'item', 'name,date,location', 'q=daum');">축제 검색</a><br />                                
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'DAUM', '?apikey='+APIKeyDaumShopping, 'http://apis.daum.net/shopping/search', 'item', 'title,link', 'q=daum');">쇼핑 검색</a><br />
            </div>       
        </div>
        <div style="padding:0px;">
           	<div style="background-image:url(images/layout/bgComponent.png); height:24px;">
	            <div style="padding:4px;">
		        	<img src="images/toolbox/component.png" style="margin:2px;" align="absmiddle"> <b>Naver APIs</b><br />
                </div>
            </div>
            <div style="background-image:url(images/layout/bgComponent2.png); line-height:23px; padding-left:7px; font-size:11px;">
                <img src="images/toolbox/map.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjNaverMap();">Naver Map</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=kin', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=naver');">지식iN</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=video', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=naver');">동영상</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=image', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=naver');">이미지</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=doc', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=naver');">전문자료</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=book', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=naver');">책</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=movie', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=batman');">영화</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=movieman', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=송강호');">영화인</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=local', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=naver');">지역</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=shop', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=naver');">쇼핑</a><br />
				<img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=car', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=porsche');">자동차</a><br />                
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=encyc', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=naver');">백과사전</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=krdic', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=바보');">국어사전</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=endic', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=wizard');">영어사전</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=jpdic', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=おはよう');">일어사전</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=blog', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=naver');">블로그 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=cafe', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=naver');">까페/까페글 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData+'&target=webkr', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=naver ');">웹문서 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDsExternal('XML', 'NAVER', '?key='+APIKeyNaverData +'&target=news', 'http://openapi.naver.com/search', 'item', 'title,link', 'query=naver');">뉴스 검색</a><br />  
            </div>
        </div>
        <div style="padding:0px;">
           	<div style="background-image:url(images/layout/bgComponent.png); height:24px;">
	            <div style="padding:4px;">
		            <img src="images/toolbox/component.png" style="margin:2px;" align="absmiddle"> <b>Live APIs</b><br />
                </div>
            </div>
            <div style="background-image:url(images/layout/bgComponent2.png); line-height:23px; padding-left:7px; font-size:11px;">
            	<img src="images/toolbox/map.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addObjLiveMap();">Virtual Earth</a><br />
                <!--
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('liveImage', 'XML', 'http://api.search.live.net/xml.aspx?Sources=Image', 'mms:ImageResult', ['mms:Title','mms:MediaUrl']);">Image</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('liveInstantAnswer', 'XML', 'http://api.search.live.net/xml.aspx?Sources=InstantAnswer', 'ia:InstantAnswerResult', ['ia:Title','ia:Url']);">Instant Answer</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('liveNews', 'XML', 'http://api.search.live.net/xml.aspx?Sources=News', 'news:NewsResult', ['news:Title','news:Source']);">News</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('liveSpell', 'XML', 'http://api.search.live.net/xml.aspx?Sources=Spell', 'spl:SpellResult', ['spl:Value']);">Spell</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('liveWeb', 'XML', 'http://api.search.live.net/xml.aspx?Sources=Web', 'web:WebResult', ['web:Title','web:Url']);">Web</a><br />
                -->
            </div>
        </div>
      

