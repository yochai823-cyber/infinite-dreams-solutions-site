import { notFound } from 'next/navigation'
import { en } from '../../../../dict'
import SolutionLanding from '../../../../components/SolutionLanding'

const SITE = 'https://www.infinite-dreams-solutions.co.il'

export function generateStaticParams(){
  return en.solutions.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }){
  const { slug } = await params
  const s = en.solutions.find((x) => x.slug === slug)
  if (!s) return {}
  const url = `${SITE}/en/solutions/${s.slug}`
  return {
    title: `${s.title} | ${s.tagline} — Infinite Dreams Solutions`,
    description: s.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${s.title} — ${s.tagline}`,
      description: s.description,
      url,
      type: 'website',
      locale: 'en_US',
      images: [{ url: `${SITE}${s.image}`, width: 1000, height: 1250, alt: s.title }],
    },
    twitter: { card: 'summary_large_image', title: s.title, description: s.tagline, images: [`${SITE}${s.image}`] },
  }
}

export default async function Page({ params }){
  const { slug } = await params
  const s = en.solutions.find((x) => x.slug === slug)
  if (!s) notFound()
  return <SolutionLanding d={en} locale="en" solution={s} />
}
