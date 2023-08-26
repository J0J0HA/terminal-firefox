if ((/^https?:\/\/gterminal\.is-a\.dev(\/(index\.html|(modules)\/?.*|)|)((\?|#).*)?$/gm).exec(window.location.toString())) {
    window.location.replace((chrome || browser).runtime.getURL("/views/terminal/index.html") + "#" + window.location.pathname + window.location.search);
}
