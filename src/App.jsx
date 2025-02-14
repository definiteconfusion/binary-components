import React from 'react';
import './App.sass';
import Styles from './Styles/Styles.js';
import { RectPrimary, RectSecondary } from './Buttons/Buttons.jsx'

const App = () =>{
    return (
        <>
            <RectPrimary
                widthType="75%"
            >
                <h3
                    style={{
                        color: 'white',
                        lineHeight: '0'
                    }}
                >Add to Cart</h3>
            </RectPrimary>
            <RectSecondary
                widthType="75%"
            >
                <h3
                    style={{
                        color: 'black',
                        lineHeight: '0'
                    }}
                >Add to Cart</h3>
            </RectSecondary>
        </>
    );
}

export default App;