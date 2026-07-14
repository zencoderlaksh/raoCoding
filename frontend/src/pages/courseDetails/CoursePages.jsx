import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourseDetails from "./CourseDetails";

const CoursePage = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`/api/courses/slug/${courseName}`);
        const result = await res.json();
        
        if (res.ok && result.data) {
          setCourse(result.data);
        } else {
          setCourse(null);
        }
      } catch (err) {
        console.error("Failed to fetch course details:", err);
        setCourse(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseName]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Loading...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white text-xl space-y-4">
        <p>Course Not Found</p>
        <button onClick={() => navigate('/courses')} className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition">
          Browse Courses
        </button>
      </div>
    );
  }

  return <CourseDetails {...course} />;
};

export default CoursePage;