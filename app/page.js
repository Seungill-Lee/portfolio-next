"use client"

import Link from 'next/link';
import Image from 'next/image';
import scss from "./page.module.scss";
import About from "/components/contents/about.js"
import Story from "/components/contents/story.js"
import Portfolio from "/components/contents/portfolio.js"
import ContactUs from "/components/contents/contact_us.js"

export default function Home() {
    return (
        <>
            <div className={scss.content_wrap}>
                <About />
            </div>
            <div className={scss.content_wrap}>
                <Story />
            </div>
            <div className={scss.content_wrap}>
                <Portfolio />
            </div>
            <div className={scss.content_wrap}>
                <ContactUs />
            </div>
        </>
    );
}
