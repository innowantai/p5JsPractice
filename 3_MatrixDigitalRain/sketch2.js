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
let stream;
let streams = [];
function setup () {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  ); 
  background(51);
  for(let i = 0 ; i <= width ; i+= symbolSize){
    stream = new Stream();
    stream.generateSymbols(i,-1000);
    streams.push(stream); 
  }

}


function draw () { 
  background(0);
  // stream.rander();
  streams.forEach(function (stream) {
    stream.rander();
  })



  textSize(symbolSize);

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


  // this.rander = function () {
  //   fill(0,255,0);
  //   text(this.value,this.x,this.y);
  //   this.rain();
  //   this.setRandomSymbol();
  // }

  // 讓文字往下掉，若到底端則恢復最上端
  this.rain = function () {
    this.y = this.y >= height ? 0 : this.y+=speed;
  }
 
}

function Stream () { 
  this.symbols = [];
  this.totalSymbols = round(random(5,20));
  this.speed = random(5,20);

  this.generateSymbols = function (x,y) { 

    for(let i = 0; i <= this.totalSymbols;i++){      
      symbol = new Symbol(x, y, this.speed); 
      this.symbols.push(symbol);
      y -= symbolSize;
    }
  }

  this.rander = function () {
    this.symbols.forEach(function (symbol) {
      fill(0,255,0);
      text(symbol.value,symbol.x,symbol.y);
      symbol.setRandomSymbol();
      symbol.rain();
    });
  }

}