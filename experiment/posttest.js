
(function() {
    function buildQuiz() {
        const output = [];

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll(".answers");

        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

            } else {
                answerContainers[questionNumber].style.color = "red";
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");







    /////////////// MCQ below  ///////////////


    const myQuestions = [{
            question: "1. The degree of static indeterminacy of a rigid jointed space frame is", 
            answers: {
                a: "m + R - 2j", 
                b: "m + R - 3j ", 
                c: "3m + R - 3j",
                d: "6m + R - 6j", 
            },
            correctAnswer: "a" 
        },
                         
//       

        {
            question: "2. For any structure, when both ends have roller supports, then the structure will be", 
            answers: {
                a: "Stable", 
                b: "Unstable",
                c: "both (a) and (b)", 
                d: "Non of the above",
            },
            correctAnswer: "b" 
        },
                         
        {
            question: "3. For statically determinate structure, the degree od indeterminacy is equal to", 
            answers: {
                a: "One", 
                b: "More then one", 
                c: "Zero", 
                d: "non of these", 
            },
            correctAnswer: "c" 
        },                 

        {
            question: "4. Degree of Indeterminacy for a fixed beam is'" , 

            answers: {
                a: "5", 
                b: "Zero", 
                c: "3", 
                d: "2", 
            },
            correctAnswer: "d" 
        }, 

        {
            question: "5. What will be the static indeterminacy for a beam having one end hinged and other end fixed" , 

            answers: {
                a: "Zero", 
                b: "2", 
                c: "6", 
                d: "3", 
            },
            correctAnswer: "a" 
        }, 
        

         


        
    ];




    buildQuiz();

    submitButton.addEventListener("click", showResults);
})();


