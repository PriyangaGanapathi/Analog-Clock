var radius = 120;

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = '#37B257'
  ctx.fill();

  drawArc(radius, 0.1*Math.PI, 0.4*Math.PI);
  drawArc(radius, 0.6*Math.PI, 0.9*Math.PI);
  drawArc(radius, 1.1*Math.PI, 1.4*Math.PI);
  drawArc(radius, 1.6*Math.PI, 1.9*Math.PI);
}

function drawArc(radius, startAngle, endAngle) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, startAngle, endAngle);
  ctx.fillStyle = '#37B257'
  ctx.fill();
  ctx.strokeStyle="white";
  ctx.stroke();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.30 + "px Verdana, sans-serif";
  ctx.fillStyle = "white";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 3; num < 13; num=num+3){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07, "hour");
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07, "minute");
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02, "second");
}

function drawHand(ctx, pos, length, width, hand) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    if (hand == "second") {
      ctx.strokeStyle="red";
    }
    ctx.stroke();
    ctx.rotate(-pos);

    ctx.beginPath();
    ctx.arc(0, 0, radius*0.05, 0, 2*Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
}

function drawBackground(ctx) {
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(200, 0);
  ctx.lineTo(750, 150);
  ctx.lineTo(950, 500);
  ctx.lineTo(250, 350);
  ctx.lineTo(0, 240);
  ctx.fillStyle='#37B257';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(200, 0);
  ctx.lineTo(750, 150);
  ctx.lineTo(950, 250);
  ctx.lineTo(1250, 200);
  ctx.lineTo(1350, 0);
  ctx.fillStyle='#5AD4E1';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(700, 0);
  ctx.lineTo(850, 100);
  ctx.lineTo(900, 0);
  ctx.fillStyle='#4FC76E';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(0, 240);
  ctx.lineTo(250, 350);
  ctx.lineTo(0, 440);
  ctx.fillStyle='#5AD4E1';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(0, 440);
  ctx.lineTo(250, 350);
  ctx.lineTo(950, 500);
  ctx.lineTo(1100, window.innerHeight);
  ctx.lineTo(0, window.innerHeight);
  ctx.fillStyle='#4FC76E';
  ctx.fill();
}
