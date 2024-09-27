import { useRef } from "react";
import { MoreVert, Launch, Share, Delete } from "@mui/icons-material";

import { DocumentCardProps } from "../DocumentCard";

import useMenu from "@renderer/hooks/useMenu";

export default function Menu({
  document,
  onDelete,
  onOpen,
  onShare,
}: DocumentCardProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  const { handleClick, open, setOpen } = useMenu(menuRef);

  const menuItemClass =
    "flex gap-2 hover:bg-gray-200 p-2 rounded-[10px] dark:hover:bg-opacity-10";

  return (
    <div className="absolute right-1 top-2 cursor-pointer" ref={menuRef}>
      <div onClick={handleClick}>
        <MoreVert />
      </div>
      {open && (
        <ul className="absolute bg-white w-44 drop-shadow-md rounded-[10px] p-4 space-y-4 right-2 top-6 z-10 dark:bg-darkGrey dark:text-lightGrey">
          <li
            className={menuItemClass}
            onClick={() => {
              setOpen(false);
              onOpen();
            }}
          >
            <Launch /> Ouvrir
          </li>
          {onShare && (
            <li
              className={menuItemClass}
              onClick={() => {
                setOpen(false);
                onShare();
              }}
            >
              <Share />
              <label htmlFor="share" className="cursor-pointer mr-auto">
                Partager
              </label>
              <input
                id="share"
                type="checkbox"
                checked={document.shared}
                className="cursor-pointer"
              />
            </li>
          )}
          {onDelete && (
            <li
              className={`${menuItemClass} text-warning`}
              onClick={() => {
                setOpen(false);
                onDelete();
              }}
            >
              <Delete />
              Supprimer
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
