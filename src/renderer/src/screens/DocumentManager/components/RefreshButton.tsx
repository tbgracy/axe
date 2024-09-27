import { Cached } from "@mui/icons-material";

export default function RefreshButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col dark:text-lightGrey hover:bg-gray-200 dark:hover:bg-opacity-10 py-2 px-4 rounded-[20px] items-center cursor-pointer"
    >
      <Cached fontSize="large" />
      <p>Rafraîchir</p>
    </div>
  );
}
