//Our data including questions!
'use strict';
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

let pictureArr = [`<img src= 'photos/dwight-and-fam.jpg' alt='Dwight and his family'></img>`,
  `<img src="photos/kelly-ryan.png" alt='Kelly and Ryan'></img>`,
  `<img src='photos/baby-name.jpg' alt='Baby Question'></img>`,
  `<img src='photos/pam-roy.jpg' alt='Pam and Roy'></img>`,
  `<img src='photos/wedding-question.jpg' alt='Wedding Question'></img>`
];

let isFeedback = false;



/*
TODO:
Combine render and renderfeedback
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
</div>
<div class = 'bottom'><h3>Produced by Mark Marcello & Caleb Jackson<h3><p>Questions and Photos provided by TheQuiz.com</p></div>
`;

  // <img src="photos/kelly-ryan.png" alt="Kelly and Ryan">

  let questionPage = `<div class ='question-box'>
${questionPhoto()}
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
<h3><span>Question #${store.questionNumber + 1} / 5 </span><span>Your Score: ${store.score} Correct, and ${wrong} Incorrect!</span></h3>
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


//function that gives goodResult vs badResult on last page
function results() {
  let results = store.score;

  let goodResult = `<div>
<img src= "photos/happy-stanley.png" alt="Happy Stanley">
<h2>Nice Job!</h2>
<p>${(store.score / 5) * 100}%</p>
<button class="button-restart-quiz">START QUIZ AGAIN!</button>
</div> 
<div class = 'bottom'><h3>Produced by Mark Marcello & Caleb Jackson<h3><p>Questions and Photos provided by TheQuiz.com</p></div>`;

  let badResult =
    `<div>
<img src= "photos/did-i-stutter.jpg" alt="Sad Stanley">
<h2>You failed!</h2>
<p>${(store.score / 5) * 100}%</p>
<button class="button-restart-quiz">START QUIZ AGAIN!</button>
</div>
<div class = 'bottom'><h3>Produced by Mark Marcello & Caleb Jackson<h3><p>Questions and Photos provided by TheQuiz.com</p></div> `;

  if (results >= 4) {
    return goodResult;
  }
  else {
    return badResult;
  }

}

// adds html elements to be added by renderFeedback
function addHtmlFeedback() {
  let question = store.questions[store.questionNumber];
  let correct = `<div class ='question-box'>
  ${questionPhoto()}
<div class= 'question'>${question.question}</div>
<div class ='reults'>Great Job! ${question.correctAnswer} is correct!</div>
<button id= "next" type= "submit" class= 'next-question'>Next Question!</button>
<h3><span>Question #${store.questionNumber + 1} / 5 </span>
<span>Your Score: ${store.score} Correct, and ${wrong} Incorrect!</span></h3>
<div class = 'bottom'><h3>Produced by Mark Marcello & Caleb Jackson<h3><p>Questions and Photos provided by TheQuiz.com</p></div>`;

  let incorrect = `<div class ='question-box'>
  ${questionPhoto()}
<div class= 'question'>${question.question}</div>
<div class ='reults'>Oh no, you got it wrong! ${question.correctAnswer} is the correct answer.</div>
<button id= "next" type= "submit" class= 'next-question'>Next Question!</button>
<h3><span>Question #${store.questionNumber + 1} / 5 </span>
<span>Your Score: ${store.score} Correct, and ${wrong} Incorrect!</span></h3>
<div class = 'bottom'><h3>Produced by Mark Marcello & Caleb Jackson<h3><p>Questions and Photos provided by TheQuiz.com</p></div>`;

  let getResultsButtonIncorrect = `<div class ='question-box'>
  ${questionPhoto()}
<div class= 'question'>${question.question}</div>
<div class ='reults'>Oh no, you got it wrong! ${question.correctAnswer} is the correct answer.</div>
<button id= "next" type= "submit" class= 'next-question'>Get Results!</button>
<h3><span>Question #${store.questionNumber + 1} / 5 </span>
<span>Your Score: ${store.score} Correct, and ${wrong} Incorrect!</span></h3>
<div class = 'bottom'><h3>Produced by Mark Marcello & Caleb Jackson<h3><p>Questions and Photos provided by TheQuiz.com</p></div>`;

  let getResultsButtonCorrect = `<div class ='question-box'>
  ${questionPhoto()}
<div class= 'question'>${question.question}</div>
<div class ='reults'>Great Job! ${question.correctAnswer} is correct!</div>
<button id= "next" type= "submit" class= 'next-question'>Get Results!</button>
<h3><span>Question #${store.questionNumber + 1} / 5 </span>
<span>Your Score: ${store.score} Correct, and ${wrong} Incorrect!</span></h3>
<div class = 'bottom'><h3>Produced by Mark Marcello & Caleb Jackson<h3><p>Questions and Photos provided by TheQuiz.com</p></div>`;

  if (isCorrect === true && store.questionNumber === 4) {
    return getResultsButtonCorrect;
  }
  else if (isCorrect === false && store.questionNumber === 4) {
    return getResultsButtonIncorrect;
  }
  else if (isCorrect === true) {
    return correct;
  }
  else {
    return incorrect;
  }
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
  if (isFeedback === false) {
    let html = addHtml();
    $('main').html(html);
  }
  if (isFeedback === true) {
    let html = addHtmlFeedback();
    $('main').html(html);
  }

}


//This function tracks your score on submiting your answer and moves you forward.
function submitAnswer() {
  $('main').on('submit', 'form#questions', function (event) {
    event.preventDefault();
    let answer = $('input[name=answers]:checked').val();
    if (store.questions[store.questionNumber].correctAnswer === answer) {
      isCorrect = true;
      store.score++;
      isFeedback = true;
      renderPage();
    } else {
      wrong++;
      isCorrect = false;
      isFeedback = true;
      renderPage();
    }
  });
}
//This function allows you to resume the quiz after seeing the correct answer to the question you just answered!
function resumeQuiz() {
  $('main').on('click', '.next-question', function (event) {
    event.preventDefault();
    if (store.questionNumber < 4) {
      store.questionNumber++;
      isFeedback = false;
      renderPage();
    } else {
      counter++;
      isFeedback = false;
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