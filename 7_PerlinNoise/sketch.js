

let xoff;
let scl = 0.1;
let xstart = 0;

function setup () {
    createCanvas(800,400)
}

function draw () { 
    background(0);
    beginShape();
    noFill();
    xoff = xstart;
    for(let x = 0 ; x < width ; x++){
        stroke(255);
        let y = map(noise(xoff),0,1,0,height);
        vertex(x,y);
        xoff += scl;
    }

    xstart += scl;
    endShape();
    
}