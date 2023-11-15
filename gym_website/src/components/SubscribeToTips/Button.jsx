import React from "react";

function Button({ label, extraClassNames, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-black transition-all hover:bg-gray-800 text-white px-4 py-1.5 rounded-lg border border-primary-default hover:border-black ${extraClassNames}`}
    >
      {label}
    </button>
  );
}

export default Button;