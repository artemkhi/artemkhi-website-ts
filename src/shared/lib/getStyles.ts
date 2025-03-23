export default function getStyles(
    style: string,
    mode: object,
    additional: (string | undefined)[],
) {
    const modeStyles = Object.entries(mode)
        .filter(([_, value]) => Boolean(value))
        .map(([key]) => key);

    return [style, ...modeStyles, ...additional].join(' ');
}