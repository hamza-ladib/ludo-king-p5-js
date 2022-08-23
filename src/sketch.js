
let canvas;
let width=500;
let height=500;
let area;
function setup() {
   canvas= createCanvas(width,height);
   canvas.id("cnv");
   area=new Area(width);

  }
  
  function draw() {
    background("#ffffff");
    area.show();
  }