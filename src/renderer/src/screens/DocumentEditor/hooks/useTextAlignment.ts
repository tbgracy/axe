import { TextAlignment } from "../components/Toolbar";

export default function useTextAlignment() {
  let currentAlignment = "center";

  function setAlignment(alignment: TextAlignment) {
    console.log(alignment);
  }
  return { setAlignment, currentAlignment };
}
