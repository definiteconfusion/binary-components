import React from "react";
import "./Text.sass"

const A = ({ children, href="#" }) => {
    return <a 
    className = "link"
    href={href}>
        {children}
    </a>
}

const Text = ({children, className, size}) => {
    return <p className={`${className} ${size}`}>{children}</p>
}

export { A, Text }