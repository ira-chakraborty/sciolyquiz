// store html elements
var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1"); // puzzle/logic squad
var q1a2 = document.getElementById("q1a2"); // engineers/builders
var q1a3 = document.getElementById("q1a3"); // bio/medical kids
var q1a4 = document.getElementById("q1a4"); // earth/enviro nerds
var q1a5 = document.getElementById("q1a5"); // chem/phys lab rats

var q2a1 = document.getElementById("q2a1"); // bio/medical kids
var q2a2 = document.getElementById("q2a2"); // chem/phys lab rats
var q2a3 = document.getElementById("q2a3"); // engineers/builders,  // chem/phys lab rats
var q2a4 = document.getElementById("q2a4"); // earth/enviro nerds
var q2a5 = document.getElementById("q2a5"); // puzzle/logic squad

var q3a1 = document.getElementById("q3a1"); // puzzle/logic squad
var q3a2 = document.getElementById("q3a2"); // engineers/builders
var q3a3 = document.getElementById("q3a3"); // chem/phys lab rats
var q3a4 = document.getElementById("q3a4"); // earth/enviro nerds
var q3a5 = document.getElementById("q3a5"); // bio/medical kids

var q4a1 = document.getElementById("q4a1"); // engineers/builders
var q4a2 = document.getElementById("q4a2"); // puzzle/logic squad
var q4a3 = document.getElementById("q4a3"); // chem/phys lab rats

var q5a1 = document.getElementById("q5a1"); // chem/phys lab rats
var q5a2 = document.getElementById("q5a2"); // puzzle/logic squad
var q5a3 = document.getElementById("q5a3"); // engineers/builders
var q5a4 = document.getElementById("q5a4"); // earth/enviro nerds
var q5a5 = document.getElementById("q5a5"); // bio/medical kids

var q6a1 = document.getElementById("q6a1"); // bio/medical kids
var q6a2 = document.getElementById("q6a2"); // engineers/builders
var q6a3 = document.getElementById("q6a3"); // chem/phys lab rats
var q6a4 = document.getElementById("q6a4"); // earth/enviro nerds
var q6a5 = document.getElementById("q6a5"); // puzzle/logic squad
var q6a6 = document.getElementById("q6a6"); // earth/enviro nerds

var q7a1 = document.getElementById("q7a1"); // puzzle/logic squad
var q7a2 = document.getElementById("q7a2"); // engineers/builders
var q7a3 = document.getElementById("q7a3"); // bio/medical kids
var q7a4 = document.getElementById("q7a4"); // chem/phys lab rats
var q7a5 = document.getElementById("q7a5"); // earth/enviro nerds

var q8a1 = document.getElementById("q8a1"); // bio/medical kids
var q8a2 = document.getElementById("q8a2"); // earth/enviro nerds
var q8a3 = document.getElementById("q8a3"); // earth/enviro nerds
var q8a4 = document.getElementById("q8a4"); // engineers/builders
var q8a5 = document.getElementById("q8a5"); // puzzle/logic squad
var q8a6 = document.getElementById("q8a6"); // chem/phys lab rats

function updateResult(){
    if(totalAnswered != 8){
        return;
    }
    let highest = Math.max(
        logic,
        engineering,
        bio,
        earth,
        chem_phys
    );
    if(highest == logic){
        result.innerHTML =
        "Here are some events you should check out: Codebusters, Experimental Design, Forensics!";
    }
    else if(highest == engineering){
        result.innerHTML =
        "Here are some events you should check out: Hovercraft, Boomilever, Electric Vehicle, Mission Possible, Wright Stuff, Engineering CAD, Ping-Pong Parachute!";
    }
    else if(highest == bio){
        result.innerHTML =
        "Here are some events you should check out: Anatomy & Physiology, Designer Genes, Disease Detectives, and Protein Modeling!";
    }
    else if(highest == earth){
        result.innerHTML =
        "Here are some events you should check out: Botany, Rocks & Minerals, Dynamic Planet, Water Quality, Remote Sensing, Astronomy!";
    }
    else if(highest == chem_phys){
        result.innerHTML =
        "Here are some events you should check out: Chemistry Lab, Forensics, Circuit Lab, and Thermodynamics!";
    }
}

//scores
let logic = 0;
let engineering = 0;
let bio = 0;
let earth = 0;
let chem_phys = 0;

//total answered
let totalAnswered = 0;

//disable buttons
function disableQuestion(questionNum, numAnswers) {
    for (let i = 1; i <= numAnswers; i++) {
        document.getElementById(`q${questionNum}a${i}`).disabled = true;
    }
}

//adding points
//q1
q1a1.onclick = function() {
    this.style.backgroundColor = "purple";
    this.style.color = "white";
    logic++;
    disableQuestion(1, 5);
    updateResult();
}

q1a2.onclick = function() {
    this.style.backgroundColor = "purple";
    this.style.color = "white";
    engineering++;
    totalAnswered++;
    disableQuestion(1, 5);
    updateResult();
}

q1a3.onclick = function() {
    this.style.backgroundColor = "purple";
    this.style.color = "white";
    bio++;
    totalAnswered++;
    disableQuestion(1, 5);
    updateResult();
}

q1a4.onclick = function() {
    this.style.backgroundColor = "purple";
    this.style.color = "white";
    earth++;
    totalAnswered++;
    disableQuestion(1, 5);
    updateResult();
}

q1a5.onclick = function() {
    this.style.backgroundColor = "purple";
    this.style.color = "white";
    chem_phys++;
    totalAnswered++;
    disableQuestion(1, 5);
    updateResult();
}

//q2
q2a1.onclick = function() {
  this.style.backgroundColor = "crimson";
  this.style.color = "white";
  bio++; 
  totalAnswered++; 
  disableQuestion(2, 5); 
  updateResult(); 
}


q2a2.onclick = function() { 
  this.style.backgroundColor = "crimson";
  this.style.color = "white";
  chem_phys++; 
  totalAnswered++; 
  disableQuestion(2, 5); 
  updateResult(); 
}


q2a3.onclick = function() { 
  this.style.backgroundColor = "crimson";
  this.style.color = "white";
  engineering++; 
  chem_phys++; 
  totalAnswered++; 
  disableQuestion(2, 5); 
  updateResult(); 
}

q2a4.onclick = function() {
  this.style.backgroundColor = "crimson";
  this.style.color = "white";
  earth++; 
  totalAnswered++; 
  disableQuestion(2, 5); 
  updateResult(); 
}

q2a5.onclick = function() { 
  this.style.backgroundColor = "crimson";
  this.style.color = "white";
  logic++; 
  totalAnswered++; 
  disableQuestion(2, 5); 
  updateResult(); 
}

//q3
q3a1.onclick = function() { 
  this.style.backgroundColor = "darkseagreen";
  this.style.color = "white";
  logic++; 
  totalAnswered++; 
  disableQuestion(3, 5); 
  updateResult(); 
}

q3a2.onclick = function() { 
  this.style.backgroundColor = "darkseagreen";
  this.style.color = "white";
  engineering++; 
  totalAnswered++; 
  disableQuestion(3, 5); 
  updateResult(); 
}

q3a3.onclick = function() { 
  this.style.backgroundColor = "darkseagreen";
  this.style.color = "white";
  chem_phys++; 
  totalAnswered++;
  disableQuestion(3, 5); 
  updateResult(); 
}
q3a4.onclick = function() { 
  this.style.backgroundColor = "darkseagreen";
  this.style.color = "white";
  earth++; 
  totalAnswered++; 
  disableQuestion(3, 5); 
  updateResult(); 
}

q3a5.onclick = function() { 
  this.style.backgroundColor = "darkseagreen";
  this.style.color = "white";
  bio++; 
  totalAnswered++; 
  disableQuestion(3, 5); 
  updateResult(); 
}

//q4
q4a1.onclick = function() { 
  this.style.backgroundColor = "cornflowerblue";
  this.style.color = "white";
  engineering++; 
  totalAnswered++; 
  disableQuestion(4, 3); 
  updateResult(); 
}

q4a2.onclick = function() { 
  this.style.backgroundColor = "cornflowerblue";
  this.style.color = "white";
  logic++; 
  totalAnswered++; 
  disableQuestion(4, 3); 
  updateResult(); 
}

q4a3.onclick = function() { 
  this.style.backgroundColor = "cornflowerblue";
  this.style.color = "white";
  chem_phys++; 
  totalAnswered++; 
  disableQuestion(4, 3); 
  updateResult(); 
}

//q5
q5a1.onclick = function() { 
  this.style.backgroundColor = "mediumslateblue";
  this.style.color = "white";
  chem_phys++; 
  totalAnswered++; 
  disableQuestion(5, 5); 
  updateResult(); 
}

q5a2.onclick = function() { 
  this.style.backgroundColor = "mediumslateblue";
  this.style.color = "white";
  logic++; 
  totalAnswered++; 
  disableQuestion(5, 5); 
  updateResult(); 
}

q5a3.onclick = function() { 
  this.style.backgroundColor = "mediumslateblue";
  this.style.color = "white";
  engineering++; 
  totalAnswered++; 
  disableQuestion(5, 5); 
  updateResult(); 
}

q5a4.onclick = function() { 
  this.style.backgroundColor = "mediumslateblue";
  this.style.color = "white";
  earth++; 
  totalAnswered++; 
  disableQuestion(5, 5); 
  updateResult(); 
}

q5a5.onclick = function() {
  this.style.backgroundColor = "mediumslateblue";
  this.style.color = "white";
  bio++; 
  totalAnswered++; 
  disableQuestion(5, 5); 
  updateResult();
}

//q6
q6a1.onclick = function() { 
  this.style.backgroundColor = "salmon";
  this.style.color = "white";
  bio++; 
  totalAnswered++; 
  disableQuestion(6, 6); 
  updateResult(); 
}

q6a2.onclick = function() { 
  this.style.backgroundColor = "salmon";
  this.style.color = "white";
  engineering++; 
  totalAnswered++; 
  disableQuestion(6, 6); 
  updateResult(); 
}

q6a3.onclick = function() { 
  this.style.backgroundColor = "salmon";
  this.style.color = "white";
  chem_phys++; 
  totalAnswered++; 
  disableQuestion(6, 6); 
  updateResult(); 
}

q6a4.onclick = function() { 
  this.style.backgroundColor = "salmon";
  this.style.color = "white";
  earth++; 
  totalAnswered++; 
  disableQuestion(6, 6); 
  updateResult(); 
}

q6a5.onclick = function() { 
  this.style.backgroundColor = "salmon";
  this.style.color = "white";
  logic++; 
  totalAnswered++; 
  disableQuestion(6, 6); 
  updateResult(); 
}

q6a6.onclick = function() { 
  this.style.backgroundColor = "salmon";
  this.style.color = "white";
  earth++; 
  totalAnswered++;
  disableQuestion(6, 6); 
  updateResult(); 
}

//q7
q7a1.onclick = function() { 
  this.style.backgroundColor = "chocolate";
  this.style.color = "white";
  logic++; 
  totalAnswered++;
  disableQuestion(7, 5); 
  updateResult(); 
}

q7a2.onclick = function() { 
  this.style.backgroundColor = "chocolate";
  this.style.color = "white";
  engineering++; 
  totalAnswered++; 
  disableQuestion(7, 5); 
  updateResult(); 
}

q7a3.onclick = function() { 
  this.style.backgroundColor = "chocolate";
  this.style.color = "white";
  bio++; 
  totalAnswered++; 
  disableQuestion(7, 5); 
  updateResult(); 
}

q7a4.onclick = function() { 
  this.style.backgroundColor = "chocolate";
  this.style.color = "white";
  chem_phys++; 
  totalAnswered++; 
  disableQuestion(7, 5);
  updateResult(); 
}

q7a5.onclick = function() { 
  this.style.backgroundColor = "chocolate";
  this.style.color = "white";
  earth++; 
  totalAnswered++; 
  disableQuestion(7, 5); 
  updateResult(); 
}

//q8
q8a1.onclick = function() { 
  this.style.backgroundColor = "navy";
  this.style.color = "white";
  bio++; 
  totalAnswered++; 
  disableQuestion(8, 6); 
  updateResult(); 
}

q8a2.onclick = function() {
  this.style.backgroundColor = "navy";
  this.style.color = "white";
  earth++; 
  totalAnswered++; 
  disableQuestion(8, 6);
  updateResult(); 
}

q8a3.onclick = function() {
  this.style.backgroundColor = "navy";
  this.style.color = "white";
  earth++; 
  totalAnswered++; 
  disableQuestion(8, 6); 
  updateResult(); 
}

q8a4.onclick = function() { 
  this.style.backgroundColor = "navy";
  this.style.color = "white";
  engineering++; 
  totalAnswered++; 
  disableQuestion(8, 6); 
  updateResult(); 
}

q8a5.onclick = function() { 
  this.style.backgroundColor = "navy";
  this.style.color = "white";
  logic++; 
  totalAnswered++;
  disableQuestion(8, 6); 
  updateResult(); 
}

q8a6.onclick = function() { 
  this.style.backgroundColor = "navy";
  this.style.color = "white";
  chem_phys++; 
  totalAnswered++; 
  disableQuestion(8, 6); 
  updateResult(); 
}

//restart function
function resetQuiz() {
  logic = 0;
  engineering = 0;
  bio = 0;
  earth = 0;
  chem_phys = 0;
  totalAnswered = 0
  result.innerHTML = "Here are some events you should check out: "
}

//undisable and reset button color function
function undisableQuestion(questionNum, numAnswers) {
    for (let i = 1; i <= numAnswers; i++) {
      const btn = document.getElementById(`q${questionNum}a${i}`);
      btn.disabled = false;
      btn.style.backgroundColor = "lightgray";
      btn.style.color = "black";
    }
}

//on click restart
restart.onclick = function() {
  resetQuiz();
  undisableQuestion(1,5);
  undisableQuestion(2,5);
  undisableQuestion(3,5);
  undisableQuestion(4,3);
  undisableQuestion(5,5);
  undisableQuestion(6,6);
  undisableQuestion(7,5);
  undisableQuestion(8,6);
}
