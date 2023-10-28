/*
  Warnings:

  - You are about to drop the column `image` on the `Curso` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Curso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "campo" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Curso" ("campo", "createdAt", "description", "id", "title") SELECT "campo", "createdAt", "description", "id", "title" FROM "Curso";
DROP TABLE "Curso";
ALTER TABLE "new_Curso" RENAME TO "Curso";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
