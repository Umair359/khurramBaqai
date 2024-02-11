import React from 'react'
import PatientInfo1 from '../../assets/patient-info/Celiac Diseasae - Leaflet for patient information.pdf';
import PatientInfo2 from '../../assets/patient-info/NICE-BDA-IBS-advice-leaflet-1.pdf';
import PDFFileImage from '../../assets/PDFFileImage.png'
const PatientInfo = () => {
  return (
    <div className='bg-gray-300'>
      <h1 className='md:text-3xl text-xl font-bold text-center pt-10'>Patient info leaflets</h1>
      <div className='h-full py-10 px-5 flex flex-row flex-wrap gap-10 justify-center ' >
        <a className='bg-white rounded-lg shadow-lg'>
          <div className='p-5'>
            <img className='w-28' src={PDFFileImage} alt="PDFFileImage" />
            <p className='w-28 mt-4 text-justify'>Celiac Diseasae - Leaflet for patient information</p>
          </div>
        </a>
        <a className='bg-white rounded-lg shadow-lg'>
          <div className='p-5'>
            <img className='w-28' src={PDFFileImage} alt="PDFFileImage" />
            <p className='w-28 mt-4 text-justify'>Celiac Diseasae - Leaflet for patient information</p>
          </div>
        </a>
        <a className='bg-white rounded-lg shadow-lg'>
          <div className='p-5'>
            <img className='w-28' src={PDFFileImage} alt="PDFFileImage" />
            <p className='w-28 mt-4 text-justify'>Celiac Diseasae - Leaflet for patient information</p>
          </div>
        </a>
        <a className='bg-white rounded-lg shadow-lg'>
          <div className='p-5'>
            <img className='w-28' src={PDFFileImage} alt="PDFFileImage" />
            <p className='w-28 mt-4 text-justify'>Celiac Diseasae - Leaflet for patient information</p>
          </div>
        </a>
        <a className='bg-white rounded-lg shadow-lg'>
          <div className='p-5'>
            <img className='w-28' src={PDFFileImage} alt="PDFFileImage" />
            <p className='w-28 mt-4 text-justify'>Celiac Diseasae - Leaflet for patient information</p>
          </div>
        </a>
        <a className='bg-white rounded-lg shadow-lg'>
          <div className='p-5'>
            <img className='w-28' src={PDFFileImage} alt="PDFFileImage" />
            <p className='w-28 mt-4 text-justify'>Celiac Diseasae - Leaflet for patient information</p>
          </div>
        </a>
        <a className='bg-white rounded-lg shadow-lg'>
          <div className='p-5'>
            <img className='w-28' src={PDFFileImage} alt="PDFFileImage" />
            <p className='w-28 mt-4 text-justify'>Celiac Diseasae - Leaflet for patient information</p>
          </div>
        </a>
        <a className='bg-white rounded-lg shadow-lg'>
          <div className='p-5'>
            <img className='w-28' src={PDFFileImage} alt="PDFFileImage" />
            <p className='w-28 mt-4 text-justify'>Celiac Diseasae - Leaflet for patient information</p>
          </div>
        </a>
        <a className='bg-white rounded-lg shadow-lg'>
          <div className='p-5'>
            <img className='w-28' src={PDFFileImage} alt="PDFFileImage" />
            <p className='w-28 mt-4 text-justify'>Celiac Diseasae - Leaflet for patient information</p>
          </div>
        </a>
      </div>
    </div>

  )
}

export default PatientInfo