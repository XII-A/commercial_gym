import React from "react";

import ContainedButton from "./ContainedButton";
import OutlinedButton from "./OutlinedButton";

function Navbar() {
  return (
    <div className={`flex justify-between items-center px-32 py-4 `}>
      <div className={`text-white `}>logopholder</div>
      <div className={`flex items-center `}>
        <div className={`flex items-center`}>
          <a
            href="#home"
            className={`text-white mx-2 no-underline  transition-all hover:text-primary-default`}
          >
            Home
          </a>
          <a
            href="#program"
            className={`text-white mx-2 no-underline  transition-all hover:text-primary-default`}
          >
            Program
          </a>
          <a
            href="#pricing"
            className={`text-white mx-2 no-underline  transition-all hover:text-primary-default`}
          >
            Pricing
          </a>
          <a
            href="#footer"
            className={`text-white mx-2 no-underline  transition-all hover:text-primary-default`}
          >
            Community
          </a>
          <a
            href="#footer"
            className={`text-white mx-2 no-underline  transition-all hover:text-primary-default`}
          >
            About Us
          </a>
        </div>
        <div className="flex items-center ms-1.5">
          <OutlinedButton label={"Login"} extraClassNames={"mx-1"} />
          <ContainedButton label={"Register"} extraClassNames={"mx-1"} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
