"use client"

import Link from 'next/link';
import Image from 'next/image';
import scss from "./page.module.scss";
import About from "/components/contents/about.js"
import Story from "/components/contents/story.js"
import Portfolio from "/components/contents/portfolio.js"
import ContactUs from "/components/contents/contact_us.js"
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

export default function Home() {
    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('swiperprogress', (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current.addEventListener('swiperslidechange', (e) => {
            console.log('slide changed');
        });
    }, []);

    return (
        <swiper-container ref={swiperElRef} slides-per-view="1" navigation="true" pagination="true">
            <swiper-slide>
                <div className={scss.content_wrap}>
                    <About />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className={scss.content_wrap}>
                    <Story />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className={scss.content_wrap}>
                    <Portfolio />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className={scss.content_wrap}>
                    <ContactUs />
                </div>
            </swiper-slide>
        </swiper-container>
    );
}
