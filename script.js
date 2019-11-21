var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var posX = 10,
  speedX = 5,
  posY = 10,
  speedY = 7,
  paddleHeight = 10,
  paddleWidth = 75,
  paddleX = (canvas.width - paddleWidth) / 2,
  rightPressed = false,
  leftPressed = false;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  if (e.keyCode === 39) {
    rightPressed = true;
  }
  if (e.keyCode === 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode === 39) {
    rightPressed = false;
  }
  if (e.keyCode === 37) {
    leftPressed = false;
  }
}

if (rightPressed) {
  paddleX += 7;
} else {
  paddleX -= 7;
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleWidth);
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  posX += speedX;
  posY += speedY;
  if (posX + speedX > canvas.width - 5) {
    speedX = -5;
  } else if (posY + speedY > canvas.height - 5) {
    speedY = -7;
  } else if (posX + speedX < 5) {
    speedX = 5;
  } else if (posY + speedY < 5) {
    speedY = 7;
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(posX, posY, 10, 0, Math.PI * 2, false);
  ctx.fillStyle = "#green";
  ctx.fill();
  ctx.closePath();
  drawPaddle();
}

setInterval(function(){
  draw()
},2);

/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var particle = [];
var options = {
  posX: 10,
  speedX: 5,
  posY: 10,
  speedY: 7,
  paddleHeight: 10,
  paddleWidth: 75,
  defaultRadius: 10,
  particleAmount: 12,
  backgroundColor: "#ffffff"
  // paddleX: (canvas.width - paddleWidth) / 2
};
var rightPressed = false,
  leftPressed = false;

// document.addEventListener("keydown", keyDownHandler);
// document.addEventListener("keyup", keyUpHandler);

// function keyDownHandler(e) {
//   if (e.keyCode === 39) {
//     rightPressed = true;
//   }
//   if (e.keyCode === 37) {
//     leftPressed = true;
//   }
// }

// function keyUpHandler(e) {
//   if (e.keyCode === 39) {
//     rightPressed = false;
//   }
//   if (e.keyCode === 37) {
//     leftPressed = false;
//   }
// }

// if (rightPressed) {
//   options.paddleX += 7;
// } else {
//   options.paddleX -= 7;
// }

// function drawPaddle() {
//   ctx.beginPath();
//   ctx.rect(
//     options.paddleX,
//     canvas.height - options.paddleHeight,
//     options.paddleWidth,
//     options.paddleWidth
//   );
//   ctx.fillStyle = "#0095dd";
//   ctx.fill();
//   ctx.closePath();
// }

function Draw() {
  this.x = Math.random() * w;
  this.y = Math.random() * h;
  this.radius = options.defaultRadius;
  this.x += options.speedX;
  this.y += options.speedY;
  this.speedX = options.speedX;
  this.speedY = options.speedY;
  this.directionAngle = Math.floor(Math.random() * 360);
 
  // this.d = {
  //   x: Math.cos(this.directionAngle) * this.speedX,
  //   y: Math.sin(this.directionAngle) * this.speedY
  // };
  this.d = {
    x: Math.cos(this.directionAngle) * this.speedX,
    y: Math.sin(this.directionAngle) * this.speedY
  };


  this.border = function() {
    if (this.x >= w || this.x <= 0) {
      this.d.x *= -1;
    }
    if (this.y >= h || h <= 0) {
      this.d.y *= -1;
    }
    this.x > w ? (this.x = w) : this.x;
    this.x < 0 ? (this.x = 0) : this.x;
    this.y > h ? (this.y = h) : this.y;
    this.y < 0 ? (this.y = 0) : this.y;
  };

  this.update = function() {
    this.border();
      // this.update = function() {
    // if (this.d.x + this.speedX > canvas.width - 5) {
    //   this.x = w;
    // } else if (this.d.y + this.speedY > canvas.height - 5) {
    //   this.y = h;
    // } else if (this.d.x + this.speedX < 5) {
    //   this.x = 0;
    // } else if (this.d.y + this.speedY < 5) {
    //   this.y = 0;
    // }
  
    this.x += this.d.x;
    this.y += this.d.y;
  };

  // if (rightPressed && options.paddleX < canvas.width - options.paddleWidth) {
  //   options.paddleX += 7;
  // } else if (leftPressed && options.paddleX > 0) {
  //   options.paddleX -= 7;
  // }
  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
  };
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.beginPath();
  // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  // ctx.fillStyle = "#green";
  // ctx.fill();
  // ctx.closePath();
  // drawPaddle();
}

function setup() {
  for (var i = 0; i < options.particleAmount; i++) {
    particle.push(new Draw());
  }
  console.log(particle);
  window.requestAnimationFrame(loop);
}
function loop() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, w, h);
  for (var i = 0; i < particle.length; i++) {
    particle[i].update();
    particle[i].draw();
   
  }
  window.requestAnimationFrame(loop);
}
setup();
*/