// ==UserScript==
// @name         sin wikilinks
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
// @version  20221215123210451307555
// @license        http://creativecommons.org/licenses/by-nc-nd/3.0/us/
// @downloadURL    https://raw.githubusercontent.com/drsnn/deneme1/master/wikilink.js
// @updateURL      https://raw.githubusercontent.com/drsnn/deneme1/master/wikilink.js
// ==/UserScript==

(function() {
    'use strict';

    //your array
var words = [
    {
        word: 'rymden',
        link: '<a class="wikilink" title="kitap" href="https://sv.wiktionary.org/wiki/bok"',
    },
    {
        word: 'kikare',
        link: '<a class="wikilink" title="binoculars" href= "https://sv.wiktionary.org/wiki/kikare"',
    }///////////////////////////////////////////////////////
];
    //////////////////////////////////////////////////////////////////////////////
    // our code is below
    // Don't edit below this
    //////////////////////////////////////////////////////////////////////////////

$(function() {
    //iterate the array
    $.each(words,
        function() {
            var searchWord = this.word;
            var link = this.link;
            $('body:contains("' + searchWord + '")').each(function() {
                var newHtml = $(this).html().replaceAll(searchWord, link+'>' + searchWord + '</a>');
                $(this).html(newHtml);
            });
        }
    );
});
})();