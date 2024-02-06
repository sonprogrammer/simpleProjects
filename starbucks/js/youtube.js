// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
   new YT.Player('player', {
    videoId: 'u3ybWiEUaUU', //재생할 유튜브 영상 id값
    playerVars: {
        autoplay: true, //자동재생 여부
        loop: true, //반복 재생 유무
        playlist: 'u3ybWiEUaUU' //반복 재생할 유튜브 영상 id목록
    },
    events:{
        onReady: function(e) {
            e.target.mute(); //음소거
        }
    }
  });
}
