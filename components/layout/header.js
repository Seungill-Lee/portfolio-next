"use client"

import scss from './header.module.scss'
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"

export default function Header(props) {
    const pathname = usePathname();
    const router = useRouter();
    const slideLoading = props.slideLoadingIs;

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

    const [enterIs , stateEnterIs]  = useState(props.enterIs)

    console.log(pathname)

    return(
        <header id={scss.header} className={slideLoading ? scss["on"] : ""}>
            <h1 className="hidden_cont">Seungill&apos;s Portfolio</h1>
            <p className={`${scss.intro} hidden_cont`}>Welcome to my portfolio page.</p>
            <div className={scss.btn_enter}>
                <button type="button" onClick={()=> {stateEnterIs(true); router.push("/about")}} disabled={slideLoading || enterIs ? true : false}>&#123; Enter &#125;</button>
            </div>
        </header>
    )
}