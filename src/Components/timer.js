import React, {useState} from 'react'

function Timer() {
    const [time, setTime] = useState(0)
        return (
            <div>
                <h1>{time}</h1>
            </div>
        )
    }

export default Timer;