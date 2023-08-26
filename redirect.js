if ((/^https?:\/\/gterminal\.is-a\.dev(\/(index\.html|(\.github|modules)\/?.*|)|)((\?|#).*)?$/gm).exec(window.location.toString())) {
    window.location.href = (chrome || browser).runtime.getURL("/views/terminal/index.html") + "#" + window.location.pathname + window.location.search;
}
