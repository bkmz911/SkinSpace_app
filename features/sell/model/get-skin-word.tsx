export function getSkinWord(count: number): string {
    const mod100 = count % 100;
    if (mod100 >= 11 && mod100 <= 19) {
        return "скинов";
    }
    const mod10 = count % 10;
    if (mod10 === 1) {
        return "скин";
    }
    if (mod10 >= 2 && mod10 <= 4) {
        return "скина";
    }
    return "скинов";
}
