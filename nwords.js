// ==UserScript==
// @name        Highlight Text new
// @version      0.01
// @description Highlights text within HTML
// @require https://raw.githubusercontent.com/drsnn/deneme1/master/nwords.js
// @grant    GM_addStyle
// @grant    GM.getValue
// @grant    GM_setValue
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
highlightWord('tingsrätten');
highlightWord('myndigheten');
highlightWord('källar');
highlightWord('torsdag');
highlightWord('översvämningar');
highlightWord('motståndare');
highlightWord('åklagare');
highlightWord('Världsnaturfonden');
highlightWord('smycken');
