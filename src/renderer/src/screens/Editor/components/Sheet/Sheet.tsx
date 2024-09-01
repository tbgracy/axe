import { ReactNode, useContext } from "react";

import EditorContext from "../../context";

type SheetProps = {
  children: ReactNode;
  document: TextDocument;
};

export default function Sheet({ document, children }: SheetProps) {
  const editor = useContext(EditorContext);
  return (
    <div
      className="bg-white shadow-lg border p-20 mx-auto"
      onClick={() => editor?.commands.focus()}
      style={{
        width: `${document.width}mm`,
        height: `${document.height}mm`,
      }}
    >
      {children}
    </div>
  );
}
