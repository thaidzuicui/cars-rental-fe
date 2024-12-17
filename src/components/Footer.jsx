import React from "react";
import { useNavigate } from "react-router-dom";
import { Separator } from "./ui/separator";

const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Business Relation", url: "/" },
    ],
  },
  {
    title: "Community",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];
const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="flex w-full bg-white dark:bg-gray900">
      <div className="flex w-full flex-col bg-white p-6 dark:bg-gray900 xl:px-[3.75rem] xl:pb-[3.75rem] xl:pt-[5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col justify-start gap-4">
            <p className="text-[1.5rem] font-semibold not-italic leading-[1.8rem] text-blue500 md:text-[2rem] md:leading-[2.4rem] md:tracking-[0.0625rem]">
              TRANSFORM
            </p>
            <p className="text-[0.75rem] font-medium not-italic leading-6 tracking-[-0.0075rem] text-gray400 dark:text-white200 md:text-[1rem] md:leading-8 md:tracking-[-0.01rem]">
              Our vision is to provide convenience <br />
              and help increase your sales business.
            </p>
          </div>

          <div className="flex flex-col gap-12 sm:flex-row md:gap-6 lg:mr-[3.75rem] lg:gap-[3.75rem]">
            <div className="mt-12 flex flex-row justify-between sm:gap-12 md:mt-0 md:gap-6 lg:gap-[3.75rem]">
              {footerLinks.slice(0, 2).map((item) => (
                <div key={item.title}>
                  <h3 className="text-[1.25rem] font-semibold not-italic leading-6 text-gray800 dark:text-white100">
                    {item.title}
                  </h3>
                  <div className="mt-5 flex flex-col gap-4 sm:mt-6">
                    {item.links.map((link) => (
                      <div
                        className="text-[1rem] font-medium not-italic leading-[1.2rem] text-gray400 hover:text-gray800 dark:text-white200 dark:hover:text-blue500 cursor-pointer"
                        onClick={() => navigate(link.url)}
                        key={link.title}
                      >
                        {link.title}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="sm:mt-12 md:mt-0">
              <h3 className="text-[1.25rem] font-semibold not-italic leading-6 text-gray800 dark:text-white100">
                {footerLinks[2].title}
              </h3>
              <div className="mt-5 flex flex-col gap-4 sm:mt-6">
                {footerLinks[2].links.map((link) => (
                  <div
                    className="font-medium not-italic leading-[1.2rem] text-gray400 last:text-[1rem] hover:text-gray800 dark:text-white200 dark:hover:text-blue500 cursor-pointer"
                    onClick={() => navigate(link.url)}
                    key={link.title}
                  >
                    {link.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Separator className="hidden sm:mt-12 sm:block sm:bg-blue50 dark:sm:bg-gray850 md:mt-[3.75rem]" />

        <div className="mt-12 flex flex-col text-[0.75rem] font-semibold not-italic leading-6 tracking-[-0.0075rem] text-gray800 dark:text-white100 sm:flex-row-reverse sm:justify-between md:text-[1rem] md:leading-8 md:tracking-[-0.01rem]">
          <div className="mb-8 flex flex-row justify-between sm:gap-[3.75rem] md:mb-0 md:text-right cursor-pointer">
            <div onClick={() => navigate("/")}>Privacy & Policy</div>
            <div onClick={() => navigate("/")}>Terms & Condition</div>
          </div>
          <p>©{new Date().getFullYear()} TRANSFORM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
