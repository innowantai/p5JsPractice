let angle = 0;  
let w = 24;
let ma ;
let maxD;
let canvasSize = 800;
let lowValue = 50;
let highValue = 500;

function setup () {
    createCanvas(canvasSize,canvasSize,WEBGL); 
    ma = atan(1/sqrt(2));
    maxD = dist(0,0,200,200);
}


function draw () {
    background(100) 
    //ortho(-200,200,-200,200,0,500); 
    ortho(-canvasSize,canvasSize,-canvasSize,canvasSize,0,1000);  
     
    rotateX(-QUARTER_PI);
    rotateY(ma);
     
    for(let z = 0 ; z < height ; z += w){
        for(let x = 0 ; x < width ; x += w){
            push();
            let d = dist(x, z, width / 2 , height / 2); 
            let offset = map(d,0,maxD,-PI,PI);
            let a = angle + offset;
            let h = floor(map(sin(a),-1,1,lowValue,highValue)); 
            normalMaterial();
            //fill(255); 
            translate(x - width / 2,0,z - height/2);
            box(w-2, h, w-2);
            //rect(x - width / 2 + w / 2 ,0,w - 2,h)  

            pop();
        } 
    }

    angle -= 0.08;   
}

function keyPressed() {
    if(keyCode === ENTER){
        w = int(document.querySelector(".Square").value); 
        lowValue = int(document.querySelector(".Low").value); 
        highValue = int(document.querySelector(".Hight").value); 
    }
}



