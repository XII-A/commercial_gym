import React from "react";

function Button({ label, extraClassNames, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent transition-all hover:bg-primary-default text-sm text-white font-semibold hover:text-white  px-4 py-1.5 rounded-lg border border-white hover:border-primary-default ${extraClassNames}`}
    >
      {label}
    </button>
  );
}

export default Button;
