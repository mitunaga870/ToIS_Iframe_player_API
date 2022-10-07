const main = require('../index');

function getVolume(){
    return this.player.volume;
}

getVolume.bind(main);

module.exports = getVolume;