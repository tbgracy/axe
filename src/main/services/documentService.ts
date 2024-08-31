import { PrismaClient } from "@prisma/client";

export default class DocumentService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getDocuments(): Promise<Result<TextDocument[]>> {
    try {
      const documents = await this.prisma.textDocument.findMany();
      return {
        success: true,
        data: documents,
      };
    } catch (err) {
      return {
        success: false,
        message: `${err}`,
      };
    }
  }

  async createNewDocument(
    title: string,
    height: number = 200,
    width: number = 200
  ): Promise<Result<TextDocument>> {
    try {
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
    } catch (err) {
      return {
        success: false,
        message: `${err}`,
      };
    }
  }

  async deleteDocument(id: string): Promise<Result<TextDocument>> {
    try {
      const deletedDocument = await this.prisma.textDocument.delete({
        where: {
          id,
        },
      });
      return {
        success: true,
        data: deletedDocument,
      };
    } catch (err) {
      return {
        success: false,
        message: `${err}`,
      };
    }
  }

  async toggleShareOf(document: TextDocument): Promise<Result<TextDocument>> {
    try {
      const updatedDocument = await this.prisma.textDocument.update({
        where: {
          id: document.id,
        },
        data: {
          shared: !document.shared,
        },
      });
      return {
        success: true,
        data: updatedDocument,
      };
    } catch (err) {
      return {
        success: false,
        message: `${err}`,
      };
    }
  }

  async openDocument(id: string): Promise<Result<TextDocument>> {
    try {
      const doc = await this.prisma.textDocument.findFirst({
        where: {
          id,
        },
      });
      return {
        success: true,
        data: doc as TextDocument,
      };
    } catch (err) {
      return {
        success: false,
        message: `${err}`,
      };
    }
  }

  async saveDocument(document: TextDocument): Promise<Result<TextDocument>> {
    try {
      const updatedDocument = await this.prisma.textDocument.update({
        where: {
          id: document.id,
        },
        data: {
          ...document,
        },
      });
      return {
        success: true,
        data: updatedDocument,
      };
    } catch (err) {
      return {
        success: false,
        message: `${err}`,
      };
    }
  }
}
