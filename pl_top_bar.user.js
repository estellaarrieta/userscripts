// ==UserScript==
// @name         top bar
// @namespace    http://tampermonkey.net/
// @version      2024-01-28
// @description  try to take over the world!
// @author       You
// @match        https://pornolab.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pornolab.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const search = document.getElementById("quick-search");
    const topmenuTR = document.querySelector(".topmenu table tr");
    const secondChild = topmenuTR.children[2];

    // Creating a new td element
    const newTd = document.createElement("td");

    // Appending "search" inside the new td element
    newTd.appendChild(search);

    // Inserting the new td element before the second child of topmenuTR
    topmenuTR.insertBefore(newTd, secondChild);
})();
