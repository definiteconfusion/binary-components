import React from 'react';
import './App.sass';
import Styles from './Styles/Styles.ts';
import { RectButton, ButtonGroup } from './Buttons/Buttons.tsx'
import { CheckBox } from './Inputs/Inputs.tsx'

const App = () =>{
    return (
        <>
            <RectButton
                role="primary"
                widthType="200"
                onClick={()=>{console.log("Hello World")}}
                onHover={()=>{console.log("Hovered")}}
            >
                <p>Hello World</p>
            </RectButton>
        </>
    );
}

export default App;