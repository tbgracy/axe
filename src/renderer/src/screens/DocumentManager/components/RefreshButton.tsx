import { Cached } from "@mui/icons-material";

export default function RefreshButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col hover:bg-gray-200 py-2 px-4 rounded-[20px] items-center cursor-pointer"
    >
      <Cached fontSize="large" />
      <p>Rafraîchir</p>
    </div>
  );
}
