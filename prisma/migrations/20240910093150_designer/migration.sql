/*
  Warnings:

  - Added the required column `avatar` to the `Designer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classNumber` to the `Designer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Designer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `englishName` to the `Designer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fields` to the `Designer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Designer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thought` to the `Designer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Designer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "order" INTEGER NOT NULL,
    "avatar" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "classNumber" INTEGER NOT NULL,
    "fields" TEXT NOT NULL,
    "englishName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "instagram" TEXT,
    "behance" TEXT,
    "thought" TEXT NOT NULL
);
INSERT INTO "new_Designer" ("id", "name") SELECT "id", "name" FROM "Designer";
DROP TABLE "Designer";
ALTER TABLE "new_Designer" RENAME TO "Designer";
CREATE UNIQUE INDEX "Designer_email_key" ON "Designer"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
