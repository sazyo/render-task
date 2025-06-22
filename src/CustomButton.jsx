import React from "react";

export default function CustomButton({ children, onClick, variant = "primary", type = "button" }) {
    return (
        <button type={type} onClick={onClick} className={`btn btn-${variant} me-2`}>
            {children}
        </button>
    );
}
