export default function homepage2Page() {
  return (
    <>
      {" "}
      <div className="hero">
        <div className="container-3">
          <div className="flat-hero">
            <div className="content-left">
              <div className="box-title">
                <div className={"title h1"}>Experience amazing journeys</div>
                <p className="description">Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</p>
              </div>
            </div>
            <div className="content-right">
              <div className="inner-left">
                <img src="/images/locations/tour-21.jpg" alt="image" />{" "}
                <img src="/images/locations/tour-22.jpg" alt="image" />
              </div>
              <div className="inner-right">
                <img src="/images/locations/tour-23.jpg" alt="image" />
              </div>
              <div className="rotating-badge">
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
            <div className="tab-content">
              <div className={"fade active show"} role="tabpanel">
                <div className="form-s1">
                  <form action="//search">
                    <div className={"form-search bg-white style-1"}>
                      <div className="inner-group">
                        <div className="form-group">
                          <label>Location</label>
                          <div className="group-select">
                            <div className="select-items">
                              <span className="current">
                                Where are you going
                              </span>
                              <ul className="list">
                                <li
                                  className="option"
                                  data-value="fuji-mountain"
                                >
                                  <a href="/homepage2#">
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
                                  <a href="/homepage2#">
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
                                  <a href="/homepage2#">
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
                                  <a href="/homepage2#">
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
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
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
                              <div className="list">
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
                        <div className="form-group">
                          <label>Tour Type</label>
                          <div className="group-select">
                            <div className="select-items">
                              <span className="current">
                                Select Type
                                <i className={"icon icon-CaretDown"} />
                              </span>
                              <ul className="list">
                                <li data-value="adventure" className="option">
                                  <a href="/homepage2#">
                                    <div className="content">
                                      <div className="type">Adventure</div>
                                    </div>
                                  </a>
                                </li>
                                <li data-value="beach" className="option">
                                  <a href="/homepage2#">
                                    <div className="content">
                                      <div className="type">Beach</div>
                                    </div>
                                  </a>
                                </li>
                                <li data-value="camping" className="option">
                                  <a href="/homepage2#">
                                    <div className="content">
                                      <div className="type">Camping</div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>People</label>
                          <div className="group-select">
                            <div className="select-items">
                              <span className={"current guest-text"}>
                                <img src="/images/icons/users.svg" alt="icon" />{" "}
                                <i className={"icon icon-CaretDown"} />
                              </span>
                              <div className="list">
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
                            href="/homepage2#"
                            className={"tf-btn hover-1 p-4"}
                          >
                            <img
                              src="/images/icons/advanced.svg"
                              alt="icon"
                              className="icon"
                            />
                          </a>
                        </div>
                        <button
                          type="submit"
                          className={"tf-btn primary hover-2 p-4"}
                        >
                          <span className={"icon icon-search"} />
                        </button>
                      </div>
                    </div>
                    <div className="advanced-form">
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
                        <div className={"group-amentities grid-4"}>
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
      </div>{" "}
      <div className={"tf-partner home-2 mt_114"}>
        <div className="container">
          <div className="box-content">
            <div
              className={
                "inner-left d-flex flex-wrap item-center gap-4 wow animate__animated animate__fadeInLeft"
              }
              data-wow-delay="0.1s"
            >
              <span>Follow Us:</span>
              <ul className={"d-flex item-center flex-wrap gap-3"}>
                <li>
                  <a
                    className={
                      "box-icon line w-44 round wow animate__animated animate__zoomIn"
                    }
                    data-wow-delay="0.2s"
                  >
                    <i className={"icon icon-facebook"} />
                  </a>
                </li>
                <li>
                  <a
                    className={
                      "box-icon line w-44 round wow animate__animated animate__zoomIn"
                    }
                    data-wow-delay="0.3s"
                  >
                    <i className={"icon icon-tw"} />
                  </a>
                </li>
                <li>
                  <a
                    className={
                      "box-icon line w-44 round wow animate__animated animate__zoomIn"
                    }
                    data-wow-delay="0.4s"
                  >
                    <i className={"icon icon-linked"} />
                  </a>
                </li>
                <li>
                  <a
                    className={
                      "box-icon line w-44 round wow animate__animated animate__zoomIn"
                    }
                    data-wow-delay="0.5s"
                  >
                    <i className={"icon icon-instgram"} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="inner-right">
              <div
                dir="ltr"
                className={"swiper tf-sw-partners"}
                data-preview="5"
                data-tablet="3"
                data-mobile-sm="3"
                data-mobile="2"
                data-space="20"
                data-space-md="20"
                data-space-lg="20"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className={"partner-item partner-01"}>
                      <a href="/homepage2#">
                        <img
                          src="/images/logo/logo-company-1.svg"
                          alt="image-partner"
                          className="par-link"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className={"partner-item partner-01"}>
                      <a href="/homepage2#">
                        <img
                          src="/images/logo/logo-company-2.svg"
                          alt="image-partner"
                          className="img-partner"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className={"partner-item partner-01"}>
                      <a href="/homepage2#">
                        <img
                          src="/images/logo/logo-company-3.svg"
                          alt="image-partner"
                          className="img-partner"
                        />
                      </a>
                    </div>
                  </div>
                  <div className={"swiper-slide "}>
                    <div className={"partner-item partner-01"}>
                      <a href="/homepage2#">
                        <img
                          src="/images/logo/logo-company-4.svg"
                          alt="image-partner"
                          className="img-partner"
                        />
                      </a>
                    </div>
                  </div>
                  <div className={"swiper-slide "}>
                    <div className={"partner-item partner-01"}>
                      <a href="/homepage2#">
                        <img
                          src="/images/logo/logo-company-5.svg"
                          alt="image-partner"
                          className="img-partner"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className={"partner-item partner-01"}>
                      <a href="/homepage2#">
                        <img
                          src="/images/logo/logo-company-6.svg"
                          alt="image-partner"
                          className="img-partner"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className={"partner-item partner-01"}>
                      <a href="/homepage2#">
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
      </div>{" "}
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
            <div
              className={
                "swiper tf-swiper-tour wow animate__animated animate__fadeIn"
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
                  <div className={"item hover-img"}>
                    <div className="archive-top">
                      <div className={"images-group img-style"}>
                        <a href="/toursingle1?tour=tarangire-national-park-safari" className="image-link">
                          <img
                            src="/images/locations/tour-24.jpg"
                            alt="image"
                          />
                        </a>
                        <div className="group-meta">
                          <div className="tag-meta">
                            <div className="flag-tag">Featured</div>
                            <a
                              href="javascript:void(0)"
                              className={"count image"}
                              data-fancybox="gallery1"
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
                              data-fancybox="gallery1"
                              data-src="/images/locations/dest-spicefarm.jpg"
                              style={{ display: "none" }}
                            />{" "}
                            <a
                              data-fancybox="gallery1"
                              data-src="/images/locations/dest-zanzibar.jpg"
                              style={{ display: "none" }}
                            />{" "}
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
                        <a href="/toursingle1?tour=tarangire-national-park-safari"
                          className={"link multi-ellipsis"}
                        >
                          Tarangire National Park Safari
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
                        <div className={"info time"}>
                          <img
                            src="/images/icons/clock.svg"
                            alt="icon"
                            className="icon"
                          />{" "}
                          <span className="day">04/12/2024</span>
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
                </div>
                <div className="swiper-slide">
                  <div className={"item hover-img"}>
                    <div className="archive-top">
                      <div className={"images-group img-style"}>
                        <a href="/toursingle1?tour=lake-manyara-maasai-village-safari" className="image-link">
                          <img
                            src="/images/locations/tour-25.jpg"
                            alt="image"
                          />
                        </a>
                        <div className="group-meta">
                          <div className="tag-meta">
                            <div className="flag-tag">Featured</div>
                            <a
                              href="javascript:void(0)"
                              className={"count image"}
                              data-fancybox="gallery2"
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
                              data-fancybox="gallery2"
                              data-src="/images/locations/dest-manyara.jpg"
                              style={{ display: "none" }}
                            />{" "}
                            <a
                              data-fancybox="gallery2"
                              data-src="/images/locations/dest-mikumi.jpg"
                              style={{ display: "none" }}
                            />{" "}
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
                        <a href="/toursingle1?tour=lake-manyara-maasai-village-safari"
                          className={"link multi-ellipsis"}
                        >
                          Lake Manyara & Maasai Village Safari
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
                        <div className={"info time"}>
                          <img
                            src="/images/icons/clock.svg"
                            alt="icon"
                            className="icon"
                          />{" "}
                          <span className="day">04/12/2024</span>
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
                </div>
                <div className="swiper-slide">
                  <div className={"item hover-img"}>
                    <div className="archive-top">
                      <div className={"images-group img-style"}>
                        <a href="/toursingle1?tour=nyerere-national-park-boat-safari" className="image-link">
                          <img
                            src="/images/locations/tour-26.jpg"
                            alt="image"
                          />
                        </a>
                        <div className="group-meta">
                          <div className="tag-meta">
                            <div className="flag-tag">Featured</div>
                            <a
                              href="javascript:void(0)"
                              className={"count image"}
                              data-fancybox="gallery3"
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
                              data-fancybox="gallery3"
                              data-src="/images/locations/dest-mnemba.jpg"
                              style={{ display: "none" }}
                            />{" "}
                            <a
                              data-fancybox="gallery3"
                              data-src="/images/locations/dest-jozani.jpg"
                              style={{ display: "none" }}
                            />{" "}
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
                        <a href="/toursingle1?tour=nyerere-national-park-boat-safari"
                          className={"link multi-ellipsis"}
                        >
                          Nyerere National Park Boat Safari
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
                        <div className={"info time"}>
                          <img
                            src="/images/icons/clock.svg"
                            alt="icon"
                            className="icon"
                          />{" "}
                          <span className="day">04/12/2024</span>
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
                </div>
              </div>
              <div className="slider-control">
                <div
                  className={"sw-pagination sw-pagination-tour text-center"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className={"flat-section flat-types pt-0"}>
        <div className="container">
          <div
            className={
              "box-title text-center wow animate__animated animate__fadeInUp"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className={"title h1"}>Types of tours</div>
            <div className={"subtitle desc"}>
              Explore the tours chosen and recommended by a multitude of
              travelers.
            </div>
          </div>
          <div
            className={"wow wow animate__animated animate__fadeIn"}
            data-wow-delay="0.4s"
            data-wow-duration="1s"
          >
            <div
              dir="ltr"
              className={"swiper tf-sw-types"}
              data-preview="6"
              data-desktop-sm="5"
              data-tablet="4"
              data-mobile-sm="3"
              data-mobile="2"
              data-space="28"
              data-space-xl="28"
              data-space-md="28"
              data-space-lg="28"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="/liststyle" className="box-type">
                    <div className="icon-box">
                      <img
                        className="icon"
                        src="/images/icons/discovery.svg"
                        alt="icon"
                      />
                    </div>
                    <div className={"content text-center"}>
                      <div className={"name h4"}>Discovery</div>
                      <p className={"subtitle total-tour"}>28 Tours</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="/liststyle" className="box-type">
                    <div className="icon-box">
                      <img
                        className="icon"
                        src="/images/icons/caplecar.svg"
                        alt="icon"
                      />
                    </div>
                    <div className={"content text-center"}>
                      <div className={"name h4"}>Caple car</div>
                      <p className={"subtitle total-tour"}>28 Tours</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="/liststyle" className="box-type">
                    <div className="icon-box">
                      <img
                        className="icon"
                        src="/images/icons/sailboat.svg"
                        alt="icon"
                      />
                    </div>
                    <div className={"content text-center"}>
                      <div className={"name h4"}>Sailboat</div>
                      <p className={"subtitle total-tour"}>28 Tours</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="/liststyle" className="box-type">
                    <div className="icon-box">
                      <img
                        className="icon"
                        src="/images/icons/beach.svg"
                        alt="icon"
                      />
                    </div>
                    <div className={"content text-center"}>
                      <div className={"name h4"}>Beach</div>
                      <p className={"subtitle total-tour"}>28 Tours</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="/liststyle" className="box-type">
                    <div className="icon-box">
                      <img
                        className="icon"
                        src="/images/icons/camping-3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className={"content text-center"}>
                      <div className={"name h4"}>Camping</div>
                      <p className={"subtitle total-tour"}>28 Tours</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="/liststyle" className="box-type">
                    <div className="icon-box">
                      <img
                        className="icon"
                        src="/images/icons/climbing.svg"
                        alt="icon"
                      />
                    </div>
                    <div className={"content text-center"}>
                      <div className={"name h4"}>Climbing</div>
                      <p className={"subtitle total-tour"}>28 Tours</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="slider-control">
                <div
                  className={"sw-pagination sw-pagination-types text-center"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div
        className={
          "tf-vacation-hero mx-4 style-01 flat-section p-0 bg-color-first"
        }
      >
        <div className={"container flat-service"}>
          <div
            className={
              "swiper tf-swiper-device wow animate__animated animate__fadeIn"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
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
                      <a href="/homepage2#" className="link">
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
                      <a href="/homepage2#" className="link">
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
                      <a href="/homepage2#" className="link">
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
                      <a href="/homepage2#" className="link">
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
            <div className="slider-control">
              <div
                className={"sw-pagination sw-pagination-device text-center"}
              />
            </div>
          </div>
        </div>
        <div className="flat-img-with-text">
          <div
            className={"box-image wow animate__animated animate__fadeIn"}
            data-wow-delay="0.2s"
            data-wow-duration="1s"
          >
            <div className={"image-left hover-img-wrap overflow-hidden"}>
              <img src="/images/locations/tour-27.jpg" alt="image" />
            </div>
            <div className={"image-right hover-img-wrap overflow-hidden"}>
              <img src="/images/locations/tour-20.jpg" alt="image" />
            </div>
          </div>
          <div className="content-right">
            <div
              className={"box-title wow animate__animated animate__fadeInUp"}
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className={"title h1"}>Why choose Khamiar Express.</div>
              <div className="subtitle">
                Discover the Most Popular Places to Visit.
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
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
              <ul
                className={"nav-tab wow animate__animated animate__fadeInUp"}
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                role="tablist"
              >
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="/homepage2#viewAll"
                    className={"nav-link-item active"}
                    id="viewAll-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="viewAll"
                    aria-selected="true"
                  >
                    View All
                  </a>
                  <div className="total-tour">
                    <span>20 Tours</span>
                  </div>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="/homepage2#beach"
                    className="nav-link-item"
                    id="beach-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="beach"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Beach
                  </a>
                  <div className="total-tour">
                    <span>20 Tours</span>
                  </div>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="/homepage2#capleCar"
                    className="nav-link-item"
                    id="capleCar-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="capleCar"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Cable Car
                  </a>
                  <div className="total-tour">
                    <span>20 Tours</span>
                  </div>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="/homepage2#sailboat"
                    className="nav-link-item"
                    id="sailboat-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="sailboat"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Sailboat
                  </a>
                  <div className="total-tour">
                    <span>20 Tours</span>
                  </div>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="/homepage2#discovery"
                    className="nav-link-item"
                    id="discovery-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="discovery"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Discovery
                  </a>
                  <div className="total-tour">
                    <span>20 Tours</span>
                  </div>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="/homepage2#climbing"
                    className="nav-link-item"
                    id="climbing-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="climbing"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Climbing
                  </a>
                  <div className="total-tour">
                    <span>20 Tours</span>
                  </div>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className={"tab-pane fade show active"}
                  id="viewAll"
                  role="tabpanel"
                  aria-labelledby="viewAll-tab"
                >
                  <div
                    className={
                      "tf-grid-layout tf-col-2 lg-col-2 sm-col-1 wrap-list"
                    }
                  >
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=cultural-immersion-spice-and-traditions-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-29.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery4"
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
                                data-fancybox="gallery4"
                                data-src="/images/locations/dest-ngorongoro.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery4"
                                data-src="/images/locations/dest-tarangire.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=cultural-immersion-spice-and-traditions-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Cultural Immersion: Spice and Traditions in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=tropical-paradise-beach-bliss-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-07.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery5"
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
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-kilimanjaro.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-stonetown.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=tropical-paradise-beach-bliss-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Tropical Paradise: Beach Bliss in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=kilimanjaro-climb-7-days-via-rongai-route" className="image-link">
                            <img
                              src="/images/locations/tour-28.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery6"
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
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-zanzibar.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-serengeti.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=kilimanjaro-climb-7-days-via-rongai-route"
                            className={"link multi-ellipsis"}
                          >
                            Kilimanjaro Climb: 7 Days via Rongai Route
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
                            <span className="location">Kilimanjaro</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=safari-blue-dhow-sailing-adventure-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-30.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery7"
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
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-mikumi.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-nyerere.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=safari-blue-dhow-sailing-adventure-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Safari Blue: Dhow Sailing Adventure in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={"tab-pane fade"}
                  id="beach"
                  role="tabpanel"
                  aria-labelledby="beach-tab"
                >
                  <div
                    className={
                      "tf-grid-layout tf-col-2 lg-col-2 sm-col-1 wrap-list"
                    }
                  >
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=cultural-immersion-spice-and-traditions-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-29.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery4"
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
                                data-fancybox="gallery4"
                                data-src="/images/locations/dest-jozani.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery4"
                                data-src="/images/locations/dest-spicefarm.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery4"
                                data-src="/images/locations/dest-zanzibar.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery4"
                                data-src="/images/locations/dest-serengeti.jpg"
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
                          <a href="/toursingle1?tour=cultural-immersion-spice-and-traditions-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Cultural Immersion: Spice and Traditions in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=tropical-paradise-beach-bliss-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-07.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery5"
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
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-tarangire.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-manyara.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-mikumi.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-nyerere.jpg"
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
                          <a href="/toursingle1?tour=tropical-paradise-beach-bliss-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Tropical Paradise: Beach Bliss in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=kilimanjaro-climb-7-days-via-rongai-route" className="image-link">
                            <img
                              src="/images/locations/tour-28.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-kilimanjaro.jpg"
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
                                data-src="/images/locations/dest-stonetown.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-mnemba.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-jozani.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-spicefarm.jpg"
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
                          <a href="/toursingle1?tour=kilimanjaro-climb-7-days-via-rongai-route"
                            className={"link multi-ellipsis"}
                          >
                            Kilimanjaro Climb: 7 Days via Rongai Route
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
                            <span className="location">Kilimanjaro</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=safari-blue-dhow-sailing-adventure-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-30.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery7"
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
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-serengeti.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-ngorongoro.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-tarangire.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-manyara.jpg"
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
                          <a href="/toursingle1?tour=safari-blue-dhow-sailing-adventure-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Safari Blue: Dhow Sailing Adventure in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={"tab-pane fade"}
                  id="capleCar"
                  role="tabpanel"
                  aria-labelledby="capleCar-tab"
                >
                  <div
                    className={
                      "tf-grid-layout tf-col-2 lg-col-2 sm-col-1 wrap-list"
                    }
                  >
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=cultural-immersion-spice-and-traditions-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-29.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery4"
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
                          <a href="/toursingle1?tour=cultural-immersion-spice-and-traditions-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Cultural Immersion: Spice and Traditions in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=tropical-paradise-beach-bliss-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-07.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery5"
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
                          <a href="/toursingle1?tour=tropical-paradise-beach-bliss-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Tropical Paradise: Beach Bliss in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=kilimanjaro-climb-7-days-via-rongai-route" className="image-link">
                            <img
                              src="/images/locations/tour-28.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery6"
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
                          <a href="/toursingle1?tour=kilimanjaro-climb-7-days-via-rongai-route"
                            className={"link multi-ellipsis"}
                          >
                            Kilimanjaro Climb: 7 Days via Rongai Route
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
                            <span className="location">Kilimanjaro</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=safari-blue-dhow-sailing-adventure-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-30.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery7"
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
                          <a href="/toursingle1?tour=safari-blue-dhow-sailing-adventure-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Safari Blue: Dhow Sailing Adventure in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={"tab-pane fade"}
                  id="sailboat"
                  role="tabpanel"
                  aria-labelledby="sailboat-tab"
                >
                  <div
                    className={
                      "tf-grid-layout tf-col-2 lg-col-2 sm-col-1 wrap-list"
                    }
                  >
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=cultural-immersion-spice-and-traditions-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-29.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery4"
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
                                data-fancybox="gallery4"
                                data-src="/images/locations/dest-ngorongoro.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery4"
                                data-src="/images/locations/dest-tarangire.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=cultural-immersion-spice-and-traditions-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Cultural Immersion: Spice and Traditions in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=tropical-paradise-beach-bliss-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-07.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery5"
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
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-kilimanjaro.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-stonetown.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=tropical-paradise-beach-bliss-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Tropical Paradise: Beach Bliss in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=kilimanjaro-climb-7-days-via-rongai-route" className="image-link">
                            <img
                              src="/images/locations/tour-28.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery6"
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
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-zanzibar.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-serengeti.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=kilimanjaro-climb-7-days-via-rongai-route"
                            className={"link multi-ellipsis"}
                          >
                            Kilimanjaro Climb: 7 Days via Rongai Route
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
                            <span className="location">Kilimanjaro</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=safari-blue-dhow-sailing-adventure-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-30.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery7"
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
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-mikumi.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-nyerere.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=safari-blue-dhow-sailing-adventure-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Safari Blue: Dhow Sailing Adventure in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={"tab-pane fade"}
                  id="discovery"
                  role="tabpanel"
                  aria-labelledby="discovery-tab"
                >
                  <div
                    className={
                      "tf-grid-layout tf-col-2 lg-col-2 sm-col-1 wrap-list"
                    }
                  >
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=cultural-immersion-spice-and-traditions-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-29.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery4"
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
                                data-fancybox="gallery4"
                                data-src="/images/locations/dest-jozani.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery4"
                                data-src="/images/locations/dest-spicefarm.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery4"
                                data-src="/images/locations/dest-zanzibar.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery4"
                                data-src="/images/locations/dest-serengeti.jpg"
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
                          <a href="/toursingle1?tour=cultural-immersion-spice-and-traditions-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Cultural Immersion: Spice and Traditions in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=tropical-paradise-beach-bliss-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-07.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery5"
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
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-tarangire.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-manyara.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-mikumi.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-nyerere.jpg"
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
                          <a href="/toursingle1?tour=tropical-paradise-beach-bliss-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Tropical Paradise: Beach Bliss in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=kilimanjaro-climb-7-days-via-rongai-route" className="image-link">
                            <img
                              src="/images/locations/tour-28.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-kilimanjaro.jpg"
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
                                data-src="/images/locations/dest-stonetown.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-mnemba.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-jozani.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-spicefarm.jpg"
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
                          <a href="/toursingle1?tour=kilimanjaro-climb-7-days-via-rongai-route"
                            className={"link multi-ellipsis"}
                          >
                            Kilimanjaro Climb: 7 Days via Rongai Route
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
                            <span className="location">Kilimanjaro</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=safari-blue-dhow-sailing-adventure-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-30.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery7"
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
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-serengeti.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-ngorongoro.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-tarangire.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-manyara.jpg"
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
                          <a href="/toursingle1?tour=safari-blue-dhow-sailing-adventure-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Safari Blue: Dhow Sailing Adventure in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={"tab-pane fade"}
                  id="climbing"
                  role="tabpanel"
                  aria-labelledby="climbing-tab"
                >
                  <div
                    className={
                      "tf-grid-layout tf-col-2 lg-col-2 sm-col-1 wrap-list"
                    }
                  >
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=cultural-immersion-spice-and-traditions-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-29.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery4"
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
                          <a href="/toursingle1?tour=cultural-immersion-spice-and-traditions-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Cultural Immersion: Spice and Traditions in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=tropical-paradise-beach-bliss-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-07.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery5"
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
                          <a href="/toursingle1?tour=tropical-paradise-beach-bliss-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Tropical Paradise: Beach Bliss in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=kilimanjaro-climb-7-days-via-rongai-route" className="image-link">
                            <img
                              src="/images/locations/tour-28.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery6"
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
                          <a href="/toursingle1?tour=kilimanjaro-climb-7-days-via-rongai-route"
                            className={"link multi-ellipsis"}
                          >
                            Kilimanjaro Climb: 7 Days via Rongai Route
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
                            <span className="location">Kilimanjaro</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                    <div className={"item hover-img list-style-01"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=safari-blue-dhow-sailing-adventure-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-30.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery7"
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
                          <a href="/toursingle1?tour=safari-blue-dhow-sailing-adventure-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Safari Blue: Dhow Sailing Adventure in Zanzibar
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
                            <span className="location">Zanzibar</span>
                          </div>
                          <div className={"price h5"}>$265,00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className={"explore-cities mx-4"}>
        <div
          className={
            "box-title text-center wow animate__animated animate__fadeInUp"
          }
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className={"title h1"}>Our popular tours</div>
          <div className={"subtitle desc"}>
            Explore the tours chosen and recommended by a multitude of
            travelers.
          </div>
        </div>
        <div
          className={"wow animate__animated animate__fadeIn"}
          data-wow-delay="0.3s"
          data-wow-duration="1s"
        >
          <div
            dir="ltr"
            className={"swiper tf-sw-location"}
            data-preview="5"
            data-tablet="3"
            data-mobile-sm="2"
            data-mobile="1"
            data-space-lg="12"
            data-space-md="12"
            data-space="12"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="destination-post">
                    <a href="/toursingle2?tour=discover-the-wonders-of-zanzibar" className="img-style">
                      <img src="/images/locations/dest-zanzibar.jpg" alt="img-tour" />
                    </a>
                    <div className="content">
                      <div className={"name h4"}>
                        <a
                          href="/destinationdetail"
                          className={"link multi-ellipsis single-ellipsis"}
                        >
                          Zanzibar Island
                        </a>
                      </div>
                      <div className={"total-tour subtitle"}>39 Tour</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="destination-post">
                    <a href="/toursingle2?tour=serengeti-great-migration-safari" className="img-style">
                      <img src="/images/locations/dest-serengeti.jpg" alt="img-tour" />
                    </a>
                    <div className="content">
                      <div className={"name h4"}>
                        <a
                          href="/destinationdetail"
                          className={"link multi-ellipsis single-ellipsis"}
                        >
                          Serengeti National Park
                        </a>
                      </div>
                      <div className={"total-tour subtitle"}>39 Tour</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="destination-post">
                    <a href="/toursingle2?tour=ngorongoro-crater-day-tour" className="img-style">
                      <img src="/images/locations/dest-ngorongoro.jpg" alt="img-tour" />
                    </a>
                    <div className="content">
                      <div className={"name h4"}>
                        <a
                          href="/destinationdetail"
                          className={"link multi-ellipsis single-ellipsis"}
                        >
                          Ngorongoro Crater
                        </a>
                      </div>
                      <div className={"total-tour subtitle"}>39 Tour</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="destination-post">
                    <a href="/toursingle2?tour=tarangire-national-park-safari" className="img-style">
                      <img src="/images/locations/dest-tarangire.jpg" alt="img-tour" />
                    </a>
                    <div className="content">
                      <div className={"name h4"}>
                        <a
                          href="/destinationdetail"
                          className={"link multi-ellipsis single-ellipsis"}
                        >
                          Tarangire National Park
                        </a>
                      </div>
                      <div className={"total-tour subtitle"}>39 Tour</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="destination-post">
                    <a href="/toursingle2?tour=discover-lake-manyara-highlights" className="img-style">
                      <img src="/images/locations/dest-manyara.jpg" alt="img-tour" />
                    </a>
                    <div className="content">
                      <div className={"name h4"}>
                        <a
                          href="/destinationdetail"
                          className={"link multi-ellipsis single-ellipsis"}
                        >
                          Lake Manyara National Park
                        </a>
                      </div>
                      <div className={"total-tour subtitle"}>39 Tour</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="destination-post">
                    <a href="/toursingle2?tour=mikumi-day-trip-safari" className="img-style">
                      <img src="/images/locations/dest-mikumi.jpg" alt="img-tour" />
                    </a>
                    <div className="content">
                      <div className={"name h4"}>
                        <a
                          href="/destinationdetail"
                          className={"link multi-ellipsis single-ellipsis"}
                        >
                          Mikumi National Park
                        </a>
                      </div>
                      <div className={"total-tour subtitle"}>39 Tour</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className={"item hover-img"}>
                  <div className="destination-post">
                    <a href="/toursingle2?tour=nyerere-national-park-safari" className="img-style">
                      <img src="/images/locations/dest-nyerere.jpg" alt="img-tour" />
                    </a>
                    <div className="content">
                      <div className={"name h4"}>
                        <a
                          href="/destinationdetail"
                          className={"link multi-ellipsis single-ellipsis"}
                        >
                          Nyerere National Park
                        </a>
                      </div>
                      <div className={"total-tour subtitle"}>39 Tour</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-control">
              <a href="/homepage2#" className={"flex-prev nav-prev-location"}>
                <img src="/images/icons/arrow-left-1.svg" alt="prev" />
              </a>
              <div
                className={"sw-pagination sw-pagination-location text-center"}
              />
              <a href="/homepage2#" className={"flex-next nav-next-location"}>
                <img src="/images/icons/arrow-right-2.svg" alt="next" />
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className={"flat-section tf-vacation-hero mx-4"}>
        <div className={"container bg-imgwtext"}>
          <div className="flat-img-with-text">
            <div className="content-right">
              <div
                className={"box-title wow animate__animated animate__fadeInUp"}
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className={"title h1"}>3 easy steps to book tickets</div>
                <div className="subtitle">
                  The solution for those of you who don't want the hassle of
                  ordering travel tickets, with just 3 steps you can travel
                  anywhere you want.
                </div>
              </div>
              <div className="wg-contact">
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
            <div className="wrap-service">
              <div className="left">
                <div className="box-benefit">
                  <div className="icon-box">
                    <img
                      src="/images/icons/benefit-1.svg"
                      alt="icon"
                      className="icon"
                    />
                  </div>
                  <div className="content-box">
                    <div className={"link name h3"}>Find Destination</div>
                    <div className="description">
                      Do you want to relax on the beach, explore a new city, or
                      go on an adventure?
                    </div>
                  </div>
                </div>
                <div className="box-benefit">
                  <div className="icon-box">
                    <img
                      src="/images/icons/benefit-2.svg"
                      alt="icon"
                      className="icon"
                    />
                  </div>
                  <div className="content-box">
                    <div className={"link name h3"}>Book You Ticket</div>
                    <div className="description">
                      Find your travel destination, because we have covered all
                      regions in the world.
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="box-benefit">
                  <div className="icon-box">
                    <img
                      src="/images/icons/benefit-3.svg"
                      alt="icon"
                      className="icon"
                    />
                  </div>
                  <div className="content-box">
                    <div className={"link name h3"}>Pay and go tour</div>
                    <div className="description">
                      This type of tour usually includes all the necessary
                      expenses such as accommodation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className={"flat-section tf-vacation-hero pt-0"}>
        <div className="container">
          <div className="flat-img-with-text">
            <div className="card-wrapper">
              <div className={"swiper tf-rating-card"}>
                <div className="swiper-wrapper">
                  <div className={"swiper-slide hover-img"} data-index="0">
                    <div className={"card-review img-style"}>
                      <img
                        src="/images/locations/tour-36.jpg"
                        alt="image"
                        className="box-image"
                      />
                      <div className="box-info">
                        <div className="info">
                          <div className={"name h4"}>
                            <a href="/homepage2#" className="link">
                              Annette Black
                            </a>
                          </div>
                          <p className="subtitle">Khamiar Express</p>
                        </div>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"swiper-slide hover-img"} data-index="1">
                    <div className={"card-review img-style"}>
                      <img
                        src="/images/locations/tour-37.jpg"
                        alt="image"
                        className="box-image"
                      />
                      <div className="box-info">
                        <div className="info">
                          <div className={"name h4"}>
                            <a href="/homepage2#" className="link">
                              Annette Black
                            </a>
                          </div>
                          <p className="subtitle">Khamiar Express</p>
                        </div>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"swiper-slide hover-img"} data-index="2">
                    <div className={"card-review img-style"}>
                      <img
                        src="/images/locations/tour-31.jpg"
                        alt="image"
                        className="box-image"
                      />
                      <div className="box-info">
                        <div className="info">
                          <div className={"name h4"}>
                            <a href="/homepage2#" className="link">
                              Annette Black
                            </a>
                          </div>
                          <p className="subtitle">Khamiar Express</p>
                        </div>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className={"swiper tf-review-box"}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide" data-index="0">
                    <div
                      className="card-review"
                      data-avatar="./images/users/user-1.png"
                    >
                      <div className="box-title">
                        <div className={"title h1"}>What they are say!</div>
                        <div className="subtitle">
                          Discover the Most Popular Places to Visit
                        </div>
                      </div>
                      <div className="content">
                        <p className={"subtitle reviewed"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" data-index="1">
                    <div
                      className="card-review"
                      data-avatar="./images/users/user-2.png"
                    >
                      <div className="box-title">
                        <div className={"title h1"}>What they are say!</div>
                        <div className="subtitle">
                          Discover the Most Popular Places to Visit
                        </div>
                      </div>
                      <div className="content">
                        <p className={"subtitle reviewed"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" data-index="2">
                    <div
                      className="card-review"
                      data-avatar="./images/users/user-3.png"
                    >
                      <div className="box-title">
                        <div className={"title h1"}>What they are say!</div>
                        <div className="subtitle">
                          Discover the Most Popular Places to Visit
                        </div>
                      </div>
                      <div className="content">
                        <p className={"subtitle reviewed"}>
                          Khamiar Express arranged our honeymoon in Zanzibar
                          from start to finish - the boat transfer, the Stone
                          Town walking tour and the safari to Ngorongoro were
                          flawless. We only had to relax and enjoy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="avatar-navigation" />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className={"flat-section pt-0"}>
        <div className="container">
          <div
            className={"box-title wow animate__animated animate__fadeInUp"}
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className={"title h1"}>Latest news &amp; articles</div>
            <div className={"subtitle text-color desc"}>
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
                        Hidden Gems of Stone Town: Off-the-Beaten-Path Adventures
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
                      src="/images/locations/tour-37.jpg"
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
                        Street Food Safari in Serengeti: Must-Try Local Eats
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
                      src="/images/locations/tour-09.jpg"
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
                        Eco-Friendly Escapes: Sustainable Travel in Zanzibar
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
            <div className="slider-control">
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
