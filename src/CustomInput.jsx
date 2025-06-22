import React from "react";

export default function CustomInput({ label, name, type = "text", id, value, onChange, checked }) {
    if (type === "checkbox") {
        return (
            <div className="form-check mb-3">
                <input
                    id={id}
                    name={name}
                    type={type}
                    checked={checked}
                    onChange={onChange}
                    className="form-check-input"
                />
                <label htmlFor={id} className="form-check-label">
                    {label}
                </label>
            </div>
        );
    }

    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className="form-control"
            />
        </div>
    );
}
