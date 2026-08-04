export default function destination2Page() {
  return (
    <>
      <div className="page-title">
        <div className="container">
          <div
            className={
              "text-center title wow animate__animated animate__fadeInUp h1"
            }
            data-wow-delay="0.2s"
            data-wow-duration="1s"
          >
            Destination Style 02
          </div>
          <div
            className={
              "breadcrumb-content wow animate__animated animate__fadeInUp"
            }
            data-wow-delay="0.2s"
            data-wow-duration="1s"
          >
            <div
              className={"breadcrumb breadcrumb-dynamic justify-content-center"}
            />
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
            <div className={"title h1"}>Top choice for your trip</div>
            <div className={"subtitle text-color desc"}>
              Discover the Most Popular Places to Visit
            </div>
          </div>
          <div className="tf-list-tour">
            <ul
              className={"nav-tab wow animate__animated animate__fadeInUp"}
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              role="tablist"
            >
              <li className="nav-tab-item" role="presentation">
                <a
                  href="/destination2#viewAll"
                  className={"nav-link-item active"}
                  data-bs-toggle="tab"
                  aria-selected="true"
                  role="tab"
                  id="viewAll-tab"
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
                  href="/destination2#beach"
                  className="nav-link-item"
                  data-bs-toggle="tab"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                  aria-controls="beach"
                  id="beach-tab"
                >
                  Beach
                </a>
                <div className="total-tour">
                  <span>5 Tours</span>
                </div>
              </li>
              <li className="nav-tab-item" role="presentation">
                <a
                  href="/destination2#cableCar"
                  id="cableCar-tab"
                  className="nav-link-item"
                  data-bs-toggle="tab"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                  aria-controls="cableCar"
                >
                  Cable Car
                </a>
                <div className="total-tour">
                  <span>3 Tours</span>
                </div>
              </li>
              <li className="nav-tab-item" role="presentation">
                <a
                  href="/destination2#sailboat"
                  className="nav-link-item"
                  data-bs-toggle="tab"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                  aria-controls="sailboat"
                  id="sailboat-tab"
                >
                  Sailboat
                </a>
                <div className="total-tour">
                  <span>4 Tours</span>
                </div>
              </li>
              <li className="nav-tab-item" role="presentation">
                <a
                  href="/destination2#discovery"
                  id="discovery-tab"
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
                  <span>6 Tours</span>
                </div>
              </li>
              <li className="nav-tab-item" role="presentation">
                <a
                  href="/destination2#climbing"
                  id="climbing-tab"
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
                  <span>2 Tours</span>
                </div>
              </li>
            </ul>
            <div
              className={"tab-content wow animate__animated animate__fadeIn"}
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div
                className={"tab-pane fade show active"}
                id="viewAll"
                role="tabpanel"
                aria-labelledby="viewAll-tab"
              >
                <div
                  className={"tf-sw-mobile swiper"}
                  data-screen="575"
                  data-preview="1"
                  data-space="15"
                >
                  <div className={"swiper-wrapper tf-destination grid-3"}>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-zanzibar.jpg"
                              alt={"Zanzibar Beach Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              45 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-serengeti.jpg"
                              alt={"Lake Manyara Urban Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              52 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-ngorongoro.jpg"
                              alt={"Nyerere National Park Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              39 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-tarangire.jpg"
                              alt={"Stone Town Romantic Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              61 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-manyara.jpg"
                              alt={"Serengeti Modern Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Lake Manyara National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              47 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-mikumi.jpg"
                              alt={"Mnemba Island Historic Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Mikumi National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              55 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-nyerere.jpg"
                              alt={"Tarangire Ancient Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Nyerere National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              42 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-kilimanjaro.jpg"
                              alt={"Mikumi Harbor Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              38 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-stonetown.jpg"
                              alt={"Spice Farm Scenic Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Stone Town
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              29 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-mnemba.jpg"
                              alt={"Prison Island Vibrant Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Mnemba Island
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              33 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-jozani.jpg"
                              alt={"Nakupenda Sandbank Futuristic Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Jozani Forest
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              51 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-control">
                    <div
                      className={
                        "sw-pagination sw-pagination-topchose text-center"
                      }
                    />
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
                  className={"tf-sw-mobile swiper "}
                  data-screen="575"
                  data-preview="1"
                  data-space="15"
                >
                  <div className={"swiper-wrapper tf-destination grid-3"}>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-spicefarm.jpg"
                              alt={"Zanzibar Beach Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Spice Farm
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              45 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-zanzibar.jpg"
                              alt={"Lake Manyara Urban Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              52 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-serengeti.jpg"
                              alt={"Nyerere National Park Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              39 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-ngorongoro.jpg"
                              alt={"Stone Town Romantic Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              61 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-tarangire.jpg"
                              alt={"Serengeti Modern Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              47 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-manyara.jpg"
                              alt={"Mnemba Island Historic Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Lake Manyara National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              55 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-mikumi.jpg"
                              alt={"Tarangire Ancient Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Mikumi National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              42 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-nyerere.jpg"
                              alt={"Mikumi Harbor Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Nyerere National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              38 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-kilimanjaro.jpg"
                              alt={"Spice Farm Scenic Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              29 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-stonetown.jpg"
                              alt={"Prison Island Vibrant Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Stone Town
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              33 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-mnemba.jpg"
                              alt={"Nakupenda Sandbank Futuristic Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Mnemba Island
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              51 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-control">
                    <div
                      className={
                        "sw-pagination sw-pagination-topchose text-center"
                      }
                    />
                  </div>
                </div>
              </div>
              <div
                className={"tab-pane fade"}
                id="cableCar"
                role="tabpanel"
                aria-labelledby="cableCar-tab"
              >
                <div
                  className={"tf-sw-mobile swiper "}
                  data-screen="575"
                  data-preview="1"
                  data-space="15"
                >
                  <div className={"swiper-wrapper tf-destination grid-3"}>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-jozani.jpg"
                              alt={"Zanzibar Beach Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Jozani Forest
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              45 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-spicefarm.jpg"
                              alt={"Lake Manyara Urban Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Spice Farm
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              52 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-zanzibar.jpg"
                              alt={"Nyerere National Park Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              39 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-serengeti.jpg"
                              alt={"Stone Town Romantic Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              61 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-ngorongoro.jpg"
                              alt={"Serengeti Modern Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              47 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-tarangire.jpg"
                              alt={"Mnemba Island Historic Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              55 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-manyara.jpg"
                              alt={"Tarangire Ancient Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Lake Manyara National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              42 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-mikumi.jpg"
                              alt={"Mikumi Harbor Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Mikumi National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              38 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-nyerere.jpg"
                              alt={"Spice Farm Scenic Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Nyerere National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              29 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-kilimanjaro.jpg"
                              alt={"Prison Island Vibrant Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              33 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-stonetown.jpg"
                              alt={"Nakupenda Sandbank Futuristic Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Stone Town
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              51 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-control">
                    <div
                      className={
                        "sw-pagination sw-pagination-topchose text-center"
                      }
                    />
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
                  className={"tf-sw-mobile swiper "}
                  data-screen="575"
                  data-preview="1"
                  data-space="15"
                >
                  <div className={"swiper-wrapper tf-destination grid-3"}>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-mnemba.jpg"
                              alt={"Zanzibar Beach Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Mnemba Island
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              45 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-jozani.jpg"
                              alt={"Lake Manyara Urban Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Jozani Forest
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              52 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-spicefarm.jpg"
                              alt={"Nyerere National Park Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Spice Farm
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              39 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-zanzibar.jpg"
                              alt={"Stone Town Romantic Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              61 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-serengeti.jpg"
                              alt={"Serengeti Modern Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              47 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-ngorongoro.jpg"
                              alt={"Mnemba Island Historic Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              55 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-tarangire.jpg"
                              alt={"Tarangire Ancient Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              42 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-manyara.jpg"
                              alt={"Mikumi Harbor Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Lake Manyara National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              38 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-mikumi.jpg"
                              alt={"Spice Farm Scenic Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Mikumi National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              29 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-nyerere.jpg"
                              alt={"Prison Island Vibrant Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Nyerere National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              33 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-kilimanjaro.jpg"
                              alt={"Nakupenda Sandbank Futuristic Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              51 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-control">
                    <div
                      className={
                        "sw-pagination sw-pagination-topchose text-center"
                      }
                    />
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
                  className={"tf-sw-mobile swiper "}
                  data-screen="575"
                  data-preview="1"
                  data-space="15"
                >
                  <div className={"swiper-wrapper tf-destination grid-3"}>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-stonetown.jpg"
                              alt={"Zanzibar Beach Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Stone Town
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              45 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-mnemba.jpg"
                              alt={"Lake Manyara Urban Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Mnemba Island
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              52 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-jozani.jpg"
                              alt={"Nyerere National Park Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Jozani Forest
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              39 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-spicefarm.jpg"
                              alt={"Stone Town Romantic Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Spice Farm
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              61 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-zanzibar.jpg"
                              alt={"Serengeti Modern Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              47 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-serengeti.jpg"
                              alt={"Mnemba Island Historic Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              55 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-ngorongoro.jpg"
                              alt={"Tarangire Ancient Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              42 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-tarangire.jpg"
                              alt={"Mikumi Harbor Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              38 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-manyara.jpg"
                              alt={"Spice Farm Scenic Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Lake Manyara National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              29 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-mikumi.jpg"
                              alt={"Prison Island Vibrant Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Mikumi National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              33 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-nyerere.jpg"
                              alt={"Nakupenda Sandbank Futuristic Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Nyerere National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              51 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-control">
                    <div
                      className={
                        "sw-pagination sw-pagination-topchose text-center"
                      }
                    />
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
                  className={"tf-sw-mobile swiper"}
                  data-screen="575"
                  data-preview="1"
                  data-space="15"
                >
                  <div className={"swiper-wrapper tf-destination grid-3"}>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-kilimanjaro.jpg"
                              alt={"Zanzibar Beach Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              45 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-stonetown.jpg"
                              alt={"Lake Manyara Urban Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Stone Town
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              52 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-mnemba.jpg"
                              alt={"Nyerere National Park Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Mnemba Island
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              39 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-jozani.jpg"
                              alt={"Stone Town Romantic Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Jozani Forest
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              61 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-spicefarm.jpg"
                              alt={"Serengeti Modern Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Spice Farm
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              47 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-zanzibar.jpg"
                              alt={"Mnemba Island Historic Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              55 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-serengeti.jpg"
                              alt={"Tarangire Ancient Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              42 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-ngorongoro.jpg"
                              alt={"Mikumi Harbor Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              38 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-tarangire.jpg"
                              alt={"Spice Farm Scenic Destination"}
                            />
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
                            <div className={"total-tour subtitle"}>
                              29 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-manyara.jpg"
                              alt={"Prison Island Vibrant Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Lake Manyara National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              33 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={"item hover-img"}>
                        <div className="destination-post">
                          <a href="/destinationdetail" className="img-style">
                            <img
                              src="/images/locations/dest-mikumi.jpg"
                              alt={"Nakupenda Sandbank Futuristic Destination"}
                            />
                          </a>
                          <div className="content">
                            <div className="h4">
                              <a
                                href="/destinationdetail"
                                className={"link single-ellipsis"}
                              >
                                Mikumi National Park
                              </a>
                            </div>
                            <div className={"total-tour subtitle"}>
                              51 Tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-control">
                    <div
                      className={
                        "sw-pagination sw-pagination-topchose text-center"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
