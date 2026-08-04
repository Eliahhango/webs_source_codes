import { cargoServices } from "./data/cargo";

export default function indexPage() {
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
              <div className={"swiper-slide home-1"}>
                <div className={"box-banner box-banner-1"}>
                  <div className="container">
                    <div className="box-title">
                      <h3>Khamiar Express</h3>
                      <div className={"mb-8 h1"}>
                        Discover the wonders
                        <br />
                        of Tanzania
                      </div>
                      <p>
                        Safaris, adventures and cultural journeys crafted by
                        our expert local team.
                      </p>
                      <div className="button-group">
                        <a
                          href="/gridstyle01"
                          className={"tf-btn primary hover-1 fs-18"}
                        >
                          Explore Tours
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide home-1"}>
                <div className={"box-banner box-banner-2"}>
                  <div className="container">
                    <div className="box-title">
                      <h3>Khamiar Express</h3>
                      <div className={"mb-8 h1"}>
                        Escape to the spice
                        <br />
                        island of Zanzibar
                      </div>
                      <p>
                        Pristine beaches, Stone Town heritage and unforgettable
                        island experiences.
                      </p>
                      <div className="button-group">
                        <a
                          href="/gridstyle01"
                          className={"tf-btn primary hover-1 fs-18"}
                        >
                          Explore Tours
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide home-1"}>
                <div className={"box-banner box-banner-3"}>
                  <div className="container">
                    <div className="box-title">
                      <h3>Khamiar Express Cargo</h3>
                      <div className={"mb-8 h1"}>
                        Moving your cargo,
                        <br />
                        anywhere in the world
                      </div>
                      <p>
                        Air, ocean and road freight with real-time tracking
                        from Zanzibar to the globe.
                      </p>
                      <div className="button-group">
                        <a
                          href="/cargo"
                          className={"tf-btn primary hover-1 fs-18"}
                        >
                          Cargo Services
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"flex-direction-nav style-hero-1"}>
              <a href="/#" className={"flex-prev style-nav-1"}>
                <img src="/images/icons/arrow-left-1.svg" alt="prev" />
              </a>{" "}
              <a href="/#" className={"flex-next style-nav-1"}>
                <img src="/images/icons/arrow-right-2.svg" alt="next" />
              </a>
            </div>
          </div>
          <div className={"tab-content pos-1"}>
            <div className={"face active show"} role="tabpanel">
              <div className="container">
                <div className="form-s1">
                  <form action="/#">
                    <div className={"form-search transparent style-2"}>
                      <div className={"inner-group inner-1"}>
                        <div className={"form-group fg-1"}>
                          <label>Location</label>
                          <div className="group-select">
                            <div className="select-items">
                              <span className="current">
                                Where are you going
                              </span>
                              <ul className={"list w-1"}>
                                <li
                                  className="option"
                                  data-value="zanzibar-island"
                                >
                                  <a href="/#">
                                    <img
                                      src="/images/icons/place.svg"
                                      alt="icon"
                                      className="icon"
                                    />
                                    <div className="content">
                                      <div className="place">
                                        Zanzibar Island Tour
                                      </div>
                                      <div className="country">Tanzania</div>
                                    </div>
                                  </a>
                                </li>
                                <li className="option" data-value="kilimanjaro-adventure">
                                  <a href="/#">
                                    <img
                                      src="/images/icons/place.svg"
                                      alt="icon"
                                      className="icon"
                                    />
                                    <div className="content">
                                      <div className="place">
                                        Kilimanjaro Adventure
                                      </div>
                                      <div className="country">Tanzania</div>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  className="option"
                                  data-value="mnemba-island"
                                >
                                  <a href="/#">
                                    <img
                                      src="/images/icons/place.svg"
                                      alt="icon"
                                      className="icon"
                                    />
                                    <div className="content">
                                      <div className="place">
                                        Mnemba Island Classic Tour
                                      </div>
                                      <div className="country">
                                        Tanzania
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  className="option"
                                  data-value="ngorongoro-crater"
                                >
                                  <a href="/#">
                                    <img
                                      src="/images/icons/place.svg"
                                      alt="icon"
                                      className="icon"
                                    />
                                    <div className="content">
                                      <div className="place">
                                        Ngorongoro Crater Safari
                                      </div>
                                      <div className="country">Tanzania</div>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  className="option"
                                  data-value="spice-farm"
                                >
                                  <a href="/#">
                                    <img
                                      src="/images/icons/place.svg"
                                      alt="icon"
                                      className="icon"
                                    />
                                    <div className="content">
                                      <div className="place">
                                        Spice Farm Discovery
                                      </div>
                                      <div className="country">
                                        Tanzania
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  className="option"
                                  data-value="serengeti"
                                >
                                  <a href="/#">
                                    <img
                                      src="/images/icons/place.svg"
                                      alt="icon"
                                      className="icon"
                                    />
                                    <div className="content">
                                      <div className="place">
                                        Serengeti Great Migration
                                      </div>
                                      <div className="country">
                                        Tanzania
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className={"form-group fg-1"}>
                          <label>Date</label>
                          <div className="group-select">
                            <div className="select-items">
                              <div className="current">
                                <input
                                  type="text"
                                  className="date-input"
                                  placeholder="dd/mm/yyyy"
                                  readOnly
                                />{" "}
                                <img
                                  src="/images/icons/calendar.svg"
                                  alt="icon"
                                />
                              </div>
                              <div className={"list w-1"}>
                                <div className="datepicker-header">
                                  <button type="button" className="prev-month">
                                    <i className={"icon icon-CaretLeft"} />
                                  </button>
                                  <div className="datepicker-title">
                                    November 24
                                  </div>
                                  <button type="button" className="next-month">
                                    <i className={"icon icon-CaretRight"} />
                                  </button>
                                </div>
                                <div className="datepicker-weekdays">
                                  <div className={"datepicker-weekday weekend"}>
                                    Su
                                  </div>
                                  <div className="datepicker-weekday">Mo</div>
                                  <div className="datepicker-weekday">Tu</div>
                                  <div className="datepicker-weekday">We</div>
                                  <div className="datepicker-weekday">Th</div>
                                  <div className="datepicker-weekday">Fr</div>
                                  <div className={"datepicker-weekday weekend"}>
                                    Sa
                                  </div>
                                </div>
                                <div className="datepicker-days" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"form-group fg-1"}>
                          <label>Tour Type</label>
                          <div className="group-select">
                            <div className="select-items">
                              <span className="current">
                                Select Type
                                <i className={"icon icon-CaretDown"} />
                              </span>
                              <ul className={"list w-1"}>
                                <li data-value="adventure" className="option">
                                  <a href="/#">
                                    <div className="content">
                                      <div className="type">Adventure</div>
                                    </div>
                                  </a>
                                </li>
                                <li data-value="beach" className="option">
                                  <a href="/#">
                                    <div className="content">
                                      <div className="type">Beach</div>
                                    </div>
                                  </a>
                                </li>
                                <li data-value="camping" className="option">
                                  <a href="/#">
                                    <div className="content">
                                      <div className="type">Camping</div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className={"form-group fg-1"}>
                          <label>People</label>
                          <div className="group-select">
                            <div className="select-items">
                              <span className={"current guest-text"}>
                                <img src="/images/icons/users.svg" alt="icon" />{" "}
                                <i className={"icon icon-CaretDown"} />
                              </span>
                              <div className={"list w-1"}>
                                <div className="guest-item">
                                  <span>Adult</span>
                                  <div className="counter">
                                    <button type="button" className="minus">
                                      −
                                    </button>{" "}
                                    <input type="number" value="0" />{" "}
                                    <button type="button" className="plus">
                                      +
                                    </button>
                                  </div>
                                </div>
                                <div className="guest-item">
                                  <span>Children</span>
                                  <div className="counter">
                                    <button type="button" className="minus">
                                      −
                                    </button>{" "}
                                    <input type="number" value="0" />{" "}
                                    <button type="button" className="plus">
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-btn-filter">
                        <div className="box-filter">
                          <a href="/#" className={"tf-btn hover-1 btn-1"}>
                            <img src="/images/icons/advanced.svg" alt="icon" />
                          </a>
                        </div>
                        <button
                          type="submit"
                          className={"tf-btn primary hover-1 btn-1"}
                        >
                          <i className={"icon icon-search"} />{" "}
                          <span>Search</span>
                        </button>
                      </div>
                    </div>
                    <div className={"advanced-form left-1"}>
                      <div className="group-price">
                        <div className="box-title-price">
                          <span className="title-price">Price</span>
                          <div className="caption-price">
                            <span className="slider-range-value1">$0</span>{" "}
                            <span>-</span>{" "}
                            <span className="slider-range-value2">$10,000</span>
                          </div>
                        </div>
                        <div className="slider-range" />
                        <div className="slider-labels">
                          <div>
                            <input type="hidden" name="min-value" value={""} />{" "}
                            <input type="hidden" name="max-value" value={""} />
                          </div>
                        </div>
                      </div>
                      <div className="group-checkbox">
                        <div className="title-checkbox">Amentities</div>
                        <div className="group-amentities">
                          <div className="box-amentities">
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="convenience"
                              />{" "}
                              <label
                                htmlFor="convenience"
                                className="text-amenities"
                              >
                                Convenience
                              </label>
                            </div>
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="cost-effective"
                              />{" "}
                              <label
                                htmlFor="cost-effective"
                                className="text-amenities"
                              >
                                Cost-effective
                              </label>
                            </div>
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="social-interaction"
                              />{" "}
                              <label
                                htmlFor="social-interaction"
                                className="text-amenities"
                              >
                                Social Interaction
                              </label>
                            </div>
                          </div>
                          <div className="box-amentities">
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="safety-security"
                              />{" "}
                              <label
                                htmlFor="safety-security"
                                className="text-amenities"
                              >
                                Safety and Security
                              </label>
                            </div>
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="variety-experiences"
                              />{" "}
                              <label
                                htmlFor="variety-experiences"
                                className="text-amenities"
                              >
                                Variety of Experiences
                              </label>
                            </div>
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="less-stress"
                              />{" "}
                              <label
                                htmlFor="less-stress"
                                className="text-amenities"
                              >
                                Less Stress
                              </label>
                            </div>
                          </div>
                          <div className="box-amentities">
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="hassle-free-travel"
                              />{" "}
                              <label
                                htmlFor="hassle-free-travel"
                                className="text-amenities"
                              >
                                Hassle-Free Travel
                              </label>
                            </div>
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="cultural-immersion"
                              />{" "}
                              <label
                                htmlFor="cultural-immersion"
                                className="text-amenities"
                              >
                                Cultural Immersion
                              </label>
                            </div>
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="time-efficiency"
                              />{" "}
                              <label
                                htmlFor="time-efficiency"
                                className="text-amenities"
                              >
                                Time Efficiency
                              </label>
                            </div>
                          </div>
                          <div className="box-amentities">
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="unique-experiences"
                              />{" "}
                              <label
                                htmlFor="unique-experiences"
                                className="text-amenities"
                              >
                                Unique Experiences
                              </label>
                            </div>
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="peace-of-mind"
                              />{" "}
                              <label
                                htmlFor="peace-of-mind"
                                className="text-amenities"
                              >
                                Peace of Mind
                              </label>
                            </div>
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="educational-value"
                              />{" "}
                              <label
                                htmlFor="educational-value"
                                className="text-amenities"
                              >
                                Educational Value
                              </label>
                            </div>
                          </div>
                          <div className="box-amentities">
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="group-discounts"
                              />{" "}
                              <label
                                htmlFor="group-discounts"
                                className="text-amenities"
                              >
                                Group Discounts
                              </label>
                            </div>
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="romantic-atmosphere"
                              />{" "}
                              <label
                                htmlFor="romantic-atmosphere"
                                className="text-amenities"
                              >
                                Romantic Atmosphere
                              </label>
                            </div>
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="flexibility"
                              />{" "}
                              <label
                                htmlFor="flexibility"
                                className="text-amenities"
                              >
                                Flexibility
                              </label>
                            </div>
                          </div>
                          <div className="box-amentities">
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="stress-relief"
                              />{" "}
                              <label
                                htmlFor="stress-relief"
                                className="text-amenities"
                              >
                                Stress Relief
                              </label>
                            </div>
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="scenic-views"
                              />{" "}
                              <label
                                htmlFor="scenic-views"
                                className="text-amenities"
                              >
                                Scenic Views
                              </label>
                            </div>
                            <div className="amenities-item">
                              <input
                                type="checkbox"
                                className="tf-checkbox"
                                id="expert-guidance"
                              />{" "}
                              <label
                                htmlFor="expert-guidance"
                                className="text-amenities"
                              >
                                Expert Guidance
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flat-section bg-color-first">
        <div className="container">
          <div className="box-title text-center">
            <div className={"title h1"}>One company, two ways to move</div>
            <div className="subtitle text-color desc">
              Khamiar Express Ltd. - Tours &amp; Travel in Zanzibar, Cargo
              &amp; Logistics across East Africa
            </div>
          </div>
          <div className="tf-grid-layout gap-30 tf-col-2 sm-col-1 mt-3">
            <div
              className="box-division"
              style={{
                backgroundColor: "#fff",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 12px 34px rgba(0, 0, 0, 0.08)",
              }}
            >
              <div style={{ overflow: "hidden", lineHeight: 0 }}>
                <img
                  src="/images/locations/tz-safari.jpg"
                  alt="Tours and Travel"
                  style={{ width: "100%", height: 300, objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: 28 }}>
                <div
                  className={"h3"}
                  style={{ marginBottom: 12, color: "var(--heading-color, #111)" }}
                >
                  Tours &amp; Travel
                </div>
                <p className="subtitle" style={{ marginBottom: 22 }}>
                  Bespoke safaris, Zanzibar beach escapes, Stone Town heritage
                  walks and multi-day adventures across Tanzania - led by
                  expert local guides and tailored to you.
                </p>
                <div className="button-group">
                  <a
                    href="/gridstyle01"
                    className="tf-btn primary hover-1 fs-18"
                  >
                    Explore Tours
                  </a>{" "}
                  <a href="/destination1" className="tf-btn hover-1 fs-18">
                    Our Destinations
                  </a>
                </div>
              </div>
            </div>
            <div
              className="box-division"
              style={{
                backgroundColor: "#fff",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 12px 34px rgba(0, 0, 0, 0.08)",
              }}
            >
              <div style={{ overflow: "hidden", lineHeight: 0 }}>
                <img
                  src="/images/cargo/cargo-hero-1.jpg"
                  alt="Cargo and Logistics"
                  style={{ width: "100%", height: 300, objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: 28 }}>
                <div
                  className={"h3"}
                  style={{ marginBottom: 12, color: "var(--heading-color, #111)" }}
                >
                  Cargo &amp; Logistics
                </div>
                <p className="subtitle" style={{ marginBottom: 22 }}>
                  Air, ocean and road freight with customs clearance,
                  warehousing, packaging and door-to-door delivery - with live
                  tracking from pickup to final destination.
                </p>
                <div className="button-group">
                  <a href="/cargo" className="tf-btn primary hover-1 fs-18">
                    Explore Cargo Services
                  </a>{" "}
                  <a href="/cargo/track" className="tf-btn hover-1 fs-18">
                    Track Shipment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"flat-section tf-vacation-hero"}>
        <div className="container">
          <div className="flat-img-with-text">
            <div className="content-left">
              <div
                className={
                  "inner-left wow animate__animated animate__fadeInLeft"
                }
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <img src="/images/vacation/vc-01.jpg" alt="image" />
              </div>
              <div className="inner-right">
                <img
                  src="/images/vacation/vc-02.jpg"
                  alt="image"
                  className={"wow animate__animated animate__fadeInUp"}
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                />{" "}
                <img
                  src="/images/vacation/vc-03.jpg"
                  alt="image"
                  className={"wow animate__animated animate__fadeInUp"}
                  data-wow-duration="1s"
                  data-wow-delay="0.35s"
                />
              </div>
              <div
                className={
                  "rotating-badge wow animate__animated animate__zoomIn"
                }
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="circle">
                  <svg viewBox={"0 0 180 180"}>
                    <defs>
                      <path
                        id="circlePath"
                        d={
                          "M 90, 90 m -65, 0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
                        }
                      />
                    </defs>
                    <text className="brand">
                      <textPath href="#circlePath" startOffset="0%">
                        Khamiar Express
                      </textPath>
                    </text>
                    <text>
                      <textPath href="#circlePath" startOffset="38%">
                        Explore new lands
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="icon">
                  <img src="/images/icons/arrow-up.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div className="content-right">
              <div
                className={"box-title wow animate__animated animate__fadeInUp"}
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className={"title h1"}>
                  Escape the hustle and bustle, enjoy the perfect vacation.
                </div>
                <div className="subtitle">From the plains of the Serengeti to the beaches of Zanzibar, Khamiar Express crafts unforgettable journeys. Enjoy comfortable lodges, experienced guides, and seamless travel across Tanzania's most iconic destinations - from wildlife safaris and Kilimanjaro treks to the spice islands of Zanzibar.</div>
              </div>
              <div className="flat-service">
                <div
                  className={
                    "box-benefit wow animate__animated animate__fadeInUp"
                  }
                  data-wow-delay="0.3s"
                >
                  <div className="icon-box">
                    <img
                      src="/images/icons/national.svg"
                      alt="icon"
                      className="icon"
                    />
                  </div>
                  <div className="content-box">
                    <div className={"h3 link name"}>Best Travel Agents</div>
                    <div className="description">Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                  </div>
                </div>
                <div
                  className={
                    "box-benefit wow animate__animated animate__fadeInUp"
                  }
                  data-wow-delay="0.45s"
                >
                  <div className="icon-box">
                    <img
                      src="/images/icons/location.svg"
                      alt="icon"
                      className="icon"
                    />
                  </div>
                  <div className="content-box">
                    <div className={"h3 link name"}>Travel Guidelines</div>
                    <div className="description">Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                  </div>
                </div>
              </div>
              <div
                className={"wg-contact wow animate__animated animate__fadeInUp"}
                data-wow-delay="0.6s"
              >
                <div className="box-info">
                  <i className={"icon-phone icon"} />
                  <div className="content">
                    <div className="subtitle">Booking Number</div>
                    <div className={"phone h4"}>
                      <a href="tel:+255774050301">+255 774 050 301</a>
                    </div>
                  </div>
                </div>
                <a
                  href="/gridstylefullwidth"
                  className={"tf-btn primary hover-1"}
                >
                  Booking Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"flat-section bg-color-first"}>
        <div className="container">
          <div
            className={"box-title wow animate__animated animate__fadeInUp"}
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className={"title h1"}>Explore top destinations</div>
            <div className={"subtitle text-color desc"}>
              Hand-picked places our travelers love most across Tanzania
            </div>
          </div>
        </div>
        <div className="slider-layout-right">
          <div
            className={
              "swiper tf-tour-showcase tf-sw-right wow animate__animated animate__fadeIn swiper-shadow"
            }
            data-wow-duration="1s"
            data-wow-delay="0.4s"
            data-preview="3.7"
            data-tablet="3"
            data-mobile-sm="2"
            data-mobile="1"
            data-space-lg="40"
            data-space-md="20"
            data-space="20"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <a className={"images-group img-style"} href="/gridstyle01">
                      <img
                        src="/images/locations/dest-zanzibar.jpg"
                        alt="image"
                        className="aspect-3-2"
                      />
                    </a>
                    <div className="tag">
                      <a className="flag-total" href="/gridstyle01">
                        17 tours
                      </a>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className={"tour-title h3"}>
                      <a href="/gridstyle01" className="link">
                        Zanzibar Island
                      </a>
                    </div>
                    <div className={"subtitle multi-ellipsis"}>Beach escapes, Stone Town heritage walks and unforgettable island adventures in the spice capital of East Africa.</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <a className={"images-group img-style"} href="/gridstyle01">
                      <img
                        src="/images/locations/dest-serengeti.jpg"
                        alt="image"
                        className="aspect-3-2"
                      />
                    </a>
                    <div className="tag">
                      <a className="flag-total" href="/gridstyle01">
                        7 tours
                      </a>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className={"tour-title h3"}>
                      <a href="/gridstyle01" className="link">
                        Serengeti National Park
                      </a>
                    </div>
                    <div className={"subtitle multi-ellipsis"}>Witness the Great Migration and the endless plains that inspired Africa's most legendary safari.</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <a className={"images-group img-style"} href="/gridstyle01">
                      <img
                        src="/images/locations/dest-manyara.jpg"
                        alt="image"
                        className="aspect-3-2"
                      />
                    </a>
                    <div className="tag">
                      <a className="flag-total" href="/gridstyle01">
                        5 tours
                      </a>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className={"tour-title h3"}>
                      <a href="/gridstyle01" className="link">
                        Lake Manyara
                      </a>
                    </div>
                    <div className={"subtitle multi-ellipsis"}>Flamingos, tree-climbing lions and the dramatic Rift Valley escarpment of northern Tanzania.</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <a className={"images-group img-style"} href="/gridstyle01">
                      <img
                        src="/images/locations/dest-nyerere.jpg"
                        alt="image"
                        className="aspect-3-2"
                      />
                    </a>
                    <div className="tag">
                      <a className="flag-total" href="/gridstyle01">
                        5 tours
                      </a>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className={"tour-title h3"}>
                      <a href="/gridstyle01" className="link">
                        Nyerere National Park
                      </a>
                    </div>
                    <div className={"subtitle multi-ellipsis"}>Wilderness boat safaris along the Rufiji River in one of Africa's largest protected reserves.</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <a className={"images-group img-style"} href="/gridstyle01">
                      <img
                        src="/images/locations/dest-mnemba.jpg"
                        alt="image"
                        className="aspect-3-2"
                      />
                    </a>
                    <div className="tag">
                      <a className="flag-total" href="/gridstyle01">
                        4 tours
                      </a>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className={"tour-title h3"}>
                      <a href="/gridstyle01" className="link">
                        Mnemba Island
                      </a>
                    </div>
                    <div className={"subtitle multi-ellipsis"}>Turquoise waters, private sandbanks and world-class snorkeling just off Zanzibar's northeast coast.</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <a className={"images-group img-style"} href="/gridstyle01">
                      <img
                        src="/images/locations/dest-tarangire.jpg"
                        alt="image"
                        className="aspect-3-2"
                      />
                    </a>
                    <div className="tag">
                      <a className="flag-total" href="/gridstyle01">
                        3 tours
                      </a>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className={"tour-title h3"}>
                      <a href="/gridstyle01" className="link">
                        Tarangire National Park
                      </a>
                    </div>
                    <div className={"subtitle multi-ellipsis"}>Massive elephant herds beneath ancient baobabs in Tanzania's hidden safari gem.</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <a className={"images-group img-style"} href="/gridstyle01">
                      <img
                        src="/images/locations/dest-jozani.jpg"
                        alt="image"
                        className="aspect-3-2"
                      />
                    </a>
                    <div className="tag">
                      <a className="flag-total" href="/gridstyle01">
                        3 tours
                      </a>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className={"tour-title h3"}>
                      <a href="/gridstyle01" className="link">
                        Jozani Forest
                      </a>
                    </div>
                    <div className={"subtitle multi-ellipsis"}>Walk among the rare red colobus monkeys in Zanzibar's lush indigenous forest reserve.</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <a className={"images-group img-style"} href="/gridstyle01">
                      <img
                        src="/images/locations/dest-ngorongoro.jpg"
                        alt="image"
                        className="aspect-3-2"
                      />
                    </a>
                    <div className="tag">
                      <a className="flag-total" href="/gridstyle01">
                        2 tours
                      </a>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className={"tour-title h3"}>
                      <a href="/gridstyle01" className="link">
                        Ngorongoro Crater
                      </a>
                    </div>
                    <div className={"subtitle multi-ellipsis"}>The world's largest intact caldera, home to the Big Five on the floor of an ancient volcano.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-control">
              <div className={"sw-pagination-2 sw-pagination-wish"} />
            </div>
          </div>
          <div className="box-title text-center mt-3">
            <a href="/gridstyle01" className="tf-btn primary hover-1 fs-18">
              View All Tours
            </a>
          </div>
        </div>
      </div>
      <div className={"flat-section flat-recommended"}>
        <div className="container">
          <div
            className={
              "box-title text-center wow animate__animated animate__fadeInUp"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className={"title h1"}>Our best-selling tours</div>
            <div className={"subtitle text-color desc"}>
              Explore the tours chosen and recommended by a multitude of
              travelers.
            </div>
          </div>
          <div className="flat-tab-recommend">
            <div className="row">
              <div
                className={
                  "tf-grid-layout tf-col-4 xl-col-3 lg-col-2 sm-col-1 wow animate__animated animate__fadeIn"
                }
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <div className={"images-group img-style"}>
                      <a href="/toursingle1?tour=art-and-tradition-exploring-zanzibar-s-cultural-scene" className="image-link">
                        <img src="/images/locations/tour-01.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery1"
                            data-src="/images/locations/dest-zanzibar.jpg"
                          >
                            <img
                              src="/images/icons/picture.svg"
                              alt="icon"
                              className="icon"
                            />{" "}
                            <span className="total-image">5</span>
                          </a>{" "}
                          <a
                            data-fancybox="gallery1"
                            data-src="/images/locations/dest-serengeti.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery1"
                            data-src="/images/locations/dest-ngorongoro.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery1"
                            data-src="/images/locations/dest-tarangire.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery1"
                            data-src="/images/locations/dest-manyara.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox="gallery1"
                            data-src="/images/locations/dest-zanzibar.jpg"
                          >
                            <img
                              src="/images/icons/camera.svg"
                              alt="icon"
                              className="icon"
                            />
                          </a>
                        </div>
                        <div className="btn-wished">
                          <img
                            src="/images/icons/icon-wishlist.svg"
                            alt="icon"
                            className="icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className="content-top">
                      <div className="rating">
                        <ul className="list-star">
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                        </ul>
                        <div className="rate">
                          <div className="total-rate">4.9</div>
                          <div className="review">(1.387 rating)</div>
                        </div>
                      </div>
                    </div>
                    <div className={"tour-title h5"}>
                      <a href="/toursingle1?tour=art-and-tradition-exploring-zanzibar-s-cultural-scene" className={"link multi-ellipsis"}>
                        Art and tradition: Exploring Zanzibar's cultural scene
                      </a>
                    </div>
                    <div className="content-info-middle">
                      <div className={"info person"}>
                        <img
                          src="/images/icons/users.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-people">02 people</span>
                      </div>
                      <div className={"info date"}>
                        <img
                          src="/images/icons/calendar.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-day">4 days</span>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <div className="address">
                        <img
                          src="/images/icons/place.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="location">Nyerere National Park</span>
                      </div>
                      <div className={"price h5"}>$265,00</div>
                    </div>
                  </div>
                </div>
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <div className={"images-group img-style"}>
                      <a href="/toursingle1?tour=mikumi-day-trip-safari" className="image-link">
                        <img src="/images/locations/tour-02.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery2"
                            data-src="/images/locations/dest-mikumi.jpg"
                          >
                            <img
                              src="/images/icons/picture.svg"
                              alt="icon"
                              className="icon"
                            />{" "}
                            <span className="total-image">5</span>
                          </a>{" "}
                          <a
                            data-fancybox="gallery2"
                            data-src="/images/locations/dest-nyerere.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery2"
                            data-src="/images/locations/dest-kilimanjaro.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery2"
                            data-src="/images/locations/dest-stonetown.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery2"
                            data-src="/images/locations/dest-mnemba.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox="gallery2"
                            data-src="/images/locations/dest-serengeti.jpg"
                          >
                            <img
                              src="/images/icons/camera.svg"
                              alt="icon"
                              className="icon"
                            />
                          </a>
                        </div>
                        <div className="btn-wished">
                          <img
                            src="/images/icons/icon-wishlist.svg"
                            alt="icon"
                            className="icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className="content-top">
                      <div className="rating">
                        <ul className="list-star">
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                        </ul>
                        <div className="rate">
                          <div className="total-rate">5</div>
                          <div className="review">(1.100)</div>
                        </div>
                      </div>
                    </div>
                    <div className={"tour-title h5"}>
                      <a href="/toursingle1?tour=mikumi-day-trip-safari" className={"link multi-ellipsis"}>
                        Mikumi Day Trip Safari
                      </a>
                    </div>
                    <div className="content-info-middle">
                      <div className={"info person"}>
                        <img
                          src="/images/icons/users.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-people">20 People</span>
                      </div>
                      <div className={"info date"}>
                        <img
                          src="/images/icons/calendar.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-day">4 days</span>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <div className="address">
                        <img
                          src="/images/icons/place.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="location">Lake Manyara</span>
                      </div>
                      <div className={"price h5"}>$265,00</div>
                    </div>
                  </div>
                </div>
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <div className={"images-group img-style"}>
                      <a href="/toursingle1?tour=tarangire-ngorongoro-2-day-safari" className="image-link">
                        <img src="/images/locations/tour-03.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery3"
                            data-src="/images/locations/dest-jozani.jpg"
                          >
                            <img
                              src="/images/icons/picture.svg"
                              alt="icon"
                              className="icon"
                            />{" "}
                            <span className="total-image">5</span>
                          </a>{" "}
                          <a
                            data-fancybox="gallery3"
                            data-src="/images/locations/dest-spicefarm.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery3"
                            data-src="/images/locations/dest-zanzibar.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery3"
                            data-src="/images/locations/dest-serengeti.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery3"
                            data-src="/images/locations/dest-ngorongoro.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox="gallery3"
                            data-src="/images/locations/dest-ngorongoro.jpg"
                          >
                            <img
                              src="/images/icons/camera.svg"
                              alt="icon"
                              className="icon"
                            />
                          </a>
                        </div>
                        <div className="btn-wished">
                          <img
                            src="/images/icons/icon-wishlist.svg"
                            alt="icon"
                            className="icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className="content-top">
                      <div className="rating">
                        <ul className="list-star">
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                        </ul>
                        <div className="rate">
                          <div className="total-rate">5</div>
                          <div className="review">(1.100)</div>
                        </div>
                      </div>
                    </div>
                    <div className={"tour-title h5"}>
                      <a href="/toursingle1?tour=tarangire-ngorongoro-2-day-safari" className={"link multi-ellipsis"}>
                        Tarangire & Ngorongoro 2-Day Safari
                      </a>
                    </div>
                    <div className="content-info-middle">
                      <div className={"info person"}>
                        <img
                          src="/images/icons/users.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-people">20 People</span>
                      </div>
                      <div className={"info date"}>
                        <img
                          src="/images/icons/calendar.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-day">4 days</span>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <div className="address">
                        <img
                          src="/images/icons/place.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="location">Nyerere</span>
                      </div>
                      <div className={"price h5"}>$265,00</div>
                    </div>
                  </div>
                </div>
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <div className={"images-group img-style"}>
                      <a href="/toursingle1?tour=serengeti-great-migration-safari" className="image-link">
                        <img src="/images/locations/tour-04.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery4"
                            data-src="/images/locations/dest-tarangire.jpg"
                          >
                            <img
                              src="/images/icons/picture.svg"
                              alt="icon"
                              className="icon"
                            />{" "}
                            <span className="total-image">5</span>
                          </a>{" "}
                          <a
                            data-fancybox="gallery4"
                            data-src="/images/locations/dest-manyara.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery4"
                            data-src="/images/locations/dest-mikumi.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery4"
                            data-src="/images/locations/dest-nyerere.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery4"
                            data-src="/images/locations/dest-kilimanjaro.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox="gallery4"
                            data-src="/images/locations/dest-tarangire.jpg"
                          >
                            <img
                              src="/images/icons/camera.svg"
                              alt="icon"
                              className="icon"
                            />
                          </a>
                        </div>
                        <div className="btn-wished">
                          <img
                            src="/images/icons/icon-wishlist.svg"
                            alt="icon"
                            className="icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className="content-top">
                      <div className="rating">
                        <ul className="list-star">
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                        </ul>
                        <div className="rate">
                          <div className="total-rate">5</div>
                          <div className="review">(1.100)</div>
                        </div>
                      </div>
                    </div>
                    <div className={"tour-title h5"}>
                      <a href="/toursingle1?tour=serengeti-great-migration-safari" className={"link multi-ellipsis"}>
                        Serengeti Great Migration Safari
                      </a>
                    </div>
                    <div className="content-info-middle">
                      <div className={"info person"}>
                        <img
                          src="/images/icons/users.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-people">20 People</span>
                      </div>
                      <div className={"info date"}>
                        <img
                          src="/images/icons/calendar.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-day">4 days</span>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <div className="address">
                        <img
                          src="/images/icons/place.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="location">Serengeti</span>
                      </div>
                      <div className={"price h5"}>$265,00</div>
                    </div>
                  </div>
                </div>
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <div className={"images-group img-style"}>
                      <a href="/toursingle1?tour=mnemba-island-royal-retreat" className="image-link">
                        <img src="/images/locations/tour-05.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery5"
                            data-src="/images/locations/dest-stonetown.jpg"
                          >
                            <img
                              src="/images/icons/picture.svg"
                              alt="icon"
                              className="icon"
                            />{" "}
                            <span className="total-image">5</span>
                          </a>{" "}
                          <a
                            data-fancybox="gallery5"
                            data-src="/images/locations/dest-mnemba.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery5"
                            data-src="/images/locations/dest-jozani.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery5"
                            data-src="/images/locations/dest-spicefarm.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery5"
                            data-src="/images/locations/dest-zanzibar.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox="gallery5"
                            data-src="/images/locations/dest-manyara.jpg"
                          >
                            <img
                              src="/images/icons/camera.svg"
                              alt="icon"
                              className="icon"
                            />
                          </a>
                        </div>
                        <div className="btn-wished">
                          <img
                            src="/images/icons/icon-wishlist.svg"
                            alt="icon"
                            className="icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className="content-top">
                      <div className="rating">
                        <ul className="list-star">
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                        </ul>
                        <div className="rate">
                          <div className="total-rate">5</div>
                          <div className="review">(1.100)</div>
                        </div>
                      </div>
                    </div>
                    <div className={"tour-title h5"}>
                      <a href="/toursingle1?tour=mnemba-island-royal-retreat" className={"link multi-ellipsis"}>
                        Mnemba Island Royal Retreat
                      </a>
                    </div>
                    <div className="content-info-middle">
                      <div className={"info person"}>
                        <img
                          src="/images/icons/users.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-people">20 People</span>
                      </div>
                      <div className={"info date"}>
                        <img
                          src="/images/icons/calendar.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-day">4 days</span>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <div className="address">
                        <img
                          src="/images/icons/place.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="location">Mnemba Island</span>
                      </div>
                      <div className={"price h5"}>$265,00</div>
                    </div>
                  </div>
                </div>
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <div className={"images-group img-style"}>
                      <a href="/toursingle1?tour=jozani-forest-guided-walk" className="image-link">
                        <img src="/images/locations/tour-06.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery6"
                            data-src="/images/locations/dest-serengeti.jpg"
                          >
                            <img
                              src="/images/icons/picture.svg"
                              alt="icon"
                              className="icon"
                            />{" "}
                            <span className="total-image">5</span>
                          </a>{" "}
                          <a
                            data-fancybox="gallery6"
                            data-src="/images/locations/dest-ngorongoro.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery6"
                            data-src="/images/locations/dest-tarangire.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery6"
                            data-src="/images/locations/dest-manyara.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery6"
                            data-src="/images/locations/dest-mikumi.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox="gallery6"
                            data-src="/images/locations/dest-mikumi.jpg"
                          >
                            <img
                              src="/images/icons/camera.svg"
                              alt="icon"
                              className="icon"
                            />
                          </a>
                        </div>
                        <div className="btn-wished">
                          <img
                            src="/images/icons/icon-wishlist.svg"
                            alt="icon"
                            className="icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className="content-top">
                      <div className="rating">
                        <ul className="list-star">
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                        </ul>
                        <div className="rate">
                          <div className="total-rate">5</div>
                          <div className="review">(1.100)</div>
                        </div>
                      </div>
                    </div>
                    <div className={"tour-title h5"}>
                      <a href="/toursingle1?tour=jozani-forest-guided-walk" className={"link multi-ellipsis"}>
                        Jozani Forest Guided Walk
                      </a>
                    </div>
                    <div className="content-info-middle">
                      <div className={"info person"}>
                        <img
                          src="/images/icons/users.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-people">20 People</span>
                      </div>
                      <div className={"info date"}>
                        <img
                          src="/images/icons/calendar.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-day">4 days</span>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <div className="address">
                        <img
                          src="/images/icons/place.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="location">Jozani Forest</span>
                      </div>
                      <div className={"price h5"}>$265,00</div>
                    </div>
                  </div>
                </div>
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <div className={"images-group img-street img-style"}>
                      <a href="/toursingle1?tour=7-days-discover-northern-tanzania-safari" className="image-link">
                        <img src="/images/locations/tour-07.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery7"
                            data-src="/images/locations/dest-nyerere.jpg"
                          >
                            <img
                              src="/images/icons/picture.svg"
                              alt="icon"
                              className="icon"
                            />{" "}
                            <span className="total-image">5</span>
                          </a>{" "}
                          <a
                            data-fancybox="gallery7"
                            data-src="/images/locations/dest-kilimanjaro.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery7"
                            data-src="/images/locations/dest-stonetown.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery7"
                            data-src="/images/locations/dest-mnemba.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery7"
                            data-src="/images/locations/dest-jozani.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox="gallery7"
                            data-src="/images/locations/dest-nyerere.jpg"
                          >
                            <img
                              src="/images/icons/camera.svg"
                              alt="icon"
                              className="icon"
                            />
                          </a>
                        </div>
                        <div className="btn-wished">
                          <img
                            src="/images/icons/icon-wishlist.svg"
                            alt="icon"
                            className="icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className="content-top">
                      <div className="rating">
                        <ul className="list-star">
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                        </ul>
                        <div className="rate">
                          <div className="total-rate">5</div>
                          <div className="review">(1.100)</div>
                        </div>
                      </div>
                    </div>
                    <div className={"tour-title h5"}>
                      <a href="/toursingle1?tour=7-days-discover-northern-tanzania-safari" className={"link multi-ellipsis"}>
                        7 Days Discover Northern Tanzania Safari
                      </a>
                    </div>
                    <div className="content-info-middle">
                      <div className={"info person"}>
                        <img
                          src="/images/icons/users.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-people">20 People</span>
                      </div>
                      <div className={"info date"}>
                        <img
                          src="/images/icons/calendar.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-day">4 days</span>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <div className="address">
                        <img
                          src="/images/icons/place.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="location">Arusha</span>
                      </div>
                      <div className={"price h5"}>$265,00</div>
                    </div>
                  </div>
                </div>
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <div className={"images-group img-style"}>
                      <a href="/toursingle1?tour=stone-town-markets-and-heritage-in-zanzibar" className="image-link">
                        <img src="/images/locations/tour-08.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery8"
                            data-src="/images/locations/dest-spicefarm.jpg"
                          >
                            <img
                              src="/images/icons/picture.svg"
                              alt="icon"
                              className="icon"
                            />{" "}
                            <span className="total-image">5</span>
                          </a>{" "}
                          <a
                            data-fancybox="gallery8"
                            data-src="/images/locations/dest-zanzibar.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery8"
                            data-src="/images/locations/dest-serengeti.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery8"
                            data-src="/images/locations/dest-ngorongoro.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery8"
                            data-src="/images/locations/dest-tarangire.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox="gallery8"
                            data-src="/images/locations/dest-kilimanjaro.jpg"
                          >
                            <img
                              src="/images/icons/camera.svg"
                              alt="icon"
                              className="icon"
                            />
                          </a>
                        </div>
                        <div className="btn-wished">
                          <img
                            src="/images/icons/icon-wishlist.svg"
                            alt="icon"
                            className="icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className="content-top">
                      <div className="rating">
                        <ul className="list-star">
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                          <li className={"icon icon-star"} />
                        </ul>
                        <div className="rate">
                          <div className="total-rate">5</div>
                          <div className="review">(1.100)</div>
                        </div>
                      </div>
                    </div>
                    <div className={"tour-title h5"}>
                      <a href="/toursingle1?tour=stone-town-markets-and-heritage-in-zanzibar" className={"link multi-ellipsis"}>
                        Stone Town: Markets and Heritage in Zanzibar
                      </a>
                    </div>
                    <div className="content-info-middle">
                      <div className={"info person"}>
                        <img
                          src="/images/icons/users.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-people">20 People</span>
                      </div>
                      <div className={"info date"}>
                        <img
                          src="/images/icons/calendar.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="total-day">4 days</span>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <div className="address">
                        <img
                          src="/images/icons/place.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="location">Stone Town</span>
                      </div>
                      <div className={"price h5"}>$265,00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className={"flat-section-v4 tf-benefit bg-first"}>
        <div className="container">
          <div
            className={
              "box-title text-center wow animate__animated animate__fadeInUp"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className={"title text-white h1"}>Why choose Khamiar Express</div>
            <div className={"subtitle desc text-white"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
          </div>
          <div
            className={
              "swiper tf-swiper-device wow animate__animated animate__fadeIn"
            }
            data-wow-duration="1s"
            data-wow-delay="0.4s"
            data-preview="4"
            data-tablet="2"
            data-mobile="1"
            data-space="40"
            data-space-md="40"
            data-space-lg="40"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="box-icon-benefits">
                  <div className="wrap-icon">
                    <img
                      src="/images/icons/shopping-cart-icon.svg"
                      alt="icon"
                      className="icon"
                    />
                  </div>
                  <div className="content">
                    <div className={"name h3"}>
                      <a href="/aboutus" className="link">
                        Local Experts
                      </a>
                    </div>
                    <p className="desc">
                      A Zanzibar-based team that knows Tanzania inside out and
                      crafts every itinerary around you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-icon-benefits">
                  <div className="wrap-icon">
                    <img
                      src="/images/icons/shipper-icon.svg"
                      alt="icon"
                      className="icon"
                    />
                  </div>
                  <div className="content">
                    <div className={"name h3"}>
                      <a href="/teammember" className="link">
                        Professional Team
                      </a>
                    </div>
                    <p className="desc">
                      Experienced guides and coordinators committed to a safe,
                      seamless trip from arrival to departure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-icon-benefits">
                  <div className="wrap-icon">
                    <img
                      src="/images/icons/service-1.svg"
                      alt="icon"
                      className="icon"
                    />
                  </div>
                  <div className="content">
                    <div className={"name h3"}>
                      <a href="/gridstyle01" className="link">
                        New Experiences
                      </a>
                    </div>
                    <p className="desc">
                      From Stone Town spice tours to Serengeti safaris, discover
                      moments you will remember for a lifetime.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-icon-benefits">
                  <div className="wrap-icon">
                    <img
                      src="/images/icons/trip.svg"
                      alt="icon"
                      className="icon"
                    />
                  </div>
                  <div className="content">
                    <div className={"name h3"}>
                      <a href="/cargo/prices" className="link">
                        Honest Pricing
                      </a>
                    </div>
                    <p className="desc">
                      Transparent, competitive rates for every journey and every
                      shipment — no hidden fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className={
                  "sw-pagination sw-pagination-device style-white text-center"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flat-section bg-color-first">
        <div className="container">
          <div
            className={
              "box-title text-center wow animate__animated animate__fadeInUp"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className={"title h1"}>Cargo &amp; Logistics</div>
            <div className="subtitle text-color desc">
              Complete freight and delivery solutions trusted across East Africa
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
                    <a href={`/cargo/${s.slug}`} className="link">
                      {s.title}
                    </a>
                  </div>
                  <p className="desc">{s.short}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="box-property-detail property-description bg-white mt-3 p-4 text-center">
            <div className={"property-topic h3"}>
              Need a quote or want to track a shipment?
            </div>
            <p className="subtitle">
              Get a free quotation within 24 hours or follow your cargo in real
              time.
            </p>
            <div className="button-group mt-3 justify-content-center">
              <a href="/cargo/quote" className="tf-btn primary hover-1 fs-18">
                Request a Quote
              </a>{" "}
              <a href="/cargo/track" className="tf-btn hover-1 fs-18">
                Track Your Shipment
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-section">
        <div className="container">
          <div className="content">
            <div
              className={"box-title wow animate__animated animate__fadeInUp"}
              data-wow-duration="1s"
              data-wow-delay="0.25s"
            >
              <div className={"title h1"}>
                Journey to discover amazing nature
              </div>
              <div className={"desc subtitle"}>
                Discover the very best of Tanzania with Khamiar Express.
              </div>
              <div className="button-group mt-3 justify-content-center">
                <a href="/gridstyle01" className="tf-btn primary hover-1">
                  Explore Tours
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flat-testimonial">
        <div className="container">
          <div
            className={
              "box-title text-center wow animate__animated animate__fadeInUp"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className={"title h1"}>What our clients say</div>
            <div className={"subtitle desc"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
          </div>
          <div
            dir="ltr"
            className={
              "swiper tf-sw-testimonial wow animate__animated animate__fadeInUp"
            }
            data-wow-duration="1s"
            data-wow-delay="0.4s"
            data-preview="1"
            data-tablet="1"
            data-mobile-sm="1"
            data-mobile="1"
            data-space-lg="40"
            data-space-md="40"
            data-space="40"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="box-testimonial-item">
                  <div className={"description h3"}>Our honeymoon in Zanzibar was flawless from start to finish. Khamiar Express arranged everything - the beachfront villa, the Stone Town walking tour and a day trip to Mnemba Island. Their team was always one message away.</div>
                  <div className={"avatar avt-60 round"}>
                    <img src="/images/users/user-3.png" alt="avatar" />
                  </div>
                  <div className="info">
                    <div className={"name h4"}>Sarah &amp; Mark</div>
                    <div className="position">United Kingdom</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-testimonial-item">
                  <div className={"description h3"}>The Serengeti safari exceeded every expectation. Our guide was incredibly knowledgeable, the lodges were comfortable, and every detail - from park permits to picnic lunches - was handled for us. I would travel with Khamiar Express again in a heartbeat.</div>
                  <div className={"avatar avt-60 round"}>
                    <img src="/images/users/user-1.png" alt="avatar" />
                  </div>
                  <div className="info">
                    <div className={"name h4"}>Daniel</div>
                    <div className="position">Germany</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-testimonial-item">
                  <div className={"description h3"}>Khamiar Express Cargo shipped our equipment from Dar es Salaam to Dubai without a single delay. Customs clearance was handled for us and the tracking updates kept me informed the whole way. Reliable and professional.</div>
                  <div className={"avatar avt-60 round"}>
                    <img src="/images/users/user-2.png" alt="avatar" />
                  </div>
                  <div className="info">
                    <div className={"name h4"}>Ahmed</div>
                    <div className="position">Tanzania</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className={"sw-pagination sw-pagination-tes text-center d-none"}
              />
            </div>
            <div className={"flex-direction-nav style-hero-1"}>
              <a href="/#" className={"flex-prev style-nav-1"}>
                <img src="/images/icons/arrow-left-1.svg" alt="prev" />
              </a>{" "}
              <a href="/#" className={"flex-next style-nav-1"}>
                <img src="/images/icons/arrow-right-2.svg" alt="next" />
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="tf-best-trip">
        <div className="tf-scroll-text">
          <div className={"heading h1"}>Best Trip - Best Travel</div>
          <div className={"tag-image tag-1 animate-rtl"}>
            <img src="/images/locations/tour-14.jpg" alt="image" />
          </div>
          <div className={"tag-image tag-2 animate-ltr"}>
            <img src="/images/locations/tour-15.jpg" alt="image" />
          </div>
          <div className={"tag-image tag-3 animate-rtl"}>
            <img src="/images/locations/tour-16.jpg" alt="image" />
          </div>
          <div className={"tag-image tag-4 animate-ltr"}>
            <img src="/images/locations/tour-17.jpg" alt="image" />
          </div>
        </div>
      </div>
      <div className="flat-section">
        <div className="container">
          <div className={"box-title text-center"}>
            <div
              className={"wow animate__animated animate__fadeInUp title h1"}
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              Latest news &amp; articles
            </div>
            <div
              className={
                "desc text-subtitle text-color wow animate__animated animate__fadeInUp"
              }
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              Tips &amp; insights we collected through the years.
            </div>
          </div>
          <div
            className={
              "swiper tf-swiper-latest wow animate__animated animate__fadeIn"
            }
            data-wow-duration="1s"
            data-wow-delay="0.4s"
            data-preview="3"
            data-tablet="2"
            data-mobile-sm="2"
            data-mobile="1"
            data-space-lg="40"
            data-space-md="20"
            data-space="20"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className={"flat-blog-item style-1 hover-img"}>
                  <div className="img-style">
                    <img
                      src="/images/locations/tour-18.jpg"
                      alt="Blog"
                      className="aspect-4-5"
                    />
                    <div className="detail">Discovery</div>
                  </div>
                  <div className="content-box">
                    <span className={"d-inline-flex date-post"}>
                      <img
                        src="/images/icons/clock.svg"
                        alt="clock"
                        className="icon"
                      />
                      26 August, 2024
                    </span>
                    <div className={"name h3"}>
                      <a href="/blogdetail" className={"link multi-ellipsis"}>
                        Exploring Hidden Gems in Stone Town: A Traveler's Guide
                      </a>
                    </div>
                    <a href="/blogdetail" className="read-more">
                      Read More
                      <img
                        src="/images/icons/icon-arrow-right.svg"
                        alt="icon"
                        className="icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"flat-blog-item style-1 hover-img"}>
                  <div className="img-style">
                    <img
                      src="/images/locations/tour-19.jpg"
                      alt="Blog"
                      className="aspect-4-5"
                    />
                    <div className="detail">Discovery</div>
                  </div>
                  <div className="content-box">
                    <span className={"d-inline-flex date-post"}>
                      <img
                        src="/images/icons/clock.svg"
                        alt="clock"
                        className="icon"
                      />
                      26 August, 2024
                    </span>
                    <div className={"name h3"}>
                      <a href="/blogdetail" className={"link multi-ellipsis"}>
                        Top 10 Adventure Activities to Try in Serengeti
                      </a>
                    </div>
                    <a href="/blogdetail" className="read-more">
                      Read More
                      <img
                        src="/images/icons/icon-arrow-right.svg"
                        alt="icon"
                        className="icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"flat-blog-item style-1 hover-img"}>
                  <div className="img-style">
                    <img
                      src="/images/locations/tour-20.jpg"
                      alt="Blog"
                      className="aspect-4-5"
                    />
                    <div className="detail">Discovery</div>
                  </div>
                  <div className="content-box">
                    <span className={"d-inline-flex date-post"}>
                      <img
                        src="/images/icons/clock.svg"
                        alt="clock"
                        className="icon"
                      />
                      26 August, 2024
                    </span>
                    <div className={"name h3"}>
                      <a href="/blogdetail" className={"link multi-ellipsis"}>
                        Sustainable Tourism Tips for Your Zanzibar Getaway
                      </a>
                    </div>
                    <a href="/blogdetail" className="read-more">
                      Read More
                      <img
                        src="/images/icons/icon-arrow-right.svg"
                        alt="icon"
                        className="icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className={"sw-pagination sw-pagination-latest text-center"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
