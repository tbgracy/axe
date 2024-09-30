import { RenderElementProps } from "slate-react";

export default function Element({
  attributes,
  children,
  element,
}: RenderElementProps) {
  switch (element.headingLevel) {
    case 1:
      return (
        <h1 {...attributes} style={{ textAlign: element.align }}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 {...attributes} style={{ textAlign: element.align }}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 {...attributes} style={{ textAlign: element.align }}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 {...attributes} style={{ textAlign: element.align }}>
          {children}
        </h4>
      );
    default:
      return (
        <p {...attributes} style={{ textAlign: element.align }}>
          {children}
        </p>
      );
  }
}
