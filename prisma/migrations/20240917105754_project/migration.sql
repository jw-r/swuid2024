-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('UX', 'DF', 'BX');

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ProjectType" NOT NULL,
    "order" INTEGER NOT NULL,
    "teamName" TEXT,
    "description" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DesignerToProject" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DesignerToProject_AB_unique" ON "_DesignerToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_DesignerToProject_B_index" ON "_DesignerToProject"("B");

-- AddForeignKey
ALTER TABLE "_DesignerToProject" ADD CONSTRAINT "_DesignerToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Designer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DesignerToProject" ADD CONSTRAINT "_DesignerToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
