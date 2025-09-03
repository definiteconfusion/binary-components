import React, {useState,useEffect} from 'react';
import './App.sass';
import Styles from './Styles/Styles.ts';
import { RectButton, CapsuleButton, ButtonGroup } from './Buttons/Buttons.tsx'
import { CheckBox, Input } from './Inputs/Inputs.tsx'
import { A, Text } from './Text/Text.tsx'

const App = () =>{
    const [currName, setCurrName] = useState("Hello World");
    let inpVal = "Hello World";
    return (
        <div
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
        >
            <Text
                size="h1"
            >
                {String(currName)}
            </Text>
            <Text
                size="p"
            >
                This is a text comonent. You can find more about it <A href="#more-info">here</A>.
            </Text>
             <Input
                placeholder="Hola Mundo"
                widthType="120"
                />
            <ButtonGroup direction="row" seperation="1rem">
                <CapsuleButton
                    role="primary"
                    widthType="100"
                    onClick={() => setCurrName(inpVal)}
                >
                            <Text
                            size="h4"
                            
                            >
                                Submit
                            </Text>
                </CapsuleButton>
                <CapsuleButton
                    role="destructive"
                    widthType="100"
                    onClick={() => setCurrName(inpVal)}
                >
                    <Text
                            size="h4"
                            
                            >
                                Cancel
                            </Text>
                </CapsuleButton>
            </ButtonGroup>
        </div>
    );
}

export default App;