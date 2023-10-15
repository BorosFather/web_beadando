var movediv = document.getElementById("movediv");
window.onmousemove = function(e) {
    var x = e.pagex;
    var y = e.pagey;

    moveDiv.style.top = (y + - 120) + "px";
    moveDiv.style.top = (x + - 60) + "px";

}