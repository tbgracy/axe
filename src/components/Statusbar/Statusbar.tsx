type StatusbarProps = {
  currentPage: number;
  pageCount: number;
  wordCount: number;
};

export default function Statusbar({
  currentPage,
  pageCount,
  wordCount,
}: StatusbarProps) {
  return (
    <div className="flex items-center w-full bg-white text-sm p-2 gap-4 border-t">
      <p>
        Page : {currentPage}/{pageCount}
      </p>
      <p>Mots : {wordCount}</p>
    </div>
  );
}
