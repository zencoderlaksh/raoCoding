import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import CitySelect from "@/components/CitySelect";
import { useAuth } from "@/context/AuthContext";
import UserAvatar from "@/components/UserAvatar";
import { Camera, Sparkles, Check, BookOpen, ShieldCheck, User as UserIcon } from "lucide-react";

const AVATAR_PRESETS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
];

const Profile = () => {
  const navigate = useNavigate();
  const { user: authUser, updateProfile, isLoaded } = useAuth();
  
  const [profileData, setProfileData] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [myCourses, setMyCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();

  useEffect(() => {
    const fetchProfileAndCourses = async () => {
      try {
        const token = localStorage.getItem("rao_token");
        const headers = {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        };

        // Fetch Profile
        const profileRes = await fetch("/api/users/profile", { headers });
        const profileResult = await profileRes.json();
        
        if (profileRes.ok && profileResult.data) {
          const u = profileResult.data;
          setProfileData(u);
          setAvatarUrl(u.avatar || u.imageUrl || "");
          setValue("username", u.username || "");
          setValue("city", u.city || "");
          setValue("phoneNo", u.phoneNo || "");
        } else if (authUser) {
          setProfileData(authUser);
          setAvatarUrl(authUser.avatar || authUser.imageUrl || "");
          setValue("username", authUser.username || "");
          setValue("city", authUser.city || "");
          setValue("phoneNo", authUser.phoneNo || "");
        }

        // Fetch My Courses
        const coursesRes = await fetch("/api/courses/my-courses", { headers });
        const coursesResult = await coursesRes.json();

        if (coursesRes.ok) {
          setMyCourses(coursesResult.data || []);
        }

      } catch (error) {
        if (authUser) {
          setProfileData(authUser);
          setAvatarUrl(authUser.avatar || authUser.imageUrl || "");
        } else {
          setMessage({ type: "error", text: "An error occurred while loading data" });
        }
      } finally {
        setIsLoading(false);
        setCoursesLoading(false);
      }
    };

    fetchProfileAndCourses();
    register("city", { required: "City is required" });
  }, [setValue, register, authUser]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      const token = localStorage.getItem("rao_token");
      const headers = {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };

      const response = await fetch("/api/users/profile", {
        method: "PUT",
        headers,
        body: JSON.stringify({
          username: data.username,
          city: data.city,
          phoneNo: data.phoneNo,
          avatar: avatarUrl,
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setProfileData(result.data);
        if (updateProfile) {
          updateProfile({
            ...result.data,
            avatar: avatarUrl,
            imageUrl: avatarUrl,
          });
        }
        setMessage({ type: "success", text: "Profile & Picture updated successfully!" });
      } else {
        // Fallback for Clerk or client-only update
        if (updateProfile) {
          updateProfile({
            username: data.username,
            city: data.city,
            phoneNo: data.phoneNo,
            avatar: avatarUrl,
            imageUrl: avatarUrl,
          });
        }
        setMessage({ type: "success", text: "Profile updated successfully!" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred while updating profile" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if ((isLoaded !== undefined && !isLoaded) || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-orange-500">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm">Loading profile...</p>
        </div>
      </div>
    );
  }

  const effectiveUser = {
    ...profileData,
    avatar: avatarUrl || profileData?.avatar || profileData?.imageUrl,
    imageUrl: avatarUrl || profileData?.imageUrl || profileData?.avatar,
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-black px-4 py-10 sm:px-6 lg:px-8 text-white">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] bg-orange-600/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        
        {/* Profile Card */}
        <div className="rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.7)] p-6 sm:p-8 space-y-6 h-fit">
          
          {/* Profile Picture & Header */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="relative group">
              <UserAvatar
                user={effectiveUser}
                size="2xl"
                showStatus={true}
                ring={true}
                className="shadow-2xl shadow-orange-500/20"
              />
              <button
                type="button"
                onClick={() => setShowAvatarPicker(!showAvatarPicker)}
                className="absolute bottom-1 right-1 p-2 rounded-full bg-orange-500 text-black hover:bg-orange-400 transition-all shadow-lg hover:scale-110 cursor-pointer"
                title="Change Profile Picture"
              >
                <Camera size={14} />
              </button>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {profileData?.username || authUser?.username || "My Account"}
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                {profileData?.email || authUser?.email}
              </p>
            </div>

            {/* Avatar Picker / Custom URL accordion */}
            {showAvatarPicker && (
              <div className="w-full p-4 rounded-2xl bg-black/60 border border-zinc-800 space-y-3 text-left animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-300">Choose Profile Picture</span>
                  <button
                    type="button"
                    onClick={() => setShowAvatarPicker(false)}
                    className="text-[11px] text-zinc-500 hover:text-white"
                  >
                    Close
                  </button>
                </div>

                {/* Preset Avatars */}
                <div className="flex items-center justify-center gap-2 pt-1">
                  {AVATAR_PRESETS.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setAvatarUrl(p)}
                      className={`relative w-10 h-10 rounded-full overflow-hidden border-2 transition hover:scale-105 ${
                        avatarUrl === p ? "border-orange-500 scale-105" : "border-zinc-700"
                      }`}
                    >
                      <img src={p} alt="Preset" className="w-full h-full object-cover" />
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      setAvatarUrl(
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          watch("username") || "User"
                        )}&background=ea580c&color=fff&bold=true`
                      )
                    }
                    className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 text-black font-bold text-xs flex items-center justify-center border-2 border-zinc-700 hover:scale-105 transition"
                    title="Generate Initials Avatar"
                  >
                    Init
                  </button>
                </div>

                {/* Custom Image URL input */}
                <div>
                  <label className="text-[11px] text-zinc-400 block mb-1">Or paste Image URL</label>
                  <input
                    type="url"
                    placeholder="https://example.com/avatar.jpg"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/90 px-3 py-2 text-xs text-white placeholder-zinc-500 outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            )}
          </div>

          {message.text && (
            <div className={`p-3 rounded-xl text-xs sm:text-sm text-center border ${
              message.type === "success" 
                ? "bg-green-500/15 border-green-500/40 text-green-300" 
                : "bg-red-500/15 border-red-500/40 text-red-300"
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 ml-1 mb-1 block">Email (Cannot be changed)</label>
              <input
                type="email"
                value={profileData?.email || authUser?.email || ""}
                disabled
                className="w-full rounded-xl border border-white/5 bg-black/60 px-4 py-3 text-sm text-gray-500 cursor-not-allowed outline-none"
              />
            </div>

            {profileData?.role && profileData?.role !== 'user' && (
              <div>
                <label className="text-xs text-gray-400 ml-1 mb-1 block">Account Type</label>
                <div className="w-full rounded-xl border border-white/5 bg-black/60 px-4 py-3 text-sm text-orange-400 uppercase font-semibold flex items-center gap-2">
                  <ShieldCheck size={16} />
                  <span>{profileData.role}</span>
                </div>
              </div>
            )}

            <div>
              <label className="text-xs text-gray-400 ml-1 mb-1 block">Username / Display Name</label>
              <input
                {...register("username", { required: "Username is required" })}
                placeholder="Username"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-600/20"
              />
              {errors.username && (
                <p className="mt-1 text-xs text-red-400">{errors.username.message}</p>
              )}
            </div>

            <div>
              <label className="text-xs text-gray-400 ml-1 mb-1 block">City</label>
              <CitySelect
                value={watch("city") || ""}
                onChange={(val) => setValue("city", val, { shouldValidate: true })}
                error={errors.city?.message}
                placeholder="Select city from dropdown..."
              />
              {errors.city && (
                <p className="mt-1 text-xs text-red-400">{errors.city.message}</p>
              )}
            </div>

            <div>
              <label className="text-xs text-gray-400 ml-1 mb-1 block">Phone Number</label>
              <input
                {...register("phoneNo", { required: "Phone number is required" })}
                placeholder="Phone Number"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-600/20"
              />
              {errors.phoneNo && (
                <p className="mt-1 text-xs text-red-400">{errors.phoneNo.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 mt-4 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? "Saving..." : "Save Profile Changes"}
            </button>
          </form>
        </div>

        {/* Your Courses Card */}
        <div className="rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.7)] p-6 sm:p-8 flex flex-col h-fit min-h-[400px]">
          <div className="space-y-2 text-center mb-6">
            <h2 className="text-2xl font-extrabold tracking-wide text-orange-500">
              Your Enrolled Courses
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Access your active curricula and modules
            </p>
          </div>

          {coursesLoading ? (
            <div className="flex-1 flex items-center justify-center text-orange-500 text-sm">
              <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mr-2" />
              Loading courses...
            </div>
          ) : myCourses.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 text-center py-8">
              <BookOpen size={36} className="text-zinc-600 mb-3" />
              <p className="text-sm">No enrolled programs found yet.</p>
              <button
                onClick={() => navigate('/corporate-trainings')}
                className="mt-4 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold rounded-full text-xs hover:scale-105 transition cursor-pointer shadow-lg shadow-orange-500/20"
              >
                Explore Bootcamps & Programs
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {myCourses.map(course => (
                <div
                  key={course._id}
                  className="p-4 rounded-2xl bg-black/50 border border-white/10 hover:border-orange-500/50 transition group cursor-pointer"
                  onClick={() => navigate(`/my-courses/${course._id}`)}
                >
                  <h3 className="font-semibold text-base group-hover:text-orange-400 transition">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 mt-1">
                    {course.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[11px] bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full font-medium">
                      Purchased
                    </span>
                    <span className="text-xs font-semibold text-orange-400 group-hover:underline">
                      View Content &rarr;
                    </span>
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
