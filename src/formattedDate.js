export function formattedDate(dateString) {
            const dateObject = new Date(dateString);

            if (isNaN(dateObject)) {
                return "Invalid Date";
            }

            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            const dayOfWeek = days[dateObject.getDay()];
            const month = months[dateObject.getMonth()];
            const day = dateObject.getDate();

            return `${dayOfWeek}, ${month} ${day}`;
}