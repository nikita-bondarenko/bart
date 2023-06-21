import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './components/form/Form';
import Main from "./components/Main";
import Animation from "./components/Animation";
import SuccessWindow from "./components/SuccessWindow";

function App() {

    const [isAnimationEnded, setIsAnimationEnded] = useState<boolean>(true)

    const animationHandler =() => {
        setIsAnimationEnded(true)
    }

    return (
        <>
            {/*<Animation onAnimationEnded={animationHandler}></Animation>*/}
            {/*{!isAnimationEnded && window.innerWidth >= 1024 && <Animation onAnimationEnded={animationHandler}></Animation>}*/}
            <Main isAnimationEnded={isAnimationEnded}></Main>

        </>
    );
}

export default App;
