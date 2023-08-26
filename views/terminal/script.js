const page = (window.location.hash.substring(1) || "/");

if (typeof browser == "undefined" && typeof chrome != "undefined") {
    var browser = chrome;
};

window.onmessage = (event) => {
    console.log(event.data)
    if (event.data.open) {
        window.location.href = event.data.open;
    }
    else if (event.data.set_title) {
        document.querySelector("title").innerText = event.data.set_title;
    }
};


document.addEventListener("DOMContentLoaded", () => {
    (async () => {
        const permissions = await browser.permissions.getAll();
        if (permissions.origins.indexOf("*://gterminal.is-a.dev/*")) {
            window.location.href = browser.runtime.getURL("/views/install/index.html");
        } else {
            const iframe = document.createElement("iframe");
            iframe.src = "https://gterminal.is-a.dev" + page;
            document.body.appendChild(iframe);
        };
    })();
});
