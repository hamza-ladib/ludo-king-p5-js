function Area(L){
this.size=L/15;
this.cols=15;
this.rows=15;
this.count=0;
let green=[23,22,37,52,67,82];
let blue=[201,202,187,172,157,142];
this.allSquares=[];
this.redPath=[91,92,93,94,95,81,66,51,36,21,6,7,8,23,38,53,68,83,99,100,101,102,103,104,119,134,133,132,131,130,129,143,158,173,188,203,218,217,216,201,186,171,156,141,125,124,123,122,121,120,105,106,107,108,109,110,111];
this.greenPath=[23,38,53,68,83,99,100,101,102,103,104,119,134,133,132,131,130,129,143,158,173,188,203,218,217,216,201,186,171,156,141,125,124,123,122,121,120,105,90,91,92,93,94,95,81,66,51,36,21,6,7,22,37,52,67,82];
this.bluePath=[201,186,171,156,141,125,124,123,122,121,120,105,90,91,92,93,94,95,81,66,51,36,21,6,7,8,23,38,53,68,83,99,100,101,102,103,104,119,134,133,132,131,130,129,143,158,173,188,203,218,217,202,187,172,157,142];
this.yellowPath=[133,132,131,130,129,143,158,173,188,203,218,217,216,201,186,171,156,141,125,124,123,122,121,120,105,90,91,92,93,94,95,81,66,51,36,21,6,7,8,23,38,53,68,83,99,100,101,102,103,104,119,118,117,116,115,114,113];
let strx=[this.size,this.size*10,this.size,this.size*10];
let stry=[this.size,this.size,this.size*10,this.size*10];
this.starts=[];
for(let i=0; i<strx.length;i++){
    this.starts.push([
        {x:strx[i]+this.size,y:stry[i]+this.size},
        {x:strx[i]+this.size*3,y:stry[i]+this.size},
        {x:strx[i]+this.size,y:stry[i]+this.size*3},
        {x:strx[i]+this.size*3,y:stry[i]+this.size*3}
    ]);
}

for(let i=0;i<this.rows;i++){
    for(let j=0;j<this.cols;j++){
        
        let square= {
          x:j*this.size,
          y:i*this.size,
          enable:true,
          color:"#ffffff",
          number:this.count
        }
        if(square.number ==91 ||(square.number >=106 && square.number <=110 ) ){
            square.color="#ec1d27";}
        if(square.number ==133||(square.number >=114 && square.number <=118 ) ){
            square.color="#ffe01b";}
           if(blue.includes(square.number)) square.color="#2bb0ff";
           if(green.includes(square.number)) square.color="#00a348";
        this.allSquares.push(square);
        this.count++;
}
}
this.base=(x,y,color)=>{
   fill("ffffff");
 rect(x,y,this.size*4,this.size*4);
 noStroke();
 fill(color);
 rect(x-this.size,y-this.size,this.size*6,this.size);
 rect(x-this.size,y,this.size,this.size*5);
 rect(x,y+this.size*4,this.size*5,this.size);
 rect(x+this.size*4,y,this.size,this.size*4);

 circle(x+this.size,y+this.size,this.size);
 circle(x+this.size*3,y+this.size,this.size);
 circle(x+this.size,y+this.size*3,this.size);
 circle(x+this.size*3,y+this.size*3,this.size);


}
this.arrow=(x,y,angle,color)=>{
    push()
    strokeWeight(5);
     fill(color);
     stroke(color);
     let a=x+20;
     let b=y;
     translate (a,b);
     rotate (angle);
     let r=7;
    line (-20,0,0,0);
    noStroke();
    triangle(0,-r,0,r,r,0);
  pop()
}

this.show=()=>{
    for(s of this.allSquares){
        stroke("black");
        strokeWeight(0.5);
        fill (s.color);
        rect (s.x,s.y,this.size,this.size);
        textSize(15);
        textAlign(CENTER, CENTER);
        fill("black");
        text (""+s.number,s.x,s.y,this.size,this.size);
        if(s.number==105)  this.arrow(s.x+3,s.y+this.size/2,0,"#ec1d27");
        if(s.number==7)  this.arrow(s.x-3,s.y+this.size/1.4,PI/2,"#00a348");
        if(s.number==217)  this.arrow(s.x-3,s.y+this.size/2.7,-PI/2,"#2aaffe");
        if(s.number==119)  this.arrow(s.x-this.size/4,s.y+this.size/2,PI,"#ffe01b");
        
    }
   this.base(this.size,this.size,"#ec1d27");
    this.base(this.size*10,this.size,"#00a348");
    this.base(this.size,this.size*10,"#043591");
    this.base(this.size*10,this.size*10,"#ffe01b");
    noStroke();
    fill("#ec1d27");
    triangle(this.size*6,this.size*6,this.size*6,this.size*9,this.size*7.5,this.size*7.5);
    fill("#00a348");
    triangle(this.size*6,this.size*6,this.size*9,this.size*6,this.size*7.5,this.size*7.5);
    fill("#2aaffe");
    triangle(this.size*6,this.size*9,this.size*9,this.size*9,this.size*7.5,this.size*7.5);

    fill("#ffe01b");
    triangle(this.size*9,this.size*9,this.size*9,this.size*6,this.size*7.5,this.size*7.5);
}




}