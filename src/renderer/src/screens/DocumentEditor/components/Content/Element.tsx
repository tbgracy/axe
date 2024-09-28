import { RenderElementProps } from "slate-react";

export default function Element({
  attributes,
  children,
}: RenderElementProps) {
  return <p {...attributes}>{children}</p>;
}
