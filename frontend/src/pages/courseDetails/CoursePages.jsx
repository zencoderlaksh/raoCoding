import React from "react";
import { useParams } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import { coursesData } from "./coursesData";

const CoursePage = () => {
  const { courseName } = useParams();

  const selectedCourse = coursesData.find(
    (course) => course.slug === courseName
  );

  if (!selectedCourse) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-4xl">
        Course Not Found
      </div>
    );
  }

  return <CourseDetails {...selectedCourse} />;
};

export default CoursePage;