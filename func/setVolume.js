const main = require('../index');

function setVolume(vol){
    if(vol!=undefined)
        this.player.volume = vol/100;
}

setVolume.bind(main);

module.exports = setVolume;
