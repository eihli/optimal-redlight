CanvasRenderingContext2D.prototype.percentFillRect = function(x, y, width, height) {
  this.fillRect(this.scaleX(x), this.scaleY(y), this.scaleX(width), this.scaleY(height));
}

CanvasRenderingContext2D.prototype.percentQuadraticCurveTo = function(cp1x, cp1y, x, y) {
  this.quadraticCurveTo(this.scaleX(cp1x), this.scaleY(cp1y), this.scaleX(x), this.scaleY(y));
}

CanvasRenderingContext2D.prototype.percentMoveTo = function(x, y) {
  this.moveTo(this.scaleX(x), this.scaleY(y));
}
CanvasRenderingContext2D.prototype.scaleX = function(x) {
  return x * this.canvas.clientWidth / 100;
}

CanvasRenderingContext2D.prototype.scaleY = function(y) {
  return y * this.canvas.clientHeight / 100;
}

document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = "rgb(200, 0, 0)";

  ctx.percentFillRect(25, 25, 50, 50);

  ctx.fillStyle = "rgb(0, 200, 0)";
  ctx.beginPath();
  ctx.percentMoveTo(25, 25);
  ctx.percentFillRect(10, 10, 1, 1);
  ctx.percentFillRect(25, 25, 1, 1);
  ctx.percentQuadraticCurveTo(10, 10, 0, 25);
  ctx.stroke();

});
function Renderable(o) {
  var that = {}
  function F() {}
  F.prototype = o;
  return new F();
}
