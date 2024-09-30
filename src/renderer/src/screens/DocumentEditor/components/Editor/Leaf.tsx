import { RenderLeafProps } from "slate-react";

export default function Leaf({ attributes, children, leaf }: RenderLeafProps) {
  return (
    <span
      {...attributes}
      style={{
        fontWeight: leaf.bold ? "bold" : undefined,
        fontStyle: leaf.italic ? "italic" : "normal",
        fontFamily: leaf.fontFamily,
        textDecoration: leaf.underline ? "underline" : "none",
        color: leaf.color ? leaf.color : undefined,
      }}
    >
      {children}
    </span>
  );
}
