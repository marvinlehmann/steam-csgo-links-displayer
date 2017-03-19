// ==UserScript==
// @name         Steam CS:GO Links Displayer
// @namespace    https://github.com/marvinlehmann/steam-csgo-links-displayer
// @version      1.0
// @description  Adds CSGO Lounge, CSGO Exchange and other CS:GO/trading related profile links to the Steam profile.
// @author       Marvin Lehmann
// @grant        none
// @include      /https?://steamcommunity\.com/id/\w+/?$/
// @include      /https?://steamcommunity\.com/profiles/[0-9]+/?$/
// @require      http://code.jquery.com/jquery-latest.js
// @downloadURL  http://raw.githubusercontent.com/marvinlehmann/steam-csgo-links-displayer/master/steam-csgo-links-displayer.user.js
// @supportURL   http://github.com/marvinlehmann/steam-csgo-links-displayer/issues
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);

$(document).ready(function() {
  document.getElementsByClassName("profile_item_links")[0].innerHTML +=
    '<div class="profile_count_link">' +
      '<a href="http://csgolounge.com/profile?id=' + window.g_rgProfileData["steamid"] + '">' +
        '<span class="count_link_label">CSGO Lounge Profile</span>' +
        '&nbsp;' +
        '<span class="profile_count_link_total"><img src="http://csgolounge.com/favicon.ico" style="width: 16px; height:16px"></span>' +
      '</a>' +
    '</div>' +
    '<div class="profile_count_link">' +
      '<a href="http://csgo.exchange/id/' + window.g_rgProfileData["steamid"] + '">' +
        '<span class="count_link_label">CSGO Exchange Profile</span>' +
        '&nbsp;' +
        '<span class="profile_count_link_total"><img src="http://csgo.exchange/images/favicon.png" style="width: 16px; height:16px"></span>' +
      '</a>' +
    '</div>' +
	'<div class="profile_count_link">' +
      '<a href="http://www.csgozone.net/#check?id=' + window.g_rgProfileData["steamid"] + '">' +
        '<span class="count_link_label">CS:GO Zone Profile</span>' +
        '&nbsp;' +
        '<span class="profile_count_link_total"><img src="http://www.csgozone.net/favicon.png" style="width: 16px; height:16px"></span>' +
      '</a>' +
    '</div>' +
	'<div class="profile_count_link">' +
      '<a href="http://steam.tools/itemvalue/#/' + window.g_rgProfileData["steamid"] + '-730">' +
        '<span class="count_link_label">Steam.Tools Profile</span>' +
        '&nbsp;' +
        '<span class="profile_count_link_total"><img src="http://steam.tools/favicon.ico" style="width: 16px; height:16px"></span>' +
      '</a>' +
    '</div>';
});
