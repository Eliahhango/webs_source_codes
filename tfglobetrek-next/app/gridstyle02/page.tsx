export default function gridstyle02Page() {
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
                      <h1 className="mb-8">
                        Discover the world
                        <br />
                        start your journey
                      </h1>
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
              <div className={"swiper-slide home-1"}>
                <div className={"box-banner box-banner-2"}>
                  <div className="container">
                    <div className="box-title">
                      <h1 className="mb-8">
                        Discover the world
                        <br />
                        start your journey
                      </h1>
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
              <div className={"swiper-slide home-1"}>
                <div className={"box-banner box-banner-3"}>
                  <div className="container">
                    <div className="box-title">
                      <h1 className="mb-8">
                        Discover the world
                        <br />
                        start your journey
                      </h1>
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
              <a href="/gridstyle02#" className={"flex-prev style-nav-1"}>
                <img src="/images/icons/arrow-left-1.svg" alt="prev" />
              </a>{" "}
              <a href="/gridstyle02#" className={"flex-next style-nav-1"}>
                <img src="/images/icons/arrow-right-2.svg" alt="next" />
              </a>
            </div>
          </div>
          <div className={"tab-content pos-1"}>
            <div className={"face active show"} role="tabpanel">
              <div className="container">
                <div className="form-s1">
                  <form action="//search">
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
                                  <a href="/gridstyle02#">
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
                                  <a href="/gridstyle02#">
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
                                  <a href="/gridstyle02#">
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
                                  <a href="/gridstyle02#">
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
                                  <a href="/gridstyle02#">
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
                                  <a href="/gridstyle02#">
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
                                  <a href="/gridstyle02#">
                                    <div className="content">
                                      <div className="type">Adventure</div>
                                    </div>
                                  </a>
                                </li>
                                <li data-value="beach" className="option">
                                  <a href="/gridstyle02#">
                                    <div className="content">
                                      <div className="type">Beach</div>
                                    </div>
                                  </a>
                                </li>
                                <li data-value="camping" className="option">
                                  <a href="/gridstyle02#">
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
                            href="/gridstyle02#"
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
      <div className={"flat-section flat-recommended"}>
        <div className="container">
          <div className="box-listing-top">
            <div
              className={"box-title wow animate__animated animate__fadeInUp"}
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className={"title h1"}>Listing tour</div>
            </div>
            <div className="box-filter-tab">
              <ul className="nav-tab-filter" role="tablist">
                <li className="nav-tab-item" role="presentation">
                  <a className={"nav-link-item active"} href="/gridstyle02#">
                    <img
                      src="/images/icons/list-2.svg"
                      alt="icon"
                      className="icon"
                    />
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a className="nav-link-item" href="/gridstyle02#">
                    <img
                      src="/images/icons/list.svg"
                      alt="icon"
                      className="icon"
                    />
                  </a>
                </li>
              </ul>
              <div className={"sort-select box-select"} tabIndex={0}>
                <span className="current">
                  Sort by (Default)
                  <i className={"icon icon-CaretDown"} />
                </span>
                <ul className="list">
                  <li data-value="default" className={"option selected"}>
                    <a href="/gridstyle02#">Sort by (Default)</a>
                  </li>
                  <li data-value="new" className="option">
                    <a href="/gridstyle02#">Newest</a>
                  </li>
                  <li data-value="old" className="option">
                    <a href="/gridstyle02#">Oldest</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flat-tab-recommend">
            <div className="row">
              <div
                className={
                  "tf-grid-layout tf-col-3 lg-col-2 sm-col-1 wow animate__animated animate__fadeIn"
                }
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className={"item hover-img list-style-02"}>
                  <div className="archive-top">
                    <div className={"images-group img-style"}>
                      <a href="/toursingle1?tour=discover-the-wonders-of-zanzibar" className="image-link">
                        <img src="/images/locations/tour-41.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery11"
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
                            data-fancybox="gallery11"
                            data-src="/images/locations/dest-jozani.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery11"
                            data-src="/images/locations/dest-spicefarm.jpg"
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
                        <span className="location">Zanzibar Island</span>
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
                    <div className={"tour-title h3"}>
                      <a href="/toursingle1?tour=discover-the-wonders-of-zanzibar" className={"link multi-ellipsis"}>
                        Discover the Wonders of Zanzibar
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
                      <div className={"price h5"}>$250</div>
                    </div>
                  </div>
                </div>
                <div className={"item hover-img list-style-02"}>
                  <div className="archive-top">
                    <div className={"images-group img-style"}>
                      <a href="/toursingle1?tour=adventure-in-lake-manyara" className="image-link">
                        <img src="/images/locations/tour-42.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery12"
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
                            data-fancybox="gallery12"
                            data-src="/images/locations/dest-tarangire.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery12"
                            data-src="/images/locations/dest-manyara.jpg"
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
                        <span className="location">Lake Manyara National Park</span>
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
                    <div className={"tour-title h3"}>
                      <a href="/toursingle1?tour=adventure-in-lake-manyara" className={"link multi-ellipsis"}>
                        Adventure in Lake Manyara
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
                      <div className={"price h5"}>$300</div>
                    </div>
                  </div>
                </div>
                <div className={"item hover-img list-style-02"}>
                  <div className="archive-top">
                    <div className={"images-group img-style"}>
                      <a href="/toursingle1?tour=selous-game-reserve-exploration" className="image-link">
                        <img src="/images/locations/tour-43.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery13"
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
                            data-fancybox="gallery13"
                            data-src="/images/locations/dest-stonetown.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery13"
                            data-src="/images/locations/dest-mnemba.jpg"
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
                      <div className="address">
                        <img
                          src="/images/icons/place.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="location">Nyerere National Park</span>
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
                    <div className={"tour-title h3"}>
                      <a href="/toursingle1?tour=selous-game-reserve-exploration" className={"link multi-ellipsis"}>
                        Selous Game Reserve Exploration
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
                      <div className={"price h5"}>$350</div>
                    </div>
                  </div>
                </div>
                <div className={"item hover-img list-style-02"}>
                  <div className="archive-top">
                    <div className={"images-group img-style"}>
                      <a href="/toursingle1?tour=serengeti-highlights-safari" className="image-link">
                        <img src="/images/locations/tour-44.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery14"
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
                            data-fancybox="gallery14"
                            data-src="/images/locations/dest-spicefarm.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery14"
                            data-src="/images/locations/dest-zanzibar.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery14"
                            data-src="/images/locations/dest-serengeti.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery14"
                            data-src="/images/locations/dest-ngorongoro.jpg"
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
                      <div className="address">
                        <img
                          src="/images/icons/place.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="location">Dar es Salaam</span>
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
                    <div className={"tour-title h3"}>
                      <a href="/toursingle1?tour=serengeti-highlights-safari" className={"link multi-ellipsis"}>
                        Serengeti Highlights Safari
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
                      <div className={"price h5"}>$280</div>
                    </div>
                  </div>
                </div>
                <div className={"item hover-img list-style-02"}>
                  <div className="archive-top">
                    <div className={"images-group img-style"}>
                      <a href="/toursingle1?tour=romantic-stone-town-getaway" className="image-link">
                        <img src="/images/locations/tour-45.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery15"
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
                            data-fancybox="gallery15"
                            data-src="/images/locations/dest-manyara.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery15"
                            data-src="/images/locations/dest-mikumi.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery15"
                            data-src="/images/locations/dest-nyerere.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery15"
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
                        <span className="location">Stone Town</span>
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
                    <div className={"tour-title h3"}>
                      <a href="/toursingle1?tour=romantic-stone-town-getaway" className={"link multi-ellipsis"}>
                        Romantic Stone Town Getaway
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
                      <div className={"price h5"}>$420</div>
                    </div>
                  </div>
                </div>
                <div className={"item hover-img list-style-02"}>
                  <div className="archive-top">
                    <div className={"images-group img-style"}>
                      <a href="/toursingle1?tour=serengeti-adventure-safari" className="image-link">
                        <img src="/images/locations/tour-46.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery16"
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
                            data-fancybox="gallery16"
                            data-src="/images/locations/dest-mnemba.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery16"
                            data-src="/images/locations/dest-jozani.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery16"
                            data-src="/images/locations/dest-spicefarm.jpg"
                            style={{ display: "none" }}
                          />{" "}
                          <a
                            data-fancybox="gallery16"
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
                      <div className="address">
                        <img
                          src="/images/icons/place.svg"
                          alt="icon"
                          className="icon"
                        />{" "}
                        <span className="location">Serengeti National Park</span>
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
                    <div className={"tour-title h3"}>
                      <a href="/toursingle1?tour=serengeti-adventure-safari" className={"link multi-ellipsis"}>
                        Serengeti Adventure Safari
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
                      <div className={"price h5"}>$380</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                "text-center mt-10 wow animate__animated animate__fadeInUp"
              }
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <ul className={"justify-content-center wd-navigation"}>
                <li>
                  <a href="/gridstyle02#" className="nav-item">
                    <i className={"icon icon-CaretLeft"} />
                  </a>
                </li>
                <li>
                  <a href="/gridstyle02#" className="nav-item">
                    1
                  </a>
                </li>
                <li>
                  <a href="/gridstyle02#" className="nav-item">
                    2
                  </a>
                </li>
                <li>
                  <a href="/gridstyle02#" className={"nav-item active"}>
                    3
                  </a>
                </li>
                <li>
                  <a href="/gridstyle02#" className="nav-item">
                    4
                  </a>
                </li>
                <li>
                  <a href="/gridstyle02#" className="nav-item">
                    ...
                  </a>
                </li>
                <li>
                  <a href="/gridstyle02#" className="nav-item">
                    <i className={"icon icon-CaretRight"} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
