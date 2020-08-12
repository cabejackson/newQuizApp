'use strict';
//Our data including questions!
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
  score: 0
};

let counter = 1;

let wrong = 0;

let isCorrect = true;

/*
Change log:
--These are done :) --
tracking questions by question number 
assign counter for home, question pages, end 
assign correct feedback + values
restart quiz works!
At the end it now displays your score %



TODO:
create an array of images to link to the correct question#
create a badResult in addHtml for failing grades -- createed a results function
require answers -- added require to radio buttons
Find a way to make the next question button on q5 feedback say Results instead of next question (This will be REALLL FUN) -- added other conditions
clean up the page alignment between results and questions in css --?
css for mobile first design
css for design and accessibility

*/

// Adds html elements to be rendered by renderPage
function addHtml() {
  let question = store.questions[store.questionNumber];
  let startPage = `<div>
  <img src="photos/main-page.jpg" alt="The Office Room"><br>
  <button id= "start" type= "submit" class= 'mainPage'>Start The Quiz!</button>
  <p>Welcome to a difficult quiz on the hit TV show The Office. This Quiz is very hard and you will be graded!</p>
  <img src="photos/dwight-main.jpg" alt="Dwight Main">
</div>`;


  let questionPage = `<div class ='question-box'>
<img src="photos/kelly-ryan.png" alt="Kelly and Ryan">
<div class= 'question'>${question.question}</div>
<form id='questions'>
    <input id='answer1' name = 'answers' type= 'radio' value = '${question.answers[0]}' required>
    <label for= 'answer1'>${question.answers[0]}</label><br>
    <input id='answer2' name = 'answers' type= 'radio' value = '${question.answers[1]}' required>
    <label for= 'answer2'>${question.answers[1]}</label><br>
    <input id='answer3' name = 'answers' type= 'radio' value = '${question.answers[2]}' required>
    <label for= 'answer3'>${question.answers[2]}</label><br>
    <input id='answer4' name = 'answers' type= 'radio' value = '${question.answers[3]}' required>
    <label for= 'answer4'>${question.answers[3]}</label><br>
    <button class = 'submit-answer' type = 'submit'>Submit Answer!</button>
</form>
<h3><span>Question #${store.questionNumber + 1} / 5 </span><span>Your Score: ${store.score} Correct, and ${wrong} Incorrect!</span></h3>`;

//moved this to results function
//   let goodResult = `<div>
// <img src= "photos/happy-stanley.png" alt="Happy Stanley">
// <h2>Nice Job!</h2>
// <p>${(store.score / 5) * 100}%</p>
// <button class="button-restart-quiz">START QUIZ AGAIN!</button>
// </div> `;

// let badResult = 
// `<div>
// <img src= "photos/stanley-fail.png" alt="Sad Stanley">
// <h2>You failed!</h2>
// <p>${(store.score / 5) * 100}%</p>
// <button class="button-restart-quiz">START QUIZ AGAIN!</button>
// </div> `;
//what is this counter counting?
  if (counter === 1) {
    return startPage;
  }

  if (counter === 2) {
    return questionPage;
  }

  if (counter === 3){
    return results();
  }
  
}

//function that gives goodResult vs badResult on last page
function results (){
  let results = store.score;
  //console.log(results, 'results are coming up!');

  let goodResult = `<div>
<img src= "photos/happy-stanley.png" alt="Happy Stanley">
<h2>Nice Job!</h2>
<p>${(store.score / 5) * 100}%</p>
<button class="button-restart-quiz">START QUIZ AGAIN!</button>
</div> `;

let badResult = 
`<div>
<img src= "photos/stanley-fail.jpg" alt="Sad Stanley">
<h2>You failed!</h2>
<p>${(store.score / 5) * 100}%</p>
<button class="button-restart-quiz">START QUIZ AGAIN!</button>
</div> `;

  if (results >= 4){
    return goodResult;
  }
  else{
    return badResult;
  }

}

// adds html elements to be added by renderFeedback
function addHtmlFeedback() {
  let question = store.questions[store.questionNumber];
  let correct = `<div class ='question-box'>
<img src="photos/kelly-ryan.png" alt="Kelly and Ryan">
<div class= 'question'>${question.question}</div>
<div class ='reults'>Great Job! ${question.correctAnswer} is correct!</div>
<button id= "next" type= "submit" class= 'next-question'>Next Question!</button>
<h3><span>Question #${store.questionNumber + 1} / 5 </span>
<span>Your Score: ${store.score} Correct, and ${wrong} Incorrect!</span></h3>`;

  let Incorrect = `<div class ='question-box'>
<img src="photos/kelly-ryan.png" alt="Kelly and Ryan">
<div class= 'question'>${question.question}</div>
<div class ='reults'>Oh no, you got it wrong! ${question.correctAnswer} is the correct answer.</div>
<button id= "next" type= "submit" class= 'next-question'>Next Question!</button>
<h3><span>Question #${store.questionNumber + 1} / 5 </span>
<span>Your Score: ${store.score} Correct, and ${wrong} Incorrect!</span></h3>`;

  let getResultsButtonIncorrect = `<div class ='question-box'>
<img src="photos/kelly-ryan.png" alt="Kelly and Ryan">
<div class= 'question'>${question.question}</div>
<div class ='reults'>Oh no, you got it wrong! ${question.correctAnswer} is the correct answer.</div>
<button id= "next" type= "submit" class= 'next-question'>Get Results!</button>
<h3><span>Question #${store.questionNumber + 1} / 5 </span>
<span>Your Score: ${store.score} Correct, and ${wrong} Incorrect!</span></h3>`;
  let getResultsButtonCorrect = `<div class ='question-box'>
<img src="photos/kelly-ryan.png" alt="Kelly and Ryan">
<div class= 'question'>${question.question}</div>
<div class ='reults'>Great Job! ${question.correctAnswer} is correct!</div>
<button id= "next" type= "submit" class= 'next-question'>Get Results!</button>
<h3><span>Question #${store.questionNumber + 1} / 5 </span>
<span>Your Score: ${store.score} Correct, and ${wrong} Incorrect!</span></h3>`;

  if (isCorrect === true && store.questionNumber === 4) {
    //console.log(store.questionNumber, 'is the question number ');
    return getResultsButtonCorrect;
  } 
  else if (isCorrect === false && store.questionNumber === 4) {
    return getResultsButtonIncorrect;
  }
  else if (isCorrect === true) {
    return correct;
  }
  else {
    return Incorrect;
  }
}

//renders the feedback options prior to advancing to the next question
function renderFeedback() {
  let html = addHtmlFeedback();
  $('main').html(html);
  
}
//simple function that starts the quiz from the main page.
function startQuiz() {
  $('main').on('click', '.mainPage', function (event) {
    event.preventDefault();
    counter++;
    renderPage();
  });
}

//The OG himself, renderus ulmitius. This function renders the page for non feedback renders.
function renderPage() {
  let html = addHtml();
  $('main').html(html);

}

//This function tracks your score on submiting your answer and moves you forward.
function submitAnswer() {
  $('main').on('submit', 'form#questions', function (event) {
    event.preventDefault();
    let answer = $('input[name=answers]:checked').val();
    if (store.questions[store.questionNumber].correctAnswer === answer) {
      isCorrect = true;
      store.score++;
      renderFeedback();
    } else {
      wrong++;
      isCorrect = false;
      renderFeedback();
    }
  });
}
//This function allows you to resume the quiz after seeing the correct answer to the question you just answered!
function resumeQuiz() {
  $('main').on('click', '.next-question', function (event) {
    event.preventDefault();
    if (store.questionNumber < 4) {
      store.questionNumber++;
      renderPage();
    } else {
      counter++;
      renderPage();
    }
  });
}
//This function clears all counters and score and send you back to the start!
function restartQuiz() {
  $('main').on('click', '.button-restart-quiz', function (event) {
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
  startQuiz();
  submitAnswer();
  resumeQuiz();
  restartQuiz();
}

$(main);
