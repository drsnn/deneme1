// ==UserScript==
// @name        Highlight Text Sin
// @version  20210828194949713899869
// @description Highlights text within HTML
// @require https://raw.githubusercontent.com/drsnn/deneme1/master/nwords.js
// @downloadURL https://raw.githubusercontent.com/drsnn/deneme1/master/nwords.js
// @grant    GM.getValue
//@include           https://*
// @include         http://www.google.*
// @include         https://www.google.*
// @include         https://encrypted.google.*
// ==/UserScript==

function highlightWord(word) {
    var xpath = "//text()[contains(., '" + word + "')]";
    var texts = document.evaluate(xpath, document.body, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (n = 0; n < texts.snapshotLength; n++) {
        var textNode = texts.snapshotItem(n);
        var p = textNode.parentNode;
        var a = [];
        var frag = document.createDocumentFragment();
        textNode.nodeValue.split(word).forEach(function(text, i) {
            var node;
            if (i) {
                node = document.createElement('span');
                node.style.backgroundColor = '#FFCCCB';
                node.appendChild(document.createTextNode(word));
                frag.appendChild(node);
            }
            if (text.length) {
                frag.appendChild(document.createTextNode(text));
            }
            return a;
        });
        p.replaceChild(frag, textNode);
    }
}
highlightWord('ursprungligen');
highlightWord('ryttarna'); 
highlightWord('bistånd'); 
highlightWord('övergrepp'); 
highlightWord('utpressat'); 
highlightWord('tillfälligt'); 
highlightWord('utfärdat'); 
highlightWord('mordbrännaren'); 
highlightWord('erfara'); 
highlightWord('avvisnings'); 
highlightWord('utreder'); 
highlightWord('motståndare'); 
highlightWord('överraskad');  
highlightWord('utmärkelser'); 
highlightWord('hotbild'); 
highlightWord('insatser'); 
highlightWord('utsätter'); 
highlightWord('terräng'); 
highlightWord('belysa'); 
highlightWord('förlöpande'); 
highlightWord('Giltigt'); 
highlightWord('åtgärder'); 
highlightWord('förebyggande'); 
highlightWord('förutsatt'); 
highlightWord('uppmanat'); 
highlightWord('erövring');
highlightWord('sänkas'); 
highlightWord('bensinmack'); 
highlightWord('angänsande'); 
highlightWord('hustak'); 
highlightWord('avslöjade'); 
highlightWord('tillsyn'); 
highlightWord('razzia'); 
highlightWord('tveksam'); 
highlightWord('sammanväxningar'); 
highlightWord('grötigt'); 
highlightWord('byråkrati'); 
highlightWord('deserterat'); 
highlightWord('nekar'); 
highlightWord('utrustning'); 
highlightWord('anbringat'); 
highlightWord('egendom'); 
highlightWord('ogenomskinlig'); 
highlightWord('utbyte'); 
highlightWord('ramarna'); 
highlightWord('bistånd'); 
highlightWord('angreps'); 
highlightWord('slåss'); 
highlightWord('polisinsats'); 
highlightWord('överstiger'); 
highlightWord('bär på'); 
highlightWord('påtaglig'); 
highlightWord('förtvivlade'); 
