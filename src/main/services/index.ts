import prisma from "../prisma/client";
import DocumentService from "./documentService";

const repo = new DocumentService(prisma);

export { repo };
