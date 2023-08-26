-- AlterTable
ALTER TABLE "Certification" ADD COLUMN     "certficate" TEXT;

-- AlterTable
ALTER TABLE "Degree" ADD COLUMN     "degreeCertficate" TEXT,
ADD COLUMN     "ecaCertificate" TEXT,
ADD COLUMN     "marksheet" TEXT,
ADD COLUMN     "thesis" TEXT;

-- AlterTable
ALTER TABLE "WorkExperience" ADD COLUMN     "proofOfEmployment" TEXT;
