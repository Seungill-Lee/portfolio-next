"use client"

import Lottie from "react-lottie-player";
import lottieJson from "./scrollDownLottie.json";

export default function ScrollDownIcon(props) {
    return (
        <div className={props.className} aria-label={props.alt ? props.alt : "Scroll Down"}>
            <Lottie loop animationData={lottieJson} play={true} />
        </div>
    )
}