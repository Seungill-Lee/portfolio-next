import Link from 'next/link';
import Image from 'next/image';
import { Alkatra, Noto_Sans_KR } from "next/font/google";
import "./base.scss";
import Gate from "/components/gate.js";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
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
                <Gate />
                {children}
            </body>
        </html>
    );
}
