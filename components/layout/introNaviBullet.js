export default function IntroNaviBullet(props) {
    switch (props.shape) {
        case "Prev":
            return(
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xmlSpace="preserve" aria-label={props.alt ? props.alt : "Prev"}>
                    <polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3  " />
                </svg>
            )
            break;
        case "Next":
            return(
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xmlSpace="preserve" aria-label={props.alt ? props.alt : "Next"}>
                    <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12  " />
                </svg>
            )
            break;
        default:
            break;
    }
}