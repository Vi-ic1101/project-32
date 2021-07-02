const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise.png"


function preload() {
    // create getBackgroundImg( ) here
    backgroundImg=loadImage(bg)
getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
   if (getBackgroundImg)
        background(backgroundImg)
   

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJSON=await response.json();
    // write code slice the datetime

    var datetime=responseJSON.datetime;
    var hours=datetime.slice(11,20)
    // add conditions to change the background images from sunrise to sunset
    if(hours>=0500 && hour<=0600){
     bg="sunrise1.png"
    }else if(hours>=0600 && hour<=0800){
    bg="sunrise2.png"
    }else if(hours>=0800 && hour<=1000){
    bg="sunrise3.png"
    }else if(hours>=1000 && hour<=1200){
    bg="sunrise4.png"
    }else if(hours>=1200 && hour<=1400){
    bg="sunrise5.png"
    }else if(hours>=1400 && hour<=1600){
    bg="sunrise6.png"
    }else if(hours>=1600 && hour<=1700){
    bg="sunset7.png"
    }else if(hours>=1700 && hour<=1800){
    bg="sunset8.png"
    }else if(hours>=1800 && hour<=1900){
    bg="sunset10.png"
    }else if(hours>=1900 && hour<=2200){
    bg="sunset11.png"
    }else {
    bg="sunset12.png"
    }


    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg)
    console.log(hours)

}
