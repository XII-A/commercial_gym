import React from "react";

const SectionThree = () => {
  return (
    <div className="px-32 py-4 w-full  mt-20" id="community">
      <div className="w-full bg-[#0D0D0D] text-white flex flex-row justify-between items-center  font-urban rounded-xl p-10">
        <div className="text-4xl font-bold w-3/4  ">
          Enhance user experience with healthy nutrition tips, support
          resources, and social elements.
        </div>
        <div>
          <button
            className={`bg-primary-default transition-all hover:bg-primary-dark text-white px-4 py-1.5 rounded-lg border border-primary-default hover:border-primary-dark `}
          >
            Join us
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
