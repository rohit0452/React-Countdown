import React, { Component,useState, useRef, useEffect } from 'react';

import './App.css';

function Countdown() {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");
    const [Datee ,setDatee] = useState("00")
    

    
  

    let interval = useRef()

    // timer start

    const startTimer = () => {
      //  const countdownDate = new Date("September 30, 2020 00:00:00").getTime();
        const countdownDate = new Date(Datee).getTime();
       // const countdownDate2 = countdownDate + Date(+30)
     
        
        

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor((distance / (1000 * 60 * 60 * 24)))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                // stop
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            
            }

        }, 1000)
    }

    // Components DId Mount

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })

    const newDate = (e)=>{
      if(Datee){
        setDatee(e.target.value)
      }
        
        //<button onClick={()=>setDatee("20 August, 2020 00:00:00")}>set</button>
    }

    return (
        <section className="timer-container">
            <section className="timer">
                <div className="head">
                    <h1>Countdown Timer</h1>
                    <h3>Your Countdown will be Expired In</h3>
                </div>
                <div className="maintimer">
                    <div className="abc">
                        <p>{timerDays} <span>      :</span></p>

                        <p><small>Days</small></p>

                    </div>

                    <div className="abc">
                        <p>{timerHours} <span>     :</span></p>
                        <p><small>Hours</small></p>
                    </div>

                    <div className="abc">
                        <p>{timerMinutes} <span>   :</span></p>
                        <p><small>Minutes</small></p>
                    </div>

                    <div className="abc">
                        <p>{timerSeconds}</p>
                        <p><small>Seconds</small></p>
                    </div>


                </div>
                <div>
                    <input className="dadada" type="date" name="abc" onChange={(e)=>newDate(e)} />
                    <button onClick={()=>setDatee(Datee)}>set</button>
                </div>
         
            </section>

        </section>
    )
}

export default Countdown;
