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
                titleAnimateOptions = {duration: 0.5, y: -32, x: 45}
                textAnimateOptions = {duration: 0.5, y: -35, x: 55}
            }

            if (className === 'third') {
                titleAnimateOptions = {duration: 0.5, y: -45, x: 4, scale: 0.8}
                textAnimateOptions = {duration: 0.5, y: -55, x: -14}
                secondSubtitleAnimateOptions = {duration: 0.5, x: 30, y: -3}
            }

            if (className === 'fourth') {
                titleAnimateOptions = {duration: 0.5, y: -68}
                textAnimateOptions = {duration: 0.5, y: -68, x: -1}
            }

            if (className === 'fifth') {
                titleAnimateOptions = {duration: 0.5, y: -45, x: -15, scale: 0.8}
                textAnimateOptions = {duration: 0.5, y: -54, x: 10}
                secondSubtitleAnimateOptions = {duration: 0.5, x: -23, y: -3}

            }

            if (className === 'sixth') {
                titleAnimateOptions = {duration: 0.5, y: -40, x: -20}
                textAnimateOptions = {duration: 0.5, y: -40, x: -30}
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
                .to(`.circle__item.${className} .subtitle__text.second`, secondSubtitleAnimateOptions, 0)
                .to(`.circle__item.${className} .about__text`, {duration: 0.5, opacity: 1})
        } else if (width < 1536) {

            if (className === 'first') {
                titleAnimateOptions = {duration: 0.5, y: -126}
                textAnimateOptions = {duration: 0.5, y: -135}
            }

            if (className === 'second') {
                titleAnimateOptions = {duration: 0.5, y: -50, x: 70}
                textAnimateOptions = {duration: 0.5, y: -50, x: 108}
            }

            if (className === 'third') {
                titleAnimateOptions = {duration: 0.5, y: -80, x: 3, scale: 0.8}
                textAnimateOptions = {duration: 0.5, y: -93, x: -23}
                secondSubtitleAnimateOptions = {duration: 0.5,  x: 49, y: -3}
            }

            if (className === 'fourth') {
                titleAnimateOptions = {duration: 0.5, y: -100}
                textAnimateOptions = {duration: 0.5, y: -100}
            }

            if (className === 'fifth') {
                titleAnimateOptions = {duration: 0.5, y: -80, x: -24,  scale: 0.8}
                textAnimateOptions = {duration: 0.5, y: -95, x: 10}
                secondSubtitleAnimateOptions = {duration: 0.5,  x: -38, y: -3}
            }
            if (className === 'sixth') {
                titleAnimateOptions = {duration: 0.5, y: -60, x: -30}
                textAnimateOptions = {duration: 0.5, y: -60, x: -70}
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
                titleAnimateOptions = {duration: 0.5, y: -80, x: 120}
                textAnimateOptions = {duration: 0.5, y: -80, x: 143}
            }

            if (className === 'third') {
                titleAnimateOptions = {duration: 0.5, y: -100, x: 47, scale: 0.8}
                secondSubtitleAnimateOptions = {duration: 0.5,  x: 54, y: -5}
                textAnimateOptions = {duration: 0.5, y: -120, x: -30}

            }

            if (className === 'fourth') {
                titleAnimateOptions = {duration: 0.5, y: -50}
                textAnimateOptions = {duration: 0.5, y: -50}
            }

            if (className === 'fifth') {
                titleAnimateOptions = {duration: 0.5, y: -100, x: -85, scale: 0.8}
                textAnimateOptions = {duration: 0.5, y: -120, x: 14}
                secondSubtitleAnimateOptions = {duration: 0.5,  x: -41, y: -5}

            }

            if (className === 'sixth') {
                titleAnimateOptions = {duration: 0.5, y: -80, x: -90}
                textAnimateOptions = {duration: 0.5, y: -80, x: -113}
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
                    <svg className={'circle__triangle'} width="100%" height="100%" viewBox="0 0 406 406" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b_607_4389)">
                            <path d="M2.50476 55.1839L203.06 402.114C244.283 331.657 328.149 184.182 403.396 55.1211C290.852 -10.7264 137.296 -20.5408 2.50476 55.1839Z" fill="white" fill-opacity="0.08"/>
                            <path d="M2.50476 55.1839L203.06 402.114C244.283 331.657 328.149 184.182 403.396 55.1211C290.852 -10.7264 137.296 -20.5408 2.50476 55.1839Z" stroke="white" stroke-width="2.96584"/>
                        </g>
                        <defs>
                            <filter id="filter0_b_607_4389" x="-34.1266" y="-34.0792" width="474.146" height="473.739" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.2982"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_607_4389"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_607_4389" result="shape"/>
                            </filter>
                        </defs>
                    </svg>


                    <div className="circle__content">
                        {title.includes('услуги') ? <h2 className="subtitle about__title ">
                            <span className="subtitle__text first">{title.split(' ')[0]}</span> <br/>
                            <span id={'second-word'} className="subtitle__text second">{title.split(' ')[1]}</span>
                        </h2> : <h2 className="subtitle about__title ">{title}</h2>}
                         <p dangerouslySetInnerHTML={{__html: text}} className="text about__text "></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CircleItem;
