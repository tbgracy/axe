import setupAppHandlers from "./appHandlers";
import setupDocumentsHandlers from "./documentsHandlers";
import setupImageHandlers from "./imageHandlers";
import setupUserHandlers from "./userHandlers";

export default function setupIpcHandlers() {
  setupImageHandlers();
  setupDocumentsHandlers();
  setupAppHandlers();
  setupUserHandlers();
}
