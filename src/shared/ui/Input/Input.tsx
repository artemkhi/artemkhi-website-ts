import { InputHTMLAttributes } from 'react';
import { getStyles } from '../../lib';
import styles from './Input.module.scss';
import Typography from '../Typography/Typography';

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string,
    error?: string | boolean;
}

export default function Input(props: inputProps) {
    const { className, label, value, onChange, error, type, placeholder } = props;

    const mode = {
        [styles.error]: Boolean(error),
    }

    return <label className={getStyles(styles.label, {}, [className])}>
        {label}
        <input className={getStyles(styles.input, mode, [])} {...{ value, onChange, type, placeholder }}/>
        <Typography className={styles.errorMessage} tag='span'>{typeof error === 'string' && error}</Typography>
    </label>
}