import { useState } from "react"
import http from "../../utils/http"

function FormPredict({
    isLoading,
    setLoading,
    predictResult,
    setPredictResult
}) {
    

    const [form, setForm] = useState({
        Pregnancies : 0,
        Glucose : 0,
        BloodPressure : 0,
        SkinThickness : 0,
        Insulin : 0,
        BMI : 0,
        DiabetesPedigreeFunction : 0,
        Age : 0
        
    })

    const onHandleChange = (event) => {
            const { name, value, type } = event.target
            const parsedValue = (type === 'number') ? (value === '' ? '' : Number(value)) : value
            setForm(prev => ({
                ...prev,
                [name]: parsedValue
            }))
        }

        const handleSubmit = async (event) => {
            event.preventDefault()

            setLoading(true)
            try {
                const responst = await http.post('/predict-diabetes', form)
                
                const {data,meta} = response.data
                 
                console.log(data);

                setPredictResult(data)
        } catch (error) {
                console.error(error);            
            } finally {
                setLoading(false)
            }
    
        }


    return (
        <form onSubmit={handleSubmit}>
                   <div>
            <fieldset className="fieldset">
            <legend className="fieldset-legend">Pregnancies</legend>
                <input type="number" name="Pregnancies" max={10} value={form.Pregnancies} onChange={onHandleChange} className="input" placeholder="Pregnancies" />
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">Glucose</legend>
                <input type="number" name="Glucose" value={form.Glucose} onChange={onHandleChange} className="input" placeholder="Glucose" />
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">BloodPressure</legend>
                <input type="number" name="BloodPressure" value={form.BloodPressure} onChange={onHandleChange} className="input" placeholder="Blood Pressure" />
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">SkinThickness</legend>
                <input type="number" name="SkinThickness" value={form.SkinThickness} onChange={onHandleChange} className="input" placeholder="SkinThickness" />
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">Insulin</legend>
                <input type="number" name="Insulin" className="input" placeholder="Insulin" value={form.Insulin} onChange={onHandleChange} />
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">BMI</legend>
                <input type="number" name="BMI" className="input" placeholder="BMI" value={form.BMI} onChange={onHandleChange} />
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">DiabetesPedigreeFunction</legend>
                <input type="number" name="DiabetesPedigreeFunction" className="input" placeholder="DiabetesPedigreeFunction" value={form.DiabetesPedigreeFunction} onChange={onHandleChange} />
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">Age</legend>
                <input type="number" name="Age" className="input" placeholder="Age" value={form.Age} onChange={onHandleChange} />
            </fieldset>

            <button className="btn btn-outline btn-primary" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Doing Prediction'}
            </button>
        </div>
        </form>
    )
}

export default FormPredict