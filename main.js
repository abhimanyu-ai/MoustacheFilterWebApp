noseX=0;
noseY=0;
function preload() {

}
function setup() {
  canvas=createCanvas(300, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function modelLoaded() {
  console.log("Posenet has been initialized");
}
function gotPoses(results) {
  console.log(results);
  noseX=results[0].pose.x.nose.x-15;
  noseY=results[0].pose.y.nose.y-15;
}
function draw() {
image(video, 0, 0, 300, 300);
}