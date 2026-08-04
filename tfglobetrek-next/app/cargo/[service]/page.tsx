import Link from "next/link";
import { cargoServices } from "../../data/cargo";

export function generateStaticParams() {
  return cargoServices.map((s) => ({ service: s.slug }));
}

export default function CargoServicePage({
  params,
}: {
  params: { service: string };
}) {
  const service =
    cargoServices.find((s) => s.slug === params.service) || cargoServices[0];
  const others = cargoServices.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <div className="page-title">
        <div className="container">
          <div
            className={
              "text-center title wow animate__animated animate__fadeInUp h1"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            {service.title}
          </div>
          <div
            className={
              "breadcrumb-content wow animate__animated animate__fadeInUp"
            }
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div
              className={"breadcrumb breadcrumb-dynamic justify-content-center"}
            />
          </div>
        </div>
      </div>

      <div className="tf-vacation-hero-v2 flat-section">
        <div className="container">
          <div className="flat-img-with-contact">
            <div className="wg-content">
              <div
                className={"box-title wow animate__animated animate__fadeInUp"}
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className={"title mb-8 h1"}>{service.title}</div>
                <p className="subtitle">{service.overview}</p>
              </div>
              <ul className="box-info">
                <li className={"phone info-item"}>
                  <div className="icon">
                    <img src="/images/icons/phone-send.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <label className="subtitle">Call us for a quote</label>{" "}
                    <a href="tel:+255774050301">+255 774 050 301</a>
                  </div>
                </li>
                <li className={"email info-item"}>
                  <div className="icon">
                    <img src="/images/icons/send-mail.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <label className="subtitle">Email us</label>{" "}
                    <a href="mailto:info@khamiarltd.com">
                      info@khamiarltd.com
                    </a>
                  </div>
                </li>
              </ul>
              <div className="button-group mt-3">
                <Link href="/cargo/quote" className="tf-btn primary hover-1 fs-18">
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className={"box-images hover-img-wrap"}>
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        </div>
      </div>

      <div className="flat-section">
        <div className="container">
          <div className="box-property-detail property-description">
            <div className={"property-topic mb-6 h3"}>About this service</div>
            {service.descriptions.map((p, i) => (
              <p key={i} className="subtitle">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flat-section pt-0">
        <div className="container">
          <div className="box-property-detail property-feature">
            <div className={"property-topic mb-6 h3"}>What we provide</div>
            <div className="wrap-feature tf-grid-layout gap-30 tf-col-3 md-col-2 sm-col-1">
              <div className="box-feature">
                <ul className="feature-list">
                  {service.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="feature-item">
                      <img
                        src="/images/icons/check-box.svg"
                        alt="icon"
                        className="icon"
                      />{" "}
                      <span className="subtitle">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="box-feature">
                <ul className="feature-list">
                  {service.features.slice(3, 6).map((f, i) => (
                    <li key={i} className="feature-item">
                      <img
                        src="/images/icons/check-box.svg"
                        alt="icon"
                        className="icon"
                      />{" "}
                      <span className="subtitle">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flat-section pt-0">
        <div className="container">
          <div className="tf-grid-layout gap-30 tf-col-4 md-col-2 sm-col-1">
            {others.map((s) => (
              <div key={s.slug} className="box-icon-benefits">
                <div className="wrap-icon">
                  <img src={s.icon} alt="icon" className="icon" />
                </div>
                <div className="content">
                  <div className={"name h4"}>
                    <Link href={`/cargo/${s.slug}`} className="link">
                      {s.title}
                    </Link>
                  </div>
                  <p className="desc">{s.short}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
