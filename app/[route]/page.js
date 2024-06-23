"use client"

import Link from 'next/link';
import Image from 'next/image';
import scss from "./page.module.scss";
import About from "/components/contents/about.js"
import Story from "/components/contents/story.js"
import Portfolio from "/components/contents/portfolio.js"
import ContactUs from "/components/contents/contact_us.js"
import { useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import Header from "/components/layout/header.js";
import GNB from "/components/layout/gnb.js";

register();

export default function Intro() {
    const [loadingIs,stateLoadingIs] = useState(false)

    const bulletId = ["about","story","portfolio","contact_us"]
    const bulletTxt = ["About","Story","Portfolio","Contact us"]

    useEffect(() => {
        const swiperEl = document.querySelector('swiper-container.intro_slide')
        swiperEl.style.height = "100vh"
        const params = {
            slidesPerView: 1,
            history: {
                key:"/"
            },
            pagination: {
                el: "#"+scss['gnb'],
                clickable: true,
                renderBullet: function (index, className) {
                    return '<button type="button" id='+ scss[bulletId[index]] +' class='+ className +'>' + bulletTxt[index] + '</button>';
                },
            },
        }

        Object.assign(swiperEl, params)

        swiperEl.initialize();

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
                            <Story />
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
            </main>
        </>
    );
}
