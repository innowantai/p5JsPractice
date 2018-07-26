

let xoff;
let yoff;
let inc = 0.1; 
let scl = 10;
let cols,rows;
let ystart = 0;
function setup () {
    createCanvas(200,200)
    cols = width / scl;
    row = height / scl;
}

function draw () { 
    background(0); 
    yoff = ystart;
    for(let y = 0 ; y < row;y++){
        xoff = -ystart;
        for(let x = 0 ; x < cols ; x++){
            let index = (x + y * width) * 4
            let r = noise(xoff,yoff) * 255
            let g = noise(xoff,yoff) * 255
            let b = noise(xoff,yoff) * 255
            fill(r,g,b) 
            rect(scl*x,scl*y,scl,scl) 
            xoff += inc; 
        }
        yoff += inc;
    } 

    if(frameCount % 10 == 0){
        ystart += inc;
    }
 
    
}