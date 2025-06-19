export function currentTime(timezone:number): string {
    const time = new Date(new Date().getTime() + timezone);

    const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    }

    return time.toLocaleString('en-US', options);
}

export function currentDate(timezone:number): string {
    const date = new Date(new Date().getTime() + timezone);

    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }

    return date.toLocaleString('en-UK', options);
}