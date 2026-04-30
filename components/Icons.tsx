import {
  Biohazard,
  Building2,
  Check,
  Clock,
  CloudLightning,
  Droplets,
  Flame,
  Home,
  Phone,
  ShieldCheck,
  Siren,
  Sparkles,
  ToolCase,
  type LucideIcon
} from "lucide-react";

const iconMap = {
  water: Droplets,
  fire: Flame,
  mold: Biohazard,
  storm: CloudLightning,
  clock: Clock,
  shield: ShieldCheck,
  tools: ToolCase,
  home: Home,
  building: Building2,
  phone: Phone,
  check: Check,
  Droplets,
  Flame,
  Biohazard,
  CloudLightning,
  Siren,
  Building2,
  Sparkles
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function Icon({
  name,
  className = "h-6 w-6"
}: {
  name: IconName;
  className?: string;
}) {
  const Component = iconMap[name];

  return <Component aria-hidden="true" className={className} strokeWidth={1.8} />;
}
