function preload() {
//Nothing??? lol
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    input = '';
    weightedSumAI1 = 0;
    weightedSumAI2 = 0;
    weightedSumAI3 = 0;
    weightedSumAI4 = 0;
    weightsAI1 = [];
    weightsAI2 = [];
    weightsAI3 = [];
    weightsAI4 = [];
    biasAI1 = 0;
    biasAI2 = 0;
    biasAI3 = 0;
    biasAI4 = 0;
    dataReady = 'n';

    t = 0;
    wave1 = 0;
    wave2 = 0;
    color1 = color(80, 240, 0);
    color2 = color(240, 80, 0);
    color3 = color(240, 160, 80)
    con1 = 'n';
    con2 = 'n';
    r1 = 0;
    r2 = 0;
}

function draw() {
    strokeWeight(10);
    background(50);
    stroke(255);
    colorMode(RGB, 255);
    t += 1;
    wave1 = sin(3.11 * t) * 100;
    wave2 = cos(3.11 * t) * 100;
    fill(color1);
    circle(200, 200, wave1);
    fill(color2);
    circle(200, 200, wave2);

    if (round(sin(3.11 * t) * 500) / 500 == 1) {
        console.log('sin');
        con1 = 'y';
        if (r1 > 570) {
            r1 = 0;
        }
    }
    if (round(cos(3.11 * t) * 500) / 500 == 1) {
        console.log('cos');
        con2 = 'y';
        if (r2 > 570) {
            r2 = 0;
        }
    }
    if (con1 == 'y') {
        stroke(color3);
        strokeWeight(30);
        noFill()
        circle(200, 200, r1 + 200);
        r1 += 2;
    }
    if (con2 == 'y') {
        stroke(color3);
        strokeWeight(30);
        noFill();
        circle(200, 200, r2 + 200);
        r2 += 4;
    }

    if (dataReady == 'y') {

    }
}

function loadAssets() {
    input = split(document.getElementById('list').value, ',');
    document.getElementById('data').innerHTML = 'Upload Successful';
    console.log(input);

    for (i = 0; i < input.length; i += 1) {
        append(weightsAI1, round(random(-50,50)));
        weightedSumAI1 += weightsAI1[i] * input[i];
    }
    biasAI1 = round((random(-50,50)));
    weightedSumAI1 += biasAI1;
    console.log("weightedSumAI1:" + weightedSumAI1);
    console.log("weightsAI1:" + weightsAI1);
    console.log("biasAI1:" + biasAI1);
    
    for (i = 0; i < input.length; i += 1) {
        append(weightsAI2, round(random(-50,50)));
        weightedSumAI2 += weightsAI2[i] * input[i];
    }
    biasAI2 = round((random(-50,50)));
    weightedSumAI2 += biasAI2;
    console.log("weightedSumAI2:" + weightedSumAI2);
    console.log("weightsAI2:" + weightsAI2);
    console.log("biasAI2:" + biasAI2);

    for (i = 0; i < input.length; i += 1) {
        append(weightsAI3, round(random(-50,50)));
        weightedSumAI3 += weightsAI3[i] * input[i];
    }
    biasAI3 = round((random(-50,50)));
    weightedSumAI3 += biasAI3;
    console.log("weightedSumAI3:" + weightedSumAI3);
    console.log("weightsAI3:" + weightsAI3);
    console.log("biasAI3:" + biasAI3);

    for (i = 0; i < input.length; i += 1) {
        append(weightsAI4, round(random(-50,50)));
        weightedSumAI4 += weightsAI4[i] * input[i];
    }
    biasAI4 = round((random(-50,50)));
    weightedSumAI4 += biasAI4;
    console.log("weightedSumAI4:" + weightedSumAI4);
    console.log("weightsAI4:" + weightsAI4);
    console.log("biasAI4:" + biasAI4);

    dataReady = 'y';
}