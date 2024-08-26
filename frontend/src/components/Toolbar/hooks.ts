
export function usePrint() {
  function handlePrint() {}
  return { handlePrint };
}

export function useDocumentTools() {}

export function useTextFormat() {
  function formatBold() {}

  function formatItalic() {}

  function formatUnderline() {}

  return { formatBold, formatItalic, formatUnderline };
}
