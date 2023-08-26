const page = (window.location.hash.substring(1) || "/");

let platform = "unknown";

let trusted_resource = false;

if (typeof browser == "undefined" && typeof chrome != "undefined") {
    var browser = chrome;
    platform = "chrome";
};

window.onmessage = (event) => {
    if (event.data.init) {
        trusted_resource = true;
    }
    else if (event.data.open) {
        window.location.href = event.data.open;
    }
    else if (event.data.set_title) {
        if (platform == "chrome" && event.data.no_content) {
            document.querySelector("title").innerText = "> " + event.data.set_title;
        } else {
            document.querySelector("title").innerText = event.data.set_title;
        }
    }
};


document.addEventListener("DOMContentLoaded", () => {

    if (page.startsWith("/modules/")) {
        document.body.innerText = "In the future, here should be an install helper. For now, I can only say:\n";
        if (page.endsWith(".js")) {
            document.body.innerText += "This is a module resource.";
        } else if (page.endsWith(".json")) {
            document.body.innerText += "This is a repo resource.";
        } else {
            document.body.innerText += "This is an unknown resource.";
        }
    } else {
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
    }
});
