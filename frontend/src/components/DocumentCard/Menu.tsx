import { MoreVert, Launch, Share, Delete } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { DocumentCardProps } from "./DocumentCard";

export default function Menu({
  document,
  onDelete,
  onOpen,
  onShare,
}: DocumentCardProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  const menuItemClass = "flex gap-2 hover:bg-gray-200 p-2 rounded-[10px]";

  return (
    <div className="absolute right-1 top-2 cursor-pointer" ref={menuRef}>
      <div onClick={handleClick}>
        <MoreVert />
      </div>
      {open && (
        <ul className="absolute bg-white w-44 drop-shadow-md rounded-[10px] p-4 space-y-4 right-2 top-6">
          <li className={menuItemClass} onClick={onOpen}>
            <Launch /> Ouvrir
          </li>
          <li className={menuItemClass} onClick={onShare}>
            <Share />
            <label htmlFor="share" className="cursor-pointer mr-auto">
              Partager
            </label>
            <input
              id="share"
              type="checkbox"
              checked={document.shared}
              onClick={(e) => e.preventDefault()}
              className="cursor-pointer"
            />
          </li>
          <li className={`${menuItemClass} text-warning`} onClick={onDelete}>
            <Delete />
            Supprimer
          </li>
        </ul>
      )}
    </div>
  );
}
