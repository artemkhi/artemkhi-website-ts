import { Main, Button } from '../../shared/ui'

export default function TestUI() {
    return <Main>
        <h1>TESTING HERE</h1>
        <Button variant='default' className="" underline={false} loading={false} fullWidth={false} linesOnHover={true}>Hello World</Button>
    </Main>
}