export default function PrivacyPage() {
  return (
    <>
      <div className="page-title">
        <div className="container">
          <div
            className={
              "text-center title wow animate__animated animate__fadeInUp h1"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            Privacy Policy
          </div>
          <div
            className={
              "breadcrumb-content wow animate__animated animate__fadeInUp"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div
              className={"breadcrumb breadcrumb-dynamic justify-content-center"}
            />
          </div>
        </div>
      </div>

      <div className="flat-section">
        <div className="container">
          <div className="box-property-detail property-description p-4">
            <div className={"property-topic h3"}>1. Information we collect</div>
            <p className="subtitle">
              We collect information you provide directly, such as your name,
              email address, phone number and travel or shipment details when
              you submit a booking, quote request or enquiry through our
              website.
            </p>

            <div className={"property-topic h3"}>2. How we use your information</div>
            <p className="subtitle">
              Your information is used to respond to your enquiries, prepare
              quotations, confirm bookings, arrange tours and cargo services,
              and provide customer support. We may also send you occasional
              updates about our services if you have subscribed to our
              newsletter.
            </p>

            <div className={"property-topic h3"}>3. Sharing of information</div>
            <p className="subtitle">
              We do not sell your personal information. Information may be
              shared with trusted partners such as accommodation providers,
              transport operators and customs agents only where necessary to
              deliver the services you have requested.
            </p>

            <div className={"property-topic h3"}>4. Data security</div>
            <p className="subtitle">
              We take reasonable measures to protect your personal information
              against unauthorised access, alteration, disclosure or
              destruction. However, no method of transmission over the internet
              is completely secure.
            </p>

            <div className={"property-topic h3"}>5. Cookies</div>
            <p className="subtitle">
              Our website may use cookies to improve your browsing experience
              and to understand how visitors use the site. You can disable
              cookies in your browser settings at any time.
            </p>

            <div className={"property-topic h3"}>6. Your rights</div>
            <p className="subtitle">
              You may request access to, correction of, or deletion of your
              personal information at any time by contacting us using the
              details below.
            </p>

            <div className={"property-topic h3"}>7. Contact</div>
            <p className="subtitle">
              For privacy-related questions, contact us at{" "}
              <a href="mailto:info@khamiarltd.com">info@khamiarltd.com</a> or
              call{" "}
              <a href="tel:+255774050301">+255 774 050 301</a>. Our office is
              in Stone Town, Zanzibar, Tanzania.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
