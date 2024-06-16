import Link from 'next/link';
import scss from './gnb.module.scss'

export default function GNB() {
    return(
        <nav id={scss.gnb}>
            <ul>
                <li className={scss.admin}><Link href="#about">About</Link></li>
                <li className={scss.story}><Link href="#story">Story</Link></li>
                <li className={scss.portfolio}><Link href="#portfolio">Portfolio</Link></li>
                <li className={scss.contact_us}><Link href="#contact_us">Contact Us</Link></li>
            </ul>
        </nav>
    )
}