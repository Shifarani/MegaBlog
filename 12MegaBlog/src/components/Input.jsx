import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()

    return (
        <div className="w-full">
            {label && (
                <label
                    className="inline-block mb-1 pl-1 text-gray-700"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}

            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none border border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition duration-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input