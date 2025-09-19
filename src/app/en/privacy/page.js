import { en } from '../../../dict'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar d={en} locale="en" pageType="privacy" />
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-black text-gray-800 mb-8">Privacy Policy</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          At Infinite Dreams Solutions, we are committed to protecting your privacy. This privacy policy describes how we collect, use, and protect your personal information.
        </p>
        <div className="mt-12 text-left max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Collection</h2>
            <p className="text-gray-700">
              We collect information that you provide to us directly, such as your name, email address, and phone number, when you contact us through the website or via WhatsApp. We may also collect information about your use of the website, such as your IP address, browser type, and pages visited.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Use of Information</h2>
            <p className="text-gray-700">
              We use the information we collect to provide you with services, process your requests, improve our website, and communicate with you. We may also use the information for marketing purposes, but only if you have given your consent.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing</h2>
            <p className="text-gray-700">
              We do not sell, trade, or rent your personal information to third parties. We may share information with external service providers who help us operate the website and provide our services, but only to the extent necessary and for the purposes for which the information was collected.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-700">
              We take reasonable security measures to protect your personal information from unauthorized access, misuse, or disclosure. However, no method of transmission over the internet or electronic storage method is 100% secure, so we cannot guarantee absolute security.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Privacy Policy</h2>
            <p className="text-gray-700">
              We reserve the right to update this privacy policy from time to time. Any changes will take effect immediately upon publication on the website. We recommend that you review this policy regularly.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this privacy policy, please contact us at: {en.email}
            </p>
          </div>
        </div>
      </div>
      <Footer d={en} locale="en" />
    </main>
  )
}
