import React from 'react';
import { useState } from "react";
import './Inputs.sass'

const CheckBox = ({ currentState=false }) => {
    const [isActive, setIsActive] = useState(currentState)

    const handleChange = () => {
        setIsActive(!isActive)
        currentState = isActive
    }
    let svgHeight = 11
    return(
        <div className="checkbox-container" style={{ position: 'relative' }}>
            <input
            className={isActive ? "checkbox-active" : "checkbox"}
            type="checkbox"
            checked={isActive}
            onChange={handleChange}
            name=""
            id="" />
            {isActive && (
            <svg
                className="checkmark-checkpath"
                style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none'
                }}
                width={svgHeight * (43 / 32)}
                height={svgHeight}
                viewBox="0 0 43 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 15.5L6.5 9L17 19.5L36.5 0L43 6L17 32L0 15.5Z" fill="white"/>
            </svg>
            )}
        </div>

    )
}

export { CheckBox }