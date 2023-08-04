-- DropForeignKey
ALTER TABLE "Accomplishment" DROP CONSTRAINT "Accomplishment_degreeId_fkey";

-- AlterTable
ALTER TABLE "Accomplishment" ADD COLUMN     "workExperienceId" TEXT,
ALTER COLUMN "degreeId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "WorkExperience" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "level" TEXT,
    "employmentType" TEXT,
    "company" TEXT NOT NULL,
    "employerType" TEXT,
    "companyWebsite" TEXT,
    "country" TEXT,
    "stateOrCity" TEXT,
    "industry" TEXT,
    "startYear" INTEGER,
    "startMonth" INTEGER,
    "endYear" INTEGER,
    "endMonth" INTEGER,
    "ongoing" BOOLEAN DEFAULT false,
    "primaryDuties" TEXT,
    "secondaryDuties" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isTemp" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,

    CONSTRAINT "WorkExperience_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WorkExperience" ADD CONSTRAINT "WorkExperience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Accomplishment" ADD CONSTRAINT "Accomplishment_degreeId_fkey" FOREIGN KEY ("degreeId") REFERENCES "Degree"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Accomplishment" ADD CONSTRAINT "Accomplishment_workExperienceId_fkey" FOREIGN KEY ("workExperienceId") REFERENCES "WorkExperience"("id") ON DELETE SET NULL ON UPDATE CASCADE;
