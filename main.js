function preload() {
    
    }
    
    function setup() {
        canvas = createCanvas(400,400);
        canvas.position(110,250)
        video = createCapture(VIDEO);
        video.hide()
    
    }
    
    function draw() {
    image(video,150,120,140,140);
      
      fill(0,0,120,0.5);
      stroke(0,0,128);
      square(150,120,150)
      strokeWeight(25)
    }