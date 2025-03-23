import { ReactNode } from "react";
import styles from './Block.module.scss';
import { getStyles } from "../../lib";

interface props {
    children?: ReactNode;
    className?: string;
}

export default function Block({ children, className }: props) {
    const additional = [
        className,
    ]

    return <section className={getStyles(styles.block, {}, additional)}>
        {children}
    </section>
}