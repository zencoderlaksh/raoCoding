import React from "react";
import {
  Mail,
  Phone,
  Headphones,
  MessageCircleMore,
} from "lucide-react";

const supportCards = [
  {
    icon: <Mail size={28} />,
    title: "Email Support",
    main: "hello@yourbrand.com",
    sub: "Response within 24 hours",
  },
  {
    icon: <Phone size={28} />,
    title: "Live Support",
    main: "+91 99999 99999",
    sub: "11AM - 8PM (Mon-Sat)",
  },
  {
    icon: <Headphones size={28} />,
    title: "Offline Support",
    main: "+91 88888 88888",
    sub: "Available at our office",
  },
  {
    icon: <MessageCircleMore size={28} />,
    title: "Discord Community",
    main: "Join Community",
    sub: "Get help from developers",
  },
];

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-[Poppins]">
      {/* background effect and orange glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-orange-600/20 blur-[140px] rounded-full"></div>

      <div className="absolute top-[20%] right-[-100px] w-[300px] h-[300px] bg-orange-500/10 blur-[130px] rounded-full"></div>
{/* 
      grid */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:90px_90px]"></div>
      </div>

      {/* Floating Blur Circles */}
      <div className="absolute top-40 left-20 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-32 right-20 w-40 h-40 bg-orange-700/20 blur-3xl rounded-full animate-pulse"></div>
        
     
      {/* main section */}

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24">

        {/* Floating Icon */}
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-40 rounded-full animate-pulse"></div>

          <div className="relative w-24 h-24 rounded-full border border-orange-500/40 bg-[#161616] flex items-center justify-center backdrop-blur-xl shadow-[0_0_50px_rgba(255,115,0,0.3)]">
            <Headphones className="text-orange-500" size={40} />
          </div>
        </div>

        {/* heading */}
        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
          SUPPORT
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700">
            CENTER
          </span>
        </h1>

        
        <p className="mt-8 text-gray-400 max-w-2xl text-lg leading-relaxed font-light">
          Need assistance? Our team is available through multiple
          channels to help you solve problems faster and better.
        </p>

        {/* card section */}
 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 w-full max-w-7xl mt-24">
          {supportCards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-[#2a2a2a] bg-[#101010c7] backdrop-blur-2xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-orange-500/60"
            >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-orange-500/10 to-transparent transition duration-500"></div>

            
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

            
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-8">
                {card.icon}
              </div>

          
              <h2 className="relative z-10 text-2xl font-semibold mb-3 tracking-tight">
                {card.title}
              </h2>

              <p className="relative z-10 text-orange-400 text-lg font-medium mb-2">
                {card.main}
              </p>

              <p className="relative z-10 text-gray-500 text-sm">
                {card.sub}
              </p>

              {/* //bottom line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

{/* CONTACT FORM SECTION */}

<section className="relative z-10 flex justify-center items-center px-6 py-32">

  
  <div className="absolute w-[500px] h-[500px] bg-orange-500/10 blur-[140px] rounded-full"></div>

  
  <div
    className="
      relative
      w-full
      max-w-5xl
      rounded-[40px]
      border
      border-[#2a2a2a]
      bg-[#0f0f0fbf]
      backdrop-blur-2xl
      overflow-hidden
      shadow-[0_0_50px_rgba(255,115,0,0.08)]
    "
  >

    
    <div className="absolute inset-0 rounded-[40px] p-[1px] bg-gradient-to-br from-orange-500/20 via-transparent to-orange-500/20"></div>

    <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 md:p-16">

      
      <div className="flex flex-col justify-center">

        <p className="text-orange-500 font-semibold tracking-[4px] uppercase mb-5">
          Contact Us
        </p>

        <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
          LET'S BUILD
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            SOMETHING
          </span>
        </h1>

        <p className="mt-8 text-gray-400 text-lg leading-relaxed">
          Learn web development, build real projects, and become
  industry ready with premium coding mentorship.
        </p>

        
        <div className="mt-10 h-[2px] w-40 bg-gradient-to-r from-orange-500 to-transparent"></div>

      </div>

      
      <form className="space-y-6">

        
        <div className="group relative">

          <input
            type="text"
            placeholder="Your Name"
            className="
              w-full
              bg-[#121212]
              border
              border-[#2a2a2a]
              rounded-2xl
              px-6
              py-5
              outline-none
              text-white
              placeholder:text-gray-500
              transition-all
              duration-300
              focus:border-orange-500
              focus:shadow-[0_0_20px_rgba(255,115,0,0.15)]
            "
          />

        </div>

        
        <div>

          <input
            type="email"
            placeholder="Email Address"
            className="
              w-full
              bg-[#121212]
              border
              border-[#2a2a2a]
              rounded-2xl
              px-6
              py-5
              outline-none
              text-white
              placeholder:text-gray-500
              transition-all
              duration-300
              focus:border-orange-500
              focus:shadow-[0_0_20px_rgba(255,115,0,0.15)]
            "
          />

        </div>

        
        <div>

          <input
            type="text"
            placeholder="Subject"
            className="
              w-full
              bg-[#121212]
              border
              border-[#2a2a2a]
              rounded-2xl
              px-6
              py-5
              outline-none
              text-white
              placeholder:text-gray-500
              transition-all
              duration-300
              focus:border-orange-500
              focus:shadow-[0_0_20px_rgba(255,115,0,0.15)]
            "
          />

        </div>

        
        <div>

          <textarea
            rows="5"
            placeholder="Write your message..."
            className="
              w-full
              bg-[#121212]
              border
              border-[#2a2a2a]
              rounded-2xl
              px-6
              py-5
              outline-none
              text-white
              placeholder:text-gray-500
              resize-none
              transition-all
              duration-300
              focus:border-orange-500
              focus:shadow-[0_0_20px_rgba(255,115,0,0.15)]
            "
          ></textarea>

        </div>

        
        <button
          className="
            group
            relative
            overflow-hidden
            w-full
            py-5
            rounded-2xl
            bg-orange-500
            font-semibold
            text-lg
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-[0_0_35px_rgba(255,115,0,0.4)]
          "
        >

          <span className="relative z-10">
            Send Message
          </span>

          
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-orange-400
              to-orange-600
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
            "
          ></div>

        </button>

      </form>
    </div>
  </div>
</section>






{/* rao's text */}
<div className="flex justify-center items-center mt-36 pb-24 overflow-hidden">
  <h1 className="flex text-[80px] md:text-[180px] font-black uppercase tracking-tight cursor-pointer">
    
    {"RAO'S".split("").map((letter, index) => (
      <span
        key={index}
        className="
          text-white
          transition-all
          duration-300
          hover:text-orange-500
          hover:scale-125
          hover:-translate-y-4
          inline-block
        "
      >
        {letter}
      </span>
    ))}

  </h1>

</div>
      </section>
    </div>
  );
}