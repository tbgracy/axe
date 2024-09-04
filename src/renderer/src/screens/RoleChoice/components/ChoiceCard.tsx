import { useAppSelector } from "@renderer/app/hooks";
import Button from "@renderer/components/Button";

type ChoiceCardProps = {
  illustration: string;
  cta: string;
  description: string;
  onClick: () => void;
};

export default function ChoiceCard({
  illustration,
  cta,
  description,
  onClick,
}: ChoiceCardProps) {
  const disabled = useAppSelector((state) => state.role.status) === "loading";
  return (
    <div className="flex flex-col items-center justify-end w-[20rem] gap-4">
      <img src={illustration} className="size-[15rem]" />
      <Button disabled={disabled} onClick={onClick}>
        {cta}
      </Button>
      <p className="text-sm">{description}</p>
    </div>
  );
}
