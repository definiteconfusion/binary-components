import React from 'react';
import './Buttons.sass'

// Takes in x% of 100 and outputs to x% of maxWidth
function paddingCalc(maxWidth, widthType){
    return(
        String(((Number(widthType.replace("%", "")) / 100) * 6).toFixed(1)) + "rem"
    )
}

const RectPrimary = ({ children, widthType="100%" }) =>{

    return(
        <div
            className="classic-button bg-black br-1 cr-pnt"
            style={{
                paddingInline: paddingCalc(6, widthType)
            }}
        >
            {children}
        </div>
    )
}

const RectSecondary = ({ children, widthType="100%" }) =>{

    return(
        <div
            className="classic-button bg-white br-1 cr-pnt"
            style={{
                paddingInline: paddingCalc(6, widthType)
            }}
        >
            {children}
        </div>
    )
}

export { RectPrimary, RectSecondary }