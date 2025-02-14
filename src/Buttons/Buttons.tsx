import React from 'react';
import './Buttons.sass'

// Takes in x% of 100 and outputs to x% of maxWidth
function paddingCalc(maxWidth:number, widthType:string){
    return(
        String(((Number(widthType.replace("%", "")) / 100) * maxWidth).toFixed(1)) + "rem"
    )
}

const RectButton = ({ children, onClick, onHover, className, style, role, widthType="100%" }) =>{
    // Gets values for role to determine foreground and background color classes
    let backing = role === "primary" ? "bg-black" : "bg-white"; let fore = role === "primary" ? "fg-white" : "fg-black"
    return(
        <div
            className={`classic-button ${backing} ${fore} br-1 cr-pnt ${className}`}
            style={{
                paddingInline: paddingCalc(6, widthType),... style
            }}
            onClick={onClick}
            onDragOver={onHover}
        >
            {children}
        </div>
    )
}

const ButtonGroup = ({ children, seperation="0rem", direction }) => {
    let marginDir = direction === "row" ? "marginInline" : "marginBlock"
    return(
        <div
            style={{
                flexDirection: direction,
                display: 'flex'
            }}
        >
            {React.Children.map(children, (child: any) => (
                <div
                    style={{
                        [marginDir]: String((Number(seperation.replace("rem", "")) / 2).toFixed(2)) + "rem"
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    )
}

export { RectButton, ButtonGroup }