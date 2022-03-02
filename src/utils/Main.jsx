import React from 'react'
import { useState } from 'react';
import './CSS/Main.css'
import { time, date } from './Stored/var';
const Clock = () => {
    const [Ctime, setTime] = useState(time)
    const [Cdate, setDate] = useState(date)
    const updated = () => {
        let newTime = new Date().toLocaleTimeString()
        let newDate = new Date().toLocaleDateString()
        setTime(newTime)
        setDate(newDate)
    }
    setInterval(updated, 500)
    return(
        <>
            <div className="bodydiv">
                <div className="Container">
                    <div className="TOP_">
                        <p className='time_'>{Ctime}</p>
                    </div>
                    <div className='DOWN_'>
                        <p className='date_'>{Cdate}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export {Clock};