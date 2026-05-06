const fs = require('fs');

// We will read the file line by line and just track the state.
// Actually, it's a TS file, so it's a bit hard to parse directly as JSON.
// Let's use a regex approach to find missing ones.
// A simpler way: use grep to see if 'ro: ""' or similar.
