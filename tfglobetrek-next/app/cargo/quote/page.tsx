export default function QuotePage() {
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
            Request a Quote
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
              <div className={"property-topic mb-6 h3"}>Request a Quote</div>
              <p className="subtitle">
                We're always interested in new shipments, big or small. Tell us
                about your cargo and we'll get back to you with a competitive
                quotation within one business day. You can also phone us between
                8:00 am and 7:00 pm, Monday to Saturday, on{" "}
                <a href="tel:+255774050301">+255 774 050 301</a>.
              </p>
              <div className="box-feature mt-3">
                <ul className="feature-list">
                  <li className="feature-item">
                    <img
                      src="/images/icons/check-box.svg"
                      alt="icon"
                      className="icon"
                    />{" "}
                    <span className="subtitle">Free quotations - no obligation</span>
                  </li>
                  <li className="feature-item">
                    <img
                      src="/images/icons/check-box.svg"
                      alt="icon"
                      className="icon"
                    />{" "}
                    <span className="subtitle">Response within one business day</span>
                  </li>
                  <li className="feature-item">
                    <img
                      src="/images/icons/check-box.svg"
                      alt="icon"
                      className="icon"
                    />{" "}
                    <span className="subtitle">Transparent pricing, no hidden fees</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-property-detail property-feature">
              <div className="wg-form-contact">
                <form
                  action="/cargo/quote#"
                  className="tf-contact-form"
                  id="quoteform"
                >
                  <div className="form-group">
                    <label htmlFor="firstName">First name</label>{" "}
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder={"Your first name"}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last name</label>{" "}
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder={"Your last name"}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>{" "}
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={"Your email"}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cityDeparture">City of departure</label>{" "}
                    <input
                      id="cityDeparture"
                      name="cityDeparture"
                      type="text"
                      placeholder={"e.g. Dar es Salaam"}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="deliveryCity">Delivery city</label>{" "}
                    <input
                      id="deliveryCity"
                      name="deliveryCity"
                      type="text"
                      placeholder={"e.g. Dubai"}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="parcelType">Parcel type</label>{" "}
                    <select id="parcelType" name="parcelType">
                      <option value={""}>Select parcel type</option>
                      <option>Documents</option>
                      <option>Parcel</option>
                      <option>Pallet</option>
                      <option>Container</option>
                      <option>Project cargo</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="weight">Weight (kg)</label>{" "}
                    <input
                      id="weight"
                      name="weight"
                      type="text"
                      placeholder={"e.g. 250"}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="freightType">Freight type</label>{" "}
                    <select id="freightType" name="freightType">
                      <option value={""}>Select freight type</option>
                      <option>Air transportation</option>
                      <option>Sea transportation</option>
                      <option>Road transportation</option>
                      <option>Warehousing services</option>
                      <option>Door-to-door delivery</option>
                    </select>
                  </div>
                  <div className={"form-group full"}>
                    <label htmlFor="specialInfo">Special information</label>{" "}
                    <textarea
                      id="specialInfo"
                      name="specialInfo"
                      placeholder={"Tell us more about your cargo"}
                    />
                  </div>
                  <div className={"full mt-8"}>
                    <button type="submit" className={"tf-btn primary hover-1"}>
                      Send quote request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
