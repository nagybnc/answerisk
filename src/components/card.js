import React from "react";
import { animated, to } from "react-spring";

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
    const { type, subType, question, answer } = data[i];
    const [showAnswer, setShowAnswer] = React.useState("false");
    return (
        <animated.div
            key={i}
            style={{
                transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
            }}
            className="deck-wrapper"
        >
            <animated.div
                {...bind(i)}
                style={{
                    transform: to([rot, scale], trans),
                }}
                className="deck-body"
            >
                <div className="flex flex-col px-6 py-4">
                    <div className="text-xs self-end text-gray-400 dark:text-gray-400">
                        {`• ${i + 1} question of ${data.length}`}
                        <div class="bg-gray-200 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                            <div class="bg-cyan-400 w-2/6 h-full rounded-lg shadow-md"></div>
                        </div>
                    </div>
                    <div className="font-bold text-xl mb-8 mt-4">{question}</div>
                    {showAnswer ? (
                        <button
                            onClick={() => setShowAnswer(!showAnswer)}
                            className="py-4 px-6 flex justify-center bg-cyan-400 text-white font-semibold rounded-md shadow-md hover:bg-cyan-760 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-75 animate-pulse"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                            <span className="ml-4">SHOW ME THE ANSWER</span>
                        </button>
                    ) : (
                        <p className="text-gray-600 text-base overflow-y-scroll max-h-500">{answer}</p>
                    )}
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">{type}</span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">{subType}</span>
                </div>
            </animated.div>
        </animated.div>
    );
};

export default Card;
