//CS361 
//Project B
//Group 12
//Quiz Generator
function addText(inputText, id){
  var newContent = document.createTextNode(inputText); 
  newContent.id = "textID"
  document.body.appendChild(newContent);
  //newContent.textContent = ""
}

function addBreak(){                            //essentially a newline function
  var br = document.createElement("br");
  document.body.appendChild(br);
}

function addSpan(inputText, inputID){
  var span = document.createElement("span");
  span.textContent = inputText
  span.id = inputID
  document.body.appendChild(span);

}

function addInputBox(inputValue, inputID){            //adds the box where the user can input their answer
    var input = document.createElement("input");
    input.type = "text";
    input.id = inputID
    input.value = inputValue
    document.body.appendChild(input);
}

var boxes = 0
var answers = []        //array containing the answers to the given questions

function markQuestions(){     //displays the correct answers next to each question

  var count;
  for (count = 0; count <= boxes; count++){
    document.getElementById("T"+count).textContent = document.getElementById("A"+count).value 
  }

} 

function generateQuestions(){         //ends the question making period, and begins the quiz
  addBreak();
  addBreak();

  addText("                ")
  addText("QUIZ")                     //adding a title
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
  var addQuestionButton = document.createElement('BUTTON');             //setting up the three buttons that the user can use
  var generateQuestionButton = document.createElement('BUTTON');
  var markQuestionButton = document.createElement('BUTTON');
  
  
  addQuestionButton.textContent = "Add question"
  markQuestionButton.textContent = "Mark questions"
  generateQuestionButton.textContent = "Generate questions"
  
  addQuestionButton.onclick = function() {        //when pressed add another section to enter a new question
    addBreak();
    addInputBox(boxes, "Q"+boxes); 
    addInputBox(boxes *2, "A"+boxes);
    
    addBreak();
    boxes+= 1
  }
  markQuestionButton.onclick = function(){          //when pressed, mark the questions
    markQuestions()
  }
  generateQuestionButton.onclick = function(){      //when pressed, start the quiz
    generateQuestions()
  }
  
  document.body.appendChild(addQuestionButton);
  document.body.appendChild(generateQuestionButton);        //add the buttons specified above
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



