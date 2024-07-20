import Image from 'next/image';
import scss from "./portfolio.module.scss";
import { useEffect, useState, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { InView } from "react-intersection-observer";
import data from "../data.json";

export default function Portfolio(props) {
    const slideLoading = props.slideLoadingIs
    const pathname = usePathname();
    const [onPf,setOnPf] = useState(0);
    const [activePf,setActiviePf] = useState(0);
    const [pfYears,setPfYears] = useState();
    const pfLength = data["portfolio"].length;
    const portfolioRef = useRef();
    const distWrapRef = useRef();

    useEffect(() => {
        const portfolio = portfolioRef.current;
        const distWrap = distWrapRef.current;
        const dist = distWrap.querySelectorAll("div");

        portfolio.addEventListener("scroll",function() {
            //console.log(this.scrollTop)

            dist.forEach((element,i) => {
                if(dist[i].offsetTop <= portfolio.scrollTop) {
                    console.log(i)
                    setOnPf(i)
                    setActiviePf(i)
                }
            });
        })

        // const observer = new IntersectionObserver((entries, observer) => {
        //     entries.forEach((entry,idx) => {
        //         console.log(entry.target.getAttribute("data-key")) // entry is 'IntersectionObserverEntry'

        //         setOnPf(entry.target.getAttribute("data-key"))
        //         setActiviePf(entry.target.getAttribute("data-key"))
        //     })
        // });

        // dist.forEach((section) => {
        //     observer.observe(section);
        // });
        
    },[slideLoading,pathname]);

    return(
        <section id={scss.portfolio} className={scss.content} ref={portfolioRef}>
            <h2>Portfolio</h2>
            <div className={scss.pf_year}>{pfYears}</div>
            <div className={scss.pf_summary} style={{"transform":`translateY(-${144*activePf}px)`}}>
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
            <ul className={scss.pf_detail}>
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
                                        {(()=> {
                                            if(b.specialNote) {
                                                return(
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
                                                    </tr>
                                                )
                                            }
                                        })}
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
            </div>
        </section>
    )
}