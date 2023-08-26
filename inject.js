if (typeof browser == "undefined" && typeof chrome != "undefined") {
    var browser = chrome;
};

const script = document.createElement("script");
script.src = browser.runtime.getURL("modifications.js");
document.head.appendChild(script);
