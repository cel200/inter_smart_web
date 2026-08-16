import Image from "next/image";

const SERVICES = [
  "Hyperparameter model tuning",
  "PoC of AI Solutions",
  "AI Model Optimization",
  "AI Consultation",
];

const PAGES = ["Services", "Technology", "Portfolio", "virtual team", "Contact us"];

const SOCIALS = [
  { icon: "/icons/fb.svg", label: "Facebook", href: "#" },
  { icon: "/icons/insta.svg", label: "Instagram", href: "#" },
  { icon: "/icons/linkedIn.svg", label: "LinkedIn", href: "#" },
  { icon: "/icons/twitter.svg", label: "Twitter", href: "#" },
];

const POLICIES = ["Privacy Policy", "GDPR Policy", "Terms of Service"];

export default function FooterSection() {
  return (
    <footer className="bg-[#182434] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Services */}
          <div>
            <h3 className="text-[20px] font-normal">Services</h3>
            <ul className="mt-6 space-y-4">
              {SERVICES.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-poppins text-[20px] font-normal leading-[32px] tracking-[-0.3px]">Pages</h3>
            <ul className="mt-6 space-y-4">
              {PAGES.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay connected */}
          <div>
            <h3 className="text-[20px] font-normal">Stay connected</h3>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg transition-opacity hover:opacity-75"
                >
                  <Image src={icon} alt={label} width={28} height={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-[#F1F1F1] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-poppins font-normal leading-[28px] tracking-[0px]">© 2023 Intersmart Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2">
            {POLICIES.map((policy, i) => (
              <span key={policy} className="flex items-center gap-2">
                <a href="#" className="transition-colors text-white font-poppins text-sm font-normal leading-[28px] tracking-[0px]">
                  {policy}
                </a> 
                {i < POLICIES.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}