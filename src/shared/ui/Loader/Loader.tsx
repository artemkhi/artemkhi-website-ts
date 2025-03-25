// import { LoaderPinwheel } from "lucide-react";
import styles from './Loader.module.scss';

export default function Loader() {
    return <div className={styles.loaderPlace}>
        {/* <LoaderPinwheel className={styles.loader}/> */}
        <div className={styles.loader}/>
    </div>
}