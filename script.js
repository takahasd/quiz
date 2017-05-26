function addText(inputText, id){
  var newContent = document.createTextNode(inputText); 
  newContent.id = "textID"
  document.body.appendChild(newContent);
  //newContent.textContent = ""
}

function addBreak(){
  var br = document.createElement("br");
  document.body.appendChild(br);
}

function addSpan(inputText, inputID){
  var span = document.createElement("span");
  span.textContent = inputText
  span.id = inputID
  document.body.appendChild(span);

}

function addInputBox(inputValue, inputID){
    var input = document.createElement("input");
    input.type = "text";
    input.id = inputID
    input.value = inputValue
    document.body.appendChild(input);
}

var boxes = 0
var answers = []

function markQuestions(){

  var count;
  for (count = 0; count <= boxes; count++){
    document.getElementById("T"+count).textContent = document.getElementById("A"+count).value 
  }

} 

function generateQuestions(){
  addBreak();
  addBreak();

  addText("                ")
  addText("QUIZ")  
  addBreak();

  var count;
  for (count = 0; count < boxes; count++){

    addText("   ")
    addText(document.getElementById("Q"+count).value)  
    addBreak();
    addInputBox("", "S"+count);
    addText("   ")
    addSpan(" ", "T"+count)
    addBreak();
    addBreak();
  }

} 

function setup(){
  var addQuestionButton = document.createElement('BUTTON');
  var generateQuestionButton = document.createElement('BUTTON');
  var markQuestionButton = document.createElement('BUTTON');
  
  
  addQuestionButton.textContent = "Add question"
  markQuestionButton.textContent = "Mark questions"
  generateQuestionButton.textContent = "Generate questions"
  
  addQuestionButton.onclick = function() {
    addBreak();
    addInputBox(boxes, "Q"+boxes); 
    addInputBox(boxes *2, "A"+boxes);
    
    addBreak();
    boxes+= 1
  }
  markQuestionButton.onclick = function(){
    markQuestions()
  }
  generateQuestionButton.onclick = function(){
    generateQuestions()
  }
  
  document.body.appendChild(addQuestionButton);
  document.body.appendChild(generateQuestionButton);
  document.body.appendChild(markQuestionButton);
  addBreak();
  addBreak();
  addText("                ")
  addText("Question")
  addText("                              ")
  addText("Answer")
  addBreak();

}

setup();



