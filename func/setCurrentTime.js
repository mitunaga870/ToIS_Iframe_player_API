const main = require('../index');

function setCurrentTime(ms){
    this.player.currentTime = ms;
}

setCurrentTime.bind(main);

module.exports = setCurrentTime;