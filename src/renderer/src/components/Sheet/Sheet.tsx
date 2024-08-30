import EditorContext from "../../screens/Editor/context";
import { ReactNode, useContext } from "react";

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
