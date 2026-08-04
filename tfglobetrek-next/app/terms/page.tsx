export default function TermsPage() {
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
            Terms of Use
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
            <div className={"property-topic h3"}>1. Acceptance of terms</div>
            <p className="subtitle">
              By accessing or using the Khamiar Express website, you agree to
              be bound by these Terms of Use. If you do not agree with any part
              of these terms, please do not use this website.
            </p>

            <div className={"property-topic h3"}>2. Tours &amp; travel services</div>
            <p className="subtitle">
              All tour bookings are subject to availability and confirmation.
              Prices, itineraries and schedules may change due to weather,
              wildlife behaviour, park regulations or other circumstances
              beyond our control. Khamiar Express reserves the right to adjust
              itineraries while keeping the overall quality of your experience
              intact.
            </p>

            <div className={"property-topic h3"}>3. Cargo &amp; logistics services</div>
            <p className="subtitle">
              Freight quotations are based on the details provided at the time
              of request. Actual charges may vary with weight, volume, route
              and customs requirements. Shipments are handled under our
              standard terms of carriage, and clients are responsible for the
              accuracy of all documentation provided.
            </p>

            <div className={"property-topic h3"}>4. Payments &amp; cancellations</div>
            <p className="subtitle">
              Payment terms are confirmed at the time of booking or quotation.
              Cancellation policies for tours vary by product and are stated in
              your booking confirmation. Please review the policy before
              confirming your reservation.
            </p>

            <div className={"property-topic h3"}>5. Liability</div>
            <p className="subtitle">
              Khamiar Express acts as a tour and logistics operator in the
              United Republic of Tanzania. We are not liable for delays or
              losses caused by events beyond our reasonable control, including
              but not limited to weather, government action, strikes or force
              majeure.
            </p>

            <div className={"property-topic h3"}>6. Contact</div>
            <p className="subtitle">
              For questions about these terms, contact us at{" "}
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
