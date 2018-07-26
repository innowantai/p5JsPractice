let angle = 0;  
let w = 25;

function setup () {
    createCanvas(400,400,WEBGL); 
}


function draw () {
    background(175) 
    //translate(width/2,height/2);
    rectMode(CENTER);
    rotateX(angle); 
    
    let offset = 0;
    for(let x = 0 ; x < width ; x += w){
        push();
        let a = angle + offset;
        let h = map(sin(a),-1,1,0,50); 
        fill(255); 
        translate(x - width / 2,0,0);
        box(h);
        //rect(x - width / 2 + w / 2 ,0,w - 2,h)  

        offset += 0.05
        pop();
    }

    angle += 0.01;   
}



