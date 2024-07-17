import Image from 'next/image';
import scss from "./portfolio.module.scss";
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { InView } from "react-intersection-observer";
import data from "../data.json";

export default function Portfolio(props) {
    const slideLoading = props.slideLoadingIs
    const pathname = usePathname();
    const [pfYears,setPfYears] = useState()

    useEffect(() => {
        
    },[slideLoading,pathname]);

    return(
        <section id={scss.portfolio} className={scss.content}>
            <h2>Portfolio</h2>
            <div className={scss.pf_year}>{pfYears}</div>
            <div className={scss.pf_summary}>
                <ul>
                    {data["portfolio"].map(function(a,i) {
                        return(
                            <li key={i}>
                                <i className={scss.bullet}></i>
                                <div className={scss.trems}>{a.terms}</div>
                                <div className={scss.project_name}>{a.projectName}</div>
                            </li>
                        )
                    })}
                </ul>
                <div className={scss.gauge}>
                    <div className={scss.bar}></div>
                </div>
            </div>
            <ul className={scss.pf_detail}>
                {data["portfolio"].map((b,j)=> {
                    return(
                        <li key={j}>
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
        </section>
    )
}