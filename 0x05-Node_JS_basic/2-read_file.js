const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf8');
  const lines = data.trim().split('\n');

  const count = lines.length - 1;
  console.log(`Number of students: ${c}`);

  const CS = [];
  const SWE = [];

  for (let i = 1; i <= c; i += 1) {
    const line = lines[i].split(',');
    const sName = line[0].trim();
    const sClass = line[3].trim();

    if (sClass === 'CS') {
      CS.push(sName);
    } else if (sClass === 'SWE') {
      SWE.push(sName);
    }
  }

  console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
  console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
};

module.exports = countStudents;
