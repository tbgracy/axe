import path from "path";
import fs from "fs";

export default function findRootDir(currentDir: string): string {
  if (fs.existsSync(path.join(currentDir, "package.json"))) {
    return currentDir;
  }
  const parentDir = path.dirname(currentDir);
  if (parentDir === currentDir) {
    throw new Error("Project root not found");
  }
  return findRootDir(parentDir);
}
