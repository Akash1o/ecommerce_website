import React from 'react'
 import { useEffect, useState } from 'react';
function Timer() {
    const [timeLeft, setTimeLeft] = useState(3 * 60 * 60);

    const formatTime = (seconds) => {
      const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
      const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
      const secs = String(seconds % 60).padStart(2, "0");
      return `${hours}:${minutes}:${secs}`;
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  

  return (
    <div className="text-2xl font-bold text-red-600 text-center flex flex-col-reverse">
      Sale ends in: {formatTime(timeLeft)}
    </div>
  )
}

export default Timer