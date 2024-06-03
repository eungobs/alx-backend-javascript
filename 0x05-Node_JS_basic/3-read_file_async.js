const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      const result = data
        .trim() // Remove trailing newline if exists
        .split('\n') // Split by newline
        .map(row => row.split(',')); // Split each row by comma

      // Filter out invalid rows
      const validRows = result.filter(row => row.length >= 4);

      // Calculate number of students in each field
      const fieldCounts = {};
      validRows.forEach(row => {
        const field = row[3];
        fieldCounts[field] = (fieldCounts[field] || 0) + 1;
      });

      // Print number of students in each field
      console.log(`Number of students: ${validRows.length}`);
      Object.entries(fieldCounts).forEach(([field, count]) => {
        const studentNames = validRows
          .filter(row => row[3] === field)
          .map(row => row[0])
          .join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${studentNames}`);
      });

      resolve(result);
    });
  });
}

module.exports = countStudents;
