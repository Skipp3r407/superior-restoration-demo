export const company = {
  name: "Superior Restoration Services",
  shortName: "Superior",
  logo: "/brand/superior-main-logo.png",
  phone: "321-588-1156",
  phoneHref: "tel:+13215881156",
  email: "office@superiorrestorationsfl.com",
  emailHref: "mailto:office@superiorrestorationsfl.com",
  address: "1025 S Semoran Blvd Suite 1071, Winter Park, FL 32792",
  addressMapsHref: "https://www.google.com/maps/search/?api=1&query=1025%20S%20Semoran%20Blvd%20Suite%201071%2C%20Winter%20Park%2C%20FL%2032792",
  googleReviewsHref:
    "https://www.google.com/maps/place//data=!4m7!3m6!1s0x88e76584da04ccdf:0xdfddff2d42281d7c!8m2!3d28.5821505!4d-81.3062866!9m1!1b1",
  googleRating: "5.0",
  googleReviewCount: "35",
  licenses: "MRSA 4113 · MRSR 4318",
  hours: "24/7 emergency service",
  officeHours: "Monday - Friday: 8:00 AM - 5:00 PM",
  serviceArea: "Central Florida",
  estimateHref: "/book-service"
};

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/superiorrestorationsfl?mibextid=wwXIfr&mibextid=wwXIfr"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/superior.restoration.services?igsh=MTRnbmM4aHU3Y3phMw=="
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@superiorrestorationservices"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/superior-restorations-18b090356/"
  }
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Book Service", href: "/book-service" },
  { label: "Contact", href: "/contact" }
];

export const images = {
  hero:
    "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=2000&q=85",
  emergencyCrew:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85",
  inspection:
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
  repairs:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
  commercial:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
  equipment:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85"
};

export type ServiceIcon =
  | "Droplets"
  | "Flame"
  | "Biohazard"
  | "CloudLightning"
  | "Siren"
  | "Building2";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: ServiceIcon;
  category: string;
  image: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  problem: string;
  urgency: string;
  process: string[];
  faqs: { question: string; answer: string }[];
};

type SpecialtyServiceInput = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: ServiceIcon;
  category: string;
  image: string;
  heroImage?: string;
  problem: string;
  urgency: string;
  process: string[];
};

const sharedFaqs = [
  {
    question: "Do you offer emergency service?",
    answer:
      "Yes. Superior Restoration Services is positioned for 24/7 emergency response, urgent estimates, and fast intake for water, fire, mold, storm, and cleanup needs."
  },
  {
    question: "Do you work with insurance?",
    answer:
      "A restoration provider can typically document damage, photos, moisture readings, and scopes that help customers communicate with their insurance carrier."
  },
  {
    question: "Are estimates free?",
    answer:
      "The website is designed around free assessment requests and free inspection scheduling for Central Florida property owners."
  }
];

export const services: Service[] = [
  {
    slug: "water-damage",
    title: "Water Damage Restoration",
    shortTitle: "Water Damage",
    description:
      "Water extraction, structural drying, moisture mapping, and cleanup for leaks, floods, burst pipes, and appliance failures.",
    icon: "Droplets",
    category: "Water Damage",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1800&q=85",
    metaTitle: "Water Damage Restoration in Central Florida",
    metaDescription:
      "Fast water damage restoration, extraction, drying, and cleanup services for Central Florida homes and businesses.",
    problem:
      "Water can move behind walls, under flooring, and into structural materials quickly. Hidden moisture can cause swelling, odors, and microbial growth when it is not addressed.",
    urgency:
      "The first 24 to 48 hours are critical for reducing secondary damage and helping preserve salvageable materials.",
    process: [
      "Emergency call and moisture inspection",
      "Water extraction and affected material review",
      "Drying, dehumidification, and monitoring",
      "Cleanup, repairs, and final walkthrough"
    ],
    faqs: [
      {
        question: "What should I do first after water damage?",
        answer:
          "Stop the source if safe, avoid standing water near electricity, document visible damage, and request professional help quickly."
      },
      {
        question: "How long does drying take?",
        answer:
          "Drying timelines vary by material, humidity, and severity. Many projects require several days of drying and monitoring."
      },
      ...sharedFaqs
    ]
  },
  {
    slug: "fire-damage",
    title: "Fire Damage Cleanup",
    shortTitle: "Fire Cleanup",
    description:
      "Soot cleanup, smoke odor treatment, debris removal, board-up coordination, and repair planning after fire events.",
    icon: "Flame",
    category: "Fire Cleanup",
    image:
      "https://images.unsplash.com/photo-1762855228196-32b7c4e46ff0?auto=format&fit=crop&w=1200&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1561439740-e8863909de77?auto=format&fit=crop&w=1800&q=85",
    metaTitle: "Fire Damage Cleanup and Smoke Restoration",
    metaDescription:
      "Professional fire damage cleanup, smoke odor removal, soot cleanup, and repair planning for Central Florida properties.",
    problem:
      "Smoke and soot travel beyond the source of a fire. Residue can stain finishes, affect contents, and leave persistent odors without proper cleaning.",
    urgency:
      "Quick stabilization helps protect salvageable materials, control odors, and create a safer path toward repairs.",
    process: [
      "Safety review and emergency stabilization",
      "Debris removal and affected area containment",
      "Soot, smoke, and odor treatment",
      "Repair scope, cleaning, and finish restoration"
    ],
    faqs: [
      {
        question: "Can smoke odor be removed?",
        answer:
          "Many smoke odors can be reduced or removed with source removal, detailed cleaning, filtration, and professional odor treatment."
      },
      ...sharedFaqs
    ]
  },
  {
    slug: "mold-remediation",
    title: "Mold Remediation",
    shortTitle: "Mold Remediation",
    description:
      "Containment, filtration, affected material removal, cleaning, and prevention guidance for healthier indoor spaces.",
    icon: "Biohazard",
    category: "Mold",
    image:
      "https://images.unsplash.com/photo-1724230442705-646dc7c86943?auto=format&fit=crop&w=1200&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1683468820750-b1fd50978474?auto=format&fit=crop&w=1800&q=85",
    metaTitle: "Mold Remediation and Mold Removal",
    metaDescription:
      "Mold remediation services with containment, removal, filtration, cleanup, and moisture source recommendations.",
    problem:
      "Mold typically signals an underlying moisture problem. Remediation should address affected materials and the conditions that allowed growth.",
    urgency:
      "Prompt remediation helps limit spread, improve indoor air quality, and reduce the risk of recurring damage.",
    process: [
      "Inspection and moisture source review",
      "Containment and air filtration setup",
      "Removal or cleaning of affected materials",
      "Post-cleanup recommendations and prevention guidance"
    ],
    faqs: [
      {
        question: "Can mold come back after remediation?",
        answer:
          "Yes, if moisture returns. A strong plan includes cleanup and recommendations for correcting leaks, humidity, or ventilation issues."
      },
      ...sharedFaqs
    ]
  },
  {
    slug: "storm-damage",
    title: "Storm Damage Restoration",
    shortTitle: "Storm Damage",
    description:
      "Emergency stabilization, water intrusion cleanup, debris handling, drying, and repair coordination after severe weather.",
    icon: "CloudLightning",
    category: "Storm Damage",
    image:
      "https://images.unsplash.com/photo-1695605347102-2cc806d3cabf?auto=format&fit=crop&w=1200&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1768293528649-531aad843525?auto=format&fit=crop&w=1800&q=85",
    metaTitle: "Storm Damage Repair in Central Florida",
    metaDescription:
      "Storm damage restoration for water intrusion, debris cleanup, emergency stabilization, and repair planning.",
    problem:
      "Wind-driven rain, roof damage, fallen debris, and flooding can create several issues at once across homes and commercial properties.",
    urgency:
      "Temporary protection and fast cleanup help prevent additional water intrusion, interior damage, and safety hazards.",
    process: [
      "Emergency property assessment",
      "Temporary protection and debris removal",
      "Water cleanup, drying, and damaged material review",
      "Repair coordination and final restoration"
    ],
    faqs: [
      {
        question: "What should I do after storm damage?",
        answer:
          "Stay safe, avoid unstable areas, document visible damage, and request help for temporary protection and moisture cleanup."
      },
      ...sharedFaqs
    ]
  },
  {
    slug: "emergency-cleanup",
    title: "Emergency Cleanup",
    shortTitle: "Emergency Cleanup",
    description:
      "Rapid cleanup for urgent property damage, debris, contaminated areas, leaks, odors, and safety-focused stabilization.",
    icon: "Siren",
    category: "Emergency Cleanup",
    image:
      "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?auto=format&fit=crop&w=1200&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=85",
    metaTitle: "Emergency Cleanup and Restoration Response",
    metaDescription:
      "Emergency cleanup services for urgent property damage, debris removal, water intrusion, odor control, and stabilization.",
    problem:
      "Urgent property cleanup can involve water, debris, odor, contamination concerns, and damaged materials that need a coordinated response.",
    urgency:
      "Fast action helps stabilize the property, reduce additional loss, and give owners a clear plan for next steps.",
    process: [
      "Urgent intake and safety review",
      "Site stabilization and cleanup priorities",
      "Removal, drying, odor control, or containment",
      "Documentation and next-step repair plan"
    ],
    faqs: sharedFaqs
  },
  {
    slug: "commercial-restoration",
    title: "Commercial Restoration",
    shortTitle: "Commercial",
    description:
      "Scalable restoration response for offices, retail spaces, multifamily properties, and commercial facilities.",
    icon: "Building2",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
    metaTitle: "Commercial Restoration Services in Central Florida",
    metaDescription:
      "Commercial restoration services for water, fire, mold, storm, and emergency cleanup needs across Central Florida.",
    problem:
      "Commercial property damage can interrupt operations, tenant experience, safety, and revenue. A structured response keeps stakeholders aligned.",
    urgency:
      "Quick assessment, documentation, and phased cleanup can reduce downtime and help businesses reopen with confidence.",
    process: [
      "Commercial intake and site assessment",
      "Priority stabilization and safety planning",
      "Scalable cleanup, drying, and remediation",
      "Progress updates, documentation, and reopening support"
    ],
    faqs: [
      {
        question: "Do you handle commercial properties?",
        answer:
          "Yes. Superior Restoration Services supports commercial restoration needs for offices, retail, multifamily, hotels, property managers, and facilities."
      },
      ...sharedFaqs
    ]
  }
];

const specialtyImages = {
  waterSafety:
    "https://images.unsplash.com/photo-1615003382357-4cb74b16a7ab?auto=format&fit=crop&w=1200&q=85",
  wetCleanup:
    "https://images.unsplash.com/photo-1765970101654-337b573142fb?auto=format&fit=crop&w=1200&q=85",
  fireResponse:
    "https://images.unsplash.com/photo-1561439740-e8863909de77?auto=format&fit=crop&w=1200&q=85",
  fireAftermath:
    "https://images.unsplash.com/photo-1762855228196-32b7c4e46ff0?auto=format&fit=crop&w=1200&q=85",
  moldWall:
    "https://images.unsplash.com/photo-1724230442705-646dc7c86943?auto=format&fit=crop&w=1200&q=85",
  moldClose:
    "https://images.unsplash.com/photo-1683468820750-b1fd50978474?auto=format&fit=crop&w=1200&q=85",
  stormHome:
    "https://images.unsplash.com/photo-1695605347102-2cc806d3cabf?auto=format&fit=crop&w=1200&q=85",
  stormCleanup:
    "https://images.unsplash.com/photo-1768293528649-531aad843525?auto=format&fit=crop&w=1200&q=85",
  roofRepair:
    "https://images.unsplash.com/photo-1760331840361-d751cfc1becf?auto=format&fit=crop&w=1200&q=85",
  restoredInterior:
    "https://images.unsplash.com/photo-1774199496664-a9690967be5a?auto=format&fit=crop&w=1200&q=85",
  damagedInterior:
    "https://images.unsplash.com/photo-1768321901750-f7b96d774456?auto=format&fit=crop&w=1200&q=85"
};

function specialtyService(input: SpecialtyServiceInput): Service {
  return {
    ...input,
    heroImage: input.heroImage ?? input.image.replace("w=1200", "w=1800"),
    metaTitle: `${input.title} in Central Florida`,
    metaDescription: `${input.description} Request ${input.title.toLowerCase()} from Superior Restoration Services in Central Florida.`,
    faqs: [
      {
        question: `When should I request ${input.shortTitle.toLowerCase()}?`,
        answer:
          "Request help when the damage affects safety, moisture, odors, contents, business operations, or areas that may get worse without professional review."
      },
      {
        question: "Can I upload photos with the request?",
        answer:
          "Yes. The booking flow includes a damage photo upload placeholder so the team can review context before follow-up."
      },
      ...sharedFaqs
    ]
  };
}

export const specialtyServicePages: Service[] = [
  specialtyService({
    slug: "commercial-water-damage",
    title: "Commercial Water Damage Restoration",
    shortTitle: "Commercial Water Damage",
    description:
      "Water damage response for offices, retail spaces, hotels, multifamily buildings, and managed commercial properties.",
    icon: "Building2",
    category: "Water Damage",
    image: specialtyImages.waterSafety,
    problem:
      "Commercial water damage can interrupt tenants, guests, employees, equipment, inventory, and daily operations across multiple rooms or units.",
    urgency:
      "Fast documentation, water cleanup planning, and drying coordination help reduce downtime and protect business continuity.",
    process: [
      "Commercial intake and affected-area review",
      "Moisture inspection and safety priorities",
      "Extraction, drying, and containment planning",
      "Documentation, updates, and repair coordination"
    ]
  }),
  specialtyService({
    slug: "burst-pipe-cleanup",
    title: "Burst Pipe Cleanup",
    shortTitle: "Burst Pipe Cleanup",
    description:
      "Cleanup and drying guidance for sudden plumbing failures, pipe breaks, ceiling leaks, and interior water release.",
    icon: "Droplets",
    category: "Water Damage",
    image: specialtyImages.wetCleanup,
    problem:
      "A burst pipe can release water quickly into walls, ceilings, flooring, cabinetry, and insulation before the issue is visible.",
    urgency:
      "Stopping the source and beginning cleanup quickly helps limit swelling, trapped moisture, odors, and microbial growth.",
    process: [
      "Stop-source and emergency intake",
      "Moisture mapping and affected material review",
      "Water cleanup and drying plan",
      "Repair scope and final walkthrough"
    ]
  }),
  specialtyService({
    slug: "bathroom-flooding-cleanup",
    title: "Bathroom Flooding Cleanup",
    shortTitle: "Bathroom Flooding",
    description:
      "Cleanup for toilet overflows, tub leaks, shower pan failures, vanity leaks, and bathroom water intrusion.",
    icon: "Droplets",
    category: "Water Damage",
    image: specialtyImages.waterSafety,
    problem:
      "Bathroom flooding can spread under tile, into adjacent rooms, behind baseboards, and through ceilings below the affected area.",
    urgency:
      "Quick review helps determine whether water is clean, gray, or contaminated and what materials need cleanup or removal.",
    process: [
      "Water source and category review",
      "Affected bathroom and adjacent room inspection",
      "Cleanup, drying, and material recommendations",
      "Repair planning and prevention guidance"
    ]
  }),
  specialtyService({
    slug: "appliance-leak-cleanup",
    title: "Appliance Leak Cleanup",
    shortTitle: "Appliance Leak Cleanup",
    description:
      "Water damage cleanup for dishwasher, refrigerator, washer, water heater, and appliance supply-line leaks.",
    icon: "Droplets",
    category: "Water Damage",
    image: specialtyImages.wetCleanup,
    problem:
      "Appliance leaks often hide under cabinets, flooring, laundry rooms, closets, and walls before the damage is obvious.",
    urgency:
      "Fast moisture checks help catch hidden damage before it becomes odors, swelling, staining, or mold growth.",
    process: [
      "Appliance leak intake",
      "Cabinet, floor, and wall moisture review",
      "Cleanup and drying recommendations",
      "Repair scope and follow-up planning"
    ]
  }),
  specialtyService({
    slug: "pack-out-services",
    title: "Pack Out Services",
    shortTitle: "Pack Out Services",
    description:
      "Contents-focused support for moving, organizing, documenting, and protecting belongings during restoration work.",
    icon: "Siren",
    category: "Contents",
    image: specialtyImages.restoredInterior,
    problem:
      "Contents can block drying, absorb odors, hold moisture, or be damaged further when restoration work begins around them.",
    urgency:
      "A coordinated pack-out plan helps protect belongings and gives crews room to inspect, dry, clean, or repair affected spaces.",
    process: [
      "Contents review and photo documentation",
      "Priority items and affected-room planning",
      "Pack-out coordination for restoration access",
      "Return planning after cleanup or repairs"
    ]
  }),
  specialtyService({
    slug: "property-restoration",
    title: "Property Restoration",
    shortTitle: "Property Restoration",
    description:
      "Repair coordination and restoration planning after water, fire, mold, smoke, storm, or emergency cleanup work.",
    icon: "Building2",
    category: "Restoration",
    image: specialtyImages.damagedInterior,
    problem:
      "After cleanup, properties may still need drywall, flooring, painting, fixture, cabinet, odor, or finish repairs to feel complete again.",
    urgency:
      "Clear restoration planning keeps next steps organized and helps owners move from emergency response to finished repairs.",
    process: [
      "Damage scope and repair needs review",
      "Cleanup-to-repair transition planning",
      "Material and affected-room coordination",
      "Final restoration walkthrough"
    ]
  }),
  specialtyService({
    slug: "hotels",
    title: "Hotel Restoration Services",
    shortTitle: "Hotels",
    description:
      "Restoration intake for hotels, guest rooms, common areas, back-of-house spaces, and hospitality properties.",
    icon: "Building2",
    category: "Commercial",
    image: images.commercial,
    problem:
      "Hotels need fast coordination because property damage can affect guest experience, occupied rooms, common areas, and revenue.",
    urgency:
      "Quick response, clear communication, and phased cleanup can help limit room downtime and operational disruption.",
    process: [
      "Hotel intake and affected-area priorities",
      "Guest safety and operational planning",
      "Cleanup, drying, remediation, or odor control",
      "Progress updates and reopening support"
    ]
  }),
  specialtyService({
    slug: "property-manager",
    title: "Property Manager Restoration Support",
    shortTitle: "Property Manager",
    description:
      "Restoration support for property managers handling tenant, owner, HOA, multifamily, and commercial damage requests.",
    icon: "Building2",
    category: "Commercial",
    image: specialtyImages.roofRepair,
    problem:
      "Property managers need fast answers, clear documentation, tenant communication, and coordinated restoration steps.",
    urgency:
      "Responsive intake and photo-supported requests help managers prioritize urgent issues and keep stakeholders informed.",
    process: [
      "Manager intake and property details",
      "Tenant or unit impact review",
      "Damage documentation and service planning",
      "Updates for owners, tenants, and vendors"
    ]
  }),
  specialtyService({
    slug: "mold-services",
    title: "Mold Services",
    shortTitle: "Mold Services",
    description:
      "Mold inspection intake, remediation planning, affected-material review, and prevention guidance for indoor spaces.",
    icon: "Biohazard",
    category: "Mold",
    image: specialtyImages.moldWall,
    problem:
      "Mold usually points to moisture problems that may be hidden behind walls, under flooring, in cabinets, or around HVAC areas.",
    urgency:
      "Prompt mold review helps limit spread, improve indoor conditions, and identify moisture issues that need correction.",
    process: [
      "Mold concern intake",
      "Moisture source and affected-area review",
      "Containment and remediation planning",
      "Prevention recommendations"
    ]
  }),
  specialtyService({
    slug: "commercial-mold-testing",
    title: "Commercial Mold Testing",
    shortTitle: "Commercial Mold Testing",
    description:
      "Commercial mold testing coordination and documentation support for offices, hotels, retail spaces, and managed properties.",
    icon: "Biohazard",
    category: "Mold",
    image: specialtyImages.moldClose,
    problem:
      "Commercial mold concerns can affect occupants, operations, tenant relationships, and property documentation requirements.",
    urgency:
      "Testing coordination and clear next steps help commercial owners understand whether remediation planning is needed.",
    process: [
      "Commercial mold concern intake",
      "Affected-area and occupant impact review",
      "Testing coordination guidance",
      "Remediation planning if needed"
    ]
  }),
  specialtyService({
    slug: "commercial-mold-remediation",
    title: "Commercial Mold Remediation",
    shortTitle: "Commercial Mold Remediation",
    description:
      "Commercial mold remediation planning for containment, air filtration, affected materials, cleaning, and prevention.",
    icon: "Biohazard",
    category: "Mold",
    image: specialtyImages.moldWall,
    problem:
      "Mold in commercial buildings can spread through materials, HVAC zones, storage areas, offices, and tenant spaces.",
    urgency:
      "Fast containment planning and moisture correction recommendations help reduce disruption and recurring growth.",
    process: [
      "Commercial remediation intake",
      "Containment and filtration planning",
      "Affected material removal or cleaning",
      "Prevention and property restoration coordination"
    ]
  }),
  specialtyService({
    slug: "mold-cleaning-boats",
    title: "Mold Cleaning for Boats",
    shortTitle: "Mold Cleaning for Boats",
    description:
      "Mold cleaning intake for boat interiors, cabins, upholstery, storage areas, and moisture-prone marine spaces.",
    icon: "Biohazard",
    category: "Mold",
    image: specialtyImages.moldClose,
    problem:
      "Boats can hold moisture in enclosed cabins, upholstery, compartments, and storage areas, creating conditions for mold and odors.",
    urgency:
      "Early cleaning and moisture-control guidance helps limit odor, staining, and recurring growth in enclosed marine spaces.",
    process: [
      "Boat mold concern intake",
      "Interior and storage-area review",
      "Cleaning and odor-control planning",
      "Moisture prevention recommendations"
    ]
  }),
  specialtyService({
    slug: "mold-cleaning-cars",
    title: "Mold Cleaning for Cars",
    shortTitle: "Mold Cleaning for Cars",
    description:
      "Mold cleaning intake for vehicle interiors affected by leaks, humidity, flooding, odors, or moisture intrusion.",
    icon: "Biohazard",
    category: "Mold",
    image: specialtyImages.moldWall,
    problem:
      "Vehicles can develop mold after leaks, flooding, closed-window humidity, wet carpeting, or stored moisture in upholstery.",
    urgency:
      "Prompt cleaning guidance helps reduce odor, staining, and further contamination of soft materials.",
    process: [
      "Vehicle mold intake",
      "Moisture source and interior review",
      "Cleaning and odor-control recommendations",
      "Prevention guidance for recurring moisture"
    ]
  }),
  specialtyService({
    slug: "smoke-cleaning",
    title: "Smoke Cleaning",
    shortTitle: "Smoke Cleaning",
    description:
      "Smoke odor and residue cleaning guidance after fire events, cooking smoke, HVAC smoke spread, or soot contamination.",
    icon: "Flame",
    category: "Smoke",
    image: specialtyImages.fireAftermath,
    problem:
      "Smoke can travel through rooms, vents, textiles, contents, and porous finishes, leaving odors and residue beyond the fire source.",
    urgency:
      "Fast source removal, cleaning, filtration, and odor-control planning help prevent lingering smells and secondary damage.",
    process: [
      "Smoke damage intake",
      "Affected area and odor source review",
      "Cleaning, filtration, and odor-control planning",
      "Contents and finish restoration recommendations"
    ]
  }),
  specialtyService({
    slug: "fire-cleaning",
    title: "Fire Cleaning",
    shortTitle: "Fire Cleaning",
    description:
      "Fire cleaning support for soot, debris, smoke residue, odor treatment, contents impact, and repair planning.",
    icon: "Flame",
    category: "Fire Cleanup",
    image: specialtyImages.fireResponse,
    problem:
      "Fire cleaning involves charred materials, soot residue, smoke odors, water from suppression, and affected contents.",
    urgency:
      "Quick stabilization helps protect salvageable materials, document damage, and prepare the space for repairs.",
    process: [
      "Fire cleaning intake",
      "Safety and affected-material review",
      "Soot, debris, and odor-control planning",
      "Repair scope and restoration coordination"
    ]
  })
];

export const allServicePages: Service[] = [...services, ...specialtyServicePages];

export const serviceNavGroups = [
  {
    label: "Water",
    href: "/water",
    items: [
      { label: "Water Damage", href: "/water/water-damage" },
      { label: "Commercial Water Damage", href: "/water/commercial-water-damage" },
      { label: "Storm Damage", href: "/water/storm-damage" },
      { label: "Burst Pipe Cleanup", href: "/water/burst-pipe-cleanup" },
      { label: "Bathroom Flooding Cleanup", href: "/water/bathroom-flooding-cleanup" },
      { label: "Appliance Leak Cleanup", href: "/water/appliance-leak-cleanup" },
      { label: "Pack Out Services", href: "/water/pack-out-services" },
      { label: "Property Restoration", href: "/water/property-restoration" },
      { label: "Hotels", href: "/water/hotels" },
      { label: "Property Manager", href: "/water/property-manager" }
    ]
  },
  {
    label: "Mold",
    href: "/mold",
    items: [
      { label: "Mold Services", href: "/services/mold-services" },
      { label: "Commercial Mold Testing", href: "/services/commercial-mold-testing" },
      { label: "Commercial Mold Remediation", href: "/services/commercial-mold-remediation" },
      { label: "Mold Cleaning For Boats", href: "/services/mold-cleaning-boats" },
      { label: "Mold Cleaning For Cars", href: "/services/mold-cleaning-cars" },
      { label: "Pack Out Services", href: "/services/pack-out-services" },
      { label: "Property Restoration", href: "/services/property-restoration" },
      { label: "Hotels", href: "/services/hotels" },
      { label: "Property Manager", href: "/services/property-manager" }
    ]
  },
  {
    label: "Smoke",
    href: "/smoke",
    items: [
      { label: "Smoke Cleaning", href: "/services/smoke-cleaning" },
      { label: "Pack Out Services", href: "/services/pack-out-services" },
      { label: "Property Restoration", href: "/services/property-restoration" },
      { label: "Hotels", href: "/services/hotels" }
    ]
  },
  {
    label: "Fire",
    href: "/fire",
    items: [
      { label: "Fire Damage", href: "/services/fire-damage" },
      { label: "Fire Cleaning", href: "/services/fire-cleaning" },
      { label: "Pack Out Services", href: "/services/pack-out-services" },
      { label: "Property Restoration", href: "/services/property-restoration" },
      { label: "Hotels", href: "/services/hotels" }
    ]
  },
  {
    label: "Other Services",
    href: "/other-services",
    items: [{ label: "Commercial Restoration", href: "/services/commercial-restoration" }]
  }
];

export const serviceSectionPages = [
  {
    slug: "water",
    label: "Water",
    title: "Water Damage Cleanup, Drying, and Restoration Services",
    eyebrow: "Water Services",
    description:
      "Explore water damage services for leaks, floods, storm intrusion, burst pipes, bathroom flooding, appliance leaks, commercial water damage, pack-out support, and property restoration.",
    image: specialtyImages.wetCleanup,
    overview:
      "Water damage can spread fast through flooring, drywall, cabinets, insulation, and structural materials. This section helps visitors choose the right water-related service, understand why quick drying matters, and request help with photos and property details.",
    highlights: [
      "Water extraction and wet floor cleanup",
      "Structural drying and dehumidification planning",
      "Burst pipe, bathroom, appliance, and storm water support",
      "Commercial water damage coordination",
      "Pack-out and property restoration planning",
      "Photo-supported intake for faster follow-up"
    ],
    serviceHrefs: serviceNavGroups[0].items.map((item) => item.href),
    gallery: [specialtyImages.waterSafety, specialtyImages.wetCleanup, images.equipment]
  },
  {
    slug: "mold",
    label: "Mold",
    title: "Mold Testing, Remediation, and Specialty Cleaning Services",
    eyebrow: "Mold Services",
    description:
      "Explore mold services for homes, commercial properties, boats, cars, hotels, property managers, testing coordination, remediation planning, and prevention guidance.",
    image: specialtyImages.moldWall,
    overview:
      "Mold usually means moisture is present somewhere. This section organizes every mold-related page so visitors can find residential, commercial, specialty cleaning, and property management support with clear next steps.",
    highlights: [
      "Mold concern intake and affected-area review",
      "Commercial mold testing coordination",
      "Commercial mold remediation planning",
      "Boat and vehicle mold cleaning intake",
      "Moisture source and prevention guidance",
      "Pack-out and property restoration coordination"
    ],
    serviceHrefs: serviceNavGroups[1].items.map((item) => item.href),
    gallery: [specialtyImages.moldWall, specialtyImages.moldClose, images.inspection]
  },
  {
    slug: "smoke",
    label: "Smoke",
    title: "Smoke Cleaning, Odor Control, and Restoration Planning",
    eyebrow: "Smoke Services",
    description:
      "Explore smoke cleaning, pack-out services, hotel support, and property restoration planning after smoke odor, soot residue, or fire-related smoke spread.",
    image: specialtyImages.fireAftermath,
    overview:
      "Smoke can move through rooms, vents, contents, and porous materials. This section helps visitors understand smoke cleaning, odor control, contents support, and restoration planning after smoke exposure.",
    highlights: [
      "Smoke odor and residue cleaning guidance",
      "Soot and HVAC spread awareness",
      "Contents and pack-out planning",
      "Hotel and managed-property support",
      "Property restoration after smoke cleanup",
      "Photo intake for faster context"
    ],
    serviceHrefs: serviceNavGroups[2].items.map((item) => item.href),
    gallery: [specialtyImages.fireAftermath, specialtyImages.fireResponse, specialtyImages.restoredInterior]
  },
  {
    slug: "fire",
    label: "Fire",
    title: "Fire Damage Cleanup, Fire Cleaning, and Repair Coordination",
    eyebrow: "Fire Services",
    description:
      "Explore fire damage cleanup, fire cleaning, soot and smoke cleanup, pack-out services, hotel restoration support, and property restoration after fire events.",
    image: specialtyImages.fireResponse,
    overview:
      "Fire damage can include soot, smoke odor, charred materials, water from suppression, debris, and affected contents. This section connects visitors to the right fire-related page and booking path.",
    highlights: [
      "Fire damage cleanup and stabilization",
      "Soot, debris, and smoke residue planning",
      "Pack-out services for affected contents",
      "Hotel and commercial fire response support",
      "Property restoration and repair coordination",
      "Emergency call and photo-supported booking"
    ],
    serviceHrefs: serviceNavGroups[3].items.map((item) => item.href),
    gallery: [specialtyImages.fireResponse, specialtyImages.fireAftermath, images.repairs]
  },
  {
    slug: "other-services",
    label: "Other Services",
    title: "Commercial Restoration and Specialty Property Support",
    eyebrow: "Other Services",
    description:
      "Explore commercial restoration services for offices, hotels, retail spaces, multifamily properties, facilities, and managed commercial properties.",
    image: images.commercial,
    overview:
      "Commercial restoration needs clear communication, documentation, operational planning, and a fast path to cleanup. This section focuses on business and property-focused restoration support.",
    highlights: [
      "Commercial restoration intake",
      "Office, retail, hotel, and multifamily support",
      "Water, fire, mold, storm, and emergency cleanup planning",
      "Stakeholder and property manager communication",
      "Photo documentation and repair coordination",
      "Free inspection request pathway"
    ],
    serviceHrefs: serviceNavGroups[4].items.map((item) => item.href),
    gallery: [images.commercial, specialtyImages.roofRepair, specialtyImages.restoredInterior]
  }
];

export const whyChooseUs = [
  "24/7 emergency availability",
  "Residential & commercial",
  "Fast response",
  "Professional equipment",
  "Clear communication",
  "Free estimates"
];

export const processSteps = [
  {
    title: "Emergency Call",
    text: "A fast intake captures damage type, urgency, property details, and the safest next step."
  },
  {
    title: "Damage Inspection",
    text: "Technicians assess visible and hidden damage, document conditions, and identify priorities."
  },
  {
    title: "Cleanup & Restoration Plan",
    text: "You receive a clear scope for stabilization, cleanup, drying, remediation, and repairs."
  },
  {
    title: "Final Walkthrough",
    text: "The project closes with quality checks, documentation, and prevention recommendations."
  }
];

export const trustBadges = [
  "24/7 Emergency",
  "Free Estimates",
  "Residential",
  "Commercial",
  "Fast Response",
  "Professional Equipment"
];

export const galleryCategories = [
  "All",
  "Water Damage",
  "Fire Cleanup",
  "Mold",
  "Storm Damage",
  "Commercial"
];

export const galleryImages = [
  {
    title: "Water Damage Safety Setup",
    category: "Water Damage",
    src: "https://images.unsplash.com/photo-1615003382357-4cb74b16a7ab?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Wet Floor Cleanup Detail",
    category: "Water Damage",
    src: "https://images.unsplash.com/photo-1765970101654-337b573142fb?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Fire Response Planning",
    category: "Fire Cleanup",
    src: "https://images.unsplash.com/photo-1561439740-e8863909de77?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Fire Damage Aftermath",
    category: "Fire Cleanup",
    src: "https://images.unsplash.com/photo-1762855228196-32b7c4e46ff0?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Mold-Damaged Wall Area",
    category: "Mold",
    src: "https://images.unsplash.com/photo-1724230442705-646dc7c86943?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Mold Damage Close-Up",
    category: "Mold",
    src: "https://images.unsplash.com/photo-1683468820750-b1fd50978474?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Storm-Damaged Home",
    category: "Storm Damage",
    src: "https://images.unsplash.com/photo-1695605347102-2cc806d3cabf?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Storm Debris Cleanup",
    category: "Storm Damage",
    src: "https://images.unsplash.com/photo-1768293528649-531aad843525?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Roof Repair Coordination",
    category: "Storm Damage",
    src: "https://images.unsplash.com/photo-1760331840361-d751cfc1becf?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Commercial Facility Response",
    category: "Commercial",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
  }
];

export const activityFeed = [
  "New emergency estimate request received",
  "Water damage inspection scheduled",
  "Technician dispatched",
  "Customer uploaded damage photos",
  "Mold remediation quote prepared",
  "Follow-up reminder sent"
];

export const serviceAreas = [
  "Orlando",
  "Winter Park",
  "East Orlando",
  "Kissimmee",
  "Lake Mary",
  "Sanford",
  "Altamonte Springs",
  "Clermont",
  "Central Florida"
];

export const testimonials = [
  {
    quote:
      "Very knowledgeable and cost-effective. They understand the importance of customer service and delivered A1 service.",
    name: "Prentice Quince",
    context: "Mold remediation"
  },
  {
    quote:
      "Jason and his team walked us through every step, answered our questions, and provided a full report with prevention steps.",
    name: "Daniela Sanchez",
    context: "Mold remediation report"
  },
  {
    quote:
      "Response was quick, and the team was helpful and caring while drying out the house after a leak.",
    name: "Iris Munoz",
    context: "Water leak cleanup"
  },
  {
    quote:
      "From start to finish, Superior and their referrals were 5 star with their service and fair pricing.",
    name: "Gary J",
    context: "Mold inspection"
  },
  {
    quote:
      "Jason explained many things that I did not know about mold. The team that helped me was wonderful.",
    name: "Anna",
    context: "Mold concern"
  },
  {
    quote:
      "The owner provided great customer service and correspondence throughout the process.",
    name: "Cheyanne M",
    context: "Mitigation work"
  },
  {
    quote:
      "Jason and Dale were very knowledgeable and made the entire process so easy for us.",
    name: "Jeremy",
    context: "Restoration support"
  },
  {
    quote:
      "They were knowledgeable, honest, responsive, and answered every question throughout the mold remediation process.",
    name: "Nicole O",
    context: "Mold remediation"
  }
];

export const globalFaqs = [
  {
    question: "What should I do first after water damage?",
    answer:
      "If it is safe, stop the water source, avoid electrical hazards, document visible damage, and request professional restoration help quickly."
  },
  {
    question: "Do you offer emergency service?",
    answer:
      "Yes. Superior Restoration Services promotes 24/7 emergency restoration help with prominent call, estimate, and booking intake paths."
  },
  {
    question: "Can mold come back after remediation?",
    answer:
      "Mold can return if the moisture source is not corrected. Professional remediation should include cleanup and moisture prevention guidance."
  },
  {
    question: "How long does restoration take?",
    answer:
      "Timelines depend on damage type, severity, materials, and drying needs. A free inspection helps define the expected scope."
  },
  {
    question: "Do you work with insurance?",
    answer:
      "Restoration teams can often provide documentation, photos, and scopes that help customers communicate with their insurance carrier."
  },
  {
    question: "Do you handle commercial properties?",
    answer:
      "Yes. Superior Restoration Services supports residential and commercial restoration needs, including hotels, property managers, and business facilities."
  },
  {
    question: "Are estimates free?",
    answer:
      "The site is structured around free estimate requests. Final policy language can be customized for the real business."
  }
];

const restorationTopics = [
  "water damage",
  "fire damage",
  "smoke odor",
  "mold",
  "storm damage",
  "flooding",
  "burst pipe",
  "roof leak",
  "commercial restoration",
  "emergency cleanup",
  "drying equipment",
  "dehumidifier",
  "insurance",
  "estimate",
  "inspection",
  "photos",
  "timeline",
  "availability",
  "cleanup",
  "repair"
];

export const chatbotKnowledge = Array.from({ length: 100 }, (_, index) => {
  const topic = restorationTopics[index % restorationTopics.length];
  return {
    question: `Question ${index + 1}: What should I know about ${topic}?`,
    answer:
      "This assistant can explain general restoration next steps, recommend a free inspection, and collect contact details for urgent follow-up. For emergencies, call directly."
  };
});

export const bookingServices = [
  ...services.map((service) => service.title),
  "General Inspection / Estimate"
];

export const bookingUrgencies = [
  "Emergency / Need help now",
  "Within 24 hours",
  "This week",
  "Planning ahead"
];

export const appointmentSlots = [
  "8:00 AM",
  "9:30 AM",
  "11:00 AM",
  "1:00 PM",
  "2:30 PM",
  "4:00 PM"
];

export const contactMethods = ["Call", "Text", "Email"];
