import React, { useState } from "react";
import Deck from "./components/Deck";
import SettingsModal from "./components/SettingsModal";
import Stopwatch from "./components/Stopwatch";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {isOpen && <SettingsModal setIsOpen={setIsOpen} />}
            <Stopwatch setIsOpen={setIsOpen} />
            <Deck />
        </>
    );
};
export default App;
