const descContent = `
      hu: "Galway, amelyet gyakran Írország kulturális szívének is neveznek, festői környezetben fekszik az Atlanti-óceán partján, a Corrib folyó torkolatánál.",
      de: "Galway, oft als das kulturelle Herz Irlands bezeichnet..."
`;
const huMatch = descContent.match(/"?hu"?\s*:\s*(["'])([\s\S]*?(?<!\\))\1/);
console.log("huMatch", huMatch ? huMatch[2].substring(0, 20) : null);
