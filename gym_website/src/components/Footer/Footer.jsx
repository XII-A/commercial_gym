import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-32 py-4 text-white">
      <div className="flex flex-col items-start w-1/4">
        <div className="flex justify-start items-center gap-3">
          <div>Logo</div>
          <div>Logo</div>
        </div>
        <div className="text-sm">
          Highlight benefits of each exercise, both physical and mental
        </div>
      </div>

      <div className="flex items-center justify-between ">
        <div className="flex flex-col items-center mx-14">
          <div>text</div>
          <div>text</div>
          <div>text</div>
          <div>text</div>
        </div>
        <div className="flex flex-col items-center mx-14" id="footer">
          <div>text</div>
          <div>text</div>
          <div>text</div>
          <div>text</div>
        </div>
        <div className="flex flex-col items-center mx-14">
          <div>text</div>
          <div>text</div>
          <div>text</div>
          <div>text</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
