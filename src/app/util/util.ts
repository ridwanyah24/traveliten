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


export function formatDateTime(dateTimeString : string) {
    // Parse the date string into a Date object
    const date = new Date(dateTimeString);
  
    // Get the day of the week, day of the month, and month
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    const dayOfWeek = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
  
    // Format the date as 'Day, DD Mon'
    const formattedDate = `${dayOfWeek}, ${day} ${month}`;
  
    return formattedDate;
  }

  export function convertSecondsToHoursMinutes(seconds: number) {
    // Calculate total minutes
    const totalMinutes = Math.floor(seconds / 60);
    
    // Hours from total minutes
    const hours = Math.floor(totalMinutes / 60);
    
    // Remaining minutes after extracting hours
    const minutes = totalMinutes % 60;

    // Format the result as a string
    return `${hours}h ${minutes}m`;
}