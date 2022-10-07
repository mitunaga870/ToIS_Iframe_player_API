module.exports = (targetId,data = {
    videoId: undefined,
    events: {
        'onReady': undefined
    },
    playerVars: {
        autoplay: undefined,
        rel: undefined,
        enablejsapi: undefined,
        modestbranding: undefined,
        html5: undefined
    }
})=>{
    const target = document.getElementById(targetId);
    const iframe = document.createElement('iframe');
    target.insertAdjacentElement('beforebegin',iframe);
    target.remove();
    iframe.id = targetId;
    let src = "http://tois-systems.net/embed/video/?id="+data.videoId;
    if (data)
}