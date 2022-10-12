const main = require('../index');

function setCurrentTime(ms){
    this.player.currentTime = ms*1000;
}

setCurrentTime.bind(main);

module.exports = setCurrentTime;
