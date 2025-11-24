import React from 'react'
import FormPredict from '../Components/formPredict'

function PredictDiabetesPage() {
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
          <FormPredict/>
        </div>
        <div>
          Right
        </div>
       </div>
    </div>
  )
}

export default PredictDiabetesPage