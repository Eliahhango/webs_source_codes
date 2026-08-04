export default function homepage5Page() {
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
              <div className={"swiper-slide home-5"}>
                <div className={"box-banner box-banner-12"}>
                  <div className="container-2">
                    <div className="box-title">
                      <div className="h3">Explore The World</div>
                      <h1>Nature</h1>
                      <div className="wrap-search-link">
                        <div className="tab-content">
                          <div className={"fade active show"} role="tabpanel">
                            <div className="form-s1">
                              <form action="//search">
                                <div className={"form-search bg-dark style-1"}>
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
                                              <a href="/homepage5#">
                                                <img
                                                  src="/images/icons/place.svg"
                                                  alt="icon"
                                                  className="icon"
                                                />
                                                <div className="content">
                                                  <div className="place">
                                                    Zanzibar Island Tour
                                                  </div>
                                                  <div className="country">
                                                    Tanzania
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li
                                              className="option"
                                              data-value="swiss-alps"
                                            >
                                              <a href="/homepage5#">
                                                <img
                                                  src="/images/icons/place.svg"
                                                  alt="icon"
                                                  className="icon"
                                                />
                                                <div className="content">
                                                  <div className="place">
                                                    Kilimanjaro Adventure
                                                  </div>
                                                  <div className="country">
                                                    Tanzania
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li
                                              className="option"
                                              data-value="london-classic"
                                            >
                                              <a href="/homepage5#">
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
                                              <a href="/homepage5#">
                                                <img
                                                  src="/images/icons/place.svg"
                                                  alt="icon"
                                                  className="icon"
                                                />
                                                <div className="content">
                                                  <div className="place">
                                                    Mediterranean Sailing Tour
                                                  </div>
                                                  <div className="country">
                                                    Tanzania
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li
                                              className="option"
                                              data-value="cape-town-discovery"
                                            >
                                              <a href="/homepage5#">
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
                                              <a href="/homepage5#">
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
                                              <button
                                                type="button"
                                                className="prev-month"
                                              >
                                                <i
                                                  className={
                                                    "icon icon-CaretLeft"
                                                  }
                                                />
                                              </button>
                                              <div className="datepicker-title">
                                                November 24
                                              </div>
                                              <button
                                                type="button"
                                                className="next-month"
                                              >
                                                <i
                                                  className={
                                                    "icon icon-CaretRight"
                                                  }
                                                />
                                              </button>
                                            </div>
                                            <div className="datepicker-weekdays">
                                              <div
                                                className={
                                                  "datepicker-weekday weekend"
                                                }
                                              >
                                                Su
                                              </div>
                                              <div className="datepicker-weekday">
                                                Mo
                                              </div>
                                              <div className="datepicker-weekday">
                                                Tu
                                              </div>
                                              <div className="datepicker-weekday">
                                                We
                                              </div>
                                              <div className="datepicker-weekday">
                                                Th
                                              </div>
                                              <div className="datepicker-weekday">
                                                Fr
                                              </div>
                                              <div
                                                className={
                                                  "datepicker-weekday weekend"
                                                }
                                              >
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
                                            <i
                                              className={"icon icon-CaretDown"}
                                            />
                                          </span>
                                          <ul className="list">
                                            <li
                                              data-value="adventure"
                                              className="option"
                                            >
                                              <a href="/homepage5#">
                                                <div className="content">
                                                  <div className="type">
                                                    Adventure
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li
                                              data-value="beach"
                                              className="option"
                                            >
                                              <a href="/homepage5#">
                                                <div className="content">
                                                  <div className="type">
                                                    Beach
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li
                                              data-value="camping"
                                              className="option"
                                            >
                                              <a href="/homepage5#">
                                                <div className="content">
                                                  <div className="type">
                                                    Camping
                                                  </div>
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
                                          <span
                                            className={"current guest-text"}
                                          >
                                            <img
                                              src="/images/icons/users.svg"
                                              alt="icon"
                                            />{" "}
                                            <i
                                              className={"icon icon-CaretDown"}
                                            />
                                          </span>
                                          <div className="list">
                                            <div className="guest-item">
                                              <span>Adult</span>
                                              <div className="counter">
                                                <button
                                                  type="button"
                                                  className="minus"
                                                >
                                                  −
                                                </button>{" "}
                                                <input
                                                  type="number"
                                                  value="0"
                                                />{" "}
                                                <button
                                                  type="button"
                                                  className="plus"
                                                >
                                                  +
                                                </button>
                                              </div>
                                            </div>
                                            <div className="guest-item">
                                              <span>Children</span>
                                              <div className="counter">
                                                <button
                                                  type="button"
                                                  className="minus"
                                                >
                                                  −
                                                </button>{" "}
                                                <input
                                                  type="number"
                                                  value="0"
                                                />{" "}
                                                <button
                                                  type="button"
                                                  className="plus"
                                                >
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
                                        href="/homepage5#"
                                        className={"tf-btn transparent p-4"}
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
                                        <span className="slider-range-value1">
                                          $0
                                        </span>{" "}
                                        <span>-</span>{" "}
                                        <span className="slider-range-value2">
                                          $10,000
                                        </span>
                                      </div>
                                    </div>
                                    <div className="slider-range" />
                                    <div className="slider-labels">
                                      <div>
                                        <input
                                          type="hidden"
                                          name="min-value"
                                          value={""}
                                        />{" "}
                                        <input
                                          type="hidden"
                                          name="max-value"
                                          value={""}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="group-checkbox">
                                    <div className="title-checkbox">
                                      Amentities
                                    </div>
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
                      <div className="tf-meta">
                        <div className="contact-info">
                          <div className={"d-flex item-center gap-8"}>
                            <ul className={"d-flex item-center gap-2"}>
                              <li>
                                <a
                                  href="/homepage5#"
                                  className={"box-icon w-48 round"}
                                >
                                  <i className={"icon icon-facebook"} />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/homepage5#"
                                  className={"box-icon w-48 round"}
                                >
                                  <i className={"icon icon-tw"} />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/homepage5#"
                                  className={"box-icon w-48 round"}
                                >
                                  <i className={"icon icon-linked"} />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/homepage5#"
                                  className={"box-icon w-48 round"}
                                >
                                  <i className={"icon icon-instgram"} />
                                </a>
                              </li>
                            </ul>
                            <div className="divider" />
                            <span className="text-uppercase">Follow Us</span>
                          </div>
                        </div>
                        <div className="categories-list">
                          <a href="/homepage5#">
                            <img src="/images/icons/cycle.svg" alt="icon" />
                            Cycling
                          </a>{" "}
                          <a href="/homepage5#">
                            <img src="/images/icons/camera-1.svg" alt="icon" />
                            Photography
                          </a>{" "}
                          <a href="/homepage5#">
                            <img src="/images/icons/camping.svg" alt="icon" />
                            Camping
                          </a>{" "}
                          <a href="/homepage5#">
                            <img src="/images/icons/fire.svg" alt="icon" />
                            Cave exploring
                          </a>
                        </div>
                        <div className="contact-info">
                          <div className={"d-flex item-center gap-8"}>
                            <span className="text-uppercase">
                              People love this place
                            </span>
                            <div className="divider" />
                            <div className="user-avatars">
                              <img
                                src="/images/users/user-1.png"
                                alt={"User 1"}
                              />{" "}
                              <img
                                src="/images/users/user-2.png"
                                alt={"User 2"}
                              />{" "}
                              <img
                                src="/images/users/user-3.png"
                                alt={"User 3"}
                              />
                              <div className="user-count">
                                <img
                                  src="/images/users/user-4.png"
                                  alt={"User 4"}
                                />{" "}
                                <span>2K</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide home-5"}>
                <div className={"box-banner box-banner-13"}>
                  <div className="container-2">
                    <div className="box-title">
                      <div className="h3">Explore The World</div>
                      <h1>Nature</h1>
                      <div className="wrap-search-link">
                        <div className="tab-content">
                          <div className={"fade active show"} role="tabpanel">
                            <div className="form-s1">
                              <form action="//search">
                                <div className="container">
                                  <div
                                    className={"form-search bg-dark style-1"}
                                  >
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
                                                data-value="newyork"
                                                className="option"
                                              >
                                                <a href="/homepage5#">
                                                  <img
                                                    src="/images/icons/place.svg"
                                                    alt="icon"
                                                    className="icon"
                                                  />
                                                  <div className="content">
                                                    <div className="place">
                                                      Nyerere
                                                    </div>
                                                    <div className="country">
                                                      Tanzania
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                data-value="newyork"
                                                className="option"
                                              >
                                                <a href="/homepage5#">
                                                  <img
                                                    src="/images/icons/place.svg"
                                                    alt="icon"
                                                    className="icon"
                                                  />
                                                  <div className="content">
                                                    <div className="place">
                                                      Nyerere
                                                    </div>
                                                    <div className="country">
                                                      Tanzania
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                data-value="newyork"
                                                className="option"
                                              >
                                                <a href="/homepage5#">
                                                  <img
                                                    src="/images/icons/place.svg"
                                                    alt="icon"
                                                    className="icon"
                                                  />
                                                  <div className="content">
                                                    <div className="place">
                                                      Nyerere
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
                                                <button
                                                  type="button"
                                                  className="prev-month"
                                                >
                                                  <i
                                                    className={
                                                      "icon icon-CaretLeft"
                                                    }
                                                  />
                                                </button>
                                                <div className="datepicker-title">
                                                  November 24
                                                </div>
                                                <button
                                                  type="button"
                                                  className="next-month"
                                                >
                                                  <i
                                                    className={
                                                      "icon icon-CaretRight"
                                                    }
                                                  />
                                                </button>
                                              </div>
                                              <div className="datepicker-weekdays">
                                                <div
                                                  className={
                                                    "datepicker-weekday weekend"
                                                  }
                                                >
                                                  Su
                                                </div>
                                                <div className="datepicker-weekday">
                                                  Mo
                                                </div>
                                                <div className="datepicker-weekday">
                                                  Tu
                                                </div>
                                                <div className="datepicker-weekday">
                                                  We
                                                </div>
                                                <div className="datepicker-weekday">
                                                  Th
                                                </div>
                                                <div className="datepicker-weekday">
                                                  Fr
                                                </div>
                                                <div
                                                  className={
                                                    "datepicker-weekday weekend"
                                                  }
                                                >
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
                                              <i
                                                className={
                                                  "icon icon-CaretDown"
                                                }
                                              />
                                            </span>
                                            <ul className="list">
                                              <li
                                                data-value="adventure"
                                                className="option"
                                              >
                                                <a href="/homepage5#">
                                                  <div className="content">
                                                    <div className="type">
                                                      Adventure
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                data-value="beach"
                                                className="option"
                                              >
                                                <a href="/homepage5#">
                                                  <div className="content">
                                                    <div className="type">
                                                      Beach
                                                    </div>
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                data-value="camping"
                                                className="option"
                                              >
                                                <a href="/homepage5#">
                                                  <div className="content">
                                                    <div className="type">
                                                      Camping
                                                    </div>
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
                                            <span
                                              className={"current guest-text"}
                                            >
                                              <img
                                                src="/images/icons/users.svg"
                                                alt="icon"
                                              />{" "}
                                              <i
                                                className={
                                                  "icon icon-CaretDown"
                                                }
                                              />
                                            </span>
                                            <div className="list">
                                              <div className="guest-item">
                                                <span>Adult</span>
                                                <div className="counter">
                                                  <button
                                                    type="button"
                                                    className="minus"
                                                  >
                                                    −
                                                  </button>{" "}
                                                  <input
                                                    type="number"
                                                    value="0"
                                                  />{" "}
                                                  <button
                                                    type="button"
                                                    className="plus"
                                                  >
                                                    +
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="guest-item">
                                                <span>Children</span>
                                                <div className="counter">
                                                  <button
                                                    type="button"
                                                    className="minus"
                                                  >
                                                    −
                                                  </button>{" "}
                                                  <input
                                                    type="number"
                                                    value="0"
                                                  />{" "}
                                                  <button
                                                    type="button"
                                                    className="plus"
                                                  >
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
                                          href="/homepage5#"
                                          className={"tf-btn transparent p-4"}
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
                                        <span className="title-price">
                                          Price
                                        </span>
                                        <div className="caption-price">
                                          <span className="slider-range-value1">
                                            $0
                                          </span>{" "}
                                          <span>-</span>{" "}
                                          <span className="slider-range-value2">
                                            $10,000
                                          </span>
                                        </div>
                                      </div>
                                      <div className="slider-range" />
                                      <div className="slider-labels">
                                        <div>
                                          <input
                                            type="hidden"
                                            name="min-value"
                                            value={""}
                                          />{" "}
                                          <input
                                            type="hidden"
                                            name="max-value"
                                            value={""}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="group-checkbox">
                                      <div className="title-checkbox">
                                        Amentities
                                      </div>
                                      <div
                                        className={"group-amentities grid-4"}
                                      >
                                        <div className="box-amentities">
                                          <div className="amenities-item">
                                            <input
                                              type="checkbox"
                                              className="tf-checkbox"
                                              id="item-19"
                                            />{" "}
                                            <label
                                              htmlFor="item-19"
                                              className="text-amenities"
                                            >
                                              Convenience
                                            </label>
                                          </div>
                                          <div className="amenities-item">
                                            <input
                                              type="checkbox"
                                              className="tf-checkbox"
                                              id="item-20"
                                            />{" "}
                                            <label
                                              htmlFor="item-20"
                                              className="text-amenities"
                                            >
                                              Cost-effective
                                            </label>
                                          </div>
                                          <div className="amenities-item">
                                            <input
                                              type="checkbox"
                                              className="tf-checkbox"
                                              id="item-21"
                                            />{" "}
                                            <label
                                              htmlFor="item-21"
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
                                              id="item-22"
                                            />{" "}
                                            <label
                                              htmlFor="item-22"
                                              className="text-amenities"
                                            >
                                              Safety and Security
                                            </label>
                                          </div>
                                          <div className="amenities-item">
                                            <input
                                              type="checkbox"
                                              className="tf-checkbox"
                                              id="item-23"
                                            />{" "}
                                            <label
                                              htmlFor="item-23"
                                              className="text-amenities"
                                            >
                                              Variety of Experiences
                                            </label>
                                          </div>
                                          <div className="amenities-item">
                                            <input
                                              type="checkbox"
                                              className="tf-checkbox"
                                              id="item-24"
                                            />{" "}
                                            <label
                                              htmlFor="item-24"
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
                                              id="item-25"
                                            />{" "}
                                            <label
                                              htmlFor="item-25"
                                              className="text-amenities"
                                            >
                                              Hassle-Free Travel
                                            </label>
                                          </div>
                                          <div className="amenities-item">
                                            <input
                                              type="checkbox"
                                              className="tf-checkbox"
                                              id="item-26"
                                            />{" "}
                                            <label
                                              htmlFor="item-26"
                                              className="text-amenities"
                                            >
                                              Cultural Immersion
                                            </label>
                                          </div>
                                          <div className="amenities-item">
                                            <input
                                              type="checkbox"
                                              className="tf-checkbox"
                                              id="item-27"
                                            />{" "}
                                            <label
                                              htmlFor="item-27"
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
                                              id="item-28"
                                            />{" "}
                                            <label
                                              htmlFor="item-28"
                                              className="text-amenities"
                                            >
                                              Unique Experiences
                                            </label>
                                          </div>
                                          <div className="amenities-item">
                                            <input
                                              type="checkbox"
                                              className="tf-checkbox"
                                              id="item-29"
                                            />{" "}
                                            <label
                                              htmlFor="item-29"
                                              className="text-amenities"
                                            >
                                              Peace of Mind
                                            </label>
                                          </div>
                                          <div className="amenities-item">
                                            <input
                                              type="checkbox"
                                              className="tf-checkbox"
                                              id="item-30"
                                            />{" "}
                                            <label
                                              htmlFor="item-30"
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
                                              id="item-31"
                                            />{" "}
                                            <label
                                              htmlFor="item-31"
                                              className="text-amenities"
                                            >
                                              Group Discounts
                                            </label>
                                          </div>
                                          <div className="amenities-item">
                                            <input
                                              type="checkbox"
                                              className="tf-checkbox"
                                              id="item-32"
                                            />{" "}
                                            <label
                                              htmlFor="item-32"
                                              className="text-amenities"
                                            >
                                              Romantic Atmosphere
                                            </label>
                                          </div>
                                          <div className="amenities-item">
                                            <input
                                              type="checkbox"
                                              className="tf-checkbox"
                                              id="item-33"
                                            />{" "}
                                            <label
                                              htmlFor="item-33"
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
                                              id="item-34"
                                            />{" "}
                                            <label
                                              htmlFor="item-34"
                                              className="text-amenities"
                                            >
                                              Stress Relief
                                            </label>
                                          </div>
                                          <div className="amenities-item">
                                            <input
                                              type="checkbox"
                                              className="tf-checkbox"
                                              id="item-35"
                                            />{" "}
                                            <label
                                              htmlFor="item-35"
                                              className="text-amenities"
                                            >
                                              Scenic Views
                                            </label>
                                          </div>
                                          <div className="amenities-item">
                                            <input
                                              type="checkbox"
                                              className="tf-checkbox"
                                              id="item-36"
                                            />{" "}
                                            <label
                                              htmlFor="item-36"
                                              className="text-amenities"
                                            >
                                              Expert Guidance
                                            </label>
                                          </div>
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
                      <div className="tf-meta">
                        <div className="contact-info">
                          <div className={"d-flex item-center gap-8"}>
                            <ul className={"d-flex item-center gap-2"}>
                              <li>
                                <a
                                  href="/homepage5#"
                                  className={"box-icon w-48 round"}
                                >
                                  <i className={"icon icon-facebook"} />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/homepage5#"
                                  className={"box-icon w-48 round"}
                                >
                                  <i className={"icon icon-tw"} />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/homepage5#"
                                  className={"box-icon w-48 round"}
                                >
                                  <i className={"icon icon-linked"} />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/homepage5#"
                                  className={"box-icon w-48 round"}
                                >
                                  <i className={"icon icon-instgram"} />
                                </a>
                              </li>
                            </ul>
                            <div className="divider" />
                            <span className="text-uppercase">Follow Us</span>
                          </div>
                        </div>
                        <div className="categories-list">
                          <a href="/homepage5#">
                            <img src="/images/icons/cycle.svg" alt="icon" />
                            Cycling
                          </a>{" "}
                          <a href="/homepage5#">
                            <img src="/images/icons/camera-1.svg" alt="icon" />
                            Photography
                          </a>{" "}
                          <a href="/homepage5#">
                            <img src="/images/icons/camping.svg" alt="icon" />
                            Camping
                          </a>{" "}
                          <a href="/homepage5#">
                            <img src="/images/icons/fire.svg" alt="icon" />
                            Cave exploring
                          </a>
                        </div>
                        <div className="contact-info">
                          <div className={"d-flex item-center gap-8"}>
                            <span className="text-uppercase">
                              People love this place
                            </span>
                            <div className="divider" />
                            <div className="user-avatars">
                              <img
                                src="/images/users/user-1.png"
                                alt={"User 1"}
                              />{" "}
                              <img
                                src="/images/users/user-2.png"
                                alt={"User 2"}
                              />{" "}
                              <img
                                src="/images/users/user-3.png"
                                alt={"User 3"}
                              />
                              <div className="user-count">
                                <img
                                  src="/images/users/user-4.png"
                                  alt={"User 4"}
                                />{" "}
                                <span>2K</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide home-5"}>
                <div className={"box-banner box-banner-14"}>
                  <div className="container-2">
                    <div className="box-title">
                      <div className="h3">Explore The World</div>
                      <h1>Nature</h1>
                      <div className="wrap-search-link">
                        <div className="tab-content">
                          <div className={"fade active show"} role="tabpanel">
                            <div className="form-s1">
                              <form action="//search">
                                <div className={"form-search bg-dark style-1"}>
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
                                              <a href="/homepage5#">
                                                <img
                                                  src="/images/icons/place.svg"
                                                  alt="icon"
                                                  className="icon"
                                                />
                                                <div className="content">
                                                  <div className="place">
                                                    Zanzibar Island Tour
                                                  </div>
                                                  <div className="country">
                                                    Tanzania
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li
                                              className="option"
                                              data-value="swiss-alps"
                                            >
                                              <a href="/homepage5#">
                                                <img
                                                  src="/images/icons/place.svg"
                                                  alt="icon"
                                                  className="icon"
                                                />
                                                <div className="content">
                                                  <div className="place">
                                                    Kilimanjaro Adventure
                                                  </div>
                                                  <div className="country">
                                                    Tanzania
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li
                                              className="option"
                                              data-value="london-classic"
                                            >
                                              <a href="/homepage5#">
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
                                              <a href="/homepage5#">
                                                <img
                                                  src="/images/icons/place.svg"
                                                  alt="icon"
                                                  className="icon"
                                                />
                                                <div className="content">
                                                  <div className="place">
                                                    Mediterranean Sailing Tour
                                                  </div>
                                                  <div className="country">
                                                    Tanzania
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li
                                              className="option"
                                              data-value="cape-town-discovery"
                                            >
                                              <a href="/homepage5#">
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
                                              <a href="/homepage5#">
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
                                              <button
                                                type="button"
                                                className="prev-month"
                                              >
                                                <i
                                                  className={
                                                    "icon icon-CaretLeft"
                                                  }
                                                />
                                              </button>
                                              <div className="datepicker-title">
                                                November 24
                                              </div>
                                              <button
                                                type="button"
                                                className="next-month"
                                              >
                                                <i
                                                  className={
                                                    "icon icon-CaretRight"
                                                  }
                                                />
                                              </button>
                                            </div>
                                            <div className="datepicker-weekdays">
                                              <div
                                                className={
                                                  "datepicker-weekday weekend"
                                                }
                                              >
                                                Su
                                              </div>
                                              <div className="datepicker-weekday">
                                                Mo
                                              </div>
                                              <div className="datepicker-weekday">
                                                Tu
                                              </div>
                                              <div className="datepicker-weekday">
                                                We
                                              </div>
                                              <div className="datepicker-weekday">
                                                Th
                                              </div>
                                              <div className="datepicker-weekday">
                                                Fr
                                              </div>
                                              <div
                                                className={
                                                  "datepicker-weekday weekend"
                                                }
                                              >
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
                                            <i
                                              className={"icon icon-CaretDown"}
                                            />
                                          </span>
                                          <ul className="list">
                                            <li
                                              data-value="adventure"
                                              className="option"
                                            >
                                              <a href="/homepage5#">
                                                <div className="content">
                                                  <div className="type">
                                                    Adventure
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li
                                              data-value="beach"
                                              className="option"
                                            >
                                              <a href="/homepage5#">
                                                <div className="content">
                                                  <div className="type">
                                                    Beach
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li
                                              data-value="camping"
                                              className="option"
                                            >
                                              <a href="/homepage5#">
                                                <div className="content">
                                                  <div className="type">
                                                    Camping
                                                  </div>
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
                                          <span
                                            className={"current guest-text"}
                                          >
                                            <img
                                              src="/images/icons/users.svg"
                                              alt="icon"
                                            />{" "}
                                            <i
                                              className={"icon icon-CaretDown"}
                                            />
                                          </span>
                                          <div className="list">
                                            <div className="guest-item">
                                              <span>Adult</span>
                                              <div className="counter">
                                                <button
                                                  type="button"
                                                  className="minus"
                                                >
                                                  −
                                                </button>{" "}
                                                <input
                                                  type="number"
                                                  value="0"
                                                />{" "}
                                                <button
                                                  type="button"
                                                  className="plus"
                                                >
                                                  +
                                                </button>
                                              </div>
                                            </div>
                                            <div className="guest-item">
                                              <span>Children</span>
                                              <div className="counter">
                                                <button
                                                  type="button"
                                                  className="minus"
                                                >
                                                  −
                                                </button>{" "}
                                                <input
                                                  type="number"
                                                  value="0"
                                                />{" "}
                                                <button
                                                  type="button"
                                                  className="plus"
                                                >
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
                                        href="/homepage5#"
                                        className={"tf-btn transparent p-4"}
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
                                        <span className="slider-range-value1">
                                          $0
                                        </span>{" "}
                                        <span>-</span>{" "}
                                        <span className="slider-range-value2">
                                          $10,000
                                        </span>
                                      </div>
                                    </div>
                                    <div className="slider-range" />
                                    <div className="slider-labels">
                                      <div>
                                        <input
                                          type="hidden"
                                          name="min-value"
                                          value={""}
                                        />{" "}
                                        <input
                                          type="hidden"
                                          name="max-value"
                                          value={""}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="group-checkbox">
                                    <div className="title-checkbox">
                                      Amentities
                                    </div>
                                    <div className={"group-amentities grid-4"}>
                                      <div className="box-amentities">
                                        <div className="amenities-item">
                                          <input
                                            type="checkbox"
                                            className="tf-checkbox"
                                            id="item-37"
                                          />{" "}
                                          <label
                                            htmlFor="item-37"
                                            className="text-amenities"
                                          >
                                            Convenience
                                          </label>
                                        </div>
                                        <div className="amenities-item">
                                          <input
                                            type="checkbox"
                                            className="tf-checkbox"
                                            id="item-38"
                                          />{" "}
                                          <label
                                            htmlFor="item-38"
                                            className="text-amenities"
                                          >
                                            Cost-effective
                                          </label>
                                        </div>
                                        <div className="amenities-item">
                                          <input
                                            type="checkbox"
                                            className="tf-checkbox"
                                            id="item-39"
                                          />{" "}
                                          <label
                                            htmlFor="item-39"
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
                                            id="item-40"
                                          />{" "}
                                          <label
                                            htmlFor="item-40"
                                            className="text-amenities"
                                          >
                                            Safety and Security
                                          </label>
                                        </div>
                                        <div className="amenities-item">
                                          <input
                                            type="checkbox"
                                            className="tf-checkbox"
                                            id="item-41"
                                          />{" "}
                                          <label
                                            htmlFor="item-41"
                                            className="text-amenities"
                                          >
                                            Variety of Experiences
                                          </label>
                                        </div>
                                        <div className="amenities-item">
                                          <input
                                            type="checkbox"
                                            className="tf-checkbox"
                                            id="item-42"
                                          />{" "}
                                          <label
                                            htmlFor="item-42"
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
                                            id="item-43"
                                          />{" "}
                                          <label
                                            htmlFor="item-43"
                                            className="text-amenities"
                                          >
                                            Hassle-Free Travel
                                          </label>
                                        </div>
                                        <div className="amenities-item">
                                          <input
                                            type="checkbox"
                                            className="tf-checkbox"
                                            id="item-44"
                                          />{" "}
                                          <label
                                            htmlFor="item-44"
                                            className="text-amenities"
                                          >
                                            Cultural Immersion
                                          </label>
                                        </div>
                                        <div className="amenities-item">
                                          <input
                                            type="checkbox"
                                            className="tf-checkbox"
                                            id="item-45"
                                          />{" "}
                                          <label
                                            htmlFor="item-45"
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
                                            id="item-46"
                                          />{" "}
                                          <label
                                            htmlFor="item-46"
                                            className="text-amenities"
                                          >
                                            Unique Experiences
                                          </label>
                                        </div>
                                        <div className="amenities-item">
                                          <input
                                            type="checkbox"
                                            className="tf-checkbox"
                                            id="item-47"
                                          />{" "}
                                          <label
                                            htmlFor="item-47"
                                            className="text-amenities"
                                          >
                                            Peace of Mind
                                          </label>
                                        </div>
                                        <div className="amenities-item">
                                          <input
                                            type="checkbox"
                                            className="tf-checkbox"
                                            id="item-48"
                                          />{" "}
                                          <label
                                            htmlFor="item-48"
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
                                            id="item-49"
                                          />{" "}
                                          <label
                                            htmlFor="item-49"
                                            className="text-amenities"
                                          >
                                            Group Discounts
                                          </label>
                                        </div>
                                        <div className="amenities-item">
                                          <input
                                            type="checkbox"
                                            className="tf-checkbox"
                                            id="item-50"
                                          />{" "}
                                          <label
                                            htmlFor="item-50"
                                            className="text-amenities"
                                          >
                                            Romantic Atmosphere
                                          </label>
                                        </div>
                                        <div className="amenities-item">
                                          <input
                                            type="checkbox"
                                            className="tf-checkbox"
                                            id="item-51"
                                          />{" "}
                                          <label
                                            htmlFor="item-51"
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
                                            id="item-52"
                                          />{" "}
                                          <label
                                            htmlFor="item-52"
                                            className="text-amenities"
                                          >
                                            Stress Relief
                                          </label>
                                        </div>
                                        <div className="amenities-item">
                                          <input
                                            type="checkbox"
                                            className="tf-checkbox"
                                            id="item-53"
                                          />{" "}
                                          <label
                                            htmlFor="item-53"
                                            className="text-amenities"
                                          >
                                            Scenic Views
                                          </label>
                                        </div>
                                        <div className="amenities-item">
                                          <input
                                            type="checkbox"
                                            className="tf-checkbox"
                                            id="item-54"
                                          />{" "}
                                          <label
                                            htmlFor="item-54"
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
                      <div className="tf-meta">
                        <div className="contact-info">
                          <div className={"d-flex item-center gap-8"}>
                            <ul className={"d-flex item-center gap-2"}>
                              <li>
                                <a
                                  href="/homepage5#"
                                  className={"box-icon w-48 round"}
                                >
                                  <i className={"icon icon-facebook"} />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/homepage5#"
                                  className={"box-icon w-48 round"}
                                >
                                  <i className={"icon icon-tw"} />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/homepage5#"
                                  className={"box-icon w-48 round"}
                                >
                                  <i className={"icon icon-linked"} />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/homepage5#"
                                  className={"box-icon w-48 round"}
                                >
                                  <i className={"icon icon-instgram"} />
                                </a>
                              </li>
                            </ul>
                            <div className="divider" />
                            <span className="text-uppercase">Follow Us</span>
                          </div>
                        </div>
                        <div className="categories-list">
                          <a href="/homepage5#">
                            <img src="/images/icons/cycle.svg" alt="icon" />
                            Cycling
                          </a>{" "}
                          <a href="/homepage5#">
                            <img src="/images/icons/camera-1.svg" alt="icon" />
                            Photography
                          </a>{" "}
                          <a href="/homepage5#">
                            <img src="/images/icons/camping.svg" alt="icon" />
                            Camping
                          </a>{" "}
                          <a href="/homepage5#">
                            <img src="/images/icons/fire.svg" alt="icon" />
                            Cave exploring
                          </a>
                        </div>
                        <div className="contact-info">
                          <div className={"d-flex item-center gap-8"}>
                            <span className="text-uppercase">
                              People love this place
                            </span>
                            <div className="divider" />
                            <div className="user-avatars">
                              <img
                                src="/images/users/user-1.png"
                                alt={"User 1"}
                              />{" "}
                              <img
                                src="/images/users/user-2.png"
                                alt={"User 2"}
                              />{" "}
                              <img
                                src="/images/users/user-3.png"
                                alt={"User 3"}
                              />
                              <div className="user-count">
                                <img
                                  src="/images/users/user-4.png"
                                  alt={"User 4"}
                                />{" "}
                                <span>2K</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"flex-direction-nav style-hero-1"}>
              <a href="/homepage5#" className={"flex-prev style-nav-2"}>
                <img src="/images/icons/arrow-left-1.svg" alt="prev" />
              </a>{" "}
              <a href="/homepage5#" className={"flex-next style-nav-2"}>
                <img src="/images/icons/arrow-right-2.svg" alt="next" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={"flat-section flat-types"}>
        <div className="container">
          <div
            className={
              "box-title text-center wow animate__animated animate__fadeInUp"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <h1 className="title">Types of tours</h1>
            <div className={"subtitle desc"}>
              Explore the tours chosen and recommended by a multitude of
              travelers.
            </div>
          </div>
          <div
            className={"wow animate__animated animate__fadeIn"}
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div
              dir="ltr"
              className={"swiper tf-sw-types"}
              data-preview="6"
              data-desktop-sm="5"
              data-tablet="4"
              data-mobile-sm="3"
              data-mobile="2"
              data-space="15"
              data-space-xl="23"
              data-space-md="6"
              data-space-lg="40"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="/liststyle" className={"box-type style-03 no-bg"}>
                    <div className="icon-box">
                      <img
                        className="icon"
                        src="/images/locations/tour-43.jpg"
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
                  <a href="/liststyle" className={"box-type style-03 no-bg"}>
                    <div className="icon-box">
                      <img
                        className="icon"
                        src="/images/locations/tour-13.jpg"
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
                  <a href="/liststyle" className={"box-type style-03 no-bg"}>
                    <div className="icon-box">
                      <img
                        className="icon"
                        src="/images/locations/tour-40.jpg"
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
                  <a href="/liststyle" className={"box-type style-03 no-bg"}>
                    <div className="icon-box">
                      <img
                        className="icon"
                        src="/images/locations/tour-08.jpg"
                        alt="icon"
                      />
                    </div>
                    <div className={"content text-center"}>
                      <div className={"name h4"}>Climbing</div>
                      <p className={"subtitle total-tour"}>28 Tours</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="/liststyle" className={"box-type style-03 no-bg"}>
                    <div className="icon-box">
                      <img
                        className="icon"
                        src="/images/locations/tour-07.jpg"
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
                  <a href="/liststyle" className={"box-type style-03 no-bg"}>
                    <div className="icon-box">
                      <img
                        className="icon"
                        src="/images/locations/tour-39.jpg"
                        alt="icon"
                      />
                    </div>
                    <div className={"content text-center"}>
                      <div className={"name h4"}>Camping</div>
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
      <div className={"flat-section flat-tour-find bg-second"}>
        <div className="container">
          <div
            className={
              "box-title text-center wow animate__animated animate__fadeInUp"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className={"title h1"}>Find your perfect travel and tours</div>
            <div className={"subtitle text-color desc"}>
              Explore the tours chosen and recommended by a multitude of
              travelers.
            </div>
          </div>
          <div
            className={
              "perfect-tour-wrapper wow animate__animated animate__fadeIn"
            }
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className={"swiper tf-find-tour"}>
              <div className="swiper-wrapper">
                <div className={"swiper-slide tour-slide"}>
                  <div className={"flat-box-item hover-img"}>
                    <div className={"wrap-content img-style"}>
                      <a className="image-wrap" href="/destinationdetail">
                        <img src="/images/locations/tour-20.jpg" alt="images" />
                      </a>
                      <div className="content">
                        <h2 className={"name link"}>
                          <a
                            href="/destinationdetail"
                            className={"link multi-ellipsis"}
                          >
                            House of Wonders, Stone Town
                          </a>
                        </h2>
                        <div className={"description subtitle"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                        <a
                          href="/homepage5#"
                          className={"total-tour tf-btn primary hover-2"}
                        >
                          39 Tours
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"swiper-slide tour-slide"}>
                  <div className={"flat-box-item hover-img"}>
                    <div className={"wrap-content img-style"}>
                      <a className="image-wrap" href="/destinationdetail">
                        <img src="/images/locations/tour-66.jpg" alt="images" />
                      </a>
                      <div className="content">
                        <h2 className={"name link"}>
                          <a
                            href="/destinationdetail"
                            className={"link multi-ellipsis"}
                          >
                            Mount Kilimanjaro
                          </a>
                        </h2>
                        <div className={"description subtitle"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                        <a
                          href="/homepage5#"
                          className={"total-tour tf-btn primary hover-2"}
                        >
                          39 Tours
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"swiper-slide tour-slide"}>
                  <div className={"flat-box-item hover-img"}>
                    <div className={"wrap-content img-style"}>
                      <a className="image-wrap" href="/destinationdetail">
                        <img src="/images/locations/tour-67.jpg" alt="images" />
                      </a>
                      <div className="content">
                        <h2 className={"name link"}>
                          <a
                            href="/destinationdetail"
                            className={"link multi-ellipsis"}
                          >
                            Serengeti National Park, Tanzania
                          </a>
                        </h2>
                        <div className={"description subtitle"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                        <a
                          href="/destinationdetail"
                          className={"total-tour tf-btn primary hover-2"}
                        >
                          39 Tours
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"swiper-slide tour-slide"}>
                  <div className={"flat-box-item hover-img"}>
                    <div className={"wrap-content img-style"}>
                      <a className="image-wrap" href="/destinationdetail">
                        <img src="/images/locations/tour-68.jpg" alt="images" />
                      </a>
                      <div className="content">
                        <h2 className={"name link"}>
                          <a
                            href="/destinationdetail"
                            className={"link multi-ellipsis"}
                          >
                            Baobab Trees, Tarangire
                          </a>
                        </h2>
                        <div className={"description subtitle"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                        <a
                          href="/destinationdetail"
                          className={"total-tour tf-btn primary hover-2"}
                        >
                          39 Tours
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"swiper-slide tour-slide"}>
                  <div className={"flat-box-item hover-img"}>
                    <div className={"wrap-content img-style"}>
                      <a className="image-wrap" href="/destinationdetail">
                        <img src="/images/locations/tour-06.jpg" alt="images" />
                      </a>
                      <div className="content">
                        <h2 className={"name link"}>
                          <a
                            href="/destinationdetail"
                            className={"link multi-ellipsis"}
                          >
                            Stone Town, Zanzibar
                          </a>
                        </h2>
                        <div className={"description subtitle"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                        <a
                          href="/destinationdetail"
                          className={"total-tour tf-btn primary hover-2"}
                        >
                          39 Tours
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"swiper-slide tour-slide"}>
                  <div className={"flat-box-item hover-img"}>
                    <div className={"wrap-content img-style"}>
                      <a className="image-wrap" href="/destinationdetail">
                        <img src="/images/locations/tour-10.jpg" alt="images" />
                      </a>
                      <div className="content">
                        <h2 className={"name link"}>
                          <a
                            href="/destinationdetail"
                            className={"link multi-ellipsis"}
                          >
                            Old Fort, Stone Town
                          </a>
                        </h2>
                        <div className={"description subtitle"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                        <a
                          href="/destinationdetail"
                          className={"total-tour tf-btn primary hover-2"}
                        >
                          39 Tours
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"swiper-slide tour-slide"}>
                  <div className={"flat-box-item hover-img"}>
                    <div className={"wrap-content img-style"}>
                      <a className="image-wrap" href="/destinationdetail">
                        <img src="/images/locations/tour-09.jpg" alt="images" />
                      </a>
                      <div className="content">
                        <h2 className={"name link"}>
                          <a
                            href="/destinationdetail"
                            className={"link multi-ellipsis"}
                          >
                            Stone Town, Zanzibar
                          </a>
                        </h2>
                        <div className={"description subtitle"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                        <a
                          href="/destinationdetail"
                          className={"total-tour tf-btn primary hover-2"}
                        >
                          39 Tours
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"swiper-slide tour-slide"}>
                  <div className={"flat-box-item hover-img"}>
                    <div className={"wrap-content img-style"}>
                      <a className="image-wrap" href="/destinationdetail">
                        <img src="/images/locations/tour-13.jpg" alt="images" />
                      </a>
                      <div className="content">
                        <h2 className={"name link"}>
                          <a
                            href="/destinationdetail"
                            className={"link multi-ellipsis"}
                          >
                            Ngorongoro Crater, Tanzania
                          </a>
                        </h2>
                        <div className={"description subtitle"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                        <a
                          href="/destinationdetail"
                          className={"total-tour tf-btn primary hover-2"}
                        >
                          39 Tours
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"swiper-slide tour-slide"}>
                  <div className={"flat-box-item hover-img"}>
                    <div className={"wrap-content img-style"}>
                      <a className="image-wrap" href="/destinationdetail">
                        <img src="/images/locations/tour-08.jpg" alt="images" />
                      </a>
                      <div className="content">
                        <h2 className={"name link"}>
                          <a
                            href="/destinationdetail"
                            className={"link multi-ellipsis"}
                          >
                            Zanzibar Island, Tanzania
                          </a>
                        </h2>
                        <div className={"description subtitle"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                        <a
                          href="/destinationdetail"
                          className={"total-tour tf-btn primary hover-2"}
                        >
                          39 Tours
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"swiper-slide tour-slide"}>
                  <div className={"flat-box-item hover-img"}>
                    <div className={"wrap-content img-style"}>
                      <a className="image-wrap" href="/destinationdetail">
                        <img src="/images/locations/tour-10.jpg" alt="images" />
                      </a>
                      <div className="content">
                        <h2 className={"name link"}>
                          <a
                            href="/destinationdetail"
                            className={"link multi-ellipsis"}
                          >
                            Spice Farms of Zanzibar
                          </a>
                        </h2>
                        <div className={"description subtitle"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
                        <a
                          href="/destinationdetail"
                          className={"total-tour tf-btn primary hover-2"}
                        >
                          39 Tours
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-direction-nav">
              <a
                href="/homepage5#"
                className={"flex-prev style-nav-1 flex-prev-findtour"}
              >
                <img src="/images/icons/arrow-left-1.svg" alt="prev" />
              </a>{" "}
              <a
                href="/homepage5#"
                className={"flex-next style-nav-1 flex-next-findtour"}
              >
                <img src="/images/icons/arrow-right-2.svg" alt="next" />
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className={"flat-section pb-0  tf-benefit bg-white"}>
        <div className="container">
          <div
            className={
              "box-title text-center wow animate__animated animate__fadeInUp"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <h1 className="title">Why choose Khamiar Express</h1>
            <div className={"subtitle desc"}>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</div>
          </div>
          <div
            className={
              "swiper tf-swiper-device wow animate__animated animate__fadeIn wrap-benefit"
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
                      <a href="/homepage5#" className="link">
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
                      <a href="/homepage5#" className="link">
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
                      <a href="/homepage5#" className="link">
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
                      <a href="/homepage5#" className="link">
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
      </div>
      <div className={"flat-section-v3 "}>
        <div className="container">
          <div
            dir="ltr"
            className={"swiper tf-sw-partners"}
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
                <div className={"partner-item partner-01"}>
                  <a href="/homepage5#">
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
                  <a href="/homepage5#">
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
                  <a href="/homepage5#">
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
                  <a href="/homepage5#">
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
                  <a href="/homepage5#">
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
                  <a href="/homepage5#">
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
                  <a href="/homepage5#">
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
      <div className={"bg-three tf-vacation-hero"}>
        <div className="container">
          <div className={"flat-img-with-text style-05"}>
            <div className="content-left">
              <div
                className={"box-map wow animate__animated animate__fadeInLeft"}
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <img src="/images/backgrounds/map.svg" alt="image" />
              </div>
            </div>
            <div className="content-right">
              <div
                className={"rating wow animate__animated animate__fadeInUp"}
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
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
              <div
                className={"box-title wow animate__animated animate__fadeInUp"}
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <div className={"sub h3"}>Explore Tanzania</div>
                <h1 className="destination-name">Ngorongoro Crater</h1>
              </div>
              <div
                className={
                  "box-schedule wow animate__animated animate__fadeInUp"
                }
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <div className={"desc subtitle"}>From the plains of the Serengeti to the beaches of Zanzibar, Khamiar Express crafts unforgettable journeys. Enjoy comfortable lodges, experienced guides, and seamless travel across Tanzania's most iconic destinations - from wildlife safaris and Kilimanjaro treks to the spice islands of Zanzibar.</div>
                <div className="calendar">
                  <div className={"item departure"}>
                    <label>From</label>
                    <div className="h3">Tanzania</div>
                  </div>
                  <div className={"item persons"}>
                    <label>Persons</label>
                    <div className="h3">2 Adult</div>
                  </div>
                  <div className={"item total-money"}>
                    <label>3 day 2 nights</label>
                    <div className="h3">$2.999</div>
                  </div>
                </div>
              </div>
              <div
                className={"wg-contact wow animate__animated animate__fadeInUp"}
                data-wow-duration="1s"
                data-wow-delay="0.5s"
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
                  className={"tf-btn primary hover-2"}
                >
                  Booking Now
                </a>
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
                className={"nav-tab wow animate__animated animate__fade"}
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                role="tablist"
              >
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="/homepage5#viewAll"
                    className={"nav-link-item active"}
                    data-bs-toggle="tab"
                    aria-selected="true"
                    role="tab"
                    aria-controls="viewAll"
                  >
                    View All
                  </a>
                  <div className="total-tour">
                    <span>20 Tours</span>
                  </div>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="/homepage5#beach"
                    className="nav-link-item"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    tabIndex={-1}
                    role="tab"
                    aria-controls="beach"
                  >
                    Beach
                  </a>
                  <div className="total-tour">
                    <span>20 Tours</span>
                  </div>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="/homepage5#capleCar"
                    className="nav-link-item"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    tabIndex={-1}
                    role="tab"
                    aria-controls="capleCar"
                  >
                    Cable car
                  </a>
                  <div className="total-tour">
                    <span>20 Tours</span>
                  </div>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="/homepage5#sailboat"
                    className="nav-link-item"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    tabIndex={-1}
                    role="tab"
                    aria-controls="sailboat"
                  >
                    Sailboat
                  </a>
                  <div className="total-tour">
                    <span>20 Tours</span>
                  </div>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="/homepage5#discovery"
                    className="nav-link-item"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    tabIndex={-1}
                    role="tab"
                    aria-controls="discovery"
                  >
                    Discovery
                  </a>
                  <div className="total-tour">
                    <span>20 Tours</span>
                  </div>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="/homepage5#climbing"
                    className="nav-link-item"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    tabIndex={-1}
                    role="tab"
                    aria-controls="climbing"
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
                  aria-labelledby="viewAll"
                >
                  <div
                    className={
                      "tf-grid-layout tf-col-4 xl-col-3 lg-col-2 sm-col-1 "
                    }
                  >
                    <div className={"item hover-img"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=mystical-stone-town-spiritual-journeys-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-42.jpg"
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
                                data-fancybox="gallery1"
                                data-src="/images/locations/dest-stonetown.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery1"
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
                          <a href="/toursingle1?tour=mystical-stone-town-spiritual-journeys-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Mystical Stone Town: Spiritual Journeys in Zanzibar
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
                    <div className={"item hover-img"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=lake-manyara-starlit-camping-safari" className="image-link">
                            <img
                              src="/images/locations/tour-43.jpg"
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
                                data-fancybox="gallery2"
                                data-src="/images/locations/dest-serengeti.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery2"
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
                          <a href="/toursingle1?tour=lake-manyara-starlit-camping-safari"
                            className={"link multi-ellipsis"}
                          >
                            Lake Manyara Starlit Camping Safari
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
                          <a href="/toursingle1?tour=ngorongoro-crater-day-tour" className="image-link">
                            <img
                              src="/images/locations/tour-48.jpg"
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
                                data-fancybox="gallery3"
                                data-src="/images/locations/dest-nyerere.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery3"
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
                          <a href="/toursingle1?tour=ngorongoro-crater-day-tour"
                            className={"link multi-ellipsis"}
                          >
                            Ngorongoro Crater Day Tour
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
                          <a href="/toursingle1?tour=stone-town-historic-walking-tour" className="image-link">
                            <img
                              src="/images/locations/tour-44.jpg"
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
                          <a href="/toursingle1?tour=stone-town-historic-walking-tour"
                            className={"link multi-ellipsis"}
                          >
                            Stone Town Historic Walking Tour
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
                          <a href="/toursingle1?tour=stone-town-palace-secrets-tour" className="image-link">
                            <img
                              src="/images/locations/tour-46.jpg"
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
                          <a href="/toursingle1?tour=stone-town-palace-secrets-tour"
                            className={"link multi-ellipsis"}
                          >
                            Stone Town Palace Secrets Tour
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
                          <a href="/toursingle1?tour=jozani-forest-spice-farm-tour" className="image-link">
                            <img
                              src="/images/locations/tour-13.jpg"
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
                          <a href="/toursingle1?tour=jozani-forest-spice-farm-tour"
                            className={"link multi-ellipsis"}
                          >
                            Jozani Forest & Spice Farm Tour
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
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=7-days-discover-northern-tanzania-safari" className="image-link">
                            <img
                              src="/images/locations/tour-46.jpg"
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
                          <a href="/toursingle1?tour=7-days-discover-northern-tanzania-safari"
                            className={"link multi-ellipsis"}
                          >
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
                            <img
                              src="/images/locations/tour-47.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery8"
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
                                data-fancybox="gallery8"
                                data-src="/images/locations/dest-kilimanjaro.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery8"
                                data-src="/images/locations/dest-stonetown.jpg"
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
                          <a href="/toursingle1?tour=stone-town-markets-and-heritage-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
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
                <div
                  className={"tab-pane fade"}
                  id="beach"
                  role="tabpanel"
                  aria-labelledby="beach"
                >
                  <div
                    className={
                      "tf-grid-layout tf-col-4 xl-col-3 lg-col-2 sm-col-1 "
                    }
                  >
                    <div className={"item hover-img"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=mystical-stone-town-spiritual-journeys-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-42.jpg"
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
                                data-fancybox="gallery1"
                                data-src="/images/locations/dest-jozani.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=mystical-stone-town-spiritual-journeys-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Mystical Stone Town: Spiritual Journeys in Zanzibar
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
                    <div className={"item hover-img"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=lake-manyara-starlit-camping-safari" className="image-link">
                            <img
                              src="/images/locations/tour-43.jpg"
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
                                data-fancybox="gallery2"
                                data-src="/images/locations/dest-tarangire.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=lake-manyara-starlit-camping-safari"
                            className={"link multi-ellipsis"}
                          >
                            Lake Manyara Starlit Camping Safari
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
                          <a href="/toursingle1?tour=ngorongoro-crater-day-tour" className="image-link">
                            <img
                              src="/images/locations/tour-48.jpg"
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
                                data-fancybox="gallery3"
                                data-src="/images/locations/dest-stonetown.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=ngorongoro-crater-day-tour"
                            className={"link multi-ellipsis"}
                          >
                            Ngorongoro Crater Day Tour
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
                          <a href="/toursingle1?tour=stone-town-historic-walking-tour" className="image-link">
                            <img
                              src="/images/locations/tour-44.jpg"
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
                                data-fancybox="gallery4"
                                data-src="/images/locations/dest-serengeti.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=stone-town-historic-walking-tour"
                            className={"link multi-ellipsis"}
                          >
                            Stone Town Historic Walking Tour
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
                          <a href="/toursingle1?tour=stone-town-palace-secrets-tour" className="image-link">
                            <img
                              src="/images/locations/tour-46.jpg"
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
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-nyerere.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=stone-town-palace-secrets-tour"
                            className={"link multi-ellipsis"}
                          >
                            Stone Town Palace Secrets Tour
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
                          <a href="/toursingle1?tour=jozani-forest-spice-farm-tour" className="image-link">
                            <img
                              src="/images/locations/tour-13.jpg"
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
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-spicefarm.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=jozani-forest-spice-farm-tour"
                            className={"link multi-ellipsis"}
                          >
                            Jozani Forest & Spice Farm Tour
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
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=7-days-discover-northern-tanzania-safari" className="image-link">
                            <img
                              src="/images/locations/tour-46.jpg"
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
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-manyara.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=7-days-discover-northern-tanzania-safari"
                            className={"link multi-ellipsis"}
                          >
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
                            <img
                              src="/images/locations/tour-47.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery8"
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
                                data-fancybox="gallery8"
                                data-src="/images/locations/dest-mnemba.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery8"
                                data-src="/images/locations/dest-jozani.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery8"
                                data-src="/images/locations/dest-spicefarm.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery8"
                                data-src="/images/locations/dest-zanzibar.jpg"
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
                          <a href="/toursingle1?tour=stone-town-markets-and-heritage-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
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
                <div
                  className={"tab-pane fade"}
                  id="capleCar"
                  role="tabpanel"
                  aria-labelledby="capleCar"
                >
                  <div
                    className={
                      "tf-grid-layout tf-col-4 xl-col-3 lg-col-2 sm-col-1 "
                    }
                  >
                    <div className={"item hover-img"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=mystical-stone-town-spiritual-journeys-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-42.jpg"
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
                                data-fancybox="gallery1"
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
                          <a href="/toursingle1?tour=mystical-stone-town-spiritual-journeys-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Mystical Stone Town: Spiritual Journeys in Zanzibar
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
                    <div className={"item hover-img"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=lake-manyara-starlit-camping-safari" className="image-link">
                            <img
                              src="/images/locations/tour-43.jpg"
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
                                data-fancybox="gallery2"
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
                          <a href="/toursingle1?tour=lake-manyara-starlit-camping-safari"
                            className={"link multi-ellipsis"}
                          >
                            Lake Manyara Starlit Camping Safari
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
                          <a href="/toursingle1?tour=ngorongoro-crater-day-tour" className="image-link">
                            <img
                              src="/images/locations/tour-48.jpg"
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
                                data-fancybox="gallery3"
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
                          <a href="/toursingle1?tour=ngorongoro-crater-day-tour"
                            className={"link multi-ellipsis"}
                          >
                            Ngorongoro Crater Day Tour
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
                          <a href="/toursingle1?tour=stone-town-historic-walking-tour" className="image-link">
                            <img
                              src="/images/locations/tour-44.jpg"
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
                                data-fancybox="gallery4"
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
                          <a href="/toursingle1?tour=stone-town-historic-walking-tour"
                            className={"link multi-ellipsis"}
                          >
                            Stone Town Historic Walking Tour
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
                          <a href="/toursingle1?tour=stone-town-palace-secrets-tour" className="image-link">
                            <img
                              src="/images/locations/tour-46.jpg"
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
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-serengeti.jpg"
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
                          <a href="/toursingle1?tour=stone-town-palace-secrets-tour"
                            className={"link multi-ellipsis"}
                          >
                            Stone Town Palace Secrets Tour
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
                          <a href="/toursingle1?tour=jozani-forest-spice-farm-tour" className="image-link">
                            <img
                              src="/images/locations/tour-13.jpg"
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
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-nyerere.jpg"
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
                          <a href="/toursingle1?tour=jozani-forest-spice-farm-tour"
                            className={"link multi-ellipsis"}
                          >
                            Jozani Forest & Spice Farm Tour
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
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=7-days-discover-northern-tanzania-safari" className="image-link">
                            <img
                              src="/images/locations/tour-46.jpg"
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
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-spicefarm.jpg"
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
                          <a href="/toursingle1?tour=7-days-discover-northern-tanzania-safari"
                            className={"link multi-ellipsis"}
                          >
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
                            <img
                              src="/images/locations/tour-47.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery8"
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
                                data-fancybox="gallery8"
                                data-src="/images/locations/dest-manyara.jpg"
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
                          <a href="/toursingle1?tour=stone-town-markets-and-heritage-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
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
                <div
                  className={"tab-pane fade"}
                  id="sailboat"
                  role="tabpanel"
                  aria-labelledby="sailboat"
                >
                  <div
                    className={
                      "tf-grid-layout tf-col-4 xl-col-3 lg-col-2 sm-col-1 "
                    }
                  >
                    <div className={"item hover-img"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=mystical-stone-town-spiritual-journeys-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-42.jpg"
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
                                data-fancybox="gallery1"
                                data-src="/images/locations/dest-stonetown.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery1"
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
                          <a href="/toursingle1?tour=mystical-stone-town-spiritual-journeys-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Mystical Stone Town: Spiritual Journeys in Zanzibar
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
                    <div className={"item hover-img"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=lake-manyara-starlit-camping-safari" className="image-link">
                            <img
                              src="/images/locations/tour-43.jpg"
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
                                data-fancybox="gallery2"
                                data-src="/images/locations/dest-serengeti.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery2"
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
                          <a href="/toursingle1?tour=lake-manyara-starlit-camping-safari"
                            className={"link multi-ellipsis"}
                          >
                            Lake Manyara Starlit Camping Safari
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
                          <a href="/toursingle1?tour=ngorongoro-crater-day-tour" className="image-link">
                            <img
                              src="/images/locations/tour-48.jpg"
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
                                data-fancybox="gallery3"
                                data-src="/images/locations/dest-nyerere.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery3"
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
                          <a href="/toursingle1?tour=ngorongoro-crater-day-tour"
                            className={"link multi-ellipsis"}
                          >
                            Ngorongoro Crater Day Tour
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
                          <a href="/toursingle1?tour=stone-town-historic-walking-tour" className="image-link">
                            <img
                              src="/images/locations/tour-44.jpg"
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
                          <a href="/toursingle1?tour=stone-town-historic-walking-tour"
                            className={"link multi-ellipsis"}
                          >
                            Stone Town Historic Walking Tour
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
                          <a href="/toursingle1?tour=stone-town-palace-secrets-tour" className="image-link">
                            <img
                              src="/images/locations/tour-46.jpg"
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
                          <a href="/toursingle1?tour=stone-town-palace-secrets-tour"
                            className={"link multi-ellipsis"}
                          >
                            Stone Town Palace Secrets Tour
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
                          <a href="/toursingle1?tour=jozani-forest-spice-farm-tour" className="image-link">
                            <img
                              src="/images/locations/tour-13.jpg"
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
                          <a href="/toursingle1?tour=jozani-forest-spice-farm-tour"
                            className={"link multi-ellipsis"}
                          >
                            Jozani Forest & Spice Farm Tour
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
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=7-days-discover-northern-tanzania-safari" className="image-link">
                            <img
                              src="/images/locations/tour-46.jpg"
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
                          <a href="/toursingle1?tour=7-days-discover-northern-tanzania-safari"
                            className={"link multi-ellipsis"}
                          >
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
                            <img
                              src="/images/locations/tour-47.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery8"
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
                                data-fancybox="gallery8"
                                data-src="/images/locations/dest-kilimanjaro.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery8"
                                data-src="/images/locations/dest-stonetown.jpg"
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
                          <a href="/toursingle1?tour=stone-town-markets-and-heritage-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
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
                <div
                  className={"tab-pane fade"}
                  id="discovery"
                  role="tabpanel"
                  aria-labelledby="discovery"
                >
                  <div
                    className={
                      "tf-grid-layout tf-col-4 xl-col-3 lg-col-2 sm-col-1 "
                    }
                  >
                    <div className={"item hover-img"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=mystical-stone-town-spiritual-journeys-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-42.jpg"
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
                                data-fancybox="gallery1"
                                data-src="/images/locations/dest-jozani.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=mystical-stone-town-spiritual-journeys-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Mystical Stone Town: Spiritual Journeys in Zanzibar
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
                    <div className={"item hover-img"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=lake-manyara-starlit-camping-safari" className="image-link">
                            <img
                              src="/images/locations/tour-43.jpg"
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
                                data-fancybox="gallery2"
                                data-src="/images/locations/dest-tarangire.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=lake-manyara-starlit-camping-safari"
                            className={"link multi-ellipsis"}
                          >
                            Lake Manyara Starlit Camping Safari
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
                          <a href="/toursingle1?tour=ngorongoro-crater-day-tour" className="image-link">
                            <img
                              src="/images/locations/tour-48.jpg"
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
                                data-fancybox="gallery3"
                                data-src="/images/locations/dest-stonetown.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=ngorongoro-crater-day-tour"
                            className={"link multi-ellipsis"}
                          >
                            Ngorongoro Crater Day Tour
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
                          <a href="/toursingle1?tour=stone-town-historic-walking-tour" className="image-link">
                            <img
                              src="/images/locations/tour-44.jpg"
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
                                data-fancybox="gallery4"
                                data-src="/images/locations/dest-serengeti.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=stone-town-historic-walking-tour"
                            className={"link multi-ellipsis"}
                          >
                            Stone Town Historic Walking Tour
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
                          <a href="/toursingle1?tour=stone-town-palace-secrets-tour" className="image-link">
                            <img
                              src="/images/locations/tour-46.jpg"
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
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-nyerere.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=stone-town-palace-secrets-tour"
                            className={"link multi-ellipsis"}
                          >
                            Stone Town Palace Secrets Tour
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
                          <a href="/toursingle1?tour=jozani-forest-spice-farm-tour" className="image-link">
                            <img
                              src="/images/locations/tour-13.jpg"
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
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-spicefarm.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=jozani-forest-spice-farm-tour"
                            className={"link multi-ellipsis"}
                          >
                            Jozani Forest & Spice Farm Tour
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
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=7-days-discover-northern-tanzania-safari" className="image-link">
                            <img
                              src="/images/locations/tour-46.jpg"
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
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-manyara.jpg"
                                style={{ display: "none" }}
                              />{" "}
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
                          <a href="/toursingle1?tour=7-days-discover-northern-tanzania-safari"
                            className={"link multi-ellipsis"}
                          >
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
                            <img
                              src="/images/locations/tour-47.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery8"
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
                                data-fancybox="gallery8"
                                data-src="/images/locations/dest-mnemba.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery8"
                                data-src="/images/locations/dest-jozani.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery8"
                                data-src="/images/locations/dest-spicefarm.jpg"
                                style={{ display: "none" }}
                              />{" "}
                              <a
                                data-fancybox="gallery8"
                                data-src="/images/locations/dest-zanzibar.jpg"
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
                          <a href="/toursingle1?tour=stone-town-markets-and-heritage-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
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
                <div
                  className={"tab-pane fade"}
                  id="climbing"
                  role="tabpanel"
                  aria-labelledby="climbing"
                >
                  <div
                    className={
                      "tf-grid-layout tf-col-4 xl-col-3 lg-col-2 sm-col-1 "
                    }
                  >
                    <div className={"item hover-img"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=mystical-stone-town-spiritual-journeys-in-zanzibar" className="image-link">
                            <img
                              src="/images/locations/tour-42.jpg"
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
                                data-fancybox="gallery1"
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
                          <a href="/toursingle1?tour=mystical-stone-town-spiritual-journeys-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
                            Mystical Stone Town: Spiritual Journeys in Zanzibar
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
                    <div className={"item hover-img"}>
                      <div className="archive-top">
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=lake-manyara-starlit-camping-safari" className="image-link">
                            <img
                              src="/images/locations/tour-43.jpg"
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
                                data-fancybox="gallery2"
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
                          <a href="/toursingle1?tour=lake-manyara-starlit-camping-safari"
                            className={"link multi-ellipsis"}
                          >
                            Lake Manyara Starlit Camping Safari
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
                          <a href="/toursingle1?tour=ngorongoro-crater-day-tour" className="image-link">
                            <img
                              src="/images/locations/tour-48.jpg"
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
                                data-fancybox="gallery3"
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
                          <a href="/toursingle1?tour=ngorongoro-crater-day-tour"
                            className={"link multi-ellipsis"}
                          >
                            Ngorongoro Crater Day Tour
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
                          <a href="/toursingle1?tour=stone-town-historic-walking-tour" className="image-link">
                            <img
                              src="/images/locations/tour-44.jpg"
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
                                data-fancybox="gallery4"
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
                          <a href="/toursingle1?tour=stone-town-historic-walking-tour"
                            className={"link multi-ellipsis"}
                          >
                            Stone Town Historic Walking Tour
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
                          <a href="/toursingle1?tour=stone-town-palace-secrets-tour" className="image-link">
                            <img
                              src="/images/locations/tour-46.jpg"
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
                                data-fancybox="gallery5"
                                data-src="/images/locations/dest-serengeti.jpg"
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
                          <a href="/toursingle1?tour=stone-town-palace-secrets-tour"
                            className={"link multi-ellipsis"}
                          >
                            Stone Town Palace Secrets Tour
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
                          <a href="/toursingle1?tour=jozani-forest-spice-farm-tour" className="image-link">
                            <img
                              src="/images/locations/tour-13.jpg"
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
                                data-fancybox="gallery6"
                                data-src="/images/locations/dest-nyerere.jpg"
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
                          <a href="/toursingle1?tour=jozani-forest-spice-farm-tour"
                            className={"link multi-ellipsis"}
                          >
                            Jozani Forest & Spice Farm Tour
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
                        <div className={"images-group img-style"}>
                          <a href="/toursingle1?tour=7-days-discover-northern-tanzania-safari" className="image-link">
                            <img
                              src="/images/locations/tour-46.jpg"
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
                                data-fancybox="gallery7"
                                data-src="/images/locations/dest-spicefarm.jpg"
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
                          <a href="/toursingle1?tour=7-days-discover-northern-tanzania-safari"
                            className={"link multi-ellipsis"}
                          >
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
                            <img
                              src="/images/locations/tour-47.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="group-meta">
                            <div className="tag-meta">
                              <div className="flag-tag">Featured</div>
                              <a
                                href="javascript:void(0)"
                                className={"count image"}
                                data-fancybox="gallery8"
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
                                data-fancybox="gallery8"
                                data-src="/images/locations/dest-manyara.jpg"
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
                          <a href="/toursingle1?tour=stone-town-markets-and-heritage-in-zanzibar"
                            className={"link multi-ellipsis"}
                          >
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
                <a href="/homepage5#">
                  <img src="/images/logo/logo-app.png" alt="app-store" />
                </a>{" "}
                <a href="/homepage5#">
                  <img src="/images/logo/logo-gg.png" alt="google" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className={"banner-section banner-2"}>
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
      <div className={"flat-recommended section-overlap--lg"}>
        <div className="container">
          <div className="flat-tab-recommend">
            <div
              className={
                "swiper tf-swiper-tour wow animate__animated animate__fadeIn"
              }
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-preview="3"
              data-tablet="2"
              data-mobile="1"
              data-mobile-sm="1"
              data-space-lg="40"
              data-space-md="40"
              data-space="40"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className={"item hover-img list-style-02"}>
                    <div className="archive-top">
                      <div className={"images-group img-style"}>
                        <a href="/toursingle1?tour=lake-manyara-tree-climbing-lions-safari" className="image-link">
                          <img
                            src="/images/locations/tour-49.jpg"
                            alt="image"
                          />
                        </a>
                        <div className="group-meta">
                          <div className="tag-meta">
                            <div className="flag-tag">Featured</div>
                            <a
                              href="javascript:void(0)"
                              className={"count image"}
                              data-fancybox="gallery11"
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
                              data-fancybox="gallery11"
                              data-src="/images/locations/dest-nyerere.jpg"
                              style={{ display: "none" }}
                            />{" "}
                            <a
                              data-fancybox="gallery11"
                              data-src="/images/locations/dest-kilimanjaro.jpg"
                              style={{ display: "none" }}
                            />{" "}
                            <a
                              data-fancybox="gallery11"
                              data-src="/images/locations/dest-stonetown.jpg"
                              style={{ display: "none" }}
                            />{" "}
                            <a
                              data-fancybox="gallery11"
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
                        <div className="address">
                          <img
                            src="/images/icons/place.svg"
                            alt="icon"
                            className="icon"
                          />{" "}
                          <span className="location">Arusha</span>
                        </div>
                        <div className="rating">
                          <ul className="list-star">
                            <li className={"icon icon-star"} />
                          </ul>
                          <div className="rate">
                            <div className="total-rate">5</div>
                          </div>
                        </div>
                      </div>
                      <div className={"tour-title h3"}>
                        <a href="/toursingle1?tour=lake-manyara-tree-climbing-lions-safari"
                          className={"link multi-ellipsis"}
                        >
                          Lake Manyara Tree-Climbing Lions Safari
                        </a>
                      </div>
                      <div className="content-bottom">
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
                        <div className={"price h5"}>$265,00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className={"item hover-img list-style-02"}>
                    <div className="archive-top">
                      <div className={"images-group img-style"}>
                        <a href="/toursingle1?tour=serengeti-wildlife-and-migration-trails" className="image-link">
                          <img
                            src="/images/locations/tour-40.jpg"
                            alt="image"
                          />
                        </a>
                        <div className="group-meta">
                          <div className="tag-meta">
                            <div className="flag-tag">Featured</div>
                            <a
                              href="javascript:void(0)"
                              className={"count image"}
                              data-fancybox="gallery12"
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
                              data-fancybox="gallery12"
                              data-src="/images/locations/dest-spicefarm.jpg"
                              style={{ display: "none" }}
                            />{" "}
                            <a
                              data-fancybox="gallery12"
                              data-src="/images/locations/dest-zanzibar.jpg"
                              style={{ display: "none" }}
                            />{" "}
                            <a
                              data-fancybox="gallery12"
                              data-src="/images/locations/dest-serengeti.jpg"
                              style={{ display: "none" }}
                            />{" "}
                            <a
                              data-fancybox="gallery12"
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
                        <div className="address">
                          <img
                            src="/images/icons/place.svg"
                            alt="icon"
                            className="icon"
                          />{" "}
                          <span className="location">Arusha</span>
                        </div>
                        <div className="rating">
                          <ul className="list-star">
                            <li className={"icon icon-star"} />
                          </ul>
                          <div className="rate">
                            <div className="total-rate">5</div>
                          </div>
                        </div>
                      </div>
                      <div className={"tour-title h3"}>
                        <a href="/toursingle1?tour=serengeti-wildlife-and-migration-trails"
                          className={"link multi-ellipsis"}
                        >
                          Serengeti: Wildlife and Migration Trails
                        </a>
                      </div>
                      <div className="content-bottom">
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
                        <div className={"price h5"}>$265,00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className={"item hover-img list-style-02"}>
                    <div className="archive-top">
                      <div className={"images-group img-style"}>
                        <a href="/toursingle1?tour=mnemba-island-dhow-sunset-cruise" className="image-link">
                          <img
                            src="/images/locations/tour-58.jpg"
                            alt="image"
                          />
                        </a>
                        <div className="group-meta">
                          <div className="tag-meta">
                            <div className="flag-tag">Featured</div>
                            <a
                              href="javascript:void(0)"
                              className={"count image"}
                              data-fancybox="gallery13"
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
                              data-fancybox="gallery13"
                              data-src="/images/locations/dest-manyara.jpg"
                              style={{ display: "none" }}
                            />{" "}
                            <a
                              data-fancybox="gallery13"
                              data-src="/images/locations/dest-mikumi.jpg"
                              style={{ display: "none" }}
                            />{" "}
                            <a
                              data-fancybox="gallery13"
                              data-src="/images/locations/dest-nyerere.jpg"
                              style={{ display: "none" }}
                            />{" "}
                            <a
                              data-fancybox="gallery13"
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
                        <div className="address">
                          <img
                            src="/images/icons/place.svg"
                            alt="icon"
                            className="icon"
                          />{" "}
                          <span className="location">Arusha</span>
                        </div>
                        <div className="rating">
                          <ul className="list-star">
                            <li className={"icon icon-star"} />
                          </ul>
                          <div className="rate">
                            <div className="total-rate">5</div>
                          </div>
                        </div>
                      </div>
                      <div className={"tour-title h3"}>
                        <a href="/toursingle1?tour=mnemba-island-dhow-sunset-cruise"
                          className={"link multi-ellipsis"}
                        >
                          Mnemba Island Dhow Sunset Cruise
                        </a>
                      </div>
                      <div className="content-bottom">
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
                        <div className={"price h5"}>$265,00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-control">
                <div
                  className={"sw-pagination-tour sw-pagination text-center"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className={"flat-testimonial flat-section overflow-hidden"}>
        <div className="container-4">
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
              "swiper tf-sw-testimonial cus-ovl-1 wow animate__animated animate__fadeIn"
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
            <div className="slider-control">
              <a href="/homepage5#" className={"flex-prev nav-prev-location"}>
                <img src="/images/icons/arrow-left-1.svg" alt="prev" />
              </a>
              <div className={"sw-pagination sw-pagination-tes text-center"} />
              <a href="/homepage5#" className={"flex-next nav-next-location"}>
                <img src="/images/icons/arrow-right-2.svg" alt="next" />
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className={"flat-section pt-0"}>
        <div className="container">
          <div
            className={
              "box-title text-center wow animate__animated animate__fadeInUp"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <h1 className="title">Latest news &amp; articles</h1>
            <div className={"text-subtitle text-color"}>
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
                      src="/images/locations/tour-53.jpg"
                      alt="Blog"
                      className="aspect-4-5"
                    />
                  </div>
                  <div className={"content-box style-content-01"}>
                    <div className="detail">Discovery</div>
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
                        Unveiling Hidden Gems: A Traveler's Guide to Offbeat
                        Destinations
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
                      src="/images/locations/tour-73.jpg"
                      alt="Blog"
                      className="aspect-4-5"
                    />
                  </div>
                  <div className={"content-box style-content-01"}>
                    <div className="detail">Discovery</div>
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
                        Sustainable Journeys: Eco-Friendly Travel Tips for
                        Conscious Wanderers
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
                      src="/images/locations/tour-41.jpg"
                      alt="Blog"
                      className="aspect-4-5"
                    />
                  </div>
                  <div className={"content-box style-content-01"}>
                    <div className="detail">Discovery</div>
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
                        Culinary Adventures Abroad: Savoring Local Flavors on
                        Your Next Trip
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
