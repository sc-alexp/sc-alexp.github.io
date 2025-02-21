let speed = 25;
let scale = 0.4; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;

let layers = [
    { x: 200, y: 300, xspeed: 10, yspeed: 10, img: new Image(), flip: false },
    { x: 200, y: 300, xspeed: 10, yspeed: 10, img: new Image(), flip: false }, // Middle layer
    { x: 200, y: 300, xspeed: 10, yspeed: 10, img: new Image(), flip: false }
];

(function main() {
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    layers[0].img.src = 'layer1.png'; // Image for layer 1
    layers[1].img.src = 'layer2.png'; // Image for layer 2
    layers[2].img.src = 'layer3.png'; // Image for layer 3

    // Draw the "tv screen"
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 76;

    update();
})();

function update() {
    setTimeout(() => {
        // Draw the canvas background (keeping it black/transparent)
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Loop through all layers to draw them
        layers.forEach(layer => {
            if (layer.flip) {
                // Flip the middle layer horizontally
                ctx.save(); // Save the current canvas state
                ctx.scale(-1, 1); // Flip horizontally
                ctx.drawImage(layer.img, -layer.x - layer.img.width * scale, layer.y, layer.img.width * scale, layer.img.height * scale);
                ctx.restore();
            } else {
                // Draw the image normally
                ctx.drawImage(layer.img, layer.x, layer.y, layer.img.width * scale, layer.img.height * scale);
            }

            // Move the logo
            layer.x += layer.xspeed;
            layer.y += layer.yspeed;
        });

        // Check for collision
        checkHitBox();
        update();
    }, speed);
}

// Check for border collision for all layers
function checkHitBox() {
    layers.forEach(layer => {
        if (layer.x + layer.img.width * scale >= canvas.width || layer.x <= 0) {
            layer.xspeed *= -1;

            // Flip only the middle layer (layer2)
            if (layer === layers[1]) {
                layer.flip = !layer.flip;
            }
        }

        if (layer.y + layer.img.height * scale >= canvas.height || layer.y <= 0) {
            layer.yspeed *= -1;
        }
    });
}
