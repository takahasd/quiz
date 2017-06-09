function addText(inputText, id){                        //adds specified text to the html
  var newContent = document.createTextNode(inputText);  //create the text 
  newContent.id = "textID";
  document.body.appendChild(newContent);        //add the text to the page
  //newContent.textContent = ""
}

function addBreak(){                        //basically a newline function
  var br = document.createElement("br");
  document.body.appendChild(br);
}

function addSpan(inputText, inputID){       //adds span to the html
  var span = document.createElement("span");        //create it
  span.textContent = inputText;
  span.id = inputID;
  document.body.appendChild(span);          //append it

}

function addInputBox(inputValue, inputID){      //adds a user input box
    var input = document.createElement("input");        //create the box
    input.type = "text";
    input.id = inputID;
    input.value = inputValue;
    document.body.appendChild(input);       //add it to the document
}

var boxes = 0;

function markQuestions(){               //grades the quiz after the user takes it

  var count;
  for (count = 0; count <= boxes; count++){         //loop through questions
      document.getElementById("T" + count).textContent = answers[count];
      if (document.getElementById("S" + count).value == answers[count])         //if correct,
          document.getElementById("S" + count).style.backgroundColor = "green";      //make the box green
      else
          document.getElementById("S" + count).style.backgroundColor = "red";        //if wrong, make the box red
  }

} 

function generateQuestions(){   //starts the quiz, using the added questions
    addText("                ");
    addText("QUIZ");
  addBreak();           //title

  var count;
  for (count = 0; count < boxes; count++){//loop through questions

      addText("   ");
      addText(questions[count]);  //print the question
    addBreak();
    addInputBox("", "S"+count); //add the answer input box
    addText("   ");
    addSpan(" ", "T" + count);
    addBreak();
    addBreak();
  }


  var markQuestionButton = document.createElement('BUTTON');    //adding the button for grading questions
  markQuestionButton.setAttribute("id", "button3");
  markQuestionButton.textContent = "Mark questions";
  
  markQuestionButton.onclick = function(){              //defining what the mark questions button does
      markQuestions();
  }



  document.body.appendChild(markQuestionButton);        //adding it to the document

  var backButton = document.createElement('BUTTON');        //adding the back button; goes back to the adding questions page
  backButton.textContent = "BACK";
  
  backButton.onclick = function(){          //defining what the back button does
    window.location.reload(false); 
  }

  document.body.appendChild(backButton); //adding it to the document

} 



var answers = [];            //defining question and answer arrays
var questions = [];

function readQuestion(){            //reads in questions for creating the quiz
    var skipped = 0;
  for (count = 0; count < boxes; count++){
      questions.push(document.getElementById("Q" + count).value);       //add to document
      answers.push(document.getElementById("A" + count).value);
  }
  boxes -= skipped;         //for a feature we didn't complete
  console.log(questions);
  console.log(answers);
}

function fakeQuestion(){        //unused
  var count;
  for (count = 0; count < boxes; count++){
      console.log(document.getElementById("Q" + count).value);
  }

} 

function setup(){       //sets up the initial buttons and structure
  var addQuestionButton = document.createElement('BUTTON');             //defining first two buttons
  var generateQuestionButton = document.createElement('BUTTON');
  addQuestionButton.setAttribute("id", "button1");
  generateQuestionButton.setAttribute("id", "button2");
  addQuestionButton.textContent = "Add question";
  generateQuestionButton.textContent = "Generate questions";



  addQuestionButton.onclick = function() {
    addBreak();
    addInputBox(boxes, "Q"+boxes);      //adds input boxes for user to input questions and answers 
    addInputBox(boxes *2, "A"+boxes);
    
    addBreak();
    boxes += 1;
  }
  generateQuestionButton.onclick = function(){          //defining what each button does

  //alert(answers)
  //alert(questions)
      readQuestion();

  while (document.body.hasChildNodes()) {
      document.body.removeChild(document.body.lastChild);   //remove the added question list before the quiz
  }
  
  generateQuestions();
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

  
  document.body.appendChild(addQuestionButton);         //add the buttons to the document
  document.body.appendChild(generateQuestionButton);
  addBreak();
  addBreak();
  addText("                ");
  addText("Question");                       //label the input boxes
  addText("                              ");
  addText("Answer");
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