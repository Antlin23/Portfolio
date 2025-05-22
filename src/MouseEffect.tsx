import { useEffect, useState } from 'react';

const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
      setIsVisible(true);
  }, []);

  return (
    <div className='mouse-effect'
      style={{
        maskImage: `radial-gradient(circle 80px at ${position.x}px ${position.y}px, transparent 0%, black 100%)`,
        WebkitMaskImage: `radial-gradient(circle 80px at ${position.x}px ${position.y}px, transparent 0%, black 100%)`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

export default MouseEffect; 