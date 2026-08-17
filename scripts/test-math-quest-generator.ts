import { generateQuestProblem } from "../lib/visualLab/mathQuestProblems";

function solvePrompt(prompt: string): number {
  let match = prompt.match(/^\? \+ (\d+) = (\d+)$/);
  if (match) return Number(match[2]) - Number(match[1]);
  match = prompt.match(/^(\d+) × (\d+) ([+−]) (\d+) = \?$/);
  if (match) {
    const product = Number(match[1]) * Number(match[2]);
    return match[3] === "+" ? product + Number(match[4]) : product - Number(match[4]);
  }
  match = prompt.match(/^(\d+) ([+−×÷]) (\d+) = \?$/);
  if (match) {
    const left = Number(match[1]);
    const right = Number(match[3]);
    return match[2] === "+" ? left + right : match[2] === "−" ? left - right : match[2] === "×" ? left * right : left / right;
  }
  match = prompt.match(/^(\d+)\/(\d+) von (\d+) = \?$/);
  if (match) return Number(match[1]) / Number(match[2]) * Number(match[3]);
  match = prompt.match(/^(\d+)% von (\d+) = \?$/);
  if (match) return Number(match[1]) / 100 * Number(match[2]);
  match = prompt.match(/^(\d+)x \+ (\d+) = (\d+), x = \?$/);
  if (match) return (Number(match[3]) - Number(match[2])) / Number(match[1]);
  match = prompt.match(/^(\d+)² = \?$/);
  if (match) return Number(match[1]) ** 2;
  match = prompt.match(/^(\d+)\(x \+ (\d+)\) = (\d+), x = \?$/);
  if (match) return Number(match[3]) / Number(match[1]) - Number(match[2]);
  throw new Error(`unsupported prompt: ${prompt}`);
}

for (let grade = 1; grade <= 8; grade += 1) {
  for (let stage = 1; stage <= 25; stage += 1) {
    for (let index = 0; index < 6; index += 1) {
      const problem = generateQuestProblem(grade, stage, index, "de");
      if (!problem.prompt || !Number.isFinite(problem.answer) || problem.answer < 0) {
        throw new Error(`invalid problem: grade=${grade} stage=${stage} index=${index}`);
      }
      if (problem.options.length !== 3 || new Set(problem.options).size !== 3 || !problem.options.includes(problem.answer)) {
        throw new Error(`invalid options: grade=${grade} stage=${stage} index=${index}`);
      }
      if (Math.abs(solvePrompt(problem.prompt) - problem.answer) > 1e-9) {
        throw new Error(`wrong answer: ${problem.prompt} -> ${problem.answer}`);
      }
    }
  }
}

console.log("Math Quest generator: 1200 cases passed");
