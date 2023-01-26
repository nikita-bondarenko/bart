import React, {useEffect, useState} from 'react';

import gsap from 'gsap'

export type CircleItemProps = {
    className: string,
    title: string,
    text: string
}

const CircleItem = ({className, title, text}: CircleItemProps) => {

    const [tl, setTl] = useState<any>()

    useEffect(() => {

        const tl = gsap.timeline({paused: true})
        const width = document.body.clientWidth
        let titleAnimateOptions = {}
        let textAnimateOptions = {}
        let secondSubtitleAnimateOptions = {}

        if (width < 1280) {

            if (className === 'first') {
                titleAnimateOptions = {duration: 0.5, y: -75}
                textAnimateOptions = {duration: 0.5, y: -79}
            }

            if (className === 'second') {
                titleAnimateOptions = {duration: 0.5, y: -35, x: 50}
                textAnimateOptions = {duration: 0.5, y: -35, x: 65}
            }

            if (className === 'third') {
                titleAnimateOptions = {duration: 0.5, y: -45, x: -30, scale: 0.8}
                textAnimateOptions = {duration: 0.5, y: -45, x: -27}
            }

            if (className === 'fourth') {
                titleAnimateOptions = {duration: 0.5, y: -45, x: 35, scale: 0.8}
                textAnimateOptions = {duration: 0.5, y: -45, x: 21}
            }

            if (className === 'fifth') {
                titleAnimateOptions = {duration: 0.5, y: -50, x: -30}
                textAnimateOptions = {duration: 0.5, y: -50, x: -35}
            }

            tl
                .to(`.circle__item.${className} .circle__wrapper`, {duration: 0.5, y: -5, scale: 1.15}, 0)
                .to(`.circle__item.${className} .circle__content`, {duration: 0.5, scale: 0.9}, 0)
                .to(`.circle__item.${className} .circle__clickable`, {
                    duration: 0.5,
                    boxShadow: '4px 4px 10px rgba(255, 255, 255, 0.4)'
                }, 0)
                .to(`.circle__item.${className} .about__title`, titleAnimateOptions, 0)
                .to(`.circle__item.${className} .about__text`, textAnimateOptions, 0)
                .to(`.circle__item.${className} .about__text`, {duration: 0.5, opacity: 1})
        } else if (width < 1536) {

            if (className === 'first') {
                titleAnimateOptions = {duration: 0.5, y: -117}
                textAnimateOptions = {duration: 0.5, y: -115}
            }

            if (className === 'second') {
                titleAnimateOptions = {duration: 0.5, y: -80, x: 70}
                textAnimateOptions = {duration: 0.5, y: -80, x: 90}
            }

            if (className === 'third') {
                titleAnimateOptions = {duration: 0.5, y: -80, x: -50, scale: 0.8}
                textAnimateOptions = {duration: 0.5, y: -80, x: -23}
                secondSubtitleAnimateOptions = {duration: 0.5,  x: -43}
            }

            if (className === 'fourth') {
                titleAnimateOptions = {duration: 0.5, y: -80, x: 50, scale: 0.8}
                secondSubtitleAnimateOptions = {duration: 0.5,  x: 39}
                textAnimateOptions = {duration: 0.5, y: -80, x: 5}
            }

            if (className === 'fifth') {
                titleAnimateOptions = {duration: 0.5, y: -80, x: -50}
                textAnimateOptions = {duration: 0.5, y: -80, x: -60}
            }

            tl
                .to(`.circle__item.${className} .circle__wrapper`, {duration: 0.5, y: -5, scale: 1.15}, 0)
                .to(`.circle__item.${className} .circle__content`, {duration: 0.5, scale: 0.9}, 0)
                .to(`.circle__item.${className} .circle__clickable`, {
                    duration: 0.5,
                    boxShadow: '4px 4px 10px rgba(255, 255, 255, 0.4)'
                }, 0)
                .to(`.circle__item.${className} .about__title`, titleAnimateOptions, 0)
                .to(`.circle__item.${className} .subtitle__text.second`, secondSubtitleAnimateOptions, 0)
                .to(`.circle__item.${className} .about__text`, textAnimateOptions, 0)
                .to(`.circle__item.${className} .about__text`, {duration: 0.5, opacity: 1})
        } else {
            if (className === 'first') {
                titleAnimateOptions = {duration: 0.5, y: -150}
                textAnimateOptions = {duration: 0.5, y: -150}
            }

            if (className === 'second') {
                titleAnimateOptions = {duration: 0.5, y: -80, x: 130}
                textAnimateOptions = {duration: 0.5, y: -80, x: 147}
            }

            if (className === 'third') {
                titleAnimateOptions = {duration: 0.5, y: -120, x: -70}
                secondSubtitleAnimateOptions = {duration: 0.5,  x: -50}
                textAnimateOptions = {duration: 0.5, y: -120, x: 0}

            }

            if (className === 'fourth') {
                titleAnimateOptions = {duration: 0.5, y: -120, x: 80}
                secondSubtitleAnimateOptions = {duration: 0.5,  x: 43}
                textAnimateOptions = {duration: 0.5, y: -120, x: 11}
            }

            if (className === 'fifth') {
                titleAnimateOptions = {duration: 0.5, y: -80, x: -105}
                textAnimateOptions = {duration: 0.5, y: -80, x: -122}
            }

            tl
                .to(`.circle__item.${className} .circle__wrapper`, {duration: 0.5, y: -5, scale: 1.15}, 0)
                .to(`.circle__item.${className} .circle__content`, {duration: 0.5, scale: 0.9}, 0)
                .to(`.circle__item.${className} .circle__clickable`, {
                    duration: 0.5,
                    boxShadow: '4px 4px 10px rgba(255, 255, 255, 0.8)'
                }, 0)
                .to(`.circle__item.${className} .about__title`, titleAnimateOptions, 0)
                .to(`.circle__item.${className} .subtitle__text.second`, secondSubtitleAnimateOptions, 0)
                .to(`.circle__item.${className} .about__text`, textAnimateOptions, 0)
                .to(`.circle__item.${className} .about__text`, {duration: 0.5, opacity: 1})
        }

        setTl(tl)

    }, [])


    return (
        <div className={"circle__item " + className}>
            <div className={'circle__wrapper'}>
                <div className={'circle__blur'}>
                </div>
                <div onMouseEnter={() => tl.play()} onMouseLeave={() => tl.reverse()} className="circle__clickable">
                </div>
                <div className={'circle__body'}>
                        <svg className={'circle__triangle'} width="100%" height="100%" viewBox="0 0 208 174" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_278_2913)">
                                <path d="M206 32.0634L104.947 172C87.2243 148.705 40.0667 86.2139 2 33.6893C78.704 -22.4046 171.874 5.06943 206 32.0634Z"
                                      fill="white" fillOpacity="0.08"/>
                                <path d="M206 32.0634L104.947 172C87.2243 148.705 40.0667 86.2139 2 33.6893C78.704 -22.4046 171.874 5.06943 206 32.0634Z"
                                      stroke="white" strokeWidth="1.56495"/>
                            </g>
                            <defs>
                                <filter id="filter0_b_278_2913" x="-17.3476" y="-18.0403" width="242.678" height="209.612"
                                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="9.1289"/>
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_278_2913"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_278_2913" result="shape"/>
                                </filter>
                            </defs>
                    </svg>
                    <div className="circle__content">
                        {title.includes('услуги') ? <h2 className="subtitle about__title ">
                            <span className="subtitle__text first">{title.split(' ')[0]}</span> <br/>
                            <span className="subtitle__text second">{title.split(' ')[1]}</span>
                        </h2> : <h2 className="subtitle about__title ">{title}</h2>}
                        {className === "third" || className === "fourth" || className === "fifth" ? <p dangerouslySetInnerHTML={{__html: text}} className="text about__text "></p> : <p className="text about__text ">{text}</p>}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CircleItem;