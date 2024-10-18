import clsx from "clsx";
import { RenderElementProps, useFocused, useSelected } from "slate-react";

export default function Image({
  attributes,
  children,
  element,
}: RenderElementProps) {
  const focused = useFocused();
  const selected = useSelected();

  return (
    <div {...attributes} contentEditable={false} className="relative">
      <img
        src={element.url}
        className={clsx({
          "max-h-[15rem]": true,
          "shadow-lg": focused && selected,
        })}
      />
      {children}
    </div>
  );
}
