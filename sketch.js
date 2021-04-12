let mobilenet;

let video;

let label = '';

function modelReady() {
    console.log('Model is ready!!!')
    mobilenet.predict(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error)
    }else{

        label = results[0].className + " " + round(results[0].probability*100) + "%";
        mobilenet.predict(gotResults);
      
    }
}

// function imageReady() {
//     image(puffin, 0, 0, width, height);
// }

function setup(){
    createCanvas(640,400);
    video = createCapture(VIDEO)
    video.hide()
    background(0)
    
    mobilenet = ml5.imageClassifier('MobileNet',video, modelReady);
}

function draw(){
    background(0)
    image(video,0,0);
    fill("white");
    textSize(32)
    text(label, 10, height - 10)
}