window.onmessage = (event) => {
    document.querySelector("iframe").contentWindow.location.href = window.location.href;
    document.querySelector("iframe").contentWindow.location.href = "pleasewait.html";
    window.location.href = event.data;
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("iframe").addEventListener("load", () => {
        document.querySelector("iframe").contentWindow.postMessage('firefox:opened-in-iframe', '*');
    })
})
