function FormPredict() {
    return (
        <div>
            <fieldset className="fieldset">
            <legend className="fieldset-legend">Pregnancies</legend>
            <input type="number" max={10} className="input" placeholder="Pregnancies" />
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">Glucose</legend>
            <input type="number" className="input" placeholder="Glucose" />
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">Blood Pressure</legend>
            <input type="number" className="input" placeholder="Blood Pressure" />
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">Skin Thickness</legend>
            <input type="number" className="input" placeholder="Skin Thickness" />
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">Insulin</legend>
            <input type="number" className="input" placeholder="Insulin" />
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">BMI</legend>
            <input type="number" className="input" placeholder="BMI" />
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">Diabetes Pedigree Function</legend>
            <input type="number" className="input" placeholder="Diabetes Pedigree Function" />
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">Age</legend>
            <input type="number" className="input" placeholder="Age" />
            </fieldset>

            <button className="btn btn-outline btn-primary">Submit</button>
        </div>
    )
}

export default FormPredict