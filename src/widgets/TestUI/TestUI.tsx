import React, { useState } from "react";
import { Button, Input, Main, Stack, Textarea, Typography } from "../../shared/ui";

export default function TestUI() {
    const [state, setState] = useState(false);
    const [text, setText] = useState('');
    const [bigText, setBigText] = useState('');

    function handleClick() {
        setState(prev => !prev);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setText(String(event.target.value));
    }

    function handleChangeForTextarea(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setBigText(String(event.target.value));
    }

    return <Main>
        <Typography fontStyle="bold-italic">TESTING</Typography>
        <Stack block gap={16} justify="center" align="center">
            <Typography tag="h1">Hello world!</Typography>
            <Input label="Hello World!" placeholder="Hellooo" value={text} onChange={handleChange}/>
            <Textarea value={bigText} onChange={handleChangeForTextarea}/>
            <Button loading={state} onClick={handleClick}>Hello World</Button>
            <Button disabled={!state} onClick={handleClick}>Hello World</Button>
        </Stack>
    </Main>
}