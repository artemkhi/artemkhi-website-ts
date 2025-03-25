import { ReactNode } from "react";
import styles from './Block.module.scss';
import { getStyles } from "../../lib";

interface blockProps {
    children?: ReactNode;
    className?: string;
    gap?: 4 | 8 | 16 | 24 | 32 | 48 | 60;
    direction?: 'column' | 'row';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    align?: 'start' | 'center' | 'end' | 'stretch';
    wrap?: boolean;
}

export default function Block(props: blockProps) {
    const { children, className, gap, direction='column', justify, align, wrap } = props;

    const mode = {
        [styles.wrap]: wrap,
    }

    const additional = [
        styles[direction],
        justify && styles[`justify-${justify}`],
        align && styles[`align-${align}`],
        gap && styles[`gap${gap}`],
        className,
    ]

    return <section className={getStyles(styles.block, mode, additional)}>
        {children}
    </section>
}