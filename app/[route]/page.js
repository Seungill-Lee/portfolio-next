"use client"

import Link from 'next/link';
import Image from 'next/image';
import scss from "./page.module.scss";
import About from "/components/contents/about.js"
import Story from "/components/contents/story.js"
import Portfolio from "/components/contents/portfolio.js"
import ContactUs from "/components/contents/contact_us.js"
import Header from "/components/layout/header.js";
import { useEffect, useState, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import IntroNaviBullet from "/components/layout/introNaviBullet.js";

register();

export default function Intro() {
    const [loadingIs,stateLoadingIs] = useState(false)

    const bulletId = ["about","story","portfolio","contact_us"]
    const bulletTxt = ["About","Story","Portfolio","Contact us"]

    const btnIntroPrev = useRef();
    const btnIntroNext = useRef();

    useEffect(() => {
        const swiperPages = document.querySelector('swiper-container.intro_slide')
        swiperPages.style.height = "100vh"
        const params = {
            slidesPerView: 1,
            history: {
                key:"/"
            },
            navigation: {
                prevEl: btnIntroPrev.current,
                nextEl: btnIntroNext.current,
            },
            pagination: {
                el: "#"+scss['gnb'],
                clickable: true,
                renderBullet: function (index, className) {
                    return '<button type="button" id='+ scss[bulletId[index]] +' class='+ className +'>' + bulletTxt[index] + '</button>';
                },
            }
        }

        Object.assign(swiperPages, params)

        swiperPages.initialize();

        stateLoadingIs(true)
    }, []);

    return (
        <>
            <Header slideLoadingIs={loadingIs} enterIs={true} />
            {/* <GNB /> */}
            <nav id={scss.gnb}>
            </nav>
            <main id={scss.container}>
                <swiper-container class="intro_slide" init={false}>
                    <swiper-slide data-history="about">
                        <div className={scss.content_wrap}>
                            <About />
                        </div>
                    </swiper-slide>
                    <swiper-slide data-history="story">
                        <div className={scss.content_wrap}>
                            <Story slideLoadingIs={loadingIs} />
                        </div>
                    </swiper-slide>
                    <swiper-slide data-history="portfolio">
                        <div className={scss.content_wrap}>
                            <Portfolio />
                        </div>
                    </swiper-slide>
                    <swiper-slide data-history="contact-us">
                        <div className={scss.content_wrap}>
                            <ContactUs />
                        </div>
                    </swiper-slide>
                </swiper-container>
                <div className={scss.intro_navi}>
                    <button type="button" className={scss.btn_prev} ref={btnIntroPrev}><IntroNaviBullet shape="Prev" /></button>
                    <button type="button" className={scss.btn_next} ref={btnIntroNext}><IntroNaviBullet shape="Next" /></button>
                </div>
            </main>
        </>
    );
}
