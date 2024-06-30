import Image from 'next/image';
import scss from "./portfolio.module.scss";
import { register } from 'swiper/element/bundle';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

register()

export default function Portfolio(props) {
    const slideLoading = props.slideLoadingIs
    const pathname = usePathname();

    useEffect(() => {
        if(slideLoading) {
            const swiperPortfolioSummary = document.querySelector('swiper-container.pf_summary_slide');
            const params = {
                direction: "vertical",
                mousewheel: true,
                slidesPerView: "auto",
                watchSlidesProgress: true
            }

            Object.assign(swiperPortfolioSummary, params)

            swiperPortfolioSummary.initialize();

            if(pathname != "/story") {
                swiperPortfolioSummary.swiper.slideTo(0)
            }
        }
    },[slideLoading,pathname]);

    return(
        <section id={scss.portfolio} className={scss.content}>
            <h2>Portfolio</h2>
            <div className={scss.pf_year}>2023</div>
            <div className={scss.pf_summary}>
                <swiper-container class="pf_summary_slide" init={false}>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2023">
                            <i className={scss.bullet}></i>
                            <div className={scss.trems}>2023년 10월 ~ 2024년 2월</div>
                            <div className={scss.project_name}>한화 큐셀 발전소 관리 플랫폼 신규 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2023">
                            <i className={scss.bullet}></i>
                            <div className={scss.trems}>2023년 7월 ~ 9월</div>
                            <div className={scss.project_name}>LG Global Sustainability 마이크로 사이트 리뉴얼</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2023">
                            <div className={scss.trems}>2023년 2월 ~ 6월</div>
                            <div className={scss.project_name}>효성중공업 웹사이트 리뉴얼</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2022">
                            <div className={scss.trems}>2022년 7월 ~ 10월</div>
                            <div className={scss.project_name}>HL Mando 웹사이트 신규 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2022">
                            <div className={scss.trems}>2022년 6월</div>
                            <div className={scss.project_name}>LG Open Source 사이트 리뉴얼</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2022">
                            <div className={scss.trems}>2022년 4월 ~ 5월</div>
                            <div className={scss.project_name}>삼성카드 쇼핑몰&amp;복지몰 웹사이트 리뉴얼</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2022">
                            <div className={scss.trems}>2022년 2월 ~ 3월</div>
                            <div className={scss.project_name}>호텔관리프로그램 PMS 3.5 웹솔루션 제작</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2022">
                            <div className={scss.trems}>2021년 12월 ~ 2022년 1월</div>
                            <div className={scss.project_name}>LG CES 2022 웹사이트 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2021">
                            <div className={scss.trems}>2021년 6월 ~ 11월</div>
                            <div className={scss.project_name}>국립국어원 용어 구축 시스템 신규 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2021">
                            <div className={scss.trems}>2021년 3월 ~ 5월</div>
                            <div className={scss.project_name}>신세계백화점 과학관(넥스페리움) 웹사이트(PC,Mobile) 신규 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2020">
                            <div className={scss.trems}>2020년 8월 ~ 2021년 1월</div>
                            <div className={scss.project_name}>LECS(유니클로,칠성몰,무인양품,더콘란샵) 통합 운영</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2020">
                            <div className={scss.trems}>2020년 4월 ~ 2020년 8월</div>
                            <div className={scss.project_name}>삼성물산 래미안 웹사이트(PC,Mobile) 리뉴얼</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2019">
                            <div className={scss.trems}>2019년 7월 ~ 8월</div>
                            <div className={scss.project_name}>AOS VDR 웹솔루션 리뉴얼</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2019">
                            <div className={scss.trems}>2019년 6월</div>
                            <div className={scss.project_name}>리걸서치(LegalSearch) 사이트(PC,Mobile) 신규 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2019">
                            <div className={scss.trems}>2019년 4월 ~ 5월</div>
                            <div className={scss.project_name}>DataTech 사이트 신규 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2019">
                            <div className={scss.trems}>2019년 1월 ~ 2월</div>
                            <div className={scss.project_name}>리걸테크(LegalTech) 사이트 리뉴얼</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2018">
                            <div className={scss.trems}>2018년 7월 ~ 8월</div>
                            <div className={scss.project_name}>AOS VDR 웹솔루션 소개 사이트 신규 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2018">
                            <div className={scss.trems}>2018년 4월 ~ 5월</div>
                            <div className={scss.project_name}>변호사님닷컴 사이트(PC,Mobile,Web App) 신규 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2018">
                            <div className={scss.trems}>2018년 2월 ~ 3월</div>
                            <div className={scss.project_name}>APIbank(AP 거래소) 사이트(PC,Mobile) 신규 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2017">
                            <div className={scss.trems}>2017년 1월 ~ 2018년 1월</div>
                            <div className={scss.project_name}>T 다이렉트샵 웹사이트(PC,Mobile) 운영</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2016">
                            <div className={scss.trems}>2016년 9월 ~ 12월</div>
                            <div className={scss.project_name}>현대캐피탈 웹사이트(PC) 프로토타이핑,UI/UX R&amp;D</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2016">
                            <div className={scss.trems}>2016년 2월 ~ 5월</div>
                            <div className={scss.project_name}>한화생명 인터넷보험 온슈어 사이트(Mobile) 신규 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2015">
                            <div className={scss.trems}>2015년 1월 ~ 12월</div>
                            <div className={scss.project_name}>1300k 쇼핑몰(PC,Mobile) 운영</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2014">
                            <div className={scss.trems}>2014년 10월 ~ 12월</div>
                            <div className={scss.project_name}>지니빌더(홈페이지 빌더) 웹솔루션 제작</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2014">
                            <div className={scss.trems}>2014년 8월 ~ 9월</div>
                            <div className={scss.project_name}>Rise Investment 웹사이트(PC) 신규 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2014">
                            <div className={scss.trems}>2014년 7월</div>
                            <div className={scss.project_name}>디지털파빌리온 웹사이트(PC) 웹접근성 개선</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2014">
                            <div className={scss.trems}>2014년 5월 ~ 6월</div>
                            <div className={scss.project_name}>LG G3 Global 웹사이트(PC,Mobile) 신규 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2013">
                            <div className={scss.trems}>2013년 11월 ~ 12월</div>
                            <div className={scss.project_name}>고려사이버대학교 홈페이지 리뉴얼</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2013">
                            <div className={scss.trems}>2013년 10월</div>
                            <div className={scss.project_name}>해양생물연구센터 웹사이트(PC) 신규 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2013">
                            <div className={scss.trems}>2013년 9월</div>
                            <div className={scss.project_name}>아쿠아리움 개발사업(PC) 웹사이트 신규 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2013">
                            <div className={scss.trems}>2013년 4월 ~ 6월</div>
                            <div className={scss.project_name}>디큐브시티 사이트(PC,Mobile) 리뉴얼</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2013">
                            <div className={scss.trems}>2013년 3월</div>
                            <div className={scss.project_name}>(주)동진레저(주)블랙야크 사이트(PC,Mobile) 리뉴얼</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2012">
                            <div className={scss.trems}>2012년 9월 ~ 10월</div>
                            <div className={scss.project_name}>SKT 이메일 청구서 페이지 퍼블리싱</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2012">
                            <div className={scss.trems}>2012년 2월 ~ 7월</div>
                            <div className={scss.project_name}>신라인터넷면세점 사이트(PC) 운영</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2012">
                            <div className={scss.trems}>2012년 1월</div>
                            <div className={scss.project_name}>투니랜드 케로로팡팡 게임사이트(PC) 신규 구축</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2011">
                            <div className={scss.trems}>2011년 10월 ~ 11월</div>
                            <div className={scss.project_name}>금천구청 및 산하기관 웹사이트(PC) 리뉴얼</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2011">
                            <div className={scss.trems}>2011년 8월 ~ 9월</div>
                            <div className={scss.project_name}>문화재보호재단 웹사이트(PC) 리뉴얼</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2011">
                            <div className={scss.trems}>2011년 7월 ~ 9월</div>
                            <div className={scss.project_name}>부천시청 산하기관 웹사이트(PC) 리뉴얼</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_summary_cont} data-year="2009">
                            <div className={scss.trems}>2009년 2월 ~ 3월</div>
                            <div className={scss.project_name}>은평인터넷방송국 사이트(PC) 리뉴얼</div>
                        </div>
                    </swiper-slide>
                </swiper-container>
            </div>
            <div className={scss.pf_detail}>
                <swiper-container class="pf_detail_slide" init={false}>
                    <swiper-slide>
                        <div className={`${scss.pf_detail_cont} ${scss.active}`}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_202310-202402_hanhwaqsell.jpg" alt="" width={1920} height={1345} />
                            </div>
                            <div className={scss.project_info}>
                                <h3>한화 큐셀 발전소 관리 플랫폼 신규 구축</h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2023년 10월 ~ 2024년 2월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>한화 큐셀</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"60%"}}>60%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS3, ECMAScript6(ES6)</td>
                                        </tr>
                                        {/* <tr>
                                            <th scope="row">특이사항</th>
                                            <td></td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_202307-09_lg_sustainability.jpg" alt="" width={1920} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://www.lg.com/global/sustainability/" target="_blank" title="새 창으로 열림">LG Global Sustainability 마이크로 사이트 리뉴얼</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2023년 7월 ~ 9월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>LG전자</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS3, ECMAScript6(ES6), 반응형웹</td>
                                        </tr>
                                        {/* <tr>
                                            <th scope="row">특이사항</th>
                                            <td></td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_202302-06_hyosunghi.jpg" alt="" width={1920} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://www.hyosungheavyindustries.com/kr" target="_blank" title="새 창으로 열림">효성중공업 웹사이트 리뉴얼</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2023년 2월 ~ 6월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>효성중공업</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"70%"}}>70%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS3, jQuery, 반응형웹</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">특이사항</th>
                                            <td className={scss.special_note}>
                                                <ul>
                                                    <li>2023년 웹어워드코리아 대기업종합분야 최우수상</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_202207-10_hlmando.jpg" alt="" width={1920} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://hlmando.com/ko/main.do" target="_blank" title="새 창으로 열림">HL Mando 웹사이트 신규 구축</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2022년 7월 ~ 10월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>HL Mando Corp</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"80%"}}>80%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS3, jQuery, 반응형웹</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">특이사항</th>
                                            <td className={scss.special_note}>
                                                <ul>
                                                    <li>2022 웹어워드 코리아 기업브랜드분야 최우수상</li>
                                                    <li>WebWatch 웹접근성 인증마크 획득</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_202206_lg_opensource.jpg" alt="" width={1920} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://opensource.lge.com/" target="_blank" title="새 창으로 열림">LG Open Source 사이트 리뉴얼</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2022년 6월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>LG전자</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS3, jQuery, 반응형웹</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_202204-05_samsungcard.jpg" alt="" width={1920} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://shopping.samsungcard.com/" target="_blank" title="새 창으로 열림">삼성카드 쇼핑몰&amp;복지몰 웹사이트 리뉴얼</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2022년 4월 ~ 5월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>삼성카드</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>서브 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"25%"}}>25%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS3, jQuery, 반응형웹</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_202202-03_pmsv35.jpg" alt="" width={1920} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://seungill-lee.github.io/PMS-v3.5/html/reservation.html" target="_blank" title="새 창으로 열림">호텔관리프로그램 PMS 3.5 웹솔루션 제작</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2022년 2월 ~ 3월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>코디더매니저</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS3, jQuery, 반응형웹</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_202112-202201_lgces2022.jpg" alt="" width={1280} height={720} />
                            </div>
                            <div className={scss.project_info}>
                                <h3>LG CES 2022 웹사이트 구축</h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2021년 12월 ~ 2022년 1월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>LG Display</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS3, jQuery, 반응형웹</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_202106-11_koreanterms.jpg" alt="" width={1920} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://koreanterms.korean.go.kr:8811/" target="_blank" title="새 창으로 열림">국립국어원 용어 구축 시스템 신규 구축</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2021년 6월 ~ 11월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>국립국어원</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS3, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_202103-05_nexperium.jpg" alt="" width={1920} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://www.shinsegae.com/science/index.do" target="_blank" title="새 창으로 열림">신세계백화점 과학관(넥스페리움) 웹사이트(PC,Mobile) 신규 구축</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2021년 3월 ~ 5월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>신세계백화점</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"95%"}}>95%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS3, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_202008-202101_lecs.jpg" alt="" width={936} height={700} />
                            </div>
                            <div className={scss.project_info}>
                                <h3>LECS(<a href="https://store-kr.uniqlo.com/" target="_blank" title="새 창으로 열림">유니클로</a>,<a href="https://mall.lottechilsung.co.kr/" target="_blank" title="새 창으로 열림">칠성몰</a>,<a href="http://www.mujikorea.net/" target="_blank" title="새 창으로 열림">무인양품</a>,<a href="https://www.conranshop.kr/" target="_blank" title="새 창으로 열림">더콘란샵</a>) 통합 운영</h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">운영 기간</th>
                                            <td>2020년 8월 ~ 2021년 1월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>롯데e커머스</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"99%"}}>99%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS3, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_202004-202008_raemian.jpg" alt="" width={1920} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://www.raemian.co.kr/main.do" target="_blank" title="새 창으로 열림">삼성물산 래미안 웹사이트(PC,Mobile) 리뉴얼</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2020년 4월 ~ 2020년 8월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>삼성물산</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"65%"}}>65%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS3, jQuery</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">특이사항</th>
                                            <td className={scss.special_note}>
                                                <ul>
                                                    <li>2020 웹어워드 코리아 건설브랜드분야 최우수상</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201907-08_aos_vdr.jpg" alt="" width={800} height={544} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://vdr.legaltech.kr/" target="_blank" title="새 창으로 열림">AOS VDR 웹솔루션 리뉴얼</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2019년 7월 ~ 8월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>AOS Company</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS3</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201906_legalsearch.jpg" alt="" width={1920} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://legalsearch.kr/" target="_blank" title="새 창으로 열림">리걸서치(LegalSearch) 사이트(PC,Mobile) 신규 구축</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2019년 6월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>리걸테크</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS3, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201904_datatech.jpg" alt="" width={1920} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://www.datatech.com/" target="_blank" title="새 창으로 열림">DataTech 사이트 신규 구축</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2019년 4월 ~ 5월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>AOS Company</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery, 반응형웹, 워드프레스</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201901-02_legaltech.jpg" alt="" width={1920} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://legaltech.co.kr/" target="_blank" title="새 창으로 열림">리걸테크(LegalTech) 사이트 리뉴얼</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2019년 1월 ~ 2월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>리걸테크</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery, 반응형웹, 워드프레스</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201807-08_aos_vdr.jpg" alt="" width={800} height={544} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://legaltechvdr.com/" target="_blank" title="새 창으로 열림">AOS VDR 웹솔루션 소개 사이트 신규 구축</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2018년 7월 ~ 8월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>리걸테크</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery, 반응형웹, 워드프레스</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201804-05_byunhosanim.jpg" alt="" width={1100} height={620} />
                            </div>
                            <div className={scss.project_info}>
                                <h3>변호사님닷컴 사이트(PC,Mobile,Web App) 신규 구축</h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2018년 4월 ~ 5월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>리걸테크</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">특이사항</th>
                                            <td className={scss.special_note}>
                                                <ul>
                                                    <li>디지틀조선일보 앱어워드코리아 2018 &ldquo;올해의 앱&rdquo;으로 선정</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201802-03_apibank.jpg" alt="" width={1920} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://www.apibank.jp/ApiBank/main" target="_blank" title="새 창으로 열림">APIbank(AP 거래소) 사이트(PC,Mobile) 신규 구축</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2018년 2월 ~ 3월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>AOS Company</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_2017_twordshop.jpg" alt="" width={660} height={660} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://shop.tworld.co.kr" target="_blank" title="새 창으로 열림">T 다이렉트샵 웹사이트(PC,Mobile) 운영</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">운영 기간</th>
                                            <td>2017년 1월 ~ 2018년 1월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>SK텔레콤</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>서브 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"33%"}}>33%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201609-12_hyundaicapital.jpg" alt="" width={1920} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://www.hyundaicapital.com/" target="_blank" title="새 창으로 열림">현대캐피탈 웹사이트(PC) 프로토타이핑,UI/UX R&amp;D</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2016년 9월 ~ 12월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>현대캐피탈</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"95%"}}>95%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201602-05_onsure.jpg" alt="" width={768} height={512} />
                            </div>
                            <div className={scss.project_info}>
                                <h3>한화생명 인터넷보험 온슈어 사이트(Mobile) <br />신규 구축</h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2016년 2월 ~ 5월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>한화생명</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"75%"}}>75%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_2015_1300k.jpg" alt="" width={740} height={1115} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://www.1300k.com/" target="_blank" title="새 창으로 열림">1300k 쇼핑몰(PC,Mobile) 운영</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">운영 기간</th>
                                            <td>2015년 1월 ~ 12월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>1300k</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>서브 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"60%"}}>60%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201410-12_geniebuiler.jpg" alt="" width={1500} height={1100} />
                            </div>
                            <div className={scss.project_info}>
                                <h3>지니빌더(홈페이지 빌더) 웹솔루션 제작</h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2014년 10월 ~ 12월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>크로시스(주)</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery, 반응형웹</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201410-12_riseinvestment.jpg" alt="" width={740} height={537} />
                            </div>
                            <div className={scss.project_info}>
                                <h3>Rise Investment 웹사이트(PC) 신규 구축</h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2014년 8월 ~ 9월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>라이즈인베스트</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201407_digitalpavilion.jpg" alt="" width={1060} height={807} />
                            </div>
                            <div className={scss.project_info}>
                                <h3>디지털파빌리온 웹사이트(PC) 웹접근성 개선</h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2014년 7월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>누리꿈스퀘어</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">특이사항</th>
                                            <td className={scss.special_note}>
                                                <ul>
                                                    <li>한국웹접근성인증평가원 웹접근성 인증마크 획득</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201405-06_lg_g3.jpg" alt="" width={880} height={544} />
                            </div>
                            <div className={scss.project_info}>
                                <h3>LG G3 Global 웹사이트(PC,Mobile) 신규 구축</h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2014년 5월 ~ 6월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>LG전자</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>서브 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"45%"}}>45%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201311-201312_cuk.jpg" alt="" width={1394} height={790} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://www.cuk.edu/index.do" target="_blank" title="새 창으로 열림">고려사이버대학교 홈페이지 리뉴얼</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2013년 11월 ~ 12월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>고려대학교</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>서브 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"33%"}}>33%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery, 반응형웹</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201310_hmbrc.jpg" alt="" width={1920} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://www.hmbrc.co.kr/home/63HMBRC/index.jsp" target="_blank" title="새 창으로 열림">해양생물연구센터 웹사이트(PC) 신규 구축</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2013년 10월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>한화 호텔&amp;리조트</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"70%"}}>70%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201309_aquazium.jpg" alt="" width={1920} height={805} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://www.aquazium.co.kr/home/63AQUAZIUM/index.jsp" target="_blank" title="새 창으로 열림">아쿠아리움 개발사업 웹사이트(PC) 신규 구축</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2013년 9월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>한화 호텔&amp;리조트</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"70%"}}>70%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_20130406_dcubecity.jpg" alt="" width={935} height={696} />
                            </div>
                            <div className={scss.project_info}>
                                <h3>디큐브시티 사이트(PC,Mobile) 리뉴얼</h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2013년 4월 ~ 6월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>대성산업</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"90%"}}>90%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201303_blackyak.jpg" alt="" width={996} height={1282} />
                            </div>
                            <div className={scss.project_info}>
                                <h3>(주)동진레저(주)블랙야크 사이트(PC,Mobile) 리뉴얼</h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2013년 3월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>(주)동진레저(주)블랙야크</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"95%"}}>95%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>HTML5, CSS, ECMAScript5(ES5)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201209-10_skt_email.jpg" alt="" width={960} height={1080} />
                            </div>
                            <div className={scss.project_info}>
                                <h3>SKT 이메일 청구서 페이지 퍼블리싱</h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">제작 기간</th>
                                            <td>2012년 9월 ~ 10월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>SK텔레콤</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>XHTML, CSS, ECMAScript5(ES5)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201202-07_shilladfs.jpg" alt="" width={800} height={597} />
                            </div>
                            <div className={scss.project_info}>
                                <h3>신라인터넷면세점 사이트(PC) 운영</h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">운영 기간</th>
                                            <td>2012년 2월 ~ 7월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>(주)호텔신라</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"100%"}}>100%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>XHTML, CSS, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201201_keroro_pangpang.jpg" alt="" width={740} height={407} />
                            </div>
                            <div className={scss.project_info}>
                                <h3>투니랜드 케로로팡팡 게임사이트(PC) 신규 구축</h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">구축 기간</th>
                                            <td>2012년 1월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>CJ E&amp;M</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"95%"}}>95%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>XHTML, CSS, jQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201110-11_geumcheon.jpg" alt="" width={640} height={500} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://www.geumcheon.go.kr/" target="_blank" title="새 창으로 열림">금천구청 및 산하기관 웹사이트(PC) 리뉴얼</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">구축 기간</th>
                                            <td>2011년 10월 ~ 11월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>금천구청</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>서브 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"30%"}}>30%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>XHTML, CSS</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201108-09_chf.jpg" alt="" width={1200} height={885} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://www.chf.or.kr/" target="_blank" title="새 창으로 열림">문화재보호재단 웹사이트(PC) 리뉴얼</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">구축 기간</th>
                                            <td>2011년 8월 ~ 9월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>금천구청</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"75%"}}>75%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>XHTML, CSS</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_201107-09_bucheon.jpg" alt="" width={640} height={515} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="http://www.bucheon.go.kr/" target="_blank" title="새 창으로 열림">부천시청 산하기관 웹사이트(PC) 리뉴얼</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">구축 기간</th>
                                            <td>2011년 7월 ~ 9월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>부천시청</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>PL, 메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"60%"}}>60%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>XHTML, CSS</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={scss.pf_detail_cont}>
                            <div className={scss.screenshot}>
                                <Image src="/images/portfolio/pf_200902-03_ebn.jpg" alt="" width={700} height={394} />
                            </div>
                            <div className={scss.project_info}>
                                <h3><a href="https://www.ebn.go.kr/" target="_blank" title="새 창으로 열림">은평인터넷방송국 사이트(PC) 리뉴얼</a></h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">구축 기간</th>
                                            <td>2009년 2월 ~ 3월</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>은평in미디어</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>메인 퍼블리셔</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":"95%"}}>95%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>XHTML, CSS</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">특이사항</th>
                                            <td className={scss.special_note}>
                                                <ul>
                                                    <li>웹접근성연구소 웹접근성 인증마크 획득</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper-container>
            </div>
        </section>
    )
}