import useTextFormat from "./useTextFormat";

export default function useHotKeys() {
  const { handleFormatBold, handleFormatItalic, handleUnderline } =
    useTextFormat();

  function handleHotKeys(e: React.KeyboardEvent) {
    if (!e.ctrlKey) {
      return;
    }
    switch (e.key) {
      case "b": {
        e.preventDefault();
        handleFormatBold();
        break;
      }
      case "i": {
        e.preventDefault();
        handleFormatItalic();
        break;
      }
      case "u": {
        e.preventDefault();
        handleUnderline();
        break;
      }
    }
  }
  return handleHotKeys;
}
