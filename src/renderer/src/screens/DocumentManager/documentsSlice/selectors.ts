import { RootState } from "@renderer/app/store";

export const selectDocuments = (state: RootState) => {
    const filter = state.documents.filter;
    if (Boolean(filter)) {
      return state.documents.documents.filter((d) =>
        d.title.toLocaleLowerCase().includes(filter.toLowerCase())
      );
    }
    return state.documents.documents;
  };
  
  export const selectStatus = (state: RootState) => {
    return state.documents.status;
  };