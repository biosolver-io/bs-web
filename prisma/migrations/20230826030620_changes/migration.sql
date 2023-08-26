/*
  Warnings:

  - You are about to drop the column `skillId` on the `UserSkill` table. All the data in the column will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `UserSkill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserSkill" DROP COLUMN "skillId",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "type" TEXT;

-- DropTable
DROP TABLE "Skill";
