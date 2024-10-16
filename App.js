import React, { useEffect, useState } from 'react';
import Display from './Display';

const App = () => {
  // Set the end time to May 20, 2025
  const endTime = new Date('May 20, 2025 00:00:00').getTime();
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const gap = endTime - currentTime; // Calculate the time difference

  // Time units in milliseconds
  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  // Calculate remaining time
  const remainingDays = Math.floor(gap / days);
  const remainingHours = Math.floor((gap % days) / hours);
  const remainingMinutes = Math.floor((gap % hours) / minutes);
  const remainingSeconds = Math.floor((gap % minutes) / seconds);

  return (
    <div>
      <center>
        <Display 
          days={remainingDays} 
          hours={remainingHours} 
          minutes={remainingMinutes}
          seconds={remainingSeconds} 
        />
      </center>
    </div>
  );
};

export default App;
