 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 
 function onYouTubeIframeAPIReady() {
    // <div id="player"></div>
    new YT.Player('player', {
     videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 ID
     playerVars:{          //영상을 재생하기 위한 여러가지 변수들
        autoplay:true,
        loop:true,
        playlist:'An6LvWQuj_8'//loop가 true이면 다시 반복할때 영상의 아이디가 필요하다
     },
     events:{
        onReady:function(event){
            event.target.mute() //음소거
        }
     }
   });
 }