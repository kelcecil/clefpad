'use strict';
module.exports = clefpad;

function clefpad(str, clefs) {
    for (var i = 0; i < clefs; i++) {
      str = "🎼"+str+"🎼";
    }
    return str;
}
