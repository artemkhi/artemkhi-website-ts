import { ReactNode } from "react";
import styles from './Main.module.scss';

interface props {
    children: ReactNode;
}

export default function Main({ children }: props) {
    return <main className={styles.main}>
        {children}
    </main>
}