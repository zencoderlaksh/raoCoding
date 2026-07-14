import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const CourseViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getToken, isLoaded, isSignedIn } = useAuth();
  
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("overview"); // overview, notes, videos

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/login");
    }
  }, [isLoaded, isSignedIn, navigate]);

  useEffect(() => {
    const fetchCourseContent = async () => {
      if (!isSignedIn) return;
      
      try {
        const token = await getToken();
        const response = await fetch(`/api/courses/${id}/content`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        const result = await response.json();
        
        if (response.ok) {
          setCourse(result.data);
        } else {
          setError(result.message || "Failed to load course. Ensure you have purchased it.");
        }
      } catch (err) {
        setError("An error occurred while loading course content.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourseContent();
  }, [id, isSignedIn, getToken]);

  if (!isLoaded || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-orange-500">
        Loading course content...
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
        <div className="p-6 rounded-2xl border border-red-500/50 bg-red-500/10 max-w-md">
          <h2 className="text-xl font-bold text-red-400 mb-2">Access Denied</h2>
          <p className="text-gray-300 mb-4">{error}</p>
          <button onClick={() => navigate('/profile')} className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition">
            Back to Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 border-b border-white/10 pb-6">
          <button onClick={() => navigate('/profile')} className="text-sm text-gray-400 hover:text-orange-400 mb-4 transition">
            &larr; Back to My Courses
          </button>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">{course.title}</h1>
          <p className="text-gray-400 text-lg">{course.description}</p>
        </div>

        {/* Live Classes Info Banner */}
        {course.classTimings && (
          <div className="mb-8 p-5 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-orange-400 font-semibold text-lg">Live Classes</h3>
              <p className="text-sm text-gray-300 mt-1">Timings: {course.classTimings}</p>
            </div>
            {course.joinLink && (
              <a 
                href={course.joinLink} 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-black font-semibold rounded-xl transition whitespace-nowrap shadow-[0_0_15px_rgba(234,88,12,0.4)]"
              >
                Join Live Class
              </a>
            )}
          </div>
        )}

        {/* Tabs */}
        <div className="flex space-x-2 border-b border-white/10 mb-6 overflow-x-auto">
          {['overview', 'notes', 'videos'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium text-sm capitalize transition ${
                activeTab === tab 
                ? 'text-orange-500 border-b-2 border-orange-500' 
                : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-xl font-semibold">Course Overview</h3>
              <p className="text-gray-300 leading-relaxed">{course.description}</p>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-xl font-semibold mb-4">Course Notes</h3>
              {!course.notes || course.notes.length === 0 ? (
                <p className="text-gray-500">No notes available for this course yet.</p>
              ) : (
                <div className="grid gap-4">
                  {course.notes.map((note, index) => (
                    <div key={index} className="p-5 rounded-xl border border-white/10 bg-white/5">
                      <h4 className="font-semibold text-orange-400 mb-2">{note.title}</h4>
                      <p className="text-sm text-gray-300 whitespace-pre-wrap">{note.content}</p>
                      {note.fileUrl && (
                        <a href={note.fileUrl} target="_blank" rel="noreferrer" className="inline-block mt-3 px-4 py-2 bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 rounded-lg text-sm transition font-medium">
                          View Attached File
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-xl font-semibold mb-4">Recorded Videos</h3>
              {!course.recordedVideos || course.recordedVideos.length === 0 ? (
                <p className="text-gray-500">No recorded videos available yet.</p>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.recordedVideos.map((video, index) => (
                    <div key={index} className="p-4 rounded-xl border border-white/10 bg-white/5 group hover:border-orange-500/50 transition">
                      <h4 className="font-medium text-white mb-3 group-hover:text-orange-400 transition">{video.title}</h4>
                      <a 
                        href={video.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-block px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition"
                      >
                        Watch Video &#9654;
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CourseViewer;
