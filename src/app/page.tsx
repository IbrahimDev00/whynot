import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white min-w-full min-h-screen flex">
      {/* Navigation */}
      <nav className="w-1/4 bg-gray-200 p-5 space-y-8">
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
      
      {/* Vertical Divider */}
      <div className="w-px bg-gray-200 h-full"></div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-5">
        <div className="relative flex flex-col items-start">
          {/* Heading with Gradient Box */}
          <h1 className="text-black font-semibold text-4xl sm:text-5xl md:text-6xl relative">
            <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-gradient-to-tl from-[#12c2e9] via-[#c471ed] to-[#f64f59] animate-flow"></div>
            <span className="text-gray-500 font-light mr-4 pl-16">01</span> {/* Added padding-left to adjust spacing */}
            <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl mr-4">arrow_back_ios</span>
            Hello, I’m&nbsp;<span className="text-indigo-900">Ibrahim!</span>
            <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl ml-4">arrow_forward_ios</span>
          </h1>

          {/* Second Heading */}
          <h1 className="text-black font-semibold text-4xl sm:text-5xl md:text-6xl mt-8">
            <span className="text-gray-500 font-light mr-4">02</span>
            <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl mr-4">arrow_back_ios</span>
            I’m a&nbsp;<span className="text-indigo-900">Student👨‍🎓 & Developer👨‍💻</span>
            <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl ml-4">arrow_forward_ios</span>
          </h1>
        </div>
      </div>
    </main>
  );
}
