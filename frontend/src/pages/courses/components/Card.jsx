import React from "react";
import { ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({
  slug,
  image,
  title,
  price,
  originalPrice,
  discount,
  tags = [],
}) => {
  // Convert title into URL slug safely as a fallback, but prefer the actual DB slug
  const courseSlug = slug || title?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "") || "course";

  return (
    <div className="group relative w-full max-w-[420px] mx-auto rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-xl p-4 sm:p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,107,0,0.25)] hover:border-orange-500/30">
      
      {/* Image Container with Hover Zoom & Gradient Overlay */}
      <div className="relative w-full aspect-[4/3] sm:h-[220px] overflow-hidden rounded-2xl mb-5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Subtle dark gradient at the bottom of the image for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-80"></div>
        
        {/* Floating Discount Badge over Image */}
        {discount && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-[#ff6b00] to-orange-500 text-white text-xs sm:text-sm px-3 py-1.5 rounded-full font-bold shadow-lg shadow-orange-500/25 z-10 backdrop-blur-md border border-white/20">
            {discount}% OFF
          </div>
        )}
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col h-full">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] sm:text-xs font-medium text-gray-300 uppercase tracking-wider backdrop-blur-sm"
              >
                <Tag size={10} className="text-orange-400" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-4 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-200 transition-all duration-300">
          {title}
        </h2>

        <div className="mt-auto">
          {/* Price Section */}
          <div className="flex items-end justify-between mb-6">
            <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-3">
              <div className="flex items-baseline gap-1">
                <span className="text-gray-400 text-sm sm:text-base font-medium">Rs.</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-orange-400 drop-shadow-sm">
                  {price}
                </span>
              </div>
              {originalPrice && (
                <span className="text-gray-500 line-through text-sm sm:text-base font-medium mb-1">
                  Rs. {originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Call to Action Button */}
          <Link to={`/course/${courseSlug}`} className="block w-full">
            <button className="relative w-full overflow-hidden flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm sm:text-base transition-all duration-300 group/btn hover:bg-gradient-to-r hover:from-[#ff6b00] hover:to-orange-500 hover:border-transparent hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                View Course Details
                <ArrowRight 
                  size={18} 
                  className="transition-transform duration-300 group-hover/btn:translate-x-1" 
                />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;