// Canvas Setup
var canvas = document.querySelector('#particles');
var ctx = canvas.getContext("2d");

// w and h are Vars corresponding to the Window Size
w = ctx.canvas.width = 500;
h = ctx.canvas.height = 500;

// adjust w,h and canvas when window is resized
window.onresize = function () {
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
};

// Variables
particles = [];
maxParticles = 30;
radius = 7;

// Once this function is called it will push Objects with multiple Properties into the particles Array
function createParticles() {
    // Push Particle Objects into the array
    for (var i = 0; i < maxParticles; i++) {
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

function collision() {
    for (var i = 0; i < particles.length; i++) {
        // Detect Collision with the Canvas Borders
        // IF particle X Position is smaller then 0 (left border) OR bigger then Window-Width invert the Velocity
        if (particles[i].x < 0 + radius || particles[i].x + radius > w) {
            particles[i].xv = -particles[i].xv;
            // Because we invert only the Velocity of the Axis the Particle hits, we dont need to calculate the new direction
        }
        // Same for the Y-Axis
        if (particles[i].y - radius < 0 || particles[i].y + radius > h) {
            particles[i].yv = -particles[i].yv;
        }
    }
}

createParticles();
render();