/**
 * Test export button with options
 * Export as HTML, Text, or Print
 */

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, Printer } from 'lucide-react';
import { exportTestAsHTML, exportAsText } from '@/lib/pdfExport';

interface ExportTestButtonProps {
  testTitle: string;
  gradeLabel: string;
  questions: Array<{
    number: number;
    question: string;
    options?: string[];
    section?: string;
    maxPoints?: number;
  }>;
}

export default function ExportTestButton({
  testTitle,
  gradeLabel,
  questions,
}: ExportTestButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const config = {
    title: testTitle,
    gradeLabel: gradeLabel,
    date: new Date().toLocaleDateString('hu-HU'),
  };

  const handleExportHTML = async () => {
    setIsExporting(true);
    try {
      await exportTestAsHTML(config, questions, `${testTitle.replace(/\s+/g, '_')}.html`);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Az exportálás sikertelen volt');
    } finally {
      setIsExporting(false);
      setIsOpen(false);
    }
  };

  const handleExportText = async () => {
    setIsExporting(true);
    try {
      await exportAsText(config, questions, `${testTitle.replace(/\s+/g, '_')}.txt`);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Az exportálás sikertelen volt');
    } finally {
      setIsExporting(false);
      setIsOpen(false);
    }
  };

  const handlePrint = () => {
    window.print();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isExporting}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:opacity-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download size={18} />
        <span className="hidden sm:inline">Exportálás</span>
        {isExporting && <span className="animate-spin">⌛</span>}
      </motion.button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 right-0 bg-white border border-slate-200 rounded-lg shadow-lg p-2 z-20"
          >
            <motion.button
              onClick={handleExportHTML}
              disabled={isExporting}
              className="w-full px-4 py-2 text-left rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 text-sm font-medium text-slate-700"
              whileHover={{ x: 4 }}
            >
              <FileText size={16} className="text-blue-600" />
              HTML (Nyomtatható)
            </motion.button>

            <motion.button
              onClick={handleExportText}
              disabled={isExporting}
              className="w-full px-4 py-2 text-left rounded-lg hover:bg-green-50 transition-colors flex items-center gap-2 text-sm font-medium text-slate-700"
              whileHover={{ x: 4 }}
            >
              <FileText size={16} className="text-green-600" />
              TXT (Szöveg)
            </motion.button>

            <motion.button
              onClick={handlePrint}
              className="w-full px-4 py-2 text-left rounded-lg hover:bg-purple-50 transition-colors flex items-center gap-2 text-sm font-medium text-slate-700"
              whileHover={{ x: 4 }}
            >
              <Printer size={16} className="text-purple-600" />
              Nyomtatás
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
