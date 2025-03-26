import { JSX, ReactNode } from 'react';
import styles from './Typography.module.scss';
import { getStyles } from '../../lib';

interface typographyProps extends Omit<JSX.IntrinsicAttributes, 'ref'> {
    children?: ReactNode;
    className?: string;
    tag?: 'p' | 'span' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    fontStyle?: 'normal' | 'bold' | 'italic' | 'bold-italic';
    color?: string;
}

export default function Typography(props: typographyProps) {
    const { children, className, tag = 'p', fontStyle, color, ...otherProps } = props;

    const Tag = tag;

    const additional = [
        fontStyle && styles[fontStyle],
        className,
    ]

    return <Tag className={getStyles(styles.typography, {}, additional)} style={{ color }} {...otherProps}>
        {children}
    </Tag>
}