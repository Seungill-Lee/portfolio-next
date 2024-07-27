"use client"

import Image from 'next/image';
import scss from "./story.module.scss";
import { register } from 'swiper/element/bundle';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import ScrollDownIcon from '../icons/scrollDownIcon';

register()

export default function Story(props) {
    const slideLoading = props.slideLoadingIs
    const pathname = usePathname();

    useEffect(() => {
        const swiperStory = document.querySelector('swiper-container.story_slide');
        if(slideLoading) {
            swiperStory.style.height = "100vh";
            const params = {
                direction: "vertical",
                mousewheel: true,
                effect:"fade"
            }

            Object.assign(swiperStory, params)

            swiperStory.initialize();

            if(pathname != "/story") {
                swiperStory.swiper.slideTo(0)
            }
        }
        
    },[slideLoading,pathname]);

    return(
        <section id={scss.story}>
            <swiper-container class="story_slide" init={false}>
                <swiper-slide>
                    <div className={`${scss.story_intro}`}>
                        <h2>Story</h2>
                        <div className={scss.scrolldown_guide}>
                            <ScrollDownIcon className={scss.ico_scrolldown} />
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className={`${scss.story_cont} ${scss.sc1}`}>
                        <div className={scss.sc_inner}>
                            <p>저는 2021년도 부터 자취생활을 시작하였습니다.</p>
                            <p>현재는 노량진 고시촌 근처에서 살고 있습니다.</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className={`${scss.story_cont} ${scss.sc2}`}>
                        <div className={scss.sc_inner}>
                            <p>제가 살고 있는 조그마한 원룸 내부입니다.</p>
                            <p>좁지만 나름의 공간 활용으로 만족할 만한 생활을 하고 있습니다.</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className={`${scss.story_cont} ${scss.sc3}`}>
                        <div className={scss.sc_inner}>
                            <p>저는 주로 고시생들이 이용하는 고시원 식당에서 식사를 합니다.</p>
                            <p>같은 공간에서 밥을 먹고 공부하는 고시원생들을 보면서</p>
                            <p>앞으로 더 열심히 살아가야겠다는 생각이 들곤 합니다.</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className={`${scss.story_cont} ${scss.sc4}`}>
                        <div className={scss.sc_inner}>
                            <p>학창 시절에 공부를 잘하지 못해서 대학 진학을 포기했지만...</p>
                            <p>남들보다 특기가 많은 것도 아니지만...</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className={`${scss.story_cont} ${scss.sc5}`}>
                        <div className={scss.sc_inner}>
                            <p>웹퍼블리싱과 UI개발 만큼은 정말 잘 할 자신이 있습니다.</p>
                            <p>믿고 연락만 주신다면 최고의 결과물로 보답해 드리겠습니다.</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className={`${scss.story_cont} ${scss.sc6}`}>
                        <div className={scss.sc_inner}>
                            <p>제 이야기를 읽어주셔서 감사합니다.</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </section>
    )
}