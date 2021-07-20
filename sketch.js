//Clouds
var littlec1 = 60;
var littlec2 = 65;
var nube1Xpos = 250;
var speed = 5;
var nube2Xpos = 200;
var speed1 = 4;
//Cars
var carYpos2 = 520;
var carXpos2 = 135;

function setup() {
  createCanvas(1000, 550);
  background(140, 199, 201);
}

function draw() {
  //Called function
  //Clouds
  //cloud1
  noStroke();
  if (nube1Xpos < 1000) {
    background(140, 199, 201);
    nube(nube1Xpos, 50);

    if (nube1Xpos > 940) {
      speed = -5;
    }
    if (nube1Xpos < 60) {
      speed = +5;
    }
    nube1Xpos = nube1Xpos + speed;
  }

  // cloud 2
  if (nube2Xpos < 1000) {
    background(140, 199, 201);
    nube(nube2Xpos, 150);

    if (nube2Xpos > 940) {
      speed1 = speed1 - 4;
    }
    if (nube2Xpos < 60) {
      speed1 = speed1 + 4;
    }

    nube2Xpos = nube2Xpos + speed1;
  }

  // street's floor
  fill(250, 250, 250);
  rect(0, 420, 1000, 130);

  // dark green building
  for (var buildXpos = 100; buildXpos < 850; buildXpos = buildXpos + 100) {
    fill(93, 179, 128);
    stroke(10);
    rect(buildXpos, 220, 70, 200);
  }

  //green building
  for (var buildXpos2 = 135; buildXpos2 < 800; buildXpos2 += 100) {
    var square = 40;
    var topPos = 290;
    var downPos = 370;
    stroke(50);
    fill(152, 227, 191);
    rect(buildXpos2, 280, 75, 150);

    //Window's code (green building)

    var number = random(0, 1);
    var blink = round(number);

    if (blink === 0) {
      //fisrt top
      fill(247, 243, 198);
      rect(250, topPos, square, square);

      //second top
      fill(247, 243, 198);
      rect(550, topPos, square, square);
    }

    if (blink === 1) {
      //first down
      fill(247, 243, 198);
      rect(350, downPos, square, square);

      //second down
      fill(247, 243, 198);
      rect(659, downPos, square, square);
    }
  }

  car(70, 450);
}

// functions
//cloud
function nube(nubeXpos, nubeYpos) {
  fill(250, 250, 250);
  ellipse(nubeXpos - 50, nubeYpos, littlec1, littlec2);
  ellipse(nubeXpos + 50, nubeYpos, littlec1, littlec2);
  ellipse(nubeXpos, nubeYpos, 70, 80);
}

//cute little car
function car(carXpos, carYpos) {
  noStroke();
  fill(44, 44, 186);
  triangle(carXpos, carYpos, 10, carYpos2, carXpos2, carYpos2);
  stroke(40);
  fill(20, 120);
  ellipse(carXpos + 25, carYpos2, 30, 30);
  ellipse(carXpos - 25, carYpos2, 30, 30);
}
