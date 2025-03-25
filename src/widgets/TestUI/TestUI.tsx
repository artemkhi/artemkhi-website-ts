import { useState } from "react";
import { Block, Button, Main } from "../../shared/ui";

export default function TestUI() {
    const [state, setState] = useState(false);

    function handleClick() {
        setState(prev => !prev);
    }

    return <Main>
        <h1>TESTING HERE</h1>
        <Block gap={16} align="center">
            <Button loading={state} onClick={handleClick}>Hello World</Button>
            <Button onClick={handleClick}>Hello World</Button>
        </Block>
    </Main>
}