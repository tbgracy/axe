import { clsx } from "clsx";
import { Redo, Undo } from "@mui/icons-material";

import Toolbar from "../Toolbar";
import UserRow from "../UserRow";
import DocumentTitle from "../DocumentTitle";
import SaveButton from "./components/SaveButton";

export type HeaderProps = {
  users: User[];
  document: TextDocument;
  onSave?: () => void;
  onUndo?: () => void;
  onRedo?: () => void;
};

export default function Header({
  users,
  document,
  onSave,
  onRedo,
  onUndo,
}: HeaderProps) {
  return (
    <div className="bg-white w-full p-4 space-y-4 relative border-b">
      <div className="flex items-center gap-4">
        <DocumentTitle title={document.title} />
        <div className="flex gap-1">
          <div
            className={clsx({
              "cursor-pointer hover:text-primary": onUndo !== undefined,
              "cursor-not-allowed text-gray-400": onUndo === undefined,
            })}
            onClick={onUndo}
          >
            <Undo />
          </div>
          <div
            className={clsx({
              "cursor-pointer hover:text-primary": onRedo !== undefined,
              "cursor-not-allowed text-gray-400": onRedo === undefined,
            })}
            onClick={onRedo}
          >
            <Redo />
          </div>
        </div>
        <SaveButton onSave={onSave} />
        <UserRow users={users} />
      </div>
      <div className="">
        <Toolbar document={document} />
      </div>
    </div>
  );
}
