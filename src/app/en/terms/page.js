import { en } from '../../../dict'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar d={en} locale="en" pageType="terms" />
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-black text-gray-800 mb-8">Terms of Service</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Welcome to Infinite Dreams Solutions. The use of this website is subject to the following terms of service. Please read them carefully.
        </p>
        <div className="mt-12 text-left max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700">
              By accessing and using this website, you agree to be bound by these terms of service and all applicable laws and regulations. If you do not agree with these terms, you are not permitted to use the website.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Intellectual Property</h2>
            <p className="text-gray-700">
              All content on the website, including texts, graphics, logos, icons, images, audio and video clips, data, and software, is the property of Infinite Dreams Solutions or its suppliers and is protected by copyright and intellectual property laws.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Use of Website</h2>
            <p className="text-gray-700">
              You may use the website for personal and non-commercial purposes only. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from the website.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Availability</h2>
            <p className="text-gray-700">
              We strive to provide continuous service availability, but we do not guarantee that the website will be available at all times. We reserve the right to modify, suspend, or discontinue the website or any part of it at any time without notice.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700">
              In no event shall Infinite Dreams Solutions be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the website.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms of service at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website after any changes constitutes acceptance of the new terms.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these terms of service, please contact us at: {en.email}
            </p>
          </div>
        </div>
      </div>
      <Footer d={en} locale="en" />
    </main>
  )
}
