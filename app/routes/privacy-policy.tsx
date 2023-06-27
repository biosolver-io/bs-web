import { Link } from "@remix-run/react";

export default function PrivacyPolicyPage() {
  return (
    <div className="p-10">
      <h1 className="font-bold text-2xl text-center mb-10">Privacy Policy</h1>
      <p>This Privacy Policy applies to the website <Link to="/">https://www.biosolver.io</Link>, which is operated by BIOSOLVER CORP. This policy sets out how we collect, use, and protect the personal information of our users.</p>

      <h2 className="mt-10 font-semibold text-lg">Collection of Personal Information</h2>
      <p>We collect personal information from our users when they register on our site, fill out a form, or otherwise engage with our services. The personal information we collect may include the user's name, email address, phone number, and other contact information. We may also collect other information such as the user's professional experience or publication record.</p>

      <h2 className="mt-10 font-semibold text-lg">Use of Personal Information</h2>
      <p>We use personal information collected from our users to provide our services and improve our website. We may also use personal information to contact users with promotional offers, newsletters, or other marketing materials. Users may opt out of receiving these communications at any time.</p>

      <h2 className="mt-10 font-semibold text-lg">Disclosure of Personal Information</h2>
      <p>We will not disclose personal information collected from our users to third parties unless required by law or necessary to provide our services. We may share personal information with service providers who assist us in operating our website or providing our services.</p>

      <h2 className="mt-10 font-semibold text-lg">Protection of Personal Information</h2>
      <p>We take reasonable measures to protect the personal information of our users from unauthorized access, use, or disclosure. However, we cannot guarantee the security of personal information transmitted to our website, and users transmit personal information at their own risk.</p>

      <h2 className="mt-10 font-semibold text-lg">Use of Cookies</h2>
      <p>Our website may use cookies to enhance the user experience. Cookies are small data files that are stored on a user's device and may include an anonymous unique identifier. Users can disable cookies in their browser settings, but this may limit the functionality of our website.</p>

      <h2 className="mt-10 font-semibold text-lg">Links to Third-Party Websites</h2>
      <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites.</p>

      <h2 className="mt-10 font-semibold text-lg">Children's Privacy</h2>
      <p>Our website is not intended for use by children under the age of 13, and we do not knowingly collect personal information from children under the age of 13.</p>

      <h2 className="mt-10 font-semibold text-lg">Changes to this Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. Users will be notified of any changes by posting the updated policy on our website.</p>

      <h2 className="mt-10 font-semibold text-lg">Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy or our use of personal information, please contact us at <a href="mailto:sagar@bio-solver.com">sagar@bio-solver.com</a>.</p>

      <p className="text-sm mt-10 text-end">Date of last revision: 05.07.2023</p>
    </div>
  )
}