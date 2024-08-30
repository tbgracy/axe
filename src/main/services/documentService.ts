import { PrismaClient } from "@prisma/client";

export default class DocumentService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getDocuments(): Promise<TextDocument[]> {
    const documents = await this.prisma.textDocument.findMany();
    return documents;
  }

  async createNewDocument(
    title: string,
    height: number,
    width: number,
  ): Promise<TextDocument> {
    const document = await this.prisma.textDocument.create({
      data: {
        title,
        content: "",
        height,
        width,
      },
    });
    return document;
  }
}
