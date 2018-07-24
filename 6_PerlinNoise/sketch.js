 
// let xoff1 = 0;
// let xoff2 = 10000;
// let yoff = 0;

let inc = 0.01; 
let scl = 20;
let cols , rows ;
function setup () {
    createCanvas(500,500)
    cols = floor(width / scl);
    rows = floor(height / scl);
}


function draw () { 
    let yoff = 0;
    for (let y = 0 ; y < rows ; y ++){
        let xoff = 0;
        for (let x = 0 ; x < cols ; x ++){
            let index = (x + y * width) * 4;
            let r = noise(xoff,yoff)*255;  
            xoff += inc;

            fill(random(255));
            rect(x*scl,y*scl,scl,scl)
        } 
        yoff += inc;
    } 


    noLoop();
 
      
}



