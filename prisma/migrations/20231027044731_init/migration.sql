/*
  Warnings:

  - You are about to drop the column `img` on the `Curso` table. All the data in the column will be lost.
  - Added the required column `image` to the `Curso` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Curso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Curso" ("createdAt", "description", "id", "title") SELECT "createdAt", "description", "id", "title" FROM "Curso";
DROP TABLE "Curso";
ALTER TABLE "new_Curso" RENAME TO "Curso";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
