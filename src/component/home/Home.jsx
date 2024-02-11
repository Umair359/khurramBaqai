import React, { useState } from 'react'
import SideBar from '../sideBar/SideBar'
import Profile from '../../assets/KhurramProfile.png'
import CV from '../../assets/CVDrKhurramBaqai.pdf'
const Home = () => {
  const isLogin = false;
  const [name, setName] = useState('Dr. Khurram Baqai');
  const [about, setAbout] = useState([
    "Dr. Khurram Baqai, MBBS, FCPS (Gastroenterology and Hepatology), MACG (USA), holds the distinguished position of Consultant Gastroenterologist and Hepatologist at Ziauddin University Hospital, where he brings a wealth of 17 years of invaluable experience to his specialized field. Additionally, Dr. Baqai fulfills the vital role of Supervisor at the College of Physicians and Surgeons in Pakistan (CPSP), where he oversees the training of future gastroenterologists and serves as an Examiner for Gastroenterology candidates.",
    "As an esteemed faculty member of Ziauddin University, Dr. Baqai holds the rank of Associate Professor, actively contributing to the education and mentorship of undergraduate students. Furthermore, he plays an integral role as a dedicated member of the liver transplant team, where he serves as a transplant hematologist, demonstrating his commitment to advancing medical care.",
    "Dr. Baqai's professional profile is further enriched by his robust research pursuits, resulting in a notable portfolio of publications encompassing a wide range of topics within the domains of Gastroenterology and Hepatology."
  ]);
  const handleTextareaChange = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto'; // Reset the height to auto
    textarea.style.height = textarea.scrollHeight + 'px'; // Set the height based on scrollHeight
  };
  return (
    <div className='bg-gray-300 flex flex-col-reverse lg:flex-row' >
      <SideBar />
      <div className='w-full lg:w-3/4 flex lg:p-20 md:p-8 p-4'>
        <div className='md:p-8 p-4 md:mr-20 mr-4 bg-white rounded-lg shadow-lg h-fit' >
          <input disabled={!isLogin} value={name} onChange={(e) => setName(e.target.value)} className='bg-white w-full md:text-3xl text-xl font-bold text-center' />
          {isLogin ? about.map((value, index) =>
            <textarea key={index} value={value} className='autoresize h-auto w-full text-justify mt-5' />
          ) : about.map((value, index) =>
            <p key={index} className='hover:cursor-default text-justify mt-5' >{value}</p>
          )

          }

          <a className='text-blue-800 underline hover:cursor-pointer' href={CV}>Learn More..</a>
        </div>

        <img className='custom-size shadow-2xl rounded-full' src={Profile} alt='Profile' />

      </div>

    </div>
  )
}

export default Home