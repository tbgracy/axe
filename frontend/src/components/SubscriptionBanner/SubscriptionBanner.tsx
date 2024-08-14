import { Close, Launch } from "@mui/icons-material";
import Button from "../Button";
import img from "./undraw_Pay_online_re_aqe6 1.png";

export default function SubscriptionBanner({
  onClose,
  onSeeDetails,
}: {
  onClose: () => void;
  onSeeDetails: () => void;
}) {
  return (
    <div className="relative bg-primary rounded-[20px] w-[556px/2] h-[170px] p-4 flex gap-4">
      <img src={img} className="h-full" />
      <div className="flex flex-col items-end justify-between">
        <p className="font-bold text-white text-lg">
          Souscrivez à notre offre premium pour bénéficier d'une meilleure
          expérience.
        </p>
        <Button onClick={onSeeDetails} icon={<Launch htmlColor="white" />}>
          Voir plus de détails
        </Button>
      </div>
      <div
        className="absolute right-2 top-2 bg-[#d9d9d946] flex items-center justify-center rounded-full size-6 cursor-pointer"
        onClick={onClose}
      >
        <Close fontSize="small" htmlColor="white" />
      </div>
    </div>
  );
}
