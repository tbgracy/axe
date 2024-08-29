/*
  Warnings:

  - You are about to drop the column `textDocumentId` on the `User` table. All the data in the column will be lost.
  - Added the required column `userId` to the `TextDocument` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TextDocument" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "shared" BOOLEAN NOT NULL DEFAULT true,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "TextDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TextDocument" ("content", "height", "id", "shared", "title", "width") SELECT "content", "height", "id", "shared", "title", "width" FROM "TextDocument";
DROP TABLE "TextDocument";
ALTER TABLE "new_TextDocument" RENAME TO "TextDocument";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "creationDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "profilPicturePath" TEXT NOT NULL
);
INSERT INTO "new_User" ("creationDate", "email", "id", "profilPicturePath", "username") SELECT "creationDate", "email", "id", "profilPicturePath", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
