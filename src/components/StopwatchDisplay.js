import React from 'react';

const StopwatchDisplay = ({time}) => {
    return (
        <p className="w-24 text-6xl font-bold flex text-answerix-dark-blue-800">
            {time}
        </p>
    );
}

export default StopwatchDisplay;
