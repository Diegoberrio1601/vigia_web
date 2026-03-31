"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none 
      prose-headings:text-text-main prose-headings:font-black prose-headings:tracking-tight
      prose-p:text-text-muted prose-p:leading-relaxed prose-p:font-medium
      prose-strong:text-text-main prose-strong:font-bold
      prose-ul:list-disc prose-ul:pl-6
      prose-li:text-text-muted prose-li:font-medium
      prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-600/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic
      prose-a:text-blue-600 dark:prose-a:text-blue-500 prose-a:font-bold prose-a:no-underline hover:prose-a:underline
      prose-hr:border-border
      prose-table:border-collapse prose-table:w-full
      prose-th:bg-secondary prose-th:p-4 prose-th:text-left prose-th:border prose-th:border-border
      prose-td:p-4 prose-td:border prose-td:border-border
    ">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
