import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header/Header.jsx';
import Footer from './component/footer/Footer.jsx';

import Home from './component/home/Home.jsx';
import Contact from './component/contact/Contact.jsx'
import Blog from './component/blog/Blog.jsx';
import BlogDetails from './component/blogDetails/BlogDetails.jsx';
import PatientInfo from './component/patientInfo/PatientInfo.jsx';
import Videos from './component/videos/Videos.jsx';
import Auth from './component/auth/Auth.jsx';
import AdminPanel from './component/adminPanel/AdminPanel.jsx';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/blog/:id' element={<BlogDetails />} />
                <Route path='/videos' element={<Videos />} />
                <Route path='/patient-info' element={<PatientInfo />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/admin-panel' element={<AdminPanel />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
