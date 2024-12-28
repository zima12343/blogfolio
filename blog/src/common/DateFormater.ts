export const DateFormat = (date: string) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const parseDate = date.split('-');
    if (parseDate && parseDate.length !== 3) {
        return 'April 20, 2021';
    }
    
    return `${months[parseInt(parseDate[1]) - 1]} ${parseDate[2]}, ${parseDate[0]}`;
}