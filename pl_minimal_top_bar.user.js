// ==UserScript==
// @name         pl minimal top bar
// @namespace    http://tampermonkey.net/
// @version      0.3
// @author       hyper440
// @match        https://pornolab.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pornolab.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const topmenu = document.querySelector(".topmenu");
    topmenu.style.padding = 0;
    topmenu.style.margin = 0;
    topmenu.style.top = 0;
    topmenu.style.position = "fixed";
    topmenu.style.zIndex = 10;

    const logo = document.getElementById("logo");
    logo.style.display = "none";

    const searchForm = document.getElementById("quick-search");
    const searchBar = document.getElementById("search-text");
    const topmenuTR = document.querySelector(".topmenu table tr");
    const secondChild = topmenuTR.children[2];

    searchBar.style.width = "300px"

    // Creating a new td element
    const newTd = document.createElement("td");

    // Appending "search" inside the new td element
    newTd.appendChild(searchForm);

    // Inserting the new td element before the second child of topmenuTR
    topmenuTR.insertBefore(newTd, secondChild);
})();
