export default function contactusPage() {
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
            Contact Us
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
      </div>{" "}
      <div className={"tf-vacation-hero-v2 flat-section"}>
        <div className="container">
          <div className="flat-img-with-contact">
            <div className="wg-content">
              <div
                className={"box-title wow animate__animated animate__fadeInUp"}
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className={"title mb-8 h1"}>
                  We provide the most attractive and interesting tours.
                </div>
                <div className="subtitle">Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
              </div>
              <ul className="box-info">
                <li className={"address info-item"}>
                  <div className="icon">
                    <img src="/images/icons/map-info.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <label className="subtitle">Office address</label>{" "}
                    <a href="/contactus#">
                      Stone Town, Zanzibar, Tanzania
                    </a>
                  </div>
                </li>
                <li className={"phone info-item"}>
                  <div className="icon">
                    <img src="/images/icons/phone-send.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <label className="subtitle">Request a call back</label>{" "}
                    <a href="tel:+255774050301">+255 774 050 301</a>
                  </div>
                </li>
                <li className={"email info-item"}>
                  <div className="icon">
                    <img src="/images/icons/send-mail.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <label className="subtitle">Email us</label>{" "}
                    <a href="mailto:info@khamiarltd.com">
                      info@khamiarltd.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className={"box-images hover-img-wrap"}>
              <img src="/images/locations/tour-88.jpg" alt="image" />
            </div>
          </div>
        </div>
      </div>
      <div className="flat-map">
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129688.0678758725!2d-79.2239653!3d37.4148819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b2d97890320401%3A0xc3b6f35ec820e261!2sLynchburg%2C%20VA%2C%20USA!5e0!3m2!1sen!2sus!4v1699272000000!5m2!1sen!2sus"></iframe>
        </div>
      </div>
      <div className={"flat-section pt-0 flat-contact"}>
        <div className="container">
          <div className="wg-form-contact">
            <div
              className={"box-title wow animate__animated animate__fadeInUp"}
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className={"title h1"}>We would love to hear from you</div>
              <div className={"subtitle text-color desc"}>
                We'll get to know you to understand your selling goals, explain
                the selling process so you know what to expect.
              </div>
            </div>
            <form
              action="/contactus#"
              className="tf-contact-form"
              id="contactform"
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
                <label htmlFor="phone">Phone number</label>{" "}
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder={"Your phone number"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="interest">What are you interested in?</label>{" "}
                <select id="interest" name="interest">
                  <option value={""}>Select</option>
                </select>
              </div>
              <div className={"form-group full"}>
                <label htmlFor="message">Message</label>{" "}
                <textarea
                  id="message"
                  name="message"
                  placeholder={"Your message"}
                />
              </div>
              <div className={"full mt-8"}>
                <button type="submit" className={"tf-btn primary hover-1"}>
                  Contact our team
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
      <div className={"tf-promo-section tf-vacation-hero bg-second mx-4"}>
        <div className="container">
          <div className="flat-img-with-text">
            <div className={"content-left animate-ltr"}>
              <div className="banner-device">
                <img
                  src="/images/backgrounds/bg-mobile-phone.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="content-right">
              <div
                className={"box-title wow animate__animated animate__fadeInUp"}
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <h1 className="title">
                  Accompany you to explore all parts of the country.
                </h1>
                <div className="subtitle">Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
              </div>
              <div className={"action-download d-flex gap-3"}>
                <a href="/contactus#">
                  <img src="/images/logo/logo-app.png" alt="app-store" />
                </a>{" "}
                <a href="/contactus#">
                  <img src="/images/logo/logo-gg.png" alt="google" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
