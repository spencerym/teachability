function checkAnswers() {
    const question1 = document.getElementById('question1').value.trim().toLowerCase();
    // const question2 = document.getElementById('question2').value.trim().toLowerCase();
    // const question3 = document.getElementById('question3').value.trim().toLowerCase();
    // const question4 = document.getElementById('question4').value.trim().toLowerCase();

    let score = 0;
    let resultText = '';

    // Check answers
    if (question1 === 'attention deficit hyperactivity disorder') {
        score += 1;
    }

    // if (question2.includes('clear and concise instructions') || 
    //     question2.includes('regular breaks') || 
    //     question2.includes('structured environment') || 
    //     question2.includes('positive reinforcement') ||
    //     question2.includes('movement into lessons') ||
    //     question2.includes('choices to increase engagement')) {
    //     score += 1;
    // }

    // if (question3.includes('reading fluency') ||
    //     question3.includes('decoding') ||
    //     question3.includes('comprehension') ||
    //     question3.includes('recall') ||
    //     question3.includes('writing')) {
    //     score += 1;
    // }

    // if (question4.includes('physical coordination') ||
    //     question4.includes('fine motor skills')) {
    //     score += 1;
    // }

    // Display result
    if (score === 4) {
        resultText = 'Excellent! You got all answers correct!';
    } else if (score === 3) {
        resultText = 'Great job! You got three answers correct!';
    } else if (score === 2) {
        resultText = 'Good effort! You got two answers correct.';
    } else if (score === 1) {
        // resultText = 'Keep trying! You got one answer correct.';
        resultText = "Excellent!"
    } else {
        resultText = 'Review the material and try again.';
    }

    document.getElementById('result').innerText = resultText;
}
