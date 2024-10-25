import React, { useEffect, useState, useRef } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";
import Background from './Background';
import Footer from './Footer';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Certificate from './Certificate';





const Home = () => {

  const ref = useRef(0);
  const [text, setText] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [showEshwar, setShowEshwar] = useState(false); // New state to control Eshwar display
  const greetings = [
    'Hello',
    'ನಮಸ್ಕಾರ', // Kannada
    'नमस्ते',   // Hindi
    'வணக்கம்',   // Tamil
    'నమస్కారం',  // Telugu
    'नमस्कार',   // Marathi
    'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', // Punjabi
    'નમસ્કાર',   // Gujarati
    'নমস্কার',   // Bengali
    'നമസ്കാരം',   // Malayalam
    'नमस्कार',   // Urdu
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText((prevText) => prevText + name[ref.current - 1]);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    // Add listener to update isMobile when the window resizes
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => {
        if (prevIndex < greetings.length - 1) {
          return prevIndex + 1; // Increment index until the last greeting
        } else {
          clearInterval(interval); // Stop the interval after the last greeting
          setShowEshwar(true); // Set flag to show "I'm Eshwar"
          return prevIndex; // Keep the last index
        }
      });
    }, 700); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='area relative z-0 bg-black w-screen h-screen overflow-x-hidden'>
      <ul className="circles">
        <li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
      </ul>
      <div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
        <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
          <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>
            <span className='text-yellow-200'>
              {showEshwar ? 'Hello' : greetings[greetingIndex]}
            </span> 
            {showEshwar && <span className='text-white font-extrabold'>,I'm &nbsp;Eshwar</span>}
            {/* <span className='text-white font-extrabold'>{text}</span> */}
          </h1>
          {/* <p className='mt-3 text-xl'>I love to learn and build scalable and optimized systems.</p> */}
        </div>      
      </div>
	  <div className="pt-16">
      <About /> 
	  <Experience/>
    
	  <Projects/>
    <Certificate/>
	  <Contact/>
      <Footer/>
	  </div>
    </div>  
  );
}

export default Home;
