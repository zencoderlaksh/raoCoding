import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/userSchema";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("LOGIN DATA:", data);
  };

  return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0a0a0a] to-black p-6 text-white overflow-hidden">

//       {/* Glow Effects */}
//       <div className="absolute w-[400px] h-[400px] bg-orange-600/20 blur-[120px] rounded-full top-10 left-10"></div>
//       <div className="absolute w-[300px] h-[300px] bg-orange-600/10 blur-[120px] rounded-full bottom-10 right-10"></div>

//       {/* Glass Card */}
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="relative w-full max-w-lg bg-white/5 backdrop-blur-2xl border border-white/10
//         shadow-[0_0_40px_rgba(0,0,0,0.6)] rounded-3xl p-10 space-y-5"
//       >

//         {/* TITLE */}
//         <h2
//           className="text-3xl font-extrabold text-center tracking-wide"
//           style={{ color: "var(--color-orange-600)" }}
//         >
//           Welcome Back
//         </h2>

//         <p className="text-center text-gray-400 text-sm">
//           Login to continue your journey 
//         </p>

//         {/* EMAIL */}
//         <div>
//           <input
//             type="email"
//             {...register("email")}
//             placeholder="Email Address"
//             className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none
//             focus:border-[var(--color-orange-600)] focus:ring-2 focus:ring-orange-600/20 transition"
//           />

//           <p className="text-red-400 text-xs mt-1">
//             {errors.email?.message}
//           </p>
//         </div>

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

//         {/* BUTTON */}
//         <button
//           type="submit"
//           className="w-full py-3 rounded-xl font-semibold text-black
//           bg-orange-600 hover:bg-orange-500 transition-all duration-300
//           hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-600/20"
//         >
//           Login
//         </button>

//         {/* FOOTER */}
//        <p className="text-center text-xs text-gray-500">
//   Don’t have an account?{" "}
//   <Link
//     to="/signup"
//     className="text-orange-500 cursor-pointer hover:underline"
//   >
//     Sign Up
//   </Link>
// </p>
//       </form>
//     </div>

<div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-black px-4 py-10 sm:px-6 lg:px-8 text-white">

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] bg-orange-600/20 blur-[100px] rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] bg-orange-600/10 blur-[100px] rounded-full"></div>

  {/* Glass Card */}
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="
      relative z-10
      w-full max-w-lg
      rounded-2xl sm:rounded-3xl
      border border-white/10
      bg-white/5
      backdrop-blur-2xl
      shadow-[0_0_40px_rgba(0,0,0,0.6)]
      p-5 sm:p-8 md:p-10
      space-y-5
    "
  >

    {/* TITLE */}
    <div className="space-y-2 text-center">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide"
        style={{ color: "var(--color-orange-600)" }}
      >
        Welcome Back
      </h2>

      <p className="text-xs sm:text-sm text-gray-400">
        Login to continue your journey
      </p>
    </div>

    {/* EMAIL */}
    <div>
      <input
        type="email"
        {...register("email")}
        placeholder="Email Address"
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
        {errors.email?.message}
      </p>
    </div>

    {/* PASSWORD */}
    <div>
      <input
        type="password"
        {...register("password")}
        placeholder="Password"
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
        {errors.password?.message}
      </p>
    </div>

    {/* EXTRA OPTIONS */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">

      <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
        <input
          type="checkbox"
          className="accent-orange-500"
        />
        Remember me
      </label>

      <Link
        to="/forgot-password"
        className="text-orange-500 hover:underline text-left sm:text-right"
      >
        Forgot Password?
      </Link>
    </div>

    {/* BUTTON */}
    <button
      type="submit"
      className="
        w-full
        rounded-xl
        bg-orange-600
        py-3
        text-sm sm:text-base
        font-semibold
        text-black
        transition-all duration-300
        hover:scale-[1.02]
        hover:bg-orange-500
        active:scale-[0.98]
        shadow-lg shadow-orange-600/20
      "
    >
      Login
    </button>

    {/* Divider */}
    <div className="flex items-center gap-3">
      <div className="h-px flex-1 bg-white/10"></div>
      <span className="text-xs text-gray-500">OR</span>
      <div className="h-px flex-1 bg-white/10"></div>
    </div>

    {/* SOCIAL LOGIN */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

      <button
        type="button"
        className="
          flex items-center justify-center gap-2
          rounded-xl border border-white/10
          bg-white/5 py-3
          text-sm text-gray-300
          transition hover:bg-white/10
        "
      >
        Google
      </button>

      <button
        type="button"
        className="
          flex items-center justify-center gap-2
          rounded-xl border border-white/10
          bg-white/5 py-3
          text-sm text-gray-300
          transition hover:bg-white/10
        "
      >
        GitHub
      </button>

    </div>

    {/* FOOTER */}
    <p className="text-center text-xs sm:text-sm text-gray-500">
      Don’t have an account?{" "}
      <Link
        to="/signup"
        className="text-orange-500 hover:underline"
      >
        Sign Up
      </Link>
    </p>

  </form>
</div>
  );
};

export default Login;