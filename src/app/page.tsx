"use client";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const gradientBoxRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const pbox1 = useRef(null);
  const pbox2 = useRef(null);
  const pbox3 = useRef(null);
  const pbox4 = useRef(null);
  const pheading = useRef(null);
  const about = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      gradientBoxRef.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 2, duration: 1.5, ease: 'elastic.out(1, 0.3)' }
    );

    gsap.fromTo(
      [textRef1.current, textRef2.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.5 }
    );

    gsap.fromTo(
      pbox1.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "back.inOut(1.7)",
        scrollTrigger: {
          trigger: pbox1.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      pbox2.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "back.inOut(1.7)",
        scrollTrigger: {
          trigger: pbox1.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      pbox3.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "back.inOut(1.7)",
        scrollTrigger: {
          trigger: pbox1.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      pbox4.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "back.inOut(1.7)",
        scrollTrigger: {
          trigger: pbox1.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      pheading.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 3, 
        ease: "slow(0.5, 0.8, true)",
        scrollTrigger: {
          trigger: pheading.current,
          start: "top 80%",  // Adjust this value as needed
          toggleActions: "play play pause resume reset"
        }
      }
    );

    gsap.fromTo(
      pheading.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 3, 
        ease: "slow(0.5, 0.8, true)",
        scrollTrigger: {
          trigger: pheading.current,
          start: "top 80%",  // Adjust this value as needed
          toggleActions: "play play pause resume reset"
        }
      }
    );
    
  }, []);

  return (
    <main className="bg-white min-w-full min-h-screen flex flex-col">
      {/* Top Section */}
      <div className="flex justify-between items-center p-8 ">
        {/* Navbar */}
        <nav className="flex justify-between items-start space-x-8 justify-items-center">
          <Link href="#home">
            <h1 className="text-black font-semibold sm:text-xl md:text-2xl lg:text-2xl cursor-pointer flex items-center space-x- hover:text-blue-500 ">
              <span className="material-symbols-outlined">home</span>
              <span>Home</span>
            </h1>
          </Link>
          <Link href="#projects">
            <h1 className="text-black font-semibold sm:text-xl md:text-2xl lg:text-2xl cursor-pointer flex items-center space-x- hover:text-blue-500">
              <span className="material-symbols-outlined">view_timeline</span>
              <span>Projects</span>
            </h1>
          </Link>
          <Link href="#about">
            <h1 className="text-black font-semibold sm:text-xl md:text-2xl lg:text-2xl cursor-pointer flex items-center space-x- hover:text-blue-500">
              <span className="material-symbols-outlined">sentiment_satisfied</span>
              <span>About me</span>
            </h1>
          </Link>
        </nav>

        {/* Download Button */}
        <button type="button" onClick={() => {
          const link = document.createElement("a");
          link.href = "/Ibrahim_Resume.pdf";
          link.target = "_blank";
          link.download = "Ibrahim_Resume.pdf";
          link.click();
        }} className="bg-indigo-900 text-white p-4 rounded-md hover:bg-gradient-to-r hover:from-[#485563] hover:to-[#29323c] hover:drop-shadow-xl">
          Download Resume
        </button>

      </div>
      {/* Main Content */}
      <div className="flex justify-center items-center relative z-10 mt-24">
        <div 
          id='home'
          ref={gradientBoxRef} 
          className="w-40 h-40 rounded-full bg-gradient-to-tl from-[#12c2e9] via-[#c471ed] to-[#f64f59] opacity-35 blur-md brightness-65 absolute top-0"
        ></div>
        <div className="text-left p-6">
          <h1 ref={textRef1} className="text-black sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-gray-500 font-light">01</span>
            <span className="material-symbols-outlined mr-4 text-black">arrow_back_ios</span>
            Hello, I’m&nbsp;<span className="text-indigo-900">Ibrahim!</span>
            <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl ml-4">arrow_forward_ios</span>
          </h1>
          <h1 ref={textRef2} className="text-black sm:text-4xl md:text-5xl lg:text-6xl mt-4">
            <span className="text-gray-500 font-light">02</span>
            <span className="material-symbols-outlined mr-4">arrow_back_ios</span>
            I’m a&nbsp;<span className="text-indigo-900">Student👨‍🎓 & Developer👨‍💻</span>
            <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl ml-4">arrow_forward_ios</span>
          </h1>
        </div>
      </div>
      {/* Learn More Button */}
      <div className="flex justify-center p-8 mt-20">
        <button className="bg-indigo-900 text-white p-4 rounded-md flex items-center space-x-2 hover:drop-shadow-2xl">
          <Link href="#projects">Learn More</Link>
          <span className="material-symbols-outlined animate-bounce">keyboard_double_arrow_down</span>
        </button>
      </div>

      <hr></hr>
      {/* Projects */}
      <div id='projects' className="p-10 mt-12 ">
        {/* Title Section */}
        <div>
          <h1 ref={pheading} className="text-5xl font-semibold text-left ml-2 p-5 bg-clip-text text-transparent bg-gradient-to-b from-[#FF0099] to-[#493240]">Projects</h1>
        </div>
        
        {/* Grid Section */}
        <div className="grid grid-cols-2 gap-4 mt-5">
        <div ref={pbox1} className='h-[460px] rounded-xl bg-slate-200 border-solid border-slate-300 border-2 overflow-hidden flex flex-col items-center'>
          <h2 className='text-gray-700 font-bold text-xl text-center mb-2'>GITAM AeroAstro Club</h2>
          <Image 
            src = "/gaac_project.png"
            width={620}
            height={520}
            alt = "gaac_project_img"
            className="object-contain"
          />
          <p className='text-green-950 p-3 font-medium text-base text-left'>This website is in its final stages of completion. Built for a tech club, it promises to be modern, easy to use, and feature rich.<br></br>
          Stay tuned to see the final results! 😉
          </p>
          <div className='flex items-center justify-center align-bottom mt-3'>
            <button className='bg-blue-500 p-3 rounded-lg text-xl text-white w-36 hover:bg-gradient-to-r hover:from-[#1F1C2C] hover:to-[#928DAB]'><Link href={"https://github.com/g-aeroastro-c/gaac-page-f"}>Github</Link></button>
          </div>
        </div>
        <div ref={pbox2} className='h-[460px] rounded-xl bg-slate-200 border-solid border-slate-300 border-2'>
          <h2 className='text-gray-700 font-bold text-xl text-center mb-1'>Noble Nest- Real Estate solutions</h2>
          <div className='flex justify-center'>
            <Image 
              src='/noble_nest.png'
              width={620}
              height={220}
              alt='noble_nest_project'
              className="object-contain"
            />
          </div>
          <p className='text-green-950 p-1 font-medium text-base text-left'>
            A creative idea presented in IIT-Kanpur's hackathon, an idea to render property images in 3-d,
            solving the problem of physical presence to view and buy property. Shh...but the properties in this site are on Mars.
          </p>
          <div className='flex items-center justify-center align-bottom'>
            <button className='bg-blue-500 p-3 rounded-lg text-xl text-white w-36 hover:bg-gradient-to-r hover:from-[#1F1C2C] hover:to-[#928DAB]'>
              <Link href={"https://github.com/Nomadic-Nex/noble-nest"}>Github</Link>
            </button>
          </div>
        </div>
          <div ref={pbox3} className='h-[460px] rounded-xl bg-slate-200 border-solid border-slate-300 border-2'>
            <h2 className='text-gray-600 font-bold text-xl text-center mb-2'>URL shortner</h2>
            <div className='flex justify-center'>
              <Image 
                src= '/url_short.png'
                width = {620}
                height={520}
                alt = "url_short_project"
                className="object-contain"
              />
            </div>
            
            <p className='text-green-950 p-3 font-medium text-base text-left'>A powerful URL shortner built in GoLang, shorten your long URL's in seconds, get customized URL's for free! Btw..its still a work in progress, so stay tuned😉</p>
            <div className='flex items-center justify-center align-bottom mt-1'>
              <button className='bg-blue-500 p-3 rounded-lg text-xl text-white w-36 hover:bg-gradient-to-r hover:from-[#1F1C2C] hover:to-[#928DAB]'><Link href={"https://github.com/IbrahimDev00/url_shortner"}>Github</Link></button>
            </div>
          </div>
          <div ref={pbox4} className='h-[460px] rounded-xl bg-slate-200 border-solid border-slate-300 border-2'>
            <h2 className='text-gray-600 font-bold text-xl text-center mb-2'>Password manager</h2>
            <div className='flex justify-center'>
              <iframe width="560" height="285" src="https://www.youtube.com/embed/X5cqzM0_hfc?si=XdXXcMyipWCk2suR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <p className='text-green-950 p-5 font-medium text-base text-left'>My first project, built in python, has everything you need to keep your passwords safe😌</p>
            <div className='flex items-center justify-center align-bottom'>
              <button className='bg-blue-500 p-3 rounded-lg text-xl text-white mt-2 w-36 hover:bg-gradient-to-r hover:from-[#1F1C2C] hover:to-[#928DAB]'>
                <Link href={"https://youtu.be/X5cqzM0_hfc?si=HJVUja5P6QEa9F5o"}>Youtube</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>

      {/*about me*/}
      <div id='about'>
        <h1 ref={about} className='ml-4 p-5 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-bl from-[#4568DC]  to-[#B06AB3]'>About me:</h1>
        <div className='ml-4 p-5 flex flex-col'>
          <div className='flex flex-row-3 gap-8'>
            <h3 className='text-gray-800 text-3xl font-bold mb-4'>Ibrahim Chikani</h3>
            <a href="https://www.linkedin.com/in/ibrahimchikani" target="_blank" rel="noopener noreferrer">
              <img src="/icons8-linkedin.svg" alt="Icon" width="40" height="40" />
            </a>
            <a href="https://github.com/IbrahimDev00" target="_blank" rel="noopener noreferrer">
              <img src="/icons8-github.svg" alt="Icon" width="40" height="40" />
            </a>
          </div>
          
          <h5 className='text-black  text-left mb-4 font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#9D50BB]  to-[#6E48AA]'>I learn, absorb and implement.</h5>
          <p className='text-black  text-left mb-4 font-normal text-lg'>I'm a student at GITAM University doing my Bachelor's in Computer Science. With a GPA of 9.03 i strive to strike a balance between course work and practical knowledge....well...so far so good😉<br></br>
          I'm driven by a passion for knowledge and acknowledge that there's always something to learn from someone, and i welcome each drop of knowledge into my mind, like a man in a desert ☀️.<br></br>
          <br></br>
          With my current focus being on Machine learning and its applications, i yearn to make something that benifits the society....ooh fun fact: I teach school children in my free time 👨‍🏫<br></br>
          Previously i've dug my hands into the world of Web Development, and i've familiarized myself with MERN stack, and also NEXT.JS, Tailwind CSS and Redis.<br></br>
          A language a day keeps the boredom away?.....Well im also learning GoLang, and building a very exciting project with it! 😄 
          </p>
        </div>
        {/* Techstacks */}
        <div>
          <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-[#2196f3] to-[#f44336] font-bold text-3xl mb-4 p-5 ml-3'>Tech Stack</h1>
          <div className="flex justify-between ml-5 mb-8 p-5">
            <div className="grid grid-cols-2 gap-4 w-[300px]">
              <h3 className='font-semibold text-xl p-4 text-blue-800 col-span-2'>Languages</h3>
              <Image 
                src='/C.svg'
                width={40}
                height={40}
                alt='c_lang'
              />
              <Image 
                src='/Python.svg'
                width={40}
                height={40}
                alt='py_lang'
              />
              <Image 
                src='/Go.svg'
                width={40}
                height={40}
                alt='go_lang'
              />
              <Image 
                src='/Java.svg'
                width={40}
                height={40}
                alt='java_lang'
              />
              <Image 
                src='/Js.svg'
                width={40}
                height={40}
                alt='js_lang'
              />
              <Image 
                src='/Ts.svg'
                width={40}
                height={40}
                alt='ts_lang'
              />
              <Image 
                src='/Css.svg'
                width={40}
                height={40}
                alt='css_lang'
              />
              <Image 
                src='/Html.svg'
                width={40}
                height={40}
                alt='html_lang'
              />
            </div>

            <div className="grid grid-cols-2 gap-4 w-[300px]">
              <h3 className='font-semibold text-xl p-4 text-blue-800 col-span-2'>Frameworks</h3>
              <Image 
                src='/React.svg'
                width={50}
                height={50}
                alt='react'
              />
              <Image 
                src='Next.svg'
                width={50}
                height={50}
                alt='next'
              />
              <Image 
                src='Tailwind.svg'
                width={50}
                height={50}
                alt='tailwindcss'
              />
              <Image 
                src='Node.svg'
                width={50}
                height={50}
                alt='node'
              />
            </div>

            <div className="grid grid-cols-2 gap-4 w-[300px]">
              <h3 className='font-semibold text-xl p-4 text-blue-800 col-span-2'>Database</h3>
              <Image 
                src='Mongo.svg'
                width={40}
                height={40}
                alt='mongodb'
              />
              <Image 
                src='Redis.svg'
                width={40}
                height={40}
                alt='redis'
              />
              <Image 
                src='Mysql.svg'
                width={40}
                height={40}
                alt='mysql'
              />
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
