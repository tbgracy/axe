declare global {
  export type TextDocument = {
    id: string;
    title: string;
    content: string;
    shared: boolean;
    previewImagePath?: string;
    height: number;
    width: number;
  };

  export type Size = {
    name?: string;
    height: number;
    width: number;
  };

  export type User = {
    id: string;
    username: string;
    email: string;
    profilePicturePath?: string;
  };
}

export {};
