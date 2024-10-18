import { RenderElementProps } from "slate-react";
import Image from "./Image";

export default function Element({
  attributes,
  children,
  element,
}: RenderElementProps) {
  switch (element.type) {
    case "image":
      return (
        <Image attributes={attributes} children={children} element={element} />
      );
    case "heading-1":
      return (
        <h1 {...attributes} style={{ textAlign: element.align }}>
          {children}
        </h1>
      );
    case "heading-2":
      return (
        <h2 {...attributes} style={{ textAlign: element.align }}>
          {children}
        </h2>
      );
    case "heading-3":
      return (
        <h3 {...attributes} style={{ textAlign: element.align }}>
          {children}
        </h3>
      );
    case "heading-4":
      return (
        <h4 {...attributes} style={{ textAlign: element.align }}>
          {children}
        </h4>
      );
    case "list":
      return <ul {...attributes}>{children}</ul>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    default:
      return (
        <p {...attributes} style={{ textAlign: element.align }}>
          {children}
        </p>
      );
  }
}
