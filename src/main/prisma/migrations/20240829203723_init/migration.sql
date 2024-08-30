-- CreateTable
CREATE TABLE "App" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstTimeStart" BOOLEAN NOT NULL DEFAULT true,
    "darkMode" BOOLEAN NOT NULL DEFAULT false,
    "language" TEXT NOT NULL DEFAULT 'fr',
    "userId" TEXT NOT NULL,
    CONSTRAINT "App_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "creationDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "profilPicturePath" TEXT
);

-- CreateTable
CREATE TABLE "TextDocument" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "shared" BOOLEAN NOT NULL DEFAULT true,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "userId" TEXT,
    CONSTRAINT "TextDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DocumentAccess" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "assignmentDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "owner" BOOLEAN NOT NULL,
    "active" BOOLEAN NOT NULL,
    "textDocumentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "DocumentAccess_textDocumentId_fkey" FOREIGN KEY ("textDocumentId") REFERENCES "TextDocument" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DocumentAccess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
