import React from "react";
import { animated, to, config, useSpring } from "react-spring";
import { EyeIcon, TagIcon } from "@heroicons/react/outline";

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
    const { type, subType, level, question, answer } = data[i];
    const [showAnswer, setShowAnswer] = React.useState(false);
    const calculatedProgressLength = ((i + 1) / data.length) * 100;

    const answerFadeStyles = useSpring({
        config: { ...config.stiff, duration: 600 },
        from: { opacity: 0 },
        to: {
            opacity: showAnswer ? 1 : 0,
        },
    });

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
                    <div className="flex justify-between items-start">
                        <p className="text-5xl text-gray-700">
                            {i + 1}
                            <span className="text-lg text-gray-400"> OF {data.length}</span>
                        </p>
                        <p className="p-2 rounded-lg text-white text-xs bg-answerix-cyan-300">
                            <span className="rounded-full p-1 mr-2 text-answerix-cyan-300 bg-white">{level}</span>
                            {type}
                        </p>
                    </div>
                    <div className="relative pt-1">
                        <div className="text-xs h-2 mb-4 overflow-hidden flex rounded bg-teal-100">
                            <div style={{ width: `${calculatedProgressLength}%` }} className="bg-answerix-emerald-500"></div>
                        </div>
                    </div>
                    <article className="h-80 py-2">
                        <p className="text-xl font-bold mb-2 text-answerix-emerald-500">{question}</p>
                        <animated.div className="text-sm h-60 overflow-y-scroll" style={answerFadeStyles}>
                            {answer
                                ? answer
                                : "No answer! No answer is also an answer."}
                        </animated.div>
                    </article>
                    {!showAnswer && (
                        <button
                            onClick={() => setShowAnswer(!showAnswer)}
                            className={`
                                font-semibold
                                py-2 px-6 mx-auto
                                flex justify-center
                                rounded-full shadow-md
                                transform translate-y-2 hover:scale-105
                                bg-gradient-to-b from-answerix-emerald-500 to-answerix-teal-500
                                text-gray-50 
                            `}
                        >
                            <EyeIcon className="h-6 w-6" />
                            <span className="ml-2">SHOW ME THE ANSWER</span>
                        </button>
                    )}
                </main>
                <section className="h-24 mx-12 pt-4 flex flex-row shadow-inner-top bg-answerix-gray-100 text-answerix-cyan-300">
                    <div className="px-4 flex flex-grow flex-col justify-center items-center">
                        <TagIcon className="h-6 w-6" />
                        <p className="text-xs font-bold text-center">{subType}</p>
                    </div>
                </section>
            </animated.div>
        </animated.div>
    );
};

export default Card;
