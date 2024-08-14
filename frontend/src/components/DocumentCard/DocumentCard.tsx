import clsx from "clsx";
import { TextDocument } from "../../types";
import { MoreVert, Launch, Share, Delete } from "@mui/icons-material";
import { useState } from "react";

function Menu() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="absolute right-1 top-2 cursor-pointer">
      <div onClick={handleClick}>
        <MoreVert />
      </div>
      {open && (
        <ul className="absolute bg-white w-44 drop-shadow-md rounded-[10px] p-4 space-y-4 right-2 top-6">
          <li className="flex gap-2">
            <Launch /> Ouvrir
          </li>
          <li className="flex gap-2">
            <Share />
            <label htmlFor="share" className="cursor-pointer mr-auto">Partager</label>
            <input id="share" type="checkbox" />
          </li>
          <li className="text-red flex gap-2">
            <Delete />
            Supprimer
          </li>
        </ul>
      )}
    </div>
  );
}

export default function DocumentCard({ document }: { document: TextDocument }) {
  return (
    <article className="bg-white relative w-[223px] h-[290px] rounded-[20px] border border-[#d8d8d8]">
      <Menu />
      <img src={document.previewImagePath} />
      <div className="bg-gradient-to-t from-[#737373] via-* absolute w-full bottom-0 h-[74px] rounded-b-[20px]">
        <h2 className="absolute text-white bottom-4 left-6 text-sm font-bold">
          {document.title}
          <div
            className={clsx({
              "bg-blue size-2 rounded-full absolute -right-3 top-0":
                document.shared,
            })}
          ></div>
        </h2>
      </div>
    </article>
  );
}
