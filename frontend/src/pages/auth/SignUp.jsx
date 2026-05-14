import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../schemas/userSchema";
import { Link } from "react-router-dom";

const availableCourses = [
  "C",
  "C++",
  "MERN Stack",
  "Python",
  "Data Science",
];

const SignUp = () => {
  const [role, setRole] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  /* =========================
     TOGGLE COURSE
  ========================= */
  const toggleCourse = (course) => {
    setSelectedCourses((prev) => {
      const updated = prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course];

      setValue("courses", updated); // sync with RHF

      return updated;
    });
  };

  const onSubmit = (data) => {
    console.log("FORM DATA:", data);
  };

  return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0a0a0a] to-black p-6 text-white overflow-hidden">

//       {/* Glow Background Effect */}
//       <div className="absolute w-[400px] h-[400px] bg-orange-600/20 blur-[120px] rounded-full top-10 left-10"></div>
//       <div className="absolute w-[300px] h-[300px] bg-orange-600/10 blur-[120px] rounded-full bottom-10 right-10"></div>

//       {/* Glass Card */}
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="relative w-full max-w-2xl bg-white/5 backdrop-blur-2xl border border-white/10
//         shadow-[0_0_40px_rgba(0,0,0,0.6)] rounded-3xl p-8 space-y-4"
//       >

//         {/* Title */}
//         <h2
//           className="text-3xl font-extrabold text-center tracking-wide"
//           style={{ color: "var(--color-orange-600)" }}
//         >
//           Create Account
//         </h2>

//         <p className="text-center text-gray-400 text-sm">
//           Join us and start your journey 
//         </p>

//         {/* NAME + EMAIL */}
//         {[
//           { name: "name", placeholder: "Full Name" },
//           { name: "email", placeholder: "Email Address" },
//         ].map((field) => (
//           <div key={field.name}>
//             <input
//               {...register(field.name)}
//               placeholder={field.placeholder}
//               className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none
//               focus:border-[var(--color-orange-600)] focus:ring-2 focus:ring-orange-600/20 transition"
//             />
//             <p className="text-red-400 text-xs mt-1">
//               {errors[field.name]?.message}
//             </p>
//           </div>
//         ))}

//         {/* CITY + PHONE */}
//         <div className="grid grid-cols-2 gap-4">

//           <div>
//             <input
//               {...register("city")}
//               placeholder="City"
//               className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none
//               focus:border-[var(--color-orange-600)] focus:ring-2 focus:ring-orange-600/20 transition"
//             />
//             <p className="text-red-400 text-xs mt-1">
//               {errors.city?.message}
//             </p>
//           </div>

//           <div>
           
//             <input
//               {...register("phone")}
//               placeholder="Phone Number"
//               className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none
//               focus:border-[var(--color-orange-600)] focus:ring-2 focus:ring-orange-600/20 transition"
//             />
//             <p className="text-red-400 text-xs mt-1">
//               {errors.phone?.message}
//             </p>
//           </div>

//         </div>

//         {/* ROLE */}
//         <div>
//           <select
//             {...register("role")}
//             onChange={(e) => {
//               setRole(e.target.value);
//               setSelectedCourses([]); // reset courses when role changes
//               setValue("courses", []);
//             }}
//             className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none
//             focus:border-[var(--color-orange-600)] focus:ring-2 focus:ring-orange-600/20 transition"
//           >
//             <option value="">Select Role</option>
//             <option value="student">Student</option>
//             <option value="client">Client</option>
//           </select>

//           <p className="text-red-400 text-xs mt-1">
//             {errors.role?.message}
//           </p>
//         </div>

//         {/* COURSES (CHIP UI - ONLY FOR STUDENT) */}
//         {role === "student" && (
//           <div>
//             <label className="text-xs text-orange-500 uppercase font-mono mb-2 block">
//               Select Courses
//             </label>

//             <div
//               className={`flex flex-wrap gap-2 p-3 bg-white/5 border ${
//                 errors.courses ? "border-red-500" : "border-white/10"
//               } rounded-xl`}
//             >
//               {availableCourses.map((course) => (
//                 <button
//                   key={course}
//                   type="button"
//                   onClick={() => toggleCourse(course)}
//                   className={`px-3 py-1 rounded-full text-xs border transition-all duration-200
//                     ${
//                       selectedCourses.includes(course)
//                         ? "bg-orange-600 border-orange-500 text-black font-semibold shadow-md shadow-orange-600/20"
//                         : "bg-black/30 border-white/10 text-gray-400 hover:border-orange-500 hover:text-white"
//                     }`}
//                 >
//                   {course}
//                 </button>
//               ))}
//             </div>

//             <p className="text-red-400 text-xs mt-1">
//               {errors.courses?.message}
//             </p>
//           </div>
//         )}

//         {/* PASSWORD */}
//         <div>
//           <input
//             type="password"
//             {...register("password")}
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none
//             focus:border-[var(--color-orange-600)] focus:ring-2 focus:ring-orange-600/20 transition"
//           />
//           <p className="text-red-400 text-xs mt-1">
//             {errors.password?.message}
//           </p>
//         </div>

//         {/* CONFIRM PASSWORD */}
//         <div>
//           <input
//             type="password"
//             {...register("confirmPassword")}
//             placeholder="Confirm Password"
//             className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none
//             focus:border-[var(--color-orange-600)] focus:ring-2 focus:ring-orange-600/20 transition"
//           />
//           <p className="text-red-400 text-xs mt-1">
//             {errors.confirmPassword?.message}
//           </p>
//         </div>

//         {/* BUTTON */}
//         <button
//           type="submit"
//           className="w-full py-3 rounded-xl font-semibold text-black
//           bg-orange-600 hover:bg-orange-500 transition-all duration-300
//           hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-600/20"
//         >
//           Register
//         </button>

//         {/* FOOTER */}
//        <p className="text-center text-xs text-gray-500">
//   Already have an account{" "}
//   <Link
//     to="/login"
//     className="text-orange-500 cursor-pointer hover:underline"
//   >
//     Log IN
//   </Link>
// </p>
//       </form>
//     </div>

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
      space-y-4
    "
  >

    {/* Heading */}
    <div className="space-y-2 text-center">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide"
        style={{ color: "var(--color-orange-600)" }}
      >
        Create Account
      </h2>

      <p className="text-xs sm:text-sm text-gray-400">
        Join us and start your journey
      </p>
    </div>

    {/* NAME + EMAIL */}
    {[
      { name: "name", placeholder: "Full Name" },
      { name: "email", placeholder: "Email Address" },
    ].map((field) => (
      <div key={field.name}>
        <input
          {...register(field.name)}
          placeholder={field.placeholder}
          className="
            w-full
            rounded-xl
            border border-white/10
            bg-black/40
            px-4 py-3
            text-sm sm:text-base
            text-white
            outline-none
            transition
            focus:border-orange-500
            focus:ring-2 focus:ring-orange-600/20
          "
        />

        <p className="mt-1 text-xs text-red-400">
          {errors[field.name]?.message}
        </p>
      </div>
    ))}

    {/* CITY + PHONE */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      <div>
        <input
          {...register("city")}
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

      <div>
        <input
          {...register("phone")}
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
    </div>

    {/* ROLE */}
    <div>
      <select
        {...register("role")}
        onChange={(e) => {
          setRole(e.target.value);
          setSelectedCourses([]);
          setValue("courses", []);
        }}
        className="
          w-full rounded-xl border border-white/10
          bg-black/40 px-4 py-3
          text-sm sm:text-base text-white outline-none
          transition
          focus:border-orange-500
          focus:ring-2 focus:ring-orange-600/20
        "
      >
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="client">Client</option>
      </select>

      <p className="mt-1 text-xs text-red-400">
        {errors.role?.message}
      </p>
    </div>

    {/* COURSES */}
    {role === "student" && (
      <div>
        <label className="mb-2 block text-xs font-mono uppercase text-orange-500">
          Select Courses
        </label>

        <div
          className={`
            flex flex-wrap gap-2 rounded-xl border p-3
            ${
              errors.courses
                ? "border-red-500"
                : "border-white/10"
            }
            bg-white/5
          `}
        >
          {availableCourses.map((course) => (
            <button
              key={course}
              type="button"
              onClick={() => toggleCourse(course)}
              className={`
                px-3 py-2
                text-xs sm:text-sm
                rounded-full border
                transition-all duration-200
                ${
                  selectedCourses.includes(course)
                    ? "bg-orange-600 border-orange-500 text-black font-semibold shadow-md shadow-orange-600/20"
                    : "bg-black/30 border-white/10 text-gray-400 hover:border-orange-500 hover:text-white"
                }
              `}
            >
              {course}
            </button>
          ))}
        </div>

        <p className="mt-1 text-xs text-red-400">
          {errors.courses?.message}
        </p>
      </div>
    )}

    {/* PASSWORD */}
    <div>
      <input
        type="password"
        {...register("password")}
        placeholder="Password"
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
        {errors.password?.message}
      </p>
    </div>

    {/* CONFIRM PASSWORD */}
    <div>
      <input
        type="password"
        {...register("confirmPassword")}
        placeholder="Confirm Password"
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
        {errors.confirmPassword?.message}
      </p>
    </div>

    {/* BUTTON */}
    <button
      type="submit"
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
      "
    >
      Register
    </button>

    {/* Footer */}
    <p className="text-center text-xs sm:text-sm text-gray-500">
      Already have an account{" "}
      <Link
        to="/login"
        className="text-orange-500 hover:underline"
      >
        Log IN
      </Link>
    </p>
  </form>
</div>
  );
};

export default SignUp;