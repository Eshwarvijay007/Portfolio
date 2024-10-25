import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { certificates} from '../constants';
import { motion } from 'framer-motion';

const gradientColors = [
  "linear-gradient(135deg, #1f4037 10%, #99f2c8 100%)", // Card 1
  "linear-gradient(135deg, #a95350 30%, #9c03d2 100%)", // Card 2
  "linear-gradient(135deg, #96c93d 29%, #6a11cb 80%)", // Card 3
  "linear-gradient(135deg, #00b09b 28%, #99d0c8 50%)", // Card 4
  "linear-gradient(135deg, #ff416c, #ff4b2b)", // Card 5
  
];

const Certificates = () => {
  return (
    <section>
      <div id="Experience">
      <div className='experience bg-black w-screen text-white pt-4 pt-16 overflow-x-hidden flex flex-col min-h-screen' id='experience'>
      <div className='pt-12 sm:px-16'>
        <p className='font-light'>Accomplishments.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Certifications.</h2>
      </div>
      <VerticalTimeline 
        className='mt-9 flex-grow'
        layout="1-column-left"
      >
        {certificates.map((certificates, index) => (
          <VerticalTimelineElement
            key={index}
            className="relative vertical-timeline-element--work"
            contentStyle={{ 
              background: gradientColors[index % gradientColors.length], 
              color: "#fff", 
              borderRadius: '10px', // Rounded corners for the card
              padding: '20px', // Padding inside the card
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
              marginRight: '20px', // Gap on the right side
            }} 
            contentArrowStyle={{ borderRight: `7px solid ${gradientColors[index % gradientColors.length].split(',')[0].split('(')[1]}` }} // Match arrow color with card background
            date={certificates.duration}
            iconStyle={{ background: '#fff' }} 
            icon={ 
              <motion.a 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }} 
                className='flex justify-center items-center w-full h-full' 
                href={certificates.url} 
                target='_blank' 
                rel="noreferrer"
              >
                <img src={certificates.logo} alt={certificates.company} className='w-[60%] h-[60%] object-contain' />
              </motion.a>
            }
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>{certificates.title}</h3>
              <p
                className='text-secondary text-[16px] font-semibold'
                style={{ margin: 0 }}
              >
                {certificates.company}
              </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {certificates.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                  {point}
                </li>
              ))}
            </ul>
            {/* Add button at the bottom of the card */}
            <div className="mt-4">
              <a 
                href={certificates.url} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-block bg-opacity-70 border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-blue-500 transition"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }} // Semi-transparent white background
              >
                View
              </a>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      {/* <Footer/> */}
    </div>
      </div>
    </section>
  );
};

export default Certificates;
