

let xoff;
let yoff;
let zoff = 0;
let inc = 0.1; 
let scl = 10;
let cols,rows;
let ystart = 0;
function setup () {
    createCanvas(200,200)
    cols = width / scl;
    row = height / scl;
}

let rota = 0;

function draw () {  
    background(255)
    yoff = 0;
    for(let y = 0 ; y < row;y++){
        xoff = 0;
        for(let x = 0 ; x < cols ; x++){
            let index = (x + y * width) * 4;
            let angle = noise(xoff,yoff,zoff) * TWO_PI;
            let v = p5.Vector.fromAngle(angle); 
            xoff += inc;  
            stroke(0);
            push();
            translate(x*scl,y*scl);
            rotate(v.heading()); 
            line(0,0,scl,0);
            pop(); 
        }
        yoff += inc; 
        zoff += 0.0005
    }  
 
    print(zoff)
    
}