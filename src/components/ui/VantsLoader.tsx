import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils';

// Import animation data - Soroban abacus loading animation
import animationData from '../../animations/vants-loader.json';

interface VantsLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  speed?: number;
  text?: string;
  className?: string;
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

export const VantsLoader = ({
  size = 'md',
  speed = 1,
  text,
  className
}: VantsLoaderProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn('inline-flex flex-col items-center justify-center gap-3', className)}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={text || 'Loading'}
    >
      <div
        className={cn('flex items-center justify-center', sizeMap[size])}
        style={{ willChange: 'transform' }}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {text && (
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="text-sm text-muted-foreground font-medium"
        >
          {text}
        </motion.span>
      )}
    </motion.div>
  );
};
