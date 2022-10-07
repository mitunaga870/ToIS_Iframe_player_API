function ToIS(){
    this.player = null;
    this.ToIS = true;
}

ToIS.prototype.Make = require('./func/Make');
ToIS.prototype.getCurrentTime = require('./func/getCurrentTime');
ToIS.prototype.setCurrentTime = require('./func/setCurrentTime');
ToIS.prototype.getVolume = require('./func/getVolume');
ToIS.prototype.setVolume = require('./func/setVolume');

module.exports = ToIS;