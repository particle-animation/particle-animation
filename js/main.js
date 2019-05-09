// Canvas Setup
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext("2d");

var canvasSizes = {
    'width': 500,
    'height': 500,
}

// create a flag controlling if the animation will continue or stop
var continueAnimating = true;
var stopFinalAnimation;

// w and h are Vars corresponding to the Window Size
w = ctx.canvas.width = canvasSizes.width;
h = ctx.canvas.height = canvasSizes.height;

var particlesData = [];

function startingPosition() {
    particlesData = [
        {
            'x': 100,
            'y': 130,
            'r': 9,
            'color': '#cee0f4'
        },
        {
            'x': 40,
            'y': h / 2 - 30,
            'r': 9,
            'color': '#8ccfea'
        },
        {
            'x': 70,
            'y': h / 2 - 65,
            'r': 7,
            'color': '#cde1f5'
        },
        {
            'x': 12,
            'y': h / 2 - 35,
            'r': 6,
            'color': '#e2f3f9'
        },
        {
            'x': 20,
            'y': 115,
            'r': 7,
            'color': '#dfe9f7'
        },
        {
            'x': 110,
            'y': 40,
            'r': 6,
            'color': '#ddebf8'
        },
        {
            'x': w / 2 - 10,
            'y': 10,
            'r': 6,
            'color': '#e0e9f6'
        },
        {
            'x': w / 2 - 20,
            'y': 60,
            'r': 10,
            'color': '#95c5e9'
        },
        {
            'x': w / 2 + 60,
            'y': 55,
            'r': 10,
            'color': '#6bbcf0'
        },
        {
            'x': w / 2 + 70,
            'y': 30,
            'r': 6,
            'color': '#cedff3'
        },
        {
            'x': w / 2 + 150,
            'y': 10,
            'r': 6,
            'color': '#e0e9f6'
        },
        {
            'x': w / 2 + 120,
            'y': 110,
            'r': 9,
            'color': '#cbe2f6'
        },
        {
            'x': w / 2 + 160,
            'y': 130,
            'r': 7,
            'color': '#cae3f6'
        },
        {
            'x': w / 2 + 160,
            'y': 170,
            'r': 7,
            'color': '#8cceea'
        },
        {
            'x': w / 2 + 180,
            'y': 60,
            'r': 5,
            'color': '#e0e9f6'
        },
        {
            'x': w / 2 + 150,
            'y': h / 2 + 110,
            'r': 10,
            'color': '#6bbcf0'
        },
        {
            'x': w / 2 + 120,
            'y': h / 2 + 160,
            'r': 8,
            'color': '#cedff3'
        },
        {
            'x': w - 20,
            'y': h / 2 + 110,
            'r': 6,
            'color': '#daeff9'
        },
        {
            'x': w / 2 + 50,
            'y': h / 2 + 170,
            'r': 8,
            'color': '#cedff3'
        },
        {
            'x': w / 2 + 50,
            'y': h - 20,
            'r': 6,
            'color': '#dcecf9'
        },
        {
            'x': w - 50,
            'y': h - 40,
            'r': 6,
            'color': '#dcecf9'
        },
        {
            'x': w / 2 - 50,
            'y': h / 2 + 180,
            'r': 10,
            'color': '#6bbcf0'
        },
        {
            'x': w / 2 - 70,
            'y': h - 30,
            'r': 8,
            'color': '#deeaf7'
        },
        {
            'x': w / 2 - 20,
            'y': h - 35,
            'r': 6,
            'color': '#deeaf7'
        },
        {
            'x': w / 2 - 100,
            'y': h / 2 + 180,
            'r': 6,
            'color': '#cee0f4'
        },
        {
            'x': w / 2 - 150,
            'y': h / 2 + 140,
            'r': 7,
            'color': '#9ac2e7'
        },
        {
            'x': w / 2 - 140,
            'y': h - 30,
            'r': 6,
            'color': '#daeefa'
        },
        {
            'x': w / 2 - 180,
            'y': h / 2 + 100,
            'r': 8,
            'color': '#daeefa'
        },
        {
            'x': 20,
            'y': h / 2 + 130,
            'r': 6,
            'color': '#daeefa'
        },
        {
            'x': 50,
            'y': h - 80,
            'r': 7,
            'color': '#daeefa'
        },
    ]
}

// Variables
particles = [];
maxParticles = 30;

// animating vars
var pct = 0;
var startX, startY, endX, endY, dx, dy;

// Once this function is called it will push Objects with multiple Properties into the particles Array
function createParticles() {
    // Push Particle Objects into the array
    startingPosition();
    for (var i = 0; i < maxParticles; i++) {
        particles.push({
            x: particlesData[i].x,
            y: particlesData[i].y,
            xv: Math.random() * 4 - 2, // X-Velocity
            yv: Math.random() * 4 - 2 // Y-Velocity
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

        ctx.fillStyle = particlesData[i].color;

        // arc parameters: X-Pos, Y,Pos, Radius, Angle(2*PI = 360°)
        ctx.arc(particles[i].x, particles[i].y, particlesData[i].r, 0, Math.PI * 2);
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

function drawFinal() {
    // Clear the Canvas before we render the next image
    ctx.clearRect(0, 0, w, h);
    // Keep in mind this function is called 60x per second

    // Loop each particle
    for (var i = 0; i < particles.length; i++) {
        ctx.beginPath();

        if (Math.sqrt((canvasSizes.width / 2 - particles[i].x) * (canvasSizes.width / 2 - particles[i].x) + (canvasSizes.width / 2 - particles[i].y) * (canvasSizes.width / 2 - particles[i].y)) < 150 + particlesData[i].r) {
            ctx.fillStyle = "#8dc9ea";
        } else {
            ctx.fillStyle = particlesData[i].color;
        }

        // arc parameters: X-Pos, Y,Pos, Radius, Angle(2*PI = 360°)
        ctx.arc(particles[i].x, particles[i].y, particlesData[i].r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

    }

    ctx.beginPath();
    ctx.arc(canvasSizes.width / 2, canvasSizes.height / 2, 150, 0, 2 * Math.PI);
    ctx.strokeStyle = "#8dc9ea";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "#eff6fd";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(canvasSizes.width / 2, canvasSizes.height / 2, 40, 0, 2 * Math.PI);
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

var randomSpeedNumber,randomSpeed;

function moveFinal() {
    pct++;
    if (pct < 120) {
        for (var i = 0; i < particles.length; i++) {

            dx = w / 2 - particles[i].x;
            dy = h / 2 - particles[i].y;

            randomSpeed = i * 5;

            // update
            particles[i].x = particles[i].x + dx/randomSpeed  ;
            particles[i].y = particles[i].y + dy/randomSpeed  ;
        }
    } else {
        stopFinalAnimation = true;
        continueAnimating = true;
        render();
    }
}


// move and draw will be executed 60 times per second
function render() {
    move();
    draw();
    collision();
    if (continueAnimating == false) { return; };
    requestAnimationFrame(render);
}

// move and draw will be executed 60 times per second
function renderToCenter() {
    moveFinal();
    drawFinal();
    if(stopFinalAnimation) { return; };
    requestAnimationFrame(renderToCenter);
}

function collision() {
    for (var i = 0; i < particles.length; i++) {

        // Detect Collision with the Canvas Borders
        // IF particle X Position is smaller then 0 (left border) OR bigger then Window-Width invert the Velocity
        if (particles[i].x < 0 + particlesData[i].r || particles[i].x + particlesData[i].r > w) {
            particles[i].xv = -particles[i].xv;
            // Because we invert only the Velocity of the Axis the Particle hits, we dont need to calculate the new direction
        }

        if (Math.sqrt((canvasSizes.width / 2 - particles[i].x) * (canvasSizes.width / 2 - particles[i].x) + (canvasSizes.width / 2 - particles[i].y) * (canvasSizes.width / 2 - particles[i].y)) < 150 + particlesData[i].r) {
            particles[i].xv = - particles[i].xv;
            particles[i].yv = - particles[i].yv;
        }
        // Same for the Y-Axis
        if (particles[i].y - particlesData[i].r < 0 || particles[i].y + particlesData[i].r > h) {
            particles[i].yv = -particles[i].yv;
        }
    }
}

canvas.onmousedown = function (e) {

    // important: correct mouse position:
    var rect = this.getBoundingClientRect(),
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;


    if ((mouseX <= 300 && mouseX >= 200) && (mouseY <= 300 && mouseY >= 200) ) {

        continueAnimating = false;


        renderToCenter();

    } else {
        continueAnimating = true;
        render();
    }

};
createParticles();
render();