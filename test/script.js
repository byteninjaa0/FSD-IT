let questions = [
    {
        question: "What is the meaning of 'alter'?",
        options: ["Change", "Eat", "Sing", "Run"],
        answer: "Change"
    },
    {
        question: "What does 'adjacent' mean?",
        options: ["Next to", "Far from", "On top", "Below"],
        answer: "Next to"
    },
    {
        question: "What is the opposite of 'shallow'?",
        options: ["Deep", "Short", "Narrow", "Wide"],
        answer: "Deep"
    },
    {
        question: "What does 'construct' mean?",
        options: ["Build", "Break", "Skip", "Avoid"],
        answer: "Build"
    }
];

let currentQuestion = 0;
let userAnswers = Array(questions.length).fill(null);

function displayQuestion() {
    const questionText = document.getElementById("question-text");
    const form = document.querySelector(".form");
    form.innerHTML = "";  

    questionText.textContent = `Q${currentQuestion + 1}: ${questions[currentQuestion].question}`;

    questions[currentQuestion].options.forEach(option => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `question${currentQuestion}`;
        input.value = option;
        input.checked = userAnswers[currentQuestion] === option;

        const label = document.createElement("label");
        label.textContent = option;

        form.appendChild(input);
        form.appendChild(label);
        form.appendChild(document.createElement("br"));
    });
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    }
}

function previousQuestion() {
    saveAnswer();
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function saveAnswer() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestion}"]:checked`);
    if (selectedOption) {
        userAnswers[currentQuestion] = selectedOption.value;
    }
}

function calculateScore() {
    saveAnswer();
    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].answer) {
            score++;
        }
    });

    document.getElementById("score").textContent = `Your score is: ${score} out of ${questions.length}`;
}

displayQuestion();  
