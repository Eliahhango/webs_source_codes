export default function listhalfmaprightPage() {
  return (
    <>
      <div className="flat-tour-with-map">
        <div className="row">
          <div className="col-lg-7">
            <div className="wrap-left">
              <div className="flat-map">
                <div className={"map h-100"}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129688.0678758725!2d-79.2239653!3d37.4148819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b2d97890320401%3A0xc3b6f35ec820e261!2sLynchburg%2C%20VA%2C%20USA!5e0!3m2!1sen!2sus!4v1699272000000!5m2!1sen!2sus"></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="wrap-right">
              <div className="flat-recommended">
                <div className="box-listing-top">
                  <div
                    className={
                      "box-title wow animate__animated animate__fadeInUp"
                    }
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    <div className={"title h1"}>Listing tour</div>
                  </div>
                  <div className="box-filter-tab">
                    <ul className="nav-tab-filter" role="tablist">
                      <li>
                        <a
                          href="/listhalfmapright#modalFilter"
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
                        <a className="nav-link-item" href="/listhalfmapright#">
                          <img
                            src="/images/icons/list-2.svg"
                            alt="icon"
                            className="icon"
                          />
                        </a>
                      </li>
                      <li className="nav-tab-item" role="presentation">
                        <a
                          className={"nav-link-item active"}
                          href="/listhalfmapright#"
                        >
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
                          <a href="/listhalfmapright#">Sort by (Default)</a>
                        </li>
                        <li data-value="new" className="option">
                          <a href="/listhalfmapright#">Newest</a>
                        </li>
                        <li data-value="old" className="option">
                          <a href="/listhalfmapright#">Oldest</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "tf-grid-layout tf-col-1 lg-col-2 sm-col-1 wow animate__animated animate__fadeIn"
                  }
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  <div className={"item hover-img list-style-01"}>
                    <div className="archive-top">
                      <div className={"images-group img-style"}>
                        <a href="/toursingle1?tour=discover-lake-manyara-highlights" className="image-link">
                          <img
                            src="/images/locations/tour-01.jpg"
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
                              data-fancybox="gallery1"
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
                      <h5 className="tour-title">
                        <a href="/toursingle1?tour=discover-lake-manyara-highlights"
                          className={"link multi-ellipsis"}
                        >
                          Discover Lake Manyara Highlights
                        </a>
                      </h5>
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
                          <span className="location">Lake Manyara National Park</span>
                        </div>
                        <div className={"price h5"}>$250</div>
                      </div>
                    </div>
                  </div>
                  <div className={"item hover-img list-style-01"}>
                    <div className="archive-top">
                      <div className={"images-group img-style"}>
                        <a href="/toursingle1?tour=tanzania-safari-adventure-tour" className="image-link">
                          <img
                            src="/images/locations/tour-02.jpg"
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
                              data-fancybox="gallery2"
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
                      <h5 className="tour-title">
                        <a href="/toursingle1?tour=tanzania-safari-adventure-tour"
                          className={"link multi-ellipsis"}
                        >
                          Tanzania Safari Adventure Tour
                        </a>
                      </h5>
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
                          <span className="location">Lake Manyara National Park</span>
                        </div>
                        <div className={"price h5"}>$300</div>
                      </div>
                    </div>
                  </div>
                  <div className={"item hover-img list-style-01"}>
                    <div className="archive-top">
                      <div className={"images-group img-style"}>
                        <a href="/toursingle1?tour=nyerere-national-park-safari" className="image-link">
                          <img
                            src="/images/locations/tour-03.jpg"
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
                              data-fancybox="gallery3"
                              data-src="/images/locations/dest-stonetown.jpg"
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
                      <h5 className="tour-title">
                        <a href="/toursingle1?tour=nyerere-national-park-safari"
                          className={"link multi-ellipsis"}
                        >
                          Nyerere National Park Safari
                        </a>
                      </h5>
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
                          <span className="location">Nyerere National Park</span>
                        </div>
                        <div className={"price h5"}>$350</div>
                      </div>
                    </div>
                  </div>
                  <div className={"item hover-img list-style-01"}>
                    <div className="archive-top">
                      <div className={"images-group img-style"}>
                        <a href="/toursingle1?tour=serengeti-national-park-safari" className="image-link">
                          <img
                            src="/images/locations/tour-04.jpg"
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
                      <h5 className="tour-title">
                        <a href="/toursingle1?tour=serengeti-national-park-safari"
                          className={"link multi-ellipsis"}
                        >
                          Serengeti National Park Safari
                        </a>
                      </h5>
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
                          <span className="location">Dar es Salaam</span>
                        </div>
                        <div className={"price h5"}>$280</div>
                      </div>
                    </div>
                  </div>
                  <div className={"item hover-img list-style-01"}>
                    <div className="archive-top">
                      <div className={"images-group img-style"}>
                        <a href="/toursingle1?tour=mnemba-island-excursion" className="image-link">
                          <img
                            src="/images/locations/tour-05.jpg"
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
                      <h5 className="tour-title">
                        <a href="/toursingle1?tour=mnemba-island-excursion"
                          className={"link multi-ellipsis"}
                        >
                          Mnemba Island Excursion
                        </a>
                      </h5>
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
                        <div className={"price h5"}>$420</div>
                      </div>
                    </div>
                  </div>
                  <div className={"item hover-img list-style-01"}>
                    <div className="archive-top">
                      <div className={"images-group img-style"}>
                        <a href="/toursingle1?tour=jozani-forest-cultural-tour" className="image-link">
                          <img
                            src="/images/locations/tour-06.jpg"
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
                      <h5 className="tour-title">
                        <a href="/toursingle1?tour=jozani-forest-cultural-tour"
                          className={"link multi-ellipsis"}
                        >
                          Jozani Forest Cultural Tour
                        </a>
                      </h5>
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
                        <h5 className="price">$220</h5>
                      </div>
                    </div>
                  </div>
                  <div className={"item hover-img list-style-01"}>
                    <div className="archive-top">
                      <div className={"images-group img-style"}>
                        <a href="/toursingle1?tour=arusha-city-walk" className="image-link">
                          <img
                            src="/images/locations/tour-08.jpg"
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
                      <h5 className="tour-title">
                        <a href="/toursingle1?tour=arusha-city-walk"
                          className={"link multi-ellipsis"}
                        >
                          Arusha City Walk
                        </a>
                      </h5>
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
                          <span className="location">Arusha, Tanzania</span>
                        </div>
                        <h5 className="price">$150</h5>
                      </div>
                    </div>
                  </div>
                  <div className={"item hover-img list-style-01"}>
                    <div className="archive-top">
                      <div className={"images-group img-style"}>
                        <a href="/toursingle1?tour=stone-town-discovery-tour" className="image-link">
                          <img
                            src="/images/locations/tour-09.jpg"
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
                              data-fancybox="gallery8"
                              data-src="/images/locations/dest-mnemba.jpg"
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
                      <h5 className="tour-title">
                        <a href="/toursingle1?tour=stone-town-discovery-tour"
                          className={"link multi-ellipsis"}
                        >
                          Stone Town Discovery Tour
                        </a>
                      </h5>
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
                          <span className="location">
                            Stone Town, Zanzibar
                          </span>
                        </div>
                        <h5 className="price">$180</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                      href="/listhalfmapright#people-collapse-modal"
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
