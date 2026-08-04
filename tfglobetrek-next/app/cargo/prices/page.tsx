import Link from "next/link";

const plans = [
  {
    name: "Standard",
    price: "$120",
    unit: "per shipment",
    desc: "For occasional personal and small business shipments.",
    features: [
      "Air, road or sea freight",
      "Up to 50 kg per shipment",
      "Door-to-port delivery",
      "Basic customs clearance",
      "Email tracking updates",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "$350",
    unit: "per shipment",
    desc: "For growing businesses shipping regularly.",
    features: [
      "Air, road or sea freight",
      "Up to 500 kg per shipment",
      "Door-to-door delivery",
      "Full customs clearance",
      "Priority handling",
      "Dedicated logistics coordinator",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "tailored quote",
    desc: "For large and recurring logistics requirements.",
    features: [
      "Full container and project cargo",
      "Unlimited shipment volume",
      "Warehousing and distribution",
      "Multi-modal transport solutions",
      "Monthly invoicing",
      "24/7 dedicated account manager",
    ],
    featured: false,
  },
];

export default function PricesPage() {
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
            Our Prices
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

      <div className="flat-section">
        <div className="container">
          <div
            className={"box-title text-center wow animate__animated animate__fadeInUp"}
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className={"title h1"}>Transparent pricing for every shipment</div>
            <div className="subtitle">
              Simple, competitive rates with no hidden charges. Every quotation
              is confirmed before your cargo is booked.
            </div>
          </div>
          <div className="tf-grid-layout gap-30 tf-col-3 md-col-2 sm-col-1 mt-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className="box-property-detail property-feature"
              >
                <div className={"property-topic mb-6 h3"}>{p.name}</div>
                <div className="box-title-price">
                  <span className="h1">{p.price}</span>{" "}
                  <span className="subtitle">/ {p.unit}</span>
                </div>
                <p className="subtitle">{p.desc}</p>
                <div className="box-feature mt-3">
                  <ul className="feature-list">
                    {p.features.map((f, i) => (
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
                <div className="mt-3">
                  <Link href="/cargo/quote" className="tf-btn primary hover-1 fs-18">
                    Get This Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="box-property-detail property-description bg-color-first p-4 mt-3">
            <div className={"property-topic mb-6 h3"}>Need a custom rate?</div>
            <p className="subtitle">
              Every shipment is unique. Contact our team for a free, detailed
              quotation tailored to your cargo, route and timeline.
            </p>
            <div className="button-group mt-3">
              <Link href="/cargo/quote" className="tf-btn primary hover-1 fs-18">
                Request a Quote
              </Link>{" "}
              <Link href="/contactus" className="tf-btn hover-1 fs-18">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
