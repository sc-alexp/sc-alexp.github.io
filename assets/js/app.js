let speed = 30;
let scale = 0.2; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let logoColor;

let dvd = {
    x: 200,
    y: 300,
    xspeed: 10,
    yspeed: 10,
    img: new Image(),
    flip: false // Flag to track horizontal flip state
};

(function main() {
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    dvd.img.src = 'SCDVD (1).png';

    // Draw the "tv screen"
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 76;

    pickColor();
    update();
})();

function update() {
    setTimeout(() => {
        // Draw the canvas background
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the DVD logo with flipping logic
        ctx.fillStyle = logoColor;
        ctx.fillRect(dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);

        if (dvd.flip) {
            // Draw the image flipped horizontally
            ctx.save(); // Save the current canvas state
            ctx.scale(-1, 1); // Flip horizontally
            ctx.drawImage(dvd.img, -dvd.x - dvd.img.width * scale, dvd.y, dvd.img.width * scale, dvd.img.height * scale);
            ctx.restore();
        } else {
            // Draw the image normally
            ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);
        }

        // Move the logo
        dvd.x += dvd.xspeed;
        dvd.y += dvd.yspeed;

        // Check for collision 
        checkHitBox();
        update();
    }, speed);
}

// Check for border collision
function checkHitBox() {
    if (dvd.x + dvd.img.width * scale >= canvas.width || dvd.x <= 0) {
        dvd.xspeed *= -1;
        dvd.flip = !dvd.flip; // Toggle the flip state when hitting a horizontal edge
        pickColor();
    }

    if (dvd.y + dvd.img.height * scale >= canvas.height || dvd.y <= 0) {
        dvd.yspeed *= -1;
        pickColor();
    }
}

// Pick a random color in RGB format
function pickColor() {
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    logoColor = 'rgb(' + r + ',' + g + ', ' + b + ')';
}
