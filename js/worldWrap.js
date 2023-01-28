
//creating canvas for circle
function setup() {
    createCanvas (800, 600);
}
//setting the circle's starting point
let x = 50;
let y = 300;

//drawing the circle
function draw() {
    //erasing the circle afterimage
    background(255);
    
    fill(250,0,0);

    circle(x, y, 100, 100);
//moving the circle by 5px each frame
    x = (x + 5);
//wrapping the circle back to the left once it has reached the edge of the canvas
    if (x > 750) {
        x = 50;
    }
}