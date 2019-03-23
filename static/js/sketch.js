let stars = [];
nbrStars = 400;
let canvas;
let init = true;
let timeout;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  initStars();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  stars = [];

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    initStars();
  }, 1000);
}

function initStars() {
  stars = [];
  for (let i = 0; i < nbrStars; i++) {
    stars.push(new Star());
  }
}

class Star {
  constructor() {
    const colors = [
      "rgba(128,185,254,", // #80B9FE
      "rgba(204,0,0,", // #CC0000
      "rgba(248,220,87,", // #F8DC57
      "rgba(28,245,186,", // #1CF5BA
      "rgba(94,33,217,", // #5E21D9
      "rgba(212,65,208,", // #D441D0
      "rgba(128,185,254,", // #80B9FE
      "rgba(245,166,35,", // #F5A623
      "rgba(126,211,33,", // #7ED321
      "rgba(248,231,28," // #F8E71C
    ];

    this.colorAlpha = 0.0;
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(0, width);
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.z = this.z - width / 200;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }
  }

  show() {
    fill(255);
    noStroke();

    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    let r = map(this.z, 0, width, 18, 0);

    if (this.colorAlpha < 1) {
      this.colorAlpha += 0.01;
    }

    let color = this.color + this.colorAlpha + ")";
    fill(color);
    ellipse(sx, sy, r, r);
  }
}

window.document.addEventListener(
  "touchmove",
  function(e) {
    e.preventDefault();
  },
  { passive: false }
);
