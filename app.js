/*
create a gist file containing links
to the live GitHub pages site
and the repository, 
as well as their pair's name 
- yes, thats how project was accessed

Is the user able to use their keyboard to navigate through the app?
- yes tested this w/ TA
*/


//Our data including questions!
'use strict';
/*
Did the student create a global `store` object 
that contains all of the data necessary
to render the application?

- yes, SEE below 
- also took feedback from previous grader
  and added isCorrect and isFeedback to `store` obj

*/
const store = {

  questions: [
    {
      question: 'What type of farm does Dwight own?',
      answers: [
        'Bear Farm',
        'Beet Farm',
        'Carrot Farm',
        'Beetle Farm'
      ],
      correctAnswer: 'Beet Farm'
    },
    {
      question: 'When did Ryan and Kelly hook up for the first time?',
      answers: [
        'New Years Eve',
        'February 14th',
        'Kelly’s Birthday',
        'February 13th'
      ],
      correctAnswer: 'February 13th'
    },
    {
      question: 'What name did Pam and Angela fight over for their babies?',
      answers: [
        'Andrew',
        'James',
        'Phillip',
        'William'
      ],
      correctAnswer: 'Phillip'
    },
    {
      question: 'How long were Pam and Roy engaged?',
      answers: [
        '3-4 Years',
        '3 Months',
        '6 Years',
        '2 Years'
      ],
      correctAnswer: '3-4 Years'
    },
    {
      question: 'Who ruined Pam\'s pregnancy secret during her wedding weekend?',
      answers: [
        'Andy',
        'Michael',
        'Erin',
        'Jim'
      ],
      correctAnswer: 'Jim'
    },
  ],
  questionNumber: 0,
  score: 0,
  isFeedback: false,
  isCorrect: true
};

let counter = 1;

let wrong = 0;


let pictureArr = [`<img src= 'photos/dwight-and-fam.jpg' alt='Dwight and his family'></img>`,
  `<img src="photos/kelly-ryan.png" alt='Kelly and Ryan'></img>`,
  `<img src='photos/baby-name.jpg' alt='Baby Question'></img>`,
  `<img src='photos/pam-roy.jpg' alt='Pam and Roy'></img>`,
  `<img src='photos/wedding-question.jpg' alt='Wedding Question'></img>`
];

/*
Did the student create template generation functions
to generate the HTML content?
These functions should be single-purpose
functions whose return values are HTML template strings.

- yes, SEE function addHTML,
       function addHtmlFeedback,
        function results
*/

// Adds html elements to be rendered by renderPage
function addHtml() {
  let question = store.questions[store.questionNumber];
  let startPage = `<div>
  <img src="photos/main-page.jpg" alt="The Office Room"><br>
  <div class ='btn'>
  <button id= "start" type= "submit" class= 'mainPage'>Start The Quiz!</button>
  </div>
  <p>Welcome to a quiz on the hit TV show The Office. This quiz was developed with: HTML, CSS, JavaScript, and jQuery. 
  If you like The Office, this will be a fun task!</p>
  <img src="photos/dwight-main.jpg" alt="Dwight Main">
</div>
<div class = 'bottom'><h3>Produced by Mark Marcello & Caleb Jackson<h3><p>Questions and Photos provided by TheQuiz.com</p></div>
`;

/*
Are the questions and answers rendered in a <form> tag? 
    - yes, SEE form id='questions'
Did the student give their users feedback on which question they are on? 
    - yes, SEE <h3><span>Question #${store.questionNumber + 1} / 5</h3>
Did the student give their users feedback on what their current score is?
    - yes, SEE <h3>Your Score: ${store.score} Correct, and ${wrong} Incorrect!</h3>
Did the student disallow users from being able to skip questions?
    - yess, SEE "required" on each input tag

*/




  let questionPage = `<div class ='question-box'>
${questionPhoto()}
<div class= 'question'><p>${question.question}</p></div>
<form id='questions'>
<div class = 'radiogroup'>
    <input id='answer1' name = 'answers' type= 'radio' value = '${question.answers[0]}' required>
    <label for= 'answer1'>${question.answers[0]}</label><br>
    <input id='answer2' name = 'answers' type= 'radio' value = '${question.answers[1]}' required>
    <label for= 'answer2'>${question.answers[1]}</label><br>
    <input id='answer3' name = 'answers' type= 'radio' value = '${question.answers[2]}' required>
    <label for= 'answer3'>${question.answers[2]}</label><br>
    <input id='answer4' name = 'answers' type= 'radio' value = '${question.answers[3]}' required>
    <label for= 'answer4'>${question.answers[3]}</label><br>
</div>    
    <button class = 'submit-answer' type = 'submit'>Submit Answer!</button>
</form>
<h3><span>Question #${store.questionNumber + 1} / 5</h3> <h3>Your Score: ${store.score} Correct, and ${wrong} Incorrect!</h3>
<div class = 'bottom'><h3>Produced by Mark Marcello & Caleb Jackson<h3><p>Questions and Photos provided by TheQuiz.com</p></div>`;



  if (counter === 1) {
    return startPage;
  }

  if (counter === 2) {
    return questionPage;
  }

  if (counter === 3) {
    return results();
  }

}


function questionPhoto() {
  if (store.questionNumber === 0) {
    return pictureArr[0];
  }
  if (store.questionNumber === 1) {
    return pictureArr[1];
  }
  if (store.questionNumber === 2) {
    return pictureArr[2];
  }
  if (store.questionNumber === 3) {
    return pictureArr[3];
  }
  if (store.questionNumber === 4) {
    return pictureArr[4];
  }

}

/*
Did the student give their user an overall score at the end of the quiz?
    - yes, SEE results function
*/

//function that gives goodResult vs badResult on last page
function results() {
  let results = store.score;

  let goodResult = `<div>
<img src= "photos/happy-stanley.png" alt="Happy Stanley">
<h2>Nice job you really know about The Office!</h2>
<h2>${(store.score / 5) * 100}%</h2>
<div class ='btn'>
<button class="button-restart-quiz">START QUIZ AGAIN!</button>
</div>
</div> 
<div class = 'bottom'><h3>Produced by Mark Marcello & Caleb Jackson<h3><p>Questions and Photos provided by TheQuiz.com</p></div>`;

  let badResult =
    `<div>
<img src= "photos/did-i-stutter.jpg" alt="Sad Stanley">
<h2>You failed!</h2>
<h2>${(store.score / 5) * 100}%</h2>
<div class ='btn'>
<button class="button-restart-quiz">START QUIZ AGAIN!</button>
</div>
</div>
<div class = 'bottom'><h3>Produced by Mark Marcello & Caleb Jackson<h3><p>Questions and Photos provided by TheQuiz.com</p></div> `;

  if (results >= 4) {
    return goodResult;
  }
  else {
    return badResult;
  }

}

/*
Did the student give users feedback when they got an answer wrong?
    - yes, SEE <p>Great Job! ${question.correctAnswer} is correct!<p>
    - yes, SEE <p>Oh no, you got it wrong! ${question.correctAnswer} is the correct answer.</p>
the student include the ability to move to the next question after receiving feedback?
    - yes, SEE <button id= "next" type= "submit" class= 'next-question'>Next Question!</button>
    - yes, ALSO SEE resumeQuiz event handler below (line __)
*/

// adds html elements to be added by renderFeedback
function addHtmlFeedback() {
  let question = store.questions[store.questionNumber];
  let correct = `<div class ='question-box'>
  ${questionPhoto()}
<div class= 'question'><p>${question.question}</p></div>
<div class ='results'><p>Great Job! ${question.correctAnswer} is correct!<p></div>
<div class ='btn'>
<button id= "next" type= "submit" class= 'next-question'>Next Question!</button>
</div>
<h3>Question #${store.questionNumber + 1} / 5 </h3>
<h3>Your Score: ${store.score} Correct, and ${wrong} Incorrect!</h3>
<div class = 'bottom'><h3>Produced by Mark Marcello & Caleb Jackson<h3><p>Questions and Photos provided by TheQuiz.com</p></div>`;

  let incorrect = `<div class ='question-box'>
  ${questionPhoto()}
<div class= 'question'><p>${question.question}</p></div>
<div class ='results'><p>Oh no, you got it wrong! ${question.correctAnswer} is the correct answer.</p></div>
<div class ='btn'>
<button id= "next" type= "submit" class= 'next-question'>Next Question!</button>
</div>
<h3>Question #${store.questionNumber + 1} / 5 </h3> <h3> Your Score: ${store.score} Correct, and ${wrong} Incorrect!</h3>
<div class = 'bottom'><h3>Produced by Mark Marcello & Caleb Jackson<h3><p>Questions and Photos provided by TheQuiz.com</p></div>`;

  let getResultsButtonIncorrect = `<div class ='question-box'>
  ${questionPhoto()}
<div class= 'question'><p>${question.question}</p></div>
<div class ='results'><p>Oh no, you got it wrong! ${question.correctAnswer} is the correct answer.</p></div>
<div class ='btn'>
<button id= "next" type= "submit" class= 'next-question'>Get Results!</button>
</div>
<h3>Question #${store.questionNumber + 1} / 5 </h3>
<h3> Your Score: ${store.score} Correct, and ${wrong} Incorrect!</span></h3>
<div class = 'bottom'><h3>Produced by Mark Marcello & Caleb Jackson<h3><p>Questions and Photos provided by TheQuiz.com</p></div>`;

  let getResultsButtonCorrect = `<div class ='question-box'>
  ${questionPhoto()}
<div class= 'question'><p>${question.question}</p></div>
<div class ='results'><p>Great Job! ${question.correctAnswer} is correct!</p></div>
<div class ='btn'>
<button id= "next" type= "submit" class= 'next-question'>Get Results!</button>
</div>
<h3>Question #${store.questionNumber + 1} / 5 </h3>
<h3>Your Score: ${store.score} Correct, and ${wrong} Incorrect!</h3>
<div class = 'bottom'><h3>Produced by Mark Marcello & Caleb Jackson<h3><p>Questions and Photos provided by TheQuiz.com</p></div>`;

  if (store.isCorrect === true && store.questionNumber === 4) {
    return getResultsButtonCorrect;
  }
  else if (store.isCorrect === false && store.questionNumber === 4) {
    return getResultsButtonIncorrect;
  }
  else if (store.isCorrect === true) {
    return correct;
  }
  else {
    return incorrect;
  }
}

/*
Did the student create at least one render function
(that may or may not call other rendering functions)
that conditionally replaces the content 
of the <main> tag based upon the properties held 
within the `store`?

- yes, SEE $('main').html(html) 

Is all JavaScript that updates the DOM of the page 
located inside of a rendering function?

- yes, SEE function addHTML,
       function addHtmlFeedback,
        function results 

*/

//This function renders the page for every aspect.
function renderPage() {
  if (store.isFeedback === false) {
    let html = addHtml();
    $('main').html(html);
  }
  if (store.isFeedback === true) {
    let html = addHtmlFeedback();
    $('main').html(html);
  }

}

/*
Did the student create single-purpose 
event handler functions to handle all events?

- yes per feedback from previous grader,
  before all the functions were seperate
  then called w/in the main function.

Did the student update `store` properties 
only within event handler functions?

- yes, for example submitAnswer tracks your score
  & the restartQuiz clears your score & restarts counters

Did the student call their `render()` function 
anytime they updated a `store` property?

- yes, for example to update the score (see line __)

*/

function eventHandler() {
  let startQuiz = $('main').on('click', '.mainPage', function (event) {
    event.preventDefault();
    counter++;
    renderPage();
  });

  //This function tracks your score on submiting your answer and moves you forward.
  let submitAnswer = $('main').on('submit', 'form#questions', function (event) {
    event.preventDefault();
    let answer = $('input[name=answers]:checked').val();
    if (store.questions[store.questionNumber].correctAnswer === answer) {
      store.isCorrect = true;
      store.score++;
      store.isFeedback = true;
      renderPage();
    } else {
      wrong++;
      store.isCorrect = false;
      store.isFeedback = true;
      renderPage();
    }
  });

  /*
Did the student include the ability to move to the next question after receiving feedback? 
    - yes, SEE resumeQuiz event handler below
    - yes, ALSO SEE <button id= "next" type= "submit" class= 'next-question'>Next Question!</button> (line __)
*/

//This function allows you to resume the quiz after seeing the correct answer to the question you just answered!
  let resumeQuiz = $('main').on('click', '.next-question', function (event) {
    event.preventDefault();
    if (store.questionNumber < 4) {
      store.questionNumber++;
      store.isFeedback = false;
      renderPage();
    } else {
      counter++;
      store.isFeedback = false;
      renderPage();
    }
  });

  /*
Did the student give their user the ability to start the quiz over without reloading the page?
    - yes, SEE restart quiz function
*/

//This function clears all counters and score and send you back to the start!
  let restartQuiz = $('main').on('click', '.button-restart-quiz', function (event) {
    event.preventDefault();
    store.questionNumber = 0;
    counter = 1;
    store.score = 0;
    wrong = 0;
    renderPage();
  });
}

//The main function holding all the functions that need to be initialized!
function main() {
  renderPage();
  eventHandler();
}

$(main);
