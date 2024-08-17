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
    <div className="flex items-center bg-white text-sm p-2 gap-4">
      <p>
        Page : {currentPage}/{pageCount}
      </p>
      <p>Mots : {wordCount}</p>
    </div>
  );
}
