// ==UserScript==
// @name        Highlight Text new
// @version  20210731235838863186019
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
highlightWord('särskilda');
highlightWord('anställ');
highlightWord('motståndare');
highlightWord('stavhopp');
highlightWord('hävstång');
highlightWord('stavhoppare');
highlightWord('truppen');
highlightWord('stavhoppare');
highlightWord('rimligt');
highlightWord('bokningstryck'); 
highlightWord('häromdagen'); 
highlightWord('kassaskåp'); 
highlightWord('trängsel');
highlightWord('bältrosvaccinet'); 
highlightWord('vattkoppor'); 
highlightWord('kostnadsfritt'); 