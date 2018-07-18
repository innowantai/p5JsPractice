function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.dir = function (x,y) {
      this.xspeed = x;
      this.yspeed = y;
    }
  
    this.eat = function (pos) {
     let d = dist(this.x,this.y,pos.x,pos.y);
     if(d < 1){
        this.total++;
        return true;
     }else{
        return false;
     }
    } 

    this.death = function () {
        for(let i = 0 ; i < this.tail.length ; i++){
            let pos = this.tail[i];
            let d = dist(this.x,this.y,pos.x,pos.y);
            if(d < 1){
                alert('Game over')
                this.total = -1;
                this.tail = [];
            }
        }

        if(this.x < 0 || this.y < 0 || this.x > width-scl || this.y > height-scl){
            alert('Game over')
            this.total = -1;
            this.tail = [];
            this.x = 0;
            this.y = 0;
            s.dir(1,0) ;
        }
    }


    this.updata = function () {
        if(this.total === this.tail.length){
            for(let i = 0; i < this.tail.length-1 ; i++){
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = createVector(this.x,this.y);
        
        this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;
        this.x = constrain(this.x,-1,width-scl+1);
        this.y = constrain(this.y,-1,height-scl+1); 
    }
  
    this.show = function () {
      fill(255);
      for(let i = 0; i< this.total  ; i ++){
          rect(this.tail[i].x,this.tail[i].y,scl,scl);
      }

      
      rect(this.x,this.y,scl,scl);
    }   
  }