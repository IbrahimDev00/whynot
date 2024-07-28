import React, { useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

const LoadingPage = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    console.log('GSAP animation started');
    // Create a GSAP timeline
    const tl = gsap.timeline({
      onComplete: () => {
        console.log('Animation complete');
        onComplete();
      },
    });

    // Words to display
    const words = ['Student', 'Developer', 'Teacher', 'President'];

    // Build the animation sequence
    words.forEach((word, index) => {
      tl.to(`#myText-${index}`, {
        duration: 0.5,
        opacity: 1,
        delay: index === 0 ? 0.3 : 0.3, // Adjust initial delay and between words
        ease: "power1.inOut",
      }).to(`#myText-${index}`, {
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
      }, `+=${index === 0 ? 0.3 : 0.3}`); // Adjust delay between words
    });

    // Ensure final fade out and trigger onComplete
    tl.to("#myText-0", { duration: 0.2, opacity: 0, delay: 0.2 });

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf("#myText-0, #myText-1, #myText-2, #myText-3"); // Target all elements
    };
  }, [onComplete]);

  // Words to display
  const words = ['Student', 'Developer', 'Teacher', 'President'];

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      {words.map((word, index) => (
        <span key={word} id={`myText-${index}`} className="text-white text-4xl font-bold absolute" style={{ opacity: 0 }}>
          {word}
        </span>
      ))}
    </div>
  );
};

export default LoadingPage;
