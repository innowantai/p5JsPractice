 
// let xoff1 = 0;
// let xoff2 = 10000;
// let yoff = 0;

/// start 19 mins 
let inc = 0.1; 
let scl = 10;
let cols , rows ;
let zoff = 0;

let fr;

let particles = [];



function setup () {
    createCanvas(200,200)
    cols = floor(width / scl);
    rows = floor(height / scl); 
    fr = createP();

    for(let i = 0 ; i < 100 ; i++){
        particles[i] = new Particle()
    }
}


function draw () { 
    background(255);
    let yoff = 0;
    for (let y = 0 ; y < rows ; y ++){
        let xoff = 0;
        for (let x = 0 ; x < cols ; x ++){
            let index = (x + y * width) * 4;
            let angle = noise(xoff,yoff,zoff)*TWO_PI;  
            let v = p5.Vector.fromAngle(angle);
            xoff += inc;
            stroke(0,50);
            push();
            translate(x*scl,y*scl);
            rotate(v.heading());
            strokeWeight(1);
            line(0,0,scl,0);
            pop(0,0,scl,0);
 
        } 
        yoff += inc;
        //zoff += 0.001;
    } 
 
    for(let i = 0 ; i < particles.length ; i++){
        particles[i].update();
        particles[i].show();
        particles[i].edges();
    }

    fr.html(floor(frameRate()))
      
}



