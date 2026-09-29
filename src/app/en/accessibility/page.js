import { en } from '../../../dict'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export const metadata = {
  title: 'Accessibility Statement — Infinite Dreams Solutions',
  description: 'Accessibility statement for the Infinite Dreams Solutions website, aligned with the Israeli Standard IS 5568 (WCAG 2.0 AA).',
}

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen">
      <Navbar d={en} locale="en" pageType="accessibility" />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">Accessibility Statement</h1>
            <p className="text-xl text-gray-600">We are committed to making our services accessible to everyone, including people with disabilities</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-2">

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our commitment</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {en.brand} is committed to providing an equal and accessible experience for all
                visitors, and works to make its website accessible to people with disabilities in
                line with Israel&apos;s Equal Rights for Persons with Disabilities Law (1998) and its
                Accessibility of Service regulations (2013).
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Level of accessibility</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The website was built to align with Israeli Standard IS 5568, based on the
                international WCAG 2.0 guidelines at Level AA. Measures implemented include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 leading-relaxed space-y-2">
                <li>Semantic heading structure and keyboard navigation throughout.</li>
                <li>Alternative text for images and meaningful graphic elements.</li>
                <li>Sufficient color contrast between text and background.</li>
                <li>Full responsiveness across screen sizes and devices.</li>
                <li>Respect for the user&apos;s reduced-motion preference (prefers-reduced-motion).</li>
                <li>Support for right-to-left content and browser text zoom.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitations</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We make ongoing efforts to improve the site&apos;s accessibility. Some parts may not yet
                be fully accessible or may contain issues. If you encounter an accessibility problem,
                please contact us — we will address it as soon as possible.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Accessibility coordinator</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For any question, request or report of an accessibility issue, please contact our
                accessibility coordinator:
              </p>
              <ul className="list-none text-gray-700 mb-6 leading-relaxed space-y-1">
                <li><strong>Coordinator:</strong> {en.owner}</li>
                <li><strong>Email:</strong> <a className="text-indigo-600" href={`mailto:${en.email}`}>{en.email}</a></li>
                <li><strong>Phone:</strong> <a className="text-indigo-600" href={`tel:+${en.phoneE164}`}>{en.phone}</a></li>
                <li><strong>Address:</strong> {en.address}</li>
              </ul>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 text-center">
                  This accessibility statement was last updated on {new Date().toLocaleDateString('en-GB')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer d={en} locale="en" />
    </main>
  )
}
