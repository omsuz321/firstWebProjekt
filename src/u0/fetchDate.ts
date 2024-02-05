// Function to write the current date to a text file
async function writeDate(filePath: string): Promise<void> {
    // Create a new Date object to get the current date and time
    const currentDate = new Date();

    // Convert the date to a string representation
    const dateString = currentDate.toString();

    try {
        // Write the date string to the specified file
        await Deno.writeTextFile(filePath, dateString);
        console.log('Date written to file successfully!');
    } catch (err) {
        console.error('Error writing to file:', err);
    }
}

// Example usage:
const filePath = 'currentDate.txt'; // Specify the file path
writeDate(filePath); // Call the function to write the date to the file
