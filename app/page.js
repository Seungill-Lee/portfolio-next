import Link from 'next/link';
import Image from 'next/image';
import scss from "./page.module.scss";

export default function Home() {
    return (
        <>
            <section id={scss.about} className={scss.content}>
                <h2>About</h2>
                <div className={scss.about_photo}>
                    <Image src="/images/photo_me.jpg" alt="" width={1100} height={1100} />
                </div>
                <div className={`${scss.profile} ${scss.about_cont} ${scss.on}`}>
                    <h3>프로필</h3>
                    <ul>
                        <li>이름 : 이승일 [李承一, Seungill Lee]</li>
                        <li>생년월일 : 1989년 3월 31일</li>
                        <li>사는곳 : 서울특별시 동작구 노량진동</li>
                        <li>헨드폰 : 010-9907-9415</li>
                        <li>이메일&네이트온 : <a href="mailto:ever9415@nate.com">ever9415@nate.com</a></li>
                        <li>취미 : 유튜브 보기, 게임하기, 음악듣기</li>
                        <li>특기: 홈페이지 만들기, 2D CAD</li>
                        <li>관심사: 부동산, 예적금, 자취용품, 인테리어</li>
                    </ul>
                </div>
                <div className={`${scss.intro} ${scss.about_cont}`}>
                    <h3>자기소개</h3>
                    <div className={scss.intro_inner}>
                        <p>
                            안녕하세요. 웹퍼블리셔&amp;UI개발자 이승일입니다! <br />
                            어렸을 때부터 홈페이지 만들기에 많은 관심이 있었으며 보다 더 멋진 홈페이지를 만들기 위해 웹마스터라는 꿈을 갖게 되었습니다. <br />
                            그 꿈을 이루기 위해 디자인부터 개발까지 모든 분야를 독학하다 보니 웹의 기본 언어인 HTML, CSS, JS를 다루는 일이 제 적성에 가장 잘 맞다는 걸 깨달았습니다.
                        </p>
                        <p>
                            2000년도 후반엔 웹퍼블리셔라는 직업이 생소하였으며 군입대를 앞두고 있었기에 하드코딩 알바생으로 웹퍼블리싱 직군에 입문하였습니다. <br />
                            2010년도부터는 수많은 관공서 사이트들이 웹표준&amp;웹접근성을 의무적으로 지켜야 하는 이슈로 인해 웹퍼블리셔에 대한 수요가 대폭 증가하였으며, <br />
                            덕분에 군대를 전역한 2011년도부터 바로 웹퍼블리싱 스타트업 기업에서 신입 웹퍼블리셔로서의 사회생활에 시작할 수 있게 되었습니다.
                        </p>
                        <p>
                            2011년 웹퍼블리셔 정규직 신입사원으로 사회생활을 시작한 이후 과도한 업무량으로 인한 스트레스나 급여 밀림 이슈로 인해 많은 우여곡절이 있었지만<br />
                            어떻게든 이 업계에서 살아남아야겠다는 의지로 여러 번의 이직과 자기 개발을 통해 한 직군에서 10년 넘게 버텨왔습니다.
                        </p>
                        <p>
                            웹사이트 및 웹 콘텐츠를 제작하고 유지 보수하는 과정에서 웹퍼블리셔의 역할은 매우 중요해지면서 웹퍼블리셔의 수요가 늘어났습니다. <br />
                            IT업계의 고용주분들은 어떻게든 일을 믿고 맡길만한 훌륭한 웹퍼블리셔를 뽑기 위해 많은 투자를 해오셨습니다. <br />
                            그러나 웹퍼블리셔라는 직업의 역사가 짧고, 초반 진입장벽이 낮은 직업이다 보니 수많은 고용주분들께서 물경력자들에게 속아 거짓 인재를 채용하게 되는 상황을 <br />
                            자주 겪어왔으며 이러한 물경력 퍼블리셔들 때문에 지금 이 순간에도 프로젝트 전반적으로 리스크가 커지는 상황이 계속 발생하고 있습니다.
                        </p>
                        <p>
                            이러한 리스크를 줄이고자 요즘엔 대부분의 회사들이 입사지원 자격에서 학력 커트라인을 높이고 입사지원 시 포트폴리오를 첨부를 필수 조건으로 두고 있습니다. <br />
                            덕분에 고등학교 졸업 및 군 전역 직후 쭉 실무만 해온 저로선 예전에 비해 면접을 볼 기회조차 얻기 매우 힘들어진 난감한 상황에 처하게 되었습니다. <br />
                            그래서 이번 기회에 웹퍼블리셔로써 저를 좀 더 제대로 어필하기 위해 홈페이지 형태의 포트폴리오를 제작하게 되었습니다.
                        </p>
                        <p>
                            학력에 대한 고정관념을 타파하고 절박한 심정으로 저에게 믿음을 주신 분들을 위해 저는 항상 성공적인 프로젝트로 보답해 드려왔습니다. <br />
                            그동안 웹사이트 구축 프로젝트 사업을 진행하며 마땅한 사람을 찾아본 적이 없다면 저에게도 한번 기회를 주셨으면 좋겠습니다. <br />
                            기회만 주신다면 기획,디자인,개발 파트와 함께 원활한 협업으로 프로젝트를 성공적으로 완수하겠습니다. <br />
                            연락 기다리겠습니다. 감사합니다.
                        </p>
                    </div>
                </div>
                <div className={`${scss.skill} ${scss.about_cont}`}>
                    <h3>업무스킬</h3>
                    <ul>
                        <li>
                            <div className={scss.cateogry}>Photoshop</div>
                            <div className={scss.gauge}>
                                <div className={scss.bar} style={{"width":"50%"}}>50%</div>
                            </div>
                        </li>
                        <li>
                            <div className={scss.cateogry}>Figma</div>
                            <div className={scss.gauge}>
                                <div className={scss.bar} style={{"width":"25%"}}>25%</div>
                            </div>
                        </li>
                        <li>
                            <div className={scss.cateogry}>HTML&amp;CSS</div>
                            <div className={scss.gauge}>
                                <div className={scss.bar} style={{"width":"95%"}}>95%</div>
                            </div>
                        </li>
                        <li>
                            <div className={scss.cateogry}>DOM Script<br />(ES5~ES6)</div>
                            <div className={scss.gauge}>
                                <div className={scss.bar} style={{"width":"80%"}}>80%</div>
                            </div>
                        </li>
                        <li>
                            <div className={scss.cateogry}>jQuery</div>
                            <div className={scss.gauge}>
                                <div className={scss.bar} style={{"width":"90%"}}>90%</div>
                            </div>
                        </li>
                        <li>
                            <div className={scss.cateogry}>Gulp.js</div>
                            <div className={scss.gauge}>
                                <div className={scss.bar} style={{"width":"35%"}}>35%</div>
                            </div>
                        </li>
                        <li>
                            <div className={scss.cateogry}>SVN&amp;Git</div>
                            <div className={scss.gauge}>
                                <div className={scss.bar} style={{"width":"70%"}}>70%</div>
                            </div>
                        </li>
                        <li>
                            <div className={scss.cateogry}>Wordpress</div>
                            <div className={scss.gauge}>
                                <div className={scss.bar} style={{"width":"30%"}}>30%</div>
                            </div>
                        </li>
                        <li>
                            <div className={scss.cateogry}>React<br />Next.js</div>
                            <div className={scss.gauge}>
                                <div className={`${scss.bar} ${scss.react}`} style={{"width":"40%"}}>40%</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section id={scss.story} className={scss.content}>
                <h2>Story</h2>
                <div className={scss.story_cont}>
                    <div className={scss.sc_inner}>
                        <p>저는 2021년도 부터 자취생활을 시작하였습니다.</p>
                        <p>현재는 노량진 고시촌 근처에서 살고 있습니다.</p>
                    </div>
                </div>
                <div className={scss.story_cont}>
                    <div className={scss.sc_inner}>
                        <p>제가 살고 있는 조그마한 원룸 내부입니다.</p>
                        <p>좁지만 나름의 공간 활용으로 만족할 만한 생활을 하고 있습니다.</p>
                    </div>
                </div>
                <div className={scss.story_cont}>
                    <div className={scss.sc_inner}>
                        <p>저는 주로 고시생들이 이용하는 고시원 식당에서 식사를 합니다.</p>
                        <p>같은 공간에서 밥을 먹고 공부하는 고시원생들을 보면서</p>
                        <p>앞으로 더 열심히 살아가야겠다는 생각이 들곤 합니다.</p>
                    </div>
                </div>
                <div className={scss.story_cont}>
                    <div className={scss.sc_inner}>
                        <p>학창 시절에 공부를 잘하지 못해서 대학 진학을 포기했지만...</p>
                        <p>남들보다 특기가 많은 것도 아니지만...</p>
                    </div>
                </div>
                <div className={scss.story_cont}>
                    <div className={scss.sc_inner}>
                        <p>웹퍼블리싱과 UI개발 만큼은 정말 잘 할 자신이 있습니다.</p>
                        <p>믿고 연락만 주신다면 최고의 결과물로 보답해 드리겠습니다.</p>
                    </div>
                </div>
                <div className={scss.story_cont}>
                    <div className={scss.sc_inner}>
                        <p>제 이야기를 읽어주셔서 감사합니다.</p>
                    </div>
                </div>
            </section>
            <section id={scss.portfolio} className={scss.content}>
                <div className={scss.pf_cont_inner}>
                    <h2>Portfolio</h2>
                    <div className={scss.pf_year}>2023</div>
                    <div className={scss.summary}>
                        <ul>
                            <li data-year="2023" className={`${scss.on} ${scss.active}`}>
                                <i className={scss.bullet}></i>
                                <div className={scss.trems}>2023년 10월 ~ 2024년 2월</div>
                                <div className={scss.project_name}>한화 큐셀 발전소 관리 플랫폼 신규 구축</div>
                            </li>
                            <li data-year="2023">
                                <i className={scss.bullet}></i>
                                <div className={scss.trems}>2023년 7월 ~ 9월</div>
                                <div className={scss.project_name}>LG Global Sustainability 마이크로 사이트 리뉴얼</div>
                            </li>
                            <li data-year="2023">
                                <div className={scss.trems}>2023년 2월 ~ 6월</div>
                                <div className={scss.project_name}>효성중공업 웹사이트 리뉴얼</div>
                            </li>
                            <li data-year="2022">
                                <div className={scss.trems}>2022년 7월 ~ 10월</div>
                                <div className={scss.project_name}>HL Mando 웹사이트 신규 구축</div>
                            </li>
                            <li data-year="2022">
                                <div className={scss.trems}>2022년 6월</div>
                                <div className={scss.project_name}>LG Open Source 사이트 리뉴얼</div>
                            </li>
                            <li data-year="2022">
                                <div className={scss.trems}>2022년 4월 ~ 5월</div>
                                <div className={scss.project_name}>삼성카드 쇼핑몰&amp;복지몰 웹사이트 리뉴얼</div>
                            </li>
                            <li data-year="2022">
                                <div className={scss.trems}>2022년 2월 ~ 3월</div>
                                <div className={scss.project_name}>호텔관리프로그램 PMS 3.5 웹솔루션 제작</div>
                            </li>
                            <li data-year="2022">
                                <div className={scss.trems}>2021년 12월 ~ 2022년 1월</div>
                                <div className={scss.project_name}>LG CES 2022 웹사이트 구축</div>
                            </li>
                            <li data-year="2021">
                                <div className={scss.trems}>2021년 6월 ~ 11월</div>
                                <div className={scss.project_name}>국립국어원 용어 구축 시스템 신규 구축</div>
                            </li>
                            <li data-year="2021">
                                <div className={scss.trems}>2021년 3월 ~ 5월</div>
                                <div className={scss.project_name}>신세계백화점 과학관(넥스페리움) 웹사이트(PC,Mobile) 신규 구축</div>
                            </li>
                            <li data-year="2020">
                                <div className={scss.trems}>2020년 8월 ~ 2021년 1월</div>
                                <div className={scss.project_name}>LECS(유니클로,칠성몰,무인양품,더콘란샵) 통합 운영</div>
                            </li>
                            <li data-year="2020">
                                <div className={scss.trems}>2020년 4월 ~ 2020년 8월</div>
                                <div className={scss.project_name}>삼성물산 래미안 웹사이트(PC,Mobile) 리뉴얼</div>
                            </li>
                            <li data-year="2019">
                                <div className={scss.trems}>2019년 7월 ~ 8월</div>
                                <div className={scss.project_name}>AOS VDR 웹솔루션 리뉴얼</div>
                            </li>
                            <li data-year="2019">
                                <div className={scss.trems}>2019년 6월</div>
                                <div className={scss.project_name}>리걸서치(LegalSearch) 사이트(PC,Mobile) 신규 구축</div>
                            </li>
                            <li data-year="2019">
                                <div className={scss.trems}>2019년 4월 ~ 5월</div>
                                <div className={scss.project_name}>DataTech 사이트 신규 구축</div>
                            </li>
                            <li data-year="2019">
                                <div className={scss.trems}>2019년 1월 ~ 2월</div>
                                <div className={scss.project_name}>리걸테크(LegalTech) 사이트 리뉴얼</div>
                            </li>
                            <li data-year="2018">
                                <div className={scss.trems}>2018년 7월 ~ 8월</div>
                                <div className={scss.project_name}>AOS VDR 웹솔루션 소개 사이트 신규 구축</div>
                            </li>
                            <li data-year="2018">
                                <div className={scss.trems}>2018년 4월 ~ 5월</div>
                                <div className={scss.project_name}>변호사님닷컴 사이트(PC,Mobile,Web App) 신규 구축</div>
                            </li>
                            <li data-year="2018">
                                <div className={scss.trems}>2018년 2월 ~ 3월</div>
                                <div className={scss.project_name}>APIbank(AP 거래소) 사이트(PC,Mobile) 신규 구축</div>
                            </li>
                            <li data-year="2017">
                                <div className={scss.trems}>2017년 1월 ~ 2018년 1월</div>
                                <div className={scss.project_name}>T 다이렉트샵 웹사이트(PC,Mobile) 운영</div>
                            </li>
                            <li data-year="2016">
                                <div className={scss.trems}>2016년 9월 ~ 12월</div>
                                <div className={scss.project_name}>현대캐피탈 웹사이트(PC) 프로토타이핑,UI/UX R&amp;D</div>
                            </li>
                            <li data-year="2016">
                                <div className={scss.trems}>2016년 2월 ~ 5월</div>
                                <div className={scss.project_name}>한화생명 인터넷보험 온슈어 사이트(Mobile) 신규 구축</div>
                            </li>
                            <li data-year="2015">
                                <div className={scss.trems}>2015년 1월 ~ 12월</div>
                                <div className={scss.project_name}>1300k 쇼핑몰(PC,Mobile) 운영</div>
                            </li>
                            <li data-year="2014">
                                <div className={scss.trems}>2014년 10월 ~ 12월</div>
                                <div className={scss.project_name}>지니빌더(홈페이지 빌더) 웹솔루션 제작</div>
                            </li>
                            <li data-year="2014">
                                <div className={scss.trems}>2014년 8월 ~ 9월</div>
                                <div className={scss.project_name}>Rise Investment 웹사이트(PC) 신규 구축</div>
                            </li>
                            <li data-year="2014">
                                <div className={scss.trems}>2014년 7월</div>
                                <div className={scss.project_name}>디지털파빌리온 웹사이트(PC) 웹접근성 개선</div>
                            </li>
                            <li data-year="2014">
                                <div className={scss.trems}>2014년 5월 ~ 6월</div>
                                <div className={scss.project_name}>LG G3 Global 웹사이트(PC,Mobile) 신규 구축</div>
                            </li>
                            <li data-year="2013">
                                <div className={scss.trems}>2013년 11월 ~ 12월</div>
                                <div className={scss.project_name}>고려사이버대학교 홈페이지 리뉴얼</div>
                            </li>
                            <li data-year="2013">
                                <div className={scss.trems}>2013년 10월</div>
                                <div className={scss.project_name}>해양생물연구센터 웹사이트(PC) 신규 구축</div>
                            </li>
                            <li data-year="2013">
                                <div className={scss.trems}>2013년 9월</div>
                                <div className={scss.project_name}>아쿠아리움 개발사업(PC) 웹사이트 신규 구축</div>
                            </li>
                            <li data-year="2013">
                                <div className={scss.trems}>2013년 4월 ~ 6월</div>
                                <div className={scss.project_name}>디큐브시티 사이트(PC,Mobile) 리뉴얼</div>
                            </li>
                            <li data-year="2013">
                                <div className={scss.trems}>2013년 3월</div>
                                <div className={scss.project_name}>(주)동진레저(주)블랙야크 사이트(PC,Mobile) 리뉴얼</div>
                            </li>
                            <li data-year="2012">
                                <div className={scss.trems}>2012년 9월 ~ 10월</div>
                                <div className={scss.project_name}>SKT 이메일 청구서 페이지 퍼블리싱</div>
                            </li>
                            <li data-year="2012">
                                <div className={scss.trems}>2012년 2월 ~ 7월</div>
                                <div className={scss.project_name}>신라인터넷면세점 사이트(PC) 운영</div>
                            </li>
                            <li data-year="2012">
                                <div className={scss.trems}>2012년 1월</div>
                                <div className={scss.project_name}>투니랜드 케로로팡팡 게임사이트(PC) 신규 구축</div>
                            </li>
                            <li data-year="2011">
                                <div className={scss.trems}>2011년 10월 ~ 11월</div>
                                <div className={scss.project_name}>금천구청 및 산하기관 웹사이트(PC) 리뉴얼</div>
                            </li>
                            <li data-year="2011">
                                <div className={scss.trems}>2011년 8월 ~ 9월</div>
                                <div className={scss.project_name}>문화재보호재단 웹사이트(PC) 리뉴얼</div>
                            </li>
                            <li data-year="2011">
                                <div className={scss.trems}>2011년 7월 ~ 9월</div>
                                <div className={scss.project_name}>부천시청 산하기관 웹사이트(PC) 리뉴얼</div>
                            </li>
                            <li data-year="2009">
                                <div className={scss.trems}>2009년 2월 ~ 3월</div>
                                <div className={scss.project_name}>은평인터넷방송국 사이트(PC) 리뉴얼</div>
                            </li>
                        </ul>
                        <div className={scss.gauge}>
                            <div className={scss.bar}></div>
                        </div>
                    </div>
                    <ul className={scss.detail}>
                        <li className={scss.active}>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                    </ul>
                </div>
                <div className={scss.pf_init}>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                    <div className={scss.block}></div>
                </div>
            </section>
            <section id={scss.contact_us} className={scss.content}>
                <h2>Contact Us</h2>
                <form className={scss.sendmail_form}>
                    <input type="hidden" name="contact_number" />
                    <fieldset>
                        <legend>이메일 문의 폼</legend>
                        <div className={`${scss.field} ${scss.username}`}>
                            <label htmlFor="sf_username">이름</label>
                            <input type="text" id="sf_username" name="sf_username" required />
                        </div>
                        <div className={`${scss.field} ${scss.email}`}>
                            <label htmlFor="sf_email">이메일주소</label>
                            <input type="email" id="sf_email" name="sf_email" required />
                        </div>
                        <div className={`${scss.field} ${scss.subject}`}>
                            <label htmlFor="sf_subject">제목</label>
                            <input type="text" id="sf_subject" name="sf_subject" required />
                        </div>
                        <div className={`${scss.field} ${scss.message}`}>
                            <label htmlFor="sf_message">내용</label>
                            <textarea id="sf_message" name="sf_message" cols="30" rows="10" required></textarea>
                        </div>
                        <div className={scss.btn_send}>
                            <button type="submit">Send</button>
                        </div>
                    </fieldset>
                </form>
                <div className={scss.sendmail_result}>
                    <div className={`${scss.sr_message} ${scss.ok}`}>
                        <div className={scss.ico}>
                            <Image src="/images/ico_sendmail_ok.svg" alt="" width={150} height={150} />
                        </div>
                        <p className={scss.message}>
                            메시지를 성공적으로 전송하였습니다. <br />
                            검토 후 빠른 시일내에 답변드리겠습니다.
                        </p>
                        <div className={scss.btn_set}>
                            <button type="button" className={scss.ok}>OK</button>
                        </div>
                    </div>
                    <div className={`${scss.sr_message} ${scss.error}`}>
                        <div className={scss.ico}>
                            <Image src="/images/ico_sendmail_error.svg" alt="" width={150} height={150} />
                        </div>
                        <p className={scss.message}>
                            메시지 전송에 오류가 발생하였습니다. <br />
                            다시 시도해주시기 바랍니다.
                        </p>
                        <div className={scss.btn_set}>
                            <button type="button" className={scss.return}>Return</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
