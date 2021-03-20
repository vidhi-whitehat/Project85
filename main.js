canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");  
background_image = "car_racing.jpg";

car1_width = 120;
car1_height = 70;
car1_image = "car1.png"
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png"
car2_x = 10;
car2_y = 100;

function add()
{ 
    background_imgTag = new Image(); //defining a variable with a new image 
    background_imgTag.onload = uploadBackground;// setting a function, onloading this variable
    background_imgTag.src = background_image; // load image 

    car1_imgTag = new Image(); //defining a variable with a new image 
    car1_imgTag.onload = uploadCar1; // setting a function, onloading this variable 
    car1_imgTag.src = car1_image;  // load image 

    car2_imgTag = new Image(); //defining a variable with a new image 
    car2_imgTag.onload = uploadCar2; // setting a function, onloading this variable 
    car2_imgTag.src = car2_image;  // load image 
}

function uploadBackground() 
{ 
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); 
} 
function uploadCar1() 
{ 
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height); 
} 
function uploadCar2() 
{ 
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height); 
} 


window.addEventListener("keydown", my_keydown);

function my_keydown(e) 
{ 
     keyPressed = e.keyCode;
     console.log(keyPressed);
     if(keyPressed == '38') 
     { 
        car1_up(); 
        console.log("up arrow key"); 
     }
      if(keyPressed == '40') 
      { 
        car1_down(); 
        console.log("down arrow key"); 
      } 
      if(keyPressed == '37') 
      { 
        car1_left(); 
        console.log("left arrow key"); 
      } 
      if(keyPressed == '39') 
      {
         car1_right(); 
        console.log("right arrow key"); 
      }
      if(keyPressed == '87') 
      { 
         car2_up(); 
         console.log("w");
      }
      if(keyPressed == '90') 
      { 
         car2_down(); 
         console.log("z");
      }
      if(keyPressed == '65') 
      { 
         car2_left(); 
         console.log("a");
      }
      if(keyPressed == '83') 
      { 
         car2_right(); 
         console.log("s");
      }

      //alert(car1_x);
      if(car1_x >= 680) 
      {
         console.log("car1 Won"); 
         document.getElementById('game_status').innerHTML = "Car 1 Won !!";
      } 

      if(car2_x >= 680) 
      {
         console.log("car2 Won"); 
         document.getElementById('game_status').innerHTML = "Car 2 Won !!";
      } 
} 


//**************************************CAR-1 ********************//

function car1_up() 
{
   if(car1_y >=10) 
   { 
      car1_y = car1_y - 10; 
      console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
      uploadBackground(); 
      uploadCar1(); 
      uploadCar2(); 
   } 
}

function car1_down() 
{ 
   if(car1_y <=520) 
   { 
      car1_y =car1_y+ 10; 
      console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
      uploadBackground(); 
      uploadCar1();
      uploadCar2(); 
   } 
 } 

 function car1_left() 
 { 
   if(car1_x >= 10) 
   { 
      car1_x =car1_x - 10; 
      console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
      uploadBackground(); 
      uploadCar1(); 
      uploadCar2(); 
   } 
} 

function car1_right() 
{ 
   if(car1_x <= 670) 
   { 
      car1_x =car1_x + 10; 
      console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
      uploadBackground(); 
      uploadCar1(); 
      uploadCar2(); 
   }
}


//**************************************CAR-2 ********************//

function car2_up() 
{
   if(car2_y >=10) 
   { 
      car2_y = car2_y - 10; 
      console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y);
      uploadBackground(); 
      uploadCar2();
      uploadCar1();  
   } 
}

function car2_down() 
{ 
   if(car2_y <=520) 
   { 
      car2_y =car2_y + 10; 
      console.log("When down arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
      uploadBackground(); 
      uploadCar2();
      uploadCar1(); 
   } 
 } 

 function car2_left() 
 { 
   if(car2_x >= 10) 
   { 
      car2_x =car2_x - 10; 
      console.log("When left arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
      uploadBackground(); 
      uploadCar2(); 
      uploadCar1(); 
   } 
} 

function car2_right() 
{ 
   if(car2_x <= 670) 
   { 
      car2_x =car2_x + 10; 
      console.log("When right arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
      uploadBackground(); 
      uploadCar2();
      uploadCar1();  
   }
}