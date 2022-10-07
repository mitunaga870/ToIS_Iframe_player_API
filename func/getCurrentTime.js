const main = require('../index');

function getCurrentTime(){
    return this.player.currentTime;
}

getCurrentTime.bind(main);

module.exports = getCurrentTime;