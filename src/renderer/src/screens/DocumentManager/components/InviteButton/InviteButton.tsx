import { Link } from "@mui/icons-material";

export default function InviteButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col dark:text-lightGrey  dark:hover:bg-opacity-10 hover:bg-gray-200 py-2 px-4 rounded-[20px] items-center cursor-pointer"
    >
      <Link fontSize="large" />
      <p>Inviter</p>
    </div>
  );
}
