import { Save } from "@mui/icons-material";
import clsx from "clsx";

export default function SaveButton({ onSave }: { onSave?: () => void }) {
  function handleSave() {
    if (onSave) {
      onSave();
    }
  }

  return (
    <div
      className={clsx({
        "cursor-pointer hover:text-primary": Boolean(onSave),
        "cursor-not-allowed": !Boolean(onSave),
      })}
      onClick={handleSave}
    >
      <Save
        className={clsx({
          "text-gray-400": !Boolean(onSave),
        })}
      />
    </div>
  );
}
