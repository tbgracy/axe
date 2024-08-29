-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TextDocument" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "shared" BOOLEAN NOT NULL DEFAULT true,
    "sizeId" TEXT NOT NULL,
    CONSTRAINT "TextDocument_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TextDocument" ("content", "id", "shared", "sizeId", "title") SELECT "content", "id", "shared", "sizeId", "title" FROM "TextDocument";
DROP TABLE "TextDocument";
ALTER TABLE "new_TextDocument" RENAME TO "TextDocument";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
