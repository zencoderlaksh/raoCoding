import React from 'react';

/**
 * ShinyText component from React Bits (https://reactbits.dev)
 * Shimmer text with animated gradient sweep across letters.
 */
export default function ShinyText({
  text,
  disabled = false,
  speed = 3.5,
  className = '',
  shimmerColor = 'rgba(255, 255, 255, 0.9)',
}) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent font-medium ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(255, 255, 255, 0.4) 30%, ${shimmerColor} 50%, rgba(255, 255, 255, 0.4) 70%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animation: disabled ? 'none' : `shine ${animationDuration} linear infinite`,
      }}
    >
      {text}
    </span>
  );
}
