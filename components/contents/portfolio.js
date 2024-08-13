import Image from 'next/image';
import scss from "./portfolio.module.scss";
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { InView } from "react-intersection-observer";
import data from "../data.json";

export default function Portfolio() {
    const pathname = usePathname();
    const [onPf,setOnPf] = useState(0);
    const [activePf,setActiviePf] = useState(0);
    const [pfYears,setPfYears] = useState();
    const pfLength = data["portfolio"].length;
    const portfolioRef = useRef();
    const pfSummaryRef = useRef();
    const pfDetailRef = useRef();
    const [pfsMoveTop,setPfsMoveTop] = useState(0);
    const distWrapRef = useRef();

    useEffect(() => {
        const portfolio = portfolioRef.current;
        const pfSummary = pfSummaryRef.current;
        const pfDetail = pfDetailRef.current;
        const distWrap = distWrapRef.current;
        const dist = distWrap.querySelectorAll("div");

        setPfsMoveTop(window.getComputedStyle(pfSummary).getPropertyValue("--pfs-move-top"))
        setPfYears(data["portfolio"][0].year)

        portfolio.addEventListener("scroll",function() {
            //console.log(this.scrollTop)

            dist.forEach((element,i) => {
                if(dist[i].offsetTop <= portfolio.scrollTop && i <= pfLength-1) {
                    setOnPf(i)
                    setActiviePf(i)
                    setPfYears(data["portfolio"][i].year)
                }
            });
        })

        pfDetail.addEventListener("wheel",function(e) {
            portfolio.scrollTop += ((e.deltaY*2)/3)
            //console.log(e.deltaY+" , "+e.deltaMode)
        })

        window.addEventListener("resize",function() {
            setPfsMoveTop(window.getComputedStyle(pfSummary).getPropertyValue("--pfs-move-top"))
        })

        if(pathname != "/portfolio") {
            portfolio.scrollTop = 0
            setOnPf(0)
            setActiviePf(0)
            setPfYears(data["portfolio"][0].year)
        }
    },[pathname]);

    return(
        <section id={scss.portfolio} className={scss.content} ref={portfolioRef}>
            <h2>Portfolio</h2>
            <div className={scss.pf_year}>{pfYears}</div>
            <div className={scss.pf_summary} style={{"transform":`translateY(calc(-${pfsMoveTop} * ${activePf}))`}} ref={pfSummaryRef}>
                <ul>
                    {data["portfolio"].map(function(a,i) {
                        return(
                            <li key={i} className={`${i <= onPf ? scss["on"] : ""} ${i == activePf ? scss["active"] : ""}`}>
                                <i className={scss.bullet}></i>
                                <div className={scss.trems}>{a.terms}</div>
                                <div className={scss.project_name}>{a.projectName}</div>
                            </li>
                        )
                    })}
                </ul>
                <div className={scss.gauge}>
                    <div className={scss.bar} style={{"height":(activePf/(pfLength-1))*100+"%"}}></div>
                </div>
            </div>
            <ul className={scss.pf_detail} ref={pfDetailRef}>
                {data["portfolio"].map((b,j)=> {
                    return(
                        <li key={j} className={j == activePf  ? scss["active"] : ""}>
                            <div className={scss.screenshot}>
                                <Image src={`/images/portfolio/${b.screenshotImg}`} alt="" width={1920} height={1345} />
                            </div>
                            <div className={scss.project_info}>
                                <h3>{b.url ? <a href={b.url} target="_blank" title="새 창 열림">{b.projectName}</a> : b.projectName}</h3>
                                <table>
                                    <caption>프로젝트 상세 정보</caption>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{b.category} 기간</th>
                                            <td>{b.terms}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">고객사</th>
                                            <td>{b.client}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">포지션</th>
                                            <td>{b.position}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">참여도</th>
                                            <td className={scss.participation}>
                                                <div className={scss.gauge}>
                                                    <div className={scss.bar} style={{"width":b.contribution}}>{b.contribution}</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용 스킬</th>
                                            <td>{b.useSkill}</td>
                                        </tr>
                                        {b.specialNote ? 
                                            <tr>
                                                <th scope="row">특이사항</th>
                                                <td>
                                                    <ul className={scss.special_note}>
                                                        {b["specialNote"].map((c,k) => {
                                                            return(
                                                                <li key={k}>{c}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                </td>
                                            </tr> : ""}
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className={scss.pf_dist_wrap} ref={distWrapRef}>
                {data["portfolio"].map((c,k)=> {
                    return(
                        <div className={scss.pf_dist} key={k}></div>
                    )
                })}
                <div className={scss.pf_dist}></div>
                <div className={scss.pf_dist}></div>
            </div>
        </section>
    )
}