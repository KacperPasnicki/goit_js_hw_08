!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",throttle((function(e){e.duration,e.percent,e.seconds;localStorage.setItem("videoplayer-current-time","${seconds}")}),1e3));var n=localStorage.getItem("videoplayer-current-time");t.setCurrentTime(n).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.30cfbc6f.js.map
