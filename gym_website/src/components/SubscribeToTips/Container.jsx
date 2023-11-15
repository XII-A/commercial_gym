import React from "react";
import Button from "./Button";
const Container = () => {
  return (
    <div div className="bg-primary-default w-full px-32 h-64 rounded-xl">
      <div className="flex flex-col items-center py-8 text-white">

        <div className="text-xl font-bold mb-4">
          Subscribe to Our Fitness Tips
        </div>

        <div className="whitespace-pre-line w-1/2 md:w-3/4 lg:w-3/4 text-center mb-4">
          Clearly communicate the benefits of subscribing, such as exclusive
          content and breaking news.
        </div>

        <div className="flex bg-white w-1/2 md:w-3/4 lg:w-3/4  h-16 rounded-lg">
          <div className="flex-grow ml-6">
            <input
              className="bg-white w-full h-16 text-black text-start rounded-lg outline-none"
              placeholder="Enter your email."
            />
          </div>
  
          <div className="flex text-center items-center justify-center mr-6">
            <Button label="Subscribe" extraClassNames="ml-4" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Container;
