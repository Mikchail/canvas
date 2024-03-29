(function() {
  var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    w = (canvas.width = window.innerWidth - 24),
    h = (canvas.height = window.innerHeight - 24),
    options = {
      backgroundColor: "#222",
      defaultSpeed: 1,
      particleColor: "#fcfcfc",
      addedSpeed: 2,
      defaultRadius: 2,
      addedRadius: 2,
      particleAmount: 32,
      addParticleAmount: 10,
      comunicationRadius: 170,
      lineWidth: 0.5,
      lineColor: `rgba(255,255,255,opacity)`
    },
    particle = [],
    Particle = function(Xpos, Ypos) {
      this.x = Xpos ? Xpos : Math.random() * w;
      this.y = Ypos ? Ypos : Math.random() * h;
      this.speed = options.defaultSpeed + Math.random() * options.addedSpeed;
      this.directionAngle = Math.floor(Math.random() * 360);
      this.color = options.particleColor;
      this.radius = options.defaultRadius + Math.random() * options.addedRadius;
      this.d = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed
      };

      this.update = function() {
        this.border();
        this.x += this.d.x;
        this.y += this.d.y;
      };

      this.border = function() {
        if (this.x >= w || this.x <= 0) {
          this.d.x *= -1;
        }
        if (this.y >= h || this.y <= 0) {
          this.d.y *= -1;
        }
        this.x > w ? (this.x = w) : this.x;
        this.x < 0 ? (this.x = 0) : this.x;
        this.y > h ? (this.y = h) : this.y;
        this.y < 0 ? (this.y = 0) : this.y;
      };
      this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      };
    },
    checkDistance = function(x1, y1, x2, y2) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    },
    comunicatePoints = function(point1, father) {
      for (var i = 0; i < father.length; i++) {
        var distance = checkDistance(
          point1.x,
          point1.y,
          father[i].x,
          father[i].y
        );
        var opacity = 1 - distance / options.comunicationRadius;
        if (opacity > 0) {
          ctx.lineWidth = options.lineWidth;
          ctx.strokeStyle = options.lineColor.replace("opacity", opacity);
          ctx.beginPath();
          ctx.moveTo(point1.x, point1.y);
          ctx.lineTo(father[i].x, father[i].y);
          ctx.closePath();
          ctx.stroke();
        }
      }
    };

  function setup() {
    for (var i = 0; i < options.particleAmount; i++) {
      particle.push(new Particle());
    }
    window.requestAnimationFrame(loop);
  }
  function loop() {
    ctx.fillStyle = options.backgroundColor;
    ctx.fillRect(0, 0, w, h);

    for (var i = 0; i < particle.length; i++) {
      particle[i].update();
      particle[i].draw();
    }
    for (var j = 0; j < particle.length; j++) {
      comunicatePoints(particle[j], particle);
    }
    window.requestAnimationFrame(loop);
  }

  setup();

  canvas.addEventListener("click", function(e) {
    for (var i = 0; i < options.addParticleAmount; i++) {
      particle.push(new Particle(e.pageX, e.pageY));
    }
  });
  canvas.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    particle.splice(
      particle.length - options.addParticleAmount,
      options.addParticleAmount
    );
  });
})();
