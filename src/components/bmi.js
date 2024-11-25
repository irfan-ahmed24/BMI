import React from 'react'
export default function Bmi() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const height = parseFloat(document.getElementById('height').value) * 0.3048
        const weight = parseFloat(document.getElementById('weight').value)
        const bmi = weight / (height ** 2)
        const bmiValue = bmi.toFixed(2)
        document.getElementById('bmi-value').textContent = `BMI: ${bmiValue}`
        const category = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese'
        document.getElementById('bmi-category').textContent = `Category: ${category}`
        const range = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese'
        document.getElementById('bmi-range').textContent = `Weight Range: ${range}`
        const advice = range === 'Underweight' ?
            'sokaiya gesos , Ja giya vlo vlo khabar kha'
            : range === 'Normal' ? 'Tension koris na tor weight thik ase' : range === 'Overweight' ?
                'ato khais na moda hoiya gesos toi' :
                'Toi roga toi doctor dekha taratari na hoy moira jaibi'
        document.getElementById('bmi-advice').textContent = `Advice: ${advice}`
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
                <button type="submit">Calculate</button>
            </form>
            <div id="bmi-result">
                <p id="bmi-value"></p>
                <p id="bmi-category"></p>
                <p id="bmi-range"></p>
                <p id="bmi-advice"></p>
            </div>
        </div>
    )
}
