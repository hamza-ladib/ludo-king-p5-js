
let canvas;
let width=500;
let height=570;
let area;
let redPlayer;
let greenPlayer;
let yellowPlayer;
let bluePlayer;
let dice;
let players=[];
let count;
let tester=0;
let number=10;
let timeRoll=true;
let timeToMove=true;
let enabledPlayer;
let playersNumber=100;
let catchp;
let possibles=["1","2","3","4"];
function setup() {
  while(!possibles.includes(playersNumber)){
      playersNumber=prompt(" Enter number of player ");
  }
   canvas= createCanvas(width,height);
   canvas.id("cnv");
   area=new Area(width);
  redPlayer   =new Player("red"  ,width,area.starts[0],area.allSquares,area.redPath);
  greenPlayer =new Player("green",width,area.starts[1],area.allSquares,area.greenPath);
  bluePlayer  =new Player("blue"  ,width,area.starts[2],area.allSquares,area.bluePath);
  yellowPlayer=new Player("yellow",width,area.starts[3],area.allSquares,area.yellowPath);
  players.push(redPlayer,greenPlayer,bluePlayer,yellowPlayer);
  players=players.slice(0,playersNumber);
  enabledPlayer=redPlayer;
  

  dice= new Dice(20,width+10);

  }
  function draw() {
    background("#ffffff")
      ///////////////////
         fill ("tomato");
     circle(150,width+35,30);
    ////////////////////
    area.show();
    ///**************  winner  && can't make a move ************** */
    players.forEach(p=>{
     
     if(p.soldiers[0].lastPos==57 && p.soldiers[1].lastPos==57 &&p.soldiers[2].lastPos==57 &&p.soldiers[3].lastPos==57){
        if(players.length==1){
          alert(p.colors+" wins ");
          noLoop();
        }
        
        
        else {
          players.splice(players.indexOf(p),1);
        }
        
      
      
      }
    })
    /*******about player*** */
    for(player of players){ 
      if(timeToMove) player.waiting=true;
      else player.waiting=false;
          for (let i=0;i<player.soldiers.length;i++){
            if(player.movingStart[i]){
              player.update(dice.rd,i,players);
               //player.update(56,i,players);
             
            } 
          }
          player.show();
            }
 

  /**************************** */
      /********** about dice ********* */
    dice.show(enabledPlayer.color);
     if(dice.rollingStart){
      dice.roll();
     }
    noStroke();
    fill("aqua");
    ////////////////////////////////

}
  function mousePressed(){
   count=0;
  let d=dist(150,width+35,mouseX,mouseY);
  if(d<20 && timeRoll){
  dice.rollingStart=true;
  timeRoll=false;
      timeToMove=true;
      } 
      /********************* */ 
      if(!enabledPlayer.soldiers[0].isEnabled && !enabledPlayer.soldiers[1].isEnabled && !enabledPlayer.soldiers[2].isEnabled && !enabledPlayer.soldiers[3].isEnabled){
        enabledPlayer=players[(players.indexOf(enabledPlayer)+1)%players. length];

       }
          for (let i=0;i<enabledPlayer.soldiers.length;i++){
            let ds=dist(enabledPlayer.soldiers[i].x+width/30,enabledPlayer.soldiers[i].y+width/30,mouseX,mouseY);
            //enabledPlayer.makeIt(56,i);
            enabledPlaye.makeIt(dice.rd,i);
            if(ds<20 && !timeRoll && enabledPlayer.soldiers[i].isEnabled){
              enabledPlayer.movingStart[i]=true;
              enabledPlayer=players[(players.indexOf(enabledPlayer)+1)%players. length];
            timeRoll=true;
            timeToMove=false;
            }
        }
  } 
  
