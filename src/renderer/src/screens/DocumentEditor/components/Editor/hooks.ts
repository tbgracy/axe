import * as Y from "yjs";
import { withReact } from "slate-react";
import { WebsocketProvider } from "y-websocket";
import { useState, useEffect, useMemo } from "react";
import { withYHistory, withYjs, YjsEditor } from "@slate-yjs/core";
import { Descendant, createEditor, Editor, Transforms } from "slate";

export function useCollaboration(hostUrl: string, roomName: string) {
  const [connected, setConnected] = useState(false);
  const [sharedType, setSharedType] = useState<Y.XmlText>();
  const [provider, setProvider] = useState<WebsocketProvider>();

  useEffect(() => {
    const yDoc = new Y.Doc();
    const sharedDoc = yDoc.get("slate", Y.XmlText);
    const yProvider = new WebsocketProvider(
      hostUrl!.replace("http", "ws").replace("3000", "1234"),
      roomName,
      yDoc
    );

    yProvider.on("sync", setConnected);
    setSharedType(sharedDoc);
    setProvider(yProvider);

    return () => {
      yDoc.destroy();
      yProvider.off("sync", setConnected);
      yProvider.destroy();
    };
  }, []);

  return { connected, sharedType, provider };
}

export function useEditor(sharedType: Y.XmlText, initialContent: string) {
  let initialValue: Descendant[];

  try {
    initialValue = JSON.parse(initialContent);
  } catch {
    initialValue = [
      {
        type: "paragraph",
        children: [{ text: "" }],
      },
    ];
  }

  const editor = useMemo(() => {
    const e = withReact(withYHistory(withYjs(createEditor(), sharedType)));

    const { normalizeNode } = e;
    e.normalizeNode = (entry) => {
      const [node] = entry;
      if (!Editor.isEditor(node) || node.children.length > 0) {
        return normalizeNode(entry);
      }
      Transforms.insertNodes(editor, initialValue, { at: [0] });
    };

    return e;
  }, []);

  useEffect(() => {
    YjsEditor.connect(editor);
    return () => YjsEditor.disconnect(editor);
  }, [editor]);

  return { editor, initialValue };
}
