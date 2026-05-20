import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({
  image,
  title,
  price,
  originalPrice,
  discount,
  tags = [],
}) => {

  // convert title into URL slug
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full max-w-[420px] rounded-3xl border border-white/15 bg-white/10 backdrop-blur-lg overflow-hidden shadow-[0_0_40px_rgba(255,115,0,0.08)] p-4">

      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] object-cover"
        />
      </div>

      {/* Tags */}
      <div className="flex gap-2 mt-4 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 border border-gray-600 rounded-full text-gray-300 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h2 className="text-white text-2xl leading-snug font-semibold mt-4">
        {title}
      </h2>

      {/* Price */}
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-end gap-2 flex-wrap">
          <span className="text-gray-400 text-lg">Rs.</span>

          <span className="text-[#ff6b00] text-3xl font-bold">
            {price}
          </span>

          <span className="text-gray-500 line-through text-sm mb-1">
            Rs.{originalPrice}
          </span>
        </div>

        <div className="bg-white text-black text-xs px-3 py-1 rounded-md font-semibold">
          {discount}% OFF
        </div>
      </div>

      {/* Button */}
      <Link to={`/course/${slug}`}>
        <button className="cursor-pointer mt-6 w-full border border-gray-600 hover:border-orange-500 text-white px-6 py-3 rounded-2xl flex items-center justify-center gap-3 text-lg transition-all duration-300 hover:bg-[#111]">
          Check Course
          <ArrowRight size={20} />
        </button>
      </Link>
    </div>
  );
};

export default Card;