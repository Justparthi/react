import React, {useState, useEffect} from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interValid = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(interValid)
        }
    }, []);


    function formatTime(){
        let hours = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        const meridian = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)} : ${padZero(mins)} : ${padZero(secs)} ${meridian}`
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )

}

export default DigitalClock