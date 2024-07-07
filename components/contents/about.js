import Image from 'next/image';
import scss from "./about.module.scss";

export default function About() {
    return(
        <section id={scss.about}>
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
                    <li>이메일 : <a href="mailto:ever9415@nate.com">ever9415@nate.com</a></li>
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
    )
}