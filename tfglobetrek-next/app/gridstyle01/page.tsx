export default function gridstyle01Page() {
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
              <a href="/gridstyle01#" className={"flex-prev style-nav-1"}>
                <img src="/images/icons/arrow-left-1.svg" alt="prev" />
              </a>{" "}
              <a href="/gridstyle01#" className={"flex-next style-nav-1"}>
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
                                  <a href="/gridstyle01#">
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
                                  <a href="/gridstyle01#">
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
                                  <a href="/gridstyle01#">
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
                                  <a href="/gridstyle01#">
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
                                  <a href="/gridstyle01#">
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
                                  <a href="/gridstyle01#">
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
                                  <a href="/gridstyle01#">
                                    <div className="content">
                                      <div className="type">Adventure</div>
                                    </div>
                                  </a>
                                </li>
                                <li data-value="beach" className="option">
                                  <a href="/gridstyle01#">
                                    <div className="content">
                                      <div className="type">Beach</div>
                                    </div>
                                  </a>
                                </li>
                                <li data-value="camping" className="option">
                                  <a href="/gridstyle01#">
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
                            href="/gridstyle01#"
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
                <li>
                  <a
                    href="/gridstyle01#modalFilter"
                    data-bs-toggle="modal"
                    className={"tf-btn hover-1"}
                  >
                    <img
                      src="/images/icons/advanced.svg"
                      alt="icon"
                      className="icon"
                    />{" "}
                    <span>Filter</span>
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a className={"nav-link-item active"} href="/gridstyle01#">
                    <img
                      src="/images/icons/list-2.svg"
                      alt="icon"
                      className="icon"
                    />
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a className="nav-link-item" href="/gridstyle01#">
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
                    <a href="/gridstyle01#">Sort by (Default)</a>
                  </li>
                  <li data-value="new" className="option">
                    <a href="/gridstyle01#">Newest</a>
                  </li>
                  <li data-value="old" className="option">
                    <a href="/gridstyle01#">Oldest</a>
                  </li>
                </ul>
              </div>
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
                      <a href="/toursingle1?tour=lake-manyara-tree-climbing-lions-safari" className="image-link">
                        <img src="/images/locations/tour-53.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery1"
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
                            data-fancybox="gallery1"
                            data-src="/images/locations/dest-tarangire.jpg"
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
                      <a href="/toursingle1?tour=lake-manyara-tree-climbing-lions-safari" className={"link multi-ellipsis"}>
                        Lake Manyara Tree-Climbing Lions Safari
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
                      <a href="/toursingle1?tour=serengeti-wildlife-and-migration-trails" className="image-link">
                        <img src="/images/locations/tour-30.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery2"
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
                            data-fancybox="gallery2"
                            data-src="/images/locations/dest-stonetown.jpg"
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
                      <a href="/toursingle1?tour=serengeti-wildlife-and-migration-trails" className={"link multi-ellipsis"}>
                        Serengeti: Wildlife and Migration Trails
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
                      <a href="/toursingle1?tour=nyerere-wildlife-and-iconic-river-safaris" className="image-link">
                        <img src="/images/locations/tour-09.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery3"
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
                            data-fancybox="gallery3"
                            data-src="/images/locations/dest-serengeti.jpg"
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
                      <a href="/toursingle1?tour=nyerere-wildlife-and-iconic-river-safaris" className={"link multi-ellipsis"}>
                        Nyerere: Wildlife and Iconic River Safaris
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
                      <a href="/toursingle1?tour=jozani-forest-spice-farm-tour" className="image-link">
                        <img src="/images/locations/tour-08.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery4"
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
                            data-fancybox="gallery4"
                            data-src="/images/locations/dest-nyerere.jpg"
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
                      <a href="/toursingle1?tour=jozani-forest-spice-farm-tour" className={"link multi-ellipsis"}>
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
                        <span className="location">Arusha</span>
                      </div>
                      <div className={"price h5"}>$265,00</div>
                    </div>
                  </div>
                </div>
                <div className={"item hover-img"}>
                  <div className="archive-top">
                    <div className={"images-group img-style"}>
                      <a href="/toursingle1?tour=mnemba-island-dhow-sunset-cruise" className="image-link">
                        <img src="/images/locations/tour-01.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery5"
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
                            data-fancybox="gallery5"
                            data-src="/images/locations/dest-spicefarm.jpg"
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
                      <a href="/toursingle1?tour=mnemba-island-dhow-sunset-cruise" className={"link multi-ellipsis"}>
                        Mnemba Island Dhow Sunset Cruise
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
                      <a href="/toursingle1?tour=arusha-city-highlights-and-maasai-market" className="image-link">
                        <img src="/images/locations/tour-03.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery6"
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
                            data-fancybox="gallery6"
                            data-src="/images/locations/dest-manyara.jpg"
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
                      <a href="/toursingle1?tour=arusha-city-highlights-and-maasai-market" className={"link multi-ellipsis"}>
                        Arusha: City Highlights and Maasai Market
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
                      <a href="/toursingle1?tour=zanzibar-vibrant-streets-and-sunset-views" className="image-link">
                        <img src="/images/locations/tour-10.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery7"
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
                            data-fancybox="gallery7"
                            data-src="/images/locations/dest-mnemba.jpg"
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
                      <a href="/toursingle1?tour=zanzibar-vibrant-streets-and-sunset-views" className={"link multi-ellipsis"}>
                        Zanzibar: Vibrant Streets and Sunset Views
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
                      <a href="/toursingle1?tour=stone-town-historic-architecture-and-beach-bliss" className="image-link">
                        <img src="/images/locations/tour-80.jpg" alt="image" />
                      </a>
                      <div className="group-meta">
                        <div className="tag-meta">
                          <div className="flag-tag">Featured</div>
                          <a
                            href="javascript:void(0)"
                            className={"count image"}
                            data-fancybox="gallery8"
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
                      <a href="/toursingle1?tour=stone-town-historic-architecture-and-beach-bliss" className={"link multi-ellipsis"}>
                        Stone Town: Historic Architecture and Beach Bliss
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
                  <a href="/gridstyle01#" className="nav-item">
                    <i className={"icon icon-CaretLeft"} />
                  </a>
                </li>
                <li>
                  <a href="/gridstyle01#" className="nav-item">
                    1
                  </a>
                </li>
                <li>
                  <a href="/gridstyle01#" className="nav-item">
                    2
                  </a>
                </li>
                <li>
                  <a href="/gridstyle01#" className={"nav-item active"}>
                    3
                  </a>
                </li>
                <li>
                  <a href="/gridstyle01#" className="nav-item">
                    4
                  </a>
                </li>
                <li>
                  <a href="/gridstyle01#" className="nav-item">
                    ...
                  </a>
                </li>
                <li>
                  <a href="/gridstyle01#" className="nav-item">
                    <i className={"icon icon-CaretRight"} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={"modal modal-filter fade"}
        id="modalFilter"
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className={"modal-dialog modal-dialog-left"}>
          <div className="modal-content">
            <div
              className={
                "d-flex justify-content-between align-items-center mb-3"
              }
            >
              <div className={"m-0 h4"}>Filter</div>
              <span className={"close-modal icon-X"} data-bs-dismiss="modal" />
            </div>
            <div className="sidebar-filter">
              <div className="filter-result">
                <span
                  className={"subtitle text_primary"}
                  id="count-filter-modal"
                >
                  12 Tours Found
                </span>
              </div>
              <div className={"widget-item widget-type-tour"}>
                <div className={"text-black text-capitalize h5"}>Tour Type</div>
                <ul className={"list-type-tour mt-3"}>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="adventure-modal"
                      name="adventure"
                      value="adventure"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="adventure-modal" className="subtitle">
                      Adventure Tours
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="foodtours-modal"
                      name="foodtours"
                      value="foodtours"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="foodtours-modal" className="subtitle">
                      Food Tours
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="forest-modal"
                      name="forest"
                      value="forest"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="forest-modal" className="subtitle">
                      Forest trip
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="city-modal"
                      name="city"
                      value="city"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="city-modal" className="subtitle">
                      City Tours
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="cultural-modal"
                      name="cultural"
                      value="cultural"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="cultural-modal" className="subtitle">
                      Cultural
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="nature-modal"
                      name="nature"
                      value="nature"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="nature-modal" className="subtitle">
                      Nature Tour
                    </label>
                  </li>
                </ul>
              </div>
              <div className={"widget-item widget-people-tour"}>
                <div className={"text-black text-capitalize h5"}>People</div>
                <ul className={"box-fill-people mt-3"} id="wg-people-modal">
                  <li className="people-item">
                    <a
                      href="/gridstyle01#people-collapse-modal"
                      className={"people-top collapsed"}
                      data-bs-toggle="collapse"
                      data-bs-target="#people-collapse-modal"
                      aria-expanded="false"
                      aria-controls="people-collapse-modal"
                    >
                      <span className={"current subtitle"} />{" "}
                      <i className={"icon icon-CaretDown"} />
                    </a>
                    <div
                      className="collapse"
                      id="people-collapse-modal"
                      data-bs-parent="#wg-people-modal"
                    >
                      <div className="people-content">
                        <div className={"guest-item style-01"}>
                          <span className="guest-label">Adult</span>
                          <div className="counter">
                            <button type="button" className="minus">
                              −
                            </button>{" "}
                            <input type="number" value="0" min={0} />{" "}
                            <button type="button" className="plus">
                              +
                            </button>
                          </div>
                        </div>
                        <div className={"guest-item style-01"}>
                          <span className="guest-label">Children</span>
                          <div className="counter">
                            <button type="button" className="minus">
                              −
                            </button>{" "}
                            <input type="number" value="0" min={0} />{" "}
                            <button type="button" className="plus">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={"widget-item widget-advanced-price"}>
                <div className="group-price">
                  <div className="box-title-price">
                    <span className="title-price">Price</span>
                    <div className="caption-price">
                      <span id="slider-range-value1-modal">$0</span>{" "}
                      <span>-</span>{" "}
                      <span id="slider-range-value2-modal">$10,000</span>
                    </div>
                  </div>
                  <div id="slider-range-modal" className="slider-range" />
                </div>
              </div>
              <div className={"widget-item widget-duration-tour"}>
                <div className={"text-black text-capitalize h5"}>Duration</div>
                <ul className={"list-duration-tour mt-3"}>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="1-3_hours-modal"
                      name="1-3_hours"
                      value="1-3_hours"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="1-3_hours-modal" className="subtitle">
                      1-3 Hours
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="3-6_hours-modal"
                      name="3-6_hours"
                      value="3-6_hours"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="3-6_hours-modal" className="subtitle">
                      3-6 Hours
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="6-12_hours-modal"
                      name="6-12_hours"
                      value="6-12_hours"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="6-12_hours-modal" className="subtitle">
                      6-12 Hours
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="full_day-modal"
                      name="full_day"
                      value="full_day"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="full_day-modal" className="subtitle">
                      Full Day
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="multi_day-modal"
                      name="multi_day"
                      value="multi_day"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="multi_day-modal" className="subtitle">
                      Multi Day
                    </label>
                  </li>
                </ul>
              </div>
              <div className={"widget-item widget-rate"}>
                <div className={"text-black text-capitalize h5"}>
                  Review score
                </div>
                <ul className={"list-rate-tour mt-3"}>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="rate_5-modal"
                      name="rate_5"
                      value="5"
                      className="tf-checkbox"
                      checked
                    />{" "}
                    <label htmlFor="rate_5-modal" className="rating-label">
                      <span className="rating">
                        <span className="list-star">
                          <span className={"icon icon-star"} />{" "}
                          <span className={"icon icon-star"} />{" "}
                          <span className={"icon icon-star"} />{" "}
                          <span className={"icon icon-star"} />{" "}
                          <span className={"icon icon-star"} />
                        </span>
                      </span>
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="rate_4-modal"
                      name="rate_4"
                      value="4"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="rate_4-modal" className="rating-label">
                      <span className="rating">
                        <span className="list-star">
                          <span className={"icon icon-star"} />{" "}
                          <span className={"icon icon-star"} />{" "}
                          <span className={"icon icon-star"} />{" "}
                          <span className={"icon icon-star"} />{" "}
                          <span className={"icon icon-star ic-empty"} />
                        </span>
                      </span>
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="rate_3-modal"
                      name="rate_3"
                      value="3"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="rate_3-modal" className="rating-label">
                      <span className="rating">
                        <span className="list-star">
                          <span className={"icon icon-star"} />{" "}
                          <span className={"icon icon-star"} />{" "}
                          <span className={"icon icon-star"} />{" "}
                          <span className={"icon icon-star ic-empty"} />{" "}
                          <span className={"icon icon-star ic-empty"} />
                        </span>
                      </span>
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="rate_2-modal"
                      name="rate_2"
                      value="2"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="rate_2-modal" className="rating-label">
                      <span className="rating">
                        <span className="list-star">
                          <span className={"icon icon-star"} />{" "}
                          <span className={"icon icon-star"} />{" "}
                          <span className={"icon icon-star ic-empty"} />{" "}
                          <span className={"icon icon-star ic-empty"} />{" "}
                          <span className={"icon icon-star ic-empty"} />
                        </span>
                      </span>
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="rate_1-modal"
                      name="rate_1"
                      value="1"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="rate_1-modal" className="rating-label">
                      <span className="rating">
                        <span className="list-star">
                          <span className={"icon icon-star"} />{" "}
                          <span className={"icon icon-star ic-empty"} />{" "}
                          <span className={"icon icon-star ic-empty"} />{" "}
                          <span className={"icon icon-star ic-empty"} />{" "}
                          <span className={"icon icon-star ic-empty"} />
                        </span>
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className={"widget-item widget-amenities-tour"}>
                <div className={"text-black text-capitalize h5"}>Amenities</div>
                <ul className={"list-amenities-tour mt-3"}>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="alarm_system-modal"
                      name="alarm_system"
                      value="alarm_system"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="alarm_system-modal" className="subtitle">
                      Alarm System
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="air_conditioning-modal"
                      name="air_conditioning"
                      value="air_conditioning"
                      className="tf-checkbox"
                    />{" "}
                    <label
                      htmlFor="air_conditioning-modal"
                      className="subtitle"
                    >
                      Air Conditioning
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="central_heating-modal"
                      name="central_heating"
                      value="central_heating"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="central_heating-modal" className="subtitle">
                      Central Heating
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="laundry-modal"
                      name="laundry"
                      value="laundry"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="laundry-modal" className="subtitle">
                      Laundry
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="pool-modal"
                      name="pool"
                      value="pool"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="pool-modal" className="subtitle">
                      Pool
                    </label>
                  </li>
                  <li className="list-check-item">
                    <input
                      type="checkbox"
                      id="shower-modal"
                      name="shower"
                      value="shower"
                      className="tf-checkbox"
                    />{" "}
                    <label htmlFor="shower-modal" className="subtitle">
                      Shower
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
