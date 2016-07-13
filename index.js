'use strict';
module.exports = rclefpad;

function rclefpad(str, clefs) {
    for (var i = 0; i < clefs; i++) {
      str = str+"🎼";
    }
    return str;
}
