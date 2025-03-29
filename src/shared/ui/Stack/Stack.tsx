import { ReactNode } from "react";
import styles from './Stack.module.scss';
import { getStyles } from "../../lib";

export interface stackProps {
    tag?: 'div' | 'section' | 'article' | 'aside' | 'nav';
    children?: ReactNode;
    className?: string;
    gap?: 4 | 8 | 16 | 24 | 32 | 48 | 60 | 'inherit';
    direction?: 'column' | 'row';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    align?: 'start' | 'center' | 'end' | 'stretch';
    wrap?: boolean;
    max?: boolean;
    block?: boolean;
}

export default function Stack(props: stackProps) {
    const { tag = 'div', children, className, gap, direction = 'column', justify, align, wrap, block } = props;

    const Tag = tag;

    const mode = {
        [styles.wrap]: wrap,
        [styles.block]: block,
    }

    const additional = [
        styles[direction],
        justify && styles[`justify-${justify}`],
        align && styles[`align-${align}`],
        gap && styles[`gap${gap}`],
        className,
    ]

    return <Tag className={getStyles(styles.stack, mode, additional)}>
        {children}
    </Tag>
}