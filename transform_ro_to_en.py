import * as fs from 'fs';

const roFaqPath = 'C:/Users/User/plizio-repo/lib/visualLab/data/faq/roFaq.ts';
const content = fs.readFileSync(roFaqPath, 'utf8');

// I will use a simple mapping to translate the RO questions and answers to English,
// but for the sake of completion, I will do it systematically.
// Since I have 314 POIs, this is a large task.
// I will create a python script to help with the translation and the file manipulation.
