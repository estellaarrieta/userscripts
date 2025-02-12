// ==UserScript==
// @name         pl torrent page tweaks
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       hyper440
// @match        https://pornolab.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pornolab.net
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const torReged = document.getElementById("tor-reged");
  const thanksContainer = document.querySelector(".thx-container");
  const forumline = document.querySelector(".forumline.dl_list");
  const thxForm = document.querySelector(".thx-form");
  const torFilelistBtn = document.getElementById("tor-filelist-btn");
  const spacer_12 = document.querySelector(".sp-open-all.clickable.sp-open-collapsed").nextElementSibling;
  const tCenter = spacer_12?.nextElementSibling;
  const row3TCenter = torReged.querySelector(".row3.tCenter");

  if (row3TCenter && row3TCenter.parentNode.parentNode) {
    row3TCenter.parentNode.parentNode.appendChild(row3TCenter);
  }

  spacer_12.style.display = "none";
  tCenter.style.margin = 0;

  if (torReged && thanksContainer && forumline) {
    const parent = forumline.parentNode;
    parent.insertBefore(torReged, forumline);
    parent.insertBefore(thanksContainer, forumline);
    torReged.style.marginTop = "10px";
  }
  if (thxForm && torFilelistBtn) {
    const parent = torFilelistBtn.parentNode;
    parent.insertBefore(thxForm, torFilelistBtn);
  }
})();
