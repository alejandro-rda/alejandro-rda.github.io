$(document).ready(async function () {
    let state = {
        questions: [],
        currentQuestionIndex: 0,
        score: 0,
        trivia: [
            "¡Exacto! Darth Vader es un personaje increíblemente complejo...",
            "¡Cierto! CM Punk, también conocido como Phil Brooks...",
            "¡Correcto! La clasificación de Perú al Mundial después de 36 años...",
            "¡Exactamente! 'Super Mario 64' fue pionero en su época..."
        ],
    };

    $('#tryAgainBtn').click(() => {
        $('#modal').hide();
        resetQuiz();
        loadQuestion();
    });

    $('#closeTriviaBtn').click(() => {
        $('#triviaModal').hide();
        state.currentQuestionIndex++;
        loadQuestion();
    });

    async function fetchQuestions() {
        try {
            return await $.ajax({url: 'questions.json', dataType: 'json'});
        } catch (error) {
            console.error('Error fetching questions:', error);
            return [];
        }
    }


    function loadQuestion() {
        const { questions, currentQuestionIndex, score } = state;

        // Comprobamos si estamos en la pregunta bono y si las primeras 3 preguntas fueron respondidas correctamente.
        if (currentQuestionIndex === 3 && score < 3) {
            finishQuiz();
            return;
        }

        if (currentQuestionIndex < questions.length) {
            $('#questionTitle').text(`Pregunta ${currentQuestionIndex + 1}`);
            $('#questionText').text(questions[currentQuestionIndex].question);

            $('#options-container').empty(); // Clear previous options

            questions[currentQuestionIndex].options.forEach(option => {
                $('#options-container').append(createOptionButton(option));
            });
        } else {
            finishQuiz();
        }
    }

    function createOptionButton(option) {
        const button = $('<button></button>').text(option);
        button.on('click', () => checkAnswer(option));
        return button;
    }

    function checkAnswer(answer) {
        const { questions, currentQuestionIndex, trivia } = state;

        if (answer === questions[currentQuestionIndex].answer) {
            state.score++;
            $('#triviaText').text(trivia[currentQuestionIndex]);
            $('#triviaModal').show();
        } else {
            state.currentQuestionIndex++;
            loadQuestion();
        }
    }


    function finishQuiz() {
        const { score, questions } = state;
        if (score === questions.length) {
            window.location.href = "prize.html";
        } else {
            $('#modal').show();
        }
    }

    function resetQuiz() {
        state.currentQuestionIndex = 0;
        state.score = 0;
    }

    // Start the quiz
    try {
        state.questions = await fetchQuestions();
        loadQuestion();
    } catch (error) {
        console.error('Error starting the quiz:', error);
    }
});
