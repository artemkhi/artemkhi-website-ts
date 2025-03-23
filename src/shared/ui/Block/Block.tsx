import { ReactNode } from "react";
import styles from './Block.module.scss';

interface props {
    children: ReactNode;
}

export default function Block({ children }: props) {
    return <section className={styles.block}>
        {children}
    </section>
}