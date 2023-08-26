window.modifyHref = (href) => {
    window.top.postMessage({
        open: href
    }, "*");
};
window.setTitle = (title) => {
    window.top.postMessage({
        set_title: title,
        no_content: document.querySelector("#title").innerText == ""
    }, "*");
};

window.top.postMessage({
    init: true
}, "*");
