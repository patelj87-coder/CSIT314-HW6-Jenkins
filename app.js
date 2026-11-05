
const fs = require('fs');

console.log('CSIT 314 Homework 6');
console.log('Node.js build completed successfully!');

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/build.txt', 'CSIT 314 HW6 - Build successful\n');
