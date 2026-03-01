/**
 * PDF Export functionality for math tests
 * Converts test data to printable paper-like PDF format
 */

// Lazy import for optional feature
let jsPDFLib: any = null;

export interface PDFTestConfig {
  title: string;
  gradeLabel: string;
  date: string;
  totalPoints?: number;
  instructions?: string;
}

/**
 * Export test as HTML for printing
 */
export async function exportTestAsHTML(
  config: PDFTestConfig,
  questions: Array<{
    number: number;
    question: string;
    options?: string[];
    section?: string;
    maxPoints?: number;
  }>,
  fileName: string = 'matematika_dolgozat.html'
): Promise<void> {
  let html = `
    <!DOCTYPE html>
    <html lang="hu">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${config.title}</title>
      <style>
        * { margin: 0; padding: 0; }
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          background: white;
          padding: 0;
        }
        @page { margin: 2cm; }
        .page {
          page-break-after: always;
          padding: 2cm;
          background: white;
          background-image:
            linear-gradient(rgba(100, 116, 139, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 116, 139, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          min-height: 21cm;
        }
        .page:last-child { page-break-after: auto; }

        header {
          margin-bottom: 2cm;
          padding-bottom: 1cm;
          border-bottom: 2px solid #333;
        }
        h1 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 0.5cm;
        }
        .meta {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          margin-top: 0.5cm;
        }

        .question {
          margin-bottom: 1.5cm;
          page-break-inside: avoid;
        }
        .question-number {
          display: inline-block;
          width: 1.5cm;
          height: 1.5cm;
          line-height: 1.5cm;
          text-align: center;
          background: #333;
          color: white;
          border-radius: 50%;
          font-weight: bold;
          margin-right: 0.5cm;
          vertical-align: top;
        }
        .question-text {
          display: inline-block;
          max-width: calc(100% - 2.5cm);
          font-size: 14px;
          font-weight: 500;
        }

        .options {
          margin-left: 2.5cm;
          margin-top: 0.5cm;
        }
        .option {
          display: inline-block;
          width: 48%;
          margin: 0.3cm 1%;
          padding: 0.5cm;
          border: 1px solid #ddd;
          border-radius: 0.3cm;
          font-size: 12px;
        }

        .section-title {
          margin-top: 1.5cm;
          margin-bottom: 0.5cm;
          padding-bottom: 0.3cm;
          border-bottom: 1px dashed #999;
          font-weight: bold;
          font-size: 13px;
          color: #666;
          text-transform: uppercase;
        }

        .points {
          float: right;
          font-size: 11px;
          color: #999;
        }

        @media print {
          body { margin: 0; padding: 0; }
          .page { margin: 0; padding: 2cm; }
        }
      </style>
    </head>
    <body>
      <div class="page">
        <header>
          <h1>📐 ${config.title}</h1>
          <div class="meta">
            <span><strong>Év/Osztály:</strong> ${config.gradeLabel}</span>
            <span><strong>Dátum:</strong> ${config.date}</span>
          </div>
        </header>

        <div class="content">
          ${questions.map((q) => {
            let currentSection = '';
            return `
              ${
                q.section && q.section !== currentSection
                  ? `<div class="section-title">
                      ${q.section}
                      ${q.maxPoints ? `<span class="points">(${q.maxPoints} pont)</span>` : ''}
                    </div>`
                  : ''
              }
              <div class="question">
                <span class="question-number">${q.number}</span>
                <span class="question-text">${q.question}</span>
                ${
                  q.options
                    ? `<div class="options">
                        ${q.options
                          .map(
                            (opt) => `<div class="option">☐ ${opt}</div>`
                          )
                          .join('')}
                      </div>`
                    : '<div style="margin-left: 2.5cm; margin-top: 0.5cm; height: 2cm; border-bottom: 1px solid #ddd;"></div>'
                }
              </div>
            `;
          })}
        </div>
      </div>
    </body>
    </html>
  `;

  // Create and download
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(html));
  element.setAttribute('download', fileName);
  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

/**
 * Quick export as text file for backup
 */
export async function exportAsText(
  config: PDFTestConfig,
  questions: Array<{
    number: number;
    question: string;
    options?: string[];
    correctAnswer?: string;
  }>,
  fileName: string = 'matematika_dolgozat.txt'
): Promise<void> {
  let content = '';

  // Header
  content += `${'='.repeat(60)}\n`;
  content += `${config.title}\n`;
  content += `${config.gradeLabel}\n`;
  content += `Dátum: ${config.date}\n`;
  content += `${'='.repeat(60)}\n\n`;

  if (config.instructions) {
    content += `UTASÍTÁSOK:\n${config.instructions}\n\n`;
  }

  // Questions
  questions.forEach((q) => {
    content += `${q.number}. ${q.question}\n`;
    if (q.options) {
      q.options.forEach((opt, i) => {
        content += `   ${String.fromCharCode(97 + i)}) ${opt}\n`;
      });
    }
    content += '\n';
  });

  // Create and download file
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
  element.setAttribute('download', fileName);
  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
