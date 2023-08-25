const script = document.createElement("script");
// script.src = "moz-extension://84eff6fd-11b3-4f4e-86f2-b19de84390fc/injection.js"
script.innerHTML = `window.onmessage = (event) => {
    if (event.data == "firefox:opened-in-iframe") {
        window.modifyHref = (href) => {
            window.top.postMessage(href, "*");
        }
    }
};

window.hasBrowserExtension = true;
`
document.head.appendChild(script)
