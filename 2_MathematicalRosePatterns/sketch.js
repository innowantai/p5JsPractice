 

let d = 8;
let n = 5;
let sliderD;
let sliderN;
function setup() {
    createCanvas(400,400);
    sliderD = createSlider(1,10,5);
    sliderN = createSlider(1,20,5,0.01);
}
 

function draw() { 
    //d = sliderD.value();
    //n = sliderN.value();
    n += 0.05;
    d += 0.05
    let k = n / d  ;
    background(51);
    translate(width/2,height/2)

    beginShape();
    stroke(255);d
    noFill();
    strokeWeight(1);
    for(let a = 0 ; a < TWO_PI * d ; a += 0.02){
        let r = 200*cos(k*a);
        let x = r * sin(a);
        let y = r * cos(a);
        point(x,y);
    }

    endShape(CLOSE);
}

 