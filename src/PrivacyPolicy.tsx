import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDocumentHead } from "./hooks/useDocumentTitle";

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  // Set document head
  useDocumentHead({
    title: "Privacy Policy - TikiAnaly",
    description: "TikiAnaly Privacy Policy - Learn how we collect, use, and protect your personal information when you join our waitlist and use our services.",
    keywords: "privacy policy, data protection, TikiAnaly, personal information, data security",
    ogTitle: "Privacy Policy - TikiAnaly",
    ogDescription: "Learn how TikiAnaly protects your privacy and handles your personal information.",
    ogType: "website",
    ogUrl: "https://www.tikianaly.com/privacy-policy",
    twitterCard: "summary",
    twitterTitle: "Privacy Policy - TikiAnaly",
    twitterDescription: "Learn how TikiAnaly protects your privacy and handles your personal information."
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-blue-100 mt-2">Last updated: October 15, 2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h2>
            <p className="text-gray-600">
              For any questions about this privacy policy, please contact us at:{" "}
              <a href="mailto:info@tikianaly.com" className="text-blue-600 hover:underline">
                info@tikianaly.com
              </a>
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to TikiAnaly. We respect your privacy and are committed to protecting your information. 
              This privacy policy explains how we collect, use, store, and share information when you use our 
              platforms, apps, and services (collectively, our "Services").
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When we mention "TikiAnaly," "we," "us," or "our", we mean TikiAnaly, the entity responsible 
              for processing your data.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our Services, you agree to the terms outlined in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information to provide and improve our Services. The types of information we may collect include:
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">a. Personal Data</h3>
                <p className="text-gray-700 leading-relaxed">
                  Data that identifies you, such as your name, email address, profile information, or social media accounts if you connect them.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">b. Usage and Device Data</h3>
                <p className="text-gray-700 leading-relaxed">
                  Data about how you use our Services, your device type, operating system, IP address, app version, and browsing patterns.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">c. Aggregated Data</h3>
                <p className="text-gray-700 leading-relaxed">
                  Non-identifiable data, such as analytics and statistics about usage trends.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">d. Marketing Data</h3>
                <p className="text-gray-700 leading-relaxed">
                  Preferences regarding newsletters, promotions, and other communications.
                </p>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p className="text-gray-700">
                <strong>Note:</strong> We do not collect sensitive personal data (e.g., race, religion, health) or criminal information.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Collect Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Directly from you:</strong> When you register, interact with our Services, or contact us.</li>
              <li><strong>Automatically:</strong> Through cookies, app analytics, and usage tracking.</li>
              <li><strong>From third parties:</strong> Only when you consent or for services related to co-branded events or promotions.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Provide, improve, and personalize our Services.</li>
              <li>Communicate with you about updates, promotions, or support requests.</li>
              <li>Analyze usage patterns to improve the app experience.</li>
              <li>Comply with legal obligations.</li>
              <li>Protect the security of our Services.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Wherever possible, we rely on lawful bases such as your consent, contractual necessity, or legitimate interests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Sharing Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Service providers (hosting, analytics, marketing support).</li>
              <li>Partners for co-branded services, promotions, or competitions.</li>
              <li>In business transactions, such as mergers or acquisitions.</li>
            </ul>
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <p className="text-gray-700">
                <strong>We never sell your personal data to third parties.</strong>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. International Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred or stored outside your country. In such cases, we ensure it receives 
              the same level of protection as required by applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar technologies to improve your experience and deliver personalized content. 
              You can manage cookie preferences in your browser or app settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Under applicable laws, you may:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Access, correct, or delete your personal data.</li>
              <li>Object to or restrict processing.</li>
              <li>Withdraw consent at any time.</li>
              <li>Lodge a complaint with a data protection authority.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise your rights, contact us at{" "}
              <a href="mailto:info@tikianaly.com" className="text-blue-600 hover:underline">
                info@tikianaly.com
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your data and restrict access to authorized personnel only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We keep your data only as long as necessary to provide our Services or comply with legal obligations. 
              Once no longer required, we delete or anonymize your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this policy occasionally. Any changes will be posted on this page, and the updated version 
              will be effective immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions, concerns, or to exercise your rights, email us at:{" "}
              <a href="mailto:info@tikianaly.com" className="text-blue-600 hover:underline">
                info@tikianaly.com
              </a>.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2025 TikiAnaly. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
