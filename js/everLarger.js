function setup() {
    createCanvas (1280,900);
}
//centering the circle in the window
let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
//setting circle's initial diameter
let diameter = 1
//drawing the circle
function draw() {
    background(255);

    fill(250,0,0);

    circle(x, y, diameter);
    //diameter increases by 1px each frame
    diameter = diameter + 1;
    //if diameter excedes 200, resets back to 1
    if (diameter > 201) {
        diameter = 1
    }
}