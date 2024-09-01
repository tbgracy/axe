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

  async getCurrentUser(): Promise<Result<User | undefined>> {
    try {
      const user = await this.prisma.user.findFirst();
      return {
        success: true,
        data: user ? this._serialize(user) : undefined,
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
}
