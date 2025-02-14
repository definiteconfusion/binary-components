import React from 'react';
import './App.sass';
import Styles from './Styles/Styles.ts';
import { RectButton, ButtonGroup } from './Buttons/Buttons.tsx'

const App = () =>{
    return (
        <ButtonGroup
            direction="row"
            seperation="1rem"
        >
            <RectButton
                widthType="75%"
                role="primary"
            >
                <h3
                    style={{
                        lineHeight: '0'
                    }}
                >Add to Cart</h3>
            </RectButton>
            <RectButton
                widthType="75%"
                role="secondary"
            >
                <h3
                    style={{
                        lineHeight: '0'
                    }}
                >See More</h3>
            </RectButton>
        </ButtonGroup>
    );
}

export default App;