const quesJSON = [
    {
        correctAnswer: 'Rome',
        options: ['Rome', 'Palermo', 'Venice', 'Bologna'],
        question:
            "What is the capital city of Italy?",
    },
    {
        correctAnswer: 'J.k. Rowling',
        options: [
            'Suzanne Collins',
            'James Fenimore Cooper',
            'J.k. Rowling',
            'Donna Leon',
        ],
        question:
            "Who is the author of 'Harry potter'?",
    },
    {
        correctAnswer: 'Leonardo Da Vinci',
        options: [
            'Leonardo Da Vinci',
            'Leonardo DaCaprio',
            'Vincent van Gogh',
            'Michelangelo',
        ],
        question: 'Who painted the Mona Lisa?',
    },
    {
        correctAnswer: 'Nanda Devi',
        options: [
            'Mt. Everet',
            'Nanga Parbat',
            'Kanchenjunga',
            'Nanda Devi',
        ],
        question: 'Largest mountain range in India?',
    },
    {
        correctAnswer: 'P. L. Travers',
        options: [
            'J. R. R. Tolkien',
            'P. L. Travers',
            'Lewis Carroll',
            'Enid Blyton',
        ],
        question:
            "Which author wrote 'Mary Poppins'?",
    },
];

let score = 0;
let currentQuestion = 0;
const totalScore = quesJSON.length;

//Accessing all the elements:
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextEl = document.getElementById('next');
showQuestion();

nextEl.addEventListener('click', () => {
    scoreEl.textContent = `Score: ${score} / ${totalScore}`;
    nextQuestion();
});

function showQuestion() {
    // Destructuring the object
    const { correctAnswer, options, question } = quesJSON[currentQuestion];

    //Setting question text content
    questionEl.textContent = question;

    const shuffledOptions = shuffleOptions(options);

    //Populating the Options div with the buttons.
    shuffledOptions.forEach((opt) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        optionEl.appendChild(btn);

        // Event handling on the button:
        btn.addEventListener("click", () => {
            if (opt === correctAnswer) {
                score++;
            }
            else {
                score = score - 0.25;
            }
            scoreEl.textContent = `Score: ${score} / ${totalScore}`;
            nextQuestion();
        });
    });
}

function nextQuestion() {
    currentQuestion++;
    optionEl.textContent = '';
    if (currentQuestion >= quesJSON.length) {
        questionEl.textContent = 'Quiz Completed!!';
        nextEl.remove();
    }
    else {
        showQuestion();
    }

}

//Shuffling the Options
function shuffleOptions(options) {
    for (let i = options.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * i + 1);
        [options[i], options[j]] = [
            options[j],
            options[i],
        ];
    }
    return options;
}

//   shuffleOptions([1, 2, 3, 4, 5]);