const main = require('../index');

function Make(targetId,data = {
    videoId: undefined,
    events: {
        'onReady': undefined,
        'onStateChange':undefined
    },
    playerVars: {
        autoplay: false,
        rel: false,
        modestbranding: false,
        html5: false,
        start:undefined
    }
}){
    const target = document.getElementById(targetId);
    const iframe = document.createElement('iframe');
    target.insertAdjacentElement('beforebegin',iframe);
    target.remove();
    iframe.id = targetId;
    iframe.addEventListener('load',data.events.onReady);
    iframe.addEventListener('load',()=>{
        this.player = iframe.contentWindow.document.getElementById('stream');
        this.player.addEventListener('ended',()=>{
            const event = {
                data: 0
            }
            data.events.onStateChange(event);
        });
    });
    let src = "http://tois-systems.net/embed/video/?id="+data.videoId;
    if (data.playerVars.autoplay)
        src += "&autoplay=1";
    if (data.playerVars.start)
        src += "&start=data.playerVars.start";
    iframe.src = src;
}

Make.bind(main);

module.exports = Make;