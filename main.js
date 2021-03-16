
//varibles
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var car1_x = 10;
var car1_y = 10;
var car1_width = 100;
var car1_height = 90;
var car1_img = "car1.png";

var car2_x = 10;
var car2_y = 110;
var car2_width = 100;
var car2_height = 90;
var car2_img = "car2.png";
var bg_img = "racing.png"
//functions

    
   var bg_imgtag = new Image();
   bg_imgtag.onload = uploadBackground;
   bg_imgtag.src = bg_img;

    var car1_imgtag = new Image();
    car1_imgtag.onload = uploadCar1;
    car1_imgtag.src = car1_img;
    var car2_imgtag = new Image();
    car2_imgtag.onload = uploadCar2;
    car2_imgtag.src = car2_img;

   
    
function uploadBackground() {
    ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);
}
function uploadCar1() {
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
  }
  function uploadCar2() {
     ctx.drawImage(car2_imgtag,car2_x,car2_y,car1_width,car2_height);
  }
  window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
var keyPressed = e.keyCode;
console.log(keyPressed);
//ifs
if (keyPressed == '38'){
    car1_up();
    console.log("up arrow key");
    
}
if (keyPressed == '40'){
    car1_down();
    console.log("down arrow key");
    
}
if (keyPressed == '37'){
    car1_left();
    console.log("left arrow key");
    
}
if (keyPressed == '39'){
    car1_right();
    console.log("right arrow key");
    
}

if (keyPressed == '87'){
    car2_up();
    console.log("key w");
}
if (keyPressed == '83'){
    car2_down();
    console.log("key s");
}
if (keyPressed == '65'){
    car2_left();
    console.log(" key a");
}
if (keyPressed == '68'){
    car2_right();
    console.log("key d");

}
if ( car1_x > 700) {
    console.log("car1 won !!");
    document.getElementById('game_status').innerHTML = "Car 1 Won!!";
}
if ( car2_x > 700) {
    console.log("car2 won !!");
    document.getElementById('game_status').innerHTML = "Car 2 Won!!";
}
}

function car1_up() {
    if (car1_y >= 0){
     car1_y = car1_y - 10;
     console.log("When up arrow is pressed, x = " + car1_x + "y = " + car1_y);
     uploadBackground();
     uploadCar1();
     uploadCar2();
    }
}
function car1_down() {
    if (car1_y <= 500){
     car1_y = car1_y + 10;
     console.log("When down arrow is pressed, x = " + car1_x + "y = " + car1_y);
     uploadBackground();
     uploadCar1();
     uploadCar2();
    }
}
function car1_left() {
    if (car1_x <= 500){
     car1_x = car1_x - 10;
     console.log("When left arrow is pressed, x = " + car1_x + "y = " + car1_y);
     uploadBackground();
     uploadCar1();
     uploadCar2();
    }
}
function car1_right() {
 if (car1_x >= 0){
     car1_x = car1_x + 10;
     console.log("When right arrow is pressed, x = " + car1_x + "y = " + car1_y);
     uploadBackground();
     uploadCar1();
     uploadCar2();
 }
}

function car2_up() {
    if (car2_y >= 0){
     car2_y = car2_y - 10;
     console.log("When up arrow is pressed, x = " + car2_x + "y = " + car2_y);
     uploadBackground();
     uploadCar1();
     uploadCar2();
    }
}
function car2_down() {
    if (car2_y <= 500){
    car2_y = car2_y + 10;
     console.log("When down arrow is pressed, x = " + car2_x + "y = " + car2_y);
     uploadBackground();
     uploadCar1();
     uploadCar2();
    }
}
function car2_left() {
    if (car2_x <= 500){
     car2_x = car2_x - 10;
     console.log("When left arrow is pressed, x = " + car2_x + "y = " + car2_y);
     uploadBackground();
     uploadCar1();
     uploadCar2();
    }
}
function car2_right() {
 if (car2_x >= 0){
     car2_x = car2_x + 10;
     console.log("When right arrow is pressed, x = " + car2_x + "y = " + car2_y);
     uploadBackground();
     uploadCar1();
     uploadCar2();
 }
}
