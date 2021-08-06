// ==UserScript==
// @name           Replace Text sin
// @description    Replaces text on websites.
// @include        http://*
// @include        https://*
// @include        file://*
// @exclude        https://userscripts-mirror.org/scripts/review/*
// @exclude        https://userscripts-mirror.org/scripts/edit/*
// @exclude        https://userscripts-mirror.org/scripts/edit_src/*
// @exclude        https://userscripts-mirror.org/scripts/review/*
// @exclude        https://userscripts-mirror.org/scripts/edit/*
// @exclude        https://userscripts-mirror.org/scripts/edit_src/*
// @copyright      JoeSimmons
// @version  20210806222007804073779
// @license        http://creativecommons.org/licenses/by-nc-nd/3.0/us/
// @downloadURL    https://raw.githubusercontent.com/drsnn/deneme1/master/Replaces.js
// @updateURL      https://raw.githubusercontent.com/drsnn/deneme1/master/Replaces.js
// ==/UserScript==
(function () {
    'use strict';


    /*
        NOTE:
            You can use \\* to match actual asterisks instead of using it as a wildcard!
            The examples below show a wildcard in use and a regular asterisk replacement.
    */

    var words = {
    ///////////////////////////////////////////////////////


        // Syntax: 'Search word' : 'Replace word',
'ursprungligen': '(originally) ursprungligen',
'särskilda': '(SPECIAL ) särskilda',
'anställ': '(Employing ) anställ',
'motståndare': '(opponents) motståndare',
'stavhopp': '(Spell Hope ) stavhopp',
'hävstång': '(lever) hävstång',
'stavhoppare': '(Spell jumpers) stavhoppare',
'truppen': '(the squad ) truppen',
'stavhoppare': '(Spell jumpers) stavhoppare',
'rimligt': '(fair) rimligt',
'bokningstryck': '(Booking printing ) bokningstryck',
'häromdagen': '(The other day ) häromdagen',
'kassaskåp': '(safe) kassaskåp',
'trängsel': '(throng) trängsel',
'bältrosvaccinet': '(The shingle vaccine ) bältrosvaccinet',
'vattkoppor': '(chicken-pox) vattkoppor',
'kostnadsfritt': '(free) kostnadsfritt',
'ribban': '(the rib ) ribban',
'besvikna': '(disappoint ) besvikna',
'ikapp': '(catch up ) ikapp',
'förstör': '(destroy) förstör',
'borrar sig': '(drills itself ) borrar sig',
'bevisen': '(the evidence ) bevisen',
'drönare': '(drone) drönare',
'åtgärder': '(Actions) åtgärder','tillstånd': '(permission) tillstånd',////////////////////////////////////////////////////////
    '':''};



    //////////////////////////////////////////////////////////////////////////////
    // This is where the real code is
    // Don't edit below this
    //////////////////////////////////////////////////////////////////////////////

    var regexs = [], replacements = [],
        tagsWhitelist = ['PRE', 'BLOCKQUOTE', 'CODE', 'INPUT', 'BUTTON', 'TEXTAREA'],
        rIsRegexp = /^\/(.+)\/([gim]+)?$/,
        word, text, texts, i, userRegexp;

    // prepareRegex by JoeSimmons
    // used to take a string and ready it for use in new RegExp()
    function prepareRegex(string) {
        return string.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g, '\\$1');
    }

    // function to decide whether a parent tag will have its text replaced or not
    function isTagOk(tag) {
        return tagsWhitelist.indexOf(tag) === -1;
    }

    delete words['']; // so the user can add each entry ending with a comma,
                      // I put an extra empty key/value pair in the object.
                      // so we need to remove it before continuing

    // convert the 'words' JSON object to an Array
    for (word in words) {
        if ( typeof word === 'string' && words.hasOwnProperty(word) ) {
            userRegexp = word.match(rIsRegexp);

            // add the search/needle/query
            if (userRegexp) {
                regexs.push(
                    new RegExp(userRegexp[1], 'g')
                );
            } else {
                regexs.push(
                    new RegExp(prepareRegex(word).replace(/\\?\*/g, function (fullMatch) {
                        return fullMatch === '\\*' ? '*' : '[^ ]*';
                    }), 'g')
                );
            }

            // add the replacement
            replacements.push( words[word] );
        }
    }

    // do the replacement
    texts = document.evaluate('//body//text()[ normalize-space(.) != "" ]', document, null, 6, null);
    for (i = 0; text = texts.snapshotItem(i); i += 1) {
        if ( isTagOk(text.parentNode.tagName) ) {
            regexs.forEach(function (value, index) {
                text.data = text.data.replace( value, replacements[index] );
            });
        }
    }

}());