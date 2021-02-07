function setup() {
  createCanvas(450,480);
  angleMode(DEGREES);
}

function draw() {

  background(0);

  fill(255);
  textSize(24);
  fill("white");
  textStyle("bold");
  text("12", 185,30);
  text("6", 185,390);
  text("9", 10,210);
  text("3", 370,210);
  textSize(50)
  text("CLOCK", 110,450); 

translate(200,200)
rotate (-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(8);
  stroke("red");
  noFill();
  let scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);
  
  stroke("white");
  let mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);
  
  stroke("blue");
  let HrAngle = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,HrAngle);
  
 
  push();
  rotate(scAngle);
  stroke("red");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(mnAngle);
  stroke("blue");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(HrAngle);
  stroke("white");
  line(0,0,50,0);
  pop();

}