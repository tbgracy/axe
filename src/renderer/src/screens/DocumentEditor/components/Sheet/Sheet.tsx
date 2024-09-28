import { ReactNode } from "react";

type SheetProps = {
  children: ReactNode;
  onClick: () => void;
  document: TextDocument;
};

export default function Sheet({ document, onClick, children }: SheetProps) {
  return (
    <div
      className="bg-white shadow-lg border p-20 mx-auto"
      style={{
        width: `${document.width}mm`,
        height: `${document.height}mm`,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
