/*
  Warnings:

  - You are about to drop the `Size` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `sizeId` on the `TextDocument` table. All the data in the column will be lost.
  - Added the required column `height` to the `TextDocument` table without a default value. This is not possible if the table is not empty.
  - Added the required column `width` to the `TextDocument` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Size";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TextDocument" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "shared" BOOLEAN NOT NULL DEFAULT true,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL
);
INSERT INTO "new_TextDocument" ("content", "id", "shared", "title") SELECT "content", "id", "shared", "title" FROM "TextDocument";
DROP TABLE "TextDocument";
ALTER TABLE "new_TextDocument" RENAME TO "TextDocument";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
