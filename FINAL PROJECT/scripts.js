document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const modeText = document.getElementById("mode-text");

    // Load dark mode preference from local storage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
        modeText.innerText = "Dark Mode";
    }

    // Dark mode toggle functionality
    darkModeToggle.addEventListener("change", () => {
        if (darkModeToggle.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
            modeText.innerText = "Dark Mode";
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
            modeText.innerText = "Light Mode";
        }
    });
});
const API_URL = "https://opentdb.com/api.php?amount=10&type=multiple";

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

// Fetch quiz questions from API
async function fetchQuestions() {
    const category = document.getElementById("category").value;
    const difficulty = document.getElementById("difficulty").value;

    try {
        const response = await fetch(`${API_URL}&category=${category}&difficulty=${difficulty}`);
        const data = await response.json();
        questions = data.results;
        currentQuestionIndex = 0;
        score = 0;
        displayQuestion();
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
}

// Start Quiz Function
function startQuiz() {
    let welcomeScreen = document.getElementById("welcome-screen");
    let quizScreen = document.getElementById("quiz-screen");

    welcomeScreen.style.animation = "fadeOut 0.5s ease-in-out";

    setTimeout(() => {
        welcomeScreen.classList.add("hidden");
        quizScreen.classList.remove("hidden");
        quizScreen.style.animation = "fadeIn 0.5s ease-in-out";
        fetchQuestions(); // Load questions from API
    }, 500);
}

// Display Question
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    clearInterval(timer);
    timeLeft = 30;
    document.getElementById("time").textContent = timeLeft;
    startTimer();

    let questionData = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;

    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    let answers = [...questionData.incorrect_answers, questionData.correct_answer];
    answers.sort(() => Math.random() - 0.5); // Shuffle options

    answers.forEach(answer => {
        let button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("option-btn");
        button.onclick = () => checkAnswer(button, answer, questionData.correct_answer);
        optionsContainer.appendChild(button);
    });
}

// Start Timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

// Check Answer
function checkAnswer(button, selected, correct) {
    clearInterval(timer);
    if (selected === correct) {
        score++;
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
    }
    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 1000);
}

// Move to Next Question
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// Show Quiz Results
function showResults() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
    document.getElementById("score").textContent = score;
    updateLeaderboard(score);
}

// Update Leaderboard
function updateLeaderboard(score) {
    let playerName = prompt("Enter your name for the leaderboard:", "Player");
    if (playerName) {
        leaderboard.push({ name: playerName, score: score });
        leaderboard.sort((a, b) => b.score - a.score);
        leaderboard = leaderboard.slice(0, 5); // Keep top 5 scores
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    }
    displayLeaderboard();
}

// Display Leaderboard
function displayLeaderboard() {
    let leaderboardContainer = document.getElementById("leaderboard");
    leaderboardContainer.innerHTML = "<h2>Leaderboard</h2>";
    leaderboard.forEach((entry, index) => {
        let entryElement = document.createElement("p");
        entryElement.textContent = `${index + 1}. ${entry.name} - ${entry.score} points`;
        leaderboardContainer.appendChild(entryElement);
    });
}

// Restart Quiz
function restartQuiz() {
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("welcome-screen").classList.remove("hidden");
}
