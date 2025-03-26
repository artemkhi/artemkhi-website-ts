import { ReactNode } from "react";
import styles from './Main.module.scss';

interface mainProps {
    children: ReactNode;
}

export default function Main({ children }: mainProps) {
    return <main className={styles.main}>
        {children}
    </main>
}