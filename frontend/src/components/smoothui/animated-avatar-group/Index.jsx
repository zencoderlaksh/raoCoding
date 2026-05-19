"use client";

const AnimatedAvatarGroup = ({
  avatars,
  size = 40,
  overlap = 0.3,
  className = "",
}) => {
  const visibleAvatars = avatars.slice(0, 4);
  const overlapPx = size * overlap;

  return (
    <div
      className={`flex items-center ${className}`}
      aria-label="Avatar group"
      role="group"
    >
      {visibleAvatars.map((avatar, index) => (
        <div
          key={avatar.src}
          className="relative"
          style={{
            marginLeft: index === 0 ? 0 : -overlapPx,
            zIndex: visibleAvatars.length - index,
          }}
        >
          <img
            src={avatar.src}
            alt={avatar.alt}
            className="rounded-full object-cover border-2 border-white"
            style={{
              width: size,
              height: size,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedAvatarGroup;