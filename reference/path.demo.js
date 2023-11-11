const path = require("path");

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// just base
console.log(path.parse(__filename).base);

// Concatenate paths
// output /directoryname/test/hello.html
// put correct delimiter for us
console.log(path.join(__dirname, "test", "hello.html"));
