import { TextAlignment } from "../components/Toolbar";

export default function useTextAlignment() {
  let currentAlignment = "center";

  function setAlignment(alignment: TextAlignment) {}
  return { setAlignment, currentAlignment };
}
