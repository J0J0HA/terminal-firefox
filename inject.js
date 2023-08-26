const script = document.createElement("script");
script.innerHTML = `
window.modifyHref = (href) => {
    window.top.postMessage({open:href}, "*");
};
window.setTitle = (title) => {
    window.top.postMessage({set_title:title}, "*");
};
`
document.addEventListener("load", () => {
    document.head.appendChild(script);
})
