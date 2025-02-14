import React from 'react';
import './App.sass';
import Styles from './Styles/Styles.ts';
import { RectButton, ButtonGroup } from './Buttons/Buttons.tsx'
import { CheckBox } from './Inputs/Inputs.tsx'

const App = () =>{
    return (
        <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <CheckBox />
            <h3
                style={{
                    marginLeft: "1rem",
                    lineHeight: "0"
                }}
            >Select</h3>
        </div>
        </>
    );
}

export default App;