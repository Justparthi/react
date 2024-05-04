import React, {useState, useEffect, useRef} from "react";


function StopWatch() {

    const [isRunning, setIsRunning] = useState(false)
    const [elapseTime, setElapseTime] = useState(0)
    const intervalRef = useRef(null)
    const startTimeRef = useRef(0)



    useEffect(() => {
        if(isRunning) {
            intervalRef.current = setInterval(() =>{
                setElapseTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalRef.current);
        }
    }, [isRunning]);



    function start() {
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapseTime

    }

    function stop() {
        setIsRunning(false)

    }

    function reset() {
        setElapseTime(0)
        setIsRunning(false)

    }


    function formatTime() {

        let hours = Math.floor(elapseTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapseTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapseTime / (1000) % 60)
        let millisecs = Math.floor((elapseTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        millisecs = String(millisecs).padStart(2, "0")


        return `${minutes} : ${seconds} : ${millisecs}`
    }


    return (
        <div className="watch">
            <p>{formatTime()}</p>
            <div>
                <button onClick={start} className="start">Start</button>
                <button onClick={reset} className="reset">Reset</button>
                <button onClick={stop} className="stop">Stop</button>
            </div>
            
        </div>
    )
}

export default StopWatch

