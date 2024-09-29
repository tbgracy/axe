import { RenderElementProps } from "slate-react";

export default function Element({
  attributes,
  children,
  element,
}: RenderElementProps) {
  return (
    <p {...attributes} style={{ textAlign: element.align }}>
      {children}
    </p>
  );
}
