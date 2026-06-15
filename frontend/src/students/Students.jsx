import { Link } from "react-router-dom";

const students = [
  {
    id: 1,
    slug: "shahzad",
    name: "Shahzad",
    course: "Full Stack Development & Java",
    projects: 5,
    image: "https://i.pravatar.cc/300?img=1",
    bio: "Passionate developer building modern web apps.",
  },
  {
    id: 2,
    slug: "kritika-bhagwani",
    name: "Kritika Bhagwani",
    course: "Full Stack Development",
    projects: 3,
    image: "https://i.pravatar.cc/300?img=5",
    bio: "Topper of the batch with amazing coding skills",
  },
  {
    id: 3,
    slug: "shubham-jakhar",
    name: "Shubham Jakhar",
    course: "Full Stack Development & C++",
    projects: 6,
    image: "https://i.pravatar.cc/300?img=2",
    bio: "Building crazy things",
  },
  {
    id: 4,
    slug: "sonam-choudhary",
    name: "Sonam Choudhary",
    course: "Full Stack Development & C++",
    projects: 6,
    image: "https://i.pravatar.cc/300?img=5",
    bio: "Curious Web developer",
  },
  {
    id: 5,
    slug: "shruti-singhal",
    name: "Shruti Singhal",
    course: "Full Stack Development",
    projects: 3,
    image: "https://i.pravatar.cc/300?img=5",
    bio: "Building with Startups",
  },
  {
    id: 6,
    slug: "ekta-poonia",
    name: "Ekta Poonia",
    course: "Full Stack Development",
    projects: 3,
    image: "https://i.pravatar.cc/300?img=5",
    bio: "Working with Google",
  },
  {
    id: 7,
    slug: "akshita",
    name: "Akshita",
    course: "Full Stack Development",
    projects: 3,
    image: "https://i.pravatar.cc/300?img=5",
    bio: "Freelancer",
  },
  {
    id: 8,
    slug: "neeraj",
    name: "Neeraj",
    course: "Full Stack Development",
    projects: 3,
    image: "https://i.pravatar.cc/300?img=5",
    bio: "Thinks like a founder",
  },
];

export default function Students() {
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
              key={student.id}
              to={`/students/${student.slug}`}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">

                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-semibold">
                    {student.name}
                  </h3>

                  <p className="text-cyan-400 mt-2">
                    {student.course}
                  </p>

                  <p className="text-gray-400 mt-4">
                    {student.bio}
                  </p>

                  <div className="mt-4 text-sm text-gray-500">
                    {student.projects} Projects Built
                  </div>

                  <button className="mt-6 text-cyan-400 font-semibold">
                    View Profile →
                  </button>

                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}