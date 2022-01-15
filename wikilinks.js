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
// @version  20220115163650598105499
// @license        http://creativecommons.org/licenses/by-nc-nd/3.0/us/
// @downloadURL    https://raw.githubusercontent.com/drsnn/deneme1/master/wikilinks.js
// @updateURL      https://raw.githubusercontent.com/drsnn/deneme1/master/wikilink.js
// ==/UserScript==

(function() {
    'use strict';
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
    //your array
var words = [
{word: 'ursprungligen', link: '<a class="wikilink" title=originally"href="https://sv.wiktionary.org/wiki/ursprungligen"',},
{word: 'utmärkelser', link: '<a class="wikilink" title=awards"href="https://sv.wiktionary.org/wiki/utmärkelser"',},
{word: 'utsätter', link: '<a class="wikilink" title=exposes"href="https://sv.wiktionary.org/wiki/utsätter"',},
{word: 'berättar', link: '<a class="wikilink" title=tells"href="https://sv.wiktionary.org/wiki/berättar"',},
{word: 'terräng', link: '<a class="wikilink" title=terrain"href="https://sv.wiktionary.org/wiki/terräng"',},
{word: 'belysa', link: '<a class="wikilink" title=illustrate"href="https://sv.wiktionary.org/wiki/belysa"',},
{word: 'förlöpande', link: '<a class="wikilink" title=continuous"href="https://sv.wiktionary.org/wiki/förlöpande"',},
{word: 'Giltigt', link: '<a class="wikilink" title=Valid"href="https://sv.wiktionary.org/wiki/Giltigt"',},
{word: 'åtgärder', link: '<a class="wikilink" title=measures"href="https://sv.wiktionary.org/wiki/åtgärder"',},
{word: 'förebyggande', link: '<a class="wikilink" title=prevention"href="https://sv.wiktionary.org/wiki/förebyggande"',},
{word: 'förutsatt', link: '<a class="wikilink" title=provided"href="https://sv.wiktionary.org/wiki/förutsatt"',},
{word: 'uppmanat', link: '<a class="wikilink" title=urged"href="https://sv.wiktionary.org/wiki/uppmanat"',},
{word: 'erövring', link: '<a class="wikilink" title=conquest"href="https://sv.wiktionary.org/wiki/erövring"',},
{word: 'sänkas', link: '<a class="wikilink" title=lowered"href="https://sv.wiktionary.org/wiki/sänkas"',},
{word: 'bensinmack', link: '<a class="wikilink" title=gas station"href="https://sv.wiktionary.org/wiki/bensinmack"',},
{word: 'angänsande', link: '<a class="wikilink" title=concerning"href="https://sv.wiktionary.org/wiki/angänsande"',},
{word: 'hustak', link: '<a class="wikilink" title=housetop"href="https://sv.wiktionary.org/wiki/hustak"',},
{word: 'avslöjade', link: '<a class="wikilink" title=revealed"href="https://sv.wiktionary.org/wiki/avslöjade"',},
{word: 'tillsyn', link: '<a class="wikilink" title=supervision"href="https://sv.wiktionary.org/wiki/tillsyn"',},
{word: 'razzia', link: '<a class="wikilink" title=raid"href="https://sv.wiktionary.org/wiki/razzia"',},
{word: 'tveksam', link: '<a class="wikilink" title=hesitant"href="https://sv.wiktionary.org/wiki/tveksam"',},
{word: 'sammanväxningar', link: '<a class="wikilink" title=adhesions"href="https://sv.wiktionary.org/wiki/sammanväxningar"',},
{word: 'grötigt', link: '<a class="wikilink" title=mushy"href="https://sv.wiktionary.org/wiki/grötigt"',},
{word: 'byråkrati', link: '<a class="wikilink" title=bureaucracy"href="https://sv.wiktionary.org/wiki/byråkrati"',},
{word: 'deserterat', link: '<a class="wikilink" title=deserted"href="https://sv.wiktionary.org/wiki/deserterat"',},
{word: 'nekar', link: '<a class="wikilink" title=denying"href="https://sv.wiktionary.org/wiki/nekar"',},
{word: 'utrustning', link: '<a class="wikilink" title=equipment"href="https://sv.wiktionary.org/wiki/utrustning"',},
{word: 'anbringat', link: '<a class="wikilink" title=affixed"href="https://sv.wiktionary.org/wiki/anbringat"',},
{word: 'egendom', link: '<a class="wikilink" title=property"href="https://sv.wiktionary.org/wiki/egendom"',},
{word: 'ogenomskinlig', link: '<a class="wikilink" title=opaque"href="https://sv.wiktionary.org/wiki/ogenomskinlig"',},
{word: 'utbyte', link: '<a class="wikilink" title=exchange"href="https://sv.wiktionary.org/wiki/utbyte"',},
{word: 'ramarna', link: '<a class="wikilink" title=frames"href="https://sv.wiktionary.org/wiki/ramarna"',},
{word: 'bistånd', link: '<a class="wikilink" title=assistance"href="https://sv.wiktionary.org/wiki/bistånd"',},
{word: 'angreps', link: '<a class="wikilink" title=attack"href="https://sv.wiktionary.org/wiki/angreps"',},
{word: 'slåss', link: '<a class="wikilink" title=fight"href="https://sv.wiktionary.org/wiki/slåss"',},
{word: 'polisinsats', link: '<a class="wikilink" title=police operation"href="https://sv.wiktionary.org/wiki/polisinsats"',},
{word: 'överstiger', link: '<a class="wikilink" title=exceeds"href="https://sv.wiktionary.org/wiki/överstiger"',},
{word: 'bär på', link: '<a class="wikilink" title=carries on"href="https://sv.wiktionary.org/wiki/bär på"',},
{word: 'påtaglig', link: '<a class="wikilink" title=noticeable"href="https://sv.wiktionary.org/wiki/påtaglig"',},
{word: 'förtvivlade', link: '<a class="wikilink" title=desperate"href="https://sv.wiktionary.org/wiki/förtvivlade"',},
{word: 'bryta', link: '<a class="wikilink" title=break"href="https://sv.wiktionary.org/wiki/bryta"',},
{word: 'häktade', link: '<a class="wikilink" title=arrested"href="https://sv.wiktionary.org/wiki/häktade"',},
{word: 'slutomröstning', link: '<a class="wikilink" title=final vote"href="https://sv.wiktionary.org/wiki/slutomröstning"',},
{word: 'fruktansvärd', link: '<a class="wikilink" title=terrible"href="https://sv.wiktionary.org/wiki/fruktansvärd"',},
{word: 'lögner', link: '<a class="wikilink" title=lies"href="https://sv.wiktionary.org/wiki/lögner"',},
{word: 'bränsle', link: '<a class="wikilink" title=fuel"href="https://sv.wiktionary.org/wiki/bränsle"',},
{word: 'pilbåge', link: '<a class="wikilink" title=bow"href="https://sv.wiktionary.org/wiki/pilbåge"',},
{word: 'dödsläger', link: '<a class="wikilink" title=death camp"href="https://sv.wiktionary.org/wiki/dödsläger"',},
{word: 'likställas', link: '<a class="wikilink" title=equated"href="https://sv.wiktionary.org/wiki/likställas"',},
{word: 'består av', link: '<a class="wikilink" title=consisting of"href="https://sv.wiktionary.org/wiki/består av"',},
{word: 'rättegång', link: '<a class="wikilink" title=trial"href="https://sv.wiktionary.org/wiki/rättegång"',},
{word: 'innefattar', link: '<a class="wikilink" title=includes"href="https://sv.wiktionary.org/wiki/innefattar"',},
{word: 'hagelgevär', link: '<a class="wikilink" title=shotgun"href="https://sv.wiktionary.org/wiki/hagelgevär"',},
{word: 'växts', link: '<a class="wikilink" title=grown"href="https://sv.wiktionary.org/wiki/växts"',},
{word: 'stugbyar', link: '<a class="wikilink" title=holiday villages"href="https://sv.wiktionary.org/wiki/stugbyar"',},
{word: 'spöken', link: '<a class="wikilink" title=ghosts"href="https://sv.wiktionary.org/wiki/spöken"',},
{word: 'misstänkt grovt brott', link: '<a class="wikilink" title=suspected felony"href="https://sv.wiktionary.org/wiki/misstänkt grovt brott"',},
{word: 'oväder', link: '<a class="wikilink" title=storm"href="https://sv.wiktionary.org/wiki/oväder"',},
{word: 'omständigheterna', link: '<a class="wikilink" title=circumstances"href="https://sv.wiktionary.org/wiki/omständigheterna"',},
{word: 'skottlossningen', link: '<a class="wikilink" title=the shooting"href="https://sv.wiktionary.org/wiki/skottlossningen"',},
{word: 'förlupen', link: '<a class="wikilink" title=expired"href="https://sv.wiktionary.org/wiki/förlupen"',},
{word: 'interna konflikterna', link: '<a class="wikilink" title=internal conflicts"href="https://sv.wiktionary.org/wiki/interna konflikterna"',},
{word: 'bekymrat', link: '<a class="wikilink" title=worried"href="https://sv.wiktionary.org/wiki/bekymrat"',},
{word: 'tidsangivelse', link: '<a class="wikilink" title=time indication"href="https://sv.wiktionary.org/wiki/tidsangivelse"',},
{word: 'driftstörningar', link: '<a class="wikilink" title=malfunctions"href="https://sv.wiktionary.org/wiki/driftstörningar"',},
{word: 'ohållbara', link: '<a class="wikilink" title=unsustainable"href="https://sv.wiktionary.org/wiki/ohållbara"',},
{word: 'limmade', link: '<a class="wikilink" title=glued"href="https://sv.wiktionary.org/wiki/limmade"',},
{word: 'Vanligtvis', link: '<a class="wikilink" title=Usually"href="https://sv.wiktionary.org/wiki/Vanligtvis"',},
{word: 'kretsar', link: '<a class="wikilink" title=circuits"href="https://sv.wiktionary.org/wiki/kretsar"',},
{word: 'uppskattar', link: '<a class="wikilink" title=appreciate"href="https://sv.wiktionary.org/wiki/uppskattar"',},
{word: 'rovdjur', link: '<a class="wikilink" title=predator"href="https://sv.wiktionary.org/wiki/rovdjur"',},
{word: 'vargstam', link: '<a class="wikilink" title="href="https://sv.wiktionary.org/wiki/vargstam"',},
{word: 'framhåller', link: '<a class="wikilink" title=emphasizes"href="https://sv.wiktionary.org/wiki/framhåller"',},
{word: 'rykte', link: '<a class="wikilink" title=reputation"href="https://sv.wiktionary.org/wiki/rykte"',},
{word: 'brydde sig', link: '<a class="wikilink" title=cared"href="https://sv.wiktionary.org/wiki/brydde sig"',},
{word: 'har haft hand om', link: '<a class="wikilink" title=has taken care of"href="https://sv.wiktionary.org/wiki/har haft hand om"',},
{word: 'utsatt', link: '<a class="wikilink" title=exposed"href="https://sv.wiktionary.org/wiki/utsatt"',},
{word: 'häpnar', link: '<a class="wikilink" title=amazes"href="https://sv.wiktionary.org/wiki/häpnar"',},
{word: 'statsskick', link: '<a class="wikilink" title=state"href="https://sv.wiktionary.org/wiki/statsskick"',},
{word: 'För länge sedan', link: '<a class="wikilink" title=Long ago"href="https://sv.wiktionary.org/wiki/För länge sedan"',},
{word: 'påminner', link: '<a class="wikilink" title=reminds"href="https://sv.wiktionary.org/wiki/påminner"',},
{word: 'längre kvar', link: '<a class="wikilink" title=longer left"href="https://sv.wiktionary.org/wiki/längre kvar"',},
{word: 'förtegen', link: '<a class="wikilink" title=reticent"href="https://sv.wiktionary.org/wiki/förtegen"',},
{word: 'inlett', link: '<a class="wikilink" title=inlett"href="https://sv.wiktionary.org/wiki/inlett"',},
{word: 'förtegen', link: '<a class="wikilink" title=övrigt"href="https://sv.wiktionary.org/wiki/förtegen"',},
{word: 'uppge', link: '<a class="wikilink" title=state"href="https://sv.wiktionary.org/wiki/uppge"',},
{word: 'utredningsåtgärder', link: '<a class="wikilink" title=investigative measures"href="https://sv.wiktionary.org/wiki/utredningsåtgärder"',},
{word: 'hör till', link: '<a class="wikilink" title=belongs to"href="https://sv.wiktionary.org/wiki/hör till"',},
{word: 'bebodda', link: '<a class="wikilink" title=inhabited"href="https://sv.wiktionary.org/wiki/bebodda"',},
{word: 'skulder', link: '<a class="wikilink" title=liabilities"href="https://sv.wiktionary.org/wiki/skulder"',},
{word: 'böter', link: '<a class="wikilink" title=fine"href="https://sv.wiktionary.org/wiki/böter"',},
{word: 'förhandlingar', link: '<a class="wikilink" title=negotiations"href="https://sv.wiktionary.org/wiki/förhandlingar"',},
{word: 'röstboskap', link: '<a class="wikilink" title=voice cattle"href="https://sv.wiktionary.org/wiki/röstboskap"',},
{word: 'förolämpning.', link: '<a class="wikilink" title="href="https://sv.wiktionary.org/wiki/förolämpning."',},
{word: 'sila', link: '<a class="wikilink" title=they"href="https://sv.wiktionary.org/wiki/sila"',},
{word: 'mörklagt', link: '<a class="wikilink" title=darkened"href="https://sv.wiktionary.org/wiki/mörklagt"',},
{word: 'genomfördes', link: '<a class="wikilink" title=was implemented"href="https://sv.wiktionary.org/wiki/genomfördes"',},
{word: 'besegra', link: '<a class="wikilink" title=defeat"href="https://sv.wiktionary.org/wiki/besegra"',},
{word: 'skjutas upp', link: '<a class="wikilink" title=postponed"href="https://sv.wiktionary.org/wiki/skjutas upp"',},
{word: 'förhoppningarna', link: '<a class="wikilink" title=the hopes"href="https://sv.wiktionary.org/wiki/förhoppningarna"',},
{word: 'träsken', link: '<a class="wikilink" title=the swamps"href="https://sv.wiktionary.org/wiki/träsken"',},
{word: 'återfanns', link: '<a class="wikilink" title=was found"href="https://sv.wiktionary.org/wiki/återfanns"',},
{word: 'vägrade', link: '<a class="wikilink" title=refused"href="https://sv.wiktionary.org/wiki/vägrade"',},
{word: 'taggtrådsstängslen', link: '<a class="wikilink" title=barbed wire fences"href="https://sv.wiktionary.org/wiki/taggtrådsstängslen"',},
{word: 'taggtrådsstängslen', link: '<a class="wikilink" title=barbed wire fences"href="https://sv.wiktionary.org/wiki/taggtrådsstängslen"',},
{word: 'operasångerska', link: '<a class="wikilink" title=opera singer"href="https://sv.wiktionary.org/wiki/operasångerska"',},
{word: 'varelser', link: '<a class="wikilink" title=creatures"href="https://sv.wiktionary.org/wiki/varelser"',},
{word: 'fastighet', link: '<a class="wikilink" title=real estate"href="https://sv.wiktionary.org/wiki/fastighet"',},
{word: 'anhållits', link: '<a class="wikilink" title=arrested"href="https://sv.wiktionary.org/wiki/anhållits"',},
{word: 'Tillståndet', link: '<a class="wikilink" title=The condition"href="https://sv.wiktionary.org/wiki/Tillståndet"',},
{word: 'utsatts', link: '<a class="wikilink" title="href="https://sv.wiktionary.org/wiki/utsatts"',},
{word: 'fördes', link: '<a class="wikilink" title=was carried"href="https://sv.wiktionary.org/wiki/fördes"',},
{word: 'i vanliga fall', link: '<a class="wikilink" title=normally"href="https://sv.wiktionary.org/wiki/i vanliga fall"',},
{word: 'skivor', link: '<a class="wikilink" title=discs"href="https://sv.wiktionary.org/wiki/skivor"',},
{word: 'påvisa', link: '<a class="wikilink" title=demonstrate"href="https://sv.wiktionary.org/wiki/påvisa"',},
{word: 'undvikbar', link: '<a class="wikilink" title=avoidable"href="https://sv.wiktionary.org/wiki/undvikbar"',},
{word: 'uppnå', link: '<a class="wikilink" title=achieve"href="https://sv.wiktionary.org/wiki/uppnå"',},
{word: 'riken', link: '<a class="wikilink" title=riken"href="https://sv.wiktionary.org/wiki/riken"',},
{word: 'ropen', link: '<a class="wikilink" title=ropen"href="https://sv.wiktionary.org/wiki/ropen"',},
{word: 'rörigt', link: '<a class="wikilink" title=messy"href="https://sv.wiktionary.org/wiki/rörigt"',},
{word: 'arbetstagare', link: '<a class="wikilink" title="href="https://sv.wiktionary.org/wiki/arbetstagare"',},
{word: 'sägs upp', link: '<a class="wikilink" title="href="https://sv.wiktionary.org/wiki/sägs upp"',},
{word: 'eldröken', link: '<a class="wikilink" title=the fire smoke"href="https://sv.wiktionary.org/wiki/eldröken"',},
{word: 'förutsättningarna', link: '<a class="wikilink" title=the conditions"href="https://sv.wiktionary.org/wiki/förutsättningarna"',},
{word: 'besvärligt', link: '<a class="wikilink" title=awkward"href="https://sv.wiktionary.org/wiki/besvärligt"',},
{word: 'lyckas', link: '<a class="wikilink" title=succeed"href="https://sv.wiktionary.org/wiki/lyckas"',},
{word: 'kapats', link: '<a class="wikilink" title=kapats"href="https://sv.wiktionary.org/wiki/kapats"',},
{word: 'vägskyltar', link: '<a class="wikilink" title=road signs"href="https://sv.wiktionary.org/wiki/vägskyltar"',},
{word: 'skräpade ner', link: '<a class="wikilink" title=littered"href="https://sv.wiktionary.org/wiki/skräpade ner"',},
{word: 'nedstägning', link: '<a class="wikilink" title=descent"href="https://sv.wiktionary.org/wiki/nedstägning"',},
{word: 'hör av sig', link: '<a class="wikilink" title=get in touch"href="https://sv.wiktionary.org/wiki/hör av sig"',},
{word: 'lockar', link: '<a class="wikilink" title=attracts"href="https://sv.wiktionary.org/wiki/lockar"',},
{word: 'nog', link: '<a class="wikilink" title=yet"href="https://sv.wiktionary.org/wiki/nog"',},
{word: 'upprorsmakarna', link: '<a class="wikilink" title=the rebels"href="https://sv.wiktionary.org/wiki/upprorsmakarna"',},
{word: 'kravaller', link: '<a class="wikilink" title=riots"href="https://sv.wiktionary.org/wiki/kravaller"',},
{word: 'upploppen', link: '<a class="wikilink" title=the riots"href="https://sv.wiktionary.org/wiki/upploppen"',},
{word: 'budskapet', link: '<a class="wikilink" title=the message"href="https://sv.wiktionary.org/wiki/budskapet"',},
{word: 'hästrasen', link: '<a class="wikilink" title=the horse breed"href="https://sv.wiktionary.org/wiki/hästrasen"',},
{word: 'emellanåt', link: '<a class="wikilink" title=occasionally"href="https://sv.wiktionary.org/wiki/emellanåt"',},
{word: 'bidrar till', link: '<a class="wikilink" title=contributes to"href="https://sv.wiktionary.org/wiki/bidrar till"',},
{word: 'splittrad', link: '<a class="wikilink" title=split"href="https://sv.wiktionary.org/wiki/splittrad"',},
{word: 'förmyndare', link: '<a class="wikilink" title=Guardian"href="https://sv.wiktionary.org/wiki/förmyndare"',},
{word: 'glesbygdskommuners', link: '<a class="wikilink" title=sparsely populated municipalities"href="https://sv.wiktionary.org/wiki/glesbygdskommuners"',},
{word: 'förebyggas', link: '<a class="wikilink" title=preventable"href="https://sv.wiktionary.org/wiki/förebyggas"',},
{word: 'mättande', link: '<a class="wikilink" title=saturating"href="https://sv.wiktionary.org/wiki/mättande"',},
{word: 'Husmanskost', link: '<a class="wikilink" title=Home cooking"href="https://sv.wiktionary.org/wiki/Husmanskost"',},
{word: 'svält', link: '<a class="wikilink" title=starvation"href="https://sv.wiktionary.org/wiki/svält"',},
{word: 'återinför', link: '<a class="wikilink" title=reintroduce"href="https://sv.wiktionary.org/wiki/återinför"',},
{word: 'utsträckning', link: '<a class="wikilink" title=extent"href="https://sv.wiktionary.org/wiki/utsträckning"',},
{word: 'oavsett', link: '<a class="wikilink" title=regardless"href="https://sv.wiktionary.org/wiki/oavsett"',},
{word: 'oerhört', link: '<a class="wikilink" title=extremely"href="https://sv.wiktionary.org/wiki/oerhört"',},
{word: 'känslosamt', link: '<a class="wikilink" title=emotionally"href="https://sv.wiktionary.org/wiki/känslosamt"',},
{word: 'brytkraften', link: '<a class="wikilink" title=breaking force"href="https://sv.wiktionary.org/wiki/brytkraften"',},
{word: 'invigd', link: '<a class="wikilink" title=consecrated"href="https://sv.wiktionary.org/wiki/invigd"',},
{word: 'avgångar', link: '<a class="wikilink" title=Departures"href="https://sv.wiktionary.org/wiki/avgångar"',},
{word: 'långsiktiga', link: '<a class="wikilink" title=long-term"href="https://sv.wiktionary.org/wiki/långsiktiga"',},
{word: 'mörkertal', link: '<a class="wikilink" title=dark numbers"href="https://sv.wiktionary.org/wiki/mörkertal"',},
{word: 'avvärja', link: '<a class="wikilink" title=ward off"href="https://sv.wiktionary.org/wiki/avvärja"',},
{word: 'följder', link: '<a class="wikilink" title=consequences"href="https://sv.wiktionary.org/wiki/följder"',},
{word: 'annekterade', link: '<a class="wikilink" title=annexed"href="https://sv.wiktionary.org/wiki/annekterade"',},
{word: 'rättfärdiga', link: '<a class="wikilink" title=justify"href="https://sv.wiktionary.org/wiki/rättfärdiga"',},
{word: 'tydliggjort', link: '<a class="wikilink" title=clarified"href="https://sv.wiktionary.org/wiki/tydliggjort"',},
{word: 'farhågor', link: '<a class="wikilink" title=fears"href="https://sv.wiktionary.org/wiki/farhågor"',},
{word: 'människoarter', link: '<a class="wikilink" title=human species"href="https://sv.wiktionary.org/wiki/människoarter"',},
{word: 'ofredande', link: '<a class="wikilink" title=molestation"href="https://sv.wiktionary.org/wiki/ofredande"',},
{word: 'redovisat', link: '<a class="wikilink" title=reported"href="https://sv.wiktionary.org/wiki/redovisat"',},
{word: 'hederlig', link: '<a class="wikilink" title=honest"href="https://sv.wiktionary.org/wiki/hederlig"',},
{word: 'ta in', link: '<a class="wikilink" title=ta in"href="https://sv.wiktionary.org/wiki/ta in"',},
{word: 'reningsverk', link: '<a class="wikilink" title=treatment plant"href="https://sv.wiktionary.org/wiki/reningsverk"',},
{word: 'snurrar', link: '<a class="wikilink" title=spins"href="https://sv.wiktionary.org/wiki/snurrar"',},
{word: 'slags', link: '<a class="wikilink" title=kind of"href="https://sv.wiktionary.org/wiki/slags"',},
{word: 'elledningar', link: '<a class="wikilink" title=power lines"href="https://sv.wiktionary.org/wiki/elledningar"',},
{word: 'förtryck', link: '<a class="wikilink" title=oppression"href="https://sv.wiktionary.org/wiki/förtryck"',},
{word: 'könsstympning', link: '<a class="wikilink" title=genital mutilation"href="https://sv.wiktionary.org/wiki/könsstympning"',},
{word: 'backen', link: '<a class="wikilink" title=to bake"href="https://sv.wiktionary.org/wiki/backen"',},
{word: 'klär ut sig', link: '<a class="wikilink" title=dresses up"href="https://sv.wiktionary.org/wiki/klär ut sig"',},
{word: 'retad', link: '<a class="wikilink" title=retad"href="https://sv.wiktionary.org/wiki/retad"',},
{word: 'kikar', link: '<a class="wikilink" title=kikar"href="https://sv.wiktionary.org/wiki/kikar"',},
{word: 'Efter ett tag', link: '<a class="wikilink" title=After a while"href="https://sv.wiktionary.org/wiki/Efter ett tag"',},
{word: 'fartyg', link: '<a class="wikilink" title=Ship"href="https://sv.wiktionary.org/wiki/fartyg"',},
{word: 'lastat', link: '<a class="wikilink" title=loaded"href="https://sv.wiktionary.org/wiki/lastat"',},
{word: 'förebyggande', link: '<a class="wikilink" title=prevention"href="https://sv.wiktionary.org/wiki/förebyggande"',},
{word: 'lasta', link: '<a class="wikilink" title=last"href="https://sv.wiktionary.org/wiki/lasta"',},
{word: 'rättare sagt', link: '<a class="wikilink" title=rather"href="https://sv.wiktionary.org/wiki/rättare sagt"',},
{word: 'rederiet', link: '<a class="wikilink" title=the shipping company"href="https://sv.wiktionary.org/wiki/rederiet"',},
{word: 'strängare', link: '<a class="wikilink" title=stricter"href="https://sv.wiktionary.org/wiki/strängare"',},
{word: 'prosit', link: '<a class="wikilink" title=asks"href="https://sv.wiktionary.org/wiki/prosit"',},
{word: 'hyllades', link: '<a class="wikilink" title=praised"href="https://sv.wiktionary.org/wiki/hyllades"',},
{word: 'brandkåren', link: '<a class="wikilink" title=the fire brigade"href="https://sv.wiktionary.org/wiki/brandkåren"',},
{word: 'Värnpliktiga', link: '<a class="wikilink" title=Conscripts"href="https://sv.wiktionary.org/wiki/Värnpliktiga"',},
{word: 'tyngdlyftning', link: '<a class="wikilink" title=weightlifting"href="https://sv.wiktionary.org/wiki/tyngdlyftning"',},
{word: 'vibrerar', link: '<a class="wikilink" title=vibrates"href="https://sv.wiktionary.org/wiki/vibrerar"',},
{word: 'folkrika', link: '<a class="wikilink" title=folkrika"href="https://sv.wiktionary.org/wiki/folkrika"',},
{word: 'föremål', link: '<a class="wikilink" title=subject"href="https://sv.wiktionary.org/wiki/föremål"',},
{word: 'varit med om', link: '<a class="wikilink" title=been through"href="https://sv.wiktionary.org/wiki/varit med om"',},
{word: 'smällare', link: '<a class="wikilink" title=firecracker"href="https://sv.wiktionary.org/wiki/smällare"',},
{word: 'slänga', link: '<a class="wikilink" title=throw"href="https://sv.wiktionary.org/wiki/slänga"',},
{word: 'lindriga', link: '<a class="wikilink" title=mild"href="https://sv.wiktionary.org/wiki/lindriga"',},
{word: 'brevlådorna', link: '<a class="wikilink" title=the mailboxes"href="https://sv.wiktionary.org/wiki/brevlådorna"',},
{word: 'troligen', link: '<a class="wikilink" title="probably" href="https://sv.wiktionary.org/wiki/troligen”',},
{word: 'vårdskuld', link: '<a class="wikilink" title="care debt" href="https://sv.wiktionary.org/wiki/vårdskuld”',},
{word: 'bivax', link: '<a class="wikilink" title="beeswax" href="https://sv.wiktionary.org/wiki/bivax”',},];