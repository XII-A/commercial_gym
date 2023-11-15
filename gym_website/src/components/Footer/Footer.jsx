import React from "react";
import Image from "next/image";
import InstagramIcon from "../icons/instagram.svg";
import TwitterIcon from "../icons/twitter.svg";
import GmailIcon from "../icons/gmail.svg";
import Logo from "../icons/logo.svg";

const Footer = () => {
  return (
    <div
      className="flex justify-between items-center px-32 py-4 text-white"
      id="footer"
    >
      <div className="flex flex-col items-start w-1/4">
        <div className="flex justify-start items-center gap-3">
          <div>
            <Image src={Logo} style={{ color: "white" }}></Image>
          </div>
          <div>Gym Center</div>
        </div>
        <div className="text-xs">
          Highlight benefits of each exercise, both physical and mental.
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div class="flex">
          <div class="flex flex-col items-start mr-4">
            <div class="flex items-center mb-2">
              <span class="mr-2"></span>
              <div>Sitemap</div>
            </div>
            <div class="flex items-center mb-2 text-xs">
              <span class="mr-2"></span>
              <div>About Us</div>
            </div>
            <div class="flex items-center mb-2 text-xs">
              <span class="mr-2"></span>
              <div>News & Blog</div>
            </div>
            <div class="flex items-center mb-2 text-xs">
              <span class="mr-2"></span>
              <div>Help Center</div>
            </div>
          </div>

          <div class="flex flex-col items-start mr-4">
            <div class="flex items-center mb-2">
              <span class="mr-2"></span>
              <div>Support</div>
            </div>

            <div class="flex items-center mb-2 text-xs">
              <span class="mr-2"></span>
              <div>FAQ</div>
            </div>

            <div class="flex items-center mb-2 text-xs">
              <span class="mr-2"></span>
              <div class="flex flex-col items-center">
                <a href="mailto:ameenok4sh@gmail.com">Contact Us:</a>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center">
            <div>Social Media</div>
            <div className="flex items-center  mx-14">
              <a href="https://www.instagram.com/instagram">
                <Image src={InstagramIcon} style={{ color: "white" }} />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://twitter.com/x">
                <Image src={TwitterIcon} style={{ color: "white" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
