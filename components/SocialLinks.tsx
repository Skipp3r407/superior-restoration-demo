import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa6";
import { socialLinks } from "@/lib/site";

const socialIconMap = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  LinkedIn: FaLinkedinIn
};

export function SocialLinks({
  variant = "dark"
}: {
  variant?: "dark" | "light";
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link) => {
        const SocialIcon =
          socialIconMap[link.label as keyof typeof socialIconMap];

        return (
          <a
            aria-label={`Visit Superior Restoration Services on ${link.label}`}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:-translate-y-0.5 ${
              variant === "dark"
                ? "bg-white/10 text-white hover:bg-rescue-500"
                : "bg-navy-50 text-navy-950 hover:bg-rescue-500 hover:text-white"
            }`}
            href={link.href}
            key={link.label}
            rel="noreferrer"
            target="_blank"
          >
            <SocialIcon aria-hidden="true" className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
