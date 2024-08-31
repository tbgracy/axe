import { InsertDriveFile } from "@mui/icons-material";

export default function DocumentTitle({ title }: { title: string }) {
  return (
    <div className="flex gap-3">
      <InsertDriveFile />
      <p className="font-bold cursor-text">{title}</p>
    </div>
  );
}
