import React from 'react'
export default function Bmi() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const height = parseFloat(document.getElementById('height').value) * 0.3048
        const weight = parseFloat(document.getElementById('weight').value)
        const bmi = weight / (height ** 2)
        const low = 18.5 * (height ** 2)
        const lowRange = low.toFixed(2)
        const high = 25 * (height ** 2)
        const highrange = high.toFixed(2)
        const bmiValue = bmi.toFixed(2)

        document.getElementById('show-height').textContent = `Height: ${(height / 0.3048).toFixed(1)} Ft`
        document.getElementById('show-weight').textContent = `Weight: ${weight.toFixed(0)} Kg`

        document.getElementById('bmi-value').textContent = `BMI: ${bmiValue}`
        const category = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese'
        document.getElementById('bmi-category').textContent = `Category: ${category}`
        const advice = bmi < 18.5 ? 'You should eat more food' : bmi < 25 ?
            'You are in perfect weight ,stay in this weight' : bmi < 30 ?
                'You should control your eating habit' : 'You should take doctor advice'
        document.getElementById('bmi-advice').textContent = `Advice: ${advice}`
        document.getElementById('weight-range').textContent = `your weight range: ${lowRange} - ${highrange}`
        document.getElementById('btn1').removeAttribute('disabled')
        document.getElementById('btn1').addEventListener("click", () => {
            document.getElementById('height').value = ''
            document.getElementById('weight').value = ''
            document.getElementById('show-height').textContent = ''
            document.getElementById('show-weight').textContent = ''
            document.getElementById('bmi-value').textContent = 'BMI:'
            document.getElementById('bmi-category').textContent = ''
            document.getElementById('bmi-advice').textContent = ''
            document.getElementById('weight-range').textContent = ''

            document.getElementById('btn1').setAttribute('disabled', true)
        })
    }
    return (
        <div className='bmi'>
            <h2>BMI Calculator</h2>
            <form onSubmit={handleSubmit}>
                <div className='high'>
                    <label>Height(ft):</label>
                    <input type="text" id="height" required />
                </div>
                <div className='width'>
                    <label>Weight (kg):</label>
                    <input type="text" id="weight" required />
                </div>
                <button type="submit" className='btn'>Calculate</button>
            </form>
            <div id="bmi-result">
                <h3 id="bmi-value">BMI:</h3>
                <p id="show-height"></p>
                <p id="show-weight"></p>
                <p id="bmi-category"></p>
                <p id="weight-range"></p>
                <p id="bmi-advice"></p>
            </div>
            <div>
                <button type="button" id='btn1' className='btn' disabled>Clear History</button>
            </div>
        </div>
    )
}
