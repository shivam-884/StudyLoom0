// export const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "long", day: "numeric" }
//     const date = new Date(dateString)
//     const formattedDate = date.toLocaleDateString("en-US", options)
  
//     const hour = date.getHours()
//     const minutes = date.getMinutes()
//     const period = hour >= 12 ? "PM" : "AM"
//     const formattedTime = `${hour % 12}:${minutes
//       .toString()
//       .padStart(2, "0")} ${period}`
  
//     return `${formattedDate} | ${formattedTime}`
//   }
  

  export const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", options);
  
    let hour = date.getHours();
    const minutes = date.getMinutes();
    const period = hour >= 12 ? "PM" : "AM";
    
    // Adjust hour for proper 12-hour format
    if (hour === 0) {
        hour = 12; // midnight
    } else if (hour > 12) {
        hour -= 12;
    }
    
    const formattedTime = `${hour}:${minutes.toString().padStart(2, "0")} ${period}`;
  
    return `${formattedDate} | ${formattedTime}`;
}
