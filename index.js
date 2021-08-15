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

function update(dt) {
  ball.pos.x += ball.vel.x + dt;
  ball.pos.y += ball.vel.y + dt;

  context.fillStyle = "#000";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#fff";
  context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
}
