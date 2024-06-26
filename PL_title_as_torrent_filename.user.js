// ==UserScript==
// @name         PL use title as torrent filename
// @namespace    http://tampermonkey.net/
// @version      0.3.1
// @description  use title as torrent filename
// @updateURL    https://github.com/estellaarrieta/userscripts/raw/main/PL_title_as_torrent_filename.user.js
// @author       hyper440
// @match        https://pornolab.net/forum/viewtopic.php*
// @match        https://pornolab.net/forum/viewforum.php*
// @match        https://pornolab.net/forum/tracker.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const pageType = getPageType();
    const links = [document.querySelector('.dl-stub.dl-link'), document.querySelector('.dl-stub img').parentNode];

    links.forEach(link => {
        // Remove the original click event
        link.onclick = null;

        // Add a new click event to download the file with the custom filename
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = link.href;
            const topicTitle = getTopicTitle(link, pageType);
            const filteredTopicTitle = topicTitle.replace(/[/\\?%*:|"<>]/g, '-');
            const filename = `${filteredTopicTitle}.torrent`;

            fetch(url)
                .then(response => response.blob())
                .then(blob => {
                    const newLink = document.createElement('a');
                    newLink.href = URL.createObjectURL(blob);
                    newLink.download = filename;
                    newLink.style.display = 'none';
                    document.body.appendChild(newLink);
                    newLink.click();
                    document.body.removeChild(newLink);
                })
                .catch(err => {
                    console.error('Error downloading the file:', err);
                });
        });
    });

    function getPageType() {
        const url = window.location.href;
        if (url.includes('viewtopic.php')) {
            return 'viewtopic';
        } else if (url.includes('viewforum.php')) {
            return 'viewforum';
        } else if (url.includes('tracker.php')) {
            return 'tracker';
        }
        return '';
    }

    function getTopicTitle(link, pageType) {
        let titleElement;
        if (pageType === 'viewtopic') {
            titleElement = document.getElementById('topic-title');
        } else if (pageType === 'viewforum') {
            const rowElement = link.closest('tr');
            titleElement = rowElement.querySelector('.torTopic a.torTopic');
        } else if (pageType === 'tracker') {
            const rowElement = link.closest('tr');
            titleElement = rowElement.querySelector('.tLeft a.med.tLink.bold');
        }

        if (titleElement) {
            const titleText = titleElement.textContent;
            return titleText;
        }

        return '';
    }
})();
