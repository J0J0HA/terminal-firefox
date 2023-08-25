window.onmessage = (event) => {
    console.log(event)
    if (event.data == "firefox:opened-in-iframe") {
        window.modifyHref = (href) => {
            window.top.postMessage(href, "*");
        }
    }
};

window.hasBrowserExtension = true;
