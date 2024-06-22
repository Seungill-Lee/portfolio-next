"use client"

import Link from 'next/link';
import scss from './gnb.module.scss'
import { useRouter } from 'next/navigation';

export default function GNB() {
    const router = useRouter()

    return(
        <nav id={scss.gnb}>
            <ul>
                <li className={scss.about}><Link href="/about">About</Link></li>
                <li className={scss.story}><Link href="/story">Story</Link></li>
                <li className={scss.portfolio}><Link href="/portfolio">Portfolio</Link></li>
                <li className={scss.contact_us}><Link href="/contact-us">Contact Us</Link></li>
            </ul>
        </nav>
    )
}