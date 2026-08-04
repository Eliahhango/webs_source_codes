export default function bloglistPage() {
  return (
    <>
      <div className="page-title">
        <div className="container">
          <div
            className={
              "text-center title wow animate__animated animate__fadeInUp h1"
            }
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            Blog list
          </div>
          <div
            className={
              "breadcrumb-content wow animate__animated animate__fadeInUp"
            }
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <div
              className={"breadcrumb breadcrumb-dynamic justify-content-center"}
            />
          </div>
        </div>
      </div>{" "}
      <div className="flat-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="flat-blog-list">
                <div
                  className={
                    "flat-blog-item hover-img wow animate__animated animate__fadeInUp"
                  }
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <a href="/blogdetail" className="img-style">
                    <img
                      src="/images/locations/tour-89.jpg"
                      alt="blog-item-1"
                      className="aspect-16-9"
                    />
                  </a>
                  <div className="content-box">
                    <div className={"post-author d-flex item-center"}>
                      <span className="d-inline-flex">
                        <img
                          src="/images/icons/clock.svg"
                          alt="clock"
                          className="icon"
                        />
                        26 August, 2024
                      </span>{" "}
                      <span className="d-inline-flex">
                        <img
                          src="/images/icons/user.svg"
                          alt="users-2"
                          className="icon"
                        />
                        Posted by: Admin
                      </span>{" "}
                      <span className="d-inline-flex">
                        <img
                          src="/images/icons/comment.svg"
                          alt="comment"
                          className="icon"
                        />
                        Comment: 2.397
                      </span>
                    </div>
                    <h2 className={"mt-3 blog-name"}>
                      <a href="/blogdetail" className={"link multi-ellipsis"}>
                        Discovering Mto wa Mbu: The Hamlet That Captured an ASEAN
                        Photographer's Heart
                      </a>
                    </h2>
                    <p className="description">
                      Nestled in the misty mountains of central Tanzania, Mto wa Mbu
                      offers a serene escape with its lush rice terraces and
                      traditional stilt houses, perfect for nature lovers
                      seeking authentic rural charm.
                    </p>
                  </div>
                  <div className={"mt-8 flex-between flex-wrap gap-4"}>
                    <a href="/blogdetail" className={"tf-btn primary hover-1"}>
                      Read more
                    </a>
                    <div className={"flex-center flex-wrap gap-4"}>
                      <span className="text-color">Share this post:</span>
                      <ul className={"d-flex item-center flex-wrap gap-2"}>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-facebook"} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-tw"} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-linked"} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-instgram"} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "flat-blog-item hover-img wow animate__animated animate__fadeInUp"
                  }
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <a href="/bloglist#" className="img-style">
                    <img
                      src="/images/locations/tour-50.jpg"
                      alt="blog-item-1"
                      className="aspect-16-9"
                    />
                  </a>
                  <div className="content-box">
                    <div className={"post-author d-flex item-center"}>
                      <span className="d-inline-flex">
                        <img
                          src="/images/icons/clock.svg"
                          alt="clock"
                          className="icon"
                        />
                        26 August, 2024
                      </span>{" "}
                      <span className="d-inline-flex">
                        <img
                          src="/images/icons/user.svg"
                          alt="users-2"
                          className="icon"
                        />
                        Posted by: Admin
                      </span>{" "}
                      <span className="d-inline-flex">
                        <img
                          src="/images/icons/comment.svg"
                          alt="comment"
                          className="icon"
                        />
                        Comment: 2.397
                      </span>
                    </div>
                    <h2 className={"mt-3 blog-name"}>
                      <a href="/blogdetail" className={"link multi-ellipsis"}>
                        Exploring Hoi An's Ancient Town: Lanterns, Tailors, and
                        Timeless Beauty
                      </a>
                    </h2>
                    <p className="description">
                      Walk through the lantern-lit streets of Hoi An, where silk
                      shops and riverside cafes blend history with modern charm,
                      creating an unforgettable UNESCO World Heritage
                      experience.
                    </p>
                  </div>
                  <div className={"mt-8 flex-between flex-wrap gap-4"}>
                    <a href="/blogdetail" className={"tf-btn primary hover-1"}>
                      Read more
                    </a>
                    <div className={"flex-center flex-wrap gap-4"}>
                      <span className="text-color">Share this post:</span>
                      <ul className={"d-flex item-center flex-wrap gap-2"}>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-facebook"} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-tw"} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-linked"} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-instgram"} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "flat-blog-item hover-img wow animate__animated animate__fadeInUp"
                  }
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <a href="/blogdetail" className="img-style">
                    <img
                      src="/images/locations/tour-91.jpg"
                      alt="blog-item-1"
                      className="aspect-16-9"
                    />
                  </a>
                  <div className="content-box">
                    <div className={"post-author d-flex item-center"}>
                      <span className="d-inline-flex">
                        <img
                          src="/images/icons/clock.svg"
                          alt="clock"
                          className="icon"
                        />
                        26 August, 2024
                      </span>{" "}
                      <span className="d-inline-flex">
                        <img
                          src="/images/icons/user.svg"
                          alt="users-2"
                          className="icon"
                        />
                        Posted by: Admin
                      </span>{" "}
                      <span className="d-inline-flex">
                        <img
                          src="/images/icons/comment.svg"
                          alt="comment"
                          className="icon"
                        />
                        Comment: 2.397
                      </span>
                    </div>
                    <h2 className={"mt-3 blog-name"}>
                      <a href="/blogdetail" className={"link multi-ellipsis"}>
                        My Son Sanctuary: Unveiling the Ruins of Champa Kingdom
                        Near Stone Town
                      </a>
                    </h2>
                    <p className="description">
                      Journey to the ancient Cham temples of My Son, a mystical
                      site echoing with Hindu legends and intricate brick
                      carvings, just a short drive from Stone Town's bustling
                      shores.
                    </p>
                  </div>
                  <div className={"mt-8 flex-between flex-wrap gap-4"}>
                    <a href="/blogdetail" className={"tf-btn primary hover-1"}>
                      Read more
                    </a>
                    <div className={"flex-center flex-wrap gap-4"}>
                      <span className="text-color">Share this post:</span>
                      <ul className={"d-flex item-center flex-wrap gap-2"}>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-facebook"} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-tw"} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-linked"} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-instgram"} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "flat-blog-item hover-img wow animate__animated animate__fadeInUp"
                  }
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <a href="/blogdetail" className="img-style">
                    <img
                      src="/images/locations/tour-92.jpg"
                      alt="blog-item-1"
                      className="aspect-16-9"
                    />
                  </a>
                  <div className="content-box">
                    <div className={"post-author d-flex item-center"}>
                      <span className="d-inline-flex">
                        <img
                          src="/images/icons/clock.svg"
                          alt="clock"
                          className="icon"
                        />
                        26 August, 2024
                      </span>{" "}
                      <span className="d-inline-flex">
                        <img
                          src="/images/icons/user.svg"
                          alt="users-2"
                          className="icon"
                        />
                        Posted by: Admin
                      </span>{" "}
                      <span className="d-inline-flex">
                        <img
                          src="/images/icons/comment.svg"
                          alt="comment"
                          className="icon"
                        />
                        Comment: 2.397
                      </span>
                    </div>
                    <h2 className={"mt-3 blog-name"}>
                      <a href="/blogdetail" className={"link multi-ellipsis"}>
                        Ba Na Hills: Cable Cars, Golden Bridge, and Fantasy Park
                        Adventures
                      </a>
                    </h2>
                    <p className="description">
                      Ascend to the clouds via the world's longest cable car at
                      Ba Na Hills, where the iconic Golden Bridge and French
                      village replicas offer a mix of thrill and tranquility
                      overlooking Stone Town.
                    </p>
                  </div>
                  <div className={"mt-8 flex-between flex-wrap gap-4"}>
                    <a href="/blogdetail" className={"tf-btn primary hover-1"}>
                      Read more
                    </a>
                    <div className={"flex-center flex-wrap gap-4"}>
                      <span className="text-color">Share this post:</span>
                      <ul className={"d-flex item-center flex-wrap gap-2"}>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-facebook"} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-tw"} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-linked"} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/bloglist#"
                            className={"box-icon line w-44 round text-color"}
                          >
                            <i className={"icon icon-instgram"} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"text-center mt-10"}>
                <ul className="wd-navigation">
                  <li>
                    <a href="/bloglist#" className="nav-item">
                      <i className={"icon icon-CaretLeft"} />
                    </a>
                  </li>
                  <li>
                    <a href="/bloglist#" className="nav-item">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="/bloglist#" className="nav-item">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="/bloglist#" className={"nav-item active"}>
                      3
                    </a>
                  </li>
                  <li>
                    <a href="/bloglist#" className="nav-item">
                      4
                    </a>
                  </li>
                  <li>
                    <a href="/bloglist#" className="nav-item">
                      ...
                    </a>
                  </li>
                  <li>
                    <a href="/bloglist#" className="nav-item">
                      <i className={"icon icon-CaretRight"} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={"sidebar-blog sticky-sidebar"}>
                <div
                  className={
                    "widget-search w-full wow animate__animated animate__fadeInUp"
                  }
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <h3 className={"text-black text-capitalize"}>Search Blog</h3>
                  <div className={"search-box mt-6"}>
                    <input
                      className={"search-field s-1"}
                      type="text"
                      placeholder="Search..."
                    />{" "}
                    <a href="/bloglist#" className={"icon icon-search pos-1"} />
                  </div>
                </div>
                <div
                  className={
                    "widget-box categories wow animate__animated animate__fadeInUp"
                  }
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <h3 className={"text-black text-capitalize"}>Categories</h3>
                  <ul className="mt-5">
                    <li>
                      <a
                        href="/bloglist#"
                        className={"categories-item link fl-row"}
                      >
                        <span>Travel</span> <span>(50)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/bloglist#"
                        className={"categories-item link fl-row"}
                      >
                        <span>Adventure</span> <span>(34)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/bloglist#"
                        className={"categories-item link fl-row"}
                      >
                        <span>Accommodation</span> <span>(69)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/bloglist#"
                        className={"categories-item link fl-row"}
                      >
                        <span>Sightseeing</span> <span>(25)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/bloglist#"
                        className={"categories-item link fl-row"}
                      >
                        <span>Itinerary</span> <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/bloglist#"
                        className={"categories-item link fl-row"}
                      >
                        <span>Souvenir</span> <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/bloglist#"
                        className={"categories-item link fl-row"}
                      >
                        <span>Trip</span> <span>(69)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className={
                    "widget-box recent wow animate__animated animate__fadeInUp"
                  }
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <h3 className={"text-black text-capitalize"}>
                    Featured tour
                  </h3>
                  <ul>
                    <li>
                      <div
                        className={
                          "recent-post-item hover-img wow animate__animated animate__fadeInUp"
                        }
                        data-wow-duration="1s"
                        data-wow-delay="0.4s"
                      >
                        <a href="/blogdetail" className="img-style">
                          <img
                            src="/images/locations/tour-85.jpg"
                            alt="post-recent"
                          />
                        </a>
                        <div className="content">
                          <a
                            href="/blogdetail"
                            className={"name link multi-ellipsis"}
                          >
                            A Mythological Journey in the Foothills of
                            Northwestern Türkiye
                          </a>
                          <div className="subtitle">
                            <span>
                              <img
                                src="/images/icons/calendar.svg"
                                alt="icon"
                                className="icon"
                              />
                            </span>{" "}
                            <span>February 16, 2024</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        className={
                          "recent-post-item hover-img wow animate__animated animate__fadeInUp"
                        }
                        data-wow-duration="1s"
                        data-wow-delay="0.4s"
                      >
                        <a href="/blogdetail" className="img-style">
                          <img
                            src="/images/locations/tour-86.jpg"
                            alt="post-recent"
                          />
                        </a>
                        <div className="content">
                          <a
                            href="/blogdetail"
                            className={"name link multi-ellipsis"}
                          >
                            Vang Vieng: What to Know About the Laos Backpacker
                            Town at Center
                          </a>
                          <div className="subtitle">
                            <span>
                              <img
                                src="/images/icons/calendar.svg"
                                alt="icon"
                                className="icon"
                              />
                            </span>{" "}
                            <span>February 16, 2024</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        className={
                          "recent-post-item hover-img wow animate__animated animate__fadeInUp"
                        }
                        data-wow-duration="1s"
                        data-wow-delay="0.4s"
                      >
                        <a href="/blogdetail" className="img-style">
                          <img
                            src="/images/locations/tour-87.jpg"
                            alt="post-recent"
                          />
                        </a>
                        <div className="content">
                          <a
                            href="/blogdetail"
                            className={"name link multi-ellipsis"}
                          >
                            Severe Turbulence Forces Scandinavian Airlines
                            Flight to Return
                          </a>
                          <div className="subtitle">
                            <span>
                              <img
                                src="/images/icons/calendar.svg"
                                alt="icon"
                                className="icon"
                              />
                            </span>{" "}
                            <span>February 16, 2024</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className={
                    "widget-box newsletter wow animate__animated animate__fadeInUp"
                  }
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <h3 className={"text-black text-capitalize"}>
                    Join our newsletter
                  </h3>
                  <p className={"fs-14 text-color mt-5"}>
                    Signup to be the first to hear about exclusive deals,
                    special offers and upcoming collections
                  </p>
                  <div className={"search-box mt-6"}>
                    <input
                      className={"search-field s-2"}
                      type="text"
                      placeholder={"Enter your email"}
                    />{" "}
                    <a href="/bloglist#" className={"icon pos-2"}>
                      <img src="/images/icons/icon-send.svg" alt="logo" />
                    </a>
                  </div>
                </div>
                <div
                  className={
                    "widget-box tag wow animate__animated animate__fadeInUp"
                  }
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <h3 className={"text-black text-capitalize"}>Popular Tag</h3>
                  <ul className="mt-5">
                    <li>
                      <a href="/bloglist#" className="tag-item">
                        Property
                      </a>
                    </li>
                    <li>
                      <a href="/bloglist#" className="tag-item">
                        Office
                      </a>
                    </li>
                    <li>
                      <a href="/bloglist#" className="tag-item">
                        Finance
                      </a>
                    </li>
                    <li>
                      <a href="/bloglist#" className="tag-item">
                        Legal
                      </a>
                    </li>
                    <li>
                      <a href="/bloglist#" className="tag-item">
                        Market
                      </a>
                    </li>
                    <li>
                      <a href="/bloglist#" className="tag-item">
                        Invest
                      </a>
                    </li>
                    <li>
                      <a href="/bloglist#" className="tag-item">
                        Renovate
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className={
                    "widget-box booking wow animate__animated animate__fadeInUp"
                  }
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <div className="content-widget">
                    <img src="/images/logo/khamiar-logo.png" alt="tour" />
                    <div className="content">
                      <h2>Explore new horizons with Khamiar Express</h2>
                      <p>Discover unforgettable safaris, island escapes, and cultural adventures across Tanzania, all crafted by our expert local team.</p>
                      <a
                        href="/gridstylefullwidth"
                        className={"tf-btn w-full hover-2"}
                      >
                        Booking tour
                      </a>
                    </div>
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
