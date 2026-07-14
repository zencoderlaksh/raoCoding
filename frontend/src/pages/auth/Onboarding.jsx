import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUser, useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  
  const selectedRole = watch("role", "");

  const onSubmit = async (data) => {
    if (!isSignedIn) return;
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const token = await getToken();
      
      const email = user.primaryEmailAddress?.emailAddress;
      const username = user.username || user.fullName || "User";

      const response = await fetch("/api/users/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email,
          username,
          city: data.city,
          phoneNo: data.phone,
          role: data.role,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Reload the user to sync publicMetadata (onboardingComplete)
        await user.reload();
        // Redirect to home or dashboard after successful onboarding
        navigate("/");
      } else {
        setErrorMsg(result.message || "Failed to complete onboarding.");
      }
    } catch (error) {
      setErrorMsg("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-black px-4 py-10 sm:px-6 lg:px-8 text-white">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] bg-orange-600/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] bg-orange-600/10 blur-[100px] rounded-full"></div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          relative z-10
          w-full max-w-2xl
          rounded-2xl sm:rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-2xl
          shadow-[0_0_40px_rgba(0,0,0,0.6)]
          p-5 sm:p-8
          space-y-6
        "
      >
        {/* Heading */}
        <div className="space-y-2 text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide"
            style={{ color: "var(--color-orange-600)" }}
          >
            Complete Your Profile
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Tell us a bit more about yourself
          </p>
        </div>

        {errorMsg && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-400 p-3 rounded-lg text-sm text-center">
            {errorMsg}
          </div>
        )}

        {/* CITY */}
        <div>
          <input
            {...register("city", { required: "City is required" })}
            placeholder="City"
            className="
              w-full rounded-xl border border-white/10
              bg-black/40 px-4 py-3
              text-sm sm:text-base text-white outline-none
              transition
              focus:border-orange-500
              focus:ring-2 focus:ring-orange-600/20
            "
          />
          <p className="mt-1 text-xs text-red-400">
            {errors.city?.message}
          </p>
        </div>

        {/* PHONE */}
        <div>
          <input
            {...register("phone", { required: "Phone number is required" })}
            placeholder="Phone Number"
            className="
              w-full rounded-xl border border-white/10
              bg-black/40 px-4 py-3
              text-sm sm:text-base text-white outline-none
              transition
              focus:border-orange-500
              focus:ring-2 focus:ring-orange-600/20
            "
          />
          <p className="mt-1 text-xs text-red-400">
            {errors.phone?.message}
          </p>
        </div>

        {/* ROLE */}
        <div className="space-y-3">
          <label className="text-sm text-gray-400 block">I am a...</label>
          <div className="grid grid-cols-2 gap-4">
            
            {/* Student Card */}
            <div 
              onClick={() => {
                setValue("role", "student", { shouldValidate: true });
                setRole("student");
              }}
              className={`
                cursor-pointer rounded-xl p-4 border transition-all duration-300 flex flex-col items-center justify-center gap-2 text-center
                ${selectedRole === "student" 
                  ? "bg-orange-600/10 border-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.2)]" 
                  : "bg-black/40 border-white/10 hover:border-white/30 hover:bg-white/5"}
              `}
            >
              <div className={`p-3 rounded-full ${selectedRole === "student" ? "bg-orange-500 text-black" : "bg-white/10 text-gray-400"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <div>
                <h4 className={`font-semibold ${selectedRole === "student" ? "text-orange-400" : "text-gray-300"}`}>Student</h4>
                <p className="text-xs text-gray-500 mt-1">I want to learn</p>
              </div>
            </div>

            {/* Client Card */}
            <div 
              onClick={() => {
                setValue("role", "client", { shouldValidate: true });
                setRole("client");
              }}
              className={`
                cursor-pointer rounded-xl p-4 border transition-all duration-300 flex flex-col items-center justify-center gap-2 text-center
                ${selectedRole === "client" 
                  ? "bg-orange-600/10 border-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.2)]" 
                  : "bg-black/40 border-white/10 hover:border-white/30 hover:bg-white/5"}
              `}
            >
              <div className={`p-3 rounded-full ${selectedRole === "client" ? "bg-orange-500 text-black" : "bg-white/10 text-gray-400"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <h4 className={`font-semibold ${selectedRole === "client" ? "text-orange-400" : "text-gray-300"}`}>Client</h4>
                <p className="text-xs text-gray-500 mt-1">I need a service</p>
              </div>
            </div>

          </div>
          
          {/* Hidden input for react-hook-form validation */}
          <input type="hidden" {...register("role", { required: "Please select a role" })} value={selectedRole} />

          <p className="mt-1 text-xs text-red-400 text-center">
            {errors.role?.message}
          </p>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full rounded-xl
            bg-orange-600
            py-3
            text-sm sm:text-base
            font-semibold text-black
            transition-all duration-300
            hover:scale-[1.02]
            hover:bg-orange-500
            active:scale-[0.98]
            shadow-lg shadow-orange-600/20
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          {isSubmitting ? "Submitting..." : "Complete Setup"}
        </button>
      </form>
    </div>
  );
};

export default Onboarding;