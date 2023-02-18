var menuOpen = false;
document.body.classList.add('no-scroll');

window.onload = function() {
    document.getElementById("loader").style.display = "none";
    document.body.classList.add("loaded");
    document.body.classList.remove('no-scroll');
};

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