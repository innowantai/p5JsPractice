

let bird;
let pipe;
let pipes = [];
let score = 0;
function setup() {
    createCanvas(800,600);
    bird = new Bird();
    pipe = new Pipe();
    pipes.push(new Pipe());
}
 

function draw() {
    background(0);

    for (let i = pipes.length - 1 ; i >= 0; i--){
        pipes[i].show();
        pipes[i].update();

        if(pipes[i].hits(bird)){
            
            //alert("Game Over");
            window.location.reload();
        }else if(pipes[i].passed(bird)){
            score++;
            document.querySelector('.score').innerText = score;
        }


        
 

        if (pipes[i].offscreen()) {
            pipes.splice(i,1); 
        }
    }

    bird.update();
    bird.show();

    if (frameCount % 70 === 0) {
        pipes.push(new Pipe());  
    }
    
 
}


function keyPressed() {
    if (key == ' ') {
        bird.up(); 
    }    
}
