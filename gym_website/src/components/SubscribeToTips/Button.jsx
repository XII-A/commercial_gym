import React from "react";

function Button({ label, extraClassNames, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-black transition-all  text-white px-4 py-1.5 rounded-lg border border-transparent hover:scale-125  `}
    >
      {label}
    </button>
  );
}

export default Button;
