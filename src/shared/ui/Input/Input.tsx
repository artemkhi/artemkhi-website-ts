import { InputHTMLAttributes } from 'react';
import { getStyles } from '../../lib';
import styles from './Input.module.scss';
import Typography from '../Typography/Typography';

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string,
    required?: boolean;
    borderColor?: string;
    error?: string | boolean;
}

export default function Input(props: inputProps) {
    const { className, label, required, borderColor, error, ...otherProps } = props;

    const mode = {
        [styles.error]: Boolean(error),
    }

    return <label className={getStyles(styles.label, {}, [className])}>
        {label}{label && required && ' *'}

        <input
            className={getStyles(styles.input, mode, [])}
            style={{ boxShadow: !otherProps.value ? `inset 0px 0px 5px ${borderColor}` : undefined }}
            {...otherProps}
        />

        <Typography className={styles.errorMessage} tag='span'>{typeof error === 'string' && error}</Typography>
    </label>
}