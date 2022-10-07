const main = require('../index');

function setVolume(vol){
    this.player.volume = vol/100;
}

setVolume.bind(main);

module.exports = setVolume;