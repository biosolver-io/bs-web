/*
  Warnings:

  - You are about to drop the column `degreeCertficate` on the `Degree` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Degree" DROP COLUMN "degreeCertficate",
ADD COLUMN     "degreeCertificate" TEXT;
