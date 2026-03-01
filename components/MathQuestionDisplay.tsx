'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pencil, ChevronUp } from 'lucide-react';
import DraftPanel from './draft/DraftPanel';

interface ExtendedMathQuestion {
  question: string;
  correctAnswer: number;
  options: number[];
  topic: string;
  isWordProblem: boolean;
  // New optional fields for rich content
  type?: 'text' | 'geometry' | 'table' | 'diagram' | 'calculation';
  imageData?: {
    type: 'svg' | 'url';
    content: string; // SVG as string or URL
    width?: number;
    height?: number;
  };
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
    fillableRows?: number[]; // Which rows are fillable
  };
  diagramData?: {
    type: 'bar' | 'pie' | 'line';
    data: Array<{ label: string; value: number; color?: string }>;
    title?: string;
  };
}

interface MathQuestionDisplayProps {
  question: ExtendedMathQuestion;
  selectedAnswer: number | null;
  onSelectAnswer: (optionIndex: number) => void;
  showResult?: boolean;
  isCorrect?: boolean;
  useTextInput?: boolean;
  onTextAnswer?: (answer: string) => void;
  /** Test ID for draft state persistence */
  testId?: string;
  /** Question ID for draft state persistence */
  questionId?: string;
}

// SVG Geometry: Rect with dimensions
function GeometryRect({ width, height, label }: { width: number; height: number; label?: string }) {
  return (
    <svg viewBox="0 0 300 200" className="w-full max-w-md mx-auto my-4 border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
      {/* Rectangle */}
      <rect x="50" y="40" width={width * 1.5} height={height * 1.5} fill="none" stroke="#3b82f6" strokeWidth="2" />

      {/* Width label */}
      <text x={50 + width * 0.75} y="170" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="bold">
        {width} cm
      </text>

      {/* Height label */}
      <text x="25" y={40 + height * 0.75} textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="bold">
        {height} cm
      </text>

      {/* Question text */}
      {label && (
        <text x="150" y="20" textAnchor="middle" fill="#64748b" fontSize="12">
          {label}
        </text>
      )}
    </svg>
  );
}

// SVG Bar Chart
function BarChart({ data, title }: { data: Array<{ label: string; value: number; color?: string }>; title?: string }) {
  const maxValue = Math.max(...data.map(d => d.value));
  const barWidth = 300 / (data.length + 1);

  return (
    <svg viewBox="0 0 400 300" className="w-full max-w-md mx-auto my-4 border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
      {/* Title */}
      {title && (
        <text x="200" y="30" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="bold">
          {title}
        </text>
      )}

      {/* Axes */}
      <line x1="50" y1="250" x2="380" y2="250" stroke="#334155" strokeWidth="2" />
      <line x1="50" y1="250" x2="50" y2="50" stroke="#334155" strokeWidth="2" />

      {/* Bars */}
      {data.map((item, idx) => {
        const barHeight = (item.value / maxValue) * 180;
        const x = 70 + idx * barWidth;
        const y = 250 - barHeight;

        return (
          <g key={idx}>
            {/* Bar */}
            <rect
              x={x}
              y={y}
              width={barWidth - 10}
              height={barHeight}
              fill={item.color || `hsl(${idx * 60}, 70%, 50%)`}
              opacity="0.8"
            />
            {/* Label */}
            <text x={x + (barWidth - 10) / 2} y="270" textAnchor="middle" fill="#334155" fontSize="12">
              {item.label}
            </text>
            {/* Value */}
            <text x={x + (barWidth - 10) / 2} y={y - 5} textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">
              {item.value}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// Table Display
function TableDisplay({ data }: { data: { headers: string[]; rows: (string | number)[][] } }) {
  return (
    <div className="my-4 overflow-x-auto bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
      <table className="w-full text-gray-800 text-sm">
        <thead>
          <tr className="border-b-2 border-gray-300">
            {data.headers.map((header, idx) => (
              <th key={idx} className="px-4 py-2 text-left font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIdx) => (
            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-gray-100/50' : ''}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-2 border-r border-gray-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MathQuestionDisplay({
  question,
  selectedAnswer,
  onSelectAnswer,
  showResult = false,
  isCorrect = false,
  useTextInput = false,
  onTextAnswer,
  testId = "test",
  questionId = "q0",
}: MathQuestionDisplayProps) {
  const [draftOpen, setDraftOpen] = useState(false);
  const [textAnswer, setTextAnswer] = useState('');

  return (
      <motion.div
        className="p-0 bg-transparent border-none shadow-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Question Header */}
        <div className="mb-4 pb-0 border-none flex items-start justify-between gap-4">
          <h3 className="text-lg md:text-xl font-black text-gray-800 flex-1">{question.question}</h3>

          {/* Draft toggle button */}
          <motion.button
            onClick={() => setDraftOpen((v) => !v)}
            className={`flex-shrink-0 p-2.5 rounded-lg transition-all ${
              draftOpen
                ? "bg-amber-100 border border-amber-400 text-amber-700"
                : "bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-600"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={draftOpen ? "Entwurf ausblenden" : "Entwurf anzeigen"}
          >
            {draftOpen ? <ChevronUp size={20} /> : <Pencil size={20} />}
          </motion.button>
        </div>

        {/* Inline Draft Panel - relative position, no overlay, no z-index */}
        <div
          className={draftOpen ? "mb-6 relative" : "hidden"}
          style={{ isolation: "auto" }}
        >
          <DraftPanel testId={testId} questionId={questionId} />
        </div>

      {/* Geometry Diagram */}
      {question.type === 'geometry' && question.imageData && (
        <div className="my-6">
          {question.imageData.type === 'svg' && question.imageData.content.includes('svg') ? (
            <div dangerouslySetInnerHTML={{ __html: question.imageData.content }} className="mx-auto" />
          ) : (
            <GeometryRect width={12} height={5} label="Számítsd ki a területet!" />
          )}
        </div>
      )}

      {/* Bar Chart Diagram */}
      {question.type === 'diagram' && question.diagramData && question.diagramData.type === 'bar' && (
        <div className="my-6">
          <BarChart data={question.diagramData.data} title={question.diagramData.title} />
        </div>
      )}

      {/* Table */}
      {question.type === 'table' && question.tableData && (
        <div className="my-6">
          <TableDisplay data={question.tableData} />
        </div>
      )}

      {/* Answer Input */}
      {useTextInput ? (
        <div className="mt-4 space-y-3">
          <input
            type="number"
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && textAnswer && onTextAnswer) {
                onTextAnswer(textAnswer);
                setTextAnswer('');
              }
            }}
            placeholder="Antwort eingeben"
            className="w-full px-3 py-2 bg-transparent border-b-2 border-gray-400 text-gray-800 placeholder-gray-500 focus:border-blue-600 focus:ring-0 outline-none transition-all font-mono text-base"
            style={{
              backgroundColor: 'transparent',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              borderBottom: '2px solid #a0aec0',
              fontFamily: 'monospace',
              padding: '8px 4px'
            }}
            autoFocus
          />

          {/* Result Feedback for text input */}
          {showResult && (
            <motion.div
              className={`mt-2 p-3 rounded-lg border-2 font-bold text-center text-sm ${
                isCorrect ? 'bg-green-50 border-green-500 text-green-700' : 'bg-red-50 border-red-500 text-red-700'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {isCorrect ? '✅ Richtig!' : '❌ Falsch - Richtige Antwort: ' + question.correctAnswer}
            </motion.div>
          )}
        </div>
      ) : (
        <>
          {/* Multiple Choice Options */}
          <div className="space-y-3 mt-8">
            {question.options.map((option, idx) => (
              <motion.button
                key={idx}
                onClick={() => onSelectAnswer(idx)}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left font-bold text-gray-800 ${
                  selectedAnswer === idx
                    ? isCorrect
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : showResult && idx === question.correctAnswer
                      ? 'border-green-500 bg-green-50/50'
                      : 'border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === idx
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedAnswer === idx && <div className="w-3 h-3 bg-white rounded-full" />}
                  </div>
                  <span>{option}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </>
      )}

        {/* Result Feedback */}
        {showResult && !useTextInput && (
          <motion.div
            className={`mt-6 p-4 rounded-lg border-2 font-bold text-center ${
              isCorrect ? 'bg-green-50 border-green-500 text-green-700' : 'bg-red-50 border-red-500 text-red-700'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {isCorrect ? '✅ Richtig!' : '❌ Falsch - Richtige Antwort: ' + question.correctAnswer}
          </motion.div>
        )}
      </motion.div>
  );
}
