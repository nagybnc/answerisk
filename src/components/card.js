import React from "react";
import { animated, to } from "react-spring";

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
    // const { subType, question, answer } = data[i];
    // const [showAnswer, setShowAnswer] = React.useState(false);
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
            </animated.div>
        </animated.div>
    );
};

export default Card;
