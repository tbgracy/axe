import { useRef } from "react";
import useMenu from "@renderer/hooks/useMenu";
import { MoreVert, Print, Info, IosShare, Delete } from "@mui/icons-material";

import { ToolbarProps } from "./Toolbar";

export default function Menu({
  onExport,
  onPrint,
  onMoreInfo,
  onDelete,
}: Pick<ToolbarProps, "onExport" | "onPrint" | "onMoreInfo" | "onDelete">) {
  const menuRef = useRef<HTMLDivElement>(null);

  const { handleClick, open, setOpen } = useMenu(menuRef);

  const menuItemClass =
    "flex gap-2 items-center hover:bg-gray-200 p-2 rounded-[10px]";

  return (
    <div className="-ml-1 relative cursor-pointer" ref={menuRef}>
      <div
        className="hover:bg-gray-200 p-1 rounded-[10px]"
        onClick={handleClick}
      >
        <MoreVert />
      </div>
      {open && (
        <ul className="absolute bg-white w-fit drop-shadow-md rounded-[10px] p-4 right-2 top-6">
          <li
            className={menuItemClass}
            onClick={() => {
              setOpen(false);
              onExport();
            }}
          >
            <IosShare />
            Exporter
          </li>
          <li
            className={menuItemClass}
            onClick={() => {
              setOpen(false);
              onPrint();
            }}
          >
            <Print />
            Imprimer
          </li>
          <li
            className={menuItemClass}
            onClick={() => {
              setOpen(false);
              onMoreInfo();
            }}
          >
            <Info />
            Informations supplémentaires
          </li>
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
        </ul>
      )}
    </div>
  );
}
