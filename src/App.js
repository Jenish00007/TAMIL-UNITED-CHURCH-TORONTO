import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Ministries from './pages/Ministries';
import Events from './pages/Events';
import PrayerRequest from './pages/PrayerRequest';
import Contact from './pages/Contact';
import About from './pages/About';
import Admin from './pages/admin';
import HeroSlider from './pages/testing';
// const users = [
//   {
//     username: 'john',
//   },
//   {
//     username: 'jenish',
//   },
//   {
//     username: 'esaki',
//   },
//   {
//     username: 'testing',
//   },

// ];





const App = () => {
  //   const [subdomain, setSubdomain] = useState(null);

  //   useEffect(() => {
  //     const host = window.location.host;
  //     const arr = host.split('.').slice(0, host.includes('localhost') ? -1 : -2);
  //     if (arr.length > 0) setSubdomain(arr[0]);
  //   }, []);

  //   const requestedUser = users.find((user) => user.username === subdomain);

  return (
    <Router>
      <Routes>

        {/* <Route path="/" element={<Home />} />
        {requestedUser && (
          <Route path="/sub1" element={<SubHome1 username={requestedUser.username} />} />
        )}
        {requestedUser && (
          <Route path="/sub2" element={<SubHome2 username={requestedUser.username} />} />
        )} */}


        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/prayerrequest" element={<PrayerRequest/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/testing" element={<HeroSlider/>} />
      </Routes>

    </Router>
  );
};

export default App;
