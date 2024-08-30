import Menu from "./Menu";

export type DocumentCardProps = {
  document: TextDocument;
  onOpen: () => void;
  onShare: () => void;
  onDelete: () => void;
};

export default function DocumentCard({
  document,
  onOpen,
  onShare,
  onDelete,
}: DocumentCardProps) {
  return (
    <article className="bg-white relative w-[223px] h-[290px] rounded-[20px] border border-[#d8d8d8]">
      <Menu
        document={document}
        onOpen={onOpen}
        onShare={onShare}
        onDelete={onDelete}
      />
      <img src={document.previewImagePath} />
      <div className="bg-gradient-to-t from-[#737373] via-* absolute w-full bottom-0 h-[74px] rounded-b-[20px]">
        <h2 className="absolute text-white bottom-4 left-6 text-sm font-bold">
          {document.title}
          {document.shared && (
            <div
              title="Document partagé"
              className="bg-primary size-2 rounded-full absolute -right-3 top-0"
            ></div>
          )}
        </h2>
      </div>
    </article>
  );
}
