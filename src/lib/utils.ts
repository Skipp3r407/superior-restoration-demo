export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

export const phoneNumber = "321-588-1156";
export const phoneHref = "tel:3215881156";

export const services = [
  {
    title: "Water Damage",
    slug: "water-damage",
    text: "Rapid extraction, drying, moisture mapping, and restoration planning for leaks, floods, and pipe breaks.",
    image:
      "https://images.unsplash.com/photo-1581579185169-243c50b2573e?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Fire Damage",
    slug: "fire-damage",
    text: "Soot cleanup, smoke odor support, debris removal planning, and repair coordination after fire events.",
    image:
      "https://images.unsplash.com/photo-1561439740-e8863909de77?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Mold Remediation",
    slug: "mold-remediation",
    text: "Containment planning, affected-material cleanup guidance, filtration, and moisture prevention support.",
    image:
      "https://images.unsplash.com/photo-1724230442705-646dc7c86943?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Storm Damage",
    slug: "storm-damage",
    text: "Storm water intrusion, roof leak response, debris cleanup planning, and emergency stabilization.",
    image:
      "https://images.unsplash.com/photo-1695605347102-2cc806d3cabf?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Emergency Cleanup",
    slug: "emergency-cleanup",
    text: "Fast help for urgent property damage, odors, unsafe spaces, and sudden cleanup needs.",
    image:
      "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Commercial Restoration",
    slug: "commercial-restoration",
    text: "Restoration support for offices, retail, hotels, multifamily properties, and facility managers.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
  }
];

export const processSteps = [
  "Request help",
  "Inspect damage",
  "Stabilize and restore",
  "Final walkthrough"
];
