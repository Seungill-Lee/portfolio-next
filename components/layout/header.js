"use client"

import scss from './header.module.scss'
import { Noto_Sans_Mono } from "next/font/google";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"

export const noto_sans_mono = Noto_Sans_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--noto-sans-mono',
})

export default function Header(props) {
    const pathname = usePathname();
    const router = useRouter();
    const slideLoading = props.slideLoadingIs;
    const [vhSetting,completeVhSetting] = useState(false);

    useEffect(()=> {
        if(vhSetting == false) {
            const setVh = () => {
                const vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            };
            setVh();
            window.addEventListener('resize', setVh);
            window.addEventListener('orientationchange', setVh);

            const screenRatio = () => {
                //console.log(window.innerWidth)

                let winWidth = window.innerWidth;
                let winHeight = window.innerHeight;

                document.documentElement.style.setProperty("--screen-ratio",Math.max(winWidth,winHeight)/Math.min(winWidth,winHeight))
            }
            screenRatio();
            window.addEventListener('resize', screenRatio);
            window.addEventListener('orientationchange', screenRatio);

            completeVhSetting(true)
        }

    },[vhSetting])

    const [enterIs , stateEnterIs]  = useState(props.enterIs)

    //console.log(pathname)

    return(
        <header id={scss.header} className={`${slideLoading ? scss["on"] : ""} ${noto_sans_mono.variable}`}>
            <h1 className="hidden_cont">Seungill&apos;s Portfolio</h1>
            <p className={`${scss.intro} hidden_cont`}>Welcome to my portfolio page.</p>
            <div className={scss.btn_enter}>
                <button type="button" onClick={()=> {stateEnterIs(true); router.push("/about")}} disabled={!vhSetting || slideLoading || enterIs ? true : false}>&#123; Enter &#125;</button>
            </div>
        </header>
    )
}