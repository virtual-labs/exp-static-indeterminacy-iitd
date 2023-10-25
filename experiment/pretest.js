/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. Which of the followings are indeterminate structure ?", ///// Write the question inside double quotes
            answers: {
                a: "3 hinged arch", ///// Write the option 1 inside double quotes
                b: "Continous Beam", ///// Write the option 2 inside double quotes
                c: "Redundant frames", ///// Write the option 1 inside double quotes
                d: "Both B & C", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        {
            question: "2. A Statically indeterminate structures_____", ///// Write the question inside double quotes
            answers: {
                a: "Can be analysed using compatibility equation only", ///// Write the option 1 inside double quotes
                b: "Can be analysed using compatibility equation & equation of statics", ///// Write the option 2 inside double quotes
                c: "Can be analysed using static equations only", ///// Write the option 1 inside double quotes
                d: "Cannot be analysed at all", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "3. Which of the following conditions has to be satisfied for both elastic and plastic method of analysis of indeterminate structures? .", ///// Write the question inside double quotes
            answers: {
                a: "Yield condition", ///// Write the option 1 inside double quotes
                b: "Equiliberium condition", ///// Write the option 2 inside double quotes
                c: "Mechanism condition", ///// Write the option 1 inside double quotes
                d: "Compatibality condition", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "4. A perfect frame should satisfy the relation_____ ", ///// Write the question inside double quotes
            answers: {
                a: "m = 2j-3", ///// Write the option 1 inside double quotes
                b: "m = 2j-4", ///// Write the option 2 inside double quotes
                c: "m = 3j-2 ", ///// Write the option 1 inside double quotes
                d: " m = 3j-3", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "5. If the structure cannot be analysed for external and internal reactions using equiliberium conditions alone, such structure is_____", ///// Write the question inside double quotes
            answers: {
                a: "Concrete structure ", ///// Write the option 1 inside double quotes
                b: "Indeterminate structure", ///// Write the option 2 inside double quotes
                c: "Determinate structure", ///// Write the option 1 inside double quotes
                d: "Steel structure", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },


        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
