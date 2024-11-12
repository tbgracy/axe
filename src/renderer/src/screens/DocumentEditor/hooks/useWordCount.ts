import { Editor, Node as SlateNode } from "slate";
import { useState } from "react";

export default function useWordCount(editor: Editor) {
  const [wordCount, setWordCount] = useState(0);

  const calculateWordCount = () => {
    const text = editor.children
      .map((node) => SlateNode.string(node))
      .join("\n");

    const words = text.match(/\b[\w'-]+\b/g);
    const count = words ? words.length : 0;
    setWordCount(count);
    return count;
  };

  return { wordCount, calculateWordCount };
}
