//listen for changes in the fullscreen mode
document.addEventListener("fullscreenchange", function() {
    //check if the video is in fullscreen mode
    var video = document.querySelector("video");
    if(document.fullscreenElement === video) {
        //check if the video is 4:3 aspect ratio
        var aspectRatio = video.videoWidth / video.videoHeight;
        if(aspectRatio === 4/3) {
            //create and position a new video element below the primary video
            var secondaryVideo = document.createElement("video");
            secondaryVideo.style.width = "100%";
            secondaryVideo.style.height = "100%";
            secondaryVideo.style.position = "absolute";
            secondaryVideo.style.bottom = "0";
            secondaryVideo.style.zIndex = "-1";
            document.body.appendChild(secondaryVideo);
            //set the src of the new video element to the desired secondary video
            secondaryVideo.src = "path/to/secondary/video.mp4";
        }
    } else {
        //remove the secondary video element if fullscreen mode is exited
        var secondaryVideo = document.querySelector("video:last-child");
        if(secondaryVideo) {
            secondaryVideo.remove();
        }
    }
});