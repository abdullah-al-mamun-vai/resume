import React from 'react';
import Lottie from "lottie-react"
import homeBgFirst from '../assest/homeFirstBG.json'
import ReactTypingEffect from 'react-typing-effect';
import profileBG from '../assest/profileBG.json'
import { FaDownload } from 'react-icons/fa';
import NavMenu from './NavMenu';
const HeroSection = () => {
    return (
        <div id='home'>
            <NavMenu></NavMenu>

            <div className="flex lg:flex-row flex-col-reverse">
                <div className='lg:w-7/12 relative z-0'>
                    <Lottie className="bg-black z-10" animationData={homeBgFirst}></Lottie>
                    <div className="text-white absolute top-20 left-20 z-20">
                        <h2 className="text-6xl font-semibold mt-9">Hello, I'M</h2>
                        <h1 className="text-7xl font-semibold mt-9 relative after:absolute after:top-0 after:left-0 after:bg-green-600 after:h-2 after:w-full after:transition hover:after:w-9/12">Abdullah Al Mamun</h1>

                        <h2 className="text-3xl mt-9 font-semibold"> <ReactTypingEffect
                            text={["Web Developer", "Front End Developer", "ReactJs Developer"]}
                        /></h2>
                        <button className='btn btn-primary mt-8 '><a target={'_blank'} href='https://drive.google.com/file/d/1R8hw2DEMXNpXAo_2CeWGIdPPj_-2p8d-/view?usp=share_link' className='flex'>Download Resume<FaDownload className='ml-2'></FaDownload></a></button>
                    </div>
                </div>
                <div className='lg:w-5/12 overflow-hidden'>
                    <div className="flex relative -z-0 justify-center items-center">
                        <img className="z-20" src="https://i.ibb.co/VBwCJC8/271447897-604755574084977-707707029886894627-n-removebg-preview.png" alt="ff" />
                        <Lottie className="absolute top-0 left-0 z-10" animationData={profileBG}></Lottie>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default HeroSection;