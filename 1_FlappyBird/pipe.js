function Pipe() {
    // this.top = random(height/2);
    // this.bottom = random(height/2);
    this.top = random(height/2);
    this.bottom = height - this.top - 150; 
    
    this.x = width;
    this.w = 20;
    this.speed = 2;
     
    this.pass = false;
    this.crash = false;

    this.hits = function (bird){
        if((bird.y - bird.r) < this.top || (bird.y + bird.r) > height - this.bottom){
            if(bird.x > this.x && bird.x < this.x + this.w){
                this.crash = true;
                return true;
            } 
        }
        this.crash = false;
        return false;
    }

    this.passed = function (){
        if((bird.y - bird.r) > this.top || (bird.y + bird.r) < height - this.bottom){
            if(bird.x == this.x + this.w){
                this.pass = true; 
                return true;
            }else{
                this.pass = false;
                return false;
            }
        }
    
    }



    this.show = function (){
        fill(255);
        if (this.pass) {
            fill(0,255,0);
        }

        if (this.crash) {
            fill(255,0,0);
         
        }
        rect(this.x,0,this.w,this.top);
        rect(this.x,height - this.bottom,this.w,this.bottom);
    }

    this.update = function (){
        this.x -= this.speed;
    }

    this.offscreen = function (){
        if (this.x < -this.w) {
            return true;
        }else{
            return false;
        }
    }
}