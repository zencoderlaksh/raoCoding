import {companies} from "../../../assets/images";

function ImageMarquee() {
  return (
    <div className="w-full overflow-hidden py-6 my-10">
      <style>{`
        .marquee-wrapper {
          display: flex;
          width: max-content;
          animation: scroll 18s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* Outer container */}
      <div className="flex w-max">
        
        {/* Moving Track */}
        <div className="marquee-wrapper">
          
          {/* First Copy */}
          <img
            src={companies}
            alt="companies"
            className="h-16 md:h-20 w-auto object-contain flex-shrink-0"
          />

          {/* Second Copy */}
          <img
            src={companies}
            alt="companies"
            className="h-16 md:h-20 w-auto object-contain flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageMarquee;