import { Icon } from "@/components/Icons";
import { Stagger, StaggerItem } from "@/components/Motion";
import { trustBadges } from "@/lib/site";

const iconNames = ["clock", "check", "home", "building", "shield", "tools"] as const;

export function TrustBadges() {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {trustBadges.map((badge, index) => (
        <StaggerItem key={badge}>
          <div className="group glass-card flex h-full items-center gap-3 rounded-3xl p-5 transition duration-300 hover:-translate-y-2 hover:scale-[1.04] hover:bg-rescue-500">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy-50 text-rescue-500 transition group-hover:bg-white group-hover:text-rescue-600">
              <Icon name={iconNames[index]} className="h-5 w-5" />
            </span>
            <span className="font-black text-navy-950 transition group-hover:text-white">{badge}</span>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
