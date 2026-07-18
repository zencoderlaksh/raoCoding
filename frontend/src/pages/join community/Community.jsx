import React from "react";
import {
  Users,
  MessageCircle,
  Rocket,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    icon: <Users size={30} />,
    number: "2500+",
    title: "Active Members",
  },
  {
    icon: <MessageCircle size={30} />,
    number: "12K+",
    title: "Messages Shared",
  },
  {
    icon: <Rocket size={30} />,
    number: "150+",
    title: "Projects Built",
  },
  {
    icon: <GraduationCap size={30} />,
    number: "50+",
    title: "Industry Mentors",
  },
];

const Community = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-orange-500/10 blur-[170px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[200px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,120,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,120,0,0.08)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HERO */}

        <div className="py-32 text-center">

          <p className="uppercase tracking-[8px] text-orange-500 font-semibold mb-5">
            Rao Coding Community
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">
            JOIN THE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              COMMUNITY
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-8 leading-relaxed">
            Learn with passionate developers, collaborate on real-world
            projects, prepare for placements, participate in coding challenges,
            and grow together inside India's fastest-growing coding community.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <button className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition-all font-semibold flex items-center gap-3 hover:scale-105">
              Join Discord
              <ArrowRight size={18} />
            </button>

            <button className="px-8 py-4 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all font-semibold">
              Explore Courses
            </button>

          </div>

        </div>

        {/* STATS */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 pb-28">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
              group
              bg-[#111]
              border
              border-[#2b2b2b]
              rounded-3xl
              p-8
              text-center
              transition-all
              duration-500
              hover:border-orange-500
              hover:-translate-y-3
              hover:shadow-[0_0_40px_rgba(249,115,22,.2)]
              relative
              overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mx-auto mb-6 group-hover:rotate-12 transition">
                  {item.icon}
                </div>

                <h2 className="text-5xl font-black text-white">
                  {item.number}
                </h2>

                <p className="mt-3 text-gray-400">
                  {item.title}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

        {/* WHY JOIN SECTION */}

<div className="py-28">

  <div className="text-center mb-20">

    <p className="uppercase tracking-[6px] text-orange-500 font-semibold mb-3">
      Why Join Us
    </p>

    <h2 className="text-5xl md:text-7xl font-black">
      More Than Just
      <span className="block text-orange-500">
        A Coding Community
      </span>
    </h2>

  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

    {[
      {
        title: "Live Coding Sessions",
        icon: "💻",
        desc: "Weekly live sessions covering Web Development, React, DSA and AI."
      },
      {
        title: "Placement Preparation",
        icon: "🎯",
        desc: "Interview questions, mock interviews and resume reviews."
      },
      {
        title: "Project Collaboration",
        icon: "🚀",
        desc: "Build amazing real-world projects with community members."
      },
      {
        title: "Daily DSA Practice",
        icon: "📚",
        desc: "Daily coding questions with detailed discussions."
      },
      {
        title: "AI & ML Discussions",
        icon: "🤖",
        desc: "Latest AI trends, LLMs, Machine Learning and GenAI."
      },
      {
        title: "Hackathons",
        icon: "🏆",
        desc: "Participate in coding competitions and win exciting prizes."
      }

    ].map((feature,index)=>(

      <div
      key={index}
      className="
      group
      bg-[#111]
      border
      border-[#2a2a2a]
      rounded-3xl
      p-8
      hover:border-orange-500
      transition-all
      duration-500
      hover:-translate-y-3
      hover:shadow-[0_0_40px_rgba(249,115,22,.2)]
      ">

      <div className="text-5xl mb-6">
        {feature.icon}
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {feature.title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {feature.desc}
      </p>

      </div>

    ))}

  </div>

</div>

{/* STUDENT SHOWCASE */}

<div className="py-28">

<div className="text-center mb-20">

<p className="uppercase tracking-[6px] text-orange-500 font-semibold">
Student Success
</p>

<h2 className="text-5xl md:text-7xl font-black mt-4">

Community
<span className="block text-orange-500">
Highlights
</span>

</h2>

</div>

<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

{[
{
name:"Rahul",
project:"Netflix Clone",
emoji:"🔥"
},
{
name:"Aditi",
project:"500+ DSA Problems",
emoji:"🏆"
},
{
name:"Aman",
project:"Placed at TCS",
emoji:"💼"
},
{
name:"Sneha",
project:"AI Chatbot",
emoji:"🤖"
}

].map((student,index)=>(

<div
key={index}
className="
group
bg-[#111]
rounded-3xl
border
border-[#2a2a2a]
overflow-hidden
hover:border-orange-500
transition-all
duration-500
hover:-translate-y-3
">

<div className="h-56 bg-gradient-to-br from-orange-500/20 to-black flex items-center justify-center text-8xl">

{student.emoji}

</div>

<div className="p-7">

<h3 className="text-2xl font-bold">

{student.name}

</h3>

<p className="text-orange-500 mt-3">

{student.project}

</p>

<button className="mt-6 text-white hover:text-orange-500 transition">

View Profile →

</button>

</div>

</div>

))}

</div>

</div>

{/* UPCOMING EVENTS */}

<div className="py-28">

<div className="text-center mb-20">

<p className="uppercase tracking-[6px] text-orange-500">

Upcoming Events

</p>

<h2 className="text-5xl md:text-7xl font-black mt-4">

Never Miss
<span className="block text-orange-500">
An Opportunity
</span>

</h2>

</div>

<div className="max-w-4xl mx-auto space-y-10">

{[
{
date:"30 JUL",
event:"Resume Review Session"
},
{
date:"02 AUG",
event:"Weekly DSA Contest"
},
{
date:"08 AUG",
event:"Hackathon Kickoff"
},
{
date:"12 AUG",
event:"Open Source Sprint"
}

].map((item,index)=>(

<div
key={index}
className="
flex
items-center
justify-between
bg-[#111]
rounded-2xl
border
border-[#2a2a2a]
p-8
hover:border-orange-500
transition-all
duration-500
">

<div>

<h3 className="text-3xl font-black text-orange-500">

{item.date}

</h3>

</div>

<div className="text-right">

<p className="text-xl font-semibold">

{item.event}

</p>

</div>

</div>

))}

</div>

</div>
{/* ================= TESTIMONIALS ================= */}

<div className="py-28">

  <div className="text-center mb-20">

    <p className="uppercase tracking-[6px] text-orange-500 font-semibold">
      Testimonials
    </p>

    <h2 className="text-5xl md:text-7xl font-black mt-4">
      What Our
      <span className="block text-orange-500">
        Students Say
      </span>
    </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {[
      {
        name: "Rahul Sharma",
        review:
          "The community motivated me to stay consistent with DSA and helped me land my first internship.",
      },
      {
        name: "Priya Gupta",
        review:
          "Weekly coding sessions and mentorship completely changed my learning journey.",
      },
      {
        name: "Aman Verma",
        review:
          "Best coding community I've ever joined. Amazing mentors and friendly students.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-[#111] border border-[#2a2a2a] rounded-3xl p-8 hover:border-orange-500 hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,.18)]"
      >
        <div className="text-orange-500 text-3xl mb-5">★★★★★</div>

        <p className="text-gray-400 leading-8">
          "{item.review}"
        </p>

        <h3 className="mt-8 text-xl font-bold text-white">
          {item.name}
        </h3>
      </div>
    ))}

  </div>

</div>

{/* ================= FAQ ================= */}

<div className="py-28">

  <div className="text-center mb-20">

    <p className="uppercase tracking-[6px] text-orange-500">
      FAQ
    </p>

    <h2 className="text-5xl md:text-7xl font-black mt-4">
      Frequently Asked
      <span className="block text-orange-500">
        Questions
      </span>
    </h2>

  </div>

  <div className="max-w-4xl mx-auto space-y-6">

    {[
      {
        q: "Is the community free to join?",
        a: "Yes. Anyone interested in learning can become a member.",
      },
      {
        q: "Can beginners join?",
        a: "Absolutely. We welcome complete beginners as well as experienced developers.",
      },
      {
        q: "Do mentors guide students personally?",
        a: "Yes. We regularly organize doubt sessions, mentoring and career guidance.",
      },
      {
        q: "Will I get project opportunities?",
        a: "Yes. Members collaborate on real-world projects and hackathons.",
      },
    ].map((item, index) => (
      <details
        key={index}
        className="group bg-[#111] border border-[#2a2a2a] rounded-2xl p-6 hover:border-orange-500 transition"
      >
        <summary className="cursor-pointer text-xl font-semibold list-none flex justify-between items-center">
          {item.q}
          <span className="text-orange-500 group-open:rotate-45 transition text-3xl">
            +
          </span>
        </summary>

        <p className="mt-5 text-gray-400 leading-7">
          {item.a}
        </p>
      </details>
    ))}

  </div>

</div>

{/* ================= CTA ================= */}

<div className="pb-32">

  <div className="relative overflow-hidden rounded-[40px] border border-orange-500/20 bg-[#111] p-14 md:p-20 text-center">

    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[180px] rounded-full"></div>

    <div className="relative z-10">

      <p className="uppercase tracking-[6px] text-orange-500 font-semibold">
        Join Us Today
      </p>

      <h2 className="text-5xl md:text-7xl font-black mt-6 leading-tight">

        Ready To Become
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
          Part Of The Community?
        </span>

      </h2>

      <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg leading-8">
        Learn together, build amazing projects, crack coding interviews,
        participate in hackathons, and connect with thousands of passionate
        developers.
      </p>

      <div className="mt-12 flex justify-center flex-wrap gap-6">

        <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full font-semibold hover:scale-105">
          Join Discord 🚀
        </button>

        <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition px-8 py-4 rounded-full font-semibold">
          Explore Courses
        </button>

      </div>

    </div>

  </div>

</div>

    </section>
  );
};


export default Community;