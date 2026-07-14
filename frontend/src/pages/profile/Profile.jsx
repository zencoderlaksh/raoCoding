import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();
  
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [myCourses, setMyCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/login");
    }
  }, [isLoaded, isSignedIn, navigate]);

  useEffect(() => {
    const fetchProfileAndCourses = async () => {
      if (!isSignedIn) return;
      
      try {
        const token = await getToken();
        
        // Fetch Profile
        const profileRes = await fetch("/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const profileResult = await profileRes.json();
        
        if (profileRes.ok) {
          setProfileData(profileResult.data);
          setValue("username", profileResult.data.username);
          setValue("city", profileResult.data.city);
          setValue("phoneNo", profileResult.data.phoneNo);
        } else {
          setMessage({ type: "error", text: profileResult.message || "Failed to load profile" });
        }

        // Fetch My Courses
        const coursesRes = await fetch("/api/courses/my-courses", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const coursesResult = await coursesRes.json();

        if (coursesRes.ok) {
          setMyCourses(coursesResult.data);
        }

      } catch (error) {
        setMessage({ type: "error", text: "An error occurred while loading data" });
      } finally {
        setIsLoading(false);
        setCoursesLoading(false);
      }
    };

    fetchProfileAndCourses();
  }, [isSignedIn, getToken, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      const token = await getToken();
      const response = await fetch("/api/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          username: data.username,
          city: data.city,
          phoneNo: data.phoneNo
        })
      });

      const result = await response.json();

      if (response.ok) {
        setProfileData(result.data);
        setMessage({ type: "success", text: "Profile updated successfully!" });
      } else {
        setMessage({ type: "error", text: result.message || "Failed to update profile" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred while updating profile" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isLoaded || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-orange-500">
        Loading profile...
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-500">
        {message.text || "Could not load profile data."}
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-black px-4 py-10 sm:px-6 lg:px-8 text-white">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] bg-orange-600/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] bg-orange-600/10 blur-[100px] rounded-full"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        
        {/* Profile Card */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)] p-5 sm:p-8 space-y-6 h-fit">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-orange-600">
              My Profile
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Manage your account details
            </p>
          </div>

          {message.text && (
            <div className={`p-3 rounded-lg text-sm text-center border ${
              message.type === "success" 
                ? "bg-green-500/20 border-green-500/50 text-green-400" 
                : "bg-red-500/20 border-red-500/50 text-red-400"
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 ml-1 mb-1 block">Email (Cannot be changed)</label>
              <input type="email" value={profileData.email} disabled className="w-full rounded-xl border border-white/5 bg-black/60 px-4 py-3 text-sm sm:text-base text-gray-500 cursor-not-allowed outline-none" />
            </div>

            <div>
              <label className="text-xs text-gray-400 ml-1 mb-1 block">Role</label>
              <div className="w-full rounded-xl border border-white/5 bg-black/60 px-4 py-3 text-sm sm:text-base text-orange-400 uppercase font-semibold">
                {profileData.role}
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-400 ml-1 mb-1 block">Username</label>
              <input {...register("username", { required: "Username is required" })} placeholder="Username" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm sm:text-base text-white outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-600/20" />
            </div>

            <div>
              <label className="text-xs text-gray-400 ml-1 mb-1 block">City</label>
              <input {...register("city", { required: "City is required" })} placeholder="City" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm sm:text-base text-white outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-600/20" />
            </div>

            <div>
              <label className="text-xs text-gray-400 ml-1 mb-1 block">Phone Number</label>
              <input {...register("phoneNo", { required: "Phone number is required" })} placeholder="Phone Number" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm sm:text-base text-white outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-600/20" />
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-orange-600 py-3 mt-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-orange-500 active:scale-[0.98] shadow-lg shadow-orange-600/20 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>

        {/* Your Courses Card */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)] p-5 sm:p-8 flex flex-col h-fit min-h-[400px]">
          <div className="space-y-2 text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-orange-600">
              Your Courses
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Access your purchased content
            </p>
          </div>

          {coursesLoading ? (
            <div className="flex-1 flex items-center justify-center text-orange-500">Loading courses...</div>
          ) : myCourses.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-gray-500 text-center">
              You haven't purchased any courses yet.<br/>
              <button onClick={() => navigate('/courses')} className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition">Browse Courses</button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {myCourses.map(course => (
                <div key={course._id} className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-orange-500/50 transition group cursor-pointer" onClick={() => navigate(`/my-courses/${course._id}`)}>
                  <h3 className="font-semibold text-lg group-hover:text-orange-400 transition">{course.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mt-1">{course.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">Purchased</span>
                    <span className="text-sm font-medium hover:underline text-white">View Content &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
