var y = 0

function setup() {
    createCanvas(400,400);

}

function draw() {
    background("white")
    textSize(20)
    text("Ton score : " + y, 200, 100);
    var button = document.getElementById("boutton2")

    if (y >= 10) {
    button.className = "clique2"
    }  
    
}