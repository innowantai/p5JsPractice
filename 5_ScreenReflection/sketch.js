 

let x;
let y;
let m;
let b;
let oldb;
let speed = 5;
let ballSize = 25;
let canvasWidth = 500;
let canvasHeight = 500;

function setup () {
    createCanvas(canvasWidth,canvasHeight)  
    x = 0;
    m = random(0,1);
    b = round(random(0,10));
    oldb = b;
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
        m = -1/m;
        speed = -speed; 
        print(m,b)
    }else if(y >= canvasHeight){
        b = 0;
        m = -1/m;   
        speed = -speed; 
        print(m,b)
    }
}



