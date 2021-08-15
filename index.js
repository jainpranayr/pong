class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Rect {
  constructor(w, h) {
    this.pos = new Vector();
    this.size = new Vector(w, h);
  }
}

class Ball extends Rect {
  constructor() {
    super(10, 10);
    this.vel = new Vector();
  }
}

const canvas = document.querySelector("#pong");
const context = canvas.getContext("2d");

const ball = new Ball();
ball.pos.x = 100;
ball.pos.y = 50;
ball.vel.x = 100;
ball.vel.y = 100;

let lastTime;
function callback(ms) {
  if (lastTime) {
    update((ms - lastTime) / 1000);
  }
  lastTime = ms;
  requestAnimationFrame(callback);
}

function update(dt) {
  ball.pos.x += ball.vel.x * dt;
  ball.pos.y += ball.vel.y * dt;

  if (ball.pos.x < 0 || ball.pos.x > canvas.width) {
    ball.vel.x = -ball.vel.x;
  }
  if (ball.pos.y < 0 || ball.pos.y > canvas.height) {
    ball.vel.y = -ball.vel.y;
  }

  context.fillStyle = "#000";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#fff";
  context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
}

callback();

context.fillStyle = "#000";
context.fillRect(0, 0, canvas.width, canvas.height);

context.fillStyle = "#fff";
context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
