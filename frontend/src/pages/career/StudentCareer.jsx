import React from "react";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Target,
  ArrowRight,
} from "lucide-react";


const StudentCareer = () => {


  const cards = [
    {
      icon: <BookOpen size={28}/>,
      title:"10th Students",
      points:[
        "Stream Selection (Science, Commerce, Arts)",
        "Career Exploration",
        "Future Education Planning"
      ]
    },

    {
      icon:<GraduationCap size={28}/>,
      title:"12th Students",
      points:[
        "College & Course Selection",
        "Entrance Exam Guidance",
        "Career Roadmap Planning",
        "Higher Education Counseling"
      ]
    },

    {
      icon:<Briefcase size={28}/>,
      title:"B.Tech Students",
      points:[
        "Internship Guidance",
        "Skill Development Roadmap",
        "Placement Preparation",
        "Tech & Non-Tech Career Paths"
      ]
    },

    {
      icon:<Target size={28}/>,
      title:"Diploma Students",
      points:[
        "Higher Education Options",
        "Job-Oriented Career Planning",
        "Industry Skill Recommendations",
        "Lateral Entry Guidance"
      ]
    }
  ];



  return (

<section className="relative py-32 px-6 bg-black overflow-hidden">


<div className="
absolute
top-0
left-1/2
-translate-x-1/2

w-[600px]
h-[600px]

bg-orange-500/10

blur-[150px]

rounded-full
"/>





<div className="max-w-7xl mx-auto relative z-10">





{/* Heading */}

<div className="text-center mb-20">


<p className="
text-orange-500
uppercase
tracking-[6px]
font-semibold
mb-4
">

Career Guidance

</p>



<h1 className="
text-5xl
md:text-7xl
font-black
text-white
">

Find The Right


<span className="
block

text-transparent

bg-clip-text

bg-gradient-to-r

from-orange-400

to-orange-600
">

Career Path

</span>


</h1>



<p className="
max-w-3xl
mx-auto
mt-8
text-gray-400
text-lg
">

Personalized guidance to help students choose the right career direction.

</p>


</div>









{/* ROTATING CARDS */}


<div className="
grid
md:grid-cols-2
xl:grid-cols-4
gap-10
">


{
cards.map((card,index)=>(


<div
key={index}

className="
group
relative

h-[360px]

[perspective:1200px]
"

>


<div

className="
w-full
h-full

relative

transition-transform

duration-700


[transform-style:preserve-3d]


group-hover:[transform:rotateY(180deg)]

"

>




{/* FRONT */}


<div className="
absolute
inset-0

bg-[#111]

border

border-[#2a2a2a]

rounded-3xl

p-8

[backface-visibility:hidden]

group-hover:border-orange-500

">


<div className="
w-14
h-14

rounded-2xl

bg-orange-500/10

border

border-orange-500/30

flex

items-center

justify-center

text-orange-500

mb-6
">

{card.icon}

</div>




<h3 className="
text-2xl

font-bold

text-white

mb-5
">

{card.title}

</h3>




<ul className="space-y-3">

{
card.points.map((p,i)=>(


<li
key={i}

className="
text-gray-400
text-sm
"
>

• {p}

</li>


))
}


</ul>



</div>









{/* BACK */}



<div className="
absolute
inset-0


rounded-3xl


p-8


bg-gradient-to-br

from-orange-500

to-orange-700


flex

items-center

justify-center


text-center


[transform:rotateY(180deg)]

[backface-visibility:hidden]

">


<div>


<h3 className="
text-3xl

font-black

text-white

mb-5
">

Career Growth

</h3>


<p className="text-white/80">

Build skills, projects and experience for your future.

</p>



<button className="
mt-8

bg-white

text-orange-600

px-6

py-3

rounded-full

font-semibold
">

Explore

</button>


</div>


</div>



</div>



</div>



))

}



</div>









{/* ROADMAP SECTION */}


<div className="mt-32">


<div className="text-center mb-16">


<p className="
text-orange-500

uppercase

tracking-[5px]

font-semibold

">

Roadmaps

</p>



<h2 className="
text-4xl

md:text-6xl

font-black

text-white
">

Career Journey

<span className="
block

text-orange-500
">

Step By Step Roadmap

</span>


</h2>


</div>







<div className="
grid

lg:grid-cols-2

gap-10
">



{

cards.map((card,index)=>(


<div

key={index}

className="
bg-[#111]

border

border-[#2a2a2a]

rounded-[35px]

p-8

hover:border-orange-500

transition

duration-500
"

>



<div className="
flex

items-center

gap-4

mb-8
">


<div className="
w-14
h-14

rounded-2xl

bg-orange-500/10

border

border-orange-500/30

flex

items-center

justify-center

text-orange-500
">

{card.icon}

</div>



<h3 className="
text-3xl

font-bold

text-white
">

{card.title}

</h3>


</div>






{

[
"Foundation & Exploration",
"Skill Development",
"Projects / Internship",
"Career Growth"
].map((step,i)=>(


<div

key={i}

className="
flex

gap-4

mb-6
"

>


<div className="
w-8

h-8

rounded-full

bg-orange-500

text-white

flex

items-center

justify-center

font-bold
">

{i+1}

</div>


<p className="
text-gray-300
">

{step}

</p>


</div>


))


}



</div>


))


}


</div>


</div>








{/* CTA */}


<div className="mt-24">


<div className="
bg-[#111]

border

border-orange-500/20

rounded-[40px]

p-10

md:p-16

text-center
">


<h2 className="
text-4xl

md:text-6xl

font-black

text-white
">

FREE 30-MINUTE


<span className="block text-orange-500">

CAREER CONSULTATION

</span>


</h2>




<p className="
text-gray-400

mt-6

text-lg
">

Get one-on-one guidance from experienced mentors.

</p>




<button className="
mt-10

bg-orange-500

hover:bg-orange-600

text-white

px-8

py-4

rounded-full

font-semibold

inline-flex

items-center

gap-3

transition
">

Book Free Consultation

<ArrowRight size={18}/>

</button>



</div>


</div>





</div>


</section>

  );
};



export default StudentCareer;