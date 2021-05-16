import React from 'react';

const StopwatchDisplay = ({formatTime, currentTimeMs, currentTimeSec, currentTimeMin}) => {
    return (
        <div>
            <span className="text-6xl font-bold tabular-nums text-answerix-dark-blue-800">
                {formatTime(currentTimeMin)}:
                {formatTime(currentTimeSec)}:
                {formatTime(currentTimeMs, 'ms')}
            </span>
        </div>
    );
}

export default StopwatchDisplay;
