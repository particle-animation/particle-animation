// Canvas Setup
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext("2d");

var canvasSizes = {
    'width': 500,
    'height': 500,
}

var animationContainer = document.querySelector('.particle-animation');

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
            'x': 20,
            'y': 115,
            'r': 7,
            'color': '#dfe9f7',
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
            'x': w / 2 - 150,
            'y': h / 2 + 140,
            'r': 7,
            'color': '#9ac2e7',
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
            'x': w / 2 - 20,
            'y': 60,
            'r': 10,
            'color': '#95c5e9',
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
maxParticles = 10;

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

var alpha = 0;
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

        if(alpha <= 1) {
            alpha += 0.0001 + (i/10000);
        }
        ctx.globalAlpha = alpha;
    }


}

var cellX = canvasSizes.width / 2;
var cellY = canvasSizes.height / 2;

var innerCellX = canvasSizes.width / 2;
var innerCellY = canvasSizes.height / 2;


function drawFinal() {
    // Clear the Canvas before we render the next image
    ctx.clearRect(0, 0, w, h);
    // Keep in mind this function is called 60x per second

    // Loop each particle
    for (var i = 0; i < particles.length; i++) {
        ctx.beginPath();
        if (Math.sqrt((canvasSizes.width / 2 - particles[i].x) * (canvasSizes.width / 2 - particles[i].x) + (canvasSizes.width / 2 - particles[i].y) * (canvasSizes.width / 2 - particles[i].y)) < 150 + particlesData[i].r) {
            ctx.fillStyle = "#4694E2";
            alpha = 1;
        } else {
            ctx.fillStyle = particlesData[i].color;
        }
        // arc parameters: X-Pos, Y,Pos, Radius, Angle(2*PI = 360°)
        ctx.arc(particles[i].x, particles[i].y, particlesData[i].r, 0, Math.PI * 2);
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

function moveFinal() {
    pct++;
    if (pct < 400) {
        for (var i = 0; i < particles.length; i++) {

            dx = w / 2 - particles[i].x;
            dy = h / 2 - particles[i].y;

            speedFactor = 50 * ((i+1)/5);

            // update
            particles[i].x += dx / speedFactor;
            particles[i].y +=  dy / speedFactor  ;
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

var animationToCenter;

var whenHoverOnCenter = run_once(function () {
    continueAnimating = false;
    stopFinalAnimation = false;
    animationToCenter = true;
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
        if (animationToCenter == true) {
            done = false;
            continueAnimating = true;
            stopFinalAnimation = true;
            animationToCenter = false;
            alpha = 0;
            startingPosition();
            createParticles();
            render();
        }
    }

}, 500));


startingPosition();
createParticles();
render();

var two = new Two({
    type: Two.Types.svg,
    width: 500,
    height: 500,
}).appendTo(animationContainer);

var mass = 300;
var radius = 110;
var strength = 0.1;
var drag = 0.05;

var background = two.makeGroup();
var foreground = two.makeGroup();

var physics = new Physics();
var points = [];
var i = 0;

for (i = 0; i < Two.Resolution; i++) {

    var pct = i / Two.Resolution;
    var theta = pct * Math.PI * 2;

    var ax = radius * Math.cos(theta);
    var ay = radius * Math.sin(theta);

    var variance = Math.random() * 0.5 + 0.5;
    var bx = 0.96 * ax;
    var by = 0.94 * ay;

    var origin = physics.makeParticle(mass, ax, ay)
    var particle = physics.makeParticle(Math.random() * mass * 0.33 + mass * 0.33, bx, by);
    var spring = physics.makeSpring(particle, origin, strength, drag, 0);

    origin.makeFixed();

    particle.shape = two.makeCircle(particle.position.x, particle.position.y, 5);
    particle.shape.noStroke().fill = '#fff';
    particle.position = particle.shape.translation;

    foreground.add(particle.shape)
    points.push(particle.position);

}

var radius = 90;
var stops = [
    new Two.Stop(0, 'rgba(193, 221, 249, 1)'),
    new Two.Stop(2, 'rgba(193, 221, 249, 0)')
];

var outer = new Two.Path(points, true, true);
var color = '#eff6fd';
outer.stroke = '#4694E2';
outer.fill = new Two.RadialGradient(0, 0, radius, stops);
outer.scale = 1.4;
outer.linewidth = 3;

background.add(outer);

var inner = new Two.Path(points, true, true);
inner.noStroke();
inner.fill = '#4694E2';
inner.scale = 0.35;

background.add(inner);

resize();

function resize() {
    background.translation.set(two.width / 2, two.height / 2);
    foreground.translation.copy(background.translation);
}

 two
     .bind('resize', resize)
     .bind('update', function () {
         physics.update();
     })
     .play()