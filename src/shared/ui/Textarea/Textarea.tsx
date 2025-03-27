import { TextareaHTMLAttributes } from "react";
import { getStyles } from "../../lib";
import styles from './Textarea.module.scss';
import Typography from "../Typography/Typography";

interface textareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    label?: string;
    required?: boolean;
    borderColor?: string;
    error?: string | boolean;
    customStyle?: object;
}

export default function Textarea(props: textareaProps) {
    const { className, label, required, borderColor, error, customStyle, ...otherProps } = props;

    const mode = {
        [styles.error]: Boolean(error),
    }

    const additional = [
        className,
    ]

    return <label className={getStyles(styles.label, mode, additional)}>
        {label}
        {label && required && ' *'}

        <textarea className={styles.textarea} style={{ borderColor: !otherProps.value ? borderColor : undefined, ...customStyle }} {...otherProps}/>

        <Typography tag="span" className={styles.errorMessage}>
            {typeof error === 'string' && error}
        </Typography>
    </label>
}