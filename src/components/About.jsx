import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' style={{ background: '#151030' }}>
        <img src={service.icon} alt='some_icon' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{service.title}</h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className='bg-black w-screen min-h-screen flex flex-col justify-between'>
      <div className='text-white sm:flex sm:items-start sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around sm:w-1/2'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction.</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Eshwar Vijay, a 2024 graduate🎓 with a passion for crafting robust backend systems and captivating web applications.As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/eshwar-vijay-637a68187/' target='_blank'>Full-Stack Developer</a>
            ,I specialize in the dynamic realms of the MERN stack🚀. <br/>
            ✍️ I prioritize writing clean, maintainable code and continuously strive to improve my <a className='text-blue-300 hover:text-violet-500 duration-300' href='https://github.com/Eshwarvijay007' target='_blank'>coding </a>practices.Beyond Coding,
            I create engaging vlogs on <a className='text-orange-300 hover:text-red-500 duration-300' href='https://www.instagram.com/browwn.traveller/' target='_blank'>Instagram</a>, It's not just a hobby; I see it as a way to capture moments🌟, tell stories.</p>

            <ButtonLink
              url='https://drive.google.com/file/d/1YsVhKhW4vi0aiAF8--j4htC3APxwR7CG/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />
          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
        {/* Image Container */}
        <div className='hidden sm:block sm:w-1/3'>
          <img src='/profile.jpg' alt='Eshwar Vijay' className='small-image' />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About;
