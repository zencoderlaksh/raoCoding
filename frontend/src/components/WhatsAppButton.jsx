import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-5
        right-5
        z-50
        w-16
        h-16
        rounded-full
        bg-orange-500
        flex
        items-center
        justify-center
        shadow-[0_0_25px_rgba(255,115,0,0.5)]
        hover:scale-110
        transition-all
        duration-300
      "
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default WhatsAppButton;