// Define the checkAnswer function
function checkAnswer() {
    // The correct answer to the question
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Check if an answer is selected
    if (userAnswerElement) {
        const userAnswer = userAnswerElement.value; // Get the value of the selected answer

        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; // Optional: Make feedback green for correct answers
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; // Optional: Make feedback red for incorrect answers
        }
    } else {
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange"; // Optional: Highlight feedback for no selection
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);