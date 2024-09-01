import prisma from "../prisma/client";
import AppService from "./appService";
import DocumentService from "./documentService";
import UserService from "./userService";

const appService = new AppService(prisma);
const userService = new UserService(prisma);
const documentsService = new DocumentService(prisma);

export { appService, userService, documentsService };
