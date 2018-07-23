/*
程式撰寫大綱與流程:
1.用來創造隨機日文字串
  this.setRandomSymbol = function () { 
        this.value = String.fromCharCode(
          0x30A0 + round(random(0,96))
        );  
    }
2.


*/ 

let symbolSize = 26;
let symbol ;

function setup () {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  ); 
  background(51);
  symbol = new Symbol(width/2,0,random(5,10))
  symbol.setRandomSymbol();
  textSize(symbolSize);
}


function draw () { 
  background(0);
  symbol.rander();

}


function Symbol (x,y,speed) {
  this.x = x;
  this.y = y;
  this.speed = speed; 
  this.value;
  this.switchInterval = round(random(2,20));

  this.setRandomSymbol = function () { 
    if(frameCount % this.switchInterval == 0){
      this.value = String.fromCharCode(
        0x30A0 + round(random(0,96))
      );  
    }
  }


  this.rander = function () {
    fill(0,255,0);
    text(this.value,this.x,this.y);
    this.rain();
    this.setRandomSymbol();
  }

  // 讓文字往下掉，若到底端則恢復最上端
  this.rain = function () {
    this.y = this.y >= height ? 0 : this.y+=speed;
  }
 
}

 function Stream () {
 
 }