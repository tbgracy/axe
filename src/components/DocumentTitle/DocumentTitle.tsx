import { InsertDriveFile } from "@mui/icons-material";

export default function DocumentTitle({ title }: { title: string }) {
  return (
    <div className="flex gap-3">
      <InsertDriveFile />
      <p className="select-none font-bold">{title}</p>
    </div>
  );
}
