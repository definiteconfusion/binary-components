import React from 'react';
import { useState, useEffect } from "react";
import './Inputs.sass'

// Takes in x% of 100 and outputs to x% of maxWidth
function paddingCalc(maxWidth:number, widthType:string = "100%"){
    let algoWid = String(((Number(widthType.replace("%", "")) / 40) * maxWidth).toFixed(1)) + "rem"
    return(
        algoWid
    )
}

const CheckBox = ({ initState: initState = false, onChange }) => {
    const [isActive, setIsActive] = useState(initState)
    useEffect(() => {
        setIsActive(initState)
    }, [initState])

    const handleChange = () => {
        const newState = !isActive
        setIsActive(newState)
        onChange?.(newState)
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

const Input = ({ type, placeholder, value, onChange, widthType, style }) => {
    return(
        <input
            className="input-box br-1"
            style={{
                width: paddingCalc(6, widthType),
                ... style
            }}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export { CheckBox, Input }