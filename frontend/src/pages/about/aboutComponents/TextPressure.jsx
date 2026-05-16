// import { useEffect, useRef, useState } from "react";

// export default function TextPressure({
//   text = "RaoCoding",
//   fontFamily = "InterVariable",
//   fontUrl,
//   width = true,
//   weight = true,
//   italic = true,
//   alpha = false,
//   stroke = false,
//   flex = true,
//   textColor = "#ffffff",
//   strokeColor = "#ff6a00",
//   className = "",
//   minFontSize = 36,
// }) {
//   const containerRef = useRef(null);
//   const titleRef = useRef(null);

//   const [fontSize, setFontSize] = useState(minFontSize);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);

//   const chars = text.split("");

//   useEffect(() => {
//     const resizeObserver = new ResizeObserver(() => {
//       if (!containerRef.current || !titleRef.current) return;

//       const containerWidth = containerRef.current.offsetWidth;
//       const containerHeight = containerRef.current.offsetHeight;

//       let size = minFontSize;
//       titleRef.current.style.fontSize = `${size}px`;

//       while (
//         titleRef.current.scrollWidth <= containerWidth &&
//         titleRef.current.scrollHeight <= containerHeight &&
//         size < 500
//       ) {
//         size++;
//         titleRef.current.style.fontSize = `${size}px`;
//       }

//       setFontSize(size - 1);
//     });

//     if (containerRef.current) resizeObserver.observe(containerRef.current);
//     return () => resizeObserver.disconnect();
//   }, [text, minFontSize]);

//   const handleMouseMove = (e) => {
//     const rect = containerRef.current?.getBoundingClientRect();
//     if (!rect) return;

//     setMousePos({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   const getCharStyle = (index) => {
//     if (!isHovered || !containerRef.current) {
//       return {
//         fontVariationSettings: `'wght' ${weight ? 100 : 400}, 'wdth' ${
//           width ? 100 : 100
//         }, 'ital' ${italic ? 0 : 0}`,
//         color: textColor,
//         opacity: 1,
//         transition: "font-variation-settings 0.9s ease",
//       };
//     }

//     const containerWidth = containerRef.current.offsetWidth;
//     const charWidth = containerWidth / chars.length;
//     const charCenterX = charWidth * index + charWidth / 2;

//     const distance = Math.abs(mousePos.x - charCenterX);
//     const maxDist = containerWidth / 2;
//     const proximity = Math.max(0, 1 - distance / maxDist);

//     const wght = weight ? 100 + proximity * 800 : 400;
//     const wdth = width ? 75 + proximity * 50 : 100;
//     const ital = italic ? proximity * 1 : 0;
//     const alphaVal = alpha ? 0.3 + proximity * 0.7 : 1;

//     return {
//       fontVariationSettings: `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${ital}`,
//       color: textColor,
//       opacity: alphaVal,
//       transition: "font-variation-settings 0.5s ease",
//       WebkitTextStroke: stroke ? `1px ${strokeColor}` : undefined,
//     };
//   };

//   return (
//     <div
//       ref={containerRef}
//       className={`w-full h-full flex items-center justify-center overflow-hidden ${className}`}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <h1
//         ref={titleRef}
//         style={{
//           fontSize: `${fontSize}px`,
//           fontFamily: fontFamily,
//           lineHeight: 1,
//           display: flex ? "flex" : "block",
//           flexWrap: "nowrap",
//           userSelect: "none",
//           whiteSpace: "nowrap",
//         }}
//       >
//         {chars.map((char, i) => (
//           <span key={i} style={getCharStyle(i)}>
//             {char}
//           </span>
//         ))}
//       </h1>

//       {fontUrl && (
//         <style>{`
//           @font-face {
//             font-family: '${fontFamily}';
//             src: url('${fontUrl}');
//           }
//         `}</style>
//       )}
//     </div>
//   );
// }

