noseX=0;
noseY=0;

function preload() {
clown_nose = loadImage('https://i.postimg.cc/BQ7FCBpc/Clown-Nose-PNG-Image-1-768x768.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.x;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    image(clown_nose, noseX-15, noseY+5, 30, 30);
    //circle(noseX-2, noseY-3, 20);
    
}
function take_snapshot() {
    save('myFilterImage.png');
}