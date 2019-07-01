// position and velocity
var rx;
var ry;
var vx;
var vy;

function setup() {
	// drawing setup
 	createCanvas(720, 720);
 	stroke(255);
	strokeWeight(5);
	fill(140);

	// set coordinates and velocity
	rx = width / 2;
	ry = height / 2;
	radius = 40;
	vx = random( -10, 10);
	vy = random( -10, 10);

}

function draw() {
	// refresh
	background(51);

	// update position
	if ((rx + vx > width - radius) || (rx + vx < radius))
		vx = -vx;
	if ((ry + vy > height - radius) || (ry + vy < radius))
		vy = -vy;

	rx += vx;
	ry += vy;

	//draw
	circle(rx, ry, 2 * radius);
}