function canvas() {
  var canvas = document.getElementById("canvas");
  var c = canvas.getContext("2d");
  var data = [15, 24, 22, 67, 23, 52];
  var labels = ["JAN", "FEB", "MAR", "APR", "MAY"];
  // var grad = ctx.createLinearGradient(0,0,`<b id="graddemo2_var1">200</b>`,`<b id="graddemo2_var2">0</b>`);
  //     grad.addColorStop(0, "white");
  //     grad.addColorStop(0.5, "red");
  //     grad.addColorStop(1, "black");

  //     ctx.fillStyle = grad;
  //     ctx.fillRect(100,100,400,200);

  c.fillStyle = "gray";
  c.fillRect(0, 0, 500, 500);

  c.fillStyle = "blue";

  for (var i = 0; i < data.length; i++) {
    var dp = data[i];
    c.fillRect(25 + i * 100, canvas.width - dp * 5 - 10, 50, dp * 5);
  }

  c.fillStyle = "black";

  c.lineWidth = 2;
  c.beginPath();
  c.moveTo(25, 10);
  c.lineTo(25, 490);
  c.lineTo(490, 490);
  c.stroke();

  c.fillStyle = "black";
  for (var i = 0; i < 6; i++) {
    c.fillText((5 - i) * 20 + "", 4, i * 80 + 60);
    c.beginPath();
    c.moveTo(25, i * 80 + 60);
    c.lineTo(30, i * 80 + 60);
    c.stroke();
  }

  for (var i = 0; i < labels.length; i++) {
    c.fillText(labels[i], 40 + i * 100, 500);
  }
  c.font = "20px Arial";
  c.fillText("Просто тут", 400, 211);
}
canvas();

function canvas_two() {
  var data = [100, 68, 20, 30, 100];
  var colors = ["orange", "green", "blue", "yellow", "teal"];
  var canvas = document.getElementById("canvas2");
  var c = canvas.getContext("2d");
  // рисуем фон
  c.fillStyle = "black";
  c.fillRect(0, 0, 500, 500);

  var total = 0;
  for (var i = 0; i < data.length; i++) {
    total += [i];
  }

  var prevAngle = 0;
  for (let i = 0; i < data.length; i++) {
    var fraction = data[i] / total;
    var angle = prevAngle + fraction * Math.PI * 2;
    c.fillStyle = colors[i];

    c.beginPath();
    c.moveTo(250, 250);
    c.arc(250, 250);
    
  }
}
canvas_two();
