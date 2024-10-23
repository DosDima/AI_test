export default function (value: any): number {
    let trimValue: string = String(value).replaceAll(',', '.').trim();

    if (value.split('/').length === 2) {
        const arr = value.split('/')
        let divisible = NaN
        if (arr[0].indexOf('.') === -1) {
            divisible = parseInt(arr[0], 10);
        } else {
            divisible = parseFloat(arr[0]);
        }
        const divider = parseInt(arr[1], 10);
        if (divisible && divider) return divisible / divider;
    }

    if (value.split('n').length === 2) {
        const arr = value.split('n')
        let integer = NaN
        if (arr[0].indexOf('.') === -1) {
            integer = parseInt(arr[0], 10);
        } else {
            integer = parseFloat(arr[0]);
        }
        const degree = parseInt(arr[1], 10);
        let result = 0
        if (integer && degree) {
            for (let i = 0; i < degree; i++) {
                result += integer * integer
            }
        }
        return result;
    }

    if (trimValue[trimValue.length - 1] === '.') trimValue = trimValue.substring(0, trimValue.length - 1);

    if (trimValue.match(/^-?\d+$/)) return parseInt(trimValue, 10);

    if (trimValue.match(/^-?\d*\.\d/)) return parseFloat(trimValue);

    return parseInt(trimValue, 16) || 0;
}