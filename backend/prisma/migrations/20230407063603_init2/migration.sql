/*
  Warnings:

  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coffee" ADD COLUMN     "beanOrigin" TEXT,
ADD COLUMN     "beanType" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "roastType" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "CoffeeRating" (
    "id" TEXT NOT NULL,
    "ratingDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "flavour" TEXT NOT NULL,
    "overallRating" INTEGER NOT NULL,
    "roastDate" TIMESTAMP(3),
    "coffeeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "aromaIntensity" INTEGER NOT NULL,
    "aromaQuality" INTEGER NOT NULL,
    "aromaNotes" TEXT,
    "acidityIntensity" INTEGER NOT NULL,
    "acidityQuality" INTEGER NOT NULL,
    "acidityNotes" TEXT,
    "bodyIntensity" INTEGER NOT NULL,
    "bodyQuality" INTEGER NOT NULL,
    "bodyNotes" TEXT,
    "sweetnessIntensity" INTEGER NOT NULL,
    "sweetnessQuality" INTEGER NOT NULL,
    "sweetnessNotes" TEXT,
    "finishIntensity" INTEGER NOT NULL,
    "finishQuality" INTEGER NOT NULL,
    "finishNotes" TEXT,

    CONSTRAINT "CoffeeRating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CoffeeRating" ADD CONSTRAINT "CoffeeRating_coffeeId_fkey" FOREIGN KEY ("coffeeId") REFERENCES "Coffee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoffeeRating" ADD CONSTRAINT "CoffeeRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
