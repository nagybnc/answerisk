import React from "react";
import { animated, to } from "react-spring";

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
    const { subType, question, answer } = data[i];
    // const [showAnswer, setShowAnswer] = React.useState(false);
    const calculatedProgressLength = ((i + 1) / data.length) * 100;
    
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
                className="deck-body font-mono rounded-lg bg-answerix-white"
            >
                <header className="h-8 w-full mb-8 rounded-t-lg bg-answerix-dark-blue-800"></header>

                <main className="h-card mx-6 pt-6 px-6 bg-white shadow-lg">
                    <p className="text-5xl text-gray-700">
                        {i + 1}
                        <span className="text-lg text-gray-400"> OF {data.length}</span>
                    </p>
                    <div className="relative pt-1">
                        <div className="text-xs h-2 mb-4 overflow-hidden flex rounded bg-teal-100">
                            <div style={{ width: `${calculatedProgressLength}%` }} className="bg-answerix-emerald-500"></div>
                        </div>
                    </div>
                    <article className="h-80 py-2">
                        <p className="text-xl font-bold mb-2 text-answerix-emerald-500">{question}</p>
                        {answer}
                    </article>
                </main>

            </animated.div>
        </animated.div>
    );
};

export default Card;
