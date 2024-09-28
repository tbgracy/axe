type StatusbarProps = {
  wordCount: number;
};

export default function Statusbar({
  wordCount,
}: StatusbarProps) {
  return (
    <div className="flex items-center w-full bg-white text-sm p-2 gap-4 border-t">
      <p>Mots : {wordCount}</p>
    </div>
  );
}
