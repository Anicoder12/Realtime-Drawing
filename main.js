function preload() 
{

}

function setup() 
{
video = createCapture(VIDEO);
video.size(450,450);
canvas = createCanvas(400,400);
canvas.position(500,260);
poseNet1 = ml5.poseNet(video, modelloaded);
poseNet1.on("pose", gotposes);
}

nose_x = 0
nose_y = 0
leftwrist = 0
rightwrist = 0
difference = 0

function gotposes(results) 
{
if(results.length > 0) {
console.log(results);
}

nose_x = results[0].pose.nose.x;
nose_y = results[0].pose.nose.y;

leftwrist = results[0].pose.leftWrist.x;
rightwrist = results[0].pose.rightWrist.x;
difference = floor(leftwrist - rightwrist);
}

function modelloaded() 
{
    console.log("Model has successfully been loaded!");
}

function draw()
{
background("yellow");
document.getElementById("hw").innerHTML = difference + " px";
stroke("blue")
fill("blue")
square(nose_x, nose_y, difference);
}