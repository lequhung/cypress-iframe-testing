'use strict';

(() => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://iframetester.com");
    iframe.style.width = "100%";
    iframe.style.height = "700px";

    const container = document.getElementById('iframe-testing');
    container && container.appendChild(iframe);
})();