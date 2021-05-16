import React, { useState, useEffect } from "react";
import StopwatchDisplay from "./StopwatchDisplay";
import { PlayIcon, StopIcon, TrashIcon, CogIcon } from "@heroicons/react/solid";

const Stopwatch = ({ setIsOpen }) => {
    const [isRunning, setIsRunning] = useState(false);
    const [currentTimeMs, setCurrentTimeMs] = useState(0);
    const [currentTimeSec, setCurrentTimeSec] = useState(0);
    const [currentTimeMin, setCurrentTimeMin] = useState(0);
    let watch = null;

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setCurrentTimeMs(currentTimeMs + 10);
                if (currentTimeMs >= 990) {
                    setCurrentTimeSec(currentTimeSec + 1);
                    setCurrentTimeMs(0);
                }
                if (currentTimeSec >= 60) {
                    setCurrentTimeMin(currentTimeMin + 1);
                    setCurrentTimeSec(0);
                }
            }, 10);
        }

        return () => clearInterval(intervalId);
    }, [isRunning, currentTimeMs]);

    const formatTime = (val, ...rest) => {
        let value = val.toString();
        if (value.length < 2) {
            value = "0" + value;
        }
        if (rest[0] === "ms" && value.length < 3) {
            value = "0" + value;
        }
        return value;
    };

    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
        }
    };

    const stop = () => {
        setIsRunning(false);
        clearInterval(watch);
    };

    const reset = () => {
        setCurrentTimeMs(0);
        setCurrentTimeSec(0);
        setCurrentTimeMin(0);
    };

    return (
        <div className="mt-4 flex flex-col items-center">
            <div className="flex justify-center gap-4">
                {isRunning === false && (
                    <button className="h-16 w-16 p-2 rounded-full text-white bg-green-500 hover:bg-green-600 border-4 border-green-700 focus:outline-none" onClick={start}>
                        <PlayIcon />
                    </button>
                )}
                {isRunning === true && (
                    <button className="h-16 w-16 p-2 rounded-full text-white bg-yellow-500 hover:bg-yellow-600 border-4 border-yellow-700 focus:outline-none" onClick={stop}>
                        <StopIcon />
                    </button>
                )}
                <button className="h-16 w-16 p-2 rounded-full text-white bg-red-500 hover:bg-red-600 border-4 border-red-700 focus:outline-none" onClick={reset}>
                    <TrashIcon />
                </button>
                <button className="h-16 w-16 p-2 rounded-full text-white bg-gray-500 hover:bg-gray-600 border-4 border-gray-700 focus:outline-none" onClick={() => setIsOpen(true)}>
                    <CogIcon />
                </button>
            </div>
            <div className="flex mt-2">
                <StopwatchDisplay time={`${formatTime(currentTimeMin)}:`} />
                <StopwatchDisplay time={`${formatTime(currentTimeSec)}:`} />
                <StopwatchDisplay time={formatTime(currentTimeMs, "ms")} />
            </div>
        </div>
    );
};

export default Stopwatch;
