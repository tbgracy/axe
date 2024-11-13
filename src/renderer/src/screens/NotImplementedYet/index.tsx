// import illustration from "./undraw_loading_re_5axr.svg";
import illustration from "./undraw_under_construction_-46-pa.svg";

export default function NotImplementedYet() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <img src={illustration} alt="illustration" className="size-[300px] animate-float" />
      Cette partie de l'application est encore en construction.
    </div>
  );
}
