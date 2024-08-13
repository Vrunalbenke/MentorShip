import Image from "next/image";
import YMPMatch2 from "../../assets/Group 4title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import yt from "../../assets/yt.png";
import insta from "../../assets/insta.png";
import linkedin from "../../assets/linkedin.png";
import tiktok from "../../assets/tiktok.png";
import Link from "next/link";

function Footer() {
  const footerSections = [
    {
      title: "About Us",
      items: ["Our Team", "Become a mentor", "Careers", "Sponsors", "Donate"],
    },
    {
      title: "Resources",
      items: ["About", "Pricing", "Blog"],
      route: ["about", "pricing", "blog"],
    },
    {
      title: "Legal",
      items: ["Terms of Service", "Privacy Policy"],
    },
    {
      title: "Products",
      items: [
        "Mentor browsing",
        "AI mentor matching",
        "Opportunities",
        "Student Forum",
      ],
    },
  ];

  const socialIcons = [
    { name: "Instagram", src: insta.src, icon: faInstagram },
    { name: "LinkedIn", src: linkedin.src, icon: faLinkedin },
    { name: "YouTube", src: yt.src, icon: faYoutube },
    { name: "TikTok", src: tiktok.src, icon: faTiktok },
  ];

  return (
    <footer className=" bg-black text-white py-8 px-4 border-t border-gray-500">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        <div className="flex flex-col justify-start items-center space-y-2 ">
          <div className="flex items-center mb-4">
            <div className="mx-2">
              <Image
                src={YMPMatch2}
                alt="YMPMatch"
                width={140}
                height={110}
                className="cursor-pointer"
              />
            </div>
            <span className="bg-blue-600 text-xs px-2 py-1 rounded-xl">
              BETA
            </span>
          </div>
          <div className="flex space-x-6">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={`#${social.name.toLowerCase()}`}
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">{social.name}</span>
                <Image
                  src={social.src}
                  width={25}
                  height={25}
                  alt={social.name}
                />
              </a>
            ))}
          </div>
        </div>
        {footerSections.map((section) => (
          <div key={section.title} className="w-1/2 md:w-auto mb-6">
            <h3 className="font-semibold mb-2">{section.title}</h3>
            <ul>
              {section?.route ? (
                <>
                  {section.route.map((item) => (
                    <li key={item} className="mb-1">
                      <Link
                        href={`/${item}`}
                        className="text-gray-300 hover:text-white text-sm"
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </Link>
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {section.items.map((item) => (
                    <li key={item} className="mb-1">
                      <a
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-300 hover:text-white text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
