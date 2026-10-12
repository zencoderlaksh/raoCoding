import React, { useState } from "react";

export const getAvatarUrl = (user) => {
  if (!user) return "";
  const directUrl = user.imageUrl || user.avatar;
  if (directUrl && typeof directUrl === "string" && directUrl.trim() !== "") {
    return directUrl;
  }
  const name =
    user.username ||
    user.fullName ||
    user.name ||
    user.email?.split("@")[0] ||
    "User";
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=ea580c&color=ffffff&bold=true&size=128`;
};

export const getInitials = (user) => {
  if (!user) return "U";
  const name =
    user.username ||
    user.fullName ||
    user.name ||
    user.email?.split("@")[0] ||
    "User";
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

export default function UserAvatar({
  user,
  size = "md",
  className = "",
  showStatus = false,
  statusColor = "bg-emerald-400",
  ring = true,
  alt = "User Profile",
}) {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    xs: "w-6 h-6 text-[10px]",
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-xl",
    "2xl": "w-24 h-24 text-3xl",
  };

  const statusSizeClasses = {
    xs: "w-1.5 h-1.5 -bottom-0.5 -right-0.5",
    sm: "w-2 h-2 -bottom-0.5 -right-0.5",
    md: "w-2.5 h-2.5 -bottom-0.5 -right-0.5",
    lg: "w-3 h-3 bottom-0 right-0",
    xl: "w-3.5 h-3.5 bottom-0.5 right-0.5",
    "2xl": "w-5 h-5 bottom-1 right-1",
  };

  const avatarSrc = getAvatarUrl(user);
  const initials = getInitials(user);
  const containerSizeClass = sizeClasses[size] || sizeClasses.md;
  const statusSizeClass = statusSizeClasses[size] || statusSizeClasses.md;

  const ringClass = ring
    ? "border-2 border-orange-500/80 shadow-[0_0_12px_rgba(249,115,22,0.35)] hover:border-orange-400 hover:shadow-[0_0_16px_rgba(249,115,22,0.55)]"
    : "";

  return (
    <div
      className={`relative inline-flex items-center justify-center flex-shrink-0 select-none ${containerSizeClass} ${className}`}
    >
      <div
        className={`w-full h-full rounded-full overflow-hidden transition-all duration-300 ${ringClass} flex items-center justify-center bg-zinc-900`}
      >
        {!imgError && avatarSrc ? (
          <img
            src={avatarSrc}
            alt={alt || user?.username || "Avatar"}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center rounded-full"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-orange-600 via-amber-500 to-orange-400 text-black font-bold tracking-tight rounded-full shadow-inner">
            {initials}
          </div>
        )}
      </div>

      {showStatus && (
        <span
          className={`absolute rounded-full border-2 border-black ${statusColor} ${statusSizeClass} pointer-events-none ring-1 ring-black/50`}
        />
      )}
    </div>
  );
}
