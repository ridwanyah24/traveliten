export const formatDateToYYYYMMDD = (dateString: string | Date): string | null => {
    if (!dateString) return null; // Handle empty or invalid date strings

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return null; // Handle invalid date formats

    // Get the components of the date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0'); // Days start from 1

    // Return formatted date in yyyy-mm-dd
    return `${year}-${month}-${day}`;
};
