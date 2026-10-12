import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * DecryptedText component from React Bits (https://reactbits.dev)
 * Cyberpunk / sci-fi text decrypting effect on hover or when coming into view.
 */
export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  sequential = true,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+0123456789',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover', // 'hover' | 'view'
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let interval;
    let currentIteration = 0;

    const getNextChar = (originalChar) => {
      if (originalChar === ' ') return ' ';
      if (useOriginalCharsOnly) {
        const chars = text.split('').filter((c) => c !== ' ');
        return chars[Math.floor(Math.random() * chars.length)] || originalChar;
      }
      return characters[Math.floor(Math.random() * characters.length)];
    };

    if (isHovering || (animateOn === 'view' && hasAnimated && !isScrambling)) {
      setIsScrambling(true);
      interval = setInterval(() => {
        setDisplayText((_) => {
          const textLength = text.length;
          return text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';

              if (sequential) {
                const progress = currentIteration / maxIterations;
                const threshold =
                  revealDirection === 'start'
                    ? progress * textLength
                    : revealDirection === 'end'
                    ? (1 - progress) * textLength
                    : Math.abs(progress - 0.5) * 2 * textLength;

                const shouldReveal =
                  revealDirection === 'start'
                    ? index < threshold
                    : revealDirection === 'end'
                    ? index > threshold
                    : Math.abs(index - textLength / 2) < threshold;

                if (shouldReveal) {
                  return text[index];
                }
                return getNextChar(char);
              }

              if (currentIteration >= maxIterations) {
                return text[index];
              }
              return getNextChar(char);
            })
            .join('');
        });

        currentIteration++;
        if (currentIteration > maxIterations) {
          clearInterval(interval);
          setIsScrambling(false);
          setDisplayText(text);
        }
      }, speed);
    } else {
      setDisplayText(text);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [
    isHovering,
    text,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    characters,
    useOriginalCharsOnly,
    hasAnimated,
    animateOn,
  ]);

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (animateOn === 'hover') {
      setIsHovering(false);
    }
  };

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onViewportEnter={() => {
        if (animateOn === 'view' && !hasAnimated) {
          setHasAnimated(true);
          setIsHovering(true);
        }
      }}
      viewport={{ once: true }}
      {...props}
    >
      <span className={className}>
        {displayText.split('').map((char, index) => {
          const isEncrypted = char !== text[index] && char !== ' ';
          return (
            <span
              key={index}
              className={isEncrypted ? encryptedClassName : undefined}
            >
              {char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}
