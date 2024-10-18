import { Editor, Transforms } from "slate";

import { CustomElement } from ".";

export function insertImage(editor: Editor, url: any) {
  const text = { text: "" };
  const image = { type: "image", url, children: [text] };
  Transforms.insertNodes(editor, image as CustomElement);
  Transforms.insertNodes(editor, {
    type: "paragraph",
    children: [{ text: "" }],
  });
}

export function isImageUrl(url: string) {
  if (!url) return false;
  if (!url.startsWith("http://") || !url.startsWith("https://")) return false;
  const ext = new URL(url).pathname.split(".").pop();
  return ["png", "jpg", "jpeg"].includes(ext ?? "");
}

export function withImages(editor: Editor) {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };

  editor.insertData = (data) => {
    const text = data.getData("text/plain");
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split("/");

        if (mime === "image") {
          reader.addEventListener("load", () => {
            const url = reader.result;
            insertImage(editor, url);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
}
