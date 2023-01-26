import React, {createRef, useEffect, useState} from 'react';


type AnimationProps = {
    onAnimationEnded: () => void
}
const Animation = ({onAnimationEnded}: AnimationProps) => {

    const [videoPath, setVideoPath] = useState<string>('')
    const [isVideoEnded, setIsVideoEnded] = useState<boolean>(false)

    const ref = createRef<HTMLDivElement>()

    useEffect(() => {
        const width = ref.current?.clientWidth
        let video: string = ''
        if (!!width) {

            if ( width < 480) {
                video = '/video/bArt_geome_720х480_x264.mp4'
            } else if (width < 1024){
                video = '/video/bArt_geome_720х480_x264.mp4'
            } else {
                video = '/video/animation-1920px.mp4'
            }
        }


        setVideoPath(video)
    }, [])

    useEffect(() => {
        if (
            isVideoEnded === true
        ) {
            onAnimationEnded()
        }

    }, [isVideoEnded])

    return (
        <div ref={ref} className={'animation'}>
            <div className={'video'}>
                <video onEnded={() => setIsVideoEnded(true)} className={'video__media'} src={videoPath}
                       autoPlay={true}
                       muted={true}>
                </video>
            </div>
        </div>

    );
};

export default Animation;