import { Search, Close } from "@mui/icons-material";
import clsx from "clsx";
import { useRef, useState } from "react";

export default function Searchbar({
  onChange,
  disabled = false,
}: {
  onChange: (fiter?: string) => void;
  disabled?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  function handleClick() {
    inputRef.current?.focus();
  }

  function handleChange(e) {
    setValue(e.target.value);
    onChange(value);
  }

  function handleClear() {
    setValue("");
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
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Rechercher ..."
        className="w-full outline-none bg-[transparent]"
      />
      {Boolean(value) && (
        <div onClick={handleClear} className="cursor-pointer">
          <Close htmlColor="#cdcdcd" />
        </div>
      )}
    </div>
  );
}
