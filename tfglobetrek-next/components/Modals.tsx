export default function Modals() {
  return (
    <>
      <div className={"modal modal-welcome auto-popup fade"} id="modalWelcome" aria-modal="true" role="dialog" tabIndex={-1} aria-hidden="true">
        <div className={"modal-dialog modal-dialog-centered"}>
          <div className="modal-content">
            <div className="modal-top">
              <img data-src="/images/locations/tour-33.jpg" src="/images/locations/tour-33.jpg" alt="images" />
              {' '}
              <span className={"close-modal icon-X"} data-bs-dismiss="modal" />
            </div>
            <div className={"modal-bottom text-center"}>
              <div className={"h5 title-welcome"}>
                Welcome to Khamiar Express
              </div>
              <p className={"subtitle text"}>
                
                              Sign up to get all the latest travel news, website updates, offers
                              and promos.
                          
              </p>
              <form id="subscribe-form" action="/#" className="form-welcome">
                <div id="subscribe-content">
                  <fieldset className={"email position-relative mb_20"}>
                    <img src="/images/icons/mail.svg" alt="icon" className="icon" />
                    {' '}
                    <input type="email" name="email-form" id="subscribe-email-welcome" placeholder={"Your email address"} tabIndex={0} required />
                  </fieldset>
                  <button id="subscribe-button" className={"subscribe-button tf-btn animate-btn d-inline-flex primary hover-1 w-full mt-4"} type="submit">
                    
                                      Subscribe
                                  
                  </button>
                </div>
                <div id="subscribe-msg" />
              </form>
              <ul className={"d-flex item-center flex-wrap gap-2 justify-content-center tf-social-icon"}>
                <li>
                  <a href="/#" className={"box-icon line w-44 round text-color"}>
                    <i className={"icon icon-facebook"} />
                  </a>
                </li>
                <li>
                  <a href="/#" className={"box-icon line w-44 round text-color"}>
                    <i className={"icon icon-tw"} />
                  </a>
                </li>
                <li>
                  <a href="/#" className={"box-icon line w-44 round text-color"}>
                    <i className={"icon icon-linked"} />
                  </a>
                </li>
                <li>
                  <a href="/#" className={"box-icon line w-44 round text-color"}>
                    <i className={"icon icon-instgram"} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={"modal modal-account fade"} id="modalLogin" aria-modal="true" role="dialog" tabIndex={-1} aria-hidden="true">
        <div className={"modal-dialog modal-dialog-centered"}>
          <div className="modal-content">
            <div className="flat-account">
              <div className="banner-account">
                <img src="/images/locations/tour-98.jpg" alt="banner" />
                {' '}
                <img src="/images/logo/khamiar-logo.png" alt="logo" className="logo-overlay" />
              </div>
              <form className="form-account" id="loginForm">
                <div className="title-box">
                  <h1>
                    Login
                  </h1>
                  <span className={"close-modal icon-X"} data-bs-dismiss="modal" />
                </div>
                <div className="box">
                  <fieldset className="box-fieldset">
                    <label>
                      Email
                    </label>
                    <div className="ip-field">
                      <img src="/images/icons/mail.svg" alt="icons" className="icon" />
                      {' '}
                      <input type="email" className="form-control" id="loginEmail" placeholder={"Your email"} />
                    </div>
                  </fieldset>
                  <fieldset className="box-fieldset">
                    <label>
                      Password
                    </label>
                    <div className="ip-field">
                      <img src="/images/icons/icon-lock.svg" alt="icons" className="icon" />
                      {' '}
                      <input type="password" className="form-control" id="loginPassword" placeholder={"Your password"} />
                    </div>
                    <div className={"text-forgot text-end"}>
                      <a href="/#modalForgot" data-bs-toggle="modal">
                        
                                              Forgot password?
                                          
                      </a>
                    </div>
                  </fieldset>
                </div>
                <div className={"box box-btn"}>
                  <button type="submit" className={"tf-btn primary w-100"}>
                    
                                      Login
                                  
                  </button>
                  <div className={"text text-center subtitle"}>
                    
                                      Don’t you have an account?
                                      
                    <a href="/#modalRegister" data-bs-toggle="modal" className="text_primary">
                      
                                          Register
                                      
                    </a>
                  </div>
                </div>
                <p className={"box text-center divider-text"}>
                  or login with
                </p>
                <div className="group-btn">
                  <a href="/#" className="btn-social">
                    <img src="/images/icons/gg.png" alt="img" />
                    
                                      Google
                                  
                  </a>
                  {' '}
                  <a href="/#" className="btn-social">
                    <img src="/images/icons/fb.png" alt="img" />
                    
                                      Facebook
                                  
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={"modal modal-account fade"} id="modalRegister">
        <div className={"modal-dialog modal-dialog-centered"}>
          <div className="modal-content">
            <div className="flat-account">
              <div className="banner-account">
                <img src="/images/locations/tour-99.jpg" alt="banner" />
                {' '}
                <img src="/images/logo/khamiar-logo.png" alt="logo" className="logo-overlay" />
              </div>
              <form className="form-account">
                <div className="title-box">
                  <h1>
                    Register
                  </h1>
                  <span className={"close-modal icon-X"} data-bs-dismiss="modal" />
                </div>
                <div className="box">
                  <fieldset className="box-fieldset">
                    <label>
                      Email address
                    </label>
                    <div className="ip-field">
                      <img src="/images/icons/mail.svg" alt="icons" className="icon" />
                      {' '}
                      <input type="text" className="form-control" placeholder={"Email address"} />
                    </div>
                  </fieldset>
                  <fieldset className="box-fieldset">
                    <label>
                      Password
                    </label>
                    <div className="ip-field">
                      <img src="/images/icons/icon-lock.svg" alt="icon" className="icon" />
                      {' '}
                      <input type="password" className="form-control" placeholder={"Your password"} />
                    </div>
                  </fieldset>
                  <fieldset className="box-fieldset">
                    <label>
                      Confirm password
                    </label>
                    <div className="ip-field">
                      <img src="/images/icons/icon-lock.svg" alt="icon" className="icon" />
                      {' '}
                      <input type="password" className="form-control" placeholder={"Confirm password"} />
                    </div>
                  </fieldset>
                </div>
                <div className={"box box-btn"}>
                  <a href="/#modalLogin" data-bs-toggle="modal" data-bs-dismiss="modal" className={"tf-btn primary w-100"}>
                    
                                      Sign Up
                                  
                  </a>
                  <div className={"text text-center"}>
                    
                                      Already have an account?
                                      
                    <a href="/#modalLogin" data-bs-toggle="modal" data-bs-dismiss="modal" className="text_primary">
                      
                                          Login
                                      
                    </a>
                  </div>
                </div>
                <p className={"box text-center divider-text"}>
                  or login with
                </p>
                <div className="group-btn">
                  <a href="/#" className="btn-social">
                    <img src="/images/icons/gg.png" alt="img" />
                    Google
                                  
                  </a>
                  {' '}
                  <a href="/#" className="btn-social">
                    <img src="/images/icons/fb.png" alt="img" />
                    Facebook
                                  
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={"modal modal-account fade"} id="modalForgot" aria-modal="true" role="dialog" tabIndex={-1} aria-hidden="true">
        <div className={"modal-dialog modal-dialog-centered"}>
          <div className="modal-content">
            <div className="flat-account">
              <div className="banner-account">
                <img src="/images/locations/tour-80.jpg" alt="banner" />
                {' '}
                <img src="/images/logo/khamiar-logo.png" alt="logo" className="logo-overlay" />
              </div>
              <form className="form-account">
                <div className="title-box">
                  <h1>
                    Forgot Password
                  </h1>
                  <span className={"close-modal icon-X"} data-bs-dismiss="modal" />
                </div>
                <div className="box">
                  <fieldset className="box-fieldset">
                    <label>
                      Email
                    </label>
                    <div className="ip-field">
                      <img src="/images/icons/mail.svg" alt="icons" className="icon" />
                      {' '}
                      <input type="email" className="form-control" placeholder={"Enter your registered email"} />
                    </div>
                  </fieldset>
                </div>
                <div className={"box box-btn"}>
                  <a href="/#modalOTP" data-bs-toggle="modal" data-bs-dismiss="modal" className={"tf-btn primary w-100"}>
                    
                                      Send Reset Link
                                  
                  </a>
                  <div className={"text text-center"}>
                    
                                      Back to
                                      
                    <a href="/#modalLogin" data-bs-toggle="modal" className="text_primary">
                      
                                          Login
                                      
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={"modal modal-account fade"} id="modalOTP" aria-modal="true" role="dialog" tabIndex={-1} aria-hidden="true">
        <div className={"modal-dialog modal-dialog-centered"}>
          <div className="modal-content">
            <div className="flat-account">
              <div className="banner-account">
                <img src="/images/locations/tour-41.jpg" alt="banner" />
                {' '}
                <img src="/images/logo/khamiar-logo.png" alt="logo" className="logo-overlay" />
              </div>
              <form className={"form-account otp-form"} id="otpForm">
                <div className="title-box">
                  <h1>
                    Enter Code
                  </h1>
                  <span className={"close-modal icon-X"} data-bs-dismiss="modal" />
                </div>
                <p className={"text-center caption-2 mb-4"}>
                  
                                  Please check the message sent to 
                  <br />
                  <strong className="text_primary" id="otpEmail">
                    
                                      huydang.280603@gmail.com
                                  
                  </strong>
                </p>
                <div className={"box otp-box text-center"}>
                  <div className={"otp-inputs d-flex justify-content-center gap-4"}>
                    <input type="text" maxLength={1} className="otp-input" inputMode="numeric" />
                    {' '}
                    <input type="text" maxLength={1} className="otp-input" inputMode="numeric" />
                    {' '}
                    <input type="text" maxLength={1} className="otp-input" inputMode="numeric" />
                    {' '}
                    <input type="text" maxLength={1} className="otp-input" inputMode="numeric" />
                    {' '}
                    <input type="text" maxLength={1} className="otp-input" inputMode="numeric" />
                    {' '}
                    <input type="text" maxLength={1} className="otp-input" inputMode="numeric" />
                  </div>
                </div>
                <div className={"box box-btn"}>
                  <a href="/#modalResetPassword" data-bs-toggle="modal" data-bs-dismiss="modal" className={"tf-btn primary w-100"} id="btnOtpContinue">
                    
                                      Continue
                                  
                  </a>
                </div>
                <div className={"text text-center"}>
                  
                                  Didn’t receive the code?
                                  
                  <a href="/#" className="text_primary" id="btnOtpResend">
                    Resend
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={"modal modal-account fade"} id="modalResetPassword" aria-modal="true" role="dialog" tabIndex={-1} aria-hidden="true">
        <div className={"modal-dialog modal-dialog-centered"}>
          <div className="modal-content">
            <div className="flat-account">
              <div className="banner-account">
                <img src="/images/locations/tour-76.jpg" alt="banner" />
                {' '}
                <img src="/images/logo/khamiar-logo.png" alt="logo" className="logo-overlay" />
              </div>
              <form className="form-account">
                <div className="title-box">
                  <h1>
                    Reset Password
                  </h1>
                  <span className={"close-modal icon-X"} data-bs-dismiss="modal" />
                </div>
                <div className="box">
                  <fieldset className="box-fieldset">
                    <label>
                      New Password
                    </label>
                    <div className="ip-field">
                      <img src="/images/icons/icon-lock.svg" alt="icon" className="icon" />
                      {' '}
                      <input type="password" className="form-control" placeholder={"Enter new password"} />
                    </div>
                  </fieldset>
                  <fieldset className="box-fieldset">
                    <label>
                      Confirm Password
                    </label>
                    <div className="ip-field">
                      <img src="/images/icons/icon-lock.svg" alt="icon" className="icon" />
                      {' '}
                      <input type="password" className="form-control" placeholder={"Re-enter password"} />
                    </div>
                  </fieldset>
                </div>
                <div className={"box box-btn"}>
                  <a href="/#modalLogin" data-bs-toggle="modal" className={"tf-btn primary w-100"}>
                    
                                      Confirm
                                  
                  </a>
                </div>
                <div className={"text text-center"}>
                  
                                  After resetting your password, you will be redirected to
                                  
                  <a href="/#modalLogin" data-bs-toggle="modal" data-bs-dismiss="modal" className="text_primary">
                    
                                      Login
                                  
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={"modal fade"} id="modalSearch" tabIndex={-1} aria-hidden="true">
        <div className={"modal-dialog modal-dialog-centered"}>
          <div className={"modal-content p-4"}>
            <div className={"d-flex justify-content-between align-items-center mb-3"}>
              <div className={"m-0 h4"}>
                Search Tours
              </div>
              <span className={"close-modal icon-X"} data-bs-dismiss="modal" />
            </div>
            <form className="search-box" id="searchForm" method="get" action="/#">
              <input type="text" id="searchInput" name="search" className="form-control" placeholder={"Search by location, title, price..."} />
              {' '}
              <button type="submit" className={"icon icon-search pos-2"} aria-label="Search" />
            </form>
            <div id="searchResults" className="mt-3" />
          </div>
        </div>
      </div>
    </>
  );
}
