const footerLinks = [
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Careers", href: "#" },
];

export const FooterComp = () => {
  return (
    <div className="page-padding-x py-15 bg-brand-primary text-white">
      <div className="flex-col gap-y-15 lg:flex-row flex justify-between">
        <div className="flex flex-col max-w-150">
          <img src="/logo2.png" className="w-60" alt="TikiAnaly Logo" />
          <p>
            TikiAnaly is reimagining how grassroots and elite sports communities
            connect, analyze, and celebrate every play.
          </p>
          <div className="flex gap-7 mt-5">
            {/* Facebook SVG */}
            <a
              href="https://www.facebook.com/share/1CU4SPDQon/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                fill="currentColor"
                className="h-8 w-8"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23c12.683,0,23-10.317,23-23S37.683,2,25,2z M32,16h-3.29 C26.772,16,26,16.455,26,17.806V21h6l-1,5h-5v13h-6V26h-3v-5h3v-2.774C20,14.001,21.686,11,26.581,11C29.203,11,32,12,32,12V16z"></path>
              </svg>
            </a>
            {/* Instagram SVG */}
            <a
              href="https://www.instagram.com/tikianaly2025?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                fill="currentColor"
                className="h-8 w-8"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
              </svg>
            </a>
            {/* X (Twitter) SVG */}
            <a
              href="https://x.com/TikiAnaly"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                fill="currentColor"
                className="h-8 w-8"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="links mr-10 sz-4">
          <div className="grid grid-cols-2 gap-x-30 sm:grid-cols-2 gap-4">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-brand-secondary text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center mb-8 mt-10">
        Copyright ©2025 Tikianaly All rights reserved
      </p>
    </div>
  );
};

export default FooterComp;
