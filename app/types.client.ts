import { Prisma } from "@prisma/client";

export type Degree = Prisma.DegreeGetPayload<{
  include: {
    accomplishments: true;
  }
}>;

export type WorkExperience = Prisma.WorkExperienceGetPayload<{
  include: {
    accomplishments: true;
  }
}>;

export type Certification = Prisma.CertificationGetPayload<{}>;

export type Accomplishment = Prisma.AccomplishmentGetPayload<{}>;

export type Skill = Prisma.UserSkillGetPayload<{}>;