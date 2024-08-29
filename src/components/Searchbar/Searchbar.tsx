import { Search } from "@mui/icons-material";
import clsx from "clsx";
import { useRef } from "react";

export default function Searchbar({
  onTyping,
  disabled = false,
}: {
  onTyping: (text: string) => void;
  disabled?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus()
  }

  return (
    <div
      className={clsx({
        "bg-[#f2f2f2] h-fit rounded-[20px] p-4 flex gap-2 w-full": true,
        "cursor-not-allowed *:cursor-not-allowed": disabled,
      })}
      onClick={handleClick}
    >
      <Search htmlColor="#cdcdcd" />
      <input
        ref={inputRef}
        disabled={disabled}
        onChange={(e) => onTyping(e.target.value)}
        type="text"
        placeholder="Rechercher ..."
        className="w-full outline-none bg-[transparent]"
      />
    </div>
  );
}
