import { PrismaClient } from "@prisma/client";

import path from "path";
import fs from "fs";
import findRootDir from "../utils/findRootDir";
import isDev from "../utils/isDev";

let dbPath: string;

const rootDir = findRootDir(__dirname);

if (isDev()) {
  dbPath = path.join(rootDir, "src/main/prisma/dev.db");
} else {
  const userDataPath =
    process.env.APPDATA ||
    (process.platform === "darwin"
      ? process.env.HOME + "/Library/Preferences"
      : process.env.HOME + "/.local/share");

  dbPath = path.join(userDataPath, "dev.db");

  const resourcePath = process.resourcesPath;
  const sourceDbPath = path.join(resourcePath, "dev.db");

  if (fs.existsSync(sourceDbPath)) {
    fs.copyFileSync(sourceDbPath, dbPath);
    console.log("Database copied to:", dbPath);
  } else {
    console.error("Source database not found:", sourceDbPath);
  }
}

console.log("Using database at:", dbPath);

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${dbPath}`,
    },
  },
});

export default prisma;
