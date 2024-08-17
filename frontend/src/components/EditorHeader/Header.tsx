import { CloudDone, Redo, Undo } from "@mui/icons-material";
import DocumentTitle from "../DocumentTitle";
import Toolbar from "../Toolbar";
import UserRow from "../UserRow";
import { User } from "../../types";

type HeaderProps = {
  users: User[];
  document: Document;
};

export default function Header({ users, document }: HeaderProps) {
  return (
    <div className="bg-white w-full p-4 space-y-4 h-[110px] mb-[55px] relative">
      <div className="flex items-center gap-2">
        <DocumentTitle title={document.title} />
        <Undo />
        <Redo />
        <CloudDone className="mr-auto" />
        <UserRow users={users} />
      </div>
      <div className="">
        <Toolbar />
      </div>
    </div>
  );
}
