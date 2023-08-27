const match = /^https?:\/\/gterminal\.is-a\.dev(\/(index\.html|(\.github|modules)\/?.*|)|)((\?|#).*)?$/gm;

if (match.exec(window.location.toString())) {
    window.location.replace((chrome || browser).runtime.getURL("/views/terminal/index.html") + "#" + window.location.pathname + window.location.search);
}
