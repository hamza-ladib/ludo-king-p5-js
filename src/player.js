function Player(color,start){
    this.color=color;
    this.turn=false;
    this.soldiers=[
    {number:start[0],enable:false},
    {number:start[1],enable:false},
    {number:start[2],enable:false},
    {number:start[3],enable:false}
    ]

    this.show=()=>{
        fill ("black");
        rect(this.soldiers[0].number.x-10,this.soldiers[0].number.y-10,20,20)
        rect(this.soldiers[1].number.x-10,this.soldiers[1].number.y-10,20,20)
        rect(this.soldiers[2].number.x-10,this.soldiers[2].number.y-10,20,20)
        rect(this.soldiers[3].number.x-10,this.soldiers[3].number.y-10,20,20)

     
        fill(this.color);
        circle(this.soldiers[0].number.x,this.soldiers[0].number.y,10)
        circle(this.soldiers[1].number.x,this.soldiers[1].number.y,10)
        circle(this.soldiers[2].number.x,this.soldiers[2].number.y,10)
        circle(this.soldiers[3].number.x,this.soldiers[3].number.y,10)
    }



}