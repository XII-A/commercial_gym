import React from "react";

function Button({ label, extraClassNames, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary-default transition-all hover:bg-primary-dark text-white px-4 py-1.5 rounded-lg border border-primary-default hover:border-primary-dark ${extraClassNames}`}
    >
      {label}
    </button>
  );
}

export default Button;
