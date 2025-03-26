import { ReactNode } from "react";
import styles from './Block.module.scss';
import { getStyles } from "../../lib";
import Stack, { stackProps } from "../Stack/Stack";

interface blockProps extends stackProps {
    children?: ReactNode;
    className?: string;
}

export default function Block(props: blockProps) {
    const { children, className, ...otherProps } = props;

    return <Stack tag="section" className={getStyles(styles.block, {}, [className])} {...otherProps}>
        {children}
    </Stack>
}