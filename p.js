function changeImage() {
    var img = document.getElementById("myImage");
    if (img.src.match("4-0")) {
        img.src="5-1.png" // Zëvendëson me një imazh tjetër
    } else {
        img.src = "4-0.png"; // Kthehet në imazhin origjinal
    }
}
