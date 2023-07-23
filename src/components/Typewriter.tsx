import { useEffect, useState } from 'react';

export function Typewriter(text: string) {
  const [displayedText, setDisplayedText] = useState('');
  const speed = 200;

  useEffect(() => {
    let currentIndex = 0;

    const audio = new Audio('./src/components/type.mp3');
    audio.play();
    
    
    const timer = setInterval(() => {
      if (currentIndex === text.length-1) {
        clearInterval(timer);
      } else {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      }
    }, speed);

    return () => {
        audio.pause();
        audio.currentTime = 0;
        clearInterval(timer);
    }
  }, []);

  return (
    <div>
      <span>{displayedText}</span>
    </div>
  );
};
