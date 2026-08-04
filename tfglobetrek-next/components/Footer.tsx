export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="top-footer">
          <div className="container">
            <div className="content-top-footer">
              <div className="footer-logo">
                <a href="/">
                  <img src="/images/logo/khamiar-logo.png" alt="Khamiar" style={{ height: 42, width: 'auto' }} />
                </a>
              </div>
              <div className={"footer-socials flex-center"}>
                <span className="text-social">
                  Follow Us:
                </span>
                <ul className={"list-social flex-center"}>
                  <li>
                    <a href="https://www.facebook.com/khamiar.tour" aria-label="Facebook">
                      <span className={"box-icon icon-facebook w-44 social"} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/khamiar_tour_travel/" aria-label="Instagram">
                      <span className={"box-icon icon-instgram w-44 social"} />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/255774050301" aria-label="WhatsApp">
                      <span className={"box-icon icon-phone-3 w-44 social"} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-footer">
          <div className="container">
            <div className="row">
              <div className={"col-lg-4 col-md-6 col-sm-6"}>
                <div className="widget-box">
                  <div className={"widget-title mb-6"}>
                    <div className={"text-white h4"}>
                      Contact us
                    </div>
                  </div>
                  <div className="widget-info">
                    <div className="widget-contact">
                      <div className="icon">
                        <img src="/images/icons/map.svg" alt="map" />
                      </div>
                      <div className="content">
                        <span>
                          Our office
                        </span>
                        <p>
                          Stone Town, Zanzibar, Tanzania
                        </p>
                      </div>
                    </div>
                    <div className="widget-contact">
                      <div className="icon">
                        <img src="/images/icons/phone-call.svg" alt="phone" />
                      </div>
                      <div className="content">
                        <span>
                          Booking Number
                        </span>
                        <div className="h4">
                          +255 774 050 301
                        </div>
                      </div>
                    </div>
                    <div className="widget-contact">
                      <div className="icon">
                        <img src="/images/icons/mail.svg" alt="mail" />
                      </div>
                      <div className="content">
                        <span>
                          Need live help
                        </span>
                        <p>
                          info@khamiarltd.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-lg-4 col-md-6 col-sm-6"}>
                <div className="widget-box">
                  <div className={"widget-title mb-6"}>
                    <div className={"text-white h4"}>
                      About us
                    </div>
                  </div>
                  <div className="widget-tour">
                    <ul className={"tour-list tf-grid-layout tf-col-2 gap-list"}>
                      <li className="tour-item">
                        <a href="/aboutus">
                          <span className={"icon icon-CaretRight"} />
                          About us
                        </a>
                      </li>
                      <li className="tour-item">
                        <a href="/teammember">
                          <span className={"icon icon-CaretRight"} />
                          Our team
                        </a>
                      </li>
                      <li className="tour-item">
                        <a href="/contactus">
                          <span className={"icon icon-CaretRight"} />
                          Contact us
                        </a>
                      </li>
                      <li className="tour-item">
                        <a href="/asqquestion">
                          <span className={"icon icon-CaretRight"} />
                          FAQs
                        </a>
                      </li>
                      <li className="tour-item">
                        <a href="/gridstyle01">
                          <span className={"icon icon-CaretRight"} />
                          Tours
                        </a>
                      </li>
                      <li className="tour-item">
                        <a href="/destination1">
                          <span className={"icon icon-CaretRight"} />
                          Destinations
                        </a>
                      </li>
                      <li className="tour-item">
                        <a href="/cargo">
                          <span className={"icon icon-CaretRight"} />
                          Cargo services
                        </a>
                      </li>
                      <li className="tour-item">
                        <a href="/cargo/track">
                          <span className={"icon icon-CaretRight"} />
                          Track shipment
                        </a>
                      </li>
                      <li className="tour-item">
                        <a href="/cargo/quote">
                          <span className={"icon icon-CaretRight"} />
                          Request a quote
                        </a>
                      </li>
                      <li className="tour-item">
                        <a href="/cargo/prices">
                          <span className={"icon icon-CaretRight"} />
                          Our prices
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={"col-lg-4 col-md-6 col-sm-6"}>
                <div className="widget-box">
                  <div className={"widget-title mb-6"}>
                    <div className={"text-white h4"}>
                      Newsletter
                    </div>
                  </div>
                  <div className="widget-newseletter">
                    <p className="text-note">
                      
                                          Sign up to receive the latest articles
                                      
                    </p>
                    <form action="mailto:info@khamiarltd.com?subject=Newsletter%20subscription" method="post" encType="text/plain" className={"footer-send mt-4"}>
                      <div className="input-wrapper">
                        <input type="email" name="email" id="subscribe-email" placeholder={"Your email address"} className="input-send" required />
                        {' '}
                        <button type="submit" className={"icon pos-2"} aria-label="Subscribe">
                          <img src="/images/icons/icon-send.svg" alt={""} />
                        </button>
                      </div>
                      <label className={"agree-terms mt-2"}>
                        <input type="checkbox" name="agree" required className="tf-checkbox" />
                        {' '}
                        <span>
                          
                                                  I have read and agree to the{" "}
                                                  <a href="/terms" className="text-white">
                                                    terms &amp; conditions
                                                  </a>
                                               
                        </span>
                      </label>
                    </form>
                    <div className="mt-3">
                      <a href="https://wa.me/255774050301" className="tf-btn primary hover-1 fs-18">
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="content-bottom">
              <div className="copy-right">
                
                              Copyright © 2026 
                <a href="/" className="fw-bold">
                  Khamiar Express
                </a>
                          
              </div>
              <ul className={"menu-bottom flex-center"}>
                <li>
                  <a href="/terms" className="item-bottom">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="item-bottom">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="/asqquestion" className="item-bottom">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
