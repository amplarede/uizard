<?php

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

// XML Class Definition
class uizXmlClass { 

    ## private 
    var $_xml_parser; 
    var $_xml_encoding; 
    var $_xml_chk        = 'n'; 
    var $_xml_item        = array(); 
    var $_xml_result    = array(); 

    function xmlOpen($url, $tag) { 
        $this->_tag = $tag; 
        if($fp = fopen($url, 'r')) {
            $xml_data = '';
            while(!feof ($fp)) { 
                $xml_data .= fgets($fp, 4096); 
            } 
            fclose ($fp); 
            $this->_xmlDefine($xml_data); 
            return $this->_xmlInte(); 
        } else { 
            $this->_error('xml open error : xml file open failure => '.$url); 
        } 
    } 

    ## xml 선언 
    function _xmlDefine($xml_data) { 
        global $pattern, $index;

        if (empty($pattern)) $pattern = array();
        if (preg_match('/encoding="[^"]+"/', $xml_data, $pattern)) {
            $this->_xml_encoding = strtolower(preg_replace('/(encoding=)|(")/', '', $pattern[0]));

            $this->_xml_parser = xml_parser_create();
            xml_parser_set_option($this->_xml_parser, XML_OPTION_CASE_FOLDING, 0); // print tag's name to lower case
            xml_parse_into_struct($this->_xml_parser, $xml_data, $this->_xml_item, $index);
            xml_parser_free($this->_xml_parser);
        }
    } 

    ## xml 추출 
    function _xmlInte() { 
        foreach($this->_xml_item as $v) { 
            if($v['tag'] == $this->_tag && $v['type'] == 'open') { 
                $this->_xml_result[$v['tag']][] = ''; 
                $this->_xml_chk = 'y'; 
            } 
            if($v['type'] == 'complete' && $this->_xml_chk == 'y') { 
                if($this->_xml_encoding == 'utf-8') { 
                    $this->_xml_result[$v['tag']][] = array('value'=>iconv('utf-8', 'euc-kr', $v['value']),'att'=>iconv('utf-8', 'euc-kr', $v['attributes'])); 
                } else { 
                    $this->_xml_result[$v['tag']][] = array('value'=>$v['value'],'att'=>$v['attributes']); 
                } 
            } 
        } 
        return $this->_xml_result; 
    } 

    ## print error
    function _error($msg='') { 
        echo $msg; 
        exit; 
    } 
} 

?>