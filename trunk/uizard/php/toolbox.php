<?

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
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
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('self', 'XML', 'sourceURL', 'resultNode', ['fields1','fields2']);">XML Datasource</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('self', 'JSON', 'sourceURL', 'resultNode', ['fields1','fields2']);">JSON Datasource</a><br />        
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
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('daumKnowledge', 'XML', 'http://apis.daum.net/search/knowledge', 'item', ['title','link']);">신지식 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('daumBoard', 'XML', 'http://apis.daum.net/search/board', 'item', ['title','link']);">게시판 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('daumCafe', 'XML', 'http://apis.daum.net/search/cafe', 'item', ['title','link']);">까페 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('daumBlog', 'XML', 'http://apis.daum.net/search/blog', 'item', ['title','link']);">블로그 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('daumNews', 'XML', 'http://apis.daum.net/search/news', 'item', ['title','link']);">뉴스 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('daumBook', 'XML', 'http://apis.daum.net/search/book', 'item', ['title','link']);">책 검색</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('daumJpdic', 'XML', 'http://apis.daum.net/search/dic/jpdic', 'item', ['title','link']);">일본어 사전</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('daumVclip', 'XML', 'http://apis.daum.net/search/vclip', 'item', ['title','link']);">동영상 검색</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('daumImage', 'XML', 'http://apis.daum.net/search/image', 'item', ['title','link']);">이미지 검색</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('daumShopping', 'XML', 'http://apis.daum.net/shopping/search', 'item', ['title','link']);">쇼핑 검색</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('daumShoppingDetail', 'XML', 'http://apis.daum.net/shopping/detail', 'item', ['title','link']);">쇼핑 상품</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('daumKeyword', 'XML', 'http://apis.daum.net/suggest/keyword', 'item', ['title','link']);">문맥 키워드 추천</a><br />  
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
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverRank', 'XML', 'http://openapi.naver.com/search?target=rank', 'item', ['title','link']);">실시간 급상승 검색어</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverKin', 'XML', 'http://openapi.naver.com/search?target=kin', 'item', ['title','link']);">지식iN</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverVideo', 'XML', 'http://openapi.naver.com/search?target=video', 'item', ['title','link']);">동영상</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverImage', 'XML', 'http://openapi.naver.com/search?target=image', 'item', ['title','link']);">이미지</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverDoc', 'XML', 'http://openapi.naver.com/search?target=doc', 'item', ['title','link']);">전문자료</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverCar', 'XML', 'http://openapi.naver.com/search?target=car', 'item', ['title','link']);">자동차</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverBook', 'XML', 'http://openapi.naver.com/search?target=book', 'item', ['title','link']);">책</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverMovie', 'XML', 'http://openapi.naver.com/search?target=movie', 'item', ['title','link']);">영화</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverMovieman', 'XML', 'http://openapi.naver.com/search?target=movieman', 'item', ['title','link']);">영화인</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverLocal', 'XML', 'http://openapi.naver.com/search?target=local', 'item', ['title','link']);">지역</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverShop', 'XML', 'http://openapi.naver.com/search?target=shop', 'item', ['title','link']);">쇼핑</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverEncyc', 'XML', 'http://openapi.naver.com/search?target=encyc', 'item', ['title','link']);">백과사전</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverKrdic', 'XML', 'http://openapi.naver.com/search?target=krdic', 'item', ['title','link']);">국어사전</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverEndic', 'XML', 'http://openapi.naver.com/search?target=endic', 'item', ['title','link']);">영어사전</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverJpdic', 'XML', 'http://openapi.naver.com/search?target=jpdic', 'item', ['title','link']);">일어사전</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverBlog', 'XML', 'http://openapi.naver.com/search?target=blog', 'item', ['title','link']);">블로그 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverCafe', 'XML', 'http://openapi.naver.com/search?target=cafe', 'item', ['title','link']);">까페/까페글 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverWebkr', 'XML', 'http://openapi.naver.com/search?target=webkr', 'item', ['title','link']);">웹문서 검색</a><br /> 
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverNews', 'XML', 'http://openapi.naver.com/search?target=news', 'item', ['title','link']);">뉴스 검색</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverRecmd', 'XML', 'http://openapi.naver.com/search?target=recmd', 'item', ['title','link']);">추천 검색어</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverAdult', 'XML', 'http://openapi.naver.com/search?target=adult', 'item', ['title','link']);">성인 검색어 판별</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('naverErrata', 'XML', 'http://openapi.naver.com/search?target=errata', 'item', ['title','link']);">오타 변환</a><br />        
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
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('liveImage', 'XML', 'http://api.search.live.net/xml.aspx?Sources=Image', 'mms:ImageResult', ['mms:Title','mms:MediaUrl']);">Image</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('liveInstantAnswer', 'XML', 'http://api.search.live.net/xml.aspx?Sources=InstantAnswer', 'ia:InstantAnswerResult', ['ia:Title','ia:Url']);">Instant Answer</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('liveNews', 'XML', 'http://api.search.live.net/xml.aspx?Sources=News', 'news:NewsResult', ['news:Title','news:Source']);">News</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('liveSpell', 'XML', 'http://api.search.live.net/xml.aspx?Sources=Spell', 'spl:SpellResult', ['spl:Value']);">Spell</a><br />
                <img src="images/toolbox/datasource.png" style="margin:2px;" align="absmiddle"> <a href="#" onclick="addDs('liveWeb', 'XML', 'http://api.search.live.net/xml.aspx?Sources=Web', 'web:WebResult', ['web:Title','web:Url']);">Web</a><br />
            </div>
        </div>

<?

?>