
nose_x = 0;
nose_y = 0;

function preload(){
beard = loadImage('https://i.postimg.cc/xj6R5LJh/Beardyyyyyyyy.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is intialised");

}

function draw(){
image(video,0,0,300,300);
image(beard,nose_x,nose_y,100,100);
}

function take_snapshot(){
   save('my_filtres.png');
}

function gotPoses(results){
    if(results.length>0){
       console.log(results);
       console.log("nose x = "+results[0].pose.nose.x);
       console.log("nose y = "+results[0].pose.nose.y);
       nose_x = results[0].pose.nose.x - 50;
       nose_y = results[0].pose.nose.y - 10;
    }
}


