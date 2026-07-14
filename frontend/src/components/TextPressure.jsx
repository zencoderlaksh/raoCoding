// // Component ported from https://codepen.io/JuanFuentes/full/rgXKGQ

// import { useEffect, useRef, useState, useMemo, useCallback } from 'react';

// const dist = (a, b) => {
//   const dx = b.x - a.x;
//   const dy = b.y - a.y;
//   return Math.sqrt(dx * dx + dy * dy);
// };

// const getAttr = (distance, maxDist, minVal, maxVal) => {
//   const val = maxVal - Math.abs((maxVal * distance) / maxDist);
//   return Math.max(minVal, val + minVal);
// };

// const debounce = (func, delay) => {
//   let timeoutId;
//   return (...args) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// };

// const TextPressure = ({
//   text = 'RaoCoding',
//   fontFamily = 'Compressa VF',
//   fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',

//   width = true,
//   weight = true,
//   italic = true,
//   alpha = false,

//   flex = true,
//   stroke = false,
//   scale = false,

//   textColor = '#FFFFFF',
//   strokeColor = '#FF0000',
//   className = '',

//   minFontSize = 24
// }) => {
//   const containerRef = useRef(null);
//   const titleRef = useRef(null);
//   const spansRef = useRef([]);

//   const mouseRef = useRef({ x: 0, y: 0 });
//   const cursorRef = useRef({ x: 0, y: 0 });

//   const [fontSize, setFontSize] = useState(minFontSize);
//   const [scaleY, setScaleY] = useState(1);
//   const [lineHeight, setLineHeight] = useState(1);

//   const chars = text.split('');

//   useEffect(() => {
//     const handleMouseMove = e => {
//       cursorRef.current.x = e.clientX;
//       cursorRef.current.y = e.clientY;
//     };
//     const handleTouchMove = e => {
//       const t = e.touches[0];
//       cursorRef.current.x = t.clientX;
//       cursorRef.current.y = t.clientY;
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('touchmove', handleTouchMove, { passive: true });

//     if (containerRef.current) {
//       const { left, top, width, height } = containerRef.current.getBoundingClientRect();
//       mouseRef.current.x = left + width / 2;
//       mouseRef.current.y = top + height / 2;
//       cursorRef.current.x = mouseRef.current.x;
//       cursorRef.current.y = mouseRef.current.y;
//     }

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('touchmove', handleTouchMove);
//     };
//   }, []);

//   const setSize = useCallback(() => {
//     if (!containerRef.current || !titleRef.current) return;

//     const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();

//     let newFontSize = containerW / (chars.length / 2);
//     newFontSize = Math.max(newFontSize, minFontSize);

//     setFontSize(newFontSize);
//     setScaleY(1);
//     setLineHeight(1);

//     requestAnimationFrame(() => {
//       if (!titleRef.current) return;
//       const textRect = titleRef.current.getBoundingClientRect();

//       if (scale && textRect.height > 0) {
//         const yRatio = containerH / textRect.height;
//         setScaleY(yRatio);
//         setLineHeight(yRatio);
//       }
//     });
//   }, [chars.length, minFontSize, scale]);

//   useEffect(() => {
//     const debouncedSetSize = debounce(setSize, 100);
//     debouncedSetSize();
//     window.addEventListener('resize', debouncedSetSize);
//     return () => window.removeEventListener('resize', debouncedSetSize);
//   }, [setSize]);

//   useEffect(() => {
//     let rafId;
//     const animate = () => {
//       mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
//       mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

//       if (titleRef.current) {
//         const titleRect = titleRef.current.getBoundingClientRect();
//         const maxDist = titleRect.width / 2;

//         spansRef.current.forEach(span => {
//           if (!span) return;

//           const rect = span.getBoundingClientRect();
//           const charCenter = {
//             x: rect.x + rect.width / 2,
//             y: rect.y + rect.height / 2
//           };

//           const d = dist(mouseRef.current, charCenter);

//           const wdth = width ? Math.floor(getAttr(d, maxDist, 5, 200)) : 100;
//           const wght = weight ? Math.floor(getAttr(d, maxDist, 100, 900)) : 400;
//           const italVal = italic ? getAttr(d, maxDist, 0, 1).toFixed(2) : 0;
//           const alphaVal = alpha ? getAttr(d, maxDist, 0, 1).toFixed(2) : 1;

//           const newFontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;

//           if (span.style.fontVariationSettings !== newFontVariationSettings) {
//             span.style.fontVariationSettings = newFontVariationSettings;
//           }
//           if (alpha && span.style.opacity !== alphaVal) {
//             span.style.opacity = alphaVal;
//           }
//         });
//       }

//       rafId = requestAnimationFrame(animate);
//     };

//     animate();
//     return () => cancelAnimationFrame(rafId);
//   }, [width, weight, italic, alpha]);

//   const styleElement = useMemo(() => {
//     return (
//       <style>{`
//           @font-face {
//             font-family: '${fontFamily}';
//             src: url('${fontUrl}');
//             font-style: normal;
//           }

//           .flex {
//             display: flex;
//             justify-content: space-between;
//           }

//           .stroke span {
//             position: relative;
//             color: ${textColor};
//           }
//           .stroke span::after {
//             content: attr(data-char);
//             position: absolute;
//             left: 0;
//             top: 0;
//             color: transparent;
//             z-index: -1;
//             -webkit-text-stroke-width: 3px;
//             -webkit-text-stroke-color: ${strokeColor};
//           }

//           .text-pressure-title {
//             color: ${textColor};
//           }
//         `}</style>
//     );
//   }, [fontFamily, fontUrl, textColor, strokeColor]);

//   const dynamicClassName = [className, flex ? 'flex' : '', stroke ? 'stroke' : ''].filter(Boolean).join(' ');

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         position: 'relative',
//         width: '100%',
//         height: '100%',
//         background: 'transparent'
//       }}>
//       {styleElement}
//       <h1
//         ref={titleRef}
//         className={`text-pressure-title ${dynamicClassName}`}
//         style={{
//           fontFamily,
//           textTransform: 'uppercase',
//           fontSize: fontSize,
//           lineHeight,
//           transform: `scale(1, ${scaleY})`,
//           transformOrigin: 'center top',
//           margin: 0,
//           textAlign: 'center',
//           userSelect: 'none',
//           whiteSpace: 'nowrap',
//           fontWeight: 100,
//           width: '100%'
//         }}>
//         {chars.map((char, i) => (
//           <span
//             key={i}
//             ref={el => (spansRef.current[i] = el)}
//             data-char={char}
//             style={{
//               display: 'inline-block',
//               color: stroke ? undefined : textColor
//             }}>
//             {char}
//           </span>
//         ))}
//       </h1>
//     </div>
//   );
// };

// export default TextPressure;



























import { useEffect, useRef, useState, useMemo, useCallback } from "react";

const dist = (a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const getAttr = (distance, maxDist, minVal, maxVal) => {
  const val = maxVal - Math.abs((maxVal * distance) / maxDist);
  return Math.max(minVal, val + minVal);
};

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const TextPressure = ({
  text = "RaoCoding",
  fontFamily = "Inter",
  fontUrl = "",

  width = true,
  weight = true,
  italic = true,
  alpha = false,

  flex = true,
  stroke = false,

  textColor = "#FFFFFF",
  strokeColor = "#FF0000",

  minFontSize = 24,
  className = "",
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);

  const chars = text.split("");

  // Mouse tracking
  useEffect(() => {
    const move = (e) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", (e) => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  // sizing
  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();

    let newFontSize = width / (chars.length / 2);
    newFontSize = Math.max(newFontSize, minFontSize);

    setFontSize(newFontSize);

    requestAnimationFrame(() => {
      const rect = titleRef.current.getBoundingClientRect();

      if (rect.height > 0) {
        const ratio = height / rect.height;
        setScaleY(ratio);
        setLineHeight(ratio);
      }
    });
  }, [chars.length, minFontSize]);

  useEffect(() => {
    const handler = debounce(setSize, 100);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [setSize]);

  // animation
  useEffect(() => {
    let raf;

    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        const maxDist = titleRef.current.getBoundingClientRect().width / 2;

        spansRef.current.forEach((span) => {
          if (!span) return;

          const rect = span.getBoundingClientRect();
          const center = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2,
          };

          const d = dist(mouseRef.current, center);

          const wght = weight ? Math.floor(getAttr(d, maxDist, 100, 900)) : 400;
          const wdth = width ? Math.floor(getAttr(d, maxDist, 50, 200)) : 100;

          span.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}`;
        });
      }

      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, [width, weight]);

  const styleTag = useMemo(
    () => (
      <style>{`
        ${fontUrl ? `
        @font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
        }` : ''}

        .text-pressure {
          display: flex;
          justify-content: space-between;
          width: 100%;
          user-select: none;
          white-space: nowrap;
          text-transform: uppercase;
          color: ${textColor};
        }
      `}</style>
    ),
    [fontFamily, fontUrl, textColor]
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {styleTag}

      {/* IMPORTANT FIX: absolute so it won't affect layout */}
      <h1
        ref={titleRef}
        className="text-pressure absolute inset-0 flex items-center justify-center"
        style={{
          fontFamily,
          fontSize,
          transform: `scale(1, ${scaleY})`,
          lineHeight,
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => (spansRef.current[i] = el)}
            data-char={char}
            style={{ display: "inline-block" }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextPressure;