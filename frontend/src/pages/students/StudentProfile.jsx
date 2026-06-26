import { useParams, Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Globe, Star } from "lucide-react";
import { EXPORT_IMAGES } from "../../assets/img.js"

// Mock Database: In a real app, you would fetch this from an API or a shared data file.
// Notice how the 'slug' matches the URL paths generated in your Students gallery.
const studentsData = [
  {
    slug: "shubham-jakhar",
    name: "Shubham Jakhar",
    image: EXPORT_IMAGES.img1,
    role: "Mern Stack Developer",
    batch: "2025",
    bio: "Passionate full-stack developer with expertise in React, Flask, Node.js and AI-powered applications. I love building products that solve real-world problems.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Express", "Node",  "MongoDB"],
    socials: { github: "https://github.com/shubhamjakhar15 ", linkedin: "https://www.linkedin.com/in/shubham-jakhar15", website: "#" },
    projects: [
      {
        id: 1,
        title: "Minime Clothing website",
        desc: "",
        tags: [],
        demoLink: "#",
        githubLink: "#"
      },
      {
        id: 2,
        title: "Rao coding school",
        desc: ".",
        tags: [],
        demoLink: "#",
        githubLink: "#"
      }
    ],
    review: "This program transformed my career. The hands-on projects helped me gain confidence and build a portfolio that attracted recruiters."
  },
  {
    slug: "kritika-bhagwani",
    name: "Kritika Bhagwani",
    image: EXPORT_IMAGES.img,
    role: "Full Stack Development",
    batch: "2025",
    bio: "Aspiring to learn and develop new things",
    skills: ["C", "C++", "Java", "Javascript", "HTML","CSS","React"],
    socials: { github: "kritikabhagwani", linkedin: "-www.linkedin.com/in/kritika-bhagwani-4960b4396 ", website: "#" },
    projects: [
      {
        id: 1,
        title: "Resume Analyser ",
         desc: "Resume analysis platform using AI and ATS optimization.",
        tags: ["React", "AI"],
        demoLink: "#",
        githubLink: "#"
      },
      {
        id: 2,
        title: "Dice Analyser",
        desc: "",
        tags: [],
        demoLink: "#",
        githubLink: "#"
      },
      {
        id: 3,
        title: "Website for remote Healthcare and well being",
        desc: "",
        tags: [],
        demoLink: "#",
        githubLink: "#"
      },
    {
      id: 4,
        title: "Website for rental property management system",
        desc: "",
        tags: [],
        demoLink: "#",
        githubLink: "#"
    }
    ],
    review: "The curriculum was extremely practical. I loved the deep dives into real-world datasets!"
  }
];

export default function StudentProfile() {
  // Grab the student slug from the URL (e.g., /students/rahul-sharma)
  const { slug } = useParams();
  
  // Find the matching student in our data
  const student = studentsData.find(s => s.slug === slug);

  // If the student doesn't exist, show an error state with a link back
  if (!student) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Student Not Found</h1>
        <Link to="/students" className="text-cyan-400 hover:underline cursor-pointer">
          ← Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navigation Helper */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <Link to="/students" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer flex inline-block">
          ← Back to Gallery
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
          <div className="flex flex-col md:flex-row gap-10">
            <img
              src={student.image}
              alt={student.name}
              className="w-60 h-60 rounded-3xl object-cover"
            />

            <div>
              <h1 className="text-5xl font-bold">{student.name}</h1>
              <p className="text-cyan-400 text-xl mt-3">{student.role}</p>
              <p className="text-gray-400 mt-2">Batch {student.batch}</p>

              <div className="flex gap-4 mt-8">
                <a href={student.socials.github} target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-xl cursor-pointer hover:bg-white/20 transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href={student.socials.linkedin} target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-xl cursor-pointer hover:bg-white/20 transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href={student.socials.website} target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-xl cursor-pointer hover:bg-white/20 transition-colors">
                  <Globe />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            {student.bio}
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {student.skills.map((skill) => (
            <span
              key={skill}
              className="bg-white/5 border border-white/10 px-5 py-3 rounded-full cursor-pointer hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {student.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-4">{project.desc}</p>

              <div className="flex flex-wrap gap-3 mt-6">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-cyan-500/20 px-3 py-1 rounded-full cursor-pointer hover:bg-cyan-500/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                {/* Converted buttons to anchor tags with cursor-pointer */}
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-xl text-black font-semibold cursor-pointer transition-colors block text-center"
                >
                  Live Demo
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="border border-white/20 hover:bg-white/10 px-5 py-2 rounded-xl cursor-pointer transition-colors block text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl rounded-3xl p-10 text-center cursor-pointer hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-shadow">
          <div className="flex justify-center gap-1 mb-5">
            <Star fill="gold" className="text-yellow-400" />
            <Star fill="gold" className="text-yellow-400" />
            <Star fill="gold" className="text-yellow-400" />
            <Star fill="gold" className="text-yellow-400" />
            <Star fill="gold" className="text-yellow-400" />
          </div>
          <p className="text-xl text-gray-300 italic leading-relaxed">
            "{student.review}"
          </p>
          <h3 className="mt-6 text-xl font-bold">{student.name}</h3>
        </div>
      </section>

    </div>
  );
}