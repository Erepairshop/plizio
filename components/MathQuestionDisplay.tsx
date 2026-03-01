'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pencil, ChevronUp } from 'lucide-react';
import DraftPanel from './draft/DraftPanel';

interface ExtendedMathQuestion {
  question: string;
  correctAnswer: number;
  options: number[];
  topic: string;
  isWordProblem: boolean;
  type?: 'text' | 'geometry' | 'table' | 'diagram' | 'calculation';
  imageData?: {
    type: 'svg' | 'url';
    content: string;
    width?: number;
    height?: number;
  };
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
    fillableRows?: number[];
  };
  diagramData?: {
    type: 'bar' | 'pie' | 'line';
    data: Array<{ label: string; value: number; color?: string }>;
    title?: string;
  };
}

interface MathQuestionDisplayProps {
  question: ExtendedMathQuestion;
  questionNumber?: number;
  selectedAnswer: number | null;
  onSelectAnswer: (optionIndex: number) => void;
  showResult?: boolean;
  isCorrect?: boolean;
  useTextInput?: boolean;
  onTextAnswer?: (answer: string) => void;
  testId?: string;
  questionId?: string;
}

// SVG Geometry: Rect with dimensions
function GeometryRect({ width, height, label }: { width: number; height: number; label?: string }) {
  return (
    <svg viewBox="0 0 300 180" className="w-full max-w-xs mx-auto border border-gray-200 rounded-lg p-2 bg-gray-50">
      <rect x="50" y="30" width={width * 1.5} height={height * 1.5} fill="none" stroke="#3b82f6" strokeWidth="2" />
      <text x={50 + width * 0.75} y="155" textAnchor="middle" fill="#1e293b" fontSize="13" fontWeight="bold">
        {width} cm
      </text>
      <text x="25" y={30 + height * 0.75} textAnchor="middle" fill="#1e293b" fontSize="13" fontWeight="bold">
        {height} cm
      </text>
      {label && (
        <text x="150" y="16" textAnchor="middle" fill="#64748b" fontSize="11">{label}</text>
      )}
    </svg>
  );
}

// SVG Bar Chart
function BarChart({ data, title }: { data: Array<{ label: string; value: number; color?: string }>; title?: string }) {
  const maxValue = Math.max(...data.map(d => d.value));
  const barWidth = 300 / (data.length + 1);

  return (
    <svg viewBox="0 0 400 250" className="w-full max-w-xs mx-auto border border-gray-200 rounded-lg p-2 bg-gray-50">
      {title && (
        <text x="200" y="22" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="bold">{title}</text>
      )}
      <line x1="50" y1="210" x2="380" y2="210" stroke="#334155" strokeWidth="2" />
      <line x1="50" y1="210" x2="50" y2="40" stroke="#334155" strokeWidth="2" />
      {data.map((item, idx) => {
        const barHeight = (item.value / maxValue) * 150;
        const x = 70 + idx * barWidth;
        const y = 210 - barHeight;
        return (
          <g key={idx}>
            <rect x={x} y={y} width={barWidth - 10} height={barHeight}
              fill={item.color || `hsl(${idx * 60}, 70%, 50%)`} opacity="0.8" />
            <text x={x + (barWidth - 10) / 2} y="228" textAnchor="middle" fill="#334155" fontSize="11">{item.label}</text>
            <text x={x + (barWidth - 10) / 2} y={y - 4} textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="bold">{item.value}</text>
          </g>
        );
      })}
    </svg>
  );
}

// Table Display
function TableDisplay({ data }: { data: { headers: string[]; rows: (string | number)[][] } }) {
  return (
    <div className="my-2 overflow-x-auto bg-gray-50 rounded-lg p-2 border border-gray-200">
      <table className="w-full text-gray-800 text-xs">
        <thead>
          <tr className="border-b-2 border-gray-300">
            {data.headers.map((header, idx) => (
              <th key={idx} className="px-3 py-1.5 text-left font-bold">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIdx) => (
            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-gray-100/50' : ''}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-3 py-1.5 border-r border-gray-200">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── OPTION LETTERS ────────────────────────────────────
const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export default function MathQuestionDisplay({
  question,
  questionNumber,
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
  const [textValue, setTextValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync textValue back when selectedAnswer changes (e.g., re-entering a question)
  useEffect(() => {
    if (useTextInput && selectedAnswer !== null) {
      setTextValue(String(selectedAnswer));
    }
  }, [useTextInput, selectedAnswer]);

  // Auto-submit text answer on blur or Enter
  const commitTextAnswer = () => {
    if (textValue && onTextAnswer) {
      onTextAnswer(textValue);
    }
  };

  const hasAnswer = useTextInput ? selectedAnswer !== null : selectedAnswer !== null;

  return (
    <div className="relative">
      {/* ─── COMPACT QUESTION CARD ──────────────────────── */}
      <div
        className={`rounded-xl border transition-all ${
          showResult
            ? isCorrect
              ? 'border-green-400 bg-green-50/40'
              : 'border-red-400 bg-red-50/40'
            : hasAnswer
              ? 'border-blue-300 bg-blue-50/30'
              : 'border-gray-200 bg-white'
        }`}
      >
        {/* Question text + draft toggle — single tight row */}
        <div className="flex items-start gap-2 px-3 py-2.5 sm:px-4 sm:py-3">
          {/* Question number badge */}
          {questionNumber !== undefined && (
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-800 text-white text-xs font-bold flex items-center justify-center mt-0.5">
              {questionNumber}
            </span>
          )}

          <p className="flex-1 text-sm sm:text-base font-semibold text-gray-800 leading-snug">
            {question.question}
          </p>

          {/* Draft toggle — small icon */}
          <button
            onClick={() => setDraftOpen((v) => !v)}
            className={`flex-shrink-0 p-1.5 rounded-md transition-all ${
              draftOpen
                ? "bg-amber-100 text-amber-700"
                : "text-gray-400 hover:text-amber-600 hover:bg-amber-50"
            }`}
            title={draftOpen ? "Piszkozat elrejtese" : "Piszkozat"}
          >
            {draftOpen ? <ChevronUp size={16} /> : <Pencil size={16} />}
          </button>
        </div>

        {/* Inline Draft Panel */}
        {draftOpen && (
          <div className="px-3 pb-2 sm:px-4">
            <DraftPanel testId={testId} questionId={questionId} />
          </div>
        )}

        {/* Visual content (geometry, chart, table) - compact */}
        {question.type === 'geometry' && question.imageData && (
          <div className="px-3 pb-2">
            {question.imageData.type === 'svg' && question.imageData.content.includes('svg') ? (
              <div dangerouslySetInnerHTML={{ __html: question.imageData.content }} className="mx-auto" />
            ) : (
              <GeometryRect width={12} height={5} label="Berechne die Flache!" />
            )}
          </div>
        )}
        {question.type === 'diagram' && question.diagramData && question.diagramData.type === 'bar' && (
          <div className="px-3 pb-2">
            <BarChart data={question.diagramData.data} title={question.diagramData.title} />
          </div>
        )}
        {question.type === 'table' && question.tableData && (
          <div className="px-3 pb-2">
            <TableDisplay data={question.tableData} />
          </div>
        )}

        {/* ─── ANSWER AREA ──────────────────────────────── */}
        <div className="px-3 pb-3 sm:px-4">
          {useTextInput ? (
            /* ─── Text Input — compact, NO send button ─── */
            <input
              ref={inputRef}
              type="number"
              inputMode="numeric"
              value={textValue}
              onChange={(e) => {
                setTextValue(e.target.value);
                // Immediately register the answer
                if (e.target.value && onTextAnswer) {
                  onTextAnswer(e.target.value);
                }
              }}
              onBlur={commitTextAnswer}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  commitTextAnswer();
                  inputRef.current?.blur();
                }
              }}
              placeholder="= ?"
              disabled={showResult}
              className={`w-full px-3 py-2 rounded-lg text-sm font-bold transition-all outline-none ${
                showResult
                  ? isCorrect
                    ? 'bg-green-100 border border-green-400 text-green-800'
                    : 'bg-red-100 border border-red-400 text-red-800'
                  : hasAnswer
                    ? 'bg-blue-50 border border-blue-300 text-blue-800 focus:border-blue-500'
                    : 'bg-gray-50 border border-gray-200 text-gray-800 focus:border-blue-400 focus:bg-white'
              }`}
            />
          ) : (
            /* ─── Multiple Choice — compact 2x2 grid ─── */
            <div className="grid grid-cols-2 gap-1.5">
              {question.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrectOption = showResult && idx === question.correctAnswer;
                const isWrong = showResult && isSelected && !isCorrect;

                return (
                  <button
                    key={idx}
                    onClick={() => !showResult && onSelectAnswer(idx)}
                    disabled={showResult}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-left text-sm font-semibold transition-all ${
                      isCorrectOption
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : isWrong
                          ? 'border-red-500 bg-red-50 text-red-800'
                          : isSelected
                            ? 'border-blue-500 bg-blue-50 text-blue-800'
                            : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <span className={`flex-shrink-0 w-5 h-5 rounded text-xs font-bold flex items-center justify-center ${
                      isCorrectOption
                        ? 'bg-green-500 text-white'
                        : isWrong
                          ? 'bg-red-500 text-white'
                          : isSelected
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-600'
                    }`}>
                      {OPTION_LABELS[idx]}
                    </span>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Result feedback — inline, compact */}
          {showResult && (
            <div className={`mt-1.5 px-2 py-1 rounded text-xs font-bold text-center ${
              isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {isCorrect ? 'Helyes!' : `Helyes valasz: ${question.correctAnswer}`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
