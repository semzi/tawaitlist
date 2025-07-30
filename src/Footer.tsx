// import  footerLinks  from '/data/footerLink'
const footerLinks = [
  { label: "About Us", href: "#" }
];

export const FooterComp = () => {
  return (
    <div className="page-padding-x py-15 bg-brand-primary  text-white">
      <div className="flex-col gap-y-15 lg:flex-row flex justify-between ">
        <div
          className="flex flex-col gap-7
         max-w-150"
        >
          <h1 className="text-xl md:text-2xl font-bold">TikiAnaly</h1>
          <p className="">
            TikiAnaly is transforming how fans, scouts, analysts, and athletes
            interact with sports data from the grassroots to the global stage.
            Be among the first to experience AI-powered insights, live local
            coverage, and a platform built to celebrate every sport, every club,
            everywhere.
          </p>
            <div className="flex gap-7">
            {/* Facebook SVG */}
            <svg className="h-8" viewBox="0 0 24 24" fill="currentColor" aria-label="Facebook"></svg>
          </div>
        </div>
        <div className="links sz-4">
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
      <p className="text-center mb-8 mt-18">
        Copyright ©2025 Tikianaly / All rights reserved
      </p>
    </div>
  );
};
export default FooterComp;
