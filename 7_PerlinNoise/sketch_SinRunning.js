

let inc = 0.05;
let scl = 20;
let xoff = 0;
let xstart = 0;
function setup () {
    createCanvas(400,400)
}

function draw () { 
    background(0);

    beginShape();  
    noFill();
    xoff = xstart;
    for(let x = 0 ; x < width; x++){
        stroke(255);
        //let y = map(noise(xoff),0,1,0,height);
        y = map(sin(xoff),-1,1,0,height)
        vertex(x,y); 
        xoff += inc;
    }
    
    xstart += inc;

    endShape();

}