import { UnfoldLess, UnfoldMore } from "@mui/icons-material";

type ExpandButtonProps = {
  expanded: boolean;
  onClick: () => void;
};

export default function ExpandButton({ expanded, onClick }: ExpandButtonProps) {
  return (
    <div onClick={onClick} className="cursor-pointer absolute top-0 right-1">
      {expanded ? (
        <UnfoldLess className="rotate-90" htmlColor="white" />
      ) : (
        <UnfoldMore className="rotate-90" htmlColor="white" />
      )}
    </div>
  );
}
