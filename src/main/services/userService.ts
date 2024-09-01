import { PrismaClient } from "@prisma/client";
import { User as UserModel } from "@prisma/client";

export default class UserService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  _serialize(user: UserModel): User {
    return {
      id: user.id,
      username: user.username,
      profilePicturePath: user.profilPicturePath ?? undefined,
    };
  }

  async getCurrentUser(): Promise<Result<User>> {
    try {
      const user = await this.prisma.user.findFirstOrThrow();
      return {
        success: true,
        data: this._serialize(user),
      };
    } catch (err) {
      return {
        success: false,
        message: `${err}`,
      };
    }
  }

  async create(newUser: User): Promise<Result<User>> {
    try {
      const user = await this.prisma.user.create({
        data: {
          ...newUser,
        },
      });
      return {
        success: true,
        data: this._serialize(user),
      };
    } catch (err) {
      return {
        success: false,
        message: `${err}`,
      };
    }
  }

  async delete(user?: User): Promise<Result<void>> {
    try {
      if (!user) {
        user = (await this.getCurrentUser()).data;
      }
      await this.prisma.user.delete({
        where: {
          id: user!.id,
        },
      });
      return {
        success: true,
      };
    } catch (err) {
      return {
        success: false,
        message: `${err}`,
      };
    }
  }
}
