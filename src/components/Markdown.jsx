import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Markdown = () => {
  const [md, setMd] = useState('## Markdown preview');
  return (
    <div>
      <div className="markdown">
        <div className="result scrollbar scoll-handle">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
        </div>
        <textarea
          className="input scrollbar scoll-handle"
          placeholder="Markdown text here..."
          onChange={(e) => setMd(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Markdown;
