import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-pink-500",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition duration-200 ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}