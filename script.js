let texts1 = ["Salam Baciwkolarrr olleyy((( Bir Mayorla taniw oldum ve sevgili olduq Artiq mende saxlamayam artiq menimde saxliyanim var off maawida 2000 azn olley)) gedim mayorumun dawwagini biraz masaj edim 200 qopardim yaxwi bacilar sizede qismet sagolun", "seni bawdan asagi yalayaram adim ibrahimdi", "ehtirasli bir gece axtariram cox darixmiwam mene komek edin nolar gijdeyirem uje", "salam 43 yawim var eslinde evliyem amma niyese hec maragim yoxdu ne arvadima ne de qadinlara vallah cavan olan bawimizi baglayib evlendiribler esil oglanlardan xowum gelir zehmet olmasa yazin", "saat gece 4du amma men hele de seni fikirlesirem ella nese teze bir sey oyandirdin e", "erim menimle hec daniwmir hecne elemirik gelir otur cayini icir yatir ele divanda xiyar oglu xiyar evlenmemiwik elebir"]; // Array of texts 1
let texts2 = ["Hi girliesss ollleyy((( I met a major and we are dating now I have someone who takes care of me off with a 2000 azn salary i will go and massage his balls and snatch 200 good beauties may you get one as well ", "i will soother you from down to bottom my name is ibrahim", "i am looking for a steamy night and i am bored to the bone please help me i am going insane", "hi i am 43 years old i am actually married but i have no interest in my wife nor in women wallahi they tied my head up and married me when i was young even though i realized i actually like men please write me", "even though its 4am i still think of you ella you awoke something in me eh","my husband doesnt talk dirty to me nor do we do anything he comes and drinks tea and sits on the couch son of a cucumber as if we aren't married"]; // Array of texts 2
let currentTextPair = ""; // Variable to store the currently displayed text pair
let touching = false; // Variable to track whether both fingers are touching
let circleSize = 65; // Size of the circles
let alpha = 0; // Alpha value for text transparency

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(16);
  textAlign(CENTER, CENTER);
  
  // Select a random text pair when the sketch is loaded
  selectRandomTextPair();
}

function draw() {
  background(255);
  
  // Draw circles as indicators
  fill(255, 0, 0); // Red
  noStroke();
  ellipse(circleSize, height/2, circleSize); // Left circle
  ellipse(width - circleSize, height/2, circleSize); // Right circle
  
  // Gradually increase text transparency when touching
  if (touching && alpha < 255) {
    alpha = lerp(alpha, 255, 0.1); // Gradually increase alpha to 255
  } else if (!touching && alpha > 0) {
    alpha = lerp(alpha, 0, 0.2); // Gradually decrease alpha to 0 faster
  }
  
  // Set text color with alpha value
  fill(0, alpha);
  let parts = currentTextPair.split("\n"); // Split the text pair into two parts
  text(parts[0],width/5, height/2, 400); // Display the first part
  fill(220, 220, 220, alpha); // Change fill color for the second part (red)
  text(parts[1],width/5, height/2 + 20, 400); // Display the second part
}


// Function to select a random text pair from the arrays
function selectRandomTextPair() {
  let index = floor(random(texts1.length));
  currentTextPair = texts1[index] + "\n" + texts2[index];
}

// Touch event handlers
function touchStarted() {
  if (touches.length >= 2) {
    touching = true;
  }
}

function touchEnded() {
  if (touches.length < 2) {
    touching = false;
  }
}

function touchMoved() {
  // Prevent default behavior to avoid scrolling on touch devices
  return false;
}
