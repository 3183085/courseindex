//SKETCH 2 VARIABLES
let s2angle1 = -30;
let s2angle2 = 30;
let s2angle3 = 0;

//SKETCH 3 VARIABLES
let s3growX = 0, s3growY = 0;
let change = false;

//SKETCH 4 VARIABLES
let s4angle = 0;
let s4xs = [200, -200, 200, -200, 200, -200, 200, -200, 200, -200, 100, -100, 0];
let s4ys = [-250, -250, -150, -150, -50, -50, 50, 50, 150, 150, 250, 250, 350];
let s4rs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let s4gs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let s4bs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//SKETCH 5 VARIABLES
let s5angle = 0;
let s5xs = [300, -300, 250, -250, 200, -200, 150, -150, 100, -100, 50, -50, 0];
let s5ys = [-250, -250, -150, -150, -50, -50, 50, 50, 150, 150, 250, 250, 350];
let s5cr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let s5rectW = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
let s5rectH = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
let s5cx = 0;
let s5xy = 0;

//SKETCH 6 VARIABLES
let s6angle1 = 0;
let s6angle2 = 0;
let s6xs = [300, -300, 250, -250, 200, -200, 150, -150, 100, -100, 50, -50, 0];
let s6ys = [-250, -250, -150, -150, -50, -50, 50, 50, 150, 150, 250, 250, 350];
let s6swapW = false, s6swapB = true;

//SKETCH 7 VARIABLES
let s7angle1 = 0, s7angle2 = 0;

//SKETCH 8 VARIABLES
//NA

//SKETCH 9 VARIABLES
let s9hourHand = 25;
let s9minuteHand = 15;
let s9secondHand = -25;

//SKETCH 10 VARIABLES
//NA

//SKETCH 11 VARIABLES
let s11b = 0;
let s11over = false;

//SKETCH 12 VARIABLES
let s12x1 = 250, s12x2 = -250;
let s12r1 = -25, s12r2 = 25;
let s12shift1 = false, s12shift2 = false;
let s12rotate1 = false, s12rotate2 = true;

//SKETCH 13 VARIABLES
let s13angle1 = 45;
let s13angle2 = 0;
let s13xs = [300, 250, 200, 150, 100, 50, 0, -50, -100, -150, -200, -250, -300];
let s13ys = [-250, -150, -50, 50, 150, 250, 350, 250, 150, 50, -50, -150, -250];
let s13swap = false, s13swap2 = false;

//SKETCH 14 VARIABLES
let s14xB = 0; s14yB = 0;
let s14xR = 0; s14yR = 0;
let s14swapB = false, s14swapR = false;

//SKETCH 15 VARIABLES
let s15offset = 25

//SKETCH 16 VARIABLES
let s16yr = [0, 200, 400, 600, 800, 1000];

//SKETCH 17 VARIABLES
//NONE

//SKETCH 18 VARIABLES
let s18xB = -1;
let s18xR = 1;
let s18shiftB = false, s18shiftR = false;

//SKETCH 19 VARIABLES
let s19scX = 0, s19scY = 0;
let s19shrink = false;

//SKETCH 20 VARIABLES
let s20distortF = 2, s20distortS = 2;
let s20swapF = false, s20swapS = false;

//SKETCH 21 VARIABLES
let s21angle = 15;

//SKETCH 22 VARIABLES
let s22angle = 20;
let s22swap = false;


//SKETCH 2
var sketch2 = function(SK2){
    SK2.setup = function(){
        SK2.createCanvas(1000, 1000);
        SK2.angleMode(DEGREES);
        SK2.rectMode(CENTER);
    }
  
    SK2.draw = function(){
        SK2.background(153, 0, 255);
        SK2.translate(500, 500);
      
        SK2.push();
        SK2.rotate(s2angle1);
        SK2.stroke(0, 0, 0);
        SK2.fill(0, 0, 0);
        SK2.rect(-200, -40, 350, 1050);
        SK2.pop();
        
        SK2.push();
        SK2.rotate(s2angle2);
        SK2.stroke(0, 0, 0);
        SK2.fill(0, 0, 0);
        SK2.rect(200, -40, 350, 1050);
        SK2.pop();
      
        SK2.push();
        SK2.rotate(s2angle1);
        SK2.stroke(255, 255, 255);
        SK2.fill(255, 255, 255);
        SK2.rect(-200, -40, 300, 1000);
        SK2.pop();
        
        SK2.push();
        SK2.rotate(s2angle2);
        SK2.stroke(255, 255, 255);
        SK2.fill(255, 255, 255);
        SK2.rect(200, -40, 300, 1000);
        SK2.pop();
      
        SK2.push();
        SK2.rotate(s2angle1);
        SK2.stroke(0, 0, 0);
        SK2.fill(0, 0, 0);
        SK2.rect(-200, -40, 250, 950);
        SK2.pop();
      
        SK2.push();
        SK2.rotate(s2angle2);
        SK2.stroke(0, 0, 0);
        SK2.fill(0, 0, 0);
        SK2.rect(200, -40, 250, 950);
        SK2.pop();
      
        SK2.stroke(255, 255, 255);
        SK2.fill(255, 255, 255);
        SK2.rect(0, 480, 100, 50);
        
        SK2.push();
        SK2.rotate(s2angle1);
        SK2.stroke(255, 255, 255);
        SK2.fill(255, 255, 255);
        SK2.rect(-200, -40, 200, 900);
        SK2.pop();
        
        SK2.push();
        SK2.rotate(s2angle2);
        SK2.stroke(255, 255, 255);
        SK2.fill(255, 255, 255);
        SK2.rect(200, -40, 200, 900);
        SK2.pop();
      
      
        SK2.push();
        SK2.rotate(s2angle1);
        SK2.stroke(0, 0, 0);
        SK2.fill(0, 0, 0);
        SK2.rect(-200, -40, 150, 850);
        SK2.pop();
      
        SK2.push();
        SK2.rotate(s2angle2);
        SK2.stroke(0, 0, 0);
        SK2.fill(0, 0, 0);
        SK2.rect(200, -40, 150, 850);
        SK2.pop();
      
        SK2.stroke(0, 0, 0);
        SK2.fill(0, 0, 0);
        SK2.rect(0, 420, 80, 100);
      
        SK2.push();
        SK2.rotate(s2angle1);
        SK2.stroke(255, 255, 255);
        SK2.fill(255, 255, 255);
        SK2.rect(-200, -40, 100, 800);
        SK2.pop();
      
        SK2.push();
        SK2.rotate(s2angle2);
        SK2.stroke(255, 255, 255);
        SK2.fill(255, 255, 255);
        SK2.rect(200, -40, 100, 800);
        SK2.pop();
      
        SK2.stroke(255, 255, 255);
        SK2.fill(255, 255, 255);
        SK2.rect
    }
  
  }
//SKETCH 3
var sketch3 = function(SK3){
  SK3.x = 1000
  SK3.y = 1000;

  SK3.setup = function(){
    SK3.createCanvas(1000, 1000);
    SK3.ellipseMode(CENTER);
  }

  SK3.draw = function(){
    SK3.background(255, 179, 93);
    SK3.translate(500, 500);
  
    SK3.stroke(255, 255, 255);
    SK3.fill(255, 255, 255);
  
    SK3.scale(1.2,1.2);
  
    SK3.ellipse(300, -250, 20+s3growX, 20+s3growY);
    SK3.ellipse(-300, -250, 20+s3growX, 20+s3growY);
  
    SK3.ellipse(275, -200, 25+s3growX, 25+s3growY);
    SK3.ellipse(-275, -200, 25+s3growX, 25+s3growY);
  
    SK3.ellipse(250, -150, 30+s3growX, 30+s3growY);
    SK3.ellipse(-250, -150, 30+s3growX, 30+s3growY);
  
    SK3.ellipse(225, -100, 35+s3growX, 35+s3growY);
    SK3.ellipse(-225, -100, 35+s3growX, 35+s3growY);
  
    SK3.ellipse(200, -50, 40+s3growX, 40+s3growY);
    SK3.ellipse(-200, -50, 40+s3growX, 40+s3growY);
  
    SK3.ellipse(175, 0, 45+s3growX, 45+s3growY);
    SK3.ellipse(-175, 0, 45+s3growX, 45+s3growY);
  
    SK3.ellipse(150, 50, 50+s3growX, 50+s3growY);
    SK3.ellipse(-150, 50, 50+s3growX, 50+s3growY);
    
    SK3.ellipse(125, 100, 55+s3growX, 55+s3growY);
    SK3.ellipse(-125, 100, 55+s3growX, 55+s3growY);
  
    SK3.ellipse(100, 150, 60+s3growX, 60+s3growY);
    SK3.ellipse(-100, 150, 60+s3growX, 60+s3growY);
  
    SK3.ellipse(75, 200, 65+s3growX, 65+s3growY);
    SK3.ellipse(-75, 200, 65+s3growX, 65+s3growY);
  
    SK3.ellipse(50, 250, 70+s3growX, 70+s3growY);
    SK3.ellipse(-50, 250, 70+s3growX, 70+s3growY);
  
    SK3.ellipse(25, 300, 75+s3growX, 75+s3growY);
    SK3.ellipse(-25, 300, 75+s3growX, 75+s3growY);
  
    SK3.ellipse(0, 350, 80+s3growX, 80+s3growY);
  
    if (s3growX >= 10 || s3growY >= 10){
      change = true;
    }
    else if (s3growX <= -10 || s3growY <= -10){
      change = false;
    }
  
    if (change == false){
      s3growX = s3growX + 1;
      s3growY = s3growY + 1;
    }
    else if (change == true){
      s3growX = s3growX - 1;
      s3growY = s3growY - 1;
    }
  }

}
//SKETCH 4
var sketch4 = function(SK4){
    SK4.setup = function(){
        SK4.createCanvas(1000, 1000);
        SK4.angleMode(DEGREES);
        SK4.rectMode(CENTER);
      
        for (let i = 0; i < s4rs.length; i++) {
          s4rs[i] = Math.floor(Math.random() * 256 + 1);
          s4gs[i] = Math.floor(Math.random() * 256 + 1);
          s4bs[i] = Math.floor(Math.random() * 256 + 1);
        }
    }
  
    SK4.draw = function(){
        SK4.background(220, 220, 220);
        SK4.translate(500, 500);
      
        for (let i = 0; i < s4xs.length; i++) {
          SK4.stroke(0, 0, 0);
          SK4.strokeWeight(8);
      
          SK4.fill(s4rs[i], s4gs[i], s4bs[i]);
          SK4.rect(s4xs[i], s4ys[i], 100, 100);
        }
    }


}
//SKETCH 5
var sketch5 = function(SK5){
    SK5.setup = function(){
        SK5.createCanvas(1000, 1000);
        SK5.angleMode(DEGREES);
        SK5.rectMode(CENTER);

        for (let i = 0; i < s5cr.length; i++) {
            s5cr[i] = Math.floor(Math.random() * 2);
            if (s5cr[i] == 1){
                s5cri = i;
                break;
            }
        }

        for (let i = 0; i < s5cr.length; i++) {
            SK5.print(s5cr[i]);
        }

        s5cx = Math.floor(Math.random() * 90) + 45;
        s5cy = s5cx;

        for (let i = 0; i < s5rectW.length; i++) {
            s5rectW[i] = Math.floor(Math.random() * 80 + 20);
            s5rectH[i] = Math.floor(Math.random() * 80 + 20);
        }
    }
  
    SK5.draw = function(){
        SK5.background(0, 210, 140);
        SK5.translate(500, 500);
      
        SK5.stroke(255, 255, 255);
        SK5.fill(255, 255, 255);
      
        for (let i = 0; i < s5xs.length; i++) {
          if (s5cr[i] == 1){
            SK5.ellipse(s5xs[i], s5ys[i], s5cx, s5cy);
          }
          else{
            SK5.rect(s5xs[i], s5ys[i], s5rectW[i], s5rectH[i]);
          }
        }
    }


}
//SKETCH 6
var sketch6 = function(SK6){
    SK6.setup = function(){
        SK6.createCanvas(1000, 1000);
        SK6.angleMode(DEGREES);
        SK6.rectMode(CENTER);
    }
  
    SK6.draw = function(){
        SK6.translate(500, 500);
        SK6.background(29, 46, 108);
      
      SK6.push();
        SK6.stroke(0, 0, 0);
        SK6.fill(0, 0, 0);
        SK6.rotate(s6angle2);
        for (let i = 0; i < s6xs.length; i++) {
          SK6.rect(s6xs[i], s6ys[i], 120, 120);
        }
      SK6.pop();
      
        SK6.stroke(255, 255, 255);
        SK6.fill(255, 255, 255);
        SK6.rotate(s6angle1);
      
        for (let i = 0; i < s6xs.length; i++) {
          SK6.rect(s6xs[i], s6ys[i], 60, 60);
        }
        
        if (s6angle1 >= 1){
          s6swapW = true;
        }
        else if(s6angle1 <= -1){
          s6swapW = false;
        }
      
        if (s6swapW == true){
          s6angle1 = s6angle1 - 0.5;
        }
        else if (s6swapW == false){
          s6angle1 = s6angle1 + 0.5;
        }
      
        if (s6angle2 >= 1){
          s6swapB = true;
        }
        else if(s6angle2 <= -1){
          s6swapB = false;
        }
      
        if (s6swapB == true){
          s6angle2 = s6angle2 - 0.5;
        }
        else if (s6swapB == false){
          s6angle2 = s6angle2 + 0.5;
        }
    }


}
//SKETCH 7
var sketch7 = function(SK7){
    SK7.setup = function(){
        SK7.createCanvas(1000, 1000);
        SK7.angleMode(DEGREES);
        SK7.rectMode(CENTER);
    }
  
    SK7.draw = function(){
        SK7.translate(500, 500);
        SK7.background(45, 45, 45);
      
        SK7.stroke(255, 145, 125);
        SK7.fill(255, 145, 125);
      
        SK7.push();
        SK7.rotate(-3);
        SK7.rect(-100, -40, 150, 1500);
        SK7.pop();
        
        SK7.push();
        SK7.rotate(30);
        SK7.rect(300, -40, 150, 1500);
        SK7.pop();
      
        SK7.stroke(255, 195, 125);
        SK7.fill(255, 195, 125);
      
        SK7.push();
        SK7.rotate(-3);
        SK7.rect(-150, -40, 150, 1500);
        SK7.pop();
      
        SK7.push();
        SK7.rotate(30);
        SK7.rect(250, -40, 150, 1500);
        SK7.pop();
      
        SK7.stroke(255, 240, 125);
        SK7.fill(255, 240, 125);
      
        SK7.push();
        SK7.rotate(-3);
        SK7.rect(-200, -40, 150, 1500);
        SK7.pop();
        
        SK7.push();
        SK7.rotate(30);
        SK7.rect(200, -40, 150, 1500);
        SK7.pop();
      
    }


}
//SKETCH 8
var sketch8 = function(SK8){
    SK8.setup = function(){
        SK8.createCanvas(1000, 1000);
        SK8.angleMode(DEGREES);
        SK8.rectMode(CENTER);
    }
  
    SK8.draw = function(){
        SK8.translate(500, 500);
        SK8.background(20, 20, 20);
      
        SK8.stroke(255, 255, 255);
        SK8.fill(255, 255, 255);
        
        SK8.triangle(0, 400, -350, -350, 350, -350);
      
      
        SK8.stroke(20, 20, 20);
        SK8.fill(20, 20, 20);
        SK8.triangle(0, 100, -250, -350, 250, -350);
      
      
        SK8.stroke(255, 255, 255);
        SK8.fill(255, 255, 255);
      
        SK8.triangle(0, 0, -200, -350, 200, -350);
    }


}
//SKETCH 9
var sketch9 = function(SK9){
    SK9.setup = function(){
        SK9.createCanvas(1000, 1000);
        SK9.angleMode(DEGREES);
        SK9.rectMode(CENTER);
    }
  
    SK9.draw = function(){
        SK9.translate(500, 500);
        SK9.background(102, 51, 0);

        SK9.stroke(51, 26, 0);
        SK9.strokeWeight(30);
        SK9.fill(255, 169, 77);
        SK9.ellipse(0, 0, 850, 850);

        SK9.push();
        SK9.stroke(255, 255, 255);
        SK9. strokeWeight(20);
        SK9.rotate(s9minuteHand);
        SK9.line(0, 0, 0, -350)
        SK9.pop();

        SK9.push();
        SK9.stroke(51, 51, 51);
        SK9. rotate(s9hourHand);
        SK9.strokeWeight(25);
        SK9.line(0, 0, 0, -390)
        SK9.pop();

        s9hourHand = s9hourHand + .5;

        SK9.push();
        SK9.stroke(255, 255, 255);
        SK9.strokeWeight(10);
        SK9.rotate(s9secondHand);
        SK9.line(0,0, 0, -320)
        SK9.pop();

        SK9.stroke(255, 255, 255);
        SK9.fill(255, 255, 255);
        SK9.ellipse(0, 0, 10, 10);
    }


}
//SKETCH 10
var sketch10 = function(SK10){
    SK10.setup = function(){
        SK10.createCanvas(1000, 1000);
        SK10.angleMode(DEGREES);
        SK10.rectMode(CENTER);
    }
  
    SK10.draw = function(){
        SK10.translate(500, 500);
        SK10.background(0, 0, 0);
    
        SK10.stroke(155, 0, 0);
        SK10.fill(155, 0, 0);

        SK10.rect(0, -250, 1500, 100);
    
        SK10.stroke(155, 45, 0);
        SK10.fill(155, 45, 0);
    
        SK10.rect(0, -125, 1500, 100);
    
        SK10.stroke(155, 95, 0);
        SK10.fill(155, 95, 0);
    
        SK10.rect(0, -0, 1500, 100);
    
        SK10.stroke(155, 135, 0);
        SK10.fill(155, 135, 0);
        
        SK10.rect(0, 125, 1500, 100);
    
        SK10.stroke(155, 190, 0);
        SK10.fill(155, 190, 0);
    
        SK10.rect(0, 250, 1500, 100);

        SK10.push();
        SK10.rotate(25);
        SK10.stroke(0, 0, 0);
        SK10.fill(0, 0, 0);
        SK10.rect(400, 0, 400, 1500);
        SK10.pop();
    
        SK10.push();
        SK10.rotate(-25);
        SK10.stroke(0, 0, 0);
        SK10.fill(0, 0, 0);
        SK10.rect(-400, 0, 400, 1500);
        SK10.pop();
    }
}
//SKETCH 11
var sketch11 = function(SK11){
    SK11.setup = function(){
        SK11.createCanvas(1000, 1000);
        SK11.angleMode(DEGREES);
        SK11.rectMode(CENTER);
    }
  
    SK11.draw = function(){
        SK11.translate(500, 500);
        SK11.background(155, 0, s11b);
    
        SK11.push();
        SK11. rotate(-25);
        SK11.stroke(255, 255, 255);
        SK11.fill(255, 255, 255);
        SK11.rect(-180, -40, 100, 800);
        SK11.pop();
    
        SK11.push();
        SK11.rotate(25);
        SK11.stroke(255, 255, 255);
        SK11.fill(255, 255, 255);
        SK11.rect(180, -40, 100, 800);
        SK11.pop();
    
        SK11.stroke(255, 255, 255);
        SK11.fill(255, 255, 255);
        SK11.rect(0, 375, 110, 100);
    
        SK11.push();
        SK11.stroke(155, 0, s11b);
        SK11.fill(155, 0, s11b);
        SK11.rect(0, -350, 800, 100);
        SK11.pop();
    
      if (s11b >= 255) {
        s11over = true;
      }
      else if (s11b <= 0){
        s11over = false;
      }
    
      if (s11over == false){
          s11b = s11b + 0.5;
      }
      else if (s11over == true){
          s11b = s11b - 0.5;
      }
    }
}
//SKETCH 12
var sketch12 = function(SK12){
    SK12.setup = function(){
        SK12.createCanvas(1000, 1000);
        SK12.angleMode(DEGREES);
        SK12.rectMode(CENTER);
    }
  
    SK12.draw = function(){
        SK12. translate(500, 500);
        SK12.background(255, 179, 179);
    
        SK12.push();
        SK12.rotate(25);
        SK12.stroke(179, 0, 71);
        SK12.strokeWeight(10);
        SK12.fill(250, 110, 110);
        SK12.rect(s12x1, 0, 150, 1500);
        SK12.pop();
    
        SK12. push();
        SK12.rotate(-25);
        SK12.stroke(250, 110, 110);
        SK12.strokeWeight(10);
        SK12.fill(179, 0, 71);
        SK12.rect(s12x2, 0, 150, 1500);
        SK12.pop();
    
        if (s12x1 >= 250) {
            s12shift1 = true;
        }
        else if (s12x1 <= -250 ){
            s12shift1 = false;
        }
    
        if (s12x2 >= 250) {
            s12shift2 = true;
        }
        else if (s12x2 <= -250){
            s12shift2 = false;
        }
    
    
        if (s12shift1 == false){
            s12x1 = s12x1 + 3;
        }
        else if (s12shift1 == true){
            s12x1 = s12x1 - 3;
        }
    
        if (s12shift2 == false){
            s12x2 = s12x2 + 3;
        }
        else if (s12shift2 == true){
            s12x2 = s12x2 - 3;
        }
    
    
        if (s12r1 >= 35) {
            s12rotate1 = true;
        }
        else if (s12r1 <= -35 ){
            s12rotate1 = false;
        }
    
        if (s12r2 >= 35) {
            s12rotate2 = true;
        }
        else if (s12r2 <= -35){
            s12rotate2 = false;
        }
    
        if (s12rotate1 == false){
            s12r1 = s12r1 + 0.15;
        }
        else if (s12rotate1 == true){
            s12r1 = s12r1 - 0.15;
        }
    
        if (s12rotate2 == false){
            s12r2 = s12r2 + 0.15;
        }
        else if (s12rotate2 == true){
            s12r2 = s12r2 - 0.15;
        }
    }
}
//SKETCH 13
var sketch13 = function(SK13){
    SK13.setup = function(){
        SK13.createCanvas(1000, 1000);
        SK13.angleMode(DEGREES);
        SK13.rectMode(CENTER);
    }
  
    SK13.draw = function(){
        SK13.translate(500, 500);
        SK13.background(180, 180, 180);
        s13swap = false;
        s13swap2 = false;
      
      for (let i = 0; i < s13xs.length; i++) {
          if (s13swap2 == false){
            SK13.push();
            SK13.translate(s13xs[i], s13ys[i]);
            SK13.stroke(255, 255, 255);
            SK13.fill(255, 255, 255);
            SK13.rotate(s13angle1);
            SK13.rect(0, 0, 120, 120);
            SK13.pop();
            s13swap2 = true;
          }
          else if (s13swap2 == true){
            SK13.push();
            SK13.translate(s13xs[i], s13ys[i]);
            SK13.stroke(0, 0, 0);
            SK13.fill(0, 0, 0);
            SK13.rotate(s13angle2);
            SK13.rect(0, 0, 120, 120);
            SK13.pop();
            s13swap2 = false;
          }
      }
      
        for (let i = 0; i < s13xs.length; i++) {
            if (s13swap == false){
                SK13.push();
                SK13.translate(s13xs[i], s13ys[i]);
                SK13.stroke(0, 0, 0);
                SK13.fill(0, 0, 0);
                SK13.rotate(s13angle1);
                SK13.rect(0, 0, 80, 80);
                SK13.pop();
                s13swap = true;
            }
            else if (s13swap == true){
                SK13.push();
                SK13.translate(s13xs[i], s13ys[i]);
                SK13.stroke(255, 255, 255);
                SK13.fill(255, 255, 255);
                SK13.rotate(s13angle2);
                SK13.rect(0, 0, 80, 80);
                SK13.pop();
                s13swap = false;
            }
        }
        s13angle1 = s13angle1 + 0.5;
        s13angle2 = s13angle2 - 0.5;
    }
}
//SKETCH 14
var sketch14 = function(SK14){
    SK14.setup = function(){
        SK14.createCanvas(1000, 1000);
        SK14.angleMode(DEGREES);
    }
  
    SK14.draw = function(){
        SK14.background(0, 0, 0);

        SK14.stroke(253,62,62);
        SK14.fill(253,62,62);

        SK14.beginShape();
        SK14.vertex(442+25+s14xR,925+25+s14yR);
        SK14.vertex(105+25+s14xR,200+25+s14yR);
        SK14.vertex(220+25+s14xR,200+25+s14yR);
        SK14.vertex(500+25+s14xR,800+25+s14yR);
        SK14.vertex(780+25+s14xR,200+25+s14yR);
        SK14.vertex(895+25+s14xR,200+25+s14yR);
        SK14.vertex(558+25+s14xR,925+25+s14yR);
        SK14.endShape(CLOSE);

        if (s14xR >= 5){
            s14swapR = true
        }
        else if (s14xR <= -45){
            s14swapR = false
        }

        if (s14swapR == false){
            s14xR = s14xR + .5;
            s14yR = s14yR + .5;
        }
        else if (s14swapR == true){
            s14xR = s14xR - .5;
            s14yR = s14yR - .5;
        }

        SK14.stroke(77,232,244);
        SK14.fill(77,232,244);

        SK14.beginShape();
        SK14.vertex(442-25-s14xB,925-25-s14yB);
        SK14.vertex(105-25-s14xB,200-25-s14yB);
        SK14.vertex(220-25-s14xB,200-25-s14yB);
        SK14.vertex(500-25-s14xB,800-25-s14yB);
        SK14.vertex(780-25-s14xB,200-25-s14yB);
        SK14.vertex(895-25-s14xB,200-25-s14yB);
        SK14.vertex(558-25-s14xB,925-25-s14yB);
        SK14.endShape(CLOSE);

        if (s14xB >= 5){
            s14swapB = true
        }
        else if (s14xB <= -45){
            s14swapB = false
        }

        if (s14swapB == false){
            s14xB = s14xB + .5;
            s14yB = s14yB + .5;
        }
        else if (s14swapB == true){
            s14xB = s14xB - .5;
            s14yB = s14yB - .5;
        }

        SK14.stroke(255, 255, 255);
        SK14.fill(255, 255, 255);

        SK14.beginShape();
        SK14.vertex(442,925);
        SK14.vertex(105,200);
        SK14.vertex(220,200);
        SK14.vertex(500,800);
        SK14.vertex(780,200);
        SK14.vertex(895,200);
        SK14.vertex(558,925);
        SK14.endShape(CLOSE);
    }
}
//SKETCH 15
var sketch15 = function(SK15){
    SK15.setup = function(){
        SK15.createCanvas(1000, 1000);
        SK15.angleMode(DEGREES);
    }
  
    SK15.draw = function(){
        SK15.background(25, 25, 25);

        SK15.stroke(255, 255, 190);
        SK15.noFill();

        for (i = 1; i <= 5; i++){
            SK15.beginShape();
            SK15.vertex(442+s15offset*i,925+s15offset*i);
            SK15.vertex(105+s15offset*i,200+s15offset*i);
            SK15.vertex(220+s15offset*i,200+s15offset*i);
            SK15.vertex(500+s15offset*i,800+s15offset*i);
            SK15.vertex(780+s15offset*i,200+s15offset*i);
            SK15.vertex(895+s15offset*i,200+s15offset*i);
            SK15.vertex(558+s15offset*i,925+s15offset*i);
            SK15.endShape(CLOSE);
        }

        for (i = 1; i <= 5; i++){
            SK15.beginShape();
            SK15.vertex(442-s15offset*i,925-s15offset*i);
            SK15.vertex(105-s15offset*i,200-s15offset*i);
            SK15.vertex(220-s15offset*i,200-s15offset*i);
            SK15.vertex(500-s15offset*i,800-s15offset*i);
            SK15.vertex(780-s15offset*i,200-s15offset*i);
            SK15.vertex(895-s15offset*i,200-s15offset*i);
            SK15.vertex(558-s15offset*i,925-s15offset*i);
            SK15.endShape(CLOSE);
        }
        
        SK15.stroke(255, 255, 190);
        SK15.fill(255, 255, 190);

        SK15.beginShape();
        SK15.vertex(442,925);
        SK15.vertex(105,200);
        SK15.vertex(220,200);
        SK15.vertex(500,800);
        SK15.vertex(780,200);
        SK15.vertex(895,200);
        SK15.vertex(558, 925);
        SK15.endShape(CLOSE);
    }
}
//SKETCH 16
var sketch16 = function(SK16){
    SK16.setup = function(){
        SK16.createCanvas(1000, 1000);
        SK16.angleMode(DEGREES);
    }
  
    SK16.draw = function(){
        SK16.background(225, 225, 225);

        SK16.stroke(0, 0, 0);
        SK16.noFill();
    
        SK16.fill(0, 0, 0);
        SK16.beginShape();
        SK16.vertex(442,925);
        SK16.vertex(105,200);
        SK16.vertex(45,200);
        SK16.vertex(45,150);
        SK16.vertex(320,150);
        SK16.vertex(320,200);
        SK16.vertex(260,200);
        SK16.vertex(540,800);
        SK16.vertex(820,200);
        SK16.vertex(760,200);
        SK16.vertex(760,150);
        SK16.vertex(955,150);
        SK16.vertex(955,200);
        SK16.vertex(895,200);
        SK16.vertex(558, 925);
        SK16.endShape(CLOSE);
    
        for(i = 0; i < s16yr.length; i++){
          SK16.stroke(225, 225, 225);
          SK16.fill(225, 225, 225);
          SK16.rect(0, s16yr[i], 1000, 100);
          s16yr[i] = s16yr[i] + 1;
    
          if (s16yr[i] >= 1000){
            s16yr[i] = 0;
          }
        }
    
        SK16.stroke(0, 0, 0);
        SK16.strokeWeight(8);
        SK16.noFill();

        SK16.beginShape();
        SK16.vertex(442,925);
        SK16.vertex(105,200);
        SK16.vertex(45,200);
        SK16.vertex(45,150);
        SK16.vertex(320,150);
        SK16.vertex(320,200);
        SK16.vertex(260,200);
        SK16.vertex(540,800);
        SK16.vertex(820,200);
        SK16.vertex(760,200);
        SK16.vertex(760,150);
        SK16.vertex(955,150);
        SK16.vertex(955,200);
        SK16.vertex(895,200);
        SK16.vertex(558, 925);
        SK16.endShape(CLOSE);
    }
}
//SKETCH 17
var sketch17 = function(SK17){
    SK17.setup = function(){
        SK17.createCanvas(1000, 1000);
        SK17.angleMode(DEGREES);
    }
  
    SK17.draw = function(){
        SK17.background(30, 65, 30);
        SK17.strokeWeight(20);
        
        SK17.stroke(85, 160, 85);
        SK17.fill(25, 100, 25);
        
        SK17.beginShape();
        SK17.vertex(450,925);
        SK17.vertex(250,250);
        SK17.vertex(200,250);
        SK17.vertex(200,200);
        SK17.vertex(400,200);
        SK17.vertex(400,250);
        SK17.vertex(350,250);
        SK17.vertex(500,800);
        SK17.vertex(535,925);
        SK17.endShape(CLOSE);
        
        SK17.stroke(25, 100, 25);
        SK17.fill(85, 160, 85);
        
        SK17.beginShape();
        SK17.vertex(465,925);
        SK17.vertex(500,800);
        SK17.vertex(650,250);
        SK17.vertex(600,250);
        SK17.vertex(600,200);
        SK17.vertex(800,200);
        SK17.vertex(800,250);
        SK17.vertex(750,250);
        SK17.vertex(550,925);
        SK17.endShape(CLOSE);
    }
}
//SKETCH 18
var sketch18 = function(SK18){
    SK18.setup = function(){
        SK18.createCanvas(1000, 1000);
        SK18.angleMode(DEGREES);
    }
  
    SK18.draw = function(){
        SK18.background(0, 0, 35);
  
        SK18.stroke(0, 0, 125);
        SK18.fill(0, 0, 125);
      
        SK18.beginShape();
        SK18.vertex(442,925);
        SK18.vertex(780+s18xB,200);
        SK18.vertex(895+s18xB,200);
        SK18.vertex(558,925);
        SK18.endShape(CLOSE);
      
      
        if (s18xB <= -675){
            s18shiftB = true;
        }
        else if(s18xB >= -1){
            s18shiftB = false;
        }
      
        if (s18shiftB == true){
          s18xB = s18xB+2
        }
        else if(s18shiftB == false){
          s18xB = s18xB-2
        }
      
        SK18.stroke(45, 45, 170);
        SK18.fill(45, 45, 170);
      
        SK18.beginShape();
        SK18.vertex(442,925);
        SK18.vertex(105+s18xR,200);
        SK18.vertex(220+s18xR,200);
        SK18.vertex(558,925);
        SK18.endShape(CLOSE);
      
        if (s18xR >= 675){
          s18shiftR = true;
      }
      else if(s18xR <= 1){
          s18shiftR = false;
      }
      
      if (s18shiftR == true){
        s18xR = s18xR-2
      }
      else if(s18shiftR == false){
        s18xR = s18xR+2
      }
    }
}
//SKETCH 19
var sketch19 = function(SK19){
    SK19.setup = function(){
        SK19.createCanvas(1000, 1000);
        SK19.angleMode(DEGREES);
    }
  
    SK19.draw = function(){
        SK19.background(255, 70, 84);

        SK19.stroke(15, 24, 34);
        SK19.fill(15, 24, 34);
        SK19.strokeWeight(3);

        SK19.beginShape();
        SK19.vertex(402,925);
        SK19.vertex(105-s19scX,200+s19scY);
        SK19.vertex(300-s19scX,200+s19scY);
        SK19.vertex(500,720);
        SK19.vertex(700+s19scX,200-s19scY);
        SK19.vertex(895+s19scX,200-s19scY);
        SK19.vertex(590,925);
        SK19.endShape(CLOSE);
    
        if (s19scX >= 80 || s19scY >= 80){
          s19shrink = true;
        }
        else if (s19scX <= -80 || s19scY <= -80){
          s19shrink = false;
        }
      
        if (s19shrink == false){
          s19scX = s19scX + 1;
          s19scY = s19scY + 1;
        }
        else if (s19shrink == true){
          s19scX = s19scX - 1;
          s19scY = s19scY - 1;
        }
    }
}
//SKETCH 20
var sketch20 = function(SK20){
    SK20.setup = function(){
        SK20.createCanvas(1000, 1000);
        SK20.angleMode(DEGREES);
    }
  
    SK20.draw = function(){
        SK20.background(135, 0, 0);
  
        SK20.push();
        SK20.stroke(195, 30, 30);
        SK20.fill(195, 30, 30);
      
        SK20.beginShape();
        SK20.vertex(442,925);
        SK20.vertex(105,200-s20distortF);
        SK20.vertex(45,200-s20distortF);
        SK20.vertex(45,150-s20distortF);
        SK20.vertex(320,150-s20distortF);
        SK20.vertex(320,200-s20distortF);
        SK20.vertex(260,200-s20distortF);
        SK20.vertex(540,800);
        SK20.vertex(820,200-s20distortF);
        SK20.vertex(760,200-s20distortF);
        SK20.vertex(760,150-s20distortF);
        SK20.vertex(955,150-s20distortF);
        SK20.vertex(955,200-s20distortF);
        SK20. vertex(895,200-s20distortF);
        SK20.vertex(558, 925);
        SK20.endShape(CLOSE);
        SK20.pop();
      
        if (s20distortF <= -150){
            s20swapF = true;
        }
        else if(s20distortF >= 150){
          s20swapF = false;
        }
      
        if (s20swapF == false){
          s20distortF = s20distortF - 2;
        }
        else if (s20swapF == true){
          s20distortF = s20distortF + 2;
        }
      
      
        SK20.stroke(195, 30, 30);
        SK20.strokeWeight(3);
        SK20.noFill();
      
        SK20.beginShape();
        SK20.vertex(442,925);
        SK20.vertex(105,200+s20distortS);
        SK20.vertex(45,200+s20distortS);
        SK20.vertex(45,150+s20distortS);
        SK20.vertex(320,150+s20distortS);
        SK20.vertex(320,200+s20distortS);
        SK20.vertex(260,200+s20distortS);
        SK20.vertex(540,800);
        SK20.vertex(820,200+s20distortS);
        SK20.vertex(760,200+s20distortS);
        SK20.vertex(760,150+s20distortS);
        SK20.vertex(955,150+s20distortS);
        SK20.vertex(955,200+s20distortS);
        SK20.vertex(895,200+s20distortS);
        SK20.vertex(558, 925);
        SK20.endShape(CLOSE);
      
      if (s20distortS <= -150){
          s20swapS = true;
      }
      else if(s20distortS >= 150){
        s20swapS = false;
      }
      
      if (s20swapS == false){
          s20distortS = s20distortS - 2;
      }
      else if (s20swapS == true){
          s20distortS = s20distortS + 2;
      }
    }
}
//SKETCH 21
var sketch21 = function(SK21){
    SK21.setup = function(){
        SK21.createCanvas(1000, 1000);
        SK21.angleMode(DEGREES);
    }
  
    SK21.draw = function(){
        SK21.background(0, 0, 55);

        SK21.push();
        for(i = 1; i <= 4; i++){
            SK21.stroke(0, 0, 55);
            SK21.fill(255, 215, 175);
            SK21.strokeWeight(3);
            SK21.rotate(-s21angle)*i;
            SK21.beginShape();
            SK21.vertex(442,925);
            SK21. vertex(105,200);
            SK21.vertex(220,200);
            SK21.vertex(500,800);
            SK21.vertex(500,200);
            SK21.vertex(615,200);
            SK21.vertex(615, 925);
            SK21.endShape(CLOSE)
        }
        SK21.pop();

        SK21.push();
        for(i = 1; i <= 4; i++){
            SK21.stroke(0, 0, 55);
            SK21.fill(255, 215, 175);
            SK21.strokeWeight(3);
            SK21.rotate(s21angle)*i;
            SK21.beginShape();
            SK21.vertex(442,925);
            SK21.vertex(105,200);
            SK21.vertex(220,200);
            SK21.vertex(500,800);
            SK21.vertex(500,200);
            SK21.vertex(615,200);
            SK21.vertex(615, 925);
            SK21.endShape(CLOSE)
        }
        SK21.pop();

        SK21.stroke(0, 0, 55);
        SK21.fill(255, 255, 190);
        SK21.strokeWeight(3);

        SK21.beginShape();
        SK21.vertex(442,925);
        SK21.vertex(105,200);
        SK21.vertex(220,200);
        SK21.vertex(500,800);
        SK21.vertex(500,200);
        SK21.vertex(615,200);
        SK21.vertex(615, 925);
        SK21.endShape(CLOSE)
    }
}
//SKETCH 22
var sketch22 = function(SK22){
    SK22.setup = function(){
        SK22.createCanvas(1000, 1000);
        SK22.angleMode(DEGREES);
    }
  
    SK22.draw = function(){
        SK22.background(153, 0, 255);

        SK22.stroke(255, 255, 255);
        SK22.fill(255, 255, 255);
        SK22.scale(1.6,1.6);
        SK22.rotate(-20);
    
        SK22.beginShape();
        SK22.vertex(442-300,925-100);
        SK22.vertex(105-300,200-100);
        SK22.vertex(220-300,200-100);
        SK22.vertex(500-300,800-100);
        SK22.vertex(558-300,925-100);
        SK22.endShape(CLOSE);
    
        SK22.stroke(255, 255, 255);
        SK22.strokeWeight(8);
        SK22.noFill();

        SK22.beginShape();
        SK22.vertex(500-300,800-100);
        SK22.vertex(780-300,200-100);
        SK22.vertex(895-300,200-100);
        SK22.vertex(558-300,925-100);
        SK22.endShape(CLOSE);
    }
}

var mySketch2 = new p5(sketch2);
var mySketch3 = new p5(sketch3);
var mySketch4 = new p5(sketch4);
var mySketch5 = new p5(sketch5);
var mySketch6 = new p5(sketch6);
var mySketch7 = new p5(sketch7);
var mySketch8 = new p5(sketch8);
var mySketch9 = new p5(sketch9);
var mySketch10 = new p5(sketch10);
var mySketch11 = new p5(sketch11);
var mySketch12 = new p5(sketch12);
var mySketch13 = new p5(sketch13);
var mySketch14 = new p5(sketch14);
var mySketch15 = new p5(sketch15);
var mySketch16 = new p5(sketch16);
var mySketch17 = new p5(sketch17);
var mySketch18 = new p5(sketch18);
var mySketch19 = new p5(sketch19);
var mySketch20 = new p5(sketch20);
var mySketch21 = new p5(sketch21);
var mySketch22 = new p5(sketch22);


function setup() {
}

function draw() {
}