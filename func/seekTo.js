const main = require("../index");

function child(time){
    this.player.currentTime = time;
}

child.bind(main);

module.exports = child;
