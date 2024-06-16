"use client"

import scss from './header.module.scss'
import { useState, useEffect } from "react";

export default function Header() {
    useEffect(()=> {
        const screenRatio = () => {
            //console.log(window.innerWidth)

            let winWidth = window.innerWidth;
            let winHeight = window.innerHeight;

            document.documentElement.style.setProperty("--screen-ratio",Math.max(winWidth,winHeight)/Math.min(winWidth,winHeight))
        }
        screenRatio();
        window.onresize = screen.onorientationchange = screenRatio

    },[])

    const [enterPage, stateEnterPage] = useState(false)

    return(
        <header id={scss.header} className={enterPage ? scss["on"] : ""}>
            <h1 className="hidden_cont">Seungill&apos;s Portfolio</h1>
            <p className={`${scss.intro} hidden_cont`}>Welcome to my portfolio page.</p>
            <div className={scss.btn_enter}>
                <button type="button" onClick={()=> stateEnterPage(true)} disabled={enterPage ? true : false}>&#123; Enter &#125;</button>
            </div>
        </header>
    )
}