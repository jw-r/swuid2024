-- CreateTable
CREATE TABLE "Designer" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "avatar" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "classNumber" INTEGER NOT NULL,
    "fields" TEXT NOT NULL,
    "englishName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "instagram" TEXT,
    "behance" TEXT,
    "thought" TEXT NOT NULL,

    CONSTRAINT "Designer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Designer_email_key" ON "Designer"("email");
