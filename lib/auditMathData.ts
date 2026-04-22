
import fs from 'fs';
import path from 'path';

const baseDir = path.join(process.cwd(), 'data', 'mathematics');

function auditFile(filePath: string) {
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let modified = false;

  content.tasks.forEach((task: any, index: number) => {
    // 1. Audit Correct Index
    if (task.type === 'multiple-choice') {
      if (task.correct < 0 || task.correct >= task.options.length) {
        console.error(`Invalid correct index in ${filePath} at task ${task.id}`);
        // Default fix
        task.correct = 0;
        modified = true;
      }
    }

    // 2. Add Typing support for MathDefender-like games (convert some MCQs to calculation)
    if (task.difficulty === 'hard' && task.type === 'multiple-choice' && Math.random() > 0.7) {
        task.type = 'calculation';
        delete task.options;
        modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    console.log(`Fixed ${filePath}`);
  }
}

function walkDir(dir: string) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith('.json')) {
      auditFile(fullPath);
    }
  });
}

walkDir(baseDir);
console.log('Audit complete.');
