import React from "react";
import { animated, to } from "react-spring";

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
    const { type, question, answer } = data[i];
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
                    <div className="text-xs self-end text-gray-400 dark:text-gray-400">{`• ${i+1} question of ${data.length}`}</div>
                    <div className="font-bold text-xl mb-8 mt-4">{question}</div>
                    {showAnswer ? (
                        <button
                            onClick={() => setShowAnswer(!showAnswer)}
                            className="py-2 px-4 bg-cyan-400 text-white font-semibold rounded-md shadow-md hover:bg-cyan-760 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-75 animate-pulse"
                        >
                            SHOW ME THE ANSWER
                        </button>
                    ) : (
                        <p className="text-gray-600 text-base overflow-y-scroll max-h-500">{answer}</p>
                    )}
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">{type}</span>
                </div>
            </animated.div>
        </animated.div>
    );
};

export default Card;
