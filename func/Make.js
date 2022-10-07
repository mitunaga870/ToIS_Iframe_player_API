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
    target.tagName = "iframe";
}