import { Metadata } from "next";
import { PostcardCTA } from "@/components/shared";

export const metadata: Metadata = {
  title: "Privacy Policy | Driftawave",
  description: "How Driftawave handles your personal data - Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-sunset-black mb-6">
            Privacy Policy
          </h1>
          <p className="font-body font-light text-xl text-gray-dark max-w-3xl mx-auto">
            How do we handle your personal data?
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-sunset-sand/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-brand p-8 md:p-12 shadow-lg prose prose-lg max-w-none">
            <p className="font-body font-light text-gray-dark leading-relaxed mb-8">
              In this privacy policy we explain you how we collect and use your personal data and
              information. This privacy policy applies to all your personal data that we process if
              you travel with us, purchase our services or utilize them, visit our website or in any
              other way you are in touch with us.
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              Processing and Security of Personal Data
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              When you utilize the services of Driftawave B.V. we need certain information from you.
              It is our policy to handle your personal data with the most care and transparency. We
              also process data, such as requesting data such as when requesting information,
              contests, and visiting our website. The amount of data we collect depends on how you
              interact with us.
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              Which Data Do We Collect?
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-4">
              Your personal data is mainly processed by us to give you an unforgettable journey.
              This personal data will only be used for matters related to your booking. We also use
              third parties who receive personal data and process this data on behalf of Driftawave
              B.V.
            </p>

            <h3 className="font-display text-xl text-sunset-black mt-8 mb-4">
              Overview of Information We Record When Booking:
            </h3>
            <ul className="font-body font-light text-gray-dark leading-relaxed space-y-3 mb-6 list-disc list-inside">
              <li>
                <strong>Personal details:</strong> first and last name, address, gender, date of
                birth, meal preference, and travel preferences
              </li>
              <li>
                <strong>Phone number:</strong> we may need to contact you about your booking
              </li>
              <li>
                <strong>Email address:</strong> you will receive confirmation of your bookings
              </li>
              <li>
                <strong>Identification documents:</strong> passport or identity card details,
                including passport number, place of issue, date of issue and expiry date
              </li>
              <li>
                <strong>Payment details:</strong> we use a secure payment environment
              </li>
              <li>
                <strong>Emergency contact:</strong> a telephone number of the person staying at home
              </li>
            </ul>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              We Also Use Your Information For:
            </h2>
            <ul className="font-body font-light text-gray-dark leading-relaxed space-y-3 mb-6 list-disc list-inside">
              <li>
                <strong>Contact moments:</strong> telephone conversations may be recorded for
                training purposes
              </li>
              <li>
                <strong>System analysis:</strong> to make websites more user-friendly
              </li>
              <li>
                <strong>Newsletters:</strong> you may receive newsletters and offers (with
                unsubscribe option)
              </li>
              <li>
                <strong>Promotions:</strong> to contact you if you have won
              </li>
              <li>
                <strong>Reviews and surveys:</strong> to improve our services
              </li>
              <li>
                <strong>Tailor-made advice:</strong> to remember your preferences
              </li>
            </ul>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              Contact, Access, Changes or Removal
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              On request, we will indicate where and how we process your personal data. You can also
              request, correct, supplement, delete or shield this data under certain circumstances.
              Contact us via{" "}
              <a
                href="mailto:info@driftawave.com"
                className="text-sunset-orange hover:text-sunset-rust"
              >
                info@driftawave.com
              </a>
              .
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">Retention Period</h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              We will retain your personal data for as long as is reasonably necessary for the
              purposes described. However, based on legislation, it may be necessary for us to
              retain data for a longer period of time.
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">Cookie Policy</h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-4">
              Driftawave and third parties use cookies and other techniques to analyze websites,
              make them more user-friendly, offer social media and show you relevant offers. By
              using our website(s), you agree to this.
            </p>

            <h3 className="font-display text-xl text-sunset-black mt-8 mb-4">Types of Cookies:</h3>
            <ul className="font-body font-light text-gray-dark leading-relaxed space-y-3 mb-6 list-disc list-inside">
              <li>
                <strong>Functional cookies:</strong> for user-friendliness, so you don't have to
                login again
              </li>
              <li>
                <strong>Transaction cookies:</strong> for booking and commission purposes
              </li>
              <li>
                <strong>Analytics cookies:</strong> Google Analytics, Hotjar for visitor behavior
                analysis
              </li>
              <li>
                <strong>Marketing cookies:</strong> to store your interests for relevant offers
              </li>
            </ul>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">Amendments</h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              Driftawave reserves the right to make changes to the privacy statement.
            </p>

            <div className="mt-12 p-6 bg-sunset-sand/20 rounded-brand text-center">
              <p className="font-body font-light text-gray-dark mb-4">
                Would you like to know more about how Driftawave handles data?
              </p>
              <a
                href="mailto:info@driftawave.com"
                className="font-body text-sunset-orange hover:text-sunset-rust font-medium"
              >
                Get in touch via info@driftawave.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Postcard CTA */}
      <PostcardCTA />
    </>
  );
}
