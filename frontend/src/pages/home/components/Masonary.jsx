import React from "react";
import Masonry from "../../../components/Masonry";
// Import all images
import img1 from "../../../assets/masonry/image 1.png";
import img2 from "../../../assets/masonry/image 2.png";
import img3 from "../../../assets/masonry/image 3.png";
import img4 from "../../../assets/masonry/image 4.png";
import img5 from "../../../assets/masonry/image5.png";
import img6 from "../../../assets/masonry/image 6.png";
import img7 from "../../../assets/masonry/image 7.png";
import img8 from "../../../assets/masonry/image 8.png";
import img9 from "../../../assets/masonry/image 9.png";
import img10 from "../../../assets/masonry/image 10.png";
import img11 from "../../../assets/masonry/image 11.png";
import img12 from "../../../assets/masonry/image 12.png";
import img13 from "../../../assets/masonry/image 13.png";
import img14 from "../../../assets/masonry/image 14.png";
import img15 from "../../../assets/masonry/image 15.png";

const items = [
  { id: "1", img: img1, url: "#", height: 479},
  { id: "2", img: img2, url: "#", height: 386 },
  { id: "3", img: img3, url: "#", height: 480 },
  { id: "4", img: img4, url: "#", height: 494 },
  { id: "5", img: img5, url: "#", height: 451 },
  { id: "6", img: img6, url: "#", height: 760 },
  { id: "7", img: img7, url: "#", height: 600 },
  { id: "8", img: img8, url: "#", height: 324 },
  { id: "9", img: img9, url: "#", height: 690 },
  { id: "10", img: img10, url: "#", height: 560 },
  { id: "11", img: img11, url: "#", height: 740 },
  { id: "12", img: img12, url: "#", height: 510 },
  { id: "13", img: img13, url: "#", height: 650 },
  { id: "14", img: img14, url: "#", height: 470 },
  { id: "15", img: img15, url: "#", height: 700 },
  
];

const Masonary = () => {
  return (
    <div className="w-full px-6 py-10">
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.97}
        blurToFocus
        colorShiftOnHover={false}
      />
    </div>
  );
};

export default Masonary;