// ==UserScript==
// @name        Highlight Text Sin
// @version  20211120231918839586209
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
highlightWord('bryta'); 
highlightWord('häktade'); 
highlightWord('slutomröstning'); 
highlightWord('fruktansvärd'); 
highlightWord('lögner'); 
highlightWord('tyg'); 
highlightWord('bränsle'); 
highlightWord('pilbåge'); 
highlightWord('dödsläger'); 
highlightWord('likställas '); 
highlightWord('består av'); 
highlightWord('rättegång'); 
highlightWord('innefattar'); 
highlightWord('hagelgevär'); 
highlightWord('växts'); 
highlightWord('stugbyar'); 
highlightWord('spöken'); 
highlightWord('misstänkt grovt brott'); 
highlightWord('oväder'); 
highlightWord('omständigheterna'); 
highlightWord('skottlossningen'); 
highlightWord('förlupen'); 
highlightWord('interna konflikterna'); 
highlightWord('bekymrat'); 
highlightWord('tidsangivelse'); 
highlightWord('driftstörningar'); 
highlightWord('ohållbara '); 
highlightWord('limmade'); 
highlightWord('Vanligtvis'); 
highlightWord('kretsar'); 
highlightWord('uppskattar'); 
highlightWord('rovdjur'); 
highlightWord('vargstam'); 
highlightWord('framhåller'); 
highlightWord('rykte'); 
highlightWord('brydde sig'); 
highlightWord('har haft hand om '); 
highlightWord('utsatt'); 
highlightWord('häpnar '); 
highlightWord('statsskick'); 
highlightWord('För länge sedan'); 
highlightWord('påminner'); 
highlightWord('längre kvar'); 
highlightWord('förtegen'); 
highlightWord('inlett'); 
highlightWord('förtegen'); 
highlightWord('uppge'); 
highlightWord('utredningsåtgärder'); 
highlightWord('hör till'); 
highlightWord('bebodda'); 
highlightWord('skulder'); 
highlightWord('böter'); 
highlightWord('förhandlingar'); 
highlightWord('röstboskap'); 
highlightWord('förolämpning. '); 
highlightWord('sila'); 
highlightWord('mörklagt'); 
highlightWord('genomfördes'); 
highlightWord('besegra'); 
highlightWord('skjutas upp'); 
highlightWord('förhoppningarna'); 
highlightWord('träsken'); 
highlightWord('återfanns'); 
highlightWord('vägrade'); 
highlightWord('taggtrådsstängslen'); 
highlightWord('taggtrådsstängslen '); 
highlightWord('operasångerska'); 
highlightWord('varelser'); 
highlightWord('fastighet '); 
highlightWord('anhållits'); 
highlightWord('Tillståndet'); 
highlightWord('utsatts'); 
highlightWord('fördes'); 
highlightWord('i vanliga fall'); 
highlightWord('skivor'); 
highlightWord('påvisa '); 
highlightWord('undvikbar '); 
highlightWord('uppnå '); 
highlightWord('riken'); 
highlightWord('ropen'); 
highlightWord('rörigt'); 
highlightWord('arbetstagare'); 
highlightWord('sägs upp'); 
highlightWord('eldröken'); 
highlightWord('förutsättningarna'); 
highlightWord('besvärligt'); 
highlightWord('lyckas'); 
highlightWord('kapats'); 
highlightWord('vägskyltar'); 
highlightWord('skräpade ner'); 
highlightWord('nedstägning'); 
highlightWord('hör av sig'); 
highlightWord('lockar'); 
highlightWord('nog'); 
