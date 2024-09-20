import { PrismaClient } from "@prisma/client";

import { is } from "@electron-toolkit/utils";
import { app } from "electron";
import path from "path";
import fs from "fs";

let dbPath: string;

function findRootDir(currentDir: string): string {
  if (fs.existsSync(path.join(currentDir, "package.json"))) {
    return currentDir;
  }
  const parentDir = path.dirname(currentDir);
  if (parentDir === currentDir) {
    throw new Error("Project root not found");
  }
  return findRootDir(parentDir);
}

const rootDir = findRootDir(__dirname);

console.log("Project root:", rootDir);

const isDev = is.dev;

if (isDev) {
  dbPath = path.join(rootDir, "src/main/prisma/dev.db");
} else {
  const userDataPath = app.getPath("userData");
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
