import dayjs from 'dayjs';

export default function sitemap() {
    return [
        {
            url: 'https://seungill-lee.vercel.app/',
            lastModified: dayjs().format("YYYY-MM-DD"),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://seungill-lee.vercel.app/about/',
            lastModified: dayjs().format("YYYY-MM-DD"),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://seungill-lee.vercel.app/story/',
            lastModified: dayjs().format("YYYY-MM-DD"),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://seungill-lee.vercel.app/portfolio/',
            lastModified: dayjs().format("YYYY-MM-DD"),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://seungill-lee.vercel.app/contact-us/',
            lastModified: dayjs().format("YYYY-MM-DD"),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ]
}