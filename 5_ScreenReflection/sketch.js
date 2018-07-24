 

let x;
let y;
let m;
let b;
let oldb;
let diff;
let speed = 3;
let ballSize = 25;
let canvasWidth = 500;
let canvasHeight = 500;

function setup () {
    createCanvas(500,500)  
    x = 0;
    // m = 0.16;
    // b = 5;
    m = random(0,10)
    b = random(0,10)
    oldb = b;
    diff = 1;
}

function draw () {
    fill(255);
    background(0);  
    y = m * x + b

    ellipse(x,y,ballSize,ballSize);
    x += speed ; 
    if(x >= canvasWidth || x < 0){
        oldb = b;
        b = ((m*m+1)/m)*x+b;
        m = -1/m + random(-diff,diff);
        speed = -speed;  
    }else if(y > canvasHeight){ 
        x = (canvasHeight - b)/m;
        m = -1/m;    
        b =  canvasHeight - m * x; 
    }else if(y < 0){
        x = (- b)/m;
        m = -1/m;    
        b =   - m * x; 
    }
}



