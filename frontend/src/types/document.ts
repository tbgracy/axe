export type TextDocument = {
    id: string;
    title: string;
    content: string;
    shared: boolean;
    previewImagePath?: string;
    size: Size;
}

export type Size = {
    id: string;
    name: string;
    width: number;
    height: number;
}