"use client";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        duration: 1.5,
        ease: "back.inOut(1.7)",
        scrollTrigger: {
          trigger: pbox1.current,
          start: "top 80%", // start when the top of the pbox1 element is 80% from the top of the viewport
          toggleActions: "play none none none", // play the animation once
        },
      }
    );

    gsap.fromTo(
      pbox2.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "back.inOut(1.7)",
        scrollTrigger: {
          trigger: pbox1.current,
          start: "top 80%", // start when the top of the pbox1 element is 80% from the top of the viewport
          toggleActions: "play none none none", // play the animation once
        },
      }
    );

    gsap.fromTo(
      pbox3.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "back.inOut(1.7)",
        scrollTrigger: {
          trigger: pbox1.current,
          start: "top 80%", // start when the top of the pbox1 element is 80% from the top of the viewport
          toggleActions: "play none none none", // play the animation once
        },
      }
    );

    gsap.fromTo(
      pbox4.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "back.inOut(1.7)",
        scrollTrigger: {
          trigger: pbox1.current,
          start: "top 80%", // start when the top of the pbox1 element is 80% from the top of the viewport
          toggleActions: "play none none none", // play the animation once
        },
      }
    );

    gsap.fromTo(
      pheading.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 5, 
        ease: "slow(0.5, 0.8, true)",
        scrollTrigger: {
          trigger: pheading.current,
          start: "top 80%",  // Adjust this value as needed
          toggleActions: "play none none none"  // Animation will play once when scrolled into view
        }
      }
    );
    
  }, []);

  return (
    <main className="bg-white min-w-full min-h-screen flex flex-col">
      {/* Top Section */}
      <div className="flex justify-between items-center p-8 ">
        {/* Navbar */}
        <nav className="flex justify-between items-start space-x-4 justify-items-center">
          <h1 className="text-black font-semibold sm:text-xl md:text-2xl lg:text-2xl">
            <span className="material-symbols-outlined">home</span>
            Home
          </h1>
          <h1 className="text-black font-semibold sm:text-xl md:text-2xl lg:text-2xl">
            <span className="material-symbols-outlined">view_timeline</span>
            Projects
          </h1>
          <h1 className="text-black font-semibold sm:text-xl md:text-2xl lg:text-2xl">
            <span className="material-symbols-outlined">sentiment_satisfied</span>
            About me
          </h1>
        </nav>
        {/* Download Button */}
        <button className="bg-indigo-900 text-white p-4 rounded-md">
          Download Resume
        </button>
      </div>
      {/* Main Content */}
      <div className="flex justify-center items-center relative z-10 mt-24">
        <div 
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
        <button className="bg-indigo-900 text-white p-4 rounded-md">
          Learn More
          <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
        </button>
      </div>
  
      {/* Projects */}
      <div className="p-10 mt-12">
        {/* Title Section */}
        <div className="mb-4">
          <h1 ref={pheading} className="text-5xl text-left ml-2 bg-clip-text text-transparent bg-gradient-to-b from-[#FF0099] to-[#493240]">Projects</h1>
        </div>
        
        {/* Grid Section */}
        <div className="grid grid-cols-2 gap-4">
          <div ref={pbox1} className='w-full h-32 rounded-xl bg-slate-400'></div>
          <div ref={pbox2} className='w-full h-32 rounded-xl bg-slate-400'></div>
          <div ref={pbox3} className='w-full h-32 rounded-xl bg-slate-400'></div>
          <div ref={pbox4} className='w-full h-32 rounded-xl bg-slate-400'></div>
        </div>
      </div>

    </main>
  );
}
