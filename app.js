let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.backgroundColor = 'yellow';

let ctx = canvas.getContext('2d');

function Particle (x, y, radius, color){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.draw = function (){
    ctx.beginPath();
    ctx.arc(this.x, this.x, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.closePath();
  }
}