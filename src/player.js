function Player(color,l,start,allSquares,path){
    this.color=color;
    this.size=l/15;
    this.turn=false;
    this.current=0;
    this.f=0;
    this.i=0;
    this.waiting=true;
    this.allSquares=allSquares;
    this.movingStart=[false,false,false,false];
    this.current=this.allSquares[0];
    this.path=path;
    this.soldiers=[
        {x:start[0].x-this.size/2,y:start[0].y-this.size/2,isSelected:false,isEnabled:true,lastPos:0},
        {x:start[1].x-this.size/2,y:start[1].y-this.size/2,isSelected:false,isEnabled:true,lastPos:0},
        {x:start[2].x-this.size/2,y:start[2].y-this.size/2,isSelected:false,isEnabled:true,lastPos:0},
        {x:start[3].x-this.size/2,y:start[3].y-this.size/2,isSelected:false,isEnabled:true,lastPos:0},
    ]
    this.show=()=>{
       fill ("black");
       /*********** soldier 1***********/
       if(this.waiting){
        strokeWeight(2);
        stroke("violet");
       }
       else {
        noStroke();
       }
        rect(this.soldiers[0].x,this.soldiers[0].y,this.size,this.size)
        rect(this.soldiers[1].x,this.soldiers[1].y,this.size,this.size)
        rect(this.soldiers[2].x,this.soldiers[2].y,this.size,this.size)
        rect(this.soldiers[3].x,this.soldiers[3].y,this.size,this.size)
        fill(this.color);
        /** happy soldier */
        circle(this.soldiers[0].x+this.size/4,this.soldiers[0].y+this.size/4,10)
        circle(this.soldiers[0].x+3*this.size/4,this.soldiers[0].y+this.size/4,10)
        rect(this.soldiers[0].x+this.size/4,this.soldiers[0].y+2.5*this.size/4,this.size/2,5)
        ////////////////////////////////////
        circle(this.soldiers[1].x+this.size/4,this.soldiers[1].y+this.size/4,10)
        circle(this.soldiers[1].x+3*this.size/4,this.soldiers[1].y+this.size/4,10)
        rect(this.soldiers[1].x+this.size/4,this.soldiers[1].y+2.5*this.size/4,this.size/2,5)
        ////////////////////////////////////
        circle(this.soldiers[2].x+this.size/4,this.soldiers[2].y+this.size/4,10)
        circle(this.soldiers[2].x+3*this.size/4,this.soldiers[2].y+this.size/4,10)
        rect(this.soldiers[2].x+this.size/4,this.soldiers[2].y+2.5*this.size/4,this.size/2,5)
        ////////////////////////////////////
        circle(this.soldiers[3].x+this.size/4,this.soldiers[3].y+this.size/4,10)
        circle(this.soldiers[3].x+3*this.size/4,this.soldiers[3].y+this.size/4,10)
        rect(this.soldiers[3].x+this.size/4,this.soldiers[3].y+2.5*this.size/4,this.size/2,5)
        ////////////////////////////////////
    }
    this.update=(number,index)=>{
        let count=0;
        this.current=this.allSquares[this.path[this.soldiers[index].lastPos+number]];
        let interv= setInterval(()=>{
    this.soldiers[index].x=this.allSquares[this.path[this.soldiers[index].lastPos]].x;
    this.soldiers[index].y=this.allSquares[this.path[this.soldiers[index].lastPos]].y;
    this.soldiers[index].lastPos++;
    count++;
    if(count==number){ 
                    
                    

                     clearInterval(interv);
                 } 
         },100);

         this.movingStart[index]=false;
         
        }
        this.makeIt=(number,index)=>{
           
                if(this.soldiers[index].lastPos+number>this.path.length)
                      this.soldiers[index].isEnabled=false;
                
                else 
                this.soldiers[index].isEnabled=true;
        }
    }
    