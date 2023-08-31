const match =
    /^https?:\/\/gterminal\.is-a\.dev(\/(index\.html|(\.github|modules)\/?.*|)|)((\?|#).*)?$/gm;

document.querySelectorAll("a").forEach((element) => {
  console.log(element.href, Boolean(match.exec(element.href)),
              match.exec(element.href))
  if (!match.exec(element.href)) {
    element.onclick = (event) => {
      window.top.postMessage({open : element.href}, "*");
      event.preventDefault();
    }
  }
})

if (typeof gterminal != "undefined") {
  gterminal.web.goto = (href) => { window.top.postMessage({open : href}, "*"); }

                                 gterminal.title.set = (title) => {
    window.top.postMessage({
      set_title : title,
      no_content : document.querySelector("#title").innerText == ""
    },
                           "*");
  };

  if (gterminal.api_version != "1.3") {
    window.top.postMessage({set_title : "Version Mismatch"}, "*");
    window.location.href =
        "https://gterminal.is-a.dev/.github/notice/extension/VERSION_MISMATCH";
  }
}
else {
  console.warn("No gTerminal Instance!");
}