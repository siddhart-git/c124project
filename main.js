rightWristX = 0;
leftWristX = 0;
difference = 0;



function setup(){
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);

}
function modelLoaded(){
    console.log("posenet has initialised");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.y;
        difference = floor(leftWristX-rightWristX);
        console.log("right wrist x is"+rightWristX+", left Wrist x is"+leftWristX+"difference is"+difference);
    }
}
function draw(){
    background("#ff0000");
    textSize(difference);
    fill("black");
    text("hello this is a notice board",50,400);
}