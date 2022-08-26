function Dice(x,y){
this.x=x;
this.y=y;
this.r=50;
this.numbers=[1,2,3,4,5,6];
this.selectedNumber=random(this.numbers);
this.rollingStart=false;
this.rd;
this.pcolor="black";
this.number1=()=>{
 stroke(this.pcolor);
    fill ("white");
    strokeWeight(2);
rect (this.x,this.y,this.r,this.r);  
strokeWeight(10);
stroke("black");
point (this.x+this.r/2,this.y+this.r/2);
return 1;
}
this.number2=()=>{
    stroke(this.pcolor);
       fill ("white");
       strokeWeight(2);
   rect (this.x,this.y,this.r,this.r);  
   strokeWeight(10);
   stroke("black");
   point (this.x+this.r/4,this.y+this.r/4);
   point (this.x+3*this.r/4,this.y+3*this.r/4);
   return 2;
   }
   this.number3=()=>{
    stroke(this.pcolor);
       fill ("white");
       strokeWeight(2);
   rect (this.x,this.y,this.r,this.r);  
   strokeWeight(10);
   stroke("black");
   point (this.x+this.r/4,this.y+this.r/4);
   point (this.x+3*this.r/4,this.y+3*this.r/4);
   point (this.x+this.r/2,this.y+this.r/2);
   return 3;
   }
   this.number4=()=>{
    stroke(this.pcolor);
       fill ("white");
       strokeWeight(2);
   rect (this.x,this.y,this.r,this.r);  
   strokeWeight(10);
   stroke("black");
   point (this.x+this.r/4,this.y+this.r/4);
   point (this.x+3*this.r/4,this.y+this.r/4);
   point (this.x+this.r/4,this.y+3*this.r/4);
   point (this.x+3*this.r/4,this.y+3*this.r/4);
   return 4;
   }
   this.number5=()=>{
    stroke(this.pcolor);
       fill ("white");
       strokeWeight(2);
   rect (this.x,this.y,this.r,this.r);  
   strokeWeight(10);
   stroke("black");
   point (this.x+this.r/4,this.y+this.r/4);
   point (this.x+3*this.r/4,this.y+this.r/4);
   point (this.x+this.r/2,this.y+this.r/2);
   point (this.x+this.r/4,this.y+3*this.r/4);
   point (this.x+3*this.r/4,this.y+3*this.r/4);
   return 5;
   }
   this.number6=()=>{
    stroke(this.pcolor);
       fill ("white");
       strokeWeight(2);
   rect (this.x,this.y,this.r,this.r);  
   strokeWeight(10);
   stroke("black");
   point (this.x+this.r/4,this.y+this.r/4);
   point (this.x+3*this.r/4,this.y+this.r/4);
   point (this.x+this.r/4,this.y+this.r/2);
   point (this.x+3*this.r/4,this.y+this.r/2);
   point (this.x+this.r/4,this.y+3*this.r/4);
   point (this.x+3*this.r/4,this.y+3*this.r/4);
   return 6;
   }
   this.show=(pcolor)=>{
    this.pcolor=pcolor;
    /***************** */
    if(this.selectedNumber==1) this.number1();
    else if(this.selectedNumber==2) this.number2();
    else if(this.selectedNumber==3) this.number3();
    else if(this.selectedNumber==4) this.number4();
    else if(this.selectedNumber==5) this.number5();
    else if(this.selectedNumber==6) this.number6();

   } 
   this.roll=()=>{
    this.rd=random(this.numbers);
    
  if(this.rollingStart==true){
    let count=0;
   let interv= setInterval(()=>{
            this.selectedNumber=random(this.numbers);
            count++;
            if(count==5){   
                this.selectedNumber=this.rd;
                clearInterval(interv);
            } 
    },100);
   }
   
   this.rollingStart=false;
}

}