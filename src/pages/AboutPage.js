import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
const AboutPage = () => {
    return (
        <div id='about' className='grid lg:grid-cols-2 py-20 text-white gap-4'>
            <div>
                <h2 className='text-4xl my-8'>About Me</h2>
                <h1 className='text-3xl'>I'm a Junior Full Stack web developer</h1>
                <p>Recent complete diploma with Computer Science and
                    Technology. I am a fast learner and tend to pick up
                    someone else's work faster and improve. I am capable
                    of working better under pressure and i manage to
                    complete my work by the given time. Currently , I am
                    looking to work for an organization where there will be
                    enough opportunities to prove my self and learn new
                    skills while contributing to the organization</p>
                <div>
                    <ul className='flex  gap-4 text-white mt-4'>
                        <li><a href="#" className='text-2xl'><FaGithub></FaGithub></a></li>
                        <li><a href="#" className='text-2xl'><FaFacebook></FaFacebook></a></li>
                        <li><a href="#" className='text-2xl'><FaLinkedin></FaLinkedin></a></li>
                        <li><a href="#" className='text-2xl'><FaTwitter></FaTwitter></a></li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col  font-semibold'>
                <div className='mt-4 text-white '>
                    <h3>Vanilla CSS3</h3>
                    <progress className="progress progress-info w-8/12 bg-slate-0" value="90" max="100"></progress>
                </div>
                <div className='mt-4 text-white'>
                    <h3>Vanilla JavaScript</h3>
                    <progress className="progress progress-info w-8/12 bg-slate-80" value="50" max="100"></progress>
                </div>
                <div className='mt-4 text-white'>
                    <h3>ReactJS</h3>
                    <progress className="progress progress-info w-8/12 bg-slate-90" value="50" max="100"></progress>
                </div>
                <div className='mt-4 text-white'>
                    <h3>Firebase</h3>
                    <progress className="progress progress-info w-8/12 bg-slate-80" value="50" max="100"></progress>
                </div>
                <div className='mt-4 text-white'>
                    <h3>MongoDB</h3>
                    <progress className="progress progress-info w-8/12 bg-slate-80" value="50" max="100"></progress>
                </div>
                <div className='mt-4 text-white'>
                    <h3>NodeJS</h3>
                    <progress className="progress progress-info w-8/12 " value="70" max="100"></progress>
                </div>
                <div className='mt-4 text-white'>
                    <h3>ExpressJS</h3>
                    <progress className="progress progress-info w-8/12 " value="85" max="100"></progress>
                </div>

            </div>
        </div>
    );
};


export default AboutPage;