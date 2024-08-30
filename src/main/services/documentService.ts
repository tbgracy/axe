import { PrismaClient } from "@prisma/client";

export default class DocumentService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getDocuments(): Promise<Result<TextDocument[]>> {
    const documents = await this.prisma.textDocument.findMany();
    return {
      success: true,
      data: documents,
    };
  }

  async createNewDocument(
    title: string,
    height: number,
    width: number
  ): Promise<Result<TextDocument>> {
    const document = await this.prisma.textDocument.create({
      data: {
        title,
        content: "",
        height,
        width,
      },
    });
    return {
      success: true,
      data: document,
    };
  }
}
