import React from 'react'
import FormPredict from '../Components/formPredict'
import { data } from 'react-router'

function PredictDiabetesPage() {
const [isLoading, setLoading, setPredictResult, predictResult] = React.useState(false)

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
       <div className="grid grid-cols-2 gap-5 bg-black p-5 rounded-2xl max-w-6xl shadow w-full">
        <div>
          <div className="font-black">Demo Machine Learning</div>
          <h1>Prediksi Diabetes</h1>
          <p>
            Isi Form Di Bawah Ini Untuk Mendapatkan Hasil Analisa Diabetes Anda
          </p>
        </div>
        <div>
          <FormPredict isLoading={isLoading} setLoading={setLoading} setPredictResult={setPredictResult} />
        </div>
        <div>
          HASIL PREDIKSI : {predictResult === 0 ? 'Negative' : 'Positive'}
        </div>
       </div>
    </div>
  )
}

export default PredictDiabetesPage