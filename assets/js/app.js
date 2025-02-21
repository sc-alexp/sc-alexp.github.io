let speed = 3;
let scale = 0.4;
let canvas;
let ctx;
let logoColor;

let dvd = {
  x: 885,
  y: 325,
  xspeed: 1,
  yspeed: 1,
  img: new Image(),
};

(function main() {
  canvas = document.getElementById("tv-screen");
  ctx = canvas.getContext("2d");
  dvd.img.src = "allen.png";

  // Draw the "tv screen"
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 82.875;

  /* pickColor(); */
  update();
})();

function update() {
  setTimeout(() => {
    // Draw the canvas background (black)
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ========== DRAW THE LOGO WITH A COLORED TINT ==========
    // 1. Save the current canvas state
    ctx.save();

    // 2. Fill an area where the logo will appear with your random color
    /* ctx.fillStyle = logoColor;
    ctx.fillRect(dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale); */

    // 3. Change the globalCompositeOperation so that drawing the image
    //    only keeps the area of the existing fill where the image is opaque.
    ctx.globalCompositeOperation = "destination-in";

    // 4. Now draw the image. This "cuts" the fill to the shape of the image
    ctx.drawImage(
      dvd.img,
      dvd.x,
      dvd.y,
      dvd.img.width * scale,
      dvd.img.height * scale
    );

    // 5. Restore the canvas state for future drawings
    ctx.restore();

    // Move the logo
    dvd.x += dvd.xspeed;
    dvd.y += dvd.yspeed;

    // Check for collision
    checkHitBox();
    update();
  }, speed);
}

function checkHitBox() {
  // Right or left
  if (dvd.x + dvd.img.width * scale >= canvas.width || dvd.x <= 0) {
    dvd.xspeed *= -1;
    pickColor();
  }
  // Top or bottom
  if (dvd.y + dvd.img.height * scale >= canvas.height || dvd.y <= 0) {
    dvd.yspeed *= -1;
    pickColor();
  }
}

// Pick a random color in RGB format
function pickColor() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  logoColor = `rgb(${r}, ${g}, ${b})`;
}
