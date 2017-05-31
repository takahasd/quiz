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

function markQuestions(){

  var count;
  for (count = 0; count <= boxes; count++){
    document.getElementById("T"+count).textContent = answers[count]
    if (document.getElementById("S"+count).value == answers[count])
      document.getElementById("S"+count).style.backgroundColor = "green"
    else      
      document.getElementById("S"+count).style.backgroundColor = "red"
  }

} 

function generateQuestions(){
  addText("                ")
  addText("QUIZ")  
  addBreak();

  var count;
  for (count = 0; count < boxes; count++){

    addText("   ")
    addText(questions[count])  
    addBreak();
    addInputBox("", "S"+count);
    addText("   ")
    addSpan(" ", "T"+count)
    addBreak();
    addBreak();
  }


  var markQuestionButton = document.createElement('BUTTON');
  markQuestionButton.textContent = "Mark questions"
  
  markQuestionButton.onclick = function(){
    markQuestions()
  }

  document.body.appendChild(markQuestionButton);

} 



  var answers = []
  var questions = []

function readQuestion(){
  for (count = 0; count < boxes; count++){
    questions.push(document.getElementById("Q"+count).value)
    answers.push(document.getElementById("A"+count).value)
  }
  console.log(questions)
  console.log(answers)
}

function fakeQuestion(){
  var count;
  for (count = 0; count < boxes; count++){
    console.log(document.getElementById("Q"+count).value)
  }

} 

function setup(){
  var addQuestionButton = document.createElement('BUTTON');
  var generateQuestionButton = document.createElement('BUTTON');
  
  addQuestionButton.textContent = "Add question"
  generateQuestionButton.textContent = "Generate questions"



  addQuestionButton.onclick = function() {
    addBreak();
    addInputBox(boxes, "Q"+boxes); 
    addInputBox(boxes *2, "A"+boxes);
    
    addBreak();
    boxes+= 1
  }
  generateQuestionButton.onclick = function(){

  //alert(answers)
  //alert(questions)
    readQuestion()

  while (document.body.hasChildNodes()) {
      document.body.removeChild(document.body.lastChild);
  }
  
    generateQuestions()
    //fakeQuestion()
    /*
    for (count = 0; count <= boxes; count++){
      var child = document.getElementById("T"+count);
      child.parentNode.removeChild(child);
      child = document.getElementById("Q"+count);
      child.parentNode.removeChild(child);
      child = document.getElementById("B"+count);
      child.parentNode.removeChild(child);
      
    }*/
    }

  
  document.body.appendChild(addQuestionButton);
  document.body.appendChild(generateQuestionButton);
  addBreak();
  addBreak();
  addText("                ")
  addText("Question")
  addText("                              ")
  addText("Answer")
  addBreak();

}

setup();



/*

  addBreak();
  addBreak();
  addSpan("Todo:")  
  addBreak();
  addText("output quiz to some sort of file such that it can be loaded separately from generation")  
  addBreak();
  addText("student able to export answers");
  addBreak();
  addText("be able to mark student right/wrong with color");
  addBreak();
  addText("different types of quizes");
  //addText("")  
  */