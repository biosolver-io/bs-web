/*
  Warnings:

  - You are about to drop the column `certificate` on the `Accomplishment` table. All the data in the column will be lost.
  - You are about to drop the column `identifier` on the `Accomplishment` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Accomplishment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Accomplishment" DROP COLUMN "certificate",
DROP COLUMN "identifier",
DROP COLUMN "name",
ADD COLUMN     "category" TEXT,
ADD COLUMN     "details" TEXT,
ADD COLUMN     "documentUrl" TEXT,
ADD COLUMN     "objective" TEXT,
ADD COLUMN     "publisher" TEXT,
ADD COLUMN     "status" TEXT,
ADD COLUMN     "type" TEXT;
