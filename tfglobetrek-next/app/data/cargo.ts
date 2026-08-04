export interface CargoService {
  slug: string;
  title: string;
  short: string;
  image: string;
  icon: string;
  overview: string;
  features: string[];
  descriptions: string[];
}

export const cargoServices: CargoService[] = [
  {
    slug: "air-freight",
    title: "Air Freight Forwarding",
    short:
      "Fast and reliable air freight solutions for time-sensitive shipments across East Africa and the world.",
    image: "/images/cargo/air-freight.jpg",
    icon: "/images/icons/plane.svg",
    overview:
      "When every hour counts, Khamiar Express Cargo moves your goods by air through major East African gateways. We manage the full air freight chain - from airline selection and booking to customs clearance and final delivery - so your cargo arrives on time, every time.",
    features: [
      "Express and economy air freight",
      "Priority handling for urgent cargo",
      "Customs clearance support",
      "Real-time shipment tracking",
      "Door-to-airport and airport-to-door",
      "Temperature-controlled options",
    ],
    descriptions: [
      "Our air freight division partners with leading international and regional carriers serving Julius Nyerere International Airport in Dar es Salaam, Abeid Amani Karume International Airport in Zanzibar and the wider East African network. We consolidate small shipments into cost-effective consignments and reserve dedicated space for time-critical cargo.",
      "Every consignment is monitored from acceptance to delivery, with proactive customs coordination, correct documentation and transparent pricing. Whether you are shipping perishables, pharmaceuticals, electronics or urgent spares, we tailor the service to your deadline and budget.",
    ],
  },
  {
    slug: "ocean-freight",
    title: "Ocean Freight Forwarding",
    short:
      "Full container load and consolidated sea freight through the Port of Dar es Salaam and Zanzibar.",
    image: "/images/cargo/ocean-freight.jpg",
    icon: "/images/icons/ship.svg",
    overview:
      "Ocean freight remains the most economical way to move large volumes of cargo. Khamiar Express Cargo arranges full container loads (FCL) and less-than-container loads (LCL) through the Port of Dar es Salaam, with dedicated services serving Zanzibar and the wider East African region.",
    features: [
      "FCL and LCL container services",
      "Break-bulk and project cargo",
      "Port-to-door delivery",
      "Customs brokerage and documentation",
      "Cargo insurance arrangements",
      "Warehousing and distribution support",
    ],
    descriptions: [
      "We book space with reputable ocean carriers, manage container loading and stuffing, and coordinate all port handling at both origin and destination. Our team prepares accurate shipping documents - bills of lading, commercial invoices, packing lists and certificates of origin - to keep your cargo moving without delays.",
      "For customers in Zanzibar, we coordinate the sea connection between the mainland and the island, handling everything from the container yard to your warehouse door. Our consolidation service lets smaller shippers share container space and pay only for the volume they use.",
    ],
  },
  {
    slug: "road-freight",
    title: "Road Freight Forwarding",
    short:
      "Regional and cross-border road haulage across Tanzania and the wider East African community.",
    image: "/images/cargo/road-freight.jpg",
    icon: "/images/icons/truck.svg",
    overview:
      "Our road freight network links Zanzibar, Dar es Salaam, Arusha, Mwanza and key border crossings with reliable, GPS-tracked trucks. From full truckloads to consolidated part loads, we deliver your cargo safely overland across East Africa.",
    features: [
      "Full truckload and part load services",
      "Cross-border East African routes",
      "Refrigerated and temperature-controlled trucks",
      "GPS-tracked, insured fleet",
      "Timely door-to-door delivery",
      "Experienced local drivers",
    ],
    descriptions: [
      "We operate a modern fleet of trucks suited to every cargo type - from dry vans and flatbeds to refrigerated units for perishables. Every vehicle is tracked in real time, giving you full visibility of your consignment from pickup to delivery.",
      "Our drivers are experienced with East African border procedures, ensuring smooth clearance at Namanga, Taveta, Holili and other key crossings. Whether your goods are headed to Kenya, Uganda, Rwanda, Burundi or the DRC, Khamiar Express Cargo gets them there.",
    ],
  },
  {
    slug: "warehousing",
    title: "Warehousing",
    short:
      "Secure storage and inventory management for importers, exporters and distributors.",
    image: "/images/cargo/warehousing.jpg",
    icon: "/images/icons/building-warehouse.svg",
    overview:
      "Khamiar Express Cargo operates secure warehouse facilities in Zanzibar and Dar es Salaam, offering short and long-term storage for every kind of cargo. Our warehouses combine modern racking, full security and meticulous inventory control.",
    features: [
      "Secure bonded and general storage",
      "Inventory and stock management",
      "Regular stock reporting",
      "Value-added services on request",
      "24/7 security and CCTV",
      "Flexible storage contracts",
    ],
    descriptions: [
      "Whether you need a single pallet or a full warehouse bay, we provide flexible storage solutions backed by accurate stock records and timely reporting. Our bonded facilities allow duties to be deferred until goods are released, improving your cash flow.",
      "In addition to storage, we offer value-added services including order picking, packing, labelling, kitting and distribution. Goods in our care are stored systematically and insured, giving you complete peace of mind.",
    ],
  },
  {
    slug: "door-to-door",
    title: "Door to Door Delivery",
    short:
      "Complete door-to-door logistics from your origin point to the final destination - handled end to end.",
    image: "/images/cargo/door-to-door.jpg",
    icon: "/images/icons/box.svg",
    overview:
      "One shipment, one team, one door-to-door service. We take care of pickup, packing, international transport, customs clearance and final delivery, so you hand us your cargo at origin and receive it at destination without touching the middle of the journey.",
    features: [
      "Door-to-door and door-to-port options",
      "Origin pickup and destination delivery",
      "International transport arrangements",
      "Full customs clearance",
      "End-to-end shipment tracking",
      "Dedicated logistics coordinator",
    ],
    descriptions: [
      "Door-to-door is the simplest way to ship, especially for private individuals, small businesses and online sellers. We arrange collection from your home or warehouse, manage every leg of the journey, and deliver the cargo to your recipient's door with all customs formalities completed.",
      "Each shipment is assigned a dedicated coordinator who keeps you informed at every stage - from pickup confirmation to customs status to final delivery. Complex logistics, made simple.",
    ],
  },
  {
    slug: "ground-transport",
    title: "Ground Transport",
    short:
      "Reliable ground distribution within Zanzibar, Dar es Salaam and across mainland Tanzania.",
    image: "/images/cargo/ground-transport.jpg",
    icon: "/images/icons/route.svg",
    overview:
      "Our ground transport services keep goods moving within Zanzibar, across Dar es Salaam and throughout Tanzania. From daily island distribution to heavy intercity haulage, our fleet and crew deliver on schedule.",
    features: [
      "City and island distribution",
      "Intercity and regional transport",
      "Container and heavy cargo haulage",
      "Cold chain capabilities",
      "Skilled, vetted drivers",
      "Flexible scheduling",
    ],
    descriptions: [
      "On Zanzibar we operate daily distribution routes across Stone Town and the island's districts, ensuring retail, hospitality and trade customers receive their supplies reliably. On the mainland, we move cargo between Dar es Salaam, Arusha, Mwanza, Dodoma and beyond.",
      "Our ground fleet includes vans, trucks and container trailers suited to everything from parcels to construction materials. Every journey is planned with efficient routing to keep your cargo moving and your costs down.",
    ],
  },
  {
    slug: "worldwide-transport",
    title: "Worldwide Transport",
    short:
      "A global freight network connecting Tanzania and East Africa to markets around the world.",
    image: "/images/cargo/worldwide-transport.jpg",
    icon: "/images/icons/globe.svg",
    overview:
      "Khamiar Express Cargo combines air, ocean and road services into seamless multi-modal solutions that reach virtually any country on earth. From Zanzibar and Dar es Salaam, we connect exporters and importers to the Middle East, Europe, Asia and the Americas.",
    features: [
      "Global freight network",
      "Multi-modal transport solutions",
      "Export and import trade compliance",
      "Project and out-of-gauge cargo",
      "End-to-end visibility",
      "Multi-currency quotations",
    ],
    descriptions: [
      "Through our network of vetted partners in key markets, we offer export solutions for Tanzania's spices, seafood, horticulture and manufactured goods, and import solutions for machinery, vehicles, construction materials and consumer products.",
      "Our team understands export documentation, certificate of origin requirements, trade agreements and destination country regulations. Whatever the market, we design the most reliable and cost-effective route for your cargo.",
    ],
  },
  {
    slug: "packaging-storage",
    title: "Packaging & Storage",
    short:
      "Professional packaging, crating and safe storage to protect shipments of every size.",
    image: "/images/cargo/packaging-storage.jpg",
    icon: "/images/icons/package.svg",
    overview:
      "The right packaging is the difference between cargo that arrives and cargo that survives. Our packaging and storage services protect your goods for sea, air and road transport - from export-grade cartons to heavy-duty wooden crates.",
    features: [
      "Export-grade packaging materials",
      "Custom wooden crating",
      "Palletization and strapping",
      "Sea and air cargo protection",
      "On-site and warehouse storage",
      "Fragile and high-value handling",
    ],
    descriptions: [
      "We pack everything from small consignments to heavy machinery and oversized project cargo. Our team selects the right materials - cartons, bubble wrap, foam, vacuum bags, wooden crates - and packs to international shipping standards, minimising the risk of damage in transit.",
      "Cargo can be stored securely before departure or after arrival, with careful stacking, labelling and inventory records. Fragile, hazardous and high-value goods receive special handling attention at every step.",
    ],
  },
];

export const cargoDefaultService: CargoService = {
  slug: "cargo-service",
  title: "Cargo Service",
  short:
    "Complete logistics solutions for businesses and individuals - freight, warehousing and delivery under one roof.",
  image: "/images/cargo/cargo-service.jpg",
  icon: "/images/icons/container.svg",
  overview:
    "Khamiar Express Cargo is the logistics division of Khamiar Express, delivering comprehensive freight forwarding and supply chain solutions from Zanzibar and Tanzania to the world. Air, ocean and road - we move your cargo with care.",
  features: [
    "Air, ocean and road freight",
    "Customs clearance and documentation",
    "Warehousing and distribution",
    "Door-to-door service",
    "Real-time shipment tracking",
    "Dedicated logistics support",
  ],
  descriptions: [
    "From a single parcel to full project cargo, our team manages every detail of your shipment with one clear goal - delivering your cargo safely and on time. Based in Zanzibar with operations across Tanzania, we combine local expertise with a global network.",
    "Contact us for a free quotation and discover why businesses and individuals across East Africa trust Khamiar Express Cargo with their goods.",
  ],
};
