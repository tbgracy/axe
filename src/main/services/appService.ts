import { App, PrismaClient } from "@prisma/client";

export default class AppService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async init(user: User): Promise<Result<App>> {
    try {
      let app = await this.prisma.app.findFirst({
        where: {
          userId: user.id,
        },
      });
      if (!app) {
        app = await this.prisma.app.create({
          data: {
            user: {
              connect: { id: user.id },
            },
          },
        });
      }
      return {
        success: true,
        data: app ?? undefined,
      };
    } catch (err) {
      return {
        success: false,
        message: `${err}`,
      };
    }
  }
}
