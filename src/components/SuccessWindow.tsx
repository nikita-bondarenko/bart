import React, {useEffect} from 'react';
import {gsap} from "gsap";


type SuccessWindowProps = {
    isOpen: boolean
}


const SuccessWindow = ({isOpen}: SuccessWindowProps) => {

    const tl = gsap.timeline({paused: true})
    tl.to('.success-window', {duration: 1, opacity: 1, backdropFilter: "blur(10px)"})
    tl.to('.success-window__body', {duration: 1, opacity: 1, left: '50%', pointerEvents: 'auto'})
    const open = () => {
        tl.play()
    }

    const close = () => {
        tl.reverse()
    }

    useEffect(() => {

        if (!!isOpen) {
            open()
            return () => {
                close()
            }
        }
    }, [isOpen])

    return (
        <div className={'success-window'}>
            <div className={'success-window__wrapper'}>
                <div className="success-window__body">
                    <button onClick={close} className="success-window__close close">
                        <svg className={'close__icon'}>
                            <use xlinkHref={'/images/svg/sprite.svg#close'}></use>
                        </svg>
                    </button>
                    <svg className={'success-window__logo'}>
                        <use xlinkHref="/images/svg/sprite.svg#logo"></use>
                    </svg>
                    <h2 className="success-window__title">Спасибо!</h2>
                    <p className="success-window__text">В ближайшее время с вами свяжется менеджер!</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessWindow;