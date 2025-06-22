import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

export default function AddUser() {
    return (
        <form className="mb-4">
            <CustomInput
                label="Name"
                name="name"
                id="name"
                type="text"


            />
            <CustomInput
                label="Email"
                name="email"
                id="email"
                type="email"


            />
            <CustomInput
                label="Age"
                name="age"
                id="age"
                type="number"


            />
            <CustomInput
                label="Active Status"
                name="status"
                id="status"
                type="checkbox"

            />
            <CustomButton type="submit" variant="success">
                Submit
            </CustomButton>
        </form>
    );
}
