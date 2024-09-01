import setupAppHandlers from "./appHandlers";
import setupDocumentsHandlers from "./documentsHandlers";
import setupUserHandlers from "./userHandlers";

export default function setupIpcHandlers() {
  setupDocumentsHandlers();
  setupAppHandlers();
  setupUserHandlers();
}
