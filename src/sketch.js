
let canvas;
let width=500;
let height=570;
let area;
let redPlayer;
let greenPlayer;
let yellowPlayer;
let bluePlayer;
let dices=[];
let players=[];
let count;
function setup() {
   canvas= createCanvas(width,height);
   canvas.id("cnv");
   area=new Area(width);

  redPlayer=new Player("red",area.starts[0]);
  yellowPlayer=new Player("green",area.starts[1]);
  greenPlayer=new Player("blue",area.starts[2]);
  bluePlayer=new Player("yellow",area.starts[3]);
  players.push(redPlayer,greenPlayer,yellowPlayer,bluePlayer);
  dices.push(new Dices(20,width+10),new Dices(70,width+10));
  }
  function draw() {
  
    background("#ffffff")
      ///////////////////
         fill ("tomato");
     circle(150,width+35,30);
    ////////////////////
    area.show();
    for(player of players){
        player.show();
    }
    for(dice of dices){
    dice.show();}
  }
  function mousePressed(){
   let d=dist(150,width+35,mouseX,mouseY);
   count=0;
   if(d<=20){
    for(dice of dices){
    dice.roll();
    count+=dice.selectedNumber;
        }
  console.log(count);
   }
 
  } 