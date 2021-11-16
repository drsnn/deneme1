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
// @version  20211116192352698322439
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
'utmärkelser': '(awards) utmärkelser',
'utsätter': '(exposes) utsätter',
'berättar': '(tells) berättar',
'terräng': '(terrain) terräng',
'belysa': '(illustrate) belysa',
'förlöpande': '(continuous) förlöpande',
'Giltigt': '(Valid) Giltigt',
'åtgärder': '(measures) åtgärder',
'förebyggande': '(prevention) förebyggande',
'förutsatt': '(provided) förutsatt',
'uppmanat': '(urged) uppmanat',
'erövring': '(conquest) erövring',
'sänkas': '(lowered) sänkas',
'bensinmack': '(gas station) bensinmack',
'angänsande': '(concerning) angänsande',
'hustak': '(housetop) hustak',
'avslöjade': '(revealed) avslöjade',
'tillsyn': '(supervision) tillsyn',
'razzia': '(raid) razzia',
'tveksam': '(hesitant) tveksam',
'sammanväxningar': '(adhesions) sammanväxningar',
'grötigt': '(mushy) grötigt',
'byråkrati': '(bureaucracy) byråkrati',
'deserterat': '(deserted) deserterat',
'nekar': '(denying) nekar',
'utrustning': '(equipment) utrustning',
'anbringat': '(affixed) anbringat',
'egendom': '(property) egendom',
'ogenomskinlig': '(opaque) ogenomskinlig',
'utbyte': '(exchange) utbyte',
'ramarna': '(frames) ramarna',
'bistånd': '(assistance) bistånd',
'angreps': '(attack) angreps',
'slåss': '(fight) slåss',
'polisinsats': '(police operation) polisinsats',
'överstiger': '(exceeds) överstiger',
'bär på': '(carries on) bär på',
'påtaglig': '(noticeable) påtaglig',
'förtvivlade': '(desperate) förtvivlade',
'bryta': '(break) bryta',
'häktade': '(arrested) häktade',
'slutomröstning': '(final vote) slutomröstning',
'fruktansvärd': '(terrible) fruktansvärd',
'lögner': '(lies) lögner',
'tyg': '(week) tyg',
'bränsle': '(fuel) bränsle',
'pilbåge': '(bow) pilbåge',
'dödsläger': '(death camp) dödsläger',
'likställas ': '(equated) likställas ',
'består av': '(consisting of) består av',
'rättegång': '(trial) rättegång',
'innefattar': '(includes) innefattar',
'hagelgevär': '(shotgun) hagelgevär',
'växts': '(grown) växts',
'stugbyar': '(holiday villages) stugbyar',
'spöken': '(ghosts) spöken',
'misstänkt grovt brott': '(suspected felony) misstänkt grovt brott',
'oväder': '(storm) oväder',
'omständigheterna': '(circumstances) omständigheterna',
'skottlossningen': '(the shooting) skottlossningen',
'förlupen': '(expired) förlupen',
'interna konflikterna': '(internal conflicts) interna konflikterna',
'bekymrat': '(worried) bekymrat',
'tidsangivelse': '(time indication) tidsangivelse',
'driftstörningar': '(malfunctions) driftstörningar',
'ohållbara ': '(unsustainable) ohållbara ',
'limmade': '(glued) limmade',
'Vanligtvis': '(Usually) Vanligtvis',
'kretsar': '(circuits) kretsar',
'uppskattar': '(appreciate) uppskattar',
'rovdjur': '(predator) rovdjur',
'vargstam': '() vargstam',
'framhåller': '(emphasizes) framhåller',
'rykte': '(reputation) rykte',
'brydde sig': '(cared) brydde sig',
'har haft hand om ': '(has taken care of) har haft hand om ',
'utsatt': '(exposed) utsatt',
'häpnar ': '(amazes) häpnar ',
'statsskick': '(state) statsskick',
'För länge sedan': '(Long ago) För länge sedan',
'påminner': '(reminds) påminner',
'längre kvar': '(longer left) längre kvar',
'förtegen': '(reticent) förtegen',
'inlett': '(inlett) inlett',
'förtegen': '( övrigt) förtegen',
'uppge': '(state) uppge',
'utredningsåtgärder': '(investigative measures) utredningsåtgärder',
'hör till': '(belongs to) hör till',
'bebodda': '(inhabited) bebodda',
'skulder': '(liabilities) skulder',
'böter': '(fine) böter',
'förhandlingar': '(negotiations) förhandlingar',
'röstboskap': '(voice cattle) röstboskap',
'förolämpning. ': '() förolämpning. ',
'sila': '(they) sila',
'mörklagt': '(darkened) mörklagt',
'genomfördes': '(was implemented) genomfördes',
'besegra': '(defeat) besegra',
'skjutas upp': '(postponed) skjutas upp',
'förhoppningarna': '(the hopes) förhoppningarna',
'träsken': '(the swamps) träsken',
'återfanns': '(was found) återfanns',
'vägrade': '(refused) vägrade',
'taggtrådsstängslen': '(barbed wire fences) taggtrådsstängslen',
'taggtrådsstängslen ': '(barbed wire fences) taggtrådsstängslen ',
'operasångerska': '(opera singer) operasångerska',
'varelser': '(creatures) varelser',
'fastighet ': '(real estate) fastighet ',
'anhållits': '(arrested) anhållits',
'Tillståndet': '(The condition) Tillståndet',
'utsatts': '() utsatts',
'fördes': '(was carried) fördes',
'i vanliga fall': '(normally) i vanliga fall',
'skivor': '(discs) skivor',
'påvisa ': '(demonstrate) påvisa ',
'undvikbar ': '(avoidable) undvikbar ',
'uppnå ': '(achieve) uppnå ',////////////////////////////////////////////////////////
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