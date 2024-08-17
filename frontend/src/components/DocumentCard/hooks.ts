import { useEffect, useState } from "react";

export function useMenuOpen(menuRef: React.RefObject<HTMLDivElement>) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    window.document.addEventListener("mousedown", handleClickOutside);

    return () =>
      window.document.removeEventListener("mousedown", handleClickOutside);
  });

  function handleClick() {
    setOpen(!open);
  }

  return { handleClick, open, setOpen };
}
