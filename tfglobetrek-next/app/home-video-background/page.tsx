export default function home_video_backgroundPage() {
  return (
    <>
      <div className="hero">
        <div className={"slider-default style-video"}>
          <div className={"wrap-slider home-1"}>
            <div className="wrap-video">
              <video preload="none" playsInline autoPlay loop muted>
                <source src="/images/video-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="box-banner">
              <div className="container">
                <div className="box-title">
                  <div className={"mb-8 h1"}>
                    Discover the world
                    <br />
                    start your journey
                  </div>
                  <p>
                    Escape the hustle and bustle, enjoy the perfect vacation.
                  </p>
                  <div className="button-group">
                    <a
                      href="/gridstyle01"
                      className={"tf-btn primary hover-1 fs-18"}
                    >
                      Start Exploring
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"tab-content pos-1"}>
            <div className={"face active show"} role="tabpanel">
              <div className="container">
                <div className="form-s1">
                  <form action="/home-video-background#">
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
                                  data-value="fuji-mountain"
                                >
                                  <a href="/home-video-background#">
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
                                <li className="option" data-value="swiss-alps">
                                  <a href="/home-video-background#">
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
                                  data-value="london-classic"
                                >
                                  <a href="/home-video-background#">
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
                                  data-value="mediterranean-sail"
                                >
                                  <a href="/home-video-background#">
                                    <img
                                      src="/images/icons/place.svg"
                                      alt="icon"
                                      className="icon"
                                    />
                                    <div className="content">
                                      <div className="place">
                                        Mediterranean Sailing Tour
                                      </div>
                                      <div className="country">Tanzania</div>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  className="option"
                                  data-value="cape-town-discovery"
                                >
                                  <a href="/home-video-background#">
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
                                  data-value="world-discovery"
                                >
                                  <a href="/home-video-background#">
                                    <img
                                      src="/images/icons/place.svg"
                                      alt="icon"
                                      className="icon"
                                    />
                                    <div className="content">
                                      <div className="place">
                                        World Discovery Tour
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
                                  <a href="/home-video-background#">
                                    <div className="content">
                                      <div className="type">Adventure</div>
                                    </div>
                                  </a>
                                </li>
                                <li data-value="beach" className="option">
                                  <a href="/home-video-background#">
                                    <div className="content">
                                      <div className="type">Beach</div>
                                    </div>
                                  </a>
                                </li>
                                <li data-value="camping" className="option">
                                  <a href="/home-video-background#">
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
                          <a
                            href="/home-video-background#"
                            className={"tf-btn hover-1 btn-1"}
                          >
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
            <div className={"title h1"}>Find your perfect travel and tours</div>
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
                    <a className={"images-group img-style"} href="/liststyle">
                      <img
                        src="/images/categories/ct-01.jpg"
                        alt="image"
                        className="aspect-3-2"
                      />
                    </a>
                    <div className="tag">
                      <a className="flag-total" href="/home-video-background#">
                        29 tours
                      </a>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className={"tour-title h3"}>
                      <a href="/liststyle" className="link">
                        Adventure
                      </a>
                    </div>
                    <div className={"subtitle multi-ellipsis"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <a className={"images-group img-style"} href="/liststyle">
                      <img
                        src="/images/categories/ct-02.jpg"
                        alt="image"
                        className="aspect-3-2"
                      />
                    </a>
                    <div className="tag">
                      <a className="flag-total" href="/home-video-background#">
                        29 tours
                      </a>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className={"tour-title h3"}>
                      <a href="/liststyle" className="link">
                        Discovery
                      </a>
                    </div>
                    <div className={"subtitle multi-ellipsis"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <a className={"images-group img-style"} href="/liststyle">
                      <img
                        src="/images/categories/ct-03.jpg"
                        alt="image"
                        className="aspect-3-2"
                      />
                    </a>
                    <div className="tag">
                      <a className="flag-total" href="/home-video-background#">
                        29 tours
                      </a>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className={"tour-title h3"}>
                      <a href="/liststyle" className="link">
                        Beach
                      </a>
                    </div>
                    <div className={"subtitle multi-ellipsis"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <a className={"images-group img-style"} href="/liststyle">
                      <img
                        src="/images/categories/ct-04.jpg"
                        alt="image"
                        className="aspect-3-2"
                      />
                    </a>
                    <div className="tag">
                      <a className="flag-total" href="/home-video-background#">
                        29 tours
                      </a>
                    </div>
                  </div>
                  <div className="archive-bottom">
                    <div className={"tour-title h3"}>
                      <a href="/liststyle" className="link">
                        Wildlife
                      </a>
                    </div>
                    <div className={"subtitle multi-ellipsis"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-control">
              <div className={"sw-pagination-2 sw-pagination-wish"} />
            </div>
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
                            data-fancybox="gallery1"
                            data-src="/images/locations/dest-manyara.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery1"
                            data-src="/images/locations/dest-mikumi.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery1"
                            data-src="/images/locations/dest-nyerere.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery1"
                            data-src="/images/locations/dest-kilimanjaro.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox={""}
                            data-type="iframe"
                            data-src="https://www.youtube.com/embed/x7X9w_GIm1s?autoplay=1&amp;t=20s"
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
                            data-fancybox="gallery2"
                            data-src="/images/locations/dest-mnemba.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery2"
                            data-src="/images/locations/dest-jozani.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery2"
                            data-src="/images/locations/dest-spicefarm.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery2"
                            data-src="/images/locations/dest-zanzibar.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox={""}
                            data-type="iframe"
                            data-src="https://www.youtube.com/embed/x7X9w_GIm1s?autoplay=1&amp;t=20s"
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
                            data-fancybox="gallery3"
                            data-src="/images/locations/dest-ngorongoro.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery3"
                            data-src="/images/locations/dest-tarangire.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery3"
                            data-src="/images/locations/dest-manyara.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery3"
                            data-src="/images/locations/dest-mikumi.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox={""}
                            data-type="iframe"
                            data-src="https://www.youtube.com/watch?v=SnB4M9ygl38"
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
                            data-fancybox="gallery4"
                            data-src="/images/locations/dest-kilimanjaro.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery4"
                            data-src="/images/locations/dest-stonetown.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery4"
                            data-src="/images/locations/dest-mnemba.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery4"
                            data-src="/images/locations/dest-jozani.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox={""}
                            data-type="iframe"
                            data-src="https://www.youtube.com/watch?v=nFd-_Q7fpxE"
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
                            data-fancybox="gallery5"
                            data-src="/images/locations/dest-zanzibar.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery5"
                            data-src="/images/locations/dest-serengeti.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery5"
                            data-src="/images/locations/dest-ngorongoro.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery5"
                            data-src="/images/locations/dest-tarangire.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox={""}
                            data-type="iframe"
                            data-src="https://www.youtube.com/watch?v=jmoPo11ktN4"
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
                            data-src="/images/locations/dest-manyara.jpg"
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
                            data-src="/images/locations/dest-mikumi.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery6"
                            data-src="/images/locations/dest-nyerere.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery6"
                            data-src="/images/locations/dest-kilimanjaro.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery6"
                            data-src="/images/locations/dest-stonetown.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox={""}
                            data-type="iframe"
                            data-src="https://www.youtube.com/watch?v=rS6mrKjq_oc"
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
                            data-src="/images/locations/dest-mnemba.jpg"
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
                            data-src="/images/locations/dest-jozani.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery7"
                            data-src="/images/locations/dest-spicefarm.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery7"
                            data-src="/images/locations/dest-zanzibar.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery7"
                            data-src="/images/locations/dest-serengeti.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox={""}
                            data-type="iframe"
                            data-src="https://www.youtube.com/watch?v=xId3cHWsta4"
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
                            data-src="/images/locations/dest-ngorongoro.jpg"
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
                            data-src="/images/locations/dest-tarangire.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery8"
                            data-src="/images/locations/dest-manyara.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery8"
                            data-src="/images/locations/dest-mikumi.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery8"
                            data-src="/images/locations/dest-nyerere.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            href="javascript:void(0)"
                            className={"count view-video"}
                            data-fancybox={""}
                            data-type="iframe"
                            data-src="https://www.youtube.com/watch?v=O9fAFuk4V74"
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
                      <a href="/home-video-background#" className="link">
                        Best Travel Agents
                      </a>
                    </div>
                    <p className="desc">
                      Choose us, and you'll enjoy exclusive offers and 24/7
                      dedicated customer service.
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
                      <a href="/home-video-background#" className="link">
                        Professional Team
                      </a>
                    </div>
                    <p className="desc">
                      With a professional team, we are committed to bringing you
                      perfect vacations.
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
                      <a href="/home-video-background#" className="link">
                        New Experience
                      </a>
                    </div>
                    <p className="desc">
                      We turn your travel dreams into reality with unforgettable
                      and safe experiences.
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
                      <a href="/home-video-background#" className="link">
                        Price and Quality
                      </a>
                    </div>
                    <p className="desc">
                      Explore the world with unique journeys, competitive
                      prices, and 5-star service.
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
          <div className={"flat-section-v3 pb-0"}>
            <div
              dir="ltr"
              className={"swiper tf-sw-partners color-1"}
              data-preview="6"
              data-tablet="4"
              data-mobile-sm="3"
              data-mobile="2"
              data-space="15"
              data-space-md="40"
              data-space-lg="40"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className={"partner-item partner-02"}>
                    <a href="/home-video-background#">
                      <img
                        src="/images/logo/logo-company-1.svg"
                        alt="image-partner"
                        className="par-link"
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className={"partner-item partner-02"}>
                    <a href="/home-video-background#">
                      <img
                        src="/images/logo/logo-company-2.svg"
                        alt="image-partner"
                        className="img-partner"
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className={"partner-item partner-02"}>
                    <a href="/home-video-background#">
                      <img
                        src="/images/logo/logo-company-3.svg"
                        alt="image-partner"
                        className="img-partner"
                      />
                    </a>
                  </div>
                </div>
                <div className={"swiper-slide "}>
                  <div className={"partner-item partner-02"}>
                    <a href="/home-video-background#">
                      <img
                        src="/images/logo/logo-company-4.svg"
                        alt="image-partner"
                        className="img-partner"
                      />
                    </a>
                  </div>
                </div>
                <div className={"swiper-slide "}>
                  <div className={"partner-item partner-02"}>
                    <a href="/home-video-background#">
                      <img
                        src="/images/logo/logo-company-5.svg"
                        alt="image-partner"
                        className="img-partner"
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className={"partner-item partner-02"}>
                    <a href="/home-video-background#">
                      <img
                        src="/images/logo/logo-company-6.svg"
                        alt="image-partner"
                        className="img-partner"
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className={"partner-item partner-02"}>
                    <a href="/home-video-background#">
                      <img
                        src="/images/logo/logo-company-4.svg"
                        alt="image-partner"
                        className="img-partner"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-section">
        <div className="container">
          <div className="content">
            <div
              className={"tf-action wow animate__animated animate__zoomIn"}
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <a
                href="https://www.youtube.com/embed/x7X9w_GIm1s?autoplay=1"
                className="tf-btn"
                data-fancybox={""}
                data-type="iframe"
                data-width="1280"
                data-height="720"
              >
                <i className={"icon-play-filled icon"} />
              </a>
            </div>
            <div
              className={"box-title wow animate__animated animate__fadeInUp"}
              data-wow-duration="1s"
              data-wow-delay="0.25s"
            >
              <div className={"title h1"}>
                Journey to discover amazing nature
              </div>
              <div className={"desc subtitle"}>Discover the very best of Tanzania with Khamiar Express.<br />Discover the very best of Tanzania with Khamiar Express.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flat-section">
        <div className="container">
          <div
            className={
              "box-title text-center wow animate__animated animate__fadeInUp"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className={"title h1"}>Top choice for your trip</div>
            <div className={"subtitle text-color desc"}>
              Discover the Most Popular Places to Visit
            </div>
          </div>
          <div
            className={
              "tf-sw-mobile swiper wow animate__animated animate__fadeIn"
            }
            data-wow-duration="1s"
            data-wow-delay="0.4s"
            data-screen="575"
            data-preview="1"
            data-space="15"
          >
            <div className={"swiper-wrapper tf-destination grid-1"}>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="destination-post">
                    <a href="/destinationdetail" className="img-style">
                      <img src="/images/locations/dest-zanzibar.jpg" alt="img-tour" />
                    </a>
                    <div className="content">
                      <div className="h4">
                        <a
                          href="/destinationdetail"
                          className={"link single-ellipsis"}
                        >
                          Zanzibar Island
                        </a>
                      </div>
                      <div className={"total-tour subtitle"}>28 Tour</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="destination-post">
                    <a href="/destinationdetail" className="img-style">
                      <img src="/images/locations/dest-serengeti.jpg" alt="img-tour" />
                    </a>
                    <div className="content">
                      <div className="h4">
                        <a
                          href="/destinationdetail"
                          className={"link single-ellipsis"}
                        >
                          Serengeti National Park
                        </a>
                      </div>
                      <div className={"total-tour subtitle"}>42 Tour</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="destination-post">
                    <a href="/destinationdetail" className="img-style">
                      <img src="/images/locations/dest-ngorongoro.jpg" alt="img-tour" />
                    </a>
                    <div className="content">
                      <div className="h4">
                        <a
                          href="/destinationdetail"
                          className={"link single-ellipsis"}
                        >
                          Ngorongoro Crater
                        </a>
                      </div>
                      <div className={"total-tour subtitle"}>31 Tour</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="destination-post">
                    <a href="/destinationdetail" className="img-style">
                      <img src="/images/locations/dest-tarangire.jpg" alt="img-tour" />
                    </a>
                    <div className="content">
                      <div className="h4">
                        <a
                          href="/destinationdetail"
                          className={"link single-ellipsis"}
                        >
                          Tarangire National Park
                        </a>
                      </div>
                      <div className={"total-tour subtitle"}>24 Tour</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="destination-post">
                    <a href="/destinationdetail" className="img-style">
                      <img src="/images/locations/dest-kilimanjaro.jpg" alt="img-tour" />
                    </a>
                    <div className="content">
                      <div className="h4">
                        <a
                          href="/destinationdetail"
                          className={"link single-ellipsis"}
                        >
                          Mount Kilimanjaro
                        </a>
                      </div>
                      <div className={"total-tour subtitle"}>19 Tour</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className={"sw-pagination sw-pagination-topchose text-center"}
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flat-testimonial">
        <div className="container">
          <div
            className={
              "box-title text-center wow animate__animated animate__fadeInUp"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className={"title h1"}>What they are say!</div>
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
                  <div className={"description h3"}>From the plains of the Serengeti to the beaches of Zanzibar, Khamiar Express crafts unforgettable journeys. Enjoy comfortable lodges, experienced guides, and seamless travel across Tanzania's most iconic destinations - from wildlife safaris and Kilimanjaro treks to the spice islands of Zanzibar.</div>
                  <div className={"avatar avt-60 round"}>
                    <img src="/images/users/user-3.png" alt="avatar" />
                  </div>
                  <div className="info">
                    <div className={"name h4"}>Courtney Henry</div>
                    <div className="position">Khamiar Express</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-testimonial-item">
                  <div className={"description h3"}>From the plains of the Serengeti to the beaches of Zanzibar, Khamiar Express crafts unforgettable journeys. Enjoy comfortable lodges, experienced guides, and seamless travel across Tanzania's most iconic destinations - from wildlife safaris and Kilimanjaro treks to the spice islands of Zanzibar.</div>
                  <div className={"avatar avt-60 round"}>
                    <img src="/images/users/user-1.png" alt="avatar" />
                  </div>
                  <div className="info">
                    <div className={"name h4"}>Courtney Henry</div>
                    <div className="position">Khamiar Express</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-testimonial-item">
                  <div className={"description h3"}>From the plains of the Serengeti to the beaches of Zanzibar, Khamiar Express crafts unforgettable journeys. Enjoy comfortable lodges, experienced guides, and seamless travel across Tanzania's most iconic destinations - from wildlife safaris and Kilimanjaro treks to the spice islands of Zanzibar.</div>
                  <div className={"avatar avt-60 round"}>
                    <img src="/images/users/user-2.png" alt="avatar" />
                  </div>
                  <div className="info">
                    <div className={"name h4"}>Courtney Henry</div>
                    <div className="position">Khamiar Express</div>
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
              <a
                href="/home-video-background#"
                className={"flex-prev style-nav-1"}
              >
                <img src="/images/icons/arrow-left-1.svg" alt="prev" />
              </a>{" "}
              <a
                href="/home-video-background#"
                className={"flex-next style-nav-1"}
              >
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
