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


// //simple function that starts the quiz from the main page.
// function startQuiz() {
//   $('main').on('click', '.mainPage', function (event) {
//     event.preventDefault();
//     counter++;
//     renderPage();
//   });
// }

//This function renders the page for every aspect.
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


// //This function tracks your score on submiting your answer and moves you forward.
// function submitAnswer() {
//   $('main').on('submit', 'form#questions', function (event) {
//     event.preventDefault();
//     let answer = $('input[name=answers]:checked').val();
//     if (store.questions[store.questionNumber].correctAnswer === answer) {
//       isCorrect = true;
//       store.score++;
//       isFeedback = true;
//       renderPage();
//     } else {
//       wrong++;
//       isCorrect = false;
//       isFeedback = true;
//       renderPage();
//     }
//   });
// }
// //This function allows you to resume the quiz after seeing the correct answer to the question you just answered!
// function resumeQuiz() {
//   $('main').on('click', '.next-question', function (event) {
//     event.preventDefault();
//     if (store.questionNumber < 4) {
//       store.questionNumber++;
//       isFeedback = false;
//       renderPage();
//     } else {
//       counter++;
//       isFeedback = false;
//       renderPage();
//     }
//   });
// }
// //This function clears all counters and score and send you back to the start!
// function restartQuiz() {
//   $('main').on('click', '.button-restart-quiz', function (event) {
//     event.preventDefault();
//     store.questionNumber = 0;
//     counter = 1;
//     store.score = 0;
//     wrong = 0;
//     renderPage();
//   });
// }

// function eventHandler(event){
//   if ($('main').on('click', '.mainPage')){
//     startQuiz();
//   }
//   else if ($('main').on('click', '.button-restart-quiz')) {
//     restartQuiz();
//   }
//   else if ($('main').on('submit', 'form#questions')){
//     submitAnswer();
//   }
//   else if($('main').on('click', '.next-question')){
//     resumeQuiz();
//   }
// }
// function eventHandler(event){
//   $('main').on('click', '.mainPage'), function (event) {
//      startQuiz();
//    }
//    $('main').on('click', '.button-restart-quiz'), function (event) {
//      restartQuiz();
//    }
//    $('main').on('submit', 'form#questions'), function (event) {
//      submitAnswer();
//    }
//    $('main').on('click', '.next-question'), function (event) {
//      resumeQuiz();
//    }
//  }

/* revision attempted - created event handler for all the events, but I think I did complete the following with my original submission:
Did the student create single-purpose event handler functions to handle all events?
I have single purpose event handler functions that do handle all the events within this app.

I spoke with ThinkChat and they said I should just re-submit it as is.

Update as of 5pm EST, below seems like a very clunky way to do it, but it's done. I plan to revert it back to how it was after the submission passes.

function eventHandler(event){
  if ($('main').on('click', '.mainPage')){
    startQuiz();
  }
  else if ($('main').on('click', '.button-restart-quiz')) {
    restartQuiz();
  }
  else if ($('main').on('submit', 'form#questions')){
    submitAnswer();
  }
  else if($('main').on('click', '.next-question')){
    resumeQuiz();
  }
  
  
}*/

function eventHandler() {
  let startQuiz = $('main').on('click', '.mainPage', function (event) {
    event.preventDefault();
    counter++;
    renderPage();
  });
  let submitAnswer = $('main').on('submit', 'form#questions', function (event) {
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
  let resumeQuiz = $('main').on('click', '.next-question', function (event) {
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
 //startQuiz();
  //submitAnswer();
 //resumeQuiz();
 //restartQuiz();
}

$(main);
