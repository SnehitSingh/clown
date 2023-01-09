noseX=0;
noseY=0;
function preload(){
    clown_nose = loadimage('https://i.postimg.cc/T36sNL2V/pngtree-clown-red-nose-animation-illustration-image-1243961-removebg-preview.png')
}
function setup(){
     canvas =createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes)}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose, noseX-15, noseY-15, 30, 30);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function modelLoaded(){
    console.log('poseNet Is initialized');
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}