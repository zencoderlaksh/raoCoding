import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const springValues = {
  damping: 25,
  stiffness: 180,
  mass: 0.5,
};

/**
 * TiltedCard component from React Bits (https://reactbits.dev)
 * 3D perspective card with cursor tracking, spring physics, and specular glare.
 */
export default function TiltedCard({
  children,
  captionText = '',
  containerHeight = '100%',
  containerWidth = '100%',
  scaleOnHover = 1.02,
  rotateAmplitude = 12,
  showGlare = true,
  glareOpacity = 0.2,
  className = '',
  glareColor = 'rgba(255, 255, 255, 0.35)',
}) {
  const ref = useRef(null);
  const rotateX = useSpring(0, springValues);
  const rotateY = useSpring(0, springValues);
  const scale = useSpring(1, springValues);
  const glareX = useSpring(50, springValues);
  const glareY = useSpring(50, springValues);
  const glareIntensity = useSpring(0, springValues);

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((offsetY - centerY) / centerY) * -rotateAmplitude;
    const rY = ((offsetX - centerX) / centerX) * rotateAmplitude;

    rotateX.set(rX);
    rotateY.set(rY);

    glareX.set((offsetX / rect.width) * 100);
    glareY.set((offsetY / rect.height) * 100);
    glareIntensity.set(glareOpacity);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    glareIntensity.set(glareOpacity);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    glareIntensity.set(0);
  }

  return (
    <figure
      ref={ref}
      className={`relative w-full h-full [perspective:1000px] select-none ${className}`}
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d] rounded-[inherit]"
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        {children}

        {/* Specular glare overlay */}
        {showGlare && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden mix-blend-overlay"
            style={{
              opacity: glareIntensity,
              background: `radial-gradient(circle at 50% 50%, ${glareColor}, transparent 70%)`,
            }}
          />
        )}
      </motion.div>
    </figure>
  );
}
