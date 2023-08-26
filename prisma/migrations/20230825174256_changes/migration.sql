/*
  Warnings:

  - You are about to drop the column `certficate` on the `Certification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Certification" DROP COLUMN "certficate",
ADD COLUMN     "certificate" TEXT;
