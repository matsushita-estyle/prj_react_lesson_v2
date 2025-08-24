'use client';

import React, { useState } from 'react';
import { LessonStep } from '@/lib/types/lesson';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface LessonContentProps {
  taskDescription?: string;
  solutionFiles?: Record<string, string>;
  steps?: LessonStep[];
  onApplyCode?: (fileName: string, code: string) => void;
  nextLessonId?: string;
}

export default function LessonContent({
  taskDescription,
  solutionFiles,
  steps,
  onApplyCode,
  nextLessonId,
}: LessonContentProps) {
  const [showSolutions, setShowSolutions] = useState<Record<number, boolean>>(
    {}
  );
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const toggleSolution = (stepIndex: number) => {
    setShowSolutions((prev) => ({ ...prev, [stepIndex]: !prev[stepIndex] }));
  };

  const renderMarkdownText = (text: string) => {
    const lines = text.trim().split('\n');
    const elements: React.ReactNode[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={i} className="mt-6 mb-4 text-2xl font-bold text-gray-900">
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        const title = line.slice(3);
        if (title.includes('ハンズオンタスク') || title.includes('課題')) {
          elements.push(
            <h2
              key={i}
              className="mt-5 mb-3 text-xl font-semibold text-green-700"
            >
              🎯 {title}
            </h2>
          );
        } else {
          elements.push(
            <h2
              key={i}
              className="mt-5 mb-3 text-xl font-semibold text-gray-800"
            >
              {title}
            </h2>
          );
        }
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="mt-4 mb-2 text-lg font-medium text-gray-700">
            {line.slice(4)}
          </h3>
        );
      } else if (line.match(/^\d+\./)) {
        const listItems = [];
        let j = i;
        while (j < lines.length && lines[j].match(/^\d+\./)) {
          listItems.push(lines[j].replace(/^\d+\.\s*/, ''));
          j++;
        }

        elements.push(
          <div
            key={i}
            className="mb-4 border-l-4 border-green-400 bg-green-50 p-4"
          >
            <h4 className="mb-2 font-medium text-green-800">実装タスク</h4>
            <ol className="space-y-2">
              {listItems.map((item, idx) => (
                <li key={idx} className="flex items-start text-green-700">
                  <span className="mr-2 font-bold">{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        );
        i = j - 1;
      } else if (line.startsWith('- ')) {
        const listItems = [];
        let j = i;
        while (j < lines.length && lines[j].startsWith('- ')) {
          listItems.push(lines[j].slice(2));
          j++;
        }

        elements.push(
          <ul key={i} className="mb-4 list-disc pl-5 text-gray-700">
            {listItems.map((item, idx) => (
              <li key={idx} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        );
        i = j - 1;
      } else if (line.trim() === '') {
        continue;
      } else {
        elements.push(
          <p key={i} className="mb-3 leading-relaxed text-gray-700">
            {line}
          </p>
        );
      }
    }

    return elements;
  };

  // stepsが存在する場合は段階的な課題表示（縦スクロール）
  if (steps && steps.length > 0) {
    return (
      <div className="prose max-w-none">
        {/* 全体の説明 */}
        {taskDescription && (
          <div className="mb-8">{renderMarkdownText(taskDescription)}</div>
        )}

        {/* 全ステップを縦に表示 */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* ステップヘッダー */}
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                  {step.stepNumber}
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h2>
              </div>

              {/* 課題内容 */}
              <div className="mb-4 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
                <p className="whitespace-pre-line text-gray-700">
                  {step.instruction}
                </p>
              </div>

              {/* 初期コード（あれば） */}
              {(step.initialCode || step.initialFiles || step.initialStepFiles) && (
                <div className="mb-4">
                  {/* 新しいinitialStepFilesを優先的に表示 */}
                  {step.initialStepFiles &&
                    Object.entries(step.initialStepFiles).map(
                      ([fileName, fileContent]) => (
                        <div key={fileName} className="mb-2">
                          <h4 className="mb-1 text-xs font-semibold text-gray-500">
                            {fileName}
                          </h4>
                          <div className="overflow-hidden rounded-lg border border-gray-300">
                            <div className="bg-gray-100 p-4">
                              <pre className="overflow-x-auto text-xs text-gray-700">
                                <code>{fileContent}</code>
                              </pre>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  
                  {/* 後方互換性のためinitialFilesもサポート */}
                  {!step.initialStepFiles && step.initialFiles &&
                    Object.entries(step.initialFiles).map(
                      ([fileName, fileContent]) => (
                        <div key={fileName} className="mb-2">
                          <h4 className="mb-1 text-xs font-semibold text-gray-500">
                            {fileName}
                          </h4>
                          <div className="overflow-hidden rounded-lg border border-gray-300">
                            <div className="bg-gray-100 p-4">
                              <pre className="overflow-x-auto text-xs text-gray-700">
                                <code>{fileContent}</code>
                              </pre>
                            </div>
                          </div>
                        </div>
                      )
                    )}

                  {/* コピー可能なコードスニペット */}
                  {step.copyableCode && (
                    <div className="mt-2">
                      {Array.isArray(step.copyableCode) ? (
                        <div className="space-y-1">
                          {step.copyableCode.map((code, idx) => {
                            const isObject =
                              typeof code === 'object' && 'label' in code;
                            const codeText = isObject ? code.code : code;
                            const label = isObject ? code.label : undefined;

                            const copyId = `${index}-${idx}`;
                            const isCopied = copiedIndex === copyId;
                            
                            return (
                              <div
                                key={idx}
                                className="relative cursor-pointer rounded border border-yellow-200 bg-yellow-50 p-2 transition-colors hover:bg-yellow-100"
                                onClick={() => {
                                  navigator.clipboard.writeText(codeText);
                                  setCopiedIndex(copyId);
                                  setTimeout(() => setCopiedIndex(null), 2000);
                                }}
                                title="クリックでコピー"
                              >
                                {isCopied && (
                                  <div className="absolute top-2 right-2 z-10 rounded bg-green-500 px-2 py-1 text-xs text-white shadow-md animate-pulse">
                                    ✓ コピーしました！
                                  </div>
                                )}
                                <div className="flex items-center gap-2">
                                  <ContentCopyIcon
                                    className={isCopied ? "text-green-500" : "text-gray-600"}
                                    fontSize="small"
                                  />
                                  <div className="flex-1">
                                    {label && (
                                      <div className="text-xs text-gray-500 mb-1">
                                        {label}
                                      </div>
                                    )}
                                    <pre className="overflow-x-auto text-xs text-gray-700 whitespace-pre-wrap break-all">
                                      <code>{codeText}</code>
                                    </pre>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div
                          className="relative cursor-pointer rounded border border-yellow-200 bg-yellow-50 p-2 transition-colors hover:bg-yellow-100"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              step.copyableCode as string
                            );
                            setCopiedIndex(`${index}-single`);
                            setTimeout(() => setCopiedIndex(null), 2000);
                          }}
                          title="クリックでコピー"
                        >
                          {copiedIndex === `${index}-single` && (
                            <div className="absolute top-2 right-2 z-10 rounded bg-green-500 px-2 py-1 text-xs text-white shadow-md animate-pulse">
                              ✓ コピーしました！
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <ContentCopyIcon
                              className={copiedIndex === `${index}-single` ? "text-green-500" : "text-gray-600"}
                              fontSize="small"
                            />
                            <div className="flex-1">
                              <pre className="overflow-x-auto text-xs text-gray-700 whitespace-pre-wrap break-all">
                                <code>{step.copyableCode}</code>
                              </pre>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* ボタンエリア */}
              <div className="flex gap-3">
                {/* 解答例ボタン */}
                <button
                  onClick={() => toggleSolution(index)}
                  className="rounded bg-green-500 px-4 py-2 text-sm text-white transition-colors hover:bg-green-600"
                >
                  {showSolutions[index] ? '解答例を隠す' : '解答例を見る'} ✅
                </button>
              </div>

              {/* 解答例表示 */}
              {showSolutions[index] && (
                <div className="mt-4">
                  {/* 複数のsolutionCodesがある場合 */}
                  {step.solutionCodes && step.solutionCodes.length > 0 ? (
                    <div className="space-y-3">
                      {step.solutionCodes.map((solution, solutionIdx) => (
                        <div key={solutionIdx} className="overflow-hidden rounded-lg border border-green-300">
                          <div className="bg-green-600 px-4 py-2 font-mono text-sm text-white">
                            {solution.label || `解答例 ${solutionIdx + 1}`}
                          </div>
                          <div className="relative bg-green-50 p-4">
                            {onApplyCode && (
                              <button
                                onClick={() => {
                                  onApplyCode(solution.solutionTargetFile, solution.code);
                                }}
                                className="absolute top-2 right-2 z-10 rounded bg-blue-500 px-3 py-2 text-xs text-white transition-colors hover:bg-blue-600"
                              >
                                {solution.solutionTargetFile}に反映 📝
                              </button>
                            )}
                            <pre className="overflow-x-auto text-xs text-gray-700">
                              <code>{solution.code}</code>
                            </pre>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* 従来の単一solutionCodeの場合（後方互換性） */
                    step.solutionCode && (
                      <div className="overflow-hidden rounded-lg border border-green-300">
                        <div className="bg-green-600 px-4 py-2 font-mono text-sm text-white">
                          解答例
                        </div>
                        <div className="relative bg-green-50 p-4">
                          {onApplyCode && (
                            <button
                              onClick={() => {
                                const fileName = step.solutionTargetFile || 'App.jsx';
                                onApplyCode(fileName, step.solutionCode!);
                              }}
                              className="absolute top-2 right-2 z-10 rounded bg-blue-500 px-3 py-2 text-xs text-white transition-colors hover:bg-blue-600"
                            >
                              コードに反映 📝
                            </button>
                          )}
                          <pre className="overflow-x-auto text-xs text-gray-700">
                            <code>{step.solutionCode}</code>
                          </pre>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 完了メッセージ */}
        <div className="mt-8 rounded-lg border-2 border-green-400 bg-green-50 px-8 py-3">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-green-800">
              🎉 お疲れ様でした！次のステップに進みましょう。
            </p>
            {nextLessonId ? (
              <a
                href={`/lessons/${nextLessonId}`}
                className="rounded bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
              >
                次のステップに進む →
              </a>
            ) : (
              <span className="text-gray-500">最後のレッスンです</span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 従来の表示方法（stepsがない場合）
  return (
    <div className="prose max-w-none">
      {taskDescription && <div>{renderMarkdownText(taskDescription)}</div>}

      {solutionFiles && Object.keys(solutionFiles).length > 0 && (
        <div className="mt-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            ✅ 解答例
          </h3>
          <div className="space-y-4">
            {Object.entries(solutionFiles).map(([fileName, fileContent]) => (
              <div
                key={fileName}
                className="overflow-hidden rounded-lg border border-green-300"
              >
                <div className="bg-green-600 px-4 py-2 font-mono text-sm text-white">
                  {fileName}
                </div>
                <div className="relative bg-green-50 p-4">
                  {onApplyCode && (
                    <button
                      onClick={() => onApplyCode(fileName, fileContent)}
                      className="absolute top-2 right-2 z-10 rounded bg-blue-500 px-3 py-1 text-xs text-white transition-colors hover:bg-blue-600"
                    >
                      コードに反映 📝
                    </button>
                  )}
                  <pre className="overflow-x-auto text-xs text-gray-700">
                    <code>{fileContent}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
