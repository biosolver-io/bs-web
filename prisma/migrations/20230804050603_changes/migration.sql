/*
  Warnings:

  - You are about to drop the column `end` on the `Degree` table. All the data in the column will be lost.
  - You are about to drop the column `field` on the `Degree` table. All the data in the column will be lost.
  - You are about to drop the column `start` on the `Degree` table. All the data in the column will be lost.
  - Added the required column `major` to the `Degree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateOrCity` to the `Degree` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Degree" DROP COLUMN "end",
DROP COLUMN "field",
DROP COLUMN "start",
ADD COLUMN     "assessmentFormat" TEXT,
ADD COLUMN     "ecaAuthority" TEXT,
ADD COLUMN     "endMonth" INTEGER,
ADD COLUMN     "endYear" INTEGER,
ADD COLUMN     "grade" TEXT,
ADD COLUMN     "hasEca" BOOLEAN,
ADD COLUMN     "isTemp" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "major" TEXT NOT NULL,
ADD COLUMN     "startMonth" INTEGER,
ADD COLUMN     "startYear" INTEGER,
ADD COLUMN     "stateOrCity" TEXT NOT NULL,
ALTER COLUMN "ongoing" DROP NOT NULL,
ALTER COLUMN "ongoing" SET DEFAULT false;
