
function calculateBMI() {
    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;

    if (height <= 0 || weight <= 0) {
        alert('Please enter valid values for height and weight.');
        return;
    }

    const bmi = weight / (height * height);
    const bmiRounded = bmi.toFixed(2);

    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    document.getElementById('category').innerText = `Your BMI: ${category}`;
}
