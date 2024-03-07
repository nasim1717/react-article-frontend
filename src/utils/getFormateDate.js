export const getFormateDate = (date) => {
    const inputDate = new Date(date);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    const formattedDate = inputDate.toLocaleDateString('en-US', options);
    return formattedDate;
}