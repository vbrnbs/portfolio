final int MAX_CIRCLE_CNT = 2500, MIN_CIRCLE_CNT = 100, 
  MAX_VERTEX_CNT = 30, MIN_VERTEX_CNT = 3;


int circleCnt, vertexCnt;
float heroPosition = 0.7;
int frameR = 60;
int frameDiv = 400;

void setup() {
  size(window.innerWidth, window.innerHeight)
}

void draw() {
  size(window.innerWidth, window.innerHeight)
  resize();
  frameRate(frameR);
  background(bg);
  translate(width * heroPosition, height / 2);

  updateCntByMouse();

  for (int ci = 0; ci < circleCnt; ci++) {
    float time = float(frameCount) / frameDiv;
    float thetaC = map(ci, 0, circleCnt, 0, TAU);
    float scale = 300;

    PVector circleCenter = getCenterByTheta(thetaC, time, scale);
    float circleSize = getSizeByTheta(thetaC, time, scale);
    color c = getColorByTheta(thetaC, time);

    stroke(c);
    noFill();
    beginShape();
    for (int vi = 0; vi < vertexCnt; vi++) {
      float thetaV = map(vi, 0, vertexCnt, 0, TAU);
      float x = circleCenter.x + cos(thetaV) * circleSize;
      float y = circleCenter.y + sin(thetaV) * circleSize;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}

void updateCntByMouse() {
  float xoffset = abs(mousex - width / 2), yoffset = abs(mousey - height / 2);
  circleCnt = int(map(xoffset, 0, width / 2, MAX_CIRCLE_CNT, MIN_CIRCLE_CNT));
  vertexCnt = int(map(yoffset, 0, height / 2, MAX_VERTEX_CNT, MIN_VERTEX_CNT));  
}

PVector getCenterByTheta(float theta, float time, float scale) {
  PVector direction = new PVector(cos(theta), sin(theta));
  float distance = 0.6 + 0.2 * cos(theta * 6.0 + cos(theta * 8.0 + time));
  PVector circleCenter =PVector.mult(direction, distance * scale);
  return circleCenter;
}

float getSizeByTheta(float theta, float time, float scale) {
  float offset = 0.2 + 0.12 * cos(theta * 9.0 - time * 2.0);
  float circleSize = scale * offset;
  return circleSize;
}

color getColorByTheta(float theta, float time) {
  float th = 8.0 * theta + time * 2.0;
  float r = 0.6 + 0.4 * cos(th), 
    g = 0.6 + 0.4 * cos(th - PI / 3), 
    b = 0.6 + 0.4 * cos(th - PI * 2.0 / 3.0), 
    alpha = map(circleCnt, MIN_CIRCLE_CNT, MAX_CIRCLE_CNT, aa, 30);
  return color(r * rr, g * gg, b * bb, alpha);
}

void resize() {
    if (window.innerWidth < 700){
        MAX_CIRCLE_CNT = 1000;
        heroPosition =  0.5;
        frameR = 30;
        frameDiv = 50;
    } else {
        MAX_CIRCLE_CNT = 2500;
        heroPosition =  0.7;
        frameR = 60;
        frameDiv = 400;
    }
}

/*
white bckg
    alpha = map(circleCnt, MIN_CIRCLE_CNT, MAX_CIRCLE_CNT, 280, 30);
  return color(r * 255, g * 55, b * 155, alpha);

black
    alpha = map(circleCnt, MIN_CIRCLE_CNT, MAX_CIRCLE_CNT, 280, 30);
  return color(r * 355, g * 200, b * 355, alpha);

final int MAX_CIRCLE_CNT = 2500, MIN_CIRCLE_CNT = 100, 
  MAX_VERTEX_CNT = 30, MIN_VERTEX_CNT = 3;

int circleCnt, vertexCnt;
void setup() {
  size(window.innerWidth, window.innerHeight)
}

void draw() {
  background(0);
  translate(width * 0.7, height / 2);

  updateCntByMouse();

  for (int ci = 0; ci < circleCnt; ci++) {
    float time = float(frameCount) / 400;
    float thetaC = map(ci, 0, circleCnt, 0, TAU);
    float scale = 200;

    PVector circleCenter = getCenterByTheta(thetaC, time, scale);
    float circleSize = getSizeByTheta(thetaC, time, scale);
    color c = getColorByTheta(thetaC, time);

    stroke(c);
    noFill();
    beginShape();
    for (int vi = 0; vi < vertexCnt; vi++) {
      float thetaV = map(vi, 0, vertexCnt, 0, TAU);
      float x = circleCenter.x + cos(thetaV) * circleSize;
      float y = circleCenter.y + sin(thetaV) * circleSize;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}

void updateCntByMouse() {
  float xoffset = abs(mouseX - width / 2), yoffset = abs(mouseY - height / 2);
  circleCnt = int(map(xoffset, 0, width / 2, MAX_CIRCLE_CNT, MIN_CIRCLE_CNT));
  vertexCnt = int(map(yoffset, 0, height / 2, MAX_VERTEX_CNT, MIN_VERTEX_CNT));
}

PVector getCenterByTheta(float theta, float time, float scale) {
  PVector direction = new PVector(cos(theta), sin(theta));
  float distance = 0.6 + 0.2 * cos(theta * 6.0 + cos(theta * 2.0 + time));
  PVector circleCenter =PVector.mult(direction, distance * scale);
  return circleCenter;
}

float getSizeByTheta(float theta, float time, float scale) {
  float offset = 0.1 + 0.5 * cos(theta * 2.0 - time * 2.0);
  float circleSize = scale * offset;
  return circleSize;
}

color getColorByTheta(float theta, float time) {
  float th = 2.0 * theta + time * 1.0;
  float r = 0.9 + 0.4 * cos(th), 
        g = 0.6 + 0.4 * cos(th - PI / 3), 
        b = 0.6 + 0.4 * cos(th - PI * 2.0 / 3.0), 
        alpha = map(circleCnt, MIN_CIRCLE_CNT, MAX_CIRCLE_CNT, 80, 40);
  return color(r * 100, g * 200, b * 500, alpha);
}
*/