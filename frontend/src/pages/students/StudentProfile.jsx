import { useParams, Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Globe, Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function StudentProfile() {
  const { slug } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`/api/students/${slug}`);
        if (!response.ok) {
          throw new Error('Student not found');
        }
        const data = await response.json();
        setStudent(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStudent();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <p className="text-xl">Loading student profile...</p>
      </div>
    );
  }

  if (error || !student) {
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
              <p className="text-cyan-400 text-xl mt-3">{student.role || student.course}</p>
              <p className="text-gray-400 mt-2">Batch {student.batch}</p>

              <div className="flex gap-4 mt-8">
                {student.socials?.github && student.socials.github !== "#" && (
                  <a href={student.socials.github} target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-xl cursor-pointer hover:bg-white/20 transition-colors">
                    <FaGithub size={24} />
                  </a>
                )}
                {student.socials?.linkedin && student.socials.linkedin !== "#" && (
                  <a href={student.socials.linkedin} target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-xl cursor-pointer hover:bg-white/20 transition-colors">
                    <FaLinkedin size={24} />
                  </a>
                )}
                {student.socials?.website && student.socials.website !== "#" && (
                  <a href={student.socials.website} target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-xl cursor-pointer hover:bg-white/20 transition-colors">
                    <Globe />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-400 leading-relaxed whitespace-pre-wrap">
            {student.bio}
          </p>
        </div>
      </section>

      {/* Skills */}
      {student.skills && student.skills.length > 0 && (
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
      )}

      {/* Projects */}
      {student.projects && student.projects.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {student.projects.map((project, index) => (
              <div
                key={project._id || index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-4">{project.desc}</p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tags && project.tags.map(tag => (
                    <span key={tag} className="bg-cyan-500/20 px-3 py-1 rounded-full cursor-pointer hover:bg-cyan-500/30 transition-colors text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-xl text-black font-semibold cursor-pointer transition-colors block text-center"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="border border-white/20 hover:bg-white/10 px-5 py-2 rounded-xl cursor-pointer transition-colors block text-center"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Review */}
      {student.review && (
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl rounded-3xl p-10 text-center cursor-pointer hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-shadow">
            <div className="flex justify-center gap-1 mb-5">
              <Star fill="gold" className="text-yellow-400" />
              <Star fill="gold" className="text-yellow-400" />
              <Star fill="gold" className="text-yellow-400" />
              <Star fill="gold" className="text-yellow-400" />
              <Star fill="gold" className="text-yellow-400" />
            </div>
            <p className="text-xl text-gray-300 italic leading-relaxed whitespace-pre-wrap">
              "{student.review}"
            </p>
            <h3 className="mt-6 text-xl font-bold">{student.name}</h3>
          </div>
        </section>
      )}

    </div>
  );
}