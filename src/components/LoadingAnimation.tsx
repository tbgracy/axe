import Lottie from "react-lottie";
import animationData from "../assets/lotties/loading-animation.json";

type LoadingAnimationProps = {
  height?: number;
  width?: number;
};

export default function LoadingAnimation({
  height = 150,
  width = 150,
}: LoadingAnimationProps) {
  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData,
      }}
      isClickToPauseDisabled
      height={height}
      width={width}
      style={{
        cursor: "default",
      }}
    />
  );
}
