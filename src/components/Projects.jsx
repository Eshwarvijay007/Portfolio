import React, { lazy, Suspense } from "react";
import onepieceVideo from '../assets/chatbot.mp4'
import copeople from '../assets/AccessPay.mp4'
import home from '../assets/home.png'
import eshwar from '../assets/eshwar.png'
import Footer from './Footer'

const LazyImage = lazy(() => import('./LazyImage'));
const LazyVideo = lazy(() => import('./LazyVideo'));

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Suspense fallback={<div className="w-full h-48 bg-gray-300 animate-pulse rounded-t-lg"></div>}>
                {title === 'AccessPay Website' || title === 'ChatBot' ? (
                    <LazyVideo src={image} />
                ) : (
                    <LazyImage src={image} alt={title} />
                )}
            </Suspense>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="transition ease-in-out duration-300 rounded-md text-white border-2 hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1 cursor-pointer p-2">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="mb-16"> {/* Add this wrapper div with bottom margin */}
            <section>
                <div id="Projects">
                    <div className="bg-black min-h-screen flex flex-col justify-between">
                        <div className="pt-20 pb-10 px-8 sm:px-16 md:px-24 lg:px-32">
                            <p className='font-light text-white'>MY WORK</p>
                            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2 text-white'>Projects.</h2>
                            <p className='font-light text-white mt-6 max-w-3xl'>
                                Following projects showcases my skills and experience through real-world examples of
                                <br />
                                 my work. Each project is briefly described with links to code repositories.
                                
                                
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                            {project.map((item, index) => (
                                <ProjectCard
                                    key={index}
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    links={item.links}
                                    git={item.git}
                                    technologies={item.technologies}
                                />
                            ))}
                        </div>
                        {/* <Footer/> */}
                    </div>
                    <div>
                        <p className="text-base text-gray-300 text-center mt-4 mb-8"> {/* Added mb-8 for extra bottom spacing */}
                            Want to see more of my projects? Check out my{' '}
                            <a
                                href="https://github.com/Eshwarvijay007"
                                className="text-yellow-200 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </p>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};


export const project = [
    {
        title:'ChatBot',
        description:' chatbot using Node.js and Express.js, designed to handle user queries and provide real-time responses. It integrates seamlessly with various APIs and employs a modular architecture for easy maintenance and scalability.',
        image:  onepieceVideo,
        git:"https://github.com/Eshwarvijay007/chatboot",
        technologies:[ 'HTML','NodeJS', 'JQuery']
    },
    {
        title:'AccessPay Website',
        description:'a financial web app built with Node.js and Express.js, offering transaction tracking, loan management, and crypto rewards. Demonstrates my backend development skills and financial solution expertise.',
        image: copeople,
        git:"https://github.com/Eshwarvijay007/FinalYear-Project",
        technologies:[ 'BootStrap','NodeJS', 'ExpressJS']
    },
    {
        title:'Portfolio Website',
        description:'This is a portfolio website built using React.js and Tailwind CSS. It is a simple and elegant website that showcases my skills and experience through real-world examples of my work.',
        image: eshwar,
        git:"https://github.com/Eshwarvijay007/Portfolio",
        technologies:[ 'ReactJS','Tailwind CSS']
    },
    {
        title:'PawSential-Hub',
        description:'A lightweight database management system designed for small-scale pet shop owners to efficiently track available pets, manage product inventory, and monitor sales activity in real-time.',
        image: home,
        git:"https://github.com/Eshwarvijay007/PawSential-Hub",
        technologies:['JavaScript','PHP','MySQL']
    },
]

export default Projects
