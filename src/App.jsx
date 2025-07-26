import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { DoctorProvider } from './Components/DoctorsContext/DoctorsContext';
import Home from "./Components/Home/Home";
import FindDoctors from './Components/FindDoctors/Finddoctors';
import BookAppointment from './Components/BookAppointment/BookAppointment';
import AboutUs from './Components/AboutUs/About';
import Header from './Components/Header/Header';
import ProfileDetails from './Components/ProfileDetails/ProfileDetails';
import NotFound from './Components/NotFound/NotFound';

const App = () => {
  return (
    <DoctorProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/finddoctors" element={<FindDoctors />} />
        <Route path="/finddoctors/:id" element={<ProfileDetails />} />
        <Route path="/finddoctors/:id/bookappointment" element={<BookAppointment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DoctorProvider>
  );
};

export default App;
