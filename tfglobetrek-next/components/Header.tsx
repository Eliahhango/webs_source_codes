"use client";

import { usePathname } from "next/navigation";

type Variant = "style-1 static" | "style-1 fixed" | "style-2 fixed";

const VARIANTS: Record<string, Variant> = {
  "/": "style-1 fixed",
  "/aboutus": "style-1 static",
  "/asqquestion": "style-1 static",
  "/blogdetail": "style-1 static",
  "/bloggrid": "style-1 static",
  "/bloglist": "style-1 static",
  "/contactus": "style-1 static",
  "/destination1": "style-1 static",
  "/destination2": "style-1 static",
  "/destinationdetail": "style-1 static",
  "/gridsidebarleft": "style-1 fixed",
  "/gridsidebarright": "style-1 fixed",
  "/gridstyle01": "style-1 fixed",
  "/gridstyle02": "style-1 fixed",
  "/gridstylefullwidth": "style-1 fixed",
  "/gridtourhalfmapright": "style-1 static",
  "/homepage2": "style-1 static",
  "/homepage3": "style-2 fixed",
  "/homepage4": "style-2 fixed",
  "/homepage5": "style-2 fixed",
  "/home-video-background": "style-1 fixed",
  "/listhalfmapright": "style-1 static",
  "/listsidebarleft": "style-1 fixed",
  "/liststyle": "style-1 fixed",
  "/liststylefullwidth": "style-1 fixed",
  "/listtopmap": "style-1 static",
  "/listtopmap01": "style-1 static",
  "/teammember": "style-1 static",
  "/toursingle1": "style-1 static",
  "/toursingle2": "style-1 static",
  "/toursingle3": "style-1 static",
  "/wishlist": "style-1 static",
};

const HEADER_CLASS: Record<Variant, string> = {
  "style-1 static": "header style-1 color-1",
  "style-1 fixed": "header style-1 position-fixed color-1",
  "style-2 fixed": "header style-2 position-fixed color-2",
};

export default function Header() {
  const pathname = usePathname();
  const variant: Variant = VARIANTS[pathname] ?? "style-1 static";
  const headerClass = HEADER_CLASS[variant];
  return (
    <header id="header" className={headerClass}>
      <header id="header" className={"header style-1 position-fixed color-1"}>
        <div className="container">
          <div className={"header-wrap relative w-full"}>
            <div className={"header-ct-left flex-left z-5"}>
              <div className={"logo flex-center"} id="logo">
                <a href="/">
                  <img src="/images/logo/khamiar-logo.png" alt="Khamiar" style={{ height: 42, width: 'auto' }} />
                </a>
              </div>
            </div>
            <div className={"header-ct-center flex-center z-5"}>
              <div className="inner-center">
                <div className="nav-wrap">
                  <nav className="list-nav">
                    <ul className="menu-nav" id="menu-nav">
                      <li className={"menu-item flex-center gap-1 h-full"}>
                        <a href="/" className="nav-link">
                          Home 
                        </a>
                      </li>
                      <li className={"menu-item flex-center gap-1 h-full"}>
                        <a href="/gridstyle01" className="nav-link">
                          Tours 
                          <span className={"icon icon-CaretDown"} />
                        </a>
                        <ul className={"sub-menu shadow-dropdown"}>
                          <li className="sub-item">
                            <a href="/gridstyle01">
                              Tour Listing
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/gridstyle02">
                              Tour Listing 2
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/toursingle1">
                              Tour Detail
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/destination1">
                              Destinations
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/destinationdetail">
                              Destination Detail
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className={"menu-item flex-center gap-1 h-full"}>
                        <a href="/cargo" className="nav-link">
                          Cargos 
                          <span className={"icon icon-CaretDown"} />
                        </a>
                        <ul className={"sub-menu shadow-dropdown"}>
                          <li className="sub-item">
                            <a href="/cargo">
                              Cargo Services
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/cargo/air-freight">
                              Air Freight Forwarding
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/cargo/ocean-freight">
                              Ocean Freight Forwarding
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/cargo/road-freight">
                              Road Freight Forwarding
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/cargo/warehousing">
                              Warehousing
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/cargo/door-to-door">
                              Door to Door Delivery
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/cargo/ground-transport">
                              Ground Transport
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/cargo/worldwide-transport">
                              Worldwide Transport
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/cargo/packaging-storage">
                              Packaging &amp; Storage
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/cargo/prices">
                              Our Prices
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/cargo/track">
                              Track Your Shipment
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/cargo/quote">
                              Request a Quote
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className={"menu-item flex-center gap-1 h-full"}>
                        <a href="/#" className="nav-link">
                          Pages 
                          <span className={"icon icon-CaretDown"} />
                        </a>
                        <ul className={"sub-menu shadow-dropdown"}>
                          <li className="sub-item">
                            <a href="/aboutus">
                              About Us
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/teammember">
                              Team Member
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="/asqquestion">
                              Frequently Asked Questions
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className={"menu-item flex-center gap-1 h-full"}>
                        <a href="/blogdetail" className="nav-link">
                          Blog 
                        </a>
                      </li>
                      <li className={"menu-item flex-center gap-1 h-full"}>
                        <a href="/contactus" className="nav-link">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className={"header-ct-right flex-end gap-4 z-5"}>
              <ul className="wrap-login-menu">
                <li className="search">
                  <a href="/#" data-bs-toggle="modal" data-bs-target="#modalSearch">
                    <span className={"icon icon-search"} />
                  </a>
                </li>
                <li className="heart">
                  <a href="/wishlist">
                    <span className={"icon icon-heart"} />
                  </a>
                </li>
                <li className="login">
                  <span className={"icon icon-user"} />
                  {' '}
                  <a href="/#" data-bs-toggle="modal" data-bs-target="#modalLogin">
                    Login
                  </a>
                  
                                  /
                                  
                  <a href="/#" data-bs-toggle="modal" data-bs-target="#modalRegister">
                    Register
                  </a>
                </li>
              </ul>
              <div className="toggle-mobile">
                <span className={"icon icon-list"} />
              </div>
            </div>
          </div>
          <div className="overlay" />
          <div className={"close-btn flex-center"}>
            <span className="icon-X" />
          </div>
          <div className="mobile-menu">
            <div className="menu-box">
              <div className="logo">
                <a href="/">
                  <img src="/images/logo/khamiar-logo.png" alt="Khamiar" style={{ height: 42, width: 'auto' }} />
                </a>
              </div>
              <div className="inner-menu">
                <div className="nav-item">
                  <a href="/" className="mobile-dropdown">
                    <span className="nav-text">
                       Home 
                    </span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="/gridstyle01" className="mobile-dropdown">
                    <span className="nav-text">
                       Tours 
                    </span>
                    {' '}
                    <span className={"mb-icon icon-CaretDown"} />
                  </a>
                  <ul className="mb-sub-menu">
                    <li>
                      <a href="/gridstyle01" className="sub-link">
                         Tour Listing 
                      </a>
                    </li>
                    <li>
                      <a href="/gridstyle02" className="sub-link">
                        
                                              Tour Listing 2
                                           
                      </a>
                    </li>
                    <li>
                      <a href="/toursingle1" className="sub-link">
                        
                                              Tour Detail
                                           
                      </a>
                    </li>
                    <li>
                      <a href="/destination1" className="sub-link">
                        
                                              Destinations
                                           
                      </a>
                    </li>
                    <li>
                      <a href="/destinationdetail" className="sub-link">
                        
                                              Destination Detail
                                           
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-item">
                  <a href="/cargo" className="mobile-dropdown">
                    <span className="nav-text">
                       Cargos 
                    </span>
                    {' '}
                    <span className={"mb-icon icon-CaretDown"} />
                  </a>
                  <ul className="mb-sub-menu">
                    <li>
                      <a href="/cargo" className="sub-link">
                         Cargo Services 
                      </a>
                    </li>
                    <li>
                      <a href="/cargo/air-freight" className="sub-link">
                        
                                              Air Freight Forwarding
                                           
                      </a>
                    </li>
                    <li>
                      <a href="/cargo/ocean-freight" className="sub-link">
                        
                                              Ocean Freight Forwarding
                                           
                      </a>
                    </li>
                    <li>
                      <a href="/cargo/road-freight" className="sub-link">
                        
                                              Road Freight Forwarding
                                           
                      </a>
                    </li>
                    <li>
                      <a href="/cargo/warehousing" className="sub-link">
                        
                                              Warehousing
                                           
                      </a>
                    </li>
                    <li>
                      <a href="/cargo/door-to-door" className="sub-link">
                        
                                              Door to Door Delivery
                                            
                      </a>
                    </li>
                    <li>
                      <a href="/cargo/ground-transport" className="sub-link">
                        
                                              Ground Transport
                                            
                      </a>
                    </li>
                    <li>
                      <a href="/cargo/worldwide-transport" className="sub-link">
                        
                                              Worldwide Transport
                                            
                      </a>
                    </li>
                    <li>
                      <a href="/cargo/packaging-storage" className="sub-link">
                        
                                              Packaging &amp; Storage
                                            
                      </a>
                    </li>
                    <li>
                      <a href="/cargo/prices" className="sub-link">
                        
                                              Our Prices
                                            
                      </a>
                    </li>
                    <li>
                      <a href="/cargo/track" className="sub-link">
                        
                                              Track Your Shipment
                                            
                      </a>
                    </li>
                    <li>
                      <a href="/cargo/quote" className="sub-link">
                        
                                              Request a Quote
                                            
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-item">
                  <a href="/#" className="mobile-dropdown">
                    <span className="nav-text">
                       Pages 
                    </span>
                    {' '}
                    <span className={"mb-icon icon-CaretDown"} />
                  </a>
                  <ul className="mb-sub-menu">
                    <li>
                      <a href="/aboutus" className="sub-link">
                         About Us 
                      </a>
                    </li>
                    <li>
                      <a href="/teammember" className="sub-link">
                        
                                              Team Member
                                          
                      </a>
                    </li>
                    <li>
                      <a href="/asqquestion" className="sub-link">
                        
                                              Frequently Asked Questions
                                          
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-item">
                  <a href="/blogdetail" className="mobile-dropdown">
                    <span className="nav-text">
                       Blog 
                    </span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="/contactus" className="mobile-dropdown">
                    <span className="nav-text">
                       Contact Us 
                    </span>
                  </a>
                </div>
              </div>
              <div className="inner-info">
                <h4 className="title-info">
                  Need help ?
                </h4>
                <div className={"list-info d-flex flex-col"}>
                  <div className={"phone d-flex"}>
                    <div className={"icon flex-center"}>
                      <img src="/images/icons/phone-call.svg" alt="icon" />
                    </div>
                    <div className="content">
                      <p className="label">
                        Toll-free call
                      </p>
                      <a href="tel:+255774050301">
                        +255 774 050 301
                      </a>
                    </div>
                  </div>
                  <div className={"email d-flex"}>
                    <div className={"icon flex-center"}>
                      <img src="/images/icons/mail.svg" alt="Email" />
                    </div>
                    <div className="content">
                      <p className="label">
                        Email:
                      </p>
                      <a href="mailto:info@khamiarltd.com">
                        info@khamiarltd.com
                      </a>
                    </div>
                  </div>
                  <div className={"address d-flex"}>
                    <div className={"icon flex-center"}>
                      <img src="/images/icons/place.svg" alt="Address" />
                    </div>
                    <div className="content">
                      <p className="label">
                        Shop Address:
                      </p>
                      <a href="/contactus">
                        Stone Town, Zanzibar, Tanzania
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </header>
  );
}
