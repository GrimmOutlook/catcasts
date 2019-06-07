// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"
import css from '../css/app.css';

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

window.setTimeout(function() {
    var x = document.getElementsByClassName("alert");
     x[0].style.display = 'none';
     x[1].style.display = 'none';
 }, 3000);
