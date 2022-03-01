import React from "react";
import { Button } from "../Button";
import { GrMail } from "react-icons/gr";
import { BiChevronDown } from "react-icons/bi";
import {
  AiOutlineCloudDownload,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { SocialLink } from "../SocialLink";
import avatar from "../../../public/assets/images/avatar.png";
import "./Header.css";

const links = [
  {
    href: "https://www.linkedin.com/in/paulo-abreu-santana/",
    icon: <AiFillLinkedin size={30} />,
  },
  {
    href: "https://github.com/paulozy",
    icon: <AiFillGithub size={30} />,
  },
  {
    href: "https://www.instagram.com/opaulinhof/",
    icon: <AiOutlineInstagram size={30} />,
  },
];

export function Header() {
  return (
    <section>
      <header>
        <div className="me-illustration">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="biography">
          <div className="name-city">
            <span>Paulo Abreu</span>
            <span>Barueri, Brasil</span>
          </div>
          <div className="description">
            <p>👨🏻‍💻 Back-end developer⚡🚀🛠️</p>
          </div>
          <div className="socials">
            {links.map(({ href, icon }, index) => (
              <SocialLink key={index} href={href}>
                {icon}
              </SocialLink>
            ))}
          </div>
          <div className="bio-buttons">
            <a href={links[0].href} target="_blank">
              <Button content="Hire Me">
                <GrMail size={24} />
              </Button>
            </a>
            <a
              href="./public/assets/docs/paulo-abreu.pdf"
              download="paulo-abreu-cv"
            >
              <Button content="Download CV">
                <AiOutlineCloudDownload size={24} />
              </Button>
            </a>
          </div>
        </div>
      </header>
      <BiChevronDown size={30} className="chevron" />
    </section>
  );
}
