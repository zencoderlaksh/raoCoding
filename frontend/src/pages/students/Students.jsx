import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('/api/students');
        if (!response.ok) {
          throw new Error('Failed to fetch students');
        }
        const data = await response.json();
        setStudents(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center">
        <p>Loading students...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center">
        <p className="text-red-400">Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Student Project Gallery
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover projects, achievements, and success stories
            from our talented students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {students.map((student) => (
            <Link
              key={student._id}
              to={`/students/${student.slug}`}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">

                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-64 object-contain"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-semibold">
                    {student.name}
                  </h3>

                  <p className="text-cyan-400 mt-2">
                    {student.course}
                  </p>

                  <p className="text-gray-400 mt-4 line-clamp-2">
                    {student.bio}
                  </p>

                  <div className="mt-4 text-sm text-gray-500">
                    {student.projectsCount || student.projects?.length || 0} Projects Built
                  </div>

                  <button className="mt-6 text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    View Profile →
                  </button>

                </div>
              </div>
            </Link>
          ))}
          {students.length === 0 && (
            <p className="text-gray-500 col-span-3 text-center py-10">No students added yet.</p>
          )}

        </div>
      </div>
    </section>
  );
}