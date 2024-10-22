export default function (value: any): number {
    const trimValue :string = String(value).replace(/[_*?^$!@#{}()|[\]\\]/g, '').trim();
    if (trimValue.match(/^-?\d+$/)) return parseInt(trimValue, 10);
    if (trimValue.match(/^-?\d*\.\d+$/)) return parseFloat(trimValue);
    return parseInt(trimValue, 16) || 0;
}