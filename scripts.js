function checkAnswers() {
    const answers = {
        question1: "a",
        question2: "b",
        question3: "b",
        question4: "c",
        question5: "b",
        question6: "b"
    };

    let score = 0;
    const totalQuestions = 6;

    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = document.querySelector(`input[name="question${i}"]:checked`);
        if (userAnswer && userAnswer.value === answers[`question${i}`]) {
            score += 1;
        }
    }

    const resultText = `You got ${score} out of ${totalQuestions} correct. ${score === totalQuestions ? "Excellent work!" : "Keep reviewing the material and try again!"}`;
    document.getElementById('result').innerText = resultText;
}
