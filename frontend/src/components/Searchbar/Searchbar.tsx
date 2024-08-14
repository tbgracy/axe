import { Search } from "@mui/icons-material";

export default function Searchbar({
  onTyping,
}: {
  onTyping: (text: string) => void;
}) {
  return (
    <div className="bg-[#f2f2f2] rounded-[20px] p-4 flex gap-2 w-full">
      <Search htmlColor="#cdcdcd" />
      <input
        onChange={(e) => onTyping(e.target.value)}
        type="text"
        placeholder="Rechercher ..."
        className="w-full outline-none bg-[transparent]"
      />
    </div>
  );
}
