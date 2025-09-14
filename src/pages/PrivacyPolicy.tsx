const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-12 text-white bg-gradient-to-r from-[#1FB7F2] to-[#7E4DFB]">
        <div className="container px-6 mx-auto text-center">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-lg font-medium sm:text-xl opacity-90">
            Effective Date: January 18, 2025
          </p>
        </div>
      </header>

      <main className="container px-6 py-12 mx-auto">
        <section className="p-8 space-y-8 bg-white rounded-lg shadow-xl sm:p-10 lg:p-12">
          <h2 className="text-2xl font-semibold text-blue-600 sm:text-3xl">
            1. Introduction
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At Mohanta Construction IT, we prioritize your privacy. This policy outlines
            how we collect, use, and protect your personal information when you
            use our services.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600 sm:text-3xl">
            2. Information We Collect
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We collect personal information such as your name, email address,
            phone number, and company details when you:
          </p>
          <ul className="mt-4 space-y-2 text-lg text-gray-700 list-disc list-inside">
            <li>Contact us via forms or email</li>
            <li>Participate in surveys or feedback sessions</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 sm:text-3xl">
            3. How We Use Your Information
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Your personal information is used to:
          </p>
          <ul className="mt-4 space-y-2 text-lg text-gray-700 list-disc list-inside">
            <li>Provide and improve our services</li>
            <li>Respond to inquiries and support requests</li>
            <li>Send updates, promotional materials, and newsletters</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 sm:text-3xl">
            4. Information Sharing
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We do not sell or rent your personal information to third parties.
            However, we may share information with trusted partners to provide
            our services, as long as they adhere to our privacy standards.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600 sm:text-3xl">
            5. Data Security
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We implement robust security measures to protect your data from
            unauthorized access, alteration, or disclosure. Despite these
            efforts, no method of data transmission or storage is entirely
            secure.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600 sm:text-3xl">
            6. Your Rights
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            You have the right to:
          </p>
          <ul className="mt-4 space-y-2 text-lg text-gray-700 list-disc list-inside">
            <li>Access your personal data</li>
            <li>Request corrections to inaccurate data</li>
            <li>Request deletion of your data</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 sm:text-3xl">
            7. Changes to this Policy
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We may update this privacy policy periodically. Changes will be
            posted on this page with an updated effective date.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600 sm:text-3xl">
            8. Contact Us
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            If you have any questions about this privacy policy, please contact
            us at:
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Email:{" "}
            <a
              href="mailto:support@Mohanta Constructionit.com"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              support@Mohanta Constructionit.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
