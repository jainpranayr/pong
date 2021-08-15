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

const canvas = document.querySelector("#pong");
const context = canvas.getContext("2d");

context.fillStyle = "#000";
context.fillRect(0, 0, canvas.clientWidth, canvas.height);

context.fillStyle = "#fff";
context.fillRect(0, 0, 10, 10);
