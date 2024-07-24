import React, { useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

const LoadingPage = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline();

    // Words to display
    const words = ['Student', 'Developer', 'Teacher', 'President'];

    // Build the animation sequence
    words.forEach((word, index) => {
      tl.to("#myText", {
        duration: 1,
        text: word,
        delay: index === 0 ? 0.5 : 1, // Adjust initial delay and between words
        ease: "power1.inOut"
      }).to("#myText", {
        duration: 1,
        opacity: 0,
        ease: "power1.inOut"
      }, `+=${index === 0 ? 2 : 1}`) // Adjust delay between words
      .to("#myText", {
        duration: 0,
        opacity: 1 // Reset opacity for next word
      });
    });

    // Ensure final fade out and trigger onComplete
    tl.to("#myText", { duration: 1, opacity: 0, delay: 1 })
      .eventCallback("onComplete", onComplete);

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf("#myText");
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <h1 id="myText" className="text-white text-4xl font-bold">Loading</h1>
    </div>
  );
};

export default LoadingPage;
