/*
  Warnings:

  - You are about to drop the column `fullName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `github` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `linkedin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `twitter` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `zip` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "fullName",
DROP COLUMN "github",
DROP COLUMN "linkedin",
DROP COLUMN "twitter",
DROP COLUMN "zip",
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "githubUrl" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "linkedinUrl" TEXT,
ADD COLUMN     "postalCode" TEXT,
ADD COLUMN     "twitterUrl" TEXT;

-- CreateTable
CREATE TABLE "WorkStylePreference" (
    "id" TEXT NOT NULL,
    "workStyle" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "WorkStylePreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoleOfInterest" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "RoleOfInterest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WorkStylePreference" ADD CONSTRAINT "WorkStylePreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoleOfInterest" ADD CONSTRAINT "RoleOfInterest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
