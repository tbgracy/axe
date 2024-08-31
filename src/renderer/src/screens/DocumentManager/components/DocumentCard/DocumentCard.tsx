import Menu from "./MenuComponent";

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
    <article className="bg-white relative w-[200px] h-[250px] rounded-[20px] border border-[#d8d8d8]">
      {document.shared && (
        <span
          title="Document partagé"
          className="bg-primary size-2 rounded-full absolute left-3 top-3"
        ></span>
      )}
      <Menu
        document={document}
        onOpen={onOpen}
        onShare={onShare}
        onDelete={onDelete}
      />
      <img src={document.previewImagePath} />
      <div className="bg-gradient-to-t from-[#737373] absolute w-full bottom-0 h-[74px] rounded-b-[20px]">
        <h2
          title={document.title}
          className="absolute text-white truncate right-6 bottom-4 left-6 text-sm font-bold"
        >
          {document.title}
        </h2>
      </div>
    </article>
  );
}
