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
            'x': 70,
            'y': h / 2 - 65,
            'r': 7,
            'color': '#cde1f5',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': 12,
            'y': h / 2 - 35,
            'r': 6,
            'color': '#e2f3f9',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': 20,
            'y': 115,
            'r': 7,
            'color': '#dfe9f7',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': 110,
            'y': 40,
            'r': 6,
            'color': '#ddebf8',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w / 2 - 10,
            'y': 10,
            'r': 6,
            'color': '#e0e9f6',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w / 2 - 20,
            'y': 60,
            'r': 10,
            'color': '#95c5e9',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w / 2 + 60,
            'y': 55,
            'r': 10,
            'color': '#6bbcf0',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w / 2 + 70,
            'y': 30,
            'r': 6,
            'color': '#cedff3',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w / 2 + 150,
            'y': 10,
            'r': 6,
            'color': '#e0e9f6',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w / 2 + 120,
            'y': 110,
            'r': 9,
            'color': '#cbe2f6',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w / 2 + 160,
            'y': 130,
            'r': 7,
            'color': '#cae3f6',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w / 2 + 160,
            'y': 170,
            'r': 7,
            'color': '#8cceea',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },

        {
            'x': w / 2 + 120,
            'y': h / 2 + 160,
            'r': 8,
            'color': '#cedff3',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w - 20,
            'y': h / 2 + 110,
            'r': 6,
            'color': '#daeff9',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w / 2 + 50,
            'y': h / 2 + 170,
            'r': 8,
            'color': '#cedff3',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w / 2 + 50,
            'y': h - 20,
            'r': 6,
            'color': '#dcecf9',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w - 50,
            'y': h - 40,
            'r': 6,
            'color': '#dcecf9',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },

        {
            'x': w / 2 - 20,
            'y': h - 35,
            'r': 6,
            'color': '#deeaf7',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w / 2 - 100,
            'y': h / 2 + 180,
            'r': 6,
            'color': '#cee0f4',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w / 2 - 150,
            'y': h / 2 + 140,
            'r': 7,
            'color': '#9ac2e7',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w / 2 - 140,
            'y': h - 30,
            'r': 6,
            'color': '#daeefa',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },
        {
            'x': w / 2 - 180,
            'y': h / 2 + 100,
            'r': 8,
            'color': '#daeefa',
            'xv': Math.random() * 4 - 2,
            'yv': Math.random() * 4 - 2,
        },

    ]
}

const throttle = (func, limit) => {
    let lastFunc
    let lastRan
    return function () {
        const context = this
        const args = arguments
        if (!lastRan) {
            func.apply(context, args)
            lastRan = Date.now()
        } else {
            clearTimeout(lastFunc)
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args)
                    lastRan = Date.now()
                }
            }, limit - (Date.now() - lastRan))
        }
    }
}

// Variables
particles = [];
maxParticles = 20;

// animating vars
var pct = 0;
var startX, startY, endX, endY, dx, dy;

// Once this function is called it will push Objects with multiple Properties into the particles Array
function createParticles() {
    particles = [];
    // Push Particle Objects into the array
    for (var i = 0; i < maxParticles; i++) {
        particles.push({
            x: particlesData[i].x,
            y: particlesData[i].y,
            xv: particlesData[i].xv, // X-Velocity
            yv: particlesData[i].yv // Y-Velocity
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
    ctx.fillStyle = "rgba(239, 246, 253,1)";
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

        ctx.beginPath();
        ctx.arc(canvasSizes.width / 2, canvasSizes.height / 2, 150, 0, 2 * Math.PI);
        ctx.strokeStyle = "#8dc9ea";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fillStyle = "rgba(239, 246, 253,1)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(canvasSizes.width / 2, canvasSizes.height / 2, 40, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "#95bce4";
        ctx.fill();

    }

}


function move() {
    for (var i = 0; i < particles.length; i++) {
        // Move each Particle by its very own Speed Factor
        particles[i].x += particles[i].xv;
        particles[i].y += particles[i].yv;
    }
}

function moveFinal() {
    pct++;
    if (pct < 500) {
        for (var i = 0; i < particles.length; i++) {

            dx = w / 2 - particles[i].x;
            dy = h / 2 - particles[i].y;

            speedFactor = 200;

            // update
            particles[i].x +=  dx/speedFactor  ;
            particles[i].y +=  dy/speedFactor  ;
        }
    }
}


// move and draw will be executed 60 times per second
function render() {
    move();
    draw();
    collision();
    if (continueAnimating === false) { return; };
    requestAnimationFrame(render);
}


// move and draw will be executed 60 times per second
function renderToCenter() {
    moveFinal();
    drawFinal();
    if(stopFinalAnimation === true) { return; }
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

var done = false;
function run_once(f) {
    return function () {
        if (!done) {
            done = true;
            return f.apply(this, arguments);
        }
    };
}


var whenHoverOnCenter = run_once(function () {
    continueAnimating = false;
    stopFinalAnimation = false;
    pct = 0;
    renderToCenter();
});


canvas.addEventListener('mousemove', throttle(function (e) {
    // important: correct mouse position:
    var rect = this.getBoundingClientRect(),
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;

    if ((mouseX <= 300 && mouseX >= 200) && (mouseY <= 300 && mouseY >= 200)) {
        whenHoverOnCenter();
    } else {
        if(done === true) {
            startingPosition();
            createParticles();
            continueAnimating = true;
            stopFinalAnimation = true;
            done = false;
            render();
        }
    }

}, 500));



startingPosition();
createParticles();
render();