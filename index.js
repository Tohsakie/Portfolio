var menuOpen = false;
document.body.classList.add('no-scroll');

window.onload = function() {
    document.getElementById("loader").style.display = "none";
    document.body.classList.add("loaded");
    document.body.classList.remove('no-scroll');
};

videoOnIos();

function videoOnIos(){
    var isSafariiOS = /iP(ad|hone|od).+Version\/[\d\.]+.*Safari/i.test(navigator.userAgent);
    var videoSrc;

    if (isSafariiOS) {
        videoSrc = 'images/cloud.mp4';
    } else {
        videoSrc = 'images/cloud.webm';
    }

    var video = document.getElementById('myVideo');
    var source = video.getElementsByTagName('source')[0];
    source.setAttribute('src', videoSrc);
    video.load();
}

function visibilityMenu(){
    if (window.matchMedia("(max-width: 1250px)").matches) {
        if(menuOpen){
            document.getElementById("textButton").innerText = "☰";
            document.getElementById("contentMenu").style.display = "none";
            document.getElementById("backMenu").style.display = "none";
            document.body.style.overflow = "visible";
            menuOpen = false;
        } else {
            document.getElementById("textButton").innerText = "X";
            document.getElementById("contentMenu").style.display = "block";
            document.getElementById("backMenu").style.display = "block";
            document.body.style.overflow = "hidden";
            menuOpen = true;
        }

    }
}