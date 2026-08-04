import Link from "next/link";

export default function TrackPage() {
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
            Track Your Shipment
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
          <div className="tf-grid-layout gap-30 tf-col-2 sm-col-1">
            <div className="box-property-detail property-description">
              <div className={"property-topic mb-6 h3"}>Track Your Shipment</div>
              <p className="subtitle">
                If you require maximum visibility of your freight transactions,
                enter your tracking number below and we will show you exactly
                where your cargo is - from pickup through customs to final
                delivery. You can also contact our logistics customer team on{" "}
                <a href="tel:+255774050301">+255 774 050 301</a>.
              </p>
              <div className="box-property-detail property-feature mt-3">
                <div className="wg-form-contact">
                  <form
                    action="/cargo/track#"
                    className="tf-contact-form"
                    id="trackform"
                  >
                    <div className="form-group">
                      <label htmlFor="name">Name</label>{" "}
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder={"Your name"}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>{" "}
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={"Your email"}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="trackingNum">Tracking number</label>{" "}
                      <input
                        id="trackingNum"
                        name="trackingNum"
                        type="text"
                        placeholder={"e.g. KE-2026-000123"}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="destination">Destination</label>{" "}
                      <select id="destination" name="destination">
                        <option value={""}>Select destination</option>
                        <option>Zanzibar</option>
                        <option>Dar es Salaam</option>
                        <option>Arusha</option>
                        <option>Mwanza</option>
                        <option>Kenya</option>
                        <option>Uganda</option>
                        <option>Middle East</option>
                        <option>Europe</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="freightType">Freight type</label>{" "}
                      <select id="freightType" name="freightType">
                        <option value={""}>Select freight type</option>
                        <option>By Air</option>
                        <option>By Road</option>
                        <option>By Sea</option>
                      </select>
                    </div>
                    <div className={"full mt-8"}>
                      <button type="submit" className={"tf-btn primary hover-1"}>
                        Track my shipment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="box-property-detail property-description">
              <div className={"property-topic mb-6 h3"}>What you will see</div>
              <p className="subtitle">
                Once you submit your tracking number, our system will provide the
                current status of your consignment including:
              </p>
              <div className="box-feature">
                <ul className="feature-list">
                  <li className="feature-item">
                    <img
                      src="/images/icons/check-box.svg"
                      alt="icon"
                      className="icon"
                    />{" "}
                    <span className="subtitle">Current shipment location</span>
                  </li>
                  <li className="feature-item">
                    <img
                      src="/images/icons/check-box.svg"
                      alt="icon"
                      className="icon"
                    />{" "}
                    <span className="subtitle">Customs clearance status</span>
                  </li>
                  <li className="feature-item">
                    <img
                      src="/images/icons/check-box.svg"
                      alt="icon"
                      className="icon"
                    />{" "}
                    <span className="subtitle">Estimated delivery date</span>
                  </li>
                  <li className="feature-item">
                    <img
                      src="/images/icons/check-box.svg"
                      alt="icon"
                      className="icon"
                    />{" "}
                    <span className="subtitle">Full shipment history</span>
                  </li>
                </ul>
              </div>
              <div className="button-group mt-3">
                <Link href="/cargo/quote" className="tf-btn primary hover-1 fs-18">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
