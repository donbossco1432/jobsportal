import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { FaWhatsapp, FaBriefcase } from 'react-icons/fa';

function WhatsAppModal({ show, onClose, onSubmit, context, error, setUserNumber, userNumber }) {
  return show ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white/90 rounded-3xl shadow-2xl p-8 w-full max-w-md transform scale-100 animate-modal-pop relative border border-indigo-100">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold">&times;</button>
        <h3 className="text-2xl font-bold text-indigo-700 mb-2 text-center">Enter Your WhatsApp Number</h3>
        <div className="text-center text-gray-500 mb-4 text-base">{context}</div>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="tel"
            placeholder="e.g. +919999999999"
            value={userNumber}
            onChange={e => setUserNumber(e.target.value)}
            className="border border-indigo-200 bg-indigo-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg shadow-sm"
            maxLength={15}
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition text-lg shadow-lg">
            <FaWhatsapp className="text-xl" /> Start WhatsApp Chat
          </button>
        </form>
      </div>
    </div>
  ) : null;
}

function Navbar({ onContactClick }) {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/jobs', label: 'Jobs' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact Us', isContact: true },
  ];
  const location = window.location.pathname;
  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-indigo-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-extrabold text-indigo-700 tracking-tight">
          <FaBriefcase className="text-indigo-500" /> JobsPortal
        </div>
        <div className="flex gap-2 bg-indigo-50 rounded-full px-2 py-1 shadow-inner border border-indigo-100">
          {navLinks.map(link => link.isContact ? (
            <button
              key={link.to}
              onClick={() => onContactClick('General Inquiry')}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-indigo-300 
                ${location === link.to ? 'bg-indigo-600 text-white shadow-md' : 'text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900'}`}
            >
              {link.label}
            </button>
          ) : (
            <Link
              key={link.to}
              to={link.to}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-indigo-300 
                ${location === link.to ? 'bg-indigo-600 text-white shadow-md' : 'text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Home({ onContactClick }) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] overflow-hidden">
      {/* Abstract SVG background blob */}
      <svg className="absolute -top-32 -left-32 w-[600px] h-[600px] opacity-30 blur-2xl -z-10" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_1_2)">
          <ellipse cx="300" cy="300" rx="300" ry="200" fill="url(#paint0_radial_1_2)" />
        </g>
        <defs>
          <radialGradient id="paint0_radial_1_2" cx="0" cy="0" r="1" gradientTransform="translate(300 300) scale(300 200)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#A5B4FC" stopOpacity="0.7" />
          </radialGradient>
          <filter id="filter0_f_1_2" x="-100" y="-100" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="50" />
          </filter>
        </defs>
      </svg>
      <svg className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-20 blur-2xl -z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter1_f_1_3)">
          <ellipse cx="200" cy="200" rx="200" ry="120" fill="url(#paint1_radial_1_3)" />
        </g>
        <defs>
          <radialGradient id="paint1_radial_1_3" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200 120)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#818cf8" stopOpacity="0.7" />
          </radialGradient>
          <filter id="filter1_f_1_3" x="-100" y="-100" width="600" height="600" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="50" />
          </filter>
        </defs>
      </svg>
      <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-800 mb-8 drop-shadow animate-slide-down">Welcome to <span className="bg-gradient-to-r from-indigo-500 to-blue-400 text-transparent bg-clip-text">JobsPortal</span></h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Link to="/jobs" className="flex items-center gap-3 px-14 py-6 text-2xl font-bold rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <FaBriefcase className="text-3xl" /> Abroad Jobs
        </Link>
        <button onClick={() => onContactClick('General Inquiry')} className="flex items-center gap-3 px-14 py-6 text-2xl font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <FaWhatsapp className="text-3xl" /> Contact Us
        </button>
      </div>
    </div>
  );
}

const jobsList = [
  {
    id: 'russia-warehouse-helper',
    title: 'Warehouse Helper',
    country: 'Russia',
    emoji: '🇷🇺',
    details: [
      '12 Months work permit (renewable)',
      'Salary: 60,000 to 70,000 + OT Extra',
      'Accommodation + One Time Meal Company Provided',
    ],
    eligibility: [
      'Age limit - 38',
      '10th pass',
      'Passport',
      '35x45 White Background Digital Photo',
      'Medical Reports- HIV, HB, TB (Only For Dr. Lal Path Lab)',
      'Submit cheque for security',
      'Agreement',
    ],
    benefits: [
      'Pay fees After visa',
      'Get visa in just 40 working Days',
    ],
    b2b: 'Service charges -- 3.3 lakhs',
    image: 'job-russia.jpg',
  },
  // Add more jobs here in the future
];

function Jobs({ onConnectClick }) {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center py-12 px-2">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-blue-50 to-white -z-10 animate-fade-in"></div>
      {jobsList.map(job => (
        <div key={job.id} className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-10 items-center max-w-4xl w-full border border-blue-100 hover:shadow-indigo-200 transition-all duration-300 animate-slide-up mb-10">
          <div className="w-full md:w-1/3 flex justify-center">
            <img src={job.image} alt={job.title} className="rounded-2xl w-full max-w-lg border-4 border-indigo-100 shadow-lg hover:shadow-indigo-300 transition duration-300" />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-extrabold mb-3 text-indigo-700 flex items-center gap-2"><FaBriefcase className="text-indigo-500" /> {job.title}</h3>
            <ul className="list-disc ml-6 mb-4 text-gray-700 text-lg space-y-1">
              {job.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
            <div className="mb-2 font-semibold text-indigo-600">Documents & Eligibility criteria</div>
            <ul className="list-disc ml-6 mb-4 text-gray-700 text-base space-y-1">
              {job.eligibility.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
            <div className="mb-2 font-semibold text-indigo-600">Benefits</div>
            <ul className="list-disc ml-6 mb-4 text-gray-700 text-base space-y-1">
              {job.benefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="mb-2 font-semibold text-indigo-600">Best Deal For B2B</div>
            <div className="mb-4 text-gray-700">{job.b2b}</div>
            <button onClick={() => onConnectClick(`${job.emoji} ${job.title} - ${job.country}`)} className="flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:bg-green-700 transition text-lg">
              <FaWhatsapp className="text-2xl" /> Connect Us
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function About() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 max-w-3xl mx-auto border border-indigo-100">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">About Us</h2>
        <p className="text-lg text-gray-700">JobsPortal is dedicated to connecting job seekers with the best opportunities abroad. We provide transparent, reliable, and fast services to help you achieve your career dreams. Our mission is to make overseas employment accessible and hassle-free for everyone.</p>
      </div>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContext, setModalContext] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [error, setError] = useState('');

  const handleOpenModal = (context) => {
    setModalContext(context);
    setShowModal(true);
    setUserNumber('');
    setError('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUserNumber('');
    setError('');
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!userNumber.match(/^\+?\d{10,15}$/)) {
      setError('Please enter a valid WhatsApp number (10-15 digits, with country code)');
      return;
    }
    // Compose WhatsApp message
    let message = `Hi, my WhatsApp number is ${userNumber}`;
    if (modalContext && modalContext !== 'General Inquiry') {
      message = `Hi, I am interested in ${modalContext}. My WhatsApp number is ${userNumber}`;
    }
    const waLink = `https://wa.me/918143282116?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
    handleCloseModal();
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-white">
        <Navbar onContactClick={handleOpenModal} />
        <WhatsAppModal
          show={showModal}
          onClose={handleCloseModal}
          onSubmit={handleModalSubmit}
          context={modalContext}
          error={error}
          setUserNumber={setUserNumber}
          userNumber={userNumber}
        />
        <Routes>
          <Route path="/" element={<Home onContactClick={handleOpenModal} />} />
          <Route path="/jobs" element={<Jobs onConnectClick={handleOpenModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Home onContactClick={handleOpenModal} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
