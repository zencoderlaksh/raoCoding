"use client";

import AnimatedAvatarGroup from "../../../components/smoothui/animated-avatar-group/Index";

const avatars = [
  { src: "https://i.pravatar.cc/150?img=1", alt: "User 1" },
  { src: "https://i.pravatar.cc/150?img=2", alt: "User 2" },
  { src: "https://i.pravatar.cc/150?img=3", alt: "User 3" },
  { src: "https://i.pravatar.cc/150?img=4", alt: "User 4" },
];

const AnimatedAvatarGroupDemo = () => (
  <div className="flex items-center justify-center gap-4">
    <AnimatedAvatarGroup avatars={avatars} />
    <p className="text-2xl text-[D7D7D7] font-extralight"><span className="text-orange-400">1 crore+ </span>Students are learning from our courses.</p>
  </div>
);

export default AnimatedAvatarGroupDemo;
