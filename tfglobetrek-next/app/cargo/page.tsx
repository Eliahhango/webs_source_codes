import Link from "next/link";
import { cargoServices } from "../data/cargo";

export default function CargoPage() {
  return (
    <>
      <div className="hero">
        <div className="slider-default">
          <div
            className={"swiper mySwiper"}
            data-preview="1"
            data-autoplay="true"
            data-loop="true"
            data-speed="1200"
          >
            <div className="swiper-wrapper">
              <div className={"swiper-slide home-4"}>
                <div
                  className={"box-banner box-banner-9"}
                  style={{
                    backgroundImage: "url('/images/cargo/cargo-hero-1.jpg')",
                  }}
                >
                  <div className="container">
                    <div className="box-title">
                      <h3 className="mb-8">Khamiar Express Cargo</h3>
                      <h1 className="mb-8">Air, Ocean &amp; Road Freight</h1>
                      <p>
                        Reliable shipping from Zanzibar and Tanzania to
                        destinations across the globe.
                      </p>
                      <div className="breadcrumb-content">
                        <div
                          className={
                            "breadcrumb breadcrumb-dynamic justify-content-center"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide home-4"}>
                <div
                  className={"box-banner box-banner-10"}
                  style={{
                    backgroundImage: "url('/images/cargo/cargo-hero-2.jpg')",
                  }}
                >
                  <div className="container">
                    <div className="box-title">
                      <h3 className="mb-8">Khamiar Express Cargo</h3>
                      <h1 className="mb-8">Warehousing &amp; Distribution</h1>
                      <p>
                        Safe, secure storage and efficient distribution for
                        every kind of cargo.
                      </p>
                      <div className="breadcrumb-content">
                        <div
                          className={
                            "breadcrumb breadcrumb-dynamic justify-content-center"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide home-4"}>
                <div
                  className={"box-banner box-banner-11"}
                  style={{
                    backgroundImage: "url('/images/cargo/cargo-hero-3.jpg')",
                  }}
                >
                  <div className="container">
                    <div className="box-title">
                      <h3 className="mb-8">Khamiar Express Cargo</h3>
                      <h1 className="mb-8">Door-to-Door Delivery</h1>
                      <p>
                        From our door to yours — tracked, insured and always on
                        time.
                      </p>
                      <div className="breadcrumb-content">
                        <div
                          className={
                            "breadcrumb breadcrumb-dynamic justify-content-center"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"flex-direction-nav style-hero-1"}>
              <a href="/cargo#" className={"flex-prev style-nav-1"}>
                <img src="/images/icons/arrow-left-1.svg" alt="prev" />
              </a>{" "}
              <a href="/cargo#" className={"flex-next style-nav-1"}>
                <img src="/images/icons/arrow-right-2.svg" alt="next" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="tf-vacation-hero-v2 flat-section">
        <div className="container">
          <div className="flat-img-with-contact">
            <div className="wg-content">
              <div
                className={"box-title wow animate__animated animate__fadeInUp"}
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className={"title mb-8 h1"}>
                  Moving your cargo with care, anywhere in the world.
                </div>
                <div className="subtitle">
                  Khamiar Express Cargo is the logistics division of Khamiar
                  Express, offering air, ocean and road freight, warehousing,
                  packaging and door-to-door delivery from Zanzibar and Tanzania
                  to destinations across the globe. One team, one commitment -
                  your cargo delivered safely and on time.
                </div>
              </div>
              <ul className="box-info">
                <li className={"phone info-item"}>
                  <div className="icon">
                    <img src="/images/icons/phone-send.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <label className="subtitle">Call us for a quote</label>{" "}
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
                <li className={"address info-item"}>
                  <div className="icon">
                    <img src="/images/icons/map-info.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <label className="subtitle">Office address</label>{" "}
                    <a href="/cargo#">Stone Town, Zanzibar, Tanzania</a>
                  </div>
                </li>
              </ul>
              <div className="button-group mt-3">
                <Link href="/cargo/quote" className="tf-btn primary hover-1 fs-18">
                  Request a Quote
                </Link>{" "}
                <Link href="/cargo/track" className="tf-btn hover-1 fs-18">
                  Track Your Shipment
                </Link>
              </div>
            </div>
            <div className={"box-images hover-img-wrap"}>
              <img src="/images/cargo/cargo-about.jpg" alt="Cargo Service" />
            </div>
          </div>
        </div>
      </div>

      <div className={"flat-section bg-color-first"}>
        <div className="container">
          <div
            className={"box-title text-center wow animate__animated animate__fadeInUp"}
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className={"title h1"}>Our Cargo Services</div>
            <div className="subtitle">
              Complete logistics solutions - from a single parcel to full
              project cargo.
            </div>
          </div>
          <div className="tf-grid-layout gap-30 tf-col-4 md-col-2 sm-col-1 mt-3">
            {cargoServices.map((s) => (
              <div key={s.slug} className="box-icon-benefits">
                <div className="wrap-icon">
                  <img src={s.icon} alt="icon" className="icon" />
                </div>
                <div className="content">
                  <div className={"name h4"}>
                    <Link href={`/cargo/${s.slug}`} className="link">
                      {s.title}
                    </Link>
                  </div>
                  <p className="desc">{s.short}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flat-section">
        <div className="container">
          <div
            className={"box-title wow animate__animated animate__fadeInUp"}
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className={"title h1"}>Why choose Khamiar Express Cargo</div>
          </div>
          <div className="tf-grid-layout gap-30 tf-col-3 md-col-2 sm-col-1 mt-3">
            <div className="box-icon-benefits">
              <div className="wrap-icon">
                <img src="/images/icons/globe.svg" alt="icon" className="icon" />
              </div>
              <div className="content">
                <div className={"name h4"}>Global Network</div>
                <p className="desc">
                  Reliable freight routes connecting Tanzania and East Africa to
                  the Middle East, Europe, Asia and the Americas.
                </p>
              </div>
            </div>
            <div className="box-icon-benefits">
              <div className="wrap-icon">
                <img src="/images/icons/shield-check.svg" alt="icon" className="icon" />
              </div>
              <div className="content">
                <div className={"name h4"}>Safe & Secure</div>
                <p className="desc">
                  Every shipment is handled with care, correctly packed and fully
                  insured for complete peace of mind.
                </p>
              </div>
            </div>
            <div className="box-icon-benefits">
              <div className="wrap-icon">
                <img src="/images/icons/headset.svg" alt="icon" className="icon" />
              </div>
              <div className="content">
                <div className={"name h4"}>Dedicated Support</div>
                <p className="desc">
                  A dedicated logistics coordinator keeps you informed at every
                  stage of your shipment's journey.
                </p>
              </div>
            </div>
            <div className="box-icon-benefits">
              <div className="wrap-icon">
                <img src="/images/icons/route.svg" alt="icon" className="icon" />
              </div>
              <div className="content">
                <div className={"name h4"}>Real-Time Tracking</div>
                <p className="desc">
                  Track your cargo at every step with up-to-date status updates
                  from pickup to final delivery.
                </p>
              </div>
            </div>
            <div className="box-icon-benefits">
              <div className="wrap-icon">
                <img src="/images/icons/file-text.svg" alt="icon" className="icon" />
              </div>
              <div className="content">
                <div className={"name h4"}>Customs Expertise</div>
                <p className="desc">
                  Accurate documentation and smooth customs clearance handled for
                  you at origin and destination.
                </p>
              </div>
            </div>
            <div className="box-icon-benefits">
              <div className="wrap-icon">
                <img src="/images/icons/cash.svg" alt="icon" className="icon" />
              </div>
              <div className="content">
                <div className={"name h4"}>Fair Pricing</div>
                <p className="desc">
                  Transparent, competitive rates with clear quotations - no
                  hidden charges, ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flat-section pt-0">
        <div className="container">
          <div className="box-property-detail property-description bg-color-first p-4">
            <div className={"property-topic mb-6 h3"}>
              Need to move a shipment?
            </div>
            <p className="subtitle">
              Request a free quotation or track your shipment today. Our team is
              ready to help with air, ocean and road freight, warehousing and
              door-to-door delivery - whether you are shipping to the next
              island or the next continent.
            </p>
            <div className="button-group mt-3">
              <Link href="/cargo/quote" className="tf-btn primary hover-1 fs-18">
                Request a Quote
              </Link>{" "}
              <Link href="/contactus" className="tf-btn hover-1 fs-18">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
