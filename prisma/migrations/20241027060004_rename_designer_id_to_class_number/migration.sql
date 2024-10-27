/*
  Warnings:

  - You are about to drop the column `designerId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the `Designer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DesignerToProject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_designerId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_projectId_fkey";

-- DropForeignKey
ALTER TABLE "_DesignerToProject" DROP CONSTRAINT "_DesignerToProject_A_fkey";

-- DropForeignKey
ALTER TABLE "_DesignerToProject" DROP CONSTRAINT "_DesignerToProject_B_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "designerId",
ADD COLUMN     "classNumber" TEXT;

-- DropTable
DROP TABLE "Designer";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "_DesignerToProject";

-- DropEnum
DROP TYPE "ProjectType";
