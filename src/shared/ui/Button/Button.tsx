import { ReactNode } from "react";
import styles from './Button.module.scss';
import { getStyles } from "../../lib";

interface basicButtonProps {
    children: ReactNode | undefined;
    className: string | undefined;
    underline: boolean | undefined;
    loading: boolean | undefined;
    fullWidth: boolean | undefined;
}

interface defaultButtonProps extends basicButtonProps {
    variant: 'default';
    linesOnHover: boolean | string;
}

interface otherButtonProps extends basicButtonProps {
    variant: 'recommended' | 'transparent';
    linesOnHover?: never;
}

type buttonProps = defaultButtonProps | otherButtonProps;

export default function Button(props: buttonProps) {
    const { children, className, variant='default', underline, loading, fullWidth, ...otherProps } = props;

    let linesOnHover;
    if (variant === 'default') {
        linesOnHover = (props as defaultButtonProps).linesOnHover ?? true;
    }

    const variantMap = {
        'default': styles.variantDefault,
        'recommended': styles.variantRecommended,
        'transparent': styles.variantTransparent,
    }

    const mode = {
        [styles.underline]: underline,
        [styles.linesOnHover]: linesOnHover,
    }

    const additional = [
        variantMap[variant],
        className,
    ].filter(item => item !== undefined);

    return <button
        className={getStyles(styles.button, mode, additional)}
        disabled={loading}
        style={{ backgroundImage: linesOnHover && typeof linesOnHover === 'string' ? linesOnHover : 'var(--gradient-rays)' }}
        {...otherProps}
    >
        {children}
    </button>
}