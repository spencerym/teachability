function checkAnswers() {
    const answers = {
        question1: "inattentive and hyperactive-impulsive",
        question2: "hyperactive-impulsive",
        question3: "provide a list of steps or approaches to tasks",
        question4: "executive dysfunction is a challenge in managing one's thoughts and actions, leading to impulsivity and difficulty in focusing and organizing tasks",
        question5: "speech-to-text programs like Dragon Dictation or Google Docs",
        question6: "use private cues like a sticky note or shoulder tap, offer regular breaks, and provide a quiet space for relaxation"
    };

    let score = 0;
    const totalQuestions = 6;

    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = document.getElementById(`question${i}`).value.trim().toLowerCase();
        if (userAnswer.includes(answers[`question${i}`])) {
            score += 1;
        }
    }

    const resultText = `You got ${score} out of ${totalQuestions} correct. ${score === totalQuestions ? "Excellent work!" : "Keep reviewing the material and try again!"}`;
    document.getElementById('result').innerText = resultText;
}
