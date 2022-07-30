const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",throttle((({duration:e,percent:t,seconds:n})=>{localStorage.setItem("videoplayer-current-time","${seconds}")}),1e3));const n=localStorage.getItem("videoplayer-current-time");t.setCurrentTime(n).then((function(e){})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.27418fe7.js.map
