/*
  Warnings:

  - You are about to drop the column `link` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "link",
ADD COLUMN     "url" TEXT;
