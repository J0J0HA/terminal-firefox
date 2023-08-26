const permissionsToRequest = {
    permissions: [],
    origins: ["*://gterminal.is-a.dev/*"]
}

if (typeof browser == "undefined" && typeof chrome != "undefined") {
    var browser = chrome;
}

async function requestPermissions() {
    async function onResponse(response) {
        document.querySelector("#permissions-request").classList.add("hide");
        if (response) {
            document.querySelector("#permissions-rejected").classList.add("hide");
            document.querySelector("#permissions-accepted").classList.remove("hide");
        } else {
            document.querySelector("#permissions-rejected").classList.remove("hide");
        }

        return await browser.permissions.getAll();
    }

    const response = await browser.permissions.request(permissionsToRequest);
    const currentPermissions = await onResponse(response);

    console.log(`Current permissions:`, currentPermissions);
}

function openGTerminal() {
    document.querySelector("#permissions-accepted").classList.add("hide");
    document.querySelector("#redirect-accepted").classList.remove("hide");
    window.location.href = browser.runtime.getURL("/views/terminal/index.html?cmd=help");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#grant-access").addEventListener("click", requestPermissions);
    document.querySelector("#grant-access-retry").addEventListener("click", requestPermissions);
    document.querySelector("#open-gTerminal").addEventListener("click", openGTerminal);
})
