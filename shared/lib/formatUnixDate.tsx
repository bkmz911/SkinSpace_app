export function formatUnixDate(unixSeconds: number | undefined): string {
    const newUnixSeconds = unixSeconds === undefined ? 0 : unixSeconds;
    const date = new Date(newUnixSeconds * 1000); // конвертируем в миллисекунды
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // месяцы начинаются с 0
    const year = date.getUTCFullYear();
    return `${day}.${month}.${year}`;
}
