import prisma from "../prisma/client";
import DocumentService from "./documentService";

const service = new DocumentService(prisma);

export { service };
