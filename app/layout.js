import Link from 'next/link';
import Image from 'next/image';
import { Alkatra, Noto_Sans_KR } from "next/font/google";
import "./base.scss";
import scss from "./layout.module.scss";
import Header from "/components/layout/header.js";
import GNB from "/components/layout/gnb.js";

export const metadata = {
    title: "Seungill's Portfolio - 웹퍼블리셔 승일이의 포트폴리오",
    author : [{ name: "이승일 Seungill Lee" }],
    generator : "Next.js",
    description: "웹퍼블리셔 승일이의 포트폴리오(Seungill's Portfolio) 페이지에 오신것을 환영합니다.",
    keywords: ["포트폴리오, Portfolio, 웹퍼블리싱, UI, 웹표준, 웹접근성, HTML, CSS, Javascript, jQuery, Gulp, Github, Wordpress, EmailJS, 승일, 이승일, Seungill, Lee"],
    referrer: "origin-when-cross-origin",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          noimageindex: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
    },
    // verification: {
    //     google: '6d589bbpgf9SE3u5SiquJMJUxRIAm9_Qyd0uCqdZF_o',
    // },
    openGraph: {
        title: "Seungill's Portfolio - 웹퍼블리셔 승일이의 포트폴리오",
        description: "웹퍼블리셔 승일이의 포트폴리오(Seungill's Portfolio) 페이지에 오신것을 환영합니다.",
        // url: process.env.SITE_URL,
        siteName: '웹퍼블리셔 승일이의 포트폴리오',
        // images: [
        //     {
        //         url: process.env.SITE_URL+'/images/photo_og_nextslam.jpg',
        //         width: 1200,
        //         height: 630,
        //     },
        // ],
        locale: 'ko_KR',
        type: 'website',
    }
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
}

export const alkatra = Alkatra({
    subsets: ['latin'],
    display: 'swap',
    variable: '--alkatra',
})
   
export const noto_sans_kr = Noto_Sans_KR({
    subsets: [],
    display: 'swap',
    variable: '--noto-sans-kr',
})

export default function RootLayout({ children }) {
    return (
        <html lang="ko" className={`${alkatra.variable} ${noto_sans_kr.variable}`}>
            <body>
                <Header />
                <GNB />
                <main id={scss.container}>
                    {children}
                </main>
                <footer id={scss.footer}>
                    <p className={scss.copyright}>
                        Copyrightⓒ 2024 <a href="mailto:ever9415@nate.com">Seungill Lee</a>. All right reserved. <br />
                        Powered by <a href="https://github.com/" target="_blank" title="새 창으로 열림">Github</a> and <a href="https://gulpjs.com/" target="_blank" title="새 창으로 열림">Gulp.js.</a> 
                    </p>
                </footer>
            </body>
        </html>
    );
}
