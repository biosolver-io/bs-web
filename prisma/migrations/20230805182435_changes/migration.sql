/*
  Warnings:

  - You are about to drop the column `website` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "website",
ADD COLUMN     "googleScholarUrl" TEXT,
ADD COLUMN     "websiteUrl" TEXT;
