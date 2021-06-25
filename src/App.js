import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    let timerInterval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)//set current time after every second

    return () => clearInterval(timerInterval);//clear timer interval on component destroy
  }, [])
  return (
    <div className={`App ${(currentTime.getSeconds() % 2 === 0) ? 'even-time' : 'odd-time'}`}>
      <h1 className="timer-wrap">
        {currentTime.toLocaleTimeString()}
      </h1>
    </div>
  );
}

export default App;
