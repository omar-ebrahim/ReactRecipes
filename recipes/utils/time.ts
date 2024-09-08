export const convertMinutesToHoursAndMinutes = (minutes: number) => {
    if (minutes < 60) return `${minutes} mins`;
    if ((minutes) === 60) return '1 hr';

    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);

    const formattedMins = `${mins === 0 ? '' : ` ${mins} mins`}`;

    if (hours > 1) return `${hours} hrs${formattedMins}`
    return `${hours} hr${formattedMins}`
}
