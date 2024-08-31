import clsx from "clsx";
import { useRef, useState } from "react";
import { Search, Close } from "@mui/icons-material";

export default function Searchbar({
  onChange,
  disabled = false,
}: {
  onChange: (fiter: string) => void;
  disabled?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const isNotEmpty = value !== "";

  function handleClick() {
    inputRef.current?.focus();
  }

  function handleChange(e) {
    onChange(e.target.value);
    setValue(e.target.value);
  }

  function handleClear() {
    if (inputRef.current) {
      inputRef.current.value = "";
      onChange("");
      setValue("");
    }
  }

  return (
    <div
      className={clsx({
        "cursor-not-allowed *:cursor-not-allowed": disabled,
        "bg-[#f2f2f2] h-fit rounded-[20px] p-4 flex gap-2 w-full": true,
      })}
      onClick={handleClick}
    >
      <Search htmlColor="#cdcdcd" />
      <input
        type="text"
        ref={inputRef}
        disabled={disabled}
        onChange={handleChange}
        placeholder="Rechercher ..."
        className="w-full outline-none bg-[transparent]"
      />
      {isNotEmpty && (
        <div onClick={handleClear} className="cursor-pointer">
          <Close htmlColor="#cdcdcd" />
        </div>
      )}
    </div>
  );
}
