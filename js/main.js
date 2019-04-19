// Canvas Setup
var canvas = document.querySelector('#particles');
var ctx = canvas.getContext("2d");

var canvasSizes = {
    'width': 500,
    'height': 500,
}

// w and h are Vars corresponding to the Window Size
w = ctx.canvas.width = canvasSizes.width;
h = ctx.canvas.height = canvasSizes.height;

// Variables
particles = [];
maxParticles = 40;
radius = 10;

// Once this function is called it will push Objects with multiple Properties into the particles Array
function createParticles() {
    // Push Particle Objects into the array
    for (var i = 0; i < maxParticles; i++) {
        var diff = 400; // add 1 if inclusive
        particles.push({
            x: Math.random() * ((w + radius) - radius) + radius, //Random Position between 0 and w(canvas-width)
            y: Math.random() * ((h + radius) - radius) + radius, // Same here for height
            xv: Math.random() * 2 - 1, // X-Velocity
            yv: Math.random() * 2 - 1 // Y-Velocity
        });
    }
}

function draw() {
    // Clear the Canvas before we render the next image
    ctx.clearRect(0, 0, w, h);
    // Keep in mind this function is called 60x per second

    // Loop each particle
    for (var i = 0; i < particles.length; i++) {
        ctx.beginPath();
        // Use the X-Position to Color the Particle
        ctx.fillStyle = "hsla(0 , 0%, 100%, 1)";
        // arc parameters: X-Pos, Y,Pos, Radius, Angle(2*PI = 360°)
        ctx.arc(particles[i].x, particles[i].y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    ctx.beginPath();
    ctx.arc(canvasSizes.width/2, canvasSizes.height/2, 150, 0, 2 * Math.PI);
    ctx.strokeStyle = "#8dc9ea";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "#eff6fd";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(canvasSizes.width/2, canvasSizes.height/2, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#95bce4";
    ctx.fill();
}

function move() {
    for (var i = 0; i < particles.length; i++) {
        // Move each Particle by its very own Speed Factor
        particles[i].x += particles[i].xv;
        particles[i].y += particles[i].yv;
    }
}

// move and draw will be executed 60 times per second
function render() {
    move();
    draw();
    collision();
    requestAnimationFrame(render);
}

var circle1 = { radius: 150, x: 150, y: 150 };
var circle2 = { radius: 12, x: 10, y: 5 };

var dx = circle1.x - circle2.x;
var dy = circle1.y - circle2.y;
var distance = Math.sqrt(dx * dx + dy * dy);

if (distance < circle1.radius + circle2.radius) {
    // collision detected!
}

function collision() {
    for (var i = 0; i < particles.length; i++) {

        // Detect Collision with the Canvas Borders
        // IF particle X Position is smaller then 0 (left border) OR bigger then Window-Width invert the Velocity
        if (particles[i].x < 0 + radius || particles[i].x + radius > w) {
            particles[i].xv = -particles[i].xv;
            // Because we invert only the Velocity of the Axis the Particle hits, we dont need to calculate the new direction
        }

        if (Math.sqrt((canvasSizes.width/2 - particles[i].x) * (canvasSizes.width/2 - particles[i].x) + (canvasSizes.width/2- particles[i].y) * (canvasSizes.width/2- particles[i].y)) < 150 + 7) {
            particles[i].xv = -particles[i].xv;
            particles[i].yv = -particles[i].yv;
        }
        // Same for the Y-Axis
        if (particles[i].y - radius < 0 || particles[i].y + radius > h) {
            particles[i].yv = -particles[i].yv;
        }
    }
}

createParticles();
render();