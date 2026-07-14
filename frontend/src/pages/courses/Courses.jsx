import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import TextPressure from "../../components/TextPressure";
import Headings from '../home/components/Headings'
import Difference from '../home/components/Difference'
import FAQ from '../home/components/FAQ'

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses");
        const result = await res.json();
        if (res.ok) {
          setCourses(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
    <div className="min-h-screen px-4 py-10">
      {/* Responsive Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
        {loading ? (
          <div className="col-span-full text-white text-xl">Loading courses...</div>
        ) : courses.length === 0 ? (
          <div className="col-span-full text-white text-xl">No courses available.</div>
        ) : (
          courses.map((course) => (
            <Card
              key={course._id}
              image={course.image || "https://dummyimage.com/400x250/111/fff"}
              title={course.title}
              price={course.price / 100}
              originalPrice={course.originalPrice / 100}
              discount={course.discount}
              tags={course.tags}
              slug={course.slug}
            />
          ))
        )}
      </div>
    </div>
    <div>
      <section className="w-full px-4 py-16 sm:py-20 lg:py-28">
      <Headings title="Comparison" desc="What sets Rao Coding School different" descrip="from ordinary Coding Schools."/>
      </section>
      <Difference />
    </div>
    <div>
      <FAQ />
    </div>
    <div className="w-full flex justify-center items-center py-20">
        <div className="relative w-full h-[450px] overflow-hidden">
          <TextPressure
            text="Rao's"
            flex
            width
            weight
            italic
            alpha={false}
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={36}
          />
        </div>
      </div>
    </div>
  );
}